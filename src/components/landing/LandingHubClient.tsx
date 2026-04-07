"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LandingPage } from "@/types/landing";
import { groupedLandingPages, LandingIntentGroup } from "@/lib/landing/classifyLanding";

const LABELS: Record<LandingIntentGroup, string> = {
  today: "Today",
  history: "History",
  "spot-vs-retail": "Spot vs Retail",
  alerts: "Alerts",
  methodology: "Methodology",
  unit: "Units",
  country: "Country",
  comparison: "Comparisons",
  other: "Other",
};

const ORDER: LandingIntentGroup[] = [
  "today",
  "history",
  "spot-vs-retail",
  "alerts",
  "methodology",
  "unit",
  "country",
  "comparison",
  "other",
];

export function LandingHubClient({ pages }: { pages: LandingPage[] }) {
  const [active, setActive] = useState<LandingIntentGroup | "all">("all");
  const [q, setQ] = useState("");

  const groups = useMemo(() => groupedLandingPages(pages), [pages]);

  const filtered = useMemo(() => {
    const base = active === "all" ? pages : groups[active];
    const query = q.trim().toLowerCase();
    if (!query) return base;
    return base.filter((p) =>
      [p.h1, p.title, p.description, p.slug].join(" ").toLowerCase().includes(query)
    );
  }, [active, groups, pages, q]);

  return (
    <main className="space-y-6 py-8">
      <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
          Organized Landing Navigation
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--color-text)]">
          Gold Landing Hub
        </h1>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          Browse landing pages by intent and purpose. Reference/spot context is always
          clearly separated from retail/jewelry outcomes.
        </p>

        <div className="mt-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search landing pages..."
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-sm"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={`rounded-full border px-3 py-1 text-xs ${active === "all" ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-[var(--color-border)] text-[var(--color-text-muted)]"}`}
          >
            All ({pages.length})
          </button>
          {ORDER.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`rounded-full border px-3 py-1 text-xs ${active === k ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-[var(--color-border)] text-[var(--color-text-muted)]"}`}
            >
              {LABELS[k]} ({groups[k].length})
            </button>
          ))}
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/landing/${p.slug}`}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-card)]"
          >
            <h2 className="text-sm font-semibold text-[var(--color-text)]">{p.h1}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-[var(--color-text-muted)]">
              {p.description}
            </p>
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">/{p.slug}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
