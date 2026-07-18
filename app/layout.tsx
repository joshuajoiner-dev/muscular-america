import type { Metadata } from "next";
import { PrimaryNav } from "@/components/navigation/PrimaryNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { baseMetadata } from "@/lib/metadata";
import "@/app/globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <PrimaryNav />
        <main className="container-wide py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
