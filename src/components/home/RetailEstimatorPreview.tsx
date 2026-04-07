"use client";

import { useMemo, useState } from "react";
import { QualityBadge } from "@/components/trust/QualityBadge";

export function RetailEstimatorPreview({
  referenceSpot,
}: {
  referenceSpot: number;
}) {
  const [premiumPct, setPremiumPct] = useState("4");
  const [makingFee, setMakingFee] = useState("25");
  const [taxPct, setTaxPct] = useState("5");

  const calc = useMemo(() => {
    const premium = Number(premiumPct);
    const making = Number(makingFee);
    const tax = Number(taxPct);

    const invalid = [premium, making, tax].some(
      (v) => Number.isNaN(v) || v < 0 || v > 1000
    );

    if (invalid) return null;

    const premiumAmount = referenceSpot * (premium / 100);
    const preTax = referenceSpot + premiumAmount + making;
    const taxAmount = preTax * (tax / 100);
    const total = preTax + taxAmount;

    return {
      premium,
      making,
      tax,
      premiumAmount,
      taxAmount,
      total,
    };
  }, [makingFee, premiumPct, referenceSpot, taxPct]);

  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">
          Reference vs Retail estimator
        </h2>
        <QualityBadge mode="ESTIMATED" />
      </div>

      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
        Estimated retail = reference benchmark + premium + making fee + tax.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-xs text-[var(--color-text-muted)]">
          Premium %
          <input
            value={premiumPct}
            onChange={(e) => setPremiumPct(e.target.value)}
            inputMode="decimal"
            className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
          />
        </label>

        <label className="text-xs text-[var(--color-text-muted)]">
          Making fee (USD/oz)
          <input
            value={makingFee}
            onChange={(e) => setMakingFee(e.target.value)}
            inputMode="decimal"
            className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
          />
        </label>

        <label className="text-xs text-[var(--color-text-muted)]">
          Tax %
          <input
            value={taxPct}
            onChange={(e) => setTaxPct(e.target.value)}
            inputMode="decimal"
            className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
          />
        </label>

        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2">
          <div className="text-xs text-[var(--color-text-muted)]">Reference spot</div>
          <div className="mt-1 text-sm font-semibold text-[var(--color-text)]">
            {formatMoney(referenceSpot)}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4">
        {calc ? (
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <Row label="Premium amount" value={formatMoney(calc.premiumAmount)} />
            <Row label="Making fee" value={formatMoney(calc.making)} />
            <Row label="Tax amount" value={formatMoney(calc.taxAmount)} />
            <Row label="Estimated retail" value={formatMoney(calc.total)} strong />
          </div>
        ) : (
          <p className="text-sm text-rose-300">
            Enter valid non-negative numbers to estimate retail price.
          </p>
        )}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
        This tool provides a derived estimate for planning only. It is not a live dealer quote.
      </p>
    </section>
  );
}

function Row({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-[var(--color-border)] px-3 py-2">
      <span className="text-[var(--color-text-muted)]">{label}</span>
      <span className={strong ? "font-semibold text-[var(--color-accent)]" : "text-[var(--color-text)]"}>
        {value}
      </span>
    </div>
  );
}

function formatMoney(v: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(v);
}
