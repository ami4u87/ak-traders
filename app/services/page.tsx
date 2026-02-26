import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sourcing Services – China, Pakistan & Turkey | A.K. Traders Ltd",
  description:
    "Full-service product sourcing from China (90%), Pakistan & Turkey. Includes supplier vetting, price negotiation, QC inspections, shipping & Canadian customs clearance.",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "No upfront cost",
    badge: null,
    desc: "Best for businesses exploring sourcing for the first time.",
    features: [
      "Free initial consultation",
      "Supplier research (up to 3 options)",
      "Basic price comparison report",
      "Email support",
      "Commission on orders: 8%",
    ],
    cta: "Get Started Free",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Pro Sourcing",
    price: "5%",
    priceNote: "of order value",
    badge: "Most Popular",
    desc: "Full-service sourcing for growing businesses with regular import needs.",
    features: [
      "Everything in Starter",
      "Unlimited supplier options",
      "Full price negotiation",
      "Pre-shipment QC inspection",
      "Shipping & logistics coordination",
      "Canadian customs documentation",
      "Dedicated account manager",
      "WhatsApp priority support",
    ],
    cta: "Start with Pro",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "Volume pricing",
    badge: null,
    desc: "For large businesses with high-volume or multi-product sourcing needs.",
    features: [
      "Everything in Pro",
      "Dedicated sourcing team",
      "On-site factory visits",
      "Private label & OEM support",
      "Consolidation warehousing",
      "Duty drawback consulting",
      "Monthly reporting dashboard",
      "SLA-backed turnaround times",
    ],
    cta: "Contact for Pricing",
    href: "/contact",
    highlighted: false,
  },
];

const allServices = [
  {
    title: "Supplier Identification & Vetting",
    desc: "We identify and background-check manufacturers, trading companies, and wholesalers from our network of 500+ pre-verified suppliers — plus sourcing new ones to fit your specific needs.",
  },
  {
    title: "Price Negotiation",
    desc: "Our team negotiates directly in the local language, leveraging volume relationships to consistently secure 20–40% lower pricing than clients achieve on their own.",
  },
  {
    title: "Sample Sourcing & Evaluation",
    desc: "Before committing to a full order, we arrange samples from shortlisted suppliers and evaluate them against your specifications, recommending the best option.",
  },
  {
    title: "Pre-Shipment Quality Inspection",
    desc: "Our QC team inspects finished goods at the factory before shipment — checking dimensions, materials, workmanship, and packaging to your exact requirements.",
  },
  {
    title: "Factory Audits",
    desc: "For ongoing supplier relationships, we conduct formal factory audits covering production capacity, quality management systems, worker conditions, and certifications.",
  },
  {
    title: "Shipping & Freight Coordination",
    desc: "We arrange the optimal shipping method (sea FCL/LCL, air freight, or courier), negotiate freight rates, and provide full tracking from factory to Canadian port.",
  },
  {
    title: "Canadian Customs Clearance",
    desc: "Our licensed customs broker handles all CBSA paperwork, HS codes, duty calculations, and compliance requirements so your goods clear without delays or penalties.",
  },
  {
    title: "Private Label & OEM Support",
    desc: "Want your own branded products? We manage private label development, packaging design compliance, and OEM manufacturing agreements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-section text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Full-Service Sourcing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Everything You Need to Import Cheaper
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto leading-relaxed">
            From finding the right factory to clearing Canadian customs, we handle every step of
            the import process — so you focus on selling, not logistics.
          </p>
        </div>
      </section>

      {/* Source countries */}
      <section className="py-16 bg-white">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Choose Your Sourcing Market</h2>
            <p className="section-subtitle">
              We specialise in three of the world&apos;s best-value manufacturing regions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/services/china",
                flag: "🇨🇳",
                title: "China Sourcing",
                desc: "Electronics, textiles, machinery, toys, home goods & 10,000+ categories from the world's manufacturing hub.",
                volume: "90% of Our Volume",
                color: "border-red-200 hover:border-red-400",
                badgeColor: "bg-red-50 text-red-700",
              },
              {
                href: "/services/pakistan",
                flag: "🇵🇰",
                title: "Pakistan Sourcing",
                desc: "Premium cotton textiles, surgical instruments, sporting goods, leather goods & handmade crafts.",
                volume: "Textiles Specialist",
                color: "border-green-200 hover:border-green-400",
                badgeColor: "bg-green-50 text-green-700",
              },
              {
                href: "/services/turkey",
                flag: "🇹🇷",
                title: "Turkey Sourcing",
                desc: "EU-quality furniture, cosmetics, fashion, ceramics & food products at competitive Asian prices.",
                volume: "European Standards",
                color: "border-orange-200 hover:border-orange-400",
                badgeColor: "bg-orange-50 text-orange-700",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`card border-2 ${item.color} transition-all hover:-translate-y-1 group`}
              >
                <div className="text-4xl mb-3">{item.flag}</div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.badgeColor} mb-3 inline-block`}>
                  {item.volume}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-brand-600 text-sm font-semibold flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All services list */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-14">
            <span className="badge text-sm mb-3">What&apos;s Included</span>
            <h2 className="section-title">Our Complete Service Suite</h2>
            <p className="section-subtitle">
              Every service below is available across all three sourcing markets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allServices.map(({ title, desc }) => (
              <div key={title} className="card hover:border-brand-200 transition-all">
                <CheckCircle size={20} className="text-brand-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="text-center mb-14">
            <span className="badge text-sm mb-3">Transparent Pricing</span>
            <h2 className="section-title">Simple, Performance-Based Pricing</h2>
            <p className="section-subtitle">
              We only make money when you save money. Our commission model aligns our
              interests with yours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-brand-600 bg-brand-50 shadow-xl"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-brand-700">{plan.price}</span>
                    <span className="text-sm text-gray-500">{plan.priceNote}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.desc}</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle
                        size={15}
                        className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-brand-600" : "text-green-500"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={plan.highlighted ? "btn-primary justify-center" : "btn-secondary justify-center"}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include a free initial consultation. Commission is charged on the supplier
            invoice value only — no hidden fees.
          </p>
        </div>
      </section>
    </>
  );
}
