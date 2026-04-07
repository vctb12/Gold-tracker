export type LandingIntent =
  | "today"
  | "per-gram"
  | "per-ounce"
  | "history"
  | "spot-vs-retail"
  | "alerts"
  | "methodology"
  | "generic";

export function inferIntentFromSlug(slug: string): LandingIntent {
  if (slug.includes("spot-vs-retail")) return "spot-vs-retail";
  if (slug.includes("per-gram")) return "per-gram";
  if (slug.includes("per-ounce")) return "per-ounce";
  if (slug.includes("history")) return "history";
  if (slug.includes("alerts")) return "alerts";
  if (slug.includes("methodology")) return "methodology";
  if (slug.includes("today")) return "today";
  return "generic";
}
