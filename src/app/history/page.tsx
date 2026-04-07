import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ChartPanelPlaceholder } from "@/components/home/ChartPanelPlaceholder";
import { getPriceHistory } from "@/lib/data/getPriceHistory";

export default async function HistoryPage() {
  const history = await getPriceHistory("MAX");

  return (
    <main className="space-y-6 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "History" },
        ]}
      />

      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">Gold history</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Official monthly reference series. This is a delayed benchmark series, not
          an intraday trading feed.
        </p>
      </header>
      <ChartPanelPlaceholder series={history} />
    </main>
  );
}
