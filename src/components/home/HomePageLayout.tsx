import { ChartPanelPlaceholder } from "./ChartPanelPlaceholder";
import { HeroPriceCard } from "./HeroPriceCard";
import { InsightRail } from "./InsightRail";
import { KpiRow } from "./KpiRow";
import { RetailEstimatorPreview } from "./RetailEstimatorPreview";
import { PriceSnapshot } from "@/types/price";

export function HomePageLayout({ snapshot }: { snapshot: PriceSnapshot }) {
  return (
    <main className="space-y-6 py-8">
      <HeroPriceCard snapshot={snapshot} />
      <KpiRow />
      <section className="grid gap-6 lg:grid-cols-[1.7fr,1fr]">
        <ChartPanelPlaceholder />
        <InsightRail />
      </section>
      <RetailEstimatorPreview />
    </main>
  );
}
