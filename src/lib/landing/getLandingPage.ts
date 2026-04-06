import { landingPages } from "@/content/landing";
import { LandingPage } from "@/types/landing";

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}

export function getAllLandingSlugs(): string[] {
  return landingPages.map((p) => p.slug);
}
