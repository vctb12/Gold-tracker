export function SourceBadge({ sourceName, sourceInstrument }: { sourceName: string; sourceInstrument: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
      {sourceName} · {sourceInstrument}
    </span>
  );
}
