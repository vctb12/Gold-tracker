import { LandingIntent } from "@/lib/landing/inferIntent";

function intentBadge(intent: LandingIntent) {
  switch (intent) {
    case "today":
      return "Daily Reference Context";
    case "history":
      return "Historical Trend Context";
    case "spot-vs-retail":
      return "Trust & Pricing Clarity";
    case "alerts":
      return "Action & Monitoring";
    case "methodology":
      return "Data Methodology";
    default:
      return "Gold Reference Insights";
  }
}

function intentSubtext(intent: LandingIntent) {
  switch (intent) {
    case "today":
      return "Use reference movement for context, not direct retail execution assumptions.";
    case "history":
      return "Interpret trend and volatility with benchmark-first clarity.";
    case "spot-vs-retail":
      return "Explicitly separate benchmark spot context from retail/jewelry outcomes.";
    case "alerts":
      return "Set thresholds on benchmark values and interpret trigger context carefully.";
    case "methodology":
      return "Understand delayed, cached, fallback, estimated, and derived labels.";
    default:
      return "Trust-first benchmark pages for better decisions.";
  }
}

export function VariantHero({
  intent,
  h1,
  intro,
}: {
  intent: LandingIntent;
  h1: string;
  intro: string;
}) {
  return (
    <header className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
        {intentBadge(intent)}
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-[var(--color-text)]">{h1}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-text-muted)]">{intro}</p>
      <p className="mt-2 text-xs text-[var(--color-text-muted)]">{intentSubtext(intent)}</p>
    </header>
  );
}
