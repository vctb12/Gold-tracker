export type IntentKey =
  | "today"
  | "per-gram"
  | "per-ounce"
  | "history-1-year"
  | "history-5-year"
  | "spot-vs-retail"
  | "alerts-guide"
  | "methodology";

export type IntentTemplate = {
  badge: string;
  intro: string;
  sectionAHeading: string;
  sectionABody: string;
  sectionBHeading: string;
  sectionBBody: string;
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  ctaLabel: string;
  ctaHref: string;
};

export const intentTemplates: Record<IntentKey, IntentTemplate> = {
  today: {
    badge: "Daily Reference Context",
    intro: "Track benchmark movement for market context, not direct retail checkout assumptions.",
    sectionAHeading: "What this daily page is for",
    sectionABody: "Use this page to quickly understand short-term direction and volatility in benchmark terms.",
    sectionBHeading: "How to avoid misreading",
    sectionBBody: "Always treat reference values as context only; retail outcomes include additional layers.",
    faq1q: "Is this a real-time dealer execution quote?",
    faq1a: "No. It is a benchmark reference view and may be delayed based on feed terms.",
    faq2q: "Why does local store pricing differ?",
    faq2a: "Retail adds premiums, making/fabrication costs, taxes, and seller spread.",
    ctaLabel: "Open Market Dashboard",
    ctaHref: "/",
  },
  "per-gram": {
    badge: "Unit Conversion Context",
    intro: "Reference view for gram-based interpretation of benchmark gold pricing.",
    sectionAHeading: "Unit logic",
    sectionABody: "Benchmark values are commonly quoted in troy ounce and converted for gram interpretation.",
    sectionBHeading: "Retail caveat",
    sectionBBody: "Retail per-gram prices can differ materially due to local costs and seller margins.",
    faq1q: "Is this exact jewelry per-gram price?",
    faq1a: "No, this is benchmark conversion context.",
    faq2q: "What usually increases final per-gram cost?",
    faq2a: "Making charges, taxes, and regional premium differences.",
    ctaLabel: "Use Retail Estimator",
    ctaHref: "/",
  },
  "per-ounce": {
    badge: "Benchmark Unit Context",
    intro: "Standard troy-ounce benchmark page for broad market comparability.",
    sectionAHeading: "Why ounce benchmark matters",
    sectionABody: "It aligns with global market convention for spot/reference interpretation.",
    sectionBHeading: "From benchmark to retail",
    sectionBBody: "Physical product quotes generally include premiums beyond benchmark levels.",
    faq1q: "Is this troy ounce-based?",
    faq1a: "Yes, benchmark gold convention uses troy ounce.",
    faq2q: "Does this include dealer markup?",
    faq2a: "No. This is benchmark context only.",
    ctaLabel: "Open Price History",
    ctaHref: "/history",
  },
  "history-1-year": {
    badge: "Medium-Term Trend Context",
    intro: "Understand one-year benchmark trend, momentum, and drawdown context.",
    sectionAHeading: "One-year interpretation",
    sectionABody: "Useful for medium-horizon context and regime shifts over months.",
    sectionBHeading: "Decision framing",
    sectionBBody: "Combine trend context with volatility and macro signals before acting.",
    faq1q: "Is this investment advice?",
    faq1a: "No. This is informational benchmark context only.",
    faq2q: "Can this diverge from physical market pricing?",
    faq2a: "Yes, retail and benchmark series do not move identically.",
    ctaLabel: "Explore Full History",
    ctaHref: "/history",
  },
  "history-5-year": {
    badge: "Long-Term Trend Context",
    intro: "Long-range benchmark view for cycle awareness and structural trend analysis.",
    sectionAHeading: "Five-year use case",
    sectionABody: "Useful for identifying broad cycle phases and long-run volatility changes.",
    sectionBHeading: "Context discipline",
    sectionBBody: "Long-term charts are context tools, not standalone decisions.",
    faq1q: "Why use 5-year history?",
    faq1a: "It helps reduce short-term noise and reveals broader trend behavior.",
    faq2q: "Are retail costs included?",
    faq2a: "No, benchmark history excludes product-level retail layers.",
    ctaLabel: "Open Long-Range History",
    ctaHref: "/history",
  },
  "spot-vs-retail": {
    badge: "Trust & Pricing Clarity",
    intro: "Explicit separation between benchmark spot/reference and retail/jewelry checkout pricing.",
    sectionAHeading: "Reference spot meaning",
    sectionABody: "Reference spot is benchmark context used to track market-level movement.",
    sectionBHeading: "Retail pricing reality",
    sectionBBody: "Retail adds premiums, making costs, logistics, tax, and seller margin.",
    faq1q: "Why is spot lower than what stores quote?",
    faq1a: "Because retail includes non-benchmark cost layers.",
    faq2q: "Can the spread change day to day?",
    faq2a: "Yes, spread varies by region, demand, and seller policy.",
    ctaLabel: "See Methodology",
    ctaHref: "/learn",
  },
  "alerts-guide": {
    badge: "Monitoring & Action",
    intro: "Set practical benchmark alert levels and avoid common signal mistakes.",
    sectionAHeading: "Alert setup strategy",
    sectionABody: "Use both threshold and percentage movement alerts for better signal quality.",
    sectionBHeading: "Trigger interpretation",
    sectionBBody: "Alert trigger indicates benchmark crossing, not guaranteed retail execution.",
    faq1q: "Should I use intraday alerts?",
    faq1a: "Yes, with delay/cached/fallback labels understood.",
    faq2q: "How do I reduce noisy alerts?",
    faq2a: "Use cooldown windows and multi-condition thresholds.",
    ctaLabel: "Go to Alerts",
    ctaHref: "/alerts",
  },
  methodology: {
    badge: "Methodology & Data States",
    intro: "Understand how benchmark values, delays, cache, fallback, and derived values are labeled.",
    sectionAHeading: "Data state labeling",
    sectionABody: "Values can be live, delayed, cached, fallback, estimated, or derived depending on source conditions.",
    sectionBHeading: "Why this matters",
    sectionBBody: "Transparent state labeling improves trust and reduces misinterpretation.",
    faq1q: "What is fallback data?",
    faq1a: "Temporary substitute data used during source disruption.",
    faq2q: "What is cached data?",
    faq2a: "Previously fetched value shown with known age context.",
    ctaLabel: "Open Landing Hub",
    ctaHref: "/landing",
  },
};
