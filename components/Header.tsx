"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "🇨🇳 China Sourcing", href: "/services/china", desc: "Electronics, textiles & more" },
      { label: "🇵🇰 Pakistan Sourcing", href: "/services/pakistan", desc: "Textiles, home goods & crafts" },
      { label: "🇹🇷 Turkey Sourcing", href: "/services/turkey", desc: "Furniture, cosmetics & fashion" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Timeout ref to prevent dropdown closing when crossing the hover gap
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white border-b border-gray-200"
      }`}
    >
      {/* Top bar */}
      <div className="bg-brand-900 text-white text-sm py-1.5">
        <div className="container-section flex items-center justify-between">
          <span className="flex items-center gap-2 text-brand-100">
            <Globe size={14} />
            Serving Canadian businesses since 2003
          </span>
          <a
            href="https://wa.me/12041234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-100 hover:text-accent-400 transition-colors font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.505A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.35l-.37-.22-3.835.911.947-3.743-.24-.38A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-section">
        <div className="flex items-center justify-between h-16">

          {/* ─── Logo + Name ─── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 hover:opacity-90 transition-opacity">
            <img
              src="/logo.jpg"
              alt="A.K. Traders Ltd"
              width={185}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-base font-extrabold text-brand-900 tracking-tight">
                AK Traders Ltd.
              </span>
              <span className="block text-xs text-accent-600 font-semibold italic">
                You Name it, We Trade it!
              </span>
            </div>
          </Link>

          {/* ─── Desktop nav ─── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                /* Services with dropdown */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 ${
                      isActive(link.href)
                        ? "text-white bg-brand-600"
                        : "text-gray-700 hover:text-brand-700 hover:bg-brand-100"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Invisible bridge — fills the mt gap so mouse doesn't lose hover */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 right-0 h-2" />
                  )}

                  {servicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-68 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 dropdown-enter z-50"
                      onMouseEnter={openDropdown}
                      onMouseLeave={scheduleClose}
                      style={{ width: "260px" }}
                    >
                      {/* "View all" header */}
                      <div className="px-4 py-2 border-b border-gray-100 mb-1">
                        <Link
                          href="/services"
                          className="text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors uppercase tracking-wider"
                        >
                          View All Services →
                        </Link>
                      </div>

                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-3 hover:bg-brand-600 hover:text-white transition-all duration-150 group/item rounded-sm mx-1"
                        >
                          <span className="text-sm font-semibold text-gray-900 group-hover/item:text-white">
                            {child.label}
                          </span>
                          <span className="text-xs text-gray-500 group-hover/item:text-brand-100 mt-0.5">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 ${
                    isActive(link.href)
                      ? "text-white bg-brand-600"
                      : "text-gray-700 hover:text-brand-700 hover:bg-brand-100"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
              Get a Free Quote
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-brand-100 hover:text-brand-700 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile menu ─── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <nav className="container-section py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-gray-800 hover:bg-brand-100 hover:text-brand-700 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-400 pl-3">
                      <Link
                        href="/services"
                        className="block px-3 py-2 text-sm font-bold text-brand-700 hover:bg-brand-100 rounded-md transition-colors"
                      >
                        All Services →
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-100 hover:text-brand-700 rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    isActive(link.href)
                      ? "text-white bg-brand-600"
                      : "text-gray-800 hover:bg-brand-100 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gray-100">
              <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
