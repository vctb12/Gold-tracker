import { HomePageLayout } from "@/components/home/HomePageLayout";
import {
  getLatestGoldSnapshot,
  getPriceHistory,
} from "@/lib/data/getPriceHistory";

export default async function HomePage() {
  const [snapshot, history] = await Promise.all([
    getLatestGoldSnapshot(),
    getPriceHistory("MAX"),
  ]);

  return <HomePageLayout snapshot={snapshot} history={history} />;
}
