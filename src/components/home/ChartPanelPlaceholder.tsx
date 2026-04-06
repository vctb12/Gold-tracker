"use client";

import { useMemo, useState } from "react";
import { ChartLegend } from "./ChartLegend";
import { RangeSelector } from "./RangeSelector";
import { PricePoint, PriceRange } from "@/types/price";

const LIMITS: Record<PriceRange, number | null> = {
  "6M": 6,
  "1Y": 12,
  "5Y": 60,
  "10Y": 120,
  "MAX": null,
};

export function ChartPanelPlaceholder({
  series,
}: {
  series: PricePoint[];
}) {
  const [range, setRange] = useState<PriceRange>("5Y");

  const filtered = useMemo(() => {
    const limit = LIMITS[range];
    return limit === null ? series : series.slice(-limit);
  }, [range, series]);

  const values = filtered.map((point) => point.close);
  const latest = values[values.length - 1] ?? 0;
  const low = values.length ? Math.min(...values) : 0;
  const high = values.length ? Math.max(...values) : 0;
  const first = values[0] ?? 0;
  const changePct = first ? ((latest - first) / first) * 100 : 0;

  const path = useMemo(() => {
    if (filtered.length < 2) return "";

    const width = 900;
    const height = 300;
    const paddingX = 20;
    const paddingY = 20;
    const usableWidth = width - paddingX * 2;
    const usableHeight = height - paddingY * 2;

    const min = Math.min(...filtered.map((point) => point.close));
    const max = Math.max(...filtered.map((point) => point.close));
    const xStep = usableWidth / Math.max(filtered.length - 1, 1);

    const yFor = (value: number) => {
      if (min === max) return height / 2;
      return paddingY + ((max - value) / (max - min)) * usableHeight;
    };

    return filtered
      .map((point, index) => {
        const x = paddingX + index * xStep;
        const y = yFor(point.close);
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  }, [filtered]);

  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-col gap-4 border-b border-[var(--color-border)] pb-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            Official price history
          </h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Monthly published history. No fake intraday ranges, no invented OHLC.
          </p>
        </div>

        <RangeSelector value={range} onChange={setRange} />
      </div>

      <div className="mt-5">
        <ChartLegend latest={latest} low={low} high={high} changePct={changePct} />
      </div>

      <div className="mt-5 rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(212,175,55,0.06),rgba(17,18,20,0.2))] p-4">
        <div className="relative h-[320px] w-full">
          <svg
            viewBox="0 0 900 300"
            className="h-full w-full"
            role="img"
            aria-label="Official gold price history chart"
            preserveAspectRatio="none"
          >
            {[0, 1, 2, 3].map((row) => {
              const y = 20 + row * 65;
              return (
                <line
                  key={row}
                  x1="20"
                  y1={y}
                  x2="880"
                  y2={y}
                  stroke="rgba(165,173,186,0.12)"
                  strokeDasharray="4 6"
                />
              );
            })}

            {path ? (
              <path
                d={path}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : null}
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span>{formatMonth(filtered[0]?.ts)}</span>
          <span>{formatMonth(filtered[filtered.length - 1]?.ts)}</span>
        </div>
      </div>
    </section>
  );
}

function formatMonth(ts?: string) {
  if (!ts) return "—";

  return new Date(ts).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
