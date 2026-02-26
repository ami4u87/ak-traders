import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "China Sourcing Agent for Canada – AK Traders",
  description:
    "Source products cheaply from China to Canada. AK Traders handles supplier vetting, price negotiation, QC inspections, shipping & CBSA customs clearance.",
};

const categories = [
  { icon: "💡", name: "Electronics & Lighting" },
  { icon: "👕", name: "Apparel & Textiles" },
  { icon: "🪑", name: "Furniture & Home Decor" },
  { icon: "🔧", name: "Tools & Hardware" },
  { icon: "🧴", name: "Health & Beauty" },
  { icon: "🎮", name: "Toys & Sporting Goods" },
  { icon: "🍳", name: "Kitchen & Cookware" },
  { icon: "📦", name: "Packaging Materials" },
  { icon: "🚗", name: "Auto Parts & Accessories" },
  { icon: "💄", name: "Cosmetics & Personal Care" },
  { icon: "🏗️", name: "Construction Materials" },
  { icon: "🌿", name: "Garden & Outdoor" },
];

const hubs = [
  { city: "Shenzhen", specialty: "Electronics & tech", color: "bg-blue-50 border-blue-200" },
  { city: "Guangzhou", specialty: "Apparel, furniture & general goods", color: "bg-purple-50 border-purple-200" },
  { city: "Yiwu", specialty: "Small commodities, gifts & novelties", color: "bg-amber-50 border-amber-200" },
  { city: "Foshan", specialty: "Furniture, ceramics & home goods", color: "bg-green-50 border-green-200" },
  { city: "Ningbo", specialty: "Machinery & industrial goods", color: "bg-rose-50 border-rose-200" },
  { city: "Shanghai", specialty: "Fashion, cosmetics & high-end goods", color: "bg-teal-50 border-teal-200" },
];

export default function ChinaSourcingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-brand-800 text-white py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇨🇳</span>
                <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  90% of Our Sourcing Volume
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Source Anything from China — Cheaper Than You Think
              </h1>
              <p className="text-red-100 text-lg mb-8 leading-relaxed">
                China manufactures 28% of the world&apos;s goods. With A.K. Traders as your
                sourcing agent, you get factory-direct prices, rigorous QC, and seamless
                delivery to Canada — without ever visiting a trade show or learning Mandarin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent">
                  Get China Sourcing Quote <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-ghost">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative rounded-2xl overflow-hidden h-80 shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1565017539538-29a0fc025d52?w=700&q=80"
                alt="China manufacturing factory floor for product sourcing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why China */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge text-sm mb-4">Why China</span>
              <h2 className="section-title text-left">The World&apos;s Manufacturing Powerhouse</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                China offers unmatched breadth and depth of manufacturing: from basic commodities
                to high-tech electronics, virtually anything can be produced there at scale and at
                prices 30–60% below North American or European manufacturing.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Factory-direct pricing eliminates distributors and importers",
                  "Economies of scale even for small/medium orders (MOQ as low as 50–100 pcs)",
                  "Complete supply chains under one roof — materials to finished goods",
                  "Rapid iteration and custom product development (OEM/ODM)",
                  "Well-developed shipping infrastructure (multiple weekly sailings to Canada)",
                  "Established CBSA import procedures with predictable timelines",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-brand-500 shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "10,000+", label: "Product categories available" },
                { stat: "28%", label: "Of world's manufactured goods" },
                { stat: "30–60%", label: "Typical savings vs domestic" },
                { stat: "25–40 days", label: "Sea freight to Canadian port" },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-red-700">{stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Popular Product Categories</h2>
            <p className="section-subtitle">We source across all major categories. Don&apos;t see yours? Just ask.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map(({ icon, name }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 hover:border-brand-200 hover:shadow-sm transition-all">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-medium text-gray-800">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
            <Package size={16} />
            And hundreds more — from industrial equipment to fashion accessories
          </p>
        </div>
      </section>

      {/* Sourcing hubs */}
      <section className="py-16 bg-white">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Our China Sourcing Network</h2>
            <p className="section-subtitle">
              We have active supplier relationships in China&apos;s major manufacturing hubs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hubs.map(({ city, specialty, color }) => (
              <div key={city} className={`rounded-xl border p-5 ${color}`}>
                <div className="font-bold text-gray-900 mb-1">{city}</div>
                <div className="text-sm text-gray-600">{specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process summary */}
      <section className="py-16 bg-brand-50 border-y border-brand-100">
        <div className="container-section">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">How China Sourcing Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Submit Product Requirements", desc: "Product specs, quantity, target price, delivery deadline." },
              { step: "2", title: "Supplier Research & Quotes", desc: "We source 3–5 qualified factory quotes within 5–7 days." },
              { step: "3", title: "Sample & QC Inspection", desc: "Sample review, full pre-shipment inspection before shipping." },
              { step: "4", title: "Ship & Clear Customs", desc: "Door-to-door logistics with CBSA customs clearance included." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-xl p-5 border border-brand-100 text-center">
                <div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{step}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                <p className="text-xs text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Tell us what you need and we&apos;ll send you supplier options and price estimates
            within 24–48 hours — completely free.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8">
            Request a Free China Sourcing Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
