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
  Lock,
  ThumbsUp,
  Cpu,
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
    .slice(0, 6);

  return (
    <div className="py-6 sm:py-10 bg-gradient-to-b from-[#F0F7FF] via-[#F8FBFF] to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs & Quick Actions */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-dora-textLight overflow-x-auto no-scrollbar py-1">
            <Link href="/" className="hover:text-dora-blue shrink-0 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5 sm:hidden" />
              <span>Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/tools" className="hover:text-dora-blue shrink-0">Tools</Link>
            <span className="text-slate-300">/</span>
            <Link href={`/categories/${tool.category}`} className="hover:text-dora-blue shrink-0 text-dora-deep">
              {tool.categoryName}
            </Link>
            <span className="text-slate-300 hidden sm:inline">/</span>
            <span className="text-dora-text font-bold truncate max-w-[150px] sm:max-w-none hidden sm:inline">
              {tool.name}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleFavoriteClick}
              aria-label="Add to favorites"
              className={`p-2 sm:px-3 sm:py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 ${
                fav
                  ? "bg-amber-50 text-amber-900 border-amber-300 shadow-xs"
                  : "glass-ultra text-dora-text hover:bg-white"
              }`}
            >
              <Star className={`w-4 h-4 ${fav ? "fill-amber-400 text-amber-400" : "text-slate-400"}`} />
              <span className="hidden sm:inline">{fav ? "Favorited" : "Favorite"}</span>
            </button>

            <button
              onClick={handleShare}
              aria-label="Share gadget"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl glass-ultra text-dora-text hover:bg-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Share2 className="w-4 h-4 text-dora-blue" />
              <span className="hidden sm:inline">{copiedLink ? "Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Header Hero Banner — Glassmorphic & Ergonomic */}
        <div className="p-5 sm:p-8 rounded-3xl glass-ultra shadow-glass mb-6 sm:mb-8 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden border border-white/80">
          <div className="flex items-center sm:items-start gap-4 sm:gap-6 flex-1 w-full">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-white to-dora-lightSky border border-dora-sky/40 shadow-sm flex items-center justify-center shrink-0">
              <GadgetIllustration categorySlug={tool.category} size="md" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-dora-blue px-2.5 py-0.5 rounded-md bg-sky-50 border border-sky-200">
                  {tool.gadgetName}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  100% Client-Side
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9/5
                </span>
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-dora-text tracking-tight truncate sm:whitespace-normal">
                {tool.name}
              </h1>
              <p className="text-xs sm:text-sm text-dora-textLight mt-1 sm:mt-1.5 max-w-2xl leading-relaxed">
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
        <div className="mb-10 sm:mb-14">
          {children}
        </div>

        {/* Informational Lower Sections — Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* How to use */}
          <div className="p-5 sm:p-6 rounded-3xl glass-ultra shadow-glass border border-white/80">
            <div className="flex items-center gap-2 mb-3.5">
              <Sparkles className="w-4 h-4 text-dora-yellow" />
              <h3 className="text-sm sm:text-base font-bold text-dora-text">How to Use</h3>
            </div>
            <ol className="space-y-2.5 text-xs text-dora-text leading-relaxed">
              {tool.howToUse.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-dora-lightSky text-dora-deep font-black flex items-center justify-center shrink-0 mt-0.5 text-[10px] border border-sky-200">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Features */}
          <div className="p-5 sm:p-6 rounded-3xl glass-ultra shadow-glass border border-white/80">
            <div className="flex items-center gap-2 mb-3.5">
              <Zap className="w-4 h-4 text-dora-blue" />
              <h3 className="text-sm sm:text-base font-bold text-dora-text">Key Features</h3>
            </div>
            <ul className="space-y-2 text-xs text-dora-text">
              {tool.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Guarantee */}
          <div className="p-5 sm:p-6 rounded-3xl glass-ultra shadow-glass border border-white/80 flex flex-col justify-between bg-gradient-to-br from-white/90 via-sky-50/40 to-white/90">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <h3 className="text-sm sm:text-base font-bold text-dora-text">Privacy Guarantee</h3>
              </div>
              <p className="text-xs text-dora-textLight leading-relaxed">
                This gadget runs entirely inside your local browser sandbox. No file chunks, passwords, or data are ever transmitted to or stored on our servers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-dora-deep font-bold">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-dora-blue" /> Isolated Sandbox
              </span>
              <span className="text-emerald-600 font-extrabold">100% Client-Side</span>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        {tool.faqs.length > 0 && (
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-3xl glass-ultra shadow-glass border border-white/80">
            <div className="flex items-center gap-2 mb-5">
              <HelpCircle className="w-5 h-5 text-dora-blue" />
              <h3 className="text-lg sm:text-xl font-black text-dora-text">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-3">
              {tool.faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200/50 pb-3.5 last:border-0 last:pb-0">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-dora-text hover:text-dora-blue transition-colors py-1"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        openFaqIndex === i ? "rotate-180 text-dora-blue" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === i && (
                    <p className="mt-2 text-xs text-dora-textLight leading-relaxed pl-1">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Category Tools Carousel / Grid */}
        {relatedTools.length > 0 && (
          <div className="mt-10 sm:mt-14">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-black text-dora-text">
                More Tools in {tool.categoryName}
              </h3>
              <Link
                href={`/categories/${tool.category}`}
                className="text-xs font-bold text-dora-blue hover:text-dora-deep"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {relatedTools.map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/tools/${rt.slug}`}
                  className="p-3.5 sm:p-4 rounded-2xl glass-ultra border border-white/80 hover:border-dora-sky/80 hover:shadow-dora-card transition-all group flex flex-col justify-between active:scale-95"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-dora-text group-hover:text-dora-blue transition-colors line-clamp-2">
                      {rt.name}
                    </h4>
                    <p className="text-[11px] text-dora-textLight mt-1 line-clamp-2 leading-tight hidden sm:block">
                      {rt.shortDesc}
                    </p>
                  </div>
                  <span className="mt-2 text-[11px] font-bold text-dora-blue flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Open →
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
