import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "A.K. Traders Ltd – Cheap Product Sourcing from China, Pakistan & Turkey to Canada",
    template: "%s | A.K. Traders Ltd",
  },
  description:
    "A.K. Traders Ltd is a Canadian trading company helping businesses source products cheaply from China, Pakistan & Turkey. We handle supplier vetting, price negotiation, quality checks, shipping & Canadian customs.",
  keywords: [
    "cheap product sourcing from China to Canada",
    "sourcing agent Canada",
    "import from China to Canada",
    "Pakistan sourcing agent",
    "Turkey sourcing agent",
    "Canadian import agent",
    "product procurement Canada",
    "AK Traders",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://aktraders.ca",
    siteName: "A.K. Traders Ltd",
    title: "A.K. Traders Ltd – Cheap Product Sourcing from China, Pakistan & Turkey",
    description:
      "Save 20–50% on imports. We handle sourcing, negotiation, quality checks & customs so you don't have to.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.K. Traders Ltd",
    description: "Cheap product sourcing from China, Pakistan & Turkey to Canada.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
