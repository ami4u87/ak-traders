import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CoreValues from "@/components/CoreValues";
import Process from "@/components/Process";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "A.K. Traders Ltd – Cheap Product Sourcing from China, Pakistan & Turkey to Canada",
  description:
    "Save 20–50% on imports. A.K. Traders Ltd helps Canadian businesses source products cheaply from China (90%), Pakistan & Turkey. Free quotes, full service.",
};

const blogPreviews = [
  {
    slug: "how-to-import-cheaply-from-china-2026",
    title: "How to Import Cheaply from China in 2026",
    excerpt:
      "A complete guide for Canadian businesses covering MOQs, shipping modes, tariff codes, and how to avoid common costly mistakes.",
    category: "China Sourcing",
    date: "Feb 10, 2026",
    readTime: "8 min read",
  },
  {
    slug: "top-products-to-source-from-pakistan",
    title: "Top 10 Products to Source from Pakistan in 2026",
    excerpt:
      "Pakistan excels in textiles, surgical instruments, sporting goods and more. Here's what Canadian retailers should be importing.",
    category: "Pakistan Sourcing",
    date: "Jan 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "benefits-of-turkey-sourcing-canada",
    title: "Benefits of Turkey Sourcing for Canadian Businesses",
    excerpt:
      "Why Turkey is an underrated sourcing destination: EU-quality goods, faster shipping than Asia, and competitive pricing.",
    category: "Turkey Sourcing",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CoreValues />

      {/* What We Do - Middleman Explainer */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge text-sm mb-4 block">What We Do</span>
              <h2 className="section-title text-left">
                We&apos;re Your Trusted Middleman for Cheap Imports
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Most Canadian businesses overpay for imported goods because they lack the contacts,
                language skills, and knowledge to source directly from overseas manufacturers.
                That&apos;s where A.K. Traders Ltd comes in.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We act as your local representative in China, Pakistan & Turkey — vetting suppliers,
                negotiating prices, inspecting quality, and handling all the complex logistics and
                Canadian customs requirements so you receive high-quality products at the lowest
                possible price.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { stat: "Save 20–50%", label: "On product costs" },
                  { stat: "500+", label: "Verified suppliers" },
                  { stat: "24 hrs", label: "Quote turnaround" },
                  { stat: "3 countries", label: "Sourcing markets" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="bg-brand-50 rounded-xl p-4 border border-brand-100">
                    <div className="text-xl font-bold text-brand-700">{stat}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Our Full Story <ArrowRight size={16} />
              </Link>
            </div>

            {/* Process mini-infographic */}
            <div className="space-y-3">
              {[
                { step: "You", arrow: false, label: "Tell us what you need", icon: "💬", color: "bg-blue-50 border-blue-200" },
                { step: null, arrow: true },
                { step: "Us", arrow: false, label: "Source, negotiate & inspect", icon: "🔍", color: "bg-brand-50 border-brand-200" },
                { step: null, arrow: true },
                { step: "Factory", arrow: false, label: "Manufacture to your specs", icon: "🏭", color: "bg-purple-50 border-purple-200" },
                { step: null, arrow: true },
                { step: "Us", arrow: false, label: "Ship & clear Canadian customs", icon: "🚢", color: "bg-green-50 border-green-200" },
                { step: null, arrow: true },
                { step: "You", arrow: false, label: "Receive goods & save money", icon: "📦", color: "bg-amber-50 border-amber-200" },
              ].map((item, i) =>
                item.arrow ? (
                  <div key={i} className="flex justify-center text-gray-400 text-xl">↓</div>
                ) : (
                  <div
                    key={i}
                    className={`flex items-center gap-4 rounded-xl border p-4 ${item.color}`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-bold text-gray-900">{item.step}:</span>{" "}
                      <span className="text-gray-700 text-sm">{item.label}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Process />
      <ServicesOverview />
      <Testimonials />

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge text-sm mb-3 block">Knowledge Base</span>
              <h2 className="section-title text-left mb-0">Latest from Our Blog</h2>
            </div>
            <Link href="/blog" className="btn-secondary text-sm whitespace-nowrap">
              View All Posts <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPreviews.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card hover:border-brand-200 hover:-translate-y-1 transition-all duration-200 group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-brand-500" />
                  <span className="badge text-xs">{post.category}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ teaser */}
      <section className="py-16 bg-white">
        <div className="container-section text-center">
          <HelpCircle size={40} className="text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Find answers to common questions about our process, pricing, and how we handle
            Canadian customs.
          </p>
          <Link href="/faqs" className="btn-primary">
            Browse FAQs <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Quote CTA section */}
      <section className="py-20 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Free, No-Obligation Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Tell Us What You Need to Source
              </h2>
              <p className="text-brand-200 mb-8 leading-relaxed">
                Fill out the form and our team will research suppliers, assess feasibility, and
                send you a detailed cost comparison within 24 hours — completely free.
              </p>
              <div className="space-y-3">
                {[
                  "No commitment required to get a quote",
                  "Receive supplier options with real price estimates",
                  "Full breakdown of shipping & import duties",
                  "24/7 WhatsApp support available",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-brand-100 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent-400 rounded-full shrink-0"></span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
