import { QualityBadge } from "@/components/trust/QualityBadge";

export function RetailEstimatorPreview() {
  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Reference vs Retail estimator</h2>
        <QualityBadge mode="ESTIMATED" />
      </div>
      <p className="mt-3 text-sm text-[var(--color-text-muted)]">Estimated retail = reference spot + premium + making fee + tax.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm" placeholder="Premium %" />
        <input className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm" placeholder="Making fee" />
        <input className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm" placeholder="Tax %" />
        <button className="rounded-lg bg-[var(--color-accent)] px-3 py-2 text-sm font-medium text-black">Estimate</button>
      </div>
    </section>
  );
}
