import { LandingPage } from "@/types/landing";

const countries = ["usa", "uk", "india", "canada", "australia", "uae", "singapore", "germany", "france", "japan"];
const intents = [
  "today",
  "per-gram",
  "per-ounce",
  "history-1-year",
  "history-5-year",
  "spot-vs-retail",
  "alerts-guide",
  "methodology"
];

function titleCase(v: string) {
  return v.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export function buildExpandedLandingPages(): LandingPage[] {
  const pages: LandingPage[] = [];

  for (const c of countries) {
    for (const intent of intents) {
      const slug = `gold-price-${c}-${intent}`;
      const country = titleCase(c);
      const intentLabel = titleCase(intent);

      pages.push({
        slug,
        title: `Gold Price ${country} ${intentLabel} | Reference Insights`,
        description: `Reference gold pricing context for ${country}: ${intentLabel}.`,
        h1: `Gold Price ${country} — ${intentLabel}`,
        intro: `Purpose-built reference page for ${country} users tracking ${intentLabel}.`,
        referenceNote: "Reference/spot values are benchmark context and may be delayed or cached.",
        retailNote: "Retail/jewelry outcomes include premiums, making fees, taxes, and seller spread.",
        ctaLabel: "Open Dashboard",
        ctaHref: "/",
        sections: [
          { heading: "Reference context", body: "Use this page for benchmark trend context and comparison." },
          { heading: "Retail interpretation", body: "Do not treat benchmark values as final checkout quotes." }
        ],
        faqs: [
          { q: "Is this retail checkout pricing?", a: "No. This is benchmark reference context." },
          { q: "Why can local prices differ?", a: "Local taxes, fees, premiums, and inventory dynamics." }
        ]
      });
    }
  }

  return pages;
}
