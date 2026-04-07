import { AlertWorkbench } from "@/components/alerts/AlertWorkbench";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { getLatestGoldSnapshot } from "@/lib/data/getPriceHistory";

export default async function AlertsPage() {
  const snapshot = await getLatestGoldSnapshot();

  return (
    <main className="space-y-6 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Alerts" },
        ]}
      />

      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">Benchmark alert workbench</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          This module supports local rule drafting and trigger previews only. It does not yet send email/push/webhook notifications.
        </p>
      </header>

      <AlertWorkbench
        referenceSpot={snapshot.value}
        sourceName={snapshot.provenance.sourceName}
        isDelayed={snapshot.quality.isDelayed}
        isFallback={snapshot.quality.isFallback}
      />
    </main>
  );
}
