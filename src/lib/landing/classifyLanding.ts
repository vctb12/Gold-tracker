import { LandingPage } from "@/types/landing";

export type LandingIntentGroup =
  | "today"
  | "history"
  | "spot-vs-retail"
  | "alerts"
  | "methodology"
  | "unit"
  | "country"
  | "comparison"
  | "other";

export function classifyIntent(slug: string): LandingIntentGroup {
  if (slug.includes("spot-vs-retail")) return "spot-vs-retail";
  if (slug.includes("history")) return "history";
  if (slug.includes("alerts")) return "alerts";
  if (slug.includes("methodology")) return "methodology";
  if (slug.includes("per-gram") || slug.includes("per-ounce")) return "unit";
  if (slug.includes("vs-")) return "comparison";
  if (
    slug.includes("-usa-") ||
    slug.includes("-uk-") ||
    slug.includes("-india-") ||
    slug.includes("-canada-") ||
    slug.includes("-australia-") ||
    slug.includes("-uae-") ||
    slug.includes("-singapore-") ||
    slug.includes("-germany-") ||
    slug.includes("-france-") ||
    slug.includes("-japan-") ||
    slug.includes("-brazil-") ||
    slug.includes("-mexico-")
  ) return "country";
  if (slug.includes("today")) return "today";
  return "other";
}

export function groupedLandingPages(pages: LandingPage[]) {
  const groups: Record<LandingIntentGroup, LandingPage[]> = {
    today: [],
    history: [],
    "spot-vs-retail": [],
    alerts: [],
    methodology: [],
    unit: [],
    country: [],
    comparison: [],
    other: [],
  };

  for (const page of pages) {
    groups[classifyIntent(page.slug)].push(page);
  }

  return groups;
}
