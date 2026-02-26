import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="container-section max-w-xl">
        <div className="text-8xl font-bold text-brand-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the
          URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            <Search size={16} /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
