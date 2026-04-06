import type { Metadata } from "next";
import "./globals.css";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Gold Tracker",
  description: "Insightful gold reference price tracking with trust-first labeling."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <PageContainer>{children}</PageContainer>
        <AppFooter />
      </body>
    </html>
  );
}
