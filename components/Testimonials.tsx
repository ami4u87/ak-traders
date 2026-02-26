import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Marchetti",
    role: "Owner, Marchetti Home Goods – Toronto, ON",
    avatar: "DM",
    avatarColor: "bg-blue-600",
    rating: 5,
    quote:
      "A.K. Traders saved us over $18,000 on our first container of furniture from China. Their team handled everything — the factory inspection alone saved us from a costly mistake with a substandard supplier. I won't source without them again.",
    highlight: "Saved $18,000 on first order",
    country: "🇨🇳 China",
  },
  {
    name: "Sarah Okonkwo",
    role: "Founder, Luxe Textile Co. – Vancouver, BC",
    avatar: "SO",
    avatarColor: "bg-purple-600",
    rating: 5,
    quote:
      "We needed premium cotton fabrics sourced from Pakistan for our bedding line. AK Traders found us a certified manufacturer in Faisalabad at 40% below what we were paying locally. Quality has been consistently excellent across 6 orders now.",
    highlight: "40% cost reduction on textiles",
    country: "🇵🇰 Pakistan",
  },
  {
    name: "Michael Chen",
    role: "Purchasing Manager, TechEdge Solutions – Calgary, AB",
    avatar: "MC",
    avatarColor: "bg-green-600",
    rating: 5,
    quote:
      "Sourcing electronics components from China used to be a nightmare with customs delays and quality issues. AK Traders streamlined everything. Our last shipment of 5,000 units arrived on time, passed QC 100%, and cleared customs in 2 days.",
    highlight: "Zero customs delays, 100% QC pass",
    country: "🇨🇳 China",
  },
  {
    name: "Amina Hassan",
    role: "CEO, Noura Fashion – Montreal, QC",
    avatar: "AH",
    avatarColor: "bg-rose-600",
    rating: 5,
    quote:
      "I was skeptical about sourcing cosmetics from Turkey, but AK Traders connected me with an EU-certified manufacturer. The products are high quality, halal-certified, and cost 30% less than our previous Canadian supplier. Exceptional service.",
    highlight: "30% savings + EU certification",
    country: "🇹🇷 Turkey",
  },
  {
    name: "Robert Beaulieu",
    role: "Director, Prairie Hardware Supply – Winnipeg, MB",
    avatar: "RB",
    avatarColor: "bg-orange-600",
    rating: 5,
    quote:
      "Three years working with AK Traders and they've never let us down. Their knowledge of Chinese manufacturing standards and Canadian import regulations is unmatched. They're not just a service — they're a strategic partner.",
    highlight: "3+ year partnership",
    country: "🇨🇳 China",
  },
  {
    name: "Jennifer Park",
    role: "Buyer, Coast Home Décor – Surrey, BC",
    avatar: "JP",
    avatarColor: "bg-teal-600",
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
              className="card flex flex-col group hover:border-brand-200 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-brand-400 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-accent-500 fill-accent-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200 mb-5 self-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 ${t.avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm truncate">{t.name}</div>
                  <div className="text-xs text-gray-500 truncate">{t.role}</div>
                </div>
                <span className="text-sm shrink-0">{t.country}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Case study callout */}
        <div className="mt-12 bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-brand-900 mb-2">
            Case Study: Electronics Retailer Saved $42,000 in Year One
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            A Toronto-based electronics retailer switched from a US distributor to direct sourcing
            through A.K. Traders. By sourcing directly from Shenzhen manufacturers, we reduced
            their per-unit cost by 38% and consolidated 3 shipments into 1, saving $42,000 in
            their first year. Read the full case study →
          </p>
          <div className="mt-4">
            <span className="badge text-sm">📋 Full Case Study Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
