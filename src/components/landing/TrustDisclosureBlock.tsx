export function TrustDisclosureBlock({
  referenceNote,
  retailNote,
}: {
  referenceNote: string;
  retailNote: string;
}) {
  return (
    <section className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-5">
      <h2 className="text-lg font-semibold text-amber-100">Trust & Pricing Clarity</h2>
      <p className="mt-2 text-sm text-amber-200">
        <strong>Reference/Spot:</strong> {referenceNote}
      </p>
      <p className="mt-2 text-sm text-amber-200">
        <strong>Retail/Jewelry:</strong> {retailNote}
      </p>
    </section>
  );
}
