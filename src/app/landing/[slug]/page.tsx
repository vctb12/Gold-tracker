import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LandingTemplate } from "@/components/landing/LandingTemplate";
import { getAllLandingSlugs, getLandingPageBySlug } from "@/lib/landing/getLandingPage";
import { createLandingMetadata } from "@/lib/seo/landingMetadata";

export function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getLandingPageBySlug(params.slug);
  if (!page) return { title: "Not Found" };
  return createLandingMetadata(page);
}

export default function LandingPageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const page = getLandingPageBySlug(params.slug);
  if (!page) notFound();

  return <LandingTemplate page={page} />;
}
