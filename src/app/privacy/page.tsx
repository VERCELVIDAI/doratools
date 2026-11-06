import React from "react";
import { Shield } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 100% Client-Side Privacy Guarantee | Dora Tools",
  description:
    "Privacy policy for Dora Tools. Discover how our client-side architecture keeps your documents, images, and data completely private with zero file uploads.",
  alternates: {
    canonical: "https://www.doratools.online/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Dora Tools",
    description: "Learn how Dora Tools protects your files with 100% in-browser processing.",
    url: "https://www.doratools.online/privacy",
    siteName: "Dora Tools",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
            <Shield className="w-4 h-4" />
            <span>100% Privacy Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-dora-text">Privacy Policy</h1>
          <p className="text-xs text-dora-textLight">Last updated: November 2026</p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card prose prose-slate max-w-none text-xs sm:text-sm text-dora-text leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-dora-text">1. Core Architecture & Philosophy</h2>
            <p>
              At <strong>Dora Tools</strong> ([www.doratools.online](https://www.doratools.online)), we believe privacy is a fundamental human right. Our tools are engineered to execute directly inside your browser sandbox using HTML5 Canvas, WebAssembly, and Web Crypto APIs.
            </p>
            <p className="font-semibold text-emerald-700">
              We do NOT upload, inspect, store, or transmit your PDF files, images, code payloads, or tax information to our backend servers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dora-text">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Account Credentials:</strong> If you register, we collect your name and email address to manage your account authentication.</li>
              <li><strong>Subscription & Payment Records:</strong> For paid subscriptions, Razorpay processes transaction details. We never store credit/debit card numbers.</li>
              <li><strong>Anonymous Telemetry:</strong> Aggregated tool execution counts to maintain service reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dora-text">3. Cookies & Local Storage</h2>
            <p>
              We utilize browser <code>localStorage</code> to store your favorited tools, saved drafts, and task lists locally on your device. You can clear this data at any time from your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dora-text">4. Contacting Us</h2>
            <p>
              For privacy inquiries, please contact our Data Protection Officer at: <a href="mailto:privacy@doratools.online" className="text-dora-blue font-bold">privacy@doratools.online</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
