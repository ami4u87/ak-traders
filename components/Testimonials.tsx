import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Marchetti",
    role: "Owner, Marchetti Home Goods",
    location: "Toronto, ON",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    quote:
      "A.K. Traders saved us over $18,000 on our first container of furniture from China. Their team handled everything — the factory inspection alone saved us from a costly mistake with a substandard supplier. I won't source without them again.",
    highlight: "Saved $18,000 on first order",
    country: "🇨🇳 China",
  },
  {
    name: "Sarah Okonkwo",
    role: "Founder, Luxe Textile Co.",
    location: "Vancouver, BC",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    quote:
      "We needed premium cotton fabrics sourced from Pakistan for our bedding line. AK Traders found us a certified manufacturer in Faisalabad at 40% below what we were paying locally. Quality has been consistently excellent across 6 orders now.",
    highlight: "40% cost reduction on textiles",
    country: "🇵🇰 Pakistan",
  },
  {
    name: "Michael Chen",
    role: "Purchasing Manager, TechEdge Solutions",
    location: "Calgary, AB",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    quote:
      "Sourcing electronics components from China used to be a nightmare with customs delays and quality issues. AK Traders streamlined everything. Our last shipment of 5,000 units arrived on time, passed QC 100%, and cleared customs in 2 days.",
    highlight: "Zero customs delays, 100% QC pass",
    country: "🇨🇳 China",
  },
  {
    name: "Amina Hassan",
    role: "CEO, Noura Fashion",
    location: "Montreal, QC",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    quote:
      "I was skeptical about sourcing cosmetics from Turkey, but AK Traders connected me with an EU-certified manufacturer. The products are high quality, halal-certified, and cost 30% less than our previous Canadian supplier. Exceptional service.",
    highlight: "30% savings + EU certification",
    country: "🇹🇷 Turkey",
  },
  {
    name: "Robert Beaulieu",
    role: "Director, Prairie Hardware Supply",
    location: "Winnipeg, MB",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    quote:
      "Three years working with AK Traders and they've never let us down. Their knowledge of Chinese manufacturing standards and Canadian import regulations is unmatched. They're not just a service — they're a strategic partner.",
    highlight: "3+ year partnership",
    country: "🇨🇳 China",
  },
  {
    name: "Jennifer Park",
    role: "Buyer, Coast Home Décor",
    location: "Surrey, BC",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    quote:
      "AK Traders got us samples from 4 different Turkey suppliers in 2 weeks. We found the perfect ceramics manufacturer and saved 25% versus what we were importing from Europe. The whole process was transparent and professional.",
    highlight: "25% savings vs European suppliers",
    country: "🇹🇷 Turkey",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge text-sm mb-3">Client Success Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real results from Canadian businesses that have saved thousands by sourcing smarter
            with A.K. Traders Ltd.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card flex flex-col group"
            >
              <Quote size={32} className="text-brand-400 mb-3" />

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-accent-500 fill-accent-500" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200 mb-5 self-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {t.highlight}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-brand-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 truncate">{t.role} — {t.location}</div>
                </div>
                <span className="text-sm shrink-0">{t.country}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study — fully written out */}
        <div className="mt-14 rounded-2xl overflow-hidden border border-brand-200 shadow-md">
          {/* Header bar */}
          <div className="bg-gradient-to-r from-brand-800 to-brand-700 px-8 py-6 text-white">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              Case Study
            </span>
            <h3 className="text-2xl font-bold mb-1">
              Electronics Retailer Saved $42,000 in Year One
            </h3>
            <p className="text-brand-200 text-sm">
              Toronto-based TechEdge Solutions · China Sourcing · 2023–2024
            </p>
          </div>

          {/* Body */}
          <div className="bg-white px-8 py-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Before */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Before A.K. Traders</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-red-500 mt-0.5">✗</span> Buying from US distributors at 3× factory price</li>
                  <li className="flex gap-2"><span className="text-red-500 mt-0.5">✗</span> No quality control — 12% defect rate</li>
                  <li className="flex gap-2"><span className="text-red-500 mt-0.5">✗</span> 3 separate shipments per year, high freight costs</li>
                  <li className="flex gap-2"><span className="text-red-500 mt-0.5">✗</span> Customs delays averaging 11 days</li>
                </ul>
              </div>
              {/* Process */}
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                <div className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-3">What We Did</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-brand-600 mt-0.5">→</span> Sourced 3 Shenzhen factories, negotiated direct</li>
                  <li className="flex gap-2"><span className="text-brand-600 mt-0.5">→</span> Pre-shipment QC inspection on every batch</li>
                  <li className="flex gap-2"><span className="text-brand-600 mt-0.5">→</span> Consolidated 3 shipments into 1 FCL container</li>
                  <li className="flex gap-2"><span className="text-brand-600 mt-0.5">→</span> Handled all CBSA customs documentation</li>
                </ul>
              </div>
              {/* After */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">Results (Year 1)</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-600 mt-0.5">✓</span> 38% reduction in per-unit product cost</li>
                  <li className="flex gap-2"><span className="text-green-600 mt-0.5">✓</span> Defect rate dropped from 12% to under 1%</li>
                  <li className="flex gap-2"><span className="text-green-600 mt-0.5">✓</span> Freight costs cut by $14,000</li>
                  <li className="flex gap-2"><span className="text-green-600 mt-0.5">✓</span> Customs cleared in 2 days average</li>
                </ul>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: "$42,000", label: "Total savings in year one" },
                { value: "38%", label: "Per-unit cost reduction" },
                { value: "< 1%", label: "Defect rate (down from 12%)" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-brand-700">{value}</div>
                  <div className="text-xs text-gray-600 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-brand-500 pl-5 italic text-gray-700 text-sm">
              &ldquo;AK Traders didn&apos;t just save us money — they transformed our entire supply chain. We now plan 18 months ahead with confidence instead of scrambling every quarter.&rdquo;
              <footer className="mt-2 text-xs text-gray-500 not-italic">— Michael Chen, Purchasing Manager, TechEdge Solutions</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
