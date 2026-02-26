"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Clients Served", desc: "Across Canada" },
  { value: 20, suffix: "+", label: "Years Experience", desc: "In business since 2003" },
  { value: 35, suffix: "%", label: "Average Savings", desc: "On import costs" },
  { value: 50, suffix: "+", label: "Product Categories", desc: "From 3 countries" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
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
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
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
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-lg">{stat.label}</div>
              <div className="text-brand-300 text-sm mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
