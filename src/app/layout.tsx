import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#168DE2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.doratools.online"),
  title: {
    default: "Dora Tools — Your Digital Gadget Universe! | 50 Free Online Tools",
    template: "%s | Dora Tools",
  },
  description:
    "Discover 50 magical digital gadgets for everyday work. PDF merger, image compressor, GST calculator, JSON formatter, QR code generator, and productivity tools with 100% browser privacy.",
  keywords: [
    "Dora Tools",
    "digital gadgets",
    "free online tools",
    "pdf merger",
    "pdf compressor",
    "image resizer",
    "gst calculator",
    "emi calculator",
    "qr generator",
    "json formatter",
    "client-side privacy",
    "free saas tools",
    "browser tools online",
    "doratools.online",
  ],
  authors: [{ name: "Dora Tools Engineering Team", url: "https://www.doratools.online" }],
  creator: "Dora Tools",
  publisher: "Dora Tools Universe",
  alternates: {
    canonical: "https://www.doratools.online",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.doratools.online",
    siteName: "Dora Tools",
    title: "Dora Tools — Your Digital Gadget Universe!",
    description:
      "50 functional magical gadgets for PDFs, images, text, code, calculators, QR codes, and productivity. 100% private in-browser processing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dora Tools — Digital Gadget Universe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dora Tools — Your Digital Gadget Universe!",
    description: "50 magical digital gadgets for everyday work. Free, fast & 100% private.",
    images: ["/og-image.png"],
    creator: "@doratools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.doratools.online/#organization",
      "name": "Dora Tools",
      "url": "https://www.doratools.online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.doratools.online/favicon.svg",
        "caption": "Dora Tools Mascot Logo"
      },
      "description": "Your Digital Gadget Universe! 50 free, magical client-side utilities.",
      "sameAs": [
        "https://twitter.com/doratools",
        "https://github.com/VERCELVIDAI/doratools"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.doratools.online/#website",
      "url": "https://www.doratools.online",
      "name": "Dora Tools",
      "description": "Your Digital Gadget Universe! 50 Free Online Client-Side Tools",
      "publisher": {
        "@id": "https://www.doratools.online/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.doratools.online/tools?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-dora-sky/30 selection:text-dora-deep">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
