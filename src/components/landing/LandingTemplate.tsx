import Link from "next/link";
import { LandingPage } from "@/types/landing";
import { LandingSection } from "./LandingSection";
import { TrustDisclosureBlock } from "./TrustDisclosureBlock";
import { FAQAccordion } from "./FAQAccordion";

export function LandingTemplate({ page }: { page: LandingPage }) {
  return (
    <main className="space-y-6 py-8">
      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
          Gold Reference Insights
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--color-text)]">{page.h1}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">{page.intro}</p>
        <div className="mt-4">
          <Link
            href={page.ctaHref}
            className="inline-flex rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black"
          >
            {page.ctaLabel}
          </Link>
        </div>
      </header>

      <TrustDisclosureBlock
        referenceNote={page.referenceNote}
        retailNote={page.retailNote}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {page.sections.map((section) => (
          <LandingSection key={section.heading} section={section} />
        ))}
      </section>

      <FAQAccordion faqs={page.faqs} />
    </main>
  );
}
