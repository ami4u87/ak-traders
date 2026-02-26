"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
};

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call — replace with actual backend (e.g., Nodemailer / EmailJS)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Quote request submitted:", data);
      setSubmitted(true);
      reset();
    } catch {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={52} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you! Our team will review your requirements and get back to you
          within <strong>24 hours</strong>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {error && (
        <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
          <AlertCircle size={18} />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John Smith"
            className={`input-field ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            className={`input-field ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (204) 555-0100"
            className="input-field"
            {...register("phone")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your Business Name"
            className="input-field"
            {...register("company")}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Sourcing Country <span className="text-red-500">*</span>
          </label>
          <select
            className={`input-field ${errors.country ? "border-red-400" : ""}`}
            {...register("country", { required: "Please select a country" })}
          >
            <option value="">Select country…</option>
            <option value="china">🇨🇳 China</option>
            <option value="pakistan">🇵🇰 Pakistan</option>
            <option value="turkey">🇹🇷 Turkey</option>
            <option value="any">Any / Not Sure</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Estimated Quantity
          </label>
          <input
            type="text"
            placeholder="e.g. 500 units, 1 container"
            className="input-field"
            {...register("quantity")}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Product Description <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Cotton t-shirts, LED lights, ceramic tiles…"
          className={`input-field ${errors.product ? "border-red-400" : ""}`}
          {...register("product", { required: "Product description is required" })}
        />
        {errors.product && (
          <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Additional Details
        </label>
        <textarea
          rows={4}
          placeholder="Share any specifications, budget range, target price, delivery requirements…"
          className="input-field resize-none"
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Send Quote Request
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Your information is kept confidential. We typically respond within 24 hours.
      </p>
    </form>
  );
}
