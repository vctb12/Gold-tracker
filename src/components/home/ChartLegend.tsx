export function ChartLegend({
  latest,
  low,
  high,
  changePct,
}: {
  latest: number;
  low: number;
  high: number;
  changePct: number;
}) {
  const positive = changePct >= 0;

  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <LegendItem label="Latest" value={`$${latest.toFixed(2)}`} />
      <LegendItem label="Range Low" value={`$${low.toFixed(2)}`} />
      <LegendItem label="Range High" value={`$${high.toFixed(2)}`} />
      <LegendItem
        label="Range Change"
        value={`${positive ? "+" : ""}${changePct.toFixed(2)}%`}
        tone={positive ? "positive" : "negative"}
      />
    </div>
  );
}

function LegendItem({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "positive" | "negative";
}) {
  const toneClass =
    tone === "positive"
      ? "text-emerald-300"
      : tone === "negative"
      ? "text-rose-300"
      : "text-[var(--color-text)]";

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-3">
      <div className="text-[11px] uppercase tracking-wide text-[var(--color-text-muted)]">
        {label}
      </div>
      <div className={`mt-1 text-sm font-semibold ${toneClass}`}>{value}</div>
    </div>
  );
}
