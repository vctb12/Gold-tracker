import { KpiCard } from "@/components/market/KpiCard";

export function KpiRow() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <KpiCard label="Day High" value="$2,356.40" />
      <KpiCard label="Day Low" value="$2,319.20" />
      <KpiCard label="30D Volatility" value="14.8%" />
    </section>
  );
}
