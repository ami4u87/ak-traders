import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "China Sourcing", href: "/services/china" },
    { label: "Pakistan Sourcing", href: "/services/pakistan" },
    { label: "Turkey Sourcing", href: "/services/turkey" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "How to Import from China", href: "/blog/how-to-import-cheaply-from-china-2026" },
    { label: "Top Pakistan Products", href: "/blog/top-products-to-source-from-pakistan" },
    { label: "Turkey Sourcing Guide", href: "/blog/benefits-of-turkey-sourcing-canada" },
    { label: "Get a Free Quote", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-brand-700 py-10">
        <div className="container-section text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Start Saving on Imports?
          </h3>
          <p className="text-brand-200 mb-6 max-w-xl mx-auto">
            Get a free sourcing consultation today. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-accent">
              Request a Free Quote
            </Link>
            <a
              href="https://wa.me/12041234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.505A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.35l-.37-.22-3.835.911.947-3.743-.24-.38A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-section py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-4 hover:opacity-80 transition-opacity">
              <img
                src="/logo.jpg"
                alt="A.K. Traders Ltd"
                width={160}
                height={44}
                className="h-12 w-auto object-contain mb-1"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Canada&apos;s trusted sourcing partner since 2003. We help businesses import products
              cheaply from China, Pakistan & Turkey — handling everything from supplier vetting to
              Canadian customs.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:info@aktraders.ca"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-brand-400 shrink-0" />
                info@aktraders.ca
              </a>
              <a
                href="tel:+12041234567"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-brand-400 shrink-0" />
                +1 (204) 123-4567
              </a>
              <span className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="text-brand-400 shrink-0 mt-0.5" />
                Winnipeg, Manitoba, Canada
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-brand-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://wa.me/12041234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-brand-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.505A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.35l-.37-.22-3.835.911.947-3.743-.24-.38A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Services", links: footerLinks.services },
            { title: "Company", links: footerLinks.company },
            { title: "Resources", links: footerLinks.resources },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-900">
        <div className="container-section py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} A.K. Traders Ltd. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
