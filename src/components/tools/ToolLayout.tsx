"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Share2,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";
import { ToolItem } from "@/lib/types";
import { getToolsByCategory } from "@/lib/tools-data";
import { GadgetIllustration } from "../illustrations/GadgetIllustrations";
import { DoraBot } from "../mascot/DoraBot";
import { isFavorite, toggleFavorite } from "@/lib/store";

interface ToolLayoutProps {
  tool: ToolItem;
  children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  const [fav, setFav] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    setFav(isFavorite(tool.slug));
  }, [tool.slug]);

  const handleFavoriteClick = () => {
    const newState = toggleFavorite(tool.slug);
    setFav(newState);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const relatedTools = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 4);

  return (
    <div className="py-8 sm:py-12 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-dora-textLight">
            <Link href="/" className="hover:text-dora-blue">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-dora-blue">Tools</Link>
            <span>/</span>
            <Link href={`/categories/${tool.category}`} className="hover:text-dora-blue">
              {tool.categoryName}
            </Link>
            <span>/</span>
            <span className="text-dora-text font-bold">{tool.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFavoriteClick}
              className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                fav
                  ? "bg-amber-50 text-amber-900 border-amber-300"
                  : "bg-white border-dora-border text-dora-text hover:bg-slate-50"
              }`}
            >
              <Star className={`w-4 h-4 ${fav ? "fill-amber-400 text-amber-400" : "text-slate-400"}`} />
              <span className="hidden sm:inline">{fav ? "Favorited" : "Favorite"}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white border border-dora-border text-dora-text hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Share2 className="w-4 h-4 text-dora-blue" />
              <span className="hidden sm:inline">{copiedLink ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 flex-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-dora-lightSky border border-dora-border/60 flex items-center justify-center shrink-0">
              <GadgetIllustration categorySlug={tool.category} size="md" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-dora-blue">
                  {tool.gadgetName}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  Client-Side
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-dora-text tracking-tight mt-1">
                {tool.name}
              </h1>
              <p className="text-xs sm:text-sm text-dora-textLight mt-1.5 max-w-2xl leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <DoraBot
              expression="working"
              size="sm"
              showSpeechBubble={true}
              speechText="Ready to process your request!"
            />
          </div>
        </div>

        {/* Main Interactive Tool Engine Viewport */}
        <div className="mb-12">
          {children}
        </div>

        {/* Informational Lower Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* How to use */}
          <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-dora-yellow" />
              <h3 className="text-base font-bold text-dora-text">How to Use</h3>
            </div>
            <ol className="space-y-3 text-xs text-dora-text leading-relaxed">
              {tool.howToUse.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-dora-lightSky text-dora-deep font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Features */}
          <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-dora-blue" />
              <h3 className="text-base font-bold text-dora-text">Key Features</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-dora-text">
              {tool.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Guarantee */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#F0F7FF] to-white border border-dora-border shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-dora-blue" />
                <h3 className="text-base font-bold text-dora-text">Privacy Guarantee</h3>
              </div>
              <p className="text-xs text-dora-textLight leading-relaxed">
                This gadget runs entirely in your local browser sandbox. No file chunks, passwords, or data are transmitted to our servers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-dora-deep font-bold">
              <span>Encrypted & Isolated</span>
              <span>100% Client-Side</span>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        {tool.faqs.length > 0 && (
          <div className="mt-12 p-8 rounded-3xl bg-white border border-dora-border shadow-xs">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-dora-blue" />
              <h3 className="text-xl font-bold text-dora-text">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {tool.faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-4">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-sm text-dora-text hover:text-dora-blue transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        openFaqIndex === i ? "rotate-180 text-dora-blue" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === i && (
                    <p className="mt-2 text-xs sm:text-sm text-dora-textLight leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Category Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-black text-dora-text mb-4">
              More Tools in {tool.categoryName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/tools/${rt.slug}`}
                  className="p-4 rounded-2xl bg-white border border-dora-border hover:shadow-dora-card transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                      {rt.name}
                    </h4>
                    <p className="text-xs text-dora-textLight mt-1 line-clamp-2">
                      {rt.shortDesc}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-bold text-dora-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Use Gadget →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
