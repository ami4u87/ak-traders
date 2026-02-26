import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import { Clock, ArrowRight, User } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog – Import Tips, Sourcing Guides & Industry News | A.K. Traders Ltd",
  description:
    "Expert guides on importing from China, Pakistan & Turkey to Canada. Learn about customs, pricing, shipping, and how to find reliable suppliers.",
};

const postImages: Record<string, string> = {
  "how-to-import-cheaply-from-china-2026":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
  "top-products-to-source-from-pakistan":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "benefits-of-turkey-sourcing-canada":
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=700&q=80",
};

const categoryColors: Record<string, string> = {
  "China Sourcing":   "bg-red-100 text-red-700 border-red-200",
  "Pakistan Sourcing":"bg-green-100 text-green-700 border-green-200",
  "Turkey Sourcing":  "bg-orange-100 text-orange-700 border-orange-200",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container-section text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Knowledge Base
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Import Smarter with Our Expert Guides
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">
            Practical advice on sourcing from China, Pakistan & Turkey — written by our team with
            20+ years of hands-on import experience.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                {/* Cover image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={postImages[post.slug] || "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&q=80"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 mt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
