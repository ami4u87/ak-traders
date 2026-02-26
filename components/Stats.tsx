"use client";

import { useEffect, useRef, useState } from "react";
import { Users, TrendingDown, Clock, Package } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 1000,
    prefix: "",
    suffix: "+",
    label: "Clients Served",
    desc: "Across Canada since 2003",
    iconClass: "bg-blue-500",
  },
  {
    icon: Clock,
    value: 20,
    prefix: "",
    suffix: "+ Yrs",
    label: "Experience",
    desc: "In business since 2003",
    iconClass: "bg-purple-500",
  },
  {
    icon: TrendingDown,
    value: 50,
    prefix: "Up to ",
    suffix: "%",
    label: "Average Savings",
    desc: "On import costs vs. retail",
    iconClass: "bg-green-500",
  },
  {
    icon: Package,
    value: 10000,
    prefix: "",
    suffix: "+",
    label: "Product Categories",
    desc: "From 3 sourcing countries",
    iconClass: "bg-amber-500",
  },
];

function Counter({ end, prefix, suffix }: { end: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1800;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    };

    // Fire immediately if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) start(); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  const display = end >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent-400 mb-1">
      {prefix}{display}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand-800 py-16">
      <div className="container-section">
        <div className="text-center mb-10">
          <span className="inline-block bg-white/20 text-white border border-white/30 text-sm font-semibold px-3 py-1 rounded-full">
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Numbers That Speak for Themselves
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <div className={`w-10 h-10 ${stat.iconClass} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <stat.icon size={20} className="text-white" />
              </div>
              <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-white font-semibold text-base">{stat.label}</div>
              <div className="text-brand-300 text-xs mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
