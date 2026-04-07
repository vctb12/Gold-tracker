import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function LearnPage() {
  return (
    <main className="space-y-6 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Learn" },
        ]}
      />

      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">Methodology & trust</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          We separate benchmark reference prices from retail jewelry pricing.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <h2 className="text-lg font-semibold">Reference / spot context</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            The site uses monthly benchmark gold history (USD per troy ounce). This data
            is delayed and not executable real-time pricing.
          </p>
        </article>
        <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <h2 className="text-lg font-semibold">Retail / jewelry context</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Retail prices include premiums, making charges, logistics, taxes, and seller
            spread. They should be treated as derived/estimated outcomes.
          </p>
        </article>
      </section>
    </main>
  );
}
