import { AlertEngineRunResult } from "@/lib/alerts/types";

export function PipelineStatus({ result }: { result: AlertEngineRunResult | null }) {
  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Server pipeline scaffold status</h2>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        Evaluation engine is active in preview mode. Delivery adapters are scaffolded but webhook/email dispatch remains disabled in static deployment.
      </p>

      {result ? (
        <div className="mt-4 space-y-3 text-sm">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-3">
            <p className="text-[var(--color-text-muted)]">Run ID</p>
            <p className="font-mono text-xs text-[var(--color-text)]">{result.context.runId}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Triggers" value={String(result.triggers.length)} />
            <Metric
              label="Log deliveries"
              value={String(result.deliveries.filter((d) => d.channel === "log" && d.ok).length)}
            />
            <Metric
              label="Webhook/Email pending"
              value={String(result.deliveries.filter((d) => d.channel !== "log").length)}
            />
          </div>

          <ul className="space-y-2">
            {result.deliveries.slice(0, 8).map((delivery) => (
              <li
                key={`${delivery.channel}-${delivery.envelopeId}`}
                className="rounded-md border border-[var(--color-border)] px-3 py-2"
              >
                <span className="font-medium text-[var(--color-text)]">{delivery.channel.toUpperCase()}</span>
                <span className="text-[var(--color-text-muted)]"> — {delivery.message}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          No rule evaluations have been run yet.
        </p>
      )}
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-3">
      <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
      <p className="mt-1 text-lg font-semibold text-[var(--color-text)]">{value}</p>
    </article>
  );
}
