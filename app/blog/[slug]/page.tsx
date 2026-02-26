import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/lib/blogData";
import { Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | A.K. Traders Blog`,
    description: post.excerpt,
  };
}

// Very lightweight markdown → HTML renderer (no external dependency needed)
function renderMarkdown(content: string): string {
  return content
    .trim()
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-800 mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Links
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-brand-600 font-medium hover:underline">$1</a>'
    )
    // Bullet points
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-gray-700"><span class="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 shrink-0"></span><span>$1</span></li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((<li[^>]*>[\s\S]*?<\/li>\n?)+)/gm, '<ul class="space-y-2 my-4">$1</ul>')
    // Paragraphs (lines not starting with < that have content)
    .replace(/^(?!<[a-z])(.+)$/gm, '<p class="text-gray-700 leading-relaxed my-4">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p[^>]*>\s*<\/p>/g, "");
}

const categoryColors: Record<string, string> = {
  "China Sourcing": "bg-red-100 text-red-700",
  "Pakistan Sourcing": "bg-green-100 text-green-700",
  "Turkey Sourcing": "bg-orange-100 text-orange-700",
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="container-section max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-300 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <BookOpen size={16} className="text-brand-300" />
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                categoryColors[post.category] || "bg-white/20 text-white"
              }`}
            >
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-brand-300 text-sm">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 ${post.authorColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}
              >
                {post.authorInitials}
              </div>
              <span>{post.author}</span>
            </div>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-section max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article */}
            <article className="lg:col-span-3">
              <div
                className="prose-custom text-gray-700"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5">
                  <h3 className="font-bold text-brand-900 mb-2 text-sm">
                    Ready to Start Sourcing?
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Get a free quote and start saving on your next import order.
                  </p>
                  <Link href="/contact" className="btn-primary text-sm py-2.5 w-full justify-center">
                    Free Quote
                  </Link>
                </div>

                {/* Related posts */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Related Articles</h3>
                  <div className="space-y-3">
                    {blogPosts
                      .filter((p) => p.slug !== post.slug)
                      .map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="block p-3 rounded-lg border border-gray-100 hover:border-brand-200 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-brand-600 mb-1">
                            {related.category}
                          </div>
                          <p className="text-sm text-gray-800 font-medium leading-snug group-hover:text-brand-700 transition-colors">
                            {related.title}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Post navigation */}
          <div className="mt-14 pt-8 border-t border-gray-100 grid sm:grid-cols-2 gap-5">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="card hover:border-brand-200 transition-all group"
              >
                <div className="flex items-center gap-2 text-brand-600 text-xs font-semibold mb-2">
                  <ArrowLeft size={14} /> Previous
                </div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-700 transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="card hover:border-brand-200 transition-all group text-right"
              >
                <div className="flex items-center justify-end gap-2 text-brand-600 text-xs font-semibold mb-2">
                  Next <ArrowRight size={14} />
                </div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-700 transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
