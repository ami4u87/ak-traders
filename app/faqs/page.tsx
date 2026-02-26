"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        q: "How does A.K. Traders' sourcing process work?",
        a: "Our process has 8 steps: (1) You submit product requirements to us; (2) We research and vet suppliers in China, Pakistan, or Turkey; (3) We negotiate the best prices on your behalf; (4) We arrange samples for your approval; (5) We conduct pre-shipment quality inspections; (6) We arrange shipping and logistics; (7) We handle Canadian customs clearance; (8) Your products are delivered to your door. We manage everything — you just approve and receive.",
      },
      {
        q: "What is the minimum order I can place?",
        a: "There is no minimum order value we require on our end — that depends on the supplier's MOQ (minimum order quantity). For China, MOQs typically start at 50–200 units depending on the product. For Pakistan, some textiles suppliers have MOQs of 100–500 kg of fabric or 200–500 finished garments. We work to negotiate low MOQs for first-time orders and can sometimes combine orders with other clients to reach minimums.",
      },
      {
        q: "How long does it take from inquiry to delivery?",
        a: "Timelines vary by product and shipping method. A typical sea freight order from China takes 45–70 days from inquiry to delivery: 5–7 days for supplier sourcing, 3–5 days for sample review, 15–30 days for production, and 25–35 days shipping. Air freight can reduce the shipping portion to 5–10 days. Rush orders are possible with air freight. We provide a detailed timeline estimate with every quote.",
      },
      {
        q: "Do I need any import experience to use your services?",
        a: "Absolutely not. We designed our service specifically for businesses that are new to importing. We guide you through every step, explain all costs and requirements in plain language, and handle the complex parts (customs, logistics, supplier communication) on your behalf. Many of our clients are first-time importers.",
      },
    ],
  },
  {
    category: "Pricing & Costs",
    faqs: [
      {
        q: "How do you ensure cheap/competitive prices?",
        a: "We negotiate prices in the local language (Mandarin, Urdu, etc.) and leverage our long-term supplier relationships to access factory-direct pricing. We also use our bulk buying knowledge to identify which pricing tiers to target, and we compare quotes from multiple suppliers to ensure you're getting the market's best price. Our clients typically save 25–50% versus sourcing independently or through distributors.",
      },
      {
        q: "What does A.K. Traders charge for its services?",
        a: "Our fee structure is transparent and performance-based: Starter plan charges 8% of the supplier invoice value; Pro Sourcing is 5% of the supplier invoice value (including QC inspection and customs coordination); Enterprise plans have custom volume-based pricing. There are no upfront consultation fees and no hidden charges. We only make money when you save money — our interests are fully aligned with yours.",
      },
      {
        q: "What are the total costs I should budget for?",
        a: "Your total landed cost in Canada includes: (1) Supplier/product cost; (2) Our sourcing fee (5–8%); (3) Ocean or air freight; (4) Insurance (recommended, ~1% of goods value); (5) Canadian customs duties (varies by product — 0 to 18%+); (6) GST (5% on total customs value); (7) Customs broker fees (~$150–400); (8) Drayage to your warehouse. We provide a full cost breakdown with every quote so you know your exact landed cost before committing.",
      },
      {
        q: "Are there any hidden fees I should know about?",
        a: "No. We are committed to full price transparency. Our quotes include all foreseeable costs. The only variables are Canadian customs duties (calculated by CBSA based on product classification) and freight rates (which can fluctuate with global shipping markets). We explain all of these upfront and provide ranges where exact figures aren't available at quote stage.",
      },
    ],
  },
  {
    category: "Quality & Customs",
    faqs: [
      {
        q: "How do you ensure quality of products from overseas suppliers?",
        a: "Quality assurance is multi-layered: (1) We only work with pre-vetted suppliers from our network; (2) We arrange samples before production begins; (3) We conduct pre-shipment inspections at the factory — checking quantity, dimensions, materials, workmanship, and packaging against your specification; (4) For ongoing orders, we conduct periodic factory audits. If products fail inspection, we require correction at the supplier's cost before shipping.",
      },
      {
        q: "Do you handle Canadian customs clearance?",
        a: "Yes — this is a core part of our service on Pro and Enterprise plans. We work with licensed Canadian customs brokers to prepare all CBSA documentation, classify products with correct HS codes, calculate duties accurately, and ensure compliance with Canadian product labelling and safety regulations. Our clients' shipments clear customs on time. If CBSA has questions, we handle the communication.",
      },
      {
        q: "Will my products meet Canadian safety and labelling requirements?",
        a: "We ensure compliance is built in from the start. This includes: bilingual (English/French) label requirements for consumer goods; product safety certifications (CSA, UL, HC approval) where required; product standards under the Canada Consumer Product Safety Act; food and health product regulations for relevant categories. We flag compliance requirements at the quote stage so there are no surprises.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`text-brand-500 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-section text-center">
          <HelpCircle size={48} className="text-brand-300 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">
            Everything you need to know about importing through A.K. Traders — from how we work
            to what it costs and how we handle Canadian customs.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container-section max-w-4xl">
          {faqCategories.map(({ category, faqs }) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand-600 rounded-full inline-block"></span>
                {category}
              </h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <FAQItem key={q} q={q} a={a} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-10 text-center mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Our team is happy to answer any specific questions about your products, your
              industry, or the import process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/12041234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-600">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.505A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.35l-.37-.22-3.835.911.947-3.743-.24-.38A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
