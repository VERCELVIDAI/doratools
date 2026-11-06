import { Metadata } from "next";
import ToolsDirectoryClient from "@/components/tools/ToolsDirectoryClient";

export const metadata: Metadata = {
  title: "Explore 50 Magical Gadgets — PDF, Image, Code, Calculators & SEO | Dora Tools",
  description:
    "Discover 50 free, lightning-fast digital gadgets across 10 categories. 100% private in-browser client-side execution with zero file uploads to servers.",
  keywords: [
    "Dora Tools Directory",
    "free online tools list",
    "pdf tools",
    "image compressor",
    "code converter",
    "seo generator",
    "calculators online",
    "qr code creator",
    "browser utilities",
    "50 digital tools",
  ],
  alternates: {
    canonical: "https://www.doratools.online/tools",
  },
  openGraph: {
    title: "Explore 50 Magical Gadgets | Dora Tools",
    description: "Discover 50 free online tools across 10 categories. 100% private client-side processing.",
    url: "https://www.doratools.online/tools",
    siteName: "Dora Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dora Tools - 50 Magical Digital Gadgets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore 50 Magical Gadgets | Dora Tools",
    description: "50 free online tools for PDFs, Images, Code, Calculators & SEO.",
    images: ["/og-image.png"],
  },
};

export default function ToolsPage() {
  return <ToolsDirectoryClient />;
}
