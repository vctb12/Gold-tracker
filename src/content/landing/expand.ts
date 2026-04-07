import { LandingPage } from "@/types/landing";
import { intentTemplates, IntentKey } from "./templates";

const countries = [
  { key: "usa", label: "USA", nuance: "regional premium behavior and local tax treatment" },
  { key: "uk", label: "UK", nuance: "dealer spread differences and product type effects" },
  { key: "india", label: "India", nuance: "making-charge sensitivity and demand seasonality" },
  { key: "canada", label: "Canada", nuance: "dealer inventory spread and currency overlay" },
  { key: "australia", label: "Australia", nuance: "local premiums and currency conversion effects" },
  { key: "uae", label: "UAE", nuance: "retail spread dynamics across gold souk channels" },
  { key: "singapore", label: "Singapore", nuance: "premium competition among bullion dealers" },
  { key: "germany", label: "Germany", nuance: "regional retail premium and VAT context by product" },
  { key: "france", label: "France", nuance: "retail markup variability by seller profile" },
  { key: "japan", label: "Japan", nuance: "currency-linked benchmark interpretation in JPY context" },
  { key: "brazil", label: "Brazil", nuance: "local spread variance and FX pass-through behavior" },
  { key: "mexico", label: "Mexico", nuance: "retail spread and local demand conditions" },
] as const;

const intents: IntentKey[] = [
  "today",
  "per-gram",
  "per-ounce",
  "history-1-year",
  "history-5-year",
  "spot-vs-retail",
  "alerts-guide",
  "methodology",
];

function titleCase(v: string) {
  return v.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export function buildExpandedLandingPages(): LandingPage[] {
  const pages: LandingPage[] = [];

  for (const country of countries) {
    for (const intent of intents) {
      const t = intentTemplates[intent];
      const intentLabel = titleCase(intent);

      pages.push({
        slug: `gold-price-${country.key}-${intent}`,
        title: `Gold Price ${country.label} ${intentLabel} | Reference Insights`,
        description: `Reference benchmark context for ${country.label}: ${intentLabel}, with clear retail separation.`,
        h1: `Gold Price ${country.label} — ${intentLabel}`,
        intro: `${t.intro} This page emphasizes ${country.nuance}.`,
        referenceNote:
          "Reference/spot values are benchmark context and may be delayed, cached, or fallback-labeled.",
        retailNote:
          "Retail/jewelry outcomes include premiums, making/fabrication costs, taxes, and seller spread.",
        ctaLabel: t.ctaLabel,
        ctaHref: t.ctaHref,
        sections: [
          {
            heading: t.sectionAHeading,
            body: `${t.sectionABody} In ${country.label}, interpretation should consider ${country.nuance}.`,
          },
          {
            heading: t.sectionBHeading,
            body: `${t.sectionBBody} Always separate benchmark movement from final retail checkout outcomes.`,
          },
        ],
        faqs: [
          { q: t.faq1q, a: t.faq1a },
          { q: t.faq2q, a: `${t.faq2a} This is especially relevant in ${country.label}.` },
        ],
      });
    }
  }

  return pages;
}
