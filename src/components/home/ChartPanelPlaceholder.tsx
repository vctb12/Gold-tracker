export function ChartPanelPlaceholder() {
  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="mb-4 flex flex-wrap gap-2 text-xs">
        {["1D", "1W", "1M", "3M", "1Y", "5Y", "MAX"].map((r) => (
          <button key={r} className={`rounded-full border px-3 py-1 ${r === "1M" ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-[var(--color-border)] text-[var(--color-text-muted)]"}`}>
            {r}
          </button>
        ))}
      </div>
      <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
        Interactive chart panel (Sprint 2)
      </div>
    </section>
  );
}
