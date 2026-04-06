import { DeltaBadge } from "@/components/market/DeltaBadge";
import { PriceValue } from "@/components/market/PriceValue";
import { DataFreshnessBanner } from "@/components/market/DataFreshnessBanner";
import { DisclosureTooltip } from "@/components/trust/DisclosureTooltip";
import { QualityBadge } from "@/components/trust/QualityBadge";
import { SourceBadge } from "@/components/trust/SourceBadge";
import { TimestampLabel } from "@/components/trust/TimestampLabel";
import { PriceSnapshot } from "@/types/price";

export function HeroPriceCard({ snapshot }: { snapshot: PriceSnapshot }) {
  const { quality } = snapshot;

  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-sm uppercase tracking-wide text-[var(--color-text-muted)]">
        Reference spot price
      </p>

      <div className="mt-2 flex flex-wrap items-end gap-3">
        <PriceValue value={snapshot.value} currency={snapshot.currency} />
        <DeltaBadge
          change24hAbs={snapshot.change24hAbs}
          change24hPct={snapshot.change24hPct}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <SourceBadge
          sourceName={snapshot.provenance.sourceName}
          sourceInstrument={snapshot.provenance.sourceInstrument}
        />

        <QualityBadge mode={quality.isDelayed ? "DELAYED" : "LIVE"} />
        {quality.isCached && <QualityBadge mode="CACHED" />}
        {quality.isFallback && <QualityBadge mode="FALLBACK" />}
        {quality.isEstimated && <QualityBadge mode="ESTIMATED" />}
        {quality.isDerived && <QualityBadge mode="DERIVED" />}
      </div>

      <div className="mt-3">
        <TimestampLabel asOf={snapshot.provenance.asOf} />
      </div>

      {(quality.isDelayed || quality.isCached || quality.isFallback) && (
        <div className="mt-3">
          <DataFreshnessBanner
            text={
              quality.isFallback
                ? `Fallback value in use${quality.fallbackReason ? `: ${quality.fallbackReason}` : "."}`
                : quality.isCached
                ? `Cached value shown${quality.cacheAgeSec ? ` (${quality.cacheAgeSec}s old)` : "."}`
                : quality.isDelayed
                ? `Delayed reference feed${quality.delayMinutes ? ` (${quality.delayMinutes} min)` : "."}`
                : ""
            }
          />
        </div>
      )}

      <div className="mt-3">
        <DisclosureTooltip text="Reference spot price is not retail/jewelry checkout price. Retail values are estimated/derived and must be labeled as such." />
      </div>
    </section>
  );
}
