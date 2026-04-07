import { LandingFaq, LandingSection } from "@/types/landing";

export type IntentVariant = {
  badge: string;
  introLead: string;
  sections: [LandingSection, LandingSection, LandingSection];
  faqs: [LandingFaq, LandingFaq, LandingFaq];
  ctaLabel: string;
  ctaHref: string;
  highlights: [string, string, string];
};

export const INTENT_VARIANTS: Record<string, IntentVariant> = {
  today: {
    badge: "Daily Reference Read",
    introLead:
      "Use this page for benchmark orientation, trend context, and trust-labeled interpretation before any retail decisions.",
    sections: [
      {
        heading: "What this daily page solves",
        body:
          "It gives a consistent benchmark anchor, making it easier to compare dealer quotes and avoid overreacting to scattered retail prices.",
      },
      {
        heading: "How to interpret moves",
        body:
          "A benchmark move can precede or diverge from local retail shifts. Use it as a reference signal, not a direct checkout expectation.",
      },
      {
        heading: "Risk control checklist",
        body:
          "Check delayed/fallback labels, then compare multiple offers. If spread widens materially, wait for a calmer quoting window.",
      },
    ],
    faqs: [
      {
        q: "Is this a live executable quote?",
        a: "No. It is a benchmark reference context and can be delayed or fallback-labeled.",
      },
      {
        q: "Why do stores quote higher than this page?",
        a: "Retail quotes include premium, fabrication/making fee, taxes, and seller spread.",
      },
      {
        q: "How often should I check this page?",
        a: "Use it for directional context, then validate with fresh local dealer quotes before transacting.",
      },
    ],
    ctaLabel: "Open Market Dashboard",
    ctaHref: "/",
    highlights: ["Benchmark first", "Trust labels", "Retail spread awareness"],
  },
  "per-gram": {
    badge: "Gram Conversion Lens",
    introLead:
      "Built for users who compare jewelry/bullion offers in grams and need a benchmark conversion baseline.",
    sections: [
      {
        heading: "Conversion logic",
        body:
          "Benchmark series is commonly represented per troy ounce. This page frames gram-level interpretation for practical local comparisons.",
      },
      {
        heading: "Where deviation appears",
        body:
          "Retail gram quotes can differ due to purity mix, fabrication cost, local taxes, and inventory conditions.",
      },
      {
        heading: "Actionable workflow",
        body:
          "Use this benchmark first, then model your expected premium/tax in the estimator to avoid surprise checkout totals.",
      },
    ],
    faqs: [
      {
        q: "Does this page include making charges?",
        a: "No. This is benchmark context. Making charges are retail-layer inputs.",
      },
      {
        q: "Can two shops differ even on same day?",
        a: "Yes, because each seller applies different premium and operational margin.",
      },
      {
        q: "Is gram pricing enough to compare offers?",
        a: "Use gram benchmark + purity + fees together; benchmark alone is not the full retail picture.",
      },
    ],
    ctaLabel: "Use Retail Estimator",
    ctaHref: "/",
    highlights: ["Gram-focused", "Estimator-ready", "Fee-aware interpretation"],
  },
  "per-ounce": {
    badge: "Ounce Benchmark Standard",
    introLead:
      "A classic benchmark unit page for users comparing institutional-style reference pricing across markets.",
    sections: [
      {
        heading: "Why ounce still matters",
        body:
          "It remains a common benchmark convention and helps normalize comparisons across macro commentary and historical datasets.",
      },
      {
        heading: "Retail translation",
        body:
          "Retail products convert benchmark values into product-level outcomes with additional non-benchmark cost layers.",
      },
      {
        heading: "Decision hygiene",
        body:
          "Always compare benchmark move, dealer premium behavior, and your tax assumptions before executing.",
      },
    ],
    faqs: [
      {
        q: "Is this page equivalent to dealer buy/sell board?",
        a: "No. Dealer boards can include spread and inventory factors beyond benchmark context.",
      },
      {
        q: "Why is ounce benchmark useful if I buy grams?",
        a: "It gives a stable macro anchor before converting into gram/purity-specific retail scenarios.",
      },
      {
        q: "Should I rely on one source only?",
        a: "Use benchmark context + at least one local quote check for reliability.",
      },
    ],
    ctaLabel: "Open Price History",
    ctaHref: "/history",
    highlights: ["Macro anchor", "Unit consistency", "Cross-market comparability"],
  },
  "history-1-year": {
    badge: "Medium-Horizon Trend",
    introLead:
      "Designed for users evaluating momentum and pullbacks over a one-year benchmark context.",
    sections: [
      {
        heading: "Momentum framing",
        body:
          "A one-year window balances recency and trend persistence better than short snapshots.",
      },
      {
        heading: "Volatility interpretation",
        body:
          "Treat sharp moves as context signals, then validate liquidity conditions and retail spread before action.",
      },
      {
        heading: "Practical usage",
        body:
          "Use 1Y context to set realistic alert thresholds and avoid overfitting to short-term noise.",
      },
    ],
    faqs: [
      {
        q: "Is this investment advice?",
        a: "No. It is informational benchmark context for better interpretation.",
      },
      {
        q: "Can retail history diverge from benchmark history?",
        a: "Yes. Retail pricing carries additional local and product-level frictions.",
      },
      {
        q: "How should I use this with alerts?",
        a: "Set thresholds aligned to historical volatility instead of arbitrary round numbers.",
      },
    ],
    ctaLabel: "Explore Full History",
    ctaHref: "/history",
    highlights: ["1Y momentum", "Volatility context", "Alert calibration"],
  },
  "history-5-year": {
    badge: "Long-Horizon Regimes",
    introLead:
      "This variant emphasizes regime shifts and structural context over five years.",
    sections: [
      {
        heading: "Cycle visibility",
        body:
          "Five-year context helps identify multi-phase cycles and prevents reaction to short-lived anomalies.",
      },
      {
        heading: "Scenario planning",
        body:
          "Use longer history to bracket optimistic/base/stress assumptions for retail planning.",
      },
      {
        heading: "Trust note",
        body:
          "Even long-horizon benchmark insight should be translated through current premium/tax assumptions.",
      },
    ],
    faqs: [
      {
        q: "Can long history reduce decision noise?",
        a: "Yes. It contextualizes recent moves within broader regime behavior.",
      },
      {
        q: "Does this include dealer premiums over time?",
        a: "No. This page is benchmark-focused and separated from retail overlays.",
      },
      {
        q: "What should I pair with this view?",
        a: "Pair with current spread checks and estimator scenarios for practical execution.",
      },
    ],
    ctaLabel: "Open Long-Range History",
    ctaHref: "/history",
    highlights: ["Regime awareness", "Noise reduction", "Scenario planning"],
  },
  "spot-vs-retail": {
    badge: "Trust & Interpretation",
    introLead:
      "This page is dedicated to one job: prevent spot-vs-retail confusion.",
    sections: [
      {
        heading: "Benchmark versus checkout",
        body:
          "Spot/reference is a market context value. Retail checkout is a derived merchant-specific outcome.",
      },
      {
        heading: "Where extra cost comes from",
        body:
          "Premium, making/fabrication, tax, logistics, and merchant spread all contribute to divergence.",
      },
      {
        heading: "How to compare offers fairly",
        body:
          "Normalize by purity and fee structure first, then compare final all-in totals.",
      },
    ],
    faqs: [
      {
        q: "Can retail be near spot?",
        a: "In some products/markets spread can compress, but retail still includes additional costs.",
      },
      {
        q: "Why does spread change over time?",
        a: "Inventory pressure, local demand, and currency volatility affect pricing behavior.",
      },
      {
        q: "What is the safest interpretation?",
        a: "Treat benchmark as context and estimate retail explicitly with transparent assumptions.",
      },
    ],
    ctaLabel: "See Methodology",
    ctaHref: "/learn",
    highlights: ["Clarity first", "Fee breakdown", "Fair comparison method"],
  },
  "alerts-guide": {
    badge: "Alert Strategy",
    introLead:
      "A practical framework for threshold design with benchmark-aware risk controls.",
    sections: [
      {
        heading: "Alert design",
        body:
          "Combine absolute level alerts with percentage move alerts to avoid single-trigger blind spots.",
      },
      {
        heading: "False urgency control",
        body:
          "Use cooldown windows and require confirmation windows when volatility spikes.",
      },
      {
        heading: "Execution discipline",
        body:
          "Triggered benchmark alerts should lead to quote validation, not immediate unchecked execution.",
      },
    ],
    faqs: [
      {
        q: "Can alerts fire during delayed data windows?",
        a: "Yes. Always check current data-state labels before acting.",
      },
      {
        q: "What is a good first threshold strategy?",
        a: "Start with one range alert and one breakout alert, then tune by volatility behavior.",
      },
      {
        q: "Are alert triggers tradable prices?",
        a: "No. They represent benchmark crossing conditions, not guaranteed retail fills.",
      },
    ],
    ctaLabel: "Go to Alerts",
    ctaHref: "/alerts",
    highlights: ["Threshold design", "Noise control", "Execution discipline"],
  },
  methodology: {
    badge: "Data Methodology",
    introLead:
      "Explains exactly how data states are labeled so users can trust what they see.",
    sections: [
      {
        heading: "State taxonomy",
        body:
          "Values may be delayed, cached, fallback, estimated, or derived depending on source and processing state.",
      },
      {
        heading: "Why labels matter",
        body:
          "State labels reduce interpretation errors and help users avoid treating non-live values as executable truth.",
      },
      {
        heading: "Operational transparency",
        body:
          "When upstream data is unavailable, fallback behavior is explicit rather than hidden behind polished UI.",
      },
    ],
    faqs: [
      {
        q: "What is cached in this site context?",
        a: "Recently stored benchmark values reused during source interruptions or static export windows.",
      },
      {
        q: "What is fallback in this site context?",
        a: "Deterministic local sample used to keep pages operational when upstream fetch fails.",
      },
      {
        q: "What is derived/estimated?",
        a: "User-facing calculations based on assumptions, not direct benchmark source values.",
      },
    ],
    ctaLabel: "Open Landing Hub",
    ctaHref: "/landing",
    highlights: ["State labels", "Honest fallback", "Interpretation safety"],
  },
};
