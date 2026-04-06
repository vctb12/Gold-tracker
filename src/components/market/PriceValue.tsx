export function PriceValue({ value, currency = "USD" }: { value: number; currency?: "USD" }) {
  return (
    <div className="text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-[var(--color-text)]">
      {new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value)}
    </div>
  );
}
