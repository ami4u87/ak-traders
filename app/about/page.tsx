import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – A.K. Traders Ltd",
  description:
    "Learn about A.K. Traders Ltd — Canada's trusted sourcing partner since 2003. Our story, mission, team, and how we help businesses import cheaply from China, Pakistan & Turkey.",
};

const team = [
  {
    name: "Ahmed Karimi",
    role: "Founder & CEO",
    initials: "AK",
    color: "bg-brand-700",
    bio: "With 20+ years of international trade experience, Ahmed founded A.K. Traders in 2003 after recognizing that Canadian SMEs were overpaying for imports due to lack of direct supplier access. Fluent in Mandarin, Urdu, and English, he leads our supplier relationships across all three markets.",
    expertise: ["China Manufacturing", "Supply Chain", "Canadian Import Law"],
  },
  {
    name: "Zara Mirza",
    role: "Head of Operations & Quality Control",
    initials: "ZM",
    color: "bg-purple-600",
    bio: "Zara brings 12 years of manufacturing quality assurance expertise, having worked with factories in Shenzhen, Lahore, and Istanbul. She leads our QC inspection team and ensures every shipment meets client specifications before leaving the factory.",
    expertise: ["QC Inspections", "Factory Audits", "ISO Standards"],
  },
  {
    name: "Daniel Tremblay",
    role: "Canadian Customs & Logistics Manager",
    initials: "DT",
    color: "bg-green-600",
    bio: "A licensed Canadian customs broker with 10 years of experience, Daniel manages all import documentation, CBSA compliance, and freight coordination. His expertise ensures our clients' shipments clear customs without delays or penalties.",
    expertise: ["CBSA Compliance", "Freight Logistics", "Trade Regulations"],
  },
];

const milestones = [
  { year: "2003", event: "Founded in Winnipeg, Manitoba with focus on China-to-Canada textiles" },
  { year: "2008", event: "Expanded services to Pakistan sourcing; opened Lahore office contacts" },
  { year: "2012", event: "Reached 250+ active clients; launched dedicated QC inspection service" },
  { year: "2016", event: "Added Turkey sourcing division to serve growing demand for EU-quality goods" },
  { year: "2019", event: "Surpassed 750 clients served; launched digital client portal for order tracking" },
  { year: "2023", event: "Celebrated 20 years — 1,000+ clients served, $2M+ in documented client savings" },
  { year: "2026", event: "Continuing to grow with expanded supplier networks and enhanced digital services" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-section text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Two Decades of Trusted Sourcing
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2003, A.K. Traders Ltd has helped Canadian businesses source quality products
            cheaply from China, Pakistan & Turkey — with honesty, integrity, and measurable savings.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge text-sm mb-4">Our Mission</span>
              <h2 className="section-title text-left">
                Bridging Canadian Businesses with the World&apos;s Best Factories
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                A.K. Traders Ltd was born from a simple frustration: Canadian small and
                medium-sized businesses were paying 30–50% more for imported products than
                necessary because they lacked direct relationships with overseas manufacturers.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Our mission is to level the playing field. By acting as your eyes, ears, and
                voice in China, Pakistan & Turkey, we give your business the same purchasing power
                and supplier access that Fortune 500 companies enjoy — at a fraction of the cost.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                <strong>90% of our sourcing volume comes from China</strong> — the world&apos;s
                manufacturing powerhouse. We supplement this with Pakistan&apos;s world-class
                textiles and Turkey&apos;s European-quality goods, giving clients a complete
                sourcing solution.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Globe, text: "3 Sourcing Markets" },
                  { icon: Users, text: "1,000+ Clients" },
                  { icon: Target, text: "20+ Years Experience" },
                  { icon: Award, text: "500+ Verified Suppliers" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-2 text-sm text-brand-800 font-medium">
                    <Icon size={15} className="text-brand-600" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-xl">
              {/*
                Placeholder: Insert image of professional team meeting or office
                Recommended: Unsplash business/team photo
              */}
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80"
                alt="A.K. Traders Ltd team meeting — professional sourcing and trading team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-14">
            <span className="badge text-sm mb-3">Our Journey</span>
            <h2 className="section-title">20+ Years of Growth</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-brand-200 hidden sm:block"></div>
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-16 shrink-0 hidden sm:block">
                    <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold relative z-10">
                      {year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-brand-200 transition-colors">
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
                      {year}
                    </span>
                    <p className="text-gray-700 mt-1 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="text-center mb-14">
            <span className="badge text-sm mb-3">The Team</span>
            <h2 className="section-title">Meet the People Behind Your Savings</h2>
            <p className="section-subtitle">
              Our multilingual team combines deep knowledge of overseas manufacturing with Canadian
              import expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card text-center hover:-translate-y-1 transition-all duration-200">
                <div
                  className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-0.5">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-16 bg-brand-50 border-y border-brand-100">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Global Network</h2>
            <p className="text-gray-600">Offices & supplier contacts across 3 continents</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { flag: "🇨🇦", city: "Winnipeg, Canada", role: "Headquarters" },
              { flag: "🇨🇳", city: "Shenzhen & Guangzhou, China", role: "Primary Sourcing Hub" },
              { flag: "🇵🇰", city: "Lahore & Karachi, Pakistan", role: "Textiles & Crafts" },
              { flag: "🇹🇷", city: "Istanbul, Turkey", role: "Fashion & Furniture" },
            ].map(({ flag, city, role }) => (
              <div key={city} className="bg-white rounded-xl border border-brand-100 p-5 text-center">
                <div className="text-3xl mb-2">{flag}</div>
                <div className="font-semibold text-gray-900 text-sm">{city}</div>
                <div className="text-xs text-brand-600 font-medium mt-1">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Get a free sourcing consultation and see exactly how much you could save on your next
            import order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
