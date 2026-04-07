import { landingPages } from "@/content/landing";
import { LandingHubClient } from "@/components/landing/LandingHubClient";

export default function LandingDirectoryPage() {
  return <LandingHubClient pages={landingPages} />;
}
