import Link from "next/link";
import { getRelatedPages } from "@/lib/landing/getRelatedPages";

export function RelatedLandingLinks({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPages(currentSlug, 6);

  if (!related.length) return null;

  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Related pages</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/landing/${p.slug}`}
            className="rounded-lg border border-[var(--color-border)] p-3 transition hover:border-[var(--color-accent)]"
          >
            <p className="text-sm font-medium text-[var(--color-text)]">{p.h1}</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
