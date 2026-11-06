import { Metadata } from "next";
import FaqClient, { FAQS_DATA } from "@/components/faq/FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Dora Tools",
  description:
    "Find answers to common questions about Dora Tools client-side privacy, free vs premium features, bulk operations, supported file formats, and subscription management.",
  keywords: [
    "Dora Tools FAQ",
    "frequently asked questions",
    "client-side privacy faq",
    "free online tools security",
    "pdf tools questions",
    "razorpay subscription questions",
  ],
  alternates: {
    canonical: "https://www.doratools.online/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Dora Tools",
    description: "Get answers to questions about privacy, features, and pricing on Dora Tools.",
    url: "https://www.doratools.online/faq",
    siteName: "Dora Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dora Tools FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Dora Tools",
    description: "Answers to common questions about Dora Tools.",
    images: ["/og-image.png"],
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqClient />
    </>
  );
}
