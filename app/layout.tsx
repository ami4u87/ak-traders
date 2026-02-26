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

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/12041234567?text=Hi%20AK%20Traders%2C%20I%27d%20like%20a%20sourcing%20quote."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.505A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.35l-.37-.22-3.835.911.947-3.743-.24-.38A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
