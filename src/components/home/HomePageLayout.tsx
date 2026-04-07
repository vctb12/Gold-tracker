import { ChartPanelPlaceholder } from "./ChartPanelPlaceholder";
import { HeroPriceCard } from "./HeroPriceCard";
import { RetailEstimatorPreview } from "./RetailEstimatorPreview";
import { PricePoint, PriceSnapshot } from "@/types/price";

export function HomePageLayout({
  snapshot,
  history,
}: {
  snapshot: PriceSnapshot;
  history: PricePoint[];
}) {
  return (
    <main className="space-y-6 py-8">
      <HeroPriceCard snapshot={snapshot} />
      <ChartPanelPlaceholder series={history} />
      <RetailEstimatorPreview referenceSpot={snapshot.value} />
    </main>
  );
}
