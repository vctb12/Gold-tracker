import type { Metadata } from "next";
import { LandingPage } from "@/types/landing";

export function createLandingMetadata(page: LandingPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
