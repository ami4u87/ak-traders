import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | A.K. Traders Ltd",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-section max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>
        <div className="prose space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            A.K. Traders Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting your privacy. This policy describes how we collect, use, and safeguard your
            personal information when you use our website (aktraders.ca) or our services.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as name, email address, phone number,
            company name, and product requirements when you submit a quote request or contact form.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How We Use Your Information</h2>
          <p>
            We use your information solely to respond to your inquiries, provide sourcing quotes, and
            deliver our services. We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, or disclosure.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact</h2>
          <p>
            For privacy questions, contact us at{" "}
            <a href="mailto:info@aktraders.ca" className="text-brand-600 hover:underline">
              info@aktraders.ca
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
