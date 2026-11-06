import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/categories-data";
import { getToolsByCategory } from "@/lib/tools-data";
import { GadgetIllustration } from "@/components/illustrations/GadgetIllustrations";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Specialized Gadget Categories — PDF, Image, Code & Calculators | Dora Tools",
  description:
    "Explore 10 specialized gadget categories across PDFs, images, code, calculators, SEO, QR codes, file converters, and productivity tools. 100% private in-browser processing.",
  alternates: {
    canonical: "https://www.doratools.online/categories",
  },
  openGraph: {
    title: "10 Specialized Gadget Categories | Dora Tools",
    description: "Browse 10 gadget universes covering 50 free online client-side tools.",
    url: "https://www.doratools.online/categories",
    siteName: "Dora Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dora Tools Categories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Specialized Gadget Categories | Dora Tools",
    description: "Explore 10 gadget categories with 50 free tools.",
    images: ["/og-image.png"],
  },
};

export default function CategoriesPage() {
  return (
    <div className="py-12 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dora-border shadow-xs text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>The 10 Gadget Universes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Magical Gadget Categories
          </h1>
          <p className="mt-3 text-base sm:text-lg text-dora-textLight">
            Each category represents a unique dimensional gadget capable of solving specific challenges with native browser performance.
          </p>
        </div>

        <div className="space-y-8">
          {CATEGORIES.map((cat, idx) => {
            const categoryTools = getToolsByCategory(cat.slug);

            return (
              <div
                key={cat.slug}
                className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card hover:shadow-dora-hover transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-2xl bg-dora-lightSky border border-dora-border/60 flex items-center justify-center shrink-0">
                      <GadgetIllustration categorySlug={cat.slug} size="md" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-dora-blue">
                        Category {idx + 1}: {cat.gadgetName}
                      </span>
                      <h2 className="text-2xl font-black text-dora-text mt-0.5">
                        {cat.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-dora-textLight mt-1 max-w-xl">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/categories/${cat.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dora-lightSky text-dora-deep hover:bg-dora-blue hover:text-white font-bold text-xs transition-colors shrink-0 self-start lg:self-center"
                  >
                    <span>View Category Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Sub-tools pills */}
                <div className="pt-6">
                  <span className="text-xs font-bold text-dora-text block mb-3 uppercase tracking-wider">
                    Included Gadgets (5):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {categoryTools.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/tools/${t.slug}`}
                        className="p-3 rounded-xl bg-[#F8FBFF] hover:bg-sky-50 border border-dora-border text-xs font-semibold text-dora-text hover:text-dora-blue transition-colors flex items-center justify-between group"
                      >
                        <span className="truncate">{t.name}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-dora-blue group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
