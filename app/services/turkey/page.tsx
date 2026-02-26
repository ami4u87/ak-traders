import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Turkey Sourcing Agent for Canada – AK Traders",
  description:
    "Source furniture, cosmetics, fashion and food from Turkey to Canada. EU-quality goods at competitive prices. AK Traders provides full Turkey sourcing services.",
};

const categories = [
  { icon: "🛋️", name: "Furniture & Upholstery", detail: "Living room, office & outdoor furniture" },
  { icon: "💄", name: "Cosmetics & Skincare", detail: "EU-certified, halal options available" },
  { icon: "👔", name: "Fashion & Apparel", detail: "Designer-quality at competitive prices" },
  { icon: "🏺", name: "Ceramics & Tiles", detail: "Decorative & construction tiles" },
  { icon: "🫒", name: "Food & Olive Products", detail: "Olive oil, dried fruits, spices" },
  { icon: "💍", name: "Jewelry & Accessories", detail: "Gold, silver & gemstone jewelry" },
  { icon: "🧺", name: "Home Textiles", detail: "Turkish towels, blankets, rugs" },
  { icon: "🏗️", name: "Construction Materials", detail: "Marble, stone & building supplies" },
];

export default function TurkeySourcingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-brand-800 text-white py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇹🇷</span>
                <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  European Quality, Asian Pricing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Source EU-Quality Products from Turkey at Competitive Prices
              </h1>
              <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                Turkey sits at the crossroads of Europe and Asia, offering products that meet
                European quality and safety standards at prices significantly below EU alternatives.
                Perfect for businesses that need quality you can trust.
              </p>
              <Link href="/contact" className="btn-accent">
                Get Turkey Sourcing Quote <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:block relative rounded-2xl overflow-hidden h-80 shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=700&q=80"
                alt="Turkish market and product sourcing — furniture, cosmetics and fashion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Turkey */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge text-sm mb-4">Why Turkey</span>
              <h2 className="section-title text-left">Europe&apos;s Hidden Manufacturing Gem</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Turkey is the EU&apos;s 5th largest trading partner and a member of the EU
                Customs Union — which means Turkish manufacturers operate under European
                product standards, safety regulations, and quality frameworks. You get the
                quality assurance of European manufacturing at 20–40% lower cost.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "EU Customs Union member — European product standards apply",
                  "Faster shipping to Canada than China (15–25 days vs 25–40 days)",
                  "Many factories are EU-certified (CE, REACH, GMP)",
                  "Strong in furniture, cosmetics, fashion & food sectors",
                  "Halal-certified production widely available",
                  "English commonly spoken in export-oriented businesses",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "#5", label: "EU trading partner by volume" },
                { stat: "EU QC", label: "Standards & certifications" },
                { stat: "20–40%", label: "Savings vs European suppliers" },
                { stat: "15–25 days", label: "Sea freight to Canada" },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-orange-50 border border-orange-100 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-orange-700">{stat}</div>
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
            <h2 className="section-title">What We Source from Turkey</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map(({ icon, name, detail }) => (
              <div key={name} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-orange-200 hover:shadow-sm transition-all">
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
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Our Turkey Supplier Network</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: "Istanbul", specialty: "Fashion, cosmetics & general merchandise" },
              { city: "Bursa", specialty: "Textiles, automotive & furniture" },
              { city: "Izmir", specialty: "Food products, olives & marble" },
              { city: "Ankara", specialty: "Ceramics, construction & metalwork" },
            ].map(({ city, specialty }) => (
              <div key={city} className="bg-orange-50 border border-orange-100 rounded-xl p-5">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Sourcing from Turkey</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Discover how Turkey sourcing can give you European quality at a fraction of the cost
            — with faster shipping than China.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8">
            Request a Free Turkey Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
