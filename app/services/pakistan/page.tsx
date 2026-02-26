import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pakistan Sourcing Agent for Canada – AK Traders",
  description:
    "Source textiles, surgical goods, sporting equipment and more from Pakistan to Canada. AK Traders provides full-service Pakistan sourcing with QC and customs clearance.",
};

const categories = [
  { icon: "🧵", name: "Cotton Textiles & Fabrics", detail: "Bedding, towels, apparel fabric" },
  { icon: "👗", name: "Ready-Made Garments", detail: "Men's, women's & children's wear" },
  { icon: "🔪", name: "Surgical Instruments", detail: "Sialkot — world's #1 producer" },
  { icon: "⚽", name: "Sporting Goods", detail: "Footballs, gloves, fitness equipment" },
  { icon: "🏠", name: "Home Textiles", detail: "Curtains, carpets, bedsheets" },
  { icon: "👜", name: "Leather Goods", detail: "Bags, wallets, belts, jackets" },
  { icon: "🪆", name: "Handmade Crafts", detail: "Woodwork, pottery, handicrafts" },
  { icon: "💎", name: "Gemstones & Jewelry", detail: "Semi-precious stones, silver jewelry" },
];

export default function PakistanSourcingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-brand-800 text-white py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇵🇰</span>
                <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  World-Class Textiles & Crafts
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Premium Pakistani Products at Manufacturer-Direct Prices
              </h1>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                Pakistan is among the world&apos;s top exporters of cotton textiles, surgical
                instruments, and sporting goods. A.K. Traders connects you with verified
                Pakistani manufacturers, ensuring quality and competitive pricing.
              </p>
              <Link href="/contact" className="btn-accent">
                Get Pakistan Sourcing Quote <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:block relative rounded-2xl overflow-hidden h-80 shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Pakistani textile manufacturing and crafts sourcing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Pakistan */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge text-sm mb-4">Why Pakistan</span>
              <h2 className="section-title text-left">An Underrated Sourcing Powerhouse</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Pakistan is the world&apos;s 4th largest cotton producer and ranks among the top
                global exporters of textiles, surgical instruments, and sporting goods. Yet many
                Canadian businesses overlook it — missing out on exceptional quality at prices
                that rival China.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "World #1 producer of surgical instruments (Sialkot)",
                  "Top 5 global exporter of cotton and cotton products",
                  "FIFA-approved football manufacturing hub",
                  "Rich tradition of quality leather goods and handicrafts",
                  "English widely spoken in business — easier communication",
                  "Growing number of ISO and SA8000-certified factories",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "#4", label: "Cotton producing country globally" },
                { stat: "80%+", label: "Global surgical instrument supply" },
                { stat: "20–40%", label: "Savings vs domestic buying" },
                { stat: "20–35 days", label: "Sea freight to Canada" },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-green-700">{stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Source from Pakistan</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map(({ icon, name, detail }) => (
              <div key={name} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-green-200 hover:shadow-sm transition-all">
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
                <p className="text-xs text-gray-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key cities */}
      <section className="py-16 bg-white">
        <div className="container-section">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Our Pakistan Supplier Network</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: "Faisalabad", specialty: "Textiles & garments — Pakistan's 'Manchester'" },
              { city: "Sialkot", specialty: "Surgical instruments, sports goods & leather" },
              { city: "Lahore", specialty: "General manufacturing & handicrafts" },
              { city: "Karachi", specialty: "Mixed industries & main export port" },
            ].map(({ city, specialty }) => (
              <div key={city} className="bg-green-50 border border-green-100 rounded-xl p-5">
                <div className="font-bold text-gray-900 mb-1">{city}</div>
                <div className="text-sm text-gray-600">{specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Sourcing from Pakistan</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Get a free consultation and see how Pakistan sourcing could reduce your product costs
            by 20–40%.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8">
            Request a Free Pakistan Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
