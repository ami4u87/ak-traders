import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | A.K. Traders Ltd",
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-section max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            By using the A.K. Traders Ltd website and services, you agree to these terms. Please
            read them carefully.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Services</h2>
          <p>
            A.K. Traders Ltd provides product sourcing, supplier vetting, price negotiation, quality
            inspection, and import/logistics coordination services. All service agreements are
            governed by separate written contracts between A.K. Traders Ltd and each client.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Limitation of Liability</h2>
          <p>
            While we take all reasonable steps to ensure quality and reliability, A.K. Traders Ltd
            is not liable for supplier delays, force majeure events, customs decisions by CBSA, or
            product defects not identified during pre-shipment inspection. Our liability is limited
            to our service fees.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Governing Law</h2>
          <p>
            These terms are governed by the laws of the Province of Manitoba and the federal laws of
            Canada applicable therein.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
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
