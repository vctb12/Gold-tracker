export function DeltaBadge({ change24hAbs, change24hPct }: { change24hAbs: number; change24hPct: number }) {
  const up = change24hAbs >= 0;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${up ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}>
      {up ? "+" : ""}{change24hAbs.toFixed(2)} ({up ? "+" : ""}{change24hPct.toFixed(2)}%)
    </span>
  );
}
