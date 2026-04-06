import { DeltaBadge } from "@/components/market/DeltaBadge";
import { PriceValue } from "@/components/market/PriceValue";
import { DisclosureTooltip } from "@/components/trust/DisclosureTooltip";
import { QualityBadge } from "@/components/trust/QualityBadge";
import { SourceBadge } from "@/components/trust/SourceBadge";
import { TimestampLabel } from "@/components/trust/TimestampLabel";
import { PriceSnapshot } from "@/types/price";

export function HeroPriceCard({ snapshot }: { snapshot: PriceSnapshot }) {
  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-sm uppercase tracking-wide text-[var(--color-text-muted)]">
        Latest official monthly gold average
      </p>

      <div className="mt-2 flex flex-wrap items-end gap-3">
        <PriceValue value={snapshot.value} currency={snapshot.currency} />
        <DeltaBadge
          change24hAbs={snapshot.change24hAbs}
          change24hPct={snapshot.change24hPct}
        />
      </div>

      <div className="mt-2 text-xs text-[var(--color-text-muted)]">
        Change shown vs previous published observation.
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <SourceBadge
          sourceName={snapshot.provenance.sourceName}
          sourceInstrument={snapshot.provenance.sourceInstrument}
        />
        {snapshot.quality.isCached ? <QualityBadge mode="CACHED" /> : null}
        {snapshot.quality.isFallback ? <QualityBadge mode="FALLBACK" /> : null}
      </div>

      <div className="mt-3">
        <TimestampLabel asOf={snapshot.provenance.asOf} />
      </div>

      <div className="mt-3">
        <DisclosureTooltip text="This card shows the latest published official monthly value, not a live executable intraday quote. Retail/jewelry prices remain separate and must be calculated with premiums, making charges, and taxes." />
      </div>
    </section>
  );
}
