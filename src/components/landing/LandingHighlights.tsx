export function LandingHighlights({ highlights }: { highlights: string[] }) {
  if (!highlights.length) return null;

  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Why this page matters</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-3 text-sm text-[var(--color-text-muted)]"
          >
            <p className="font-medium text-[var(--color-text)]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
