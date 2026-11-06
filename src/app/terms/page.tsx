import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Dora Tools",
  description: "Terms of service and acceptable use agreement for Dora Tools.",
  alternates: {
    canonical: "https://www.doratools.online/terms",
  },
  openGraph: {
    title: "Terms of Service | Dora Tools",
    url: "https://www.doratools.online/terms",
    siteName: "Dora Tools",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-dora-text">Terms of Service</h1>
          <p className="text-xs text-dora-textLight mt-1">Effective Date: November 2026</p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card text-xs sm:text-sm text-dora-text leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Dora Tools ([www.doratools.online](https://www.doratools.online)), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">2. Acceptable Use</h2>
            <p>
              You agree not to use the services for any unlawful purposes, including transmitting viruses, launching automated denial of service attacks, or reverse engineering client-side code in violation of intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">3. Intellectual Property</h2>
            <p>
              The Dora Tools brand, original mascot (DoraBot), gadget artwork, animations, and proprietary interfaces are the intellectual property of Dora Tools. All rights reserved.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-dora-text mb-2">4. Disclaimer of Warranties</h2>
            <p>
              Tools are provided &quot;as is&quot; without warranty of any kind. While we rigorously test all client-side processing algorithms, users are responsible for verifying the accuracy of output documents, tax calculations, and invoices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
