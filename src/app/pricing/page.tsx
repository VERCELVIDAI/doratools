import { Metadata } from "next";
import PricingClient from "@/components/pricing/PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Membership Plans — Free, Starter, Pro & Business | Dora Tools",
  description:
    "Explore transparent pricing for Dora Tools. Access all 50 digital gadgets for free, or upgrade to Starter (₹99), Pro (₹199), or Business (₹399) for heavy bulk operations and team workflows.",
  keywords: [
    "Dora Tools Pricing",
    "free saas tools",
    "starter plan",
    "pro plan",
    "business plan",
    "bulk tool operations",
    "affordable saas india",
    "razorpay checkout",
    "doratools subscription",
  ],
  alternates: {
    canonical: "https://www.doratools.online/pricing",
  },
  openGraph: {
    title: "Pricing & Membership Plans | Dora Tools",
    description:
      "All 50 tools are 100% free to use. Flexible upgrades starting at ₹99/mo for power users and teams.",
    url: "https://www.doratools.online/pricing",
    siteName: "Dora Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dora Tools Membership Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Membership Plans | Dora Tools",
    description: "Start free with all 50 tools. Transparent pricing for creators & teams.",
    images: ["/og-image.png"],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
