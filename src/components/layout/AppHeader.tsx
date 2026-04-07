import Link from "next/link";
import { PageContainer } from "./PageContainer";

const links = [
  { href: "/", label: "Market" },
  { href: "/landing", label: "Landing Hub" },
  { href: "/history", label: "History" },
  { href: "/alerts", label: "Alerts" },
  { href: "/learn", label: "Learn" },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color:var(--color-bg)]/90 backdrop-blur">
      <PageContainer>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-wide text-[var(--color-text)]">
            Gold Tracker
          </Link>

          <nav className="hidden gap-4 text-sm text-[var(--color-text-muted)] md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[var(--color-text)]">
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/landing"
            className="rounded-lg bg-[var(--color-accent)] px-3 py-1.5 text-xs font-semibold text-black"
          >
            Browse Pages
          </Link>
        </div>
      </PageContainer>
    </header>
  );
}
