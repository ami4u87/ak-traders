import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Sourcing Quote | A.K. Traders Ltd",
  description:
    "Contact A.K. Traders Ltd for a free product sourcing quote from China, Pakistan & Turkey. WhatsApp, email, or fill in the form — we respond within 24 hours.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@aktraders.ca",
    href: "mailto:info@aktraders.ca",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (204) 123-4567",
    href: "tel:+12041234567",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Winnipeg, Manitoba, Canada",
    href: null,
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9am–6pm CST",
    href: null,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-section text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Free, No-Obligation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Get a Free Sourcing Quote Today
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">
            Tell us what you need to source and we&apos;ll research suppliers, estimate costs, and
            get back to you within 24 hours — completely free and with no commitment required.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-600 text-sm">
                  Multiple ways to reach us — choose whatever is most convenient.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color} shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-gray-900 hover:text-brand-700 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-gray-900">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/12041234567?text=Hi%20AK%20Traders%2C%20I%27d%20like%20a%20sourcing%20quote%20for..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 transition-colors w-full"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.505A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.35l-.37-.22-3.835.911.947-3.743-.24-.38A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <div>
                  <div className="font-semibold text-sm">Chat on WhatsApp</div>
                  <div className="text-xs text-green-100">Usually replies within 1 hour</div>
                </div>
              </a>

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-gray-200 h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84063.03796582483!2d-97.23993747460938!3d49.89539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73b3d50d1a11%3A0xd3a21fdfd7f4210f!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A.K. Traders Ltd — Winnipeg, Manitoba"
                />
              </div>

              {/* Response promise */}
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-900 text-sm mb-3">Our Response Promise</h3>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Quote request acknowledged within 2 hours
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Full sourcing assessment within 24 hours
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    Supplier options & price estimates in 5–7 days
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    24/7 WhatsApp availability for urgent queries
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us Your Requirements</h2>
              <p className="text-gray-600 text-sm mb-8">
                The more detail you provide, the faster and more accurate our sourcing research will be.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-section">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Our Global Offices & Contacts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                flag: "🇨🇦",
                city: "Winnipeg, Canada",
                role: "Headquarters",
                contact: "info@aktraders.ca",
                phone: "+1 (204) 123-4567",
              },
              {
                flag: "🇨🇳",
                city: "Shenzhen, China",
                role: "China Sourcing Hub",
                contact: "china@aktraders.ca",
                phone: "+86 755 1234 5678",
              },
              {
                flag: "🇵🇰",
                city: "Lahore, Pakistan",
                role: "Pakistan Sourcing",
                contact: "pakistan@aktraders.ca",
                phone: "+92 42 1234 5678",
              },
              {
                flag: "🇹🇷",
                city: "Istanbul, Turkey",
                role: "Turkey Sourcing",
                contact: "turkey@aktraders.ca",
                phone: "+90 212 123 4567",
              },
            ].map(({ flag, city, role, contact, phone }) => (
              <div key={city} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="text-2xl mb-2">{flag}</div>
                <div className="font-bold text-gray-900 text-sm">{city}</div>
                <div className="text-xs text-brand-600 font-medium mb-3">{role}</div>
                <a href={`mailto:${contact}`} className="block text-xs text-gray-600 hover:text-brand-600 transition-colors mb-1">
                  {contact}
                </a>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="block text-xs text-gray-600 hover:text-brand-600 transition-colors">
                  {phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
