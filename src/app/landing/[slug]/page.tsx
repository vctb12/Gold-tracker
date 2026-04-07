import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LandingTemplate } from "@/components/landing/LandingTemplate";
import { getAllLandingSlugs, getLandingPageBySlug } from "@/lib/landing/getLandingPage";
import { createLandingMetadata } from "@/lib/seo/landingMetadata";

export function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return { title: "Not Found" };
  return createLandingMetadata(page);
}

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) notFound();

  return <LandingTemplate page={page} />;
}
