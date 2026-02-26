"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Shield, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  "Save 20–50% on product costs",
  "Quality-checked before shipping",
  "Canadian customs handled end-to-end",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
      {/* Background shipping image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=60"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container-section py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
          >
            {/* Logo + name */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.jpg"
                alt="A.K. Traders Ltd"
                className="h-16 w-auto object-contain shrink-0 drop-shadow-lg"
              />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                  AK Traders Ltd.
                </div>
                <div className="text-accent-400 font-semibold text-base md:text-lg italic mt-0.5">
                  &ldquo;You Name it, We Trade it!&rdquo;
                </div>
              </div>
            </div>

            <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              🇨🇦 Trusted Canadian Sourcing Partner Since 2003
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Source Products Cheaply from{" "}
              <span className="text-accent-400">China, Pakistan & Turkey</span>{" "}
              — We Handle Everything
            </h1>

            <p className="text-lg md:text-xl text-brand-200 mb-8 leading-relaxed max-w-xl">
              A.K. Traders Ltd connects Canadian businesses with verified overseas suppliers.
              We negotiate the best prices, inspect quality, manage logistics & clear Canadian
              customs — so you save more and stress less.
            </p>

            <ul className="space-y-2.5 mb-9">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-brand-100">
                  <CheckCircle size={18} className="text-accent-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm">
                <Shield size={15} className="text-accent-400" />
                <span className="text-white font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm">
                <DollarSign size={15} className="text-accent-400" />
                <span className="text-white font-medium">Performance-Based Fee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-accent text-base px-8 py-3.5">
                Request a Free Quote
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-ghost text-base px-8 py-3.5">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80"
                alt="Global shipping containers — sourcing from China, Pakistan and Turkey to Canada"
                width={700}
                height={470}
                className="object-cover w-full h-80 lg:h-96"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-900/90 to-transparent p-6">
                <div className="flex gap-6 text-white">
                  <div>
                    <div className="text-2xl font-bold text-accent-400">1,000+</div>
                    <div className="text-xs text-brand-200">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-400">20+ Yrs</div>
                    <div className="text-xs text-brand-200">Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-400">$42M+</div>
                    <div className="text-xs text-brand-200">Client Savings</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white text-brand-800 rounded-xl shadow-lg px-4 py-3 text-center border border-brand-100">
              <div className="text-2xl font-bold text-brand-700">90%</div>
              <div className="text-xs text-gray-600 font-medium">China Sourcing</div>
            </div>
          </motion.div>
        </div>

        {/* Country flags bar */}
        <motion.div
          className="mt-14 pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-brand-200 text-sm font-medium text-center mb-5">
            We source products from these countries to Canada
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { flag: "🇨🇳", country: "China", focus: "90% of volume" },
              { flag: "🇵🇰", country: "Pakistan", focus: "Textiles & crafts" },
              { flag: "🇹🇷", country: "Turkey", focus: "Furniture & fashion" },
              { flag: "🇨🇦", country: "Canada", focus: "Final destination" },
            ].map(({ flag, country, focus }) => (
              <div key={country} className="flex items-center gap-2.5 bg-white/15 border border-white/25 rounded-full px-4 py-2.5 hover:bg-white/25 transition-colors">
                <span className="text-xl">{flag}</span>
                <div>
                  <div className="text-sm font-bold text-white">{country}</div>
                  <div className="text-xs text-brand-200">{focus}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
