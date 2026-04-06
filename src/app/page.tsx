import { HomePageLayout } from "@/components/home/HomePageLayout";
import { getPriceSnapshot } from "@/lib/data/getPriceSnapshot";

export default async function HomePage() {
  const snapshot = await getPriceSnapshot();
  return <HomePageLayout snapshot={snapshot} />;
}
