import Link from "next/link";
import { landingPages } from "@/content/landing";

export default function LandingDirectoryPage() {
  return (
    <main className="py-8 space-y-6">
      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
          Gold Insights Library
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--color-text)]">
          100+ Gold Reference Landing Pages
        </h1>
        <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-3xl">
          Purpose-built pages for reference spot context, history, comparisons, and education.
          Retail/jewelry pricing remains explicitly separated from reference benchmarks.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {landingPages.map((p) => (
          <Link
            key={p.slug}
            href={`/landing/${p.slug}`}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-card)]"
          >
            <h2 className="text-sm font-semibold text-[var(--color-text)]">{p.h1}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-[var(--color-text-muted)]">
              {p.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
