export type QualityMode =
  | "LIVE"
  | "DELAYED"
  | "CACHED"
  | "FALLBACK"
  | "ESTIMATED"
  | "DERIVED";

export type PriceRange = "6M" | "1Y" | "5Y" | "10Y" | "MAX";

export type QualityFlags = {
  isDelayed: boolean;
  delayMinutes?: number;
  isEstimated: boolean;
  isDerived: boolean;
  isCached: boolean;
  cacheAgeSec?: number;
  isFallback: boolean;
  fallbackReason?: string;
};

export type Provenance = {
  sourceName: string;
  sourceInstrument: string;
  fetchedAt: string;
  asOf: string;
};

export type PricePoint = {
  ts: string;
  close: number;
  currency: "USD";
  unit: "XAU_OZ";
};

export type PriceSnapshot = {
  value: number;
  currency: "USD";
  unit: "XAU_OZ";
  change24hAbs: number;
  change24hPct: number;
  quality: QualityFlags;
  provenance: Provenance;
};
