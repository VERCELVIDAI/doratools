import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Support Dispatch | Dora Tools",
  description:
    "Get in touch with the Dora Tools team. Send questions, feedback, or gadget feature requests directly to our architectural engineers.",
  keywords: [
    "Dora Tools Contact",
    "contact support",
    "customer service",
    "feedback",
    "feature requests",
    "doratools help",
  ],
  alternates: {
    canonical: "https://www.doratools.online/contact",
  },
  openGraph: {
    title: "Contact Us & Support Dispatch | Dora Tools",
    description: "Get in touch with the Dora Tools engineering team.",
    url: "https://www.doratools.online/contact",
    siteName: "Dora Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dora Tools Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Dora Tools",
    description: "Have a question or request? Contact our team.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
