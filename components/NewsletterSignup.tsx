"use client";

export default function NewsletterSignup() {
  return (
    <div className="mt-16 bg-brand-50 border border-brand-200 rounded-2xl p-10 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Get Sourcing Tips in Your Inbox
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
        Subscribe to our newsletter for monthly guides on importing cheaply, avoiding common
        mistakes, and industry news.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="input-field flex-1"
        />
        <button
          className="btn-primary whitespace-nowrap"
          onClick={() =>
            alert(
              "Newsletter subscription coming soon! Contact us directly at info@aktraders.ca"
            )
          }
        >
          Subscribe
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
