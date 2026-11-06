import React from "react";
import { Sparkles, Shield, Zap, Globe, Heart } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dora Tools — Our Mission & Magical Gadget Vision",
  description:
    "Learn about the mission, client-side privacy philosophy, and multidisciplinary engineering behind Dora Tools — Your Digital Gadget Universe.",
  alternates: {
    canonical: "https://www.doratools.online/about",
  },
  openGraph: {
    title: "About Dora Tools — Your Digital Gadget Universe!",
    description: "Our mission to provide 50 magical digital gadgets with 100% in-browser privacy.",
    url: "https://www.doratools.online/about",
    siteName: "Dora Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Dora Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dora Tools",
    description: "50 magical digital gadgets with 100% in-browser privacy.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dora-border text-dora-deep text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            About Dora Tools
          </h1>
          <p className="text-base sm:text-lg text-dora-textLight max-w-2xl mx-auto">
            &quot;Your Digital Gadget Universe!&quot; — Built on the fundamental belief that every digital problem has a simple, magical gadget.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-xs sm:text-sm text-dora-text leading-relaxed">
            <h2 className="text-xl font-black text-dora-text">The Philosophy of Pure Client-Side Magic</h2>
            <p>
              For decades, internet users had to tolerate a dangerous compromise: to merge two simple PDF pages or resize a family photo, they were forced to upload confidential records across the web to unknown servers.
            </p>
            <p>
              At <strong>Dora Tools</strong>, we asked: <em>What if the modern browser could handle everything locally?</em>
            </p>
            <p>
              By combining <strong>WebAssembly, HTML5 Canvas 2D, and modern cryptography</strong>, we created an entire universe of 50 high-performance gadgets that execute directly on your CPU/GPU with 100% privacy.
            </p>
          </div>

          <div className="shrink-0 flex justify-center">
            <DoraBot expression="happy" size="lg" showSpeechBubble speechText="Every problem has a gadget!" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs text-center">
            <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-dora-text">Zero Data Retention</h3>
            <p className="text-xs text-dora-textLight mt-1">Your documents, spreadsheets, and photos never touch our servers.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs text-center">
            <Zap className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-dora-text">Instant Execution</h3>
            <p className="text-xs text-dora-textLight mt-1">Zero upload latency. Tools execute immediately in browser memory.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs text-center">
            <Globe className="w-8 h-8 text-dora-blue mx-auto mb-3" />
            <h3 className="text-sm font-bold text-dora-text">Global & Open</h3>
            <p className="text-xs text-dora-textLight mt-1">Accessible from anywhere in the world on desktop and mobile.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
