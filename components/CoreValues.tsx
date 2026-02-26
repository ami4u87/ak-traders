import { Shield, HandshakeIcon, TrendingDown, Clock, Award, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Honesty & Integrity",
    desc: "We are transparent about supplier capabilities, pricing, lead times, and risks. No hidden fees, no false promises — just honest business.",
    iconClass: "text-white bg-blue-600",
    accent: "border-blue-300",
  },
  {
    icon: TrendingDown,
    title: "Maximum Cost Savings",
    desc: "Our core mission is reducing your import costs by 20–50%. We negotiate hard, source smart, and eliminate middlemen wherever possible.",
    iconClass: "text-white bg-green-600",
    accent: "border-green-300",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Cheap prices never mean compromised quality. We conduct rigorous factory audits and pre-shipment inspections on every order.",
    iconClass: "text-white bg-purple-600",
    accent: "border-purple-300",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Mindset",
    desc: "We treat your business like our own. Long-term relationships are our priority — 70% of our clients return for multiple orders.",
    iconClass: "text-white bg-rose-600",
    accent: "border-rose-300",
  },
  {
    icon: Clock,
    title: "Speed & Reliability",
    desc: "Deadlines matter. We keep you updated at every stage and work proactively to prevent delays from manufacturing to customs clearance.",
    iconClass: "text-white bg-amber-500",
    accent: "border-amber-300",
  },
  {
    icon: HandshakeIcon,
    title: "Regulatory Compliance",
    desc: "We ensure all imports meet Canadian CBSA requirements, product safety standards, and labelling regulations — so you never face seizures.",
    iconClass: "text-white bg-teal-600",
    accent: "border-teal-300",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-14">
          <span className="badge mb-3">Why Choose Us</span>
          <h2 className="section-title">Built on Honesty & Integrity</h2>
          <p className="section-subtitle">
            Our values aren&apos;t slogans — they&apos;re the principles that have kept clients
            coming back for over 20 years.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc, iconClass, accent }) => (
            <div
              key={title}
              className={`card group hover:border-brand-500`}
            >
              {/* Icon — solid coloured background so it's always visible */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconClass}
                            shadow-md group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
