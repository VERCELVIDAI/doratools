"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are my files really processed in my browser?",
      a: "Yes! Dora Tools runs client-side processing using WebAssembly, HTML5 Canvas 2D, and modern Web APIs. When you merge PDFs or compress images, the data remains inside your computer's browser memory and is never uploaded to an external server.",
    },
    {
      q: "Is Dora Tools free to use?",
      a: "Yes! All 50 core gadgets are accessible 100% free with standard single-file processing and 5 bulk operations per day. For power users and teams who need heavy batch operations and cloud project sync, we offer affordable plans starting at ₹99/month.",
    },
    {
      q: "What payment methods are supported?",
      a: "We support Indian UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit cards, and Razorpay subscriptions.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Absolutely. You can cancel your subscription at any time with one click from your User Dashboard under My Subscription.",
    },
    {
      q: "Do you store my invoice or resume data?",
      a: "No! All invoices, receipts, and resumes generated on Dora Tools are created client-side. If you save a project, it is stored in your private browser localStorage or synchronized to your protected user dashboard session.",
    },
    {
      q: "What browsers are supported?",
      a: "All modern evergreen browsers are supported including Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, Brave, and mobile browsers on iOS & Android.",
    },
  ];

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dora-border text-dora-deep text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-dora-blue" />
            <span>Answers to Common Questions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-dora-textLight">
            Everything you need to know about Dora Tools, security, and subscription billing.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-100 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 font-bold text-sm text-dora-text hover:text-dora-blue transition-colors py-1"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openIndex === i ? "rotate-180 text-dora-blue" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="mt-2 text-xs sm:text-sm text-dora-textLight leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
