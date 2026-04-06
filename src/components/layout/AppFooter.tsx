import { PageContainer } from "./PageContainer";

export function AppFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] py-8 text-sm text-[var(--color-text-muted)]">
      <PageContainer>
        <p>Reference spot prices are not retail/jewelry checkout prices.</p>
        <p className="mt-2">Estimated/derived values are clearly labeled.</p>
      </PageContainer>
    </footer>
  );
}
