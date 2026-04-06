export function InsightRail() {
  return (
    <aside className="space-y-4">
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
        <h3 className="text-sm font-semibold text-[var(--color-text)]">Today&apos;s insight</h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">Price is in medium-volatility range; momentum mildly positive.</p>
      </div>
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
        <h3 className="text-sm font-semibold text-[var(--color-text)]">Trust note</h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">Retail/jewelry prices include premiums, making fees, and taxes.</p>
      </div>
    </aside>
  );
}
