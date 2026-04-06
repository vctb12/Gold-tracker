import { LandingFaq } from "@/types/landing";

export function FAQAccordion({ faqs }: { faqs: LandingFaq[] }) {
  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">FAQ</h2>
      <div className="mt-3 space-y-3">
        {faqs.map((item) => (
          <details key={item.q} className="rounded-lg border border-[var(--color-border)] p-3">
            <summary className="cursor-pointer font-medium text-[var(--color-text)]">{item.q}</summary>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
