import { landingPages } from "@/content/landing";
import { inferIntentFromSlug } from "./inferIntent";

export function getRelatedPages(currentSlug: string, limit = 6) {
  const current = landingPages.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const currentIntent = inferIntentFromSlug(current.slug);
  const currentCountry = current.slug.split("-")[2] ?? "";

  const scored = landingPages
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      let score = 0;
      const intent = inferIntentFromSlug(p.slug);
      const country = p.slug.split("-")[2] ?? "";

      if (intent === currentIntent) score += 3;
      if (country === currentCountry && country) score += 2;
      if (p.slug.includes("methodology")) score += 1;

      return { page: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.page);

  return scored;
}
