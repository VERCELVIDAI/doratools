import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    "image compressor",
    "gst calculator",
    "qr generator",
    "json formatter",
    "client-side privacy",
    "saas tools",
  ],
  authors: [{ name: "Dora Tools Architectural Team" }],
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
    description: "50 magical digital gadgets for everyday work. Free, fast & private.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-dora-sky/30 selection:text-dora-deep">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
