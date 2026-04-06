export function DataFreshnessBanner({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
      {text}
    </div>
  );
}
