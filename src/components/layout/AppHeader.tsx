import { PageContainer } from "./PageContainer";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color:var(--color-bg)]/90 backdrop-blur">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          <div className="font-semibold tracking-wide text-[var(--color-text)]">Gold Tracker</div>
          <nav className="hidden gap-6 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#" className="hover:text-[var(--color-text)]">Market</a>
            <a href="#" className="hover:text-[var(--color-text)]">History</a>
            <a href="#" className="hover:text-[var(--color-text)]">Alerts</a>
            <a href="#" className="hover:text-[var(--color-text)]">Learn</a>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
}
