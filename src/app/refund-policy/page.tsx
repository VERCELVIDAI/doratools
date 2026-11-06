import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Dora Tools",
  description: "Transparent refund and subscription cancellation guidelines for Dora Tools.",
  alternates: {
    canonical: "https://www.doratools.online/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | Dora Tools",
    url: "https://www.doratools.online/refund-policy",
    siteName: "Dora Tools",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-dora-text">Refund & Cancellation Policy</h1>
          <p className="text-xs text-dora-textLight mt-1">Effective Date: November 2026</p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card text-xs sm:text-sm text-dora-text leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">1. 7-Day Money-Back Guarantee</h2>
            <p>
              We want you to be completely delighted with your Dora Tools experience. If you upgrade to any paid tier (Starter, Pro, or Business) and find that our tools do not meet your expectations, you may request a 100% refund within 7 calendar days of your initial payment.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">2. How to Request a Refund</h2>
            <p>
              To claim a refund, simply email <a href="mailto:billing@doratools.online" className="text-dora-blue font-bold">billing@doratools.online</a> with your account email and Razorpay payment ID. Refunds are processed back to your original payment method within 5-7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">3. Subscription Cancellation</h2>
            <p>
              You may cancel your monthly or annual subscription at any time directly through your User Dashboard. Upon cancellation, you will retain access to your plan features until the end of your current billing cycle, and no further charges will occur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
