import Link from "next/link";
import { LandingPage } from "@/types/landing";
import { LandingSection } from "./LandingSection";
import { TrustDisclosureBlock } from "./TrustDisclosureBlock";
import { FAQAccordion } from "./FAQAccordion";
import { VariantHero } from "./VariantHero";
import { inferIntentFromSlug } from "@/lib/landing/inferIntent";
import { RelatedLandingLinks } from "./RelatedLandingLinks";
import { LandingHighlights } from "./LandingHighlights";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";


export function LandingTemplate({ page }: { page: LandingPage }) {
  const intent = inferIntentFromSlug(page.slug);
  const highlights = page.highlights ?? [];

  return (
    <main className="space-y-6 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Landing", href: "/landing" }, { label: page.h1 }]} />
      <VariantHero intent={intent} h1={page.h1} intro={page.intro} />

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Action path: benchmark context → trust check → estimator/alerts/history route.
            </p>
          </div>
          <Link
            href={page.ctaHref}
            className="inline-flex rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black"
            data-cta-surface="landing-primary"
            data-cta-intent={intent}
            data-cta-slug={page.slug}
          >
            {page.ctaLabel}
          </Link>
        </div>
      </section>

      <LandingHighlights highlights={highlights} />

      <TrustDisclosureBlock
        referenceNote={page.referenceNote}
        retailNote={page.retailNote}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {page.sections.map((section) => (
          <LandingSection key={section.heading} section={section} />
        ))}
      </section>

      <FAQAccordion faqs={page.faqs} />

      <RelatedLandingLinks currentSlug={page.slug} />
    </main>
  );
}
