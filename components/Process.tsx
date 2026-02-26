import { Search, MessageSquare, CheckSquare, Package, Truck, FileCheck, DollarSign } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Submit Your Requirements",
    desc: "Tell us what products you need, target price, quantity, and quality standards. We review and confirm feasibility within 24 hours.",
  },
  {
    icon: Search,
    step: "02",
    title: "Supplier Sourcing & Vetting",
    desc: "Our team identifies and verifies manufacturers from our network of 500+ trusted suppliers in China, Pakistan & Turkey.",
  },
  {
    icon: DollarSign,
    step: "03",
    title: "Price Negotiation",
    desc: "We leverage bulk buying power and long-term supplier relationships to negotiate the lowest possible prices on your behalf.",
  },
  {
    icon: CheckSquare,
    step: "04",
    title: "Sample & Quality Inspection",
    desc: "Before mass production, we arrange samples. Our QC team performs rigorous inspections at the factory to your specifications.",
  },
  {
    icon: Package,
    step: "05",
    title: "Production & Packaging",
    desc: "We oversee manufacturing, ensure proper packaging and labelling that meets Canadian retail and import standards.",
  },
  {
    icon: Truck,
    step: "06",
    title: "Shipping & Logistics",
    desc: "We arrange sea freight, air freight, or courier delivery — choosing the most cost-effective and reliable option for your timeline.",
  },
  {
    icon: FileCheck,
    step: "07",
    title: "Canadian Customs Clearance",
    desc: "We prepare all import documentation, handle CBSA requirements, duties, and taxes so your goods clear customs without delays.",
  },
  {
    icon: Package,
    step: "08",
    title: "Delivery to Your Door",
    desc: "Your products are delivered to your warehouse or address in Canada. We provide full tracking throughout the journey.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-3">How It Works</span>
          <h2 className="section-title">Our 8-Step Sourcing Process</h2>
          <p className="section-subtitle">
            From your first inquiry to products at your warehouse — we manage every step so you
            can focus on selling.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="relative bg-white rounded-2xl p-6 border-2 border-gray-200
                         hover:border-brand-500 hover:shadow-xl hover:-translate-y-1
                         transition-all duration-200 group"
            >
              {/* Step number badge — always visible */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-700 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                {step}
              </div>

              {/* Icon — solid blue so it stands out */}
              <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center mb-4
                              shadow-md group-hover:bg-brand-700 transition-colors duration-200">
                <Icon size={22} className="text-white" />
              </div>

              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline note — stronger background so it reads on gray section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-brand-700 text-white rounded-full px-6 py-3 text-sm font-medium shadow-md">
            <span>⏱</span>
            Typical timeline: <strong>30–60 days</strong> from inquiry to delivery (sea freight)
          </div>
        </div>
      </div>
    </section>
  );
}
