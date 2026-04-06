import { LandingPage } from "@/types/landing";
import { buildExpandedLandingPages } from "./expand";

const seedLandingPages: LandingPage[] = [
  {
    slug: "gold-price-today-usd",
    title: "Gold Price Today in USD | Reference Spot & Insights",
    description: "Track reference spot gold price in USD with clear trust labeling and historical context.",
    h1: "Gold Price Today (USD)",
    intro: "Live-style reference view for gold in USD with transparent data context.",
    referenceNote: "Reference/spot price reflects benchmark market pricing and may be delayed.",
    retailNote: "Retail/jewelry prices include premiums, making fees, taxes, and seller margins.",
    ctaLabel: "Open Market Dashboard",
    ctaHref: "/",
    sections: [
      { heading: "What this page shows", body: "A reference spot view, not direct checkout pricing." },
      { heading: "How to use it", body: "Use for trend tracking, alerts, and benchmark comparisons." }
    ],
    faqs: [
      { q: "Is this jewelry shop pricing?", a: "No. This is reference/spot context, not final retail checkout." },
      { q: "Why can this differ from dealer prices?", a: "Dealers add premiums, making charges, and taxes." }
    ]
  },
  {
    slug: "gold-price-per-gram",
    title: "Gold Price Per Gram | Reference Conversion",
    description: "Reference gold price per gram with clear distinction from retail prices.",
    h1: "Gold Price Per Gram",
    intro: "Reference conversion for gram-level pricing context.",
    referenceNote: "Derived from reference spot benchmarks and unit conversion.",
    retailNote: "Retail gram pricing may be materially higher due to fees and taxes.",
    ctaLabel: "Use Retail Estimator",
    ctaHref: "/",
    sections: [
      { heading: "Unit conversion", body: "Troy ounce reference converted into grams." },
      { heading: "Practical use", body: "Useful baseline for comparing offers and trends." }
    ],
    faqs: [
      { q: "Is this exact store price?", a: "No. Treat as benchmark reference only." },
      { q: "Can I compare countries?", a: "Yes, but include local taxes and import duties." }
    ]
  },
  {
    slug: "gold-price-per-ounce",
    title: "Gold Price Per Ounce | Reference Spot",
    description: "Reference spot gold price per troy ounce, with trust-first labeling.",
    h1: "Gold Price Per Ounce",
    intro: "The standard reference view for market participants.",
    referenceNote: "Reference spot per troy ounce may be delayed depending on data source rights.",
    retailNote: "Retail products include premiums and often fabrication costs.",
    ctaLabel: "View Price History",
    ctaHref: "/history",
    sections: [
      { heading: "Standard market unit", body: "Troy ounce is the common benchmark unit for spot." },
      { heading: "Why it matters", body: "Useful for long-term charting and market comparison." }
    ],
    faqs: [
      { q: "Is ounce same as normal ounce?", a: "Gold markets use the troy ounce standard." },
      { q: "Why is buy price higher?", a: "Premiums and operational margins are added." }
    ]
  },
  {
    slug: "gold-spot-vs-retail-price",
    title: "Gold Spot vs Retail Price | Understand the Difference",
    description: "Clear explanation of spot/reference gold price versus retail/jewelry pricing.",
    h1: "Gold Spot vs Retail Price",
    intro: "Understand what each number means before making decisions.",
    referenceNote: "Spot/reference is benchmark market pricing.",
    retailNote: "Retail is a consumer-facing final price with additional costs.",
    ctaLabel: "See Trust Labels",
    ctaHref: "/",
    sections: [
      { heading: "Spot/reference", body: "Benchmark value used for market context and analysis." },
      { heading: "Retail", body: "Final consumer price after premiums, making fees, and taxes." }
    ],
    faqs: [
      { q: "Can retail be below spot?", a: "Generally uncommon for finished products." },
      { q: "What drives the gap?", a: "Premiums, fabrication, logistics, and taxes." }
    ]
  },
  {
    slug: "gold-price-history-1-year",
    title: "Gold Price History (1 Year) | Trend View",
    description: "Reference 1-year gold trend context with clear metadata notes.",
    h1: "Gold Price History: 1 Year",
    intro: "Understand medium-term gold movement in one focused view.",
    referenceNote: "History here reflects reference benchmark series.",
    retailNote: "Retail transactions historically deviate from benchmark curves.",
    ctaLabel: "Open Full History",
    ctaHref: "/history",
    sections: [
      { heading: "Trend context", body: "Useful for medium-term momentum and drawdown review." },
      { heading: "Decision support", body: "Use together with volatility and macro context." }
    ],
    faqs: [
      { q: "Is this investment advice?", a: "No. This is informational market context." },
      { q: "Can I export data?", a: "Planned in the full history module." }
    ]
  },
  {
    slug: "gold-price-history-5-year",
    title: "Gold Price History (5 Year) | Long-Range Context",
    description: "Five-year reference history for gold, clearly separated from retail data.",
    h1: "Gold Price History: 5 Years",
    intro: "Long-range context for trend, cycles, and volatility shifts.",
    referenceNote: "Series reflects reference benchmark values.",
    retailNote: "Retail values over time can diverge from benchmark due to local costs.",
    ctaLabel: "Explore Dashboard",
    ctaHref: "/",
    sections: [
      { heading: "Long-term behavior", body: "Identify regime shifts and volatility periods." },
      { heading: "Comparison utility", body: "Useful against inflation and other assets." }
    ],
    faqs: [
      { q: "Can I compare with silver?", a: "Planned in compare module." },
      { q: "Does this include fees?", a: "No, benchmark history excludes retail fees." }
    ]
  },
  {
    slug: "gold-price-usa-reference",
    title: "Gold Price USA (Reference) | Trust-First View",
    description: "Reference view for U.S.-context gold pricing and educational disclosures.",
    h1: "Gold Price in USA (Reference)",
    intro: "A benchmark perspective for U.S. users.",
    referenceNote: "Reference benchmark may be delayed based on feed terms.",
    retailNote: "U.S. retail outcomes vary by seller premiums and taxes.",
    ctaLabel: "Check Today’s Pulse",
    ctaHref: "/",
    sections: [
      { heading: "US context", body: "Good baseline for monitoring local offer spreads." },
      { heading: "Interpretation", body: "Use benchmark for context, not exact checkout expectation." }
    ],
    faqs: [
      { q: "Is this a dealer quote?", a: "No, this is reference benchmark context." },
      { q: "Do taxes apply?", a: "Retail transactions may include jurisdiction-specific taxes." }
    ]
  },
  {
    slug: "gold-price-uk-reference",
    title: "Gold Price UK (Reference) | Spot Context",
    description: "Reference gold pricing context for UK audiences, with clear disclaimers.",
    h1: "Gold Price in UK (Reference)",
    intro: "Benchmark context for UK users tracking gold movement.",
    referenceNote: "Reference data is benchmark-oriented and may be delayed.",
    retailNote: "UK retail pricing includes dealer premiums and local costs.",
    ctaLabel: "See Price History",
    ctaHref: "/history",
    sections: [
      { heading: "Benchmark purpose", body: "Track market movement and compare periods." },
      { heading: "Retail caveat", body: "Final buy/sell prices depend on seller terms." }
    ],
    faqs: [
      { q: "Is VAT included?", a: "Retail treatment depends on product type and jurisdiction." },
      { q: "Can benchmark differ intraday?", a: "Yes, retail and benchmark can diverge intraday." }
    ]
  },
  {
    slug: "gold-price-india-reference",
    title: "Gold Price India (Reference) | Spot vs Retail Clarity",
    description: "Reference benchmark context for India with clear retail distinction.",
    h1: "Gold Price in India (Reference)",
    intro: "Use benchmark context before interpreting local retail quotes.",
    referenceNote: "Reference values are benchmark-oriented and not final shop pricing.",
    retailNote: "Indian retail pricing includes making charges, premiums, and taxes.",
    ctaLabel: "Estimate Retail",
    ctaHref: "/",
    sections: [
      { heading: "Why this helps", body: "Compare local quote spreads against benchmark context." },
      { heading: "Retail structure", body: "Final prices include multiple non-spot components." }
    ],
    faqs: [
      { q: "Does this include making charges?", a: "No, making charges are a retail layer." },
      { q: "Can local demand affect final price?", a: "Yes, local dynamics influence retail pricing." }
    ]
  },
  {
    slug: "gold-vs-silver-reference",
    title: "Gold vs Silver Price (Reference) | Contextual Comparison",
    description: "Understand benchmark differences between gold and silver reference prices.",
    h1: "Gold vs Silver (Reference)",
    intro: "A benchmark comparison page for two major precious metals.",
    referenceNote: "Both series are benchmark references and may have data delays.",
    retailNote: "Retail products for each metal include product-specific premiums.",
    ctaLabel: "Open Dashboard",
    ctaHref: "/",
    sections: [
      { heading: "Comparison use", body: "Track ratio behavior and relative trend momentum." },
      { heading: "Risk awareness", body: "Volatility and liquidity differ between metals." }
    ],
    faqs: [
      { q: "Is this for physical products?", a: "This page is benchmark comparison context." },
      { q: "Can premiums differ widely?", a: "Yes, retail premium profiles can differ by product." }
    ]
  },
  {
    slug: "gold-price-alert-thresholds",
    title: "Gold Price Alert Thresholds | Practical Guide",
    description: "Set useful reference-price thresholds and understand alert interpretation.",
    h1: "Gold Price Alert Thresholds",
    intro: "Build practical alert levels for monitoring reference price movement.",
    referenceNote: "Alerts should target reference benchmarks with known data latency.",
    retailNote: "Retail execution can deviate from triggered benchmark values.",
    ctaLabel: "Go to Alerts",
    ctaHref: "/alerts",
    sections: [
      { heading: "Threshold strategy", body: "Use % move plus absolute level alerts together." },
      { heading: "Avoid confusion", body: "Alert trigger ≠ guaranteed retail execution price." }
    ],
    faqs: [
      { q: "Should I use intraday alerts?", a: "Yes, with delay context clearly understood." },
      { q: "Can alerts be noisy?", a: "Use cooldown windows to reduce false urgency." }
    ]
  },
  {
    slug: "gold-reference-price-methodology",
    title: "Gold Reference Price Methodology | Data Transparency",
    description: "Methodology for reference pricing, delays, caching, and fallback labeling.",
    h1: "Gold Reference Price Methodology",
    intro: "Transparent explanation of how this site presents benchmark data.",
    referenceNote: "Reference values can be delayed, cached, or fallback under outage conditions.",
    retailNote: "Retail pricing remains outside benchmark methodology and is separately estimated.",
    ctaLabel: "Read Learn Section",
    ctaHref: "/learn",
    sections: [
      { heading: "Data states", body: "LIVE, DELAYED, CACHED, FALLBACK are explicitly labeled." },
      { heading: "User trust", body: "We avoid presenting estimated values as benchmark truth." }
    ],
    faqs: [
      { q: "What is fallback?", a: "A temporary substitute value used during feed disruption." },
      { q: "What is cached?", a: "Previously fetched value with known age metadata." }
    ]
  }
];


export const landingPages: LandingPage[] = [...seedLandingPages, ...buildExpandedLandingPages()];
