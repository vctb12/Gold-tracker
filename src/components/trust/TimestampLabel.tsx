export function TimestampLabel({ asOf }: { asOf: string }) {
  const d = new Date(asOf);
  return <span className="text-xs text-[var(--color-text-muted)]">As of {d.toLocaleString()}</span>;
}
