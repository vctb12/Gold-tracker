import { QualityMode } from "@/types/price";

const modeStyles: Record<QualityMode, string> = {
  LIVE: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  DELAYED: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  CACHED: "bg-blue-500/15 text-blue-300 border-blue-400/30",
  FALLBACK: "bg-rose-500/15 text-rose-300 border-rose-400/30",
  ESTIMATED: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  DERIVED: "bg-sky-500/15 text-sky-300 border-sky-400/30",
};

export function QualityBadge({ mode }: { mode: QualityMode }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${modeStyles[mode]}`}>
      {mode}
    </span>
  );
}
