"use client";

import { PriceRange } from "@/types/price";

const RANGES: PriceRange[] = ["6M", "1Y", "5Y", "10Y", "MAX"];

export function RangeSelector({
  value,
  onChange,
}: {
  value: PriceRange;
  onChange: (range: PriceRange) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Historical chart ranges">
      {RANGES.map((range) => {
        const active = range === value;

        return (
          <button
            key={range}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(range)}
            className={[
              "rounded-full border px-3 py-1.5 text-xs font-medium transition",
              active
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
            ].join(" ")}
          >
            {range}
          </button>
        );
      })}
    </div>
  );
}
