import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog – Import Tips, Sourcing Guides & Industry News | A.K. Traders Ltd",
  description:
    "Expert guides on importing from China, Pakistan & Turkey to Canada. Learn about customs, pricing, shipping, and how to find reliable suppliers.",
};

const categoryColors: Record<string, string> = {
  "China Sourcing": "bg-red-100 text-red-700",
  "Pakistan Sourcing": "bg-green-100 text-green-700",
  "Turkey Sourcing": "bg-orange-100 text-orange-700",
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
                className="card flex flex-col hover:border-brand-200 hover:-translate-y-1 transition-all duration-200 group"
              >
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={15} className="text-brand-400" />
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[post.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} />
                </span>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 mt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 ${post.authorColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {post.authorInitials}
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
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
