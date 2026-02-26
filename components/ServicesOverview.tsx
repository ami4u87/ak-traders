import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    flag: "🇨🇳",
    country: "China Sourcing",
    href: "/services/china",
    badge: "90% of Our Volume",
    badgeClass: "bg-red-600 text-white",
    desc: "The world's manufacturing hub. Source electronics, textiles, machinery, toys, home goods, and 10,000+ other product categories at factory-direct prices.",
    bullets: ["Factory-direct pricing", "Strict QC inspections", "Shenzhen, Guangzhou & Yiwu networks"],
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=700&q=80",
    imageAlt: "China factory manufacturing floor — sourcing electronics and textiles",
    accentColor: "border-red-400",
  },
  {
    flag: "🇵🇰",
    country: "Pakistan Sourcing",
    href: "/services/pakistan",
    badge: "Textiles & Crafts",
    badgeClass: "bg-green-600 text-white",
    desc: "Pakistan is a world leader in cotton textiles, surgical instruments, sporting goods, and handmade crafts. Excellent quality at highly competitive prices.",
    bullets: ["Premium cotton & linen fabrics", "Sialkot sports & surgical goods", "Handicrafts & home décor"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    imageAlt: "Pakistani textile manufacturing — sourcing fabrics and garments",
    accentColor: "border-green-400",
  },
  {
    flag: "🇹🇷",
    country: "Turkey Sourcing",
    href: "/services/turkey",
    badge: "European Quality",
    badgeClass: "bg-orange-600 text-white",
    desc: "Turkey bridges East and West, offering European-quality goods at Asian-competitive prices. Ideal for furniture, fashion, cosmetics, and food products.",
    bullets: ["EU-compliant standards", "Fashion, cosmetics & ceramics", "Faster shipping than China"],
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=700&q=80",
    imageAlt: "Turkish market — sourcing furniture, cosmetics and fashion",
    accentColor: "border-orange-400",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-14">
          <span className="badge mb-3">Our Services</span>
          <h2 className="section-title">Sourcing from 3 Powerful Markets</h2>
          <p className="section-subtitle">
            We combine deep local expertise in China, Pakistan & Turkey with Canadian import
            knowledge to get you the best products at the lowest landed cost.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((svc, idx) => (
            <div
              key={svc.country}
              className={`grid lg:grid-cols-2 gap-0 items-stretch bg-white rounded-2xl overflow-hidden
                          border-2 ${svc.accentColor} shadow-md
                          hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Image panel */}
              <div className={`relative h-60 lg:h-auto min-h-[260px] ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay so badge is always legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${svc.badgeClass}`}>
                    {svc.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl drop-shadow-md">{svc.flag}</span>
                </div>
              </div>

              {/* Content panel */}
              <div className={`p-8 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.country}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{svc.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-gray-800 font-medium">
                      <CheckCircle size={16} className="text-brand-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href={svc.href} className="btn-primary text-sm">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
