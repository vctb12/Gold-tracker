import { LandingSection as LandingSectionType } from "@/types/landing";

export function LandingSection({ section }: { section: LandingSectionType }) {
  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">{section.heading}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{section.body}</p>
    </section>
  );
}
