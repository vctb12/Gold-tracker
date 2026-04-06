import { read, utils, SSF } from "xlsx";
import { PricePoint, PriceRange, PriceSnapshot } from "@/types/price";

const WORLD_BANK_MONTHLY_URL =
  "https://thedocs.worldbank.org/en/doc/18675f1d1639c7a34d463f59263ba0a2-0050012025/related/CMO-Historical-Data-Monthly.xlsx";

const RANGE_LIMITS: Record<PriceRange, number | null> = {
  "6M": 6,
  "1Y": 12,
  "5Y": 60,
  "10Y": 120,
  "MAX": null,
};

type Cell = string | number | Date | null;

export async function getPriceHistory(range: PriceRange = "MAX"): Promise<PricePoint[]> {
  const response = await fetch(WORLD_BANK_MONTHLY_URL, {
    next: { revalidate: 60 * 60 * 24 },
    headers: {
      Accept:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/octet-stream;q=0.9,*/*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch World Bank gold history: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const workbook = read(buffer, { type: "buffer", cellDates: true });

  const fullSeries = extractGoldSeries(workbook);

  if (!fullSeries.length) {
    throw new Error("No gold history rows were parsed from the World Bank workbook.");
  }

  const limit = RANGE_LIMITS[range];
  return limit === null ? fullSeries : fullSeries.slice(-limit);
}

export async function getLatestGoldSnapshot(): Promise<PriceSnapshot> {
  const fullSeries = await getPriceHistory("MAX");

  if (fullSeries.length < 2) {
    throw new Error("Not enough observations to build the latest snapshot.");
  }

  const latest = fullSeries[fullSeries.length - 1];
  const previous = fullSeries[fullSeries.length - 2];

  const changeAbs = latest.close - previous.close;
  const changePct = previous.close === 0 ? 0 : (changeAbs / previous.close) * 100;
  const now = new Date().toISOString();

  return {
    value: latest.close,
    currency: "USD",
    unit: "XAU_OZ",
    change24hAbs: changeAbs,
    change24hPct: changePct,
    quality: {
      isDelayed: false,
      isEstimated: false,
      isDerived: false,
      isCached: false,
      isFallback: false,
    },
    provenance: {
      sourceName: "World Bank Pink Sheet",
      sourceInstrument: "Gold monthly average of daily spot rates",
      fetchedAt: now,
      asOf: latest.ts,
    },
  };
}

function extractGoldSeries(workbook: ReturnType<typeof read>): PricePoint[] {
  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = utils.sheet_to_json<Cell[]>(sheet, {
      header: 1,
      raw: true,
      defval: null,
    });

    const columnSeries = tryColumnLayout(rows);
    if (columnSeries.length >= 12) {
      return normalizeSeries(columnSeries);
    }

    const rowSeries = tryRowLayout(rows);
    if (rowSeries.length >= 12) {
      return normalizeSeries(rowSeries);
    }
  }

  return [];
}

function tryColumnLayout(rows: Cell[][]): PricePoint[] {
  const headerRowIndex = rows.findIndex((row) =>
    row.some((cell) => typeof cell === "string" && normalizeText(cell).includes("gold"))
  );

  if (headerRowIndex < 0) return [];

  const headerRow = rows[headerRowIndex];
  const goldColIndex = headerRow.findIndex(
    (cell) =>
      typeof cell === "string" &&
      normalizeText(cell).includes("gold") &&
      !normalizeText(cell).includes("index")
  );

  if (goldColIndex < 0) return [];

  const points: PricePoint[] = [];

  for (let i = headerRowIndex + 1; i < rows.length; i += 1) {
    const row = rows[i];
    const date = parsePossibleDate(row[0]) ?? parsePossibleDate(row[1]);
    const value = toNumber(row[goldColIndex]);

    if (!date || value === null) continue;

    points.push({
      ts: date,
      close: value,
      currency: "USD",
      unit: "XAU_OZ",
    });
  }

  return points;
}

function tryRowLayout(rows: Cell[][]): PricePoint[] {
  const goldRowIndex = rows.findIndex((row) =>
    row.some(
      (cell, index) =>
        index < 3 &&
        typeof cell === "string" &&
        normalizeText(cell).includes("gold") &&
        !normalizeText(cell).includes("index")
    )
  );

  if (goldRowIndex < 0) return [];

  let bestHeaderRowIndex = -1;
  let bestScore = 0;

  for (let i = 0; i < Math.min(rows.length, 20); i += 1) {
    const score = rows[i].reduce((count, cell) => {
      return count + (parsePossibleDate(cell) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestHeaderRowIndex = i;
    }
  }

  if (bestHeaderRowIndex < 0 || bestScore < 6) return [];

  const headerRow = rows[bestHeaderRowIndex];
  const valueRow = rows[goldRowIndex];
  const points: PricePoint[] = [];

  for (let col = 0; col < Math.max(headerRow.length, valueRow.length); col += 1) {
    const date = parsePossibleDate(headerRow[col]);
    const value = toNumber(valueRow[col]);

    if (!date || value === null) continue;

    points.push({
      ts: date,
      close: value,
      currency: "USD",
      unit: "XAU_OZ",
    });
  }

  return points;
}

function normalizeSeries(series: PricePoint[]): PricePoint[] {
  const seen = new Map<string, PricePoint>();

  for (const point of series) {
    if (!Number.isFinite(point.close) || point.close <= 0) continue;
    seen.set(point.ts, point);
  }

  return [...seen.values()].sort((a, b) => {
    return new Date(a.ts).getTime() - new Date(b.ts).getTime();
  });
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function toNumber(value: Cell): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;

  if (typeof value === "string") {
    const cleaned = value.replace(/,/g, "").trim();
    if (!cleaned) return null;
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function parsePossibleDate(value: Cell): string | null {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return toMonthIso(value.getUTCFullYear(), value.getUTCMonth() + 1);
  }

  if (typeof value === "number") {
    const parsed = SSF.parse_date_code(value);
    if (parsed?.y && parsed?.m) {
      return toMonthIso(parsed.y, parsed.m);
    }
  }

  if (typeof value === "string") {
    const text = value.trim();

    const ymMatch = text.match(/^(\d{4})[-/](\d{1,2})$/);
    if (ymMatch) {
      return toMonthIso(Number(ymMatch[1]), Number(ymMatch[2]));
    }

    const ymdMatch = text.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
    if (ymdMatch) {
      return toMonthIso(Number(ymdMatch[1]), Number(ymdMatch[2]));
    }

    const imfMatch = text.match(/^(\d{4})M(\d{1,2})$/i);
    if (imfMatch) {
      return toMonthIso(Number(imfMatch[1]), Number(imfMatch[2]));
    }

    const parsed = new Date(text);
    if (!Number.isNaN(parsed.getTime())) {
      return toMonthIso(parsed.getUTCFullYear(), parsed.getUTCMonth() + 1);
    }
  }

  return null;
}

function toMonthIso(year: number, month: number): string {
  return new Date(Date.UTC(year, month - 1, 1)).toISOString();
}
