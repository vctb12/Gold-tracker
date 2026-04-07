import { LandingPage } from "@/types/landing";
import { INTENT_VARIANTS } from "./contentVariants";

const countries = [
  { key: "usa", label: "USA", nuance: "futures-driven sentiment and dealer premium spread" },
  { key: "uk", label: "UK", nuance: "retail spread and product tax treatment by category" },
  { key: "india", label: "India", nuance: "festival demand cycles and making-charge sensitivity" },
  { key: "canada", label: "Canada", nuance: "cross-currency quotation and inventory depth" },
  { key: "australia", label: "Australia", nuance: "regional quote timing and conversion dynamics" },
  { key: "uae", label: "UAE", nuance: "souk vs dealer spread behavior" },
  { key: "singapore", label: "Singapore", nuance: "bullion competition and premium compression windows" },
  { key: "germany", label: "Germany", nuance: "product-tax interpretation and retail quote variance" },
  { key: "france", label: "France", nuance: "regional distribution cost effects on final quotes" },
  { key: "japan", label: "Japan", nuance: "currency-volatility pass-through to local pricing" },
  { key: "brazil", label: "Brazil", nuance: "FX shock pass-through and spread asymmetry" },
  { key: "mexico", label: "Mexico", nuance: "local demand pressure and quote dispersion" },
] as const;

const intents = [
  "today",
  "per-gram",
  "per-ounce",
  "history-1-year",
  "history-5-year",
  "spot-vs-retail",
  "alerts-guide",
  "methodology",
] as const;

type IntentKey = (typeof intents)[number];

function titleCase(v: string) {
  return v.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export function buildExpandedLandingPages(): LandingPage[] {
  const pages: LandingPage[] = [];

  for (const country of countries) {
    for (const intent of intents) {
      const variant = INTENT_VARIANTS[intent];
      const intentLabel = titleCase(intent);

      pages.push({
        slug: `gold-price-${country.key}-${intent}`,
        title: `Gold Price ${country.label} ${intentLabel} | Reference Insights`,
        description: `Benchmark context for ${country.label} (${intentLabel}) with trust-first retail separation and practical interpretation guidance.`,
        h1: `Gold Price ${country.label} — ${intentLabel}`,
        intro: `${variant.introLead} Local lens: ${country.nuance}.`,
        referenceNote:
          "Reference/spot values are benchmark context and may be delayed, cached, or fallback-labeled depending on source availability.",
        retailNote:
          "Retail/jewelry outcomes include premium, making/fabrication, tax, logistics, and merchant spread.",
        ctaLabel: variant.ctaLabel,
        ctaHref: variant.ctaHref,
        highlights: variant.highlights,
        sections: variant.sections.map((section) => ({
          heading: section.heading,
          body: `${section.body} ${country.label} users should also account for ${country.nuance}.`,
        })),
        faqs: variant.faqs.map((faq, index) => ({
          q: faq.q,
          a:
            index === 2
              ? `${faq.a} This becomes especially important in ${country.label} due to ${country.nuance}.`
              : faq.a,
        })),
      });
    }
  }

  return pages;
}

export function getIntentKeys(): IntentKey[] {
  return [...intents];
}
