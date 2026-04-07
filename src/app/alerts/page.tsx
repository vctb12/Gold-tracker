export default function AlertsPage() {
  return (
    <main className="space-y-6 py-8">
      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">Price alerts</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Alerts are not active yet in this static build. We intentionally keep this
          transparent instead of showing fake controls.
        </p>
      </header>
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Current status</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-text-muted)]">
          <li>No background worker is configured for scheduled alert checks.</li>
          <li>No delivery channel (email/push/webhook) is configured.</li>
          <li>Alert UI is intentionally disabled until backend support is added.</li>
        </ul>
      </section>
    </main>
  );
}
