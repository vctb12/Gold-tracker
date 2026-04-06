import { LandingPage } from "@/types/landing";

const countries = [
  "usa", "uk", "india", "canada", "australia", "uae",
  "singapore", "germany", "france", "japan", "brazil", "mexico"
];

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

  for (const country of countries) {
    for (const intent of intents) {
      const countryLabel = titleCase(country);
      const intentLabel = titleCase(intent);

      pages.push({
        slug: `gold-price-${country}-${intent}`,
        title: `Gold Price ${countryLabel} ${intentLabel} | Reference Insights`,
        description: `Reference benchmark context for ${countryLabel}: ${intentLabel}.`,
        h1: `Gold Price ${countryLabel} — ${intentLabel}`,
        intro: `Purpose-built reference page for ${countryLabel} users tracking ${intentLabel}.`,
        referenceNote:
          "Reference/spot values are benchmark context and may be delayed, cached, or fallback-labeled.",
        retailNote:
          "Retail/jewelry prices are separate outcomes with premiums, making fees, taxes, and seller spread.",
        ctaLabel: intent.includes("history") ? "Open Full History" : intent === "alerts-guide" ? "Go to Alerts" : "Open Dashboard",
        ctaHref: intent.includes("history") ? "/history" : intent === "alerts-guide" ? "/alerts" : "/",
        sections: [
          {
            heading: "Reference context",
            body: "Use benchmark values for trend/context, not final checkout assumptions."
          },
          {
            heading: "Retail interpretation",
            body: "Retail outcomes include taxes, fees, fabrication/making charges, and seller margin."
          }
        ],
        faqs: [
          {
            q: "Is this retail checkout pricing?",
            a: "No. This is benchmark reference context, not final store checkout."
          },
          {
            q: "Why can local prices differ?",
            a: "Local taxes, conversion spread, premiums, and inventory conditions."
          }
        ]
      });
    }
  }

  return pages;
}
