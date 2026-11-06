"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { DoraBot } from "../mascot/DoraBot";
import { GadgetIllustration } from "../illustrations/GadgetIllustrations";
import { useRouter } from "next/navigation";

export function PortalHero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tools?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/tools");
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-[#F0F7FF] via-[#F5FAFF] to-white">
      {/* Background Magical Ambient Portal Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-tr from-dora-sky/25 via-dora-blue/20 to-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-200/40 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Floating Original Gadgets in 3D Orbit */}
      <div className="hidden lg:block absolute left-8 top-28 z-0 pointer-events-none transform -rotate-6 animate-float">
        <div className="p-3 bg-white/80 backdrop-blur-md rounded-3xl border border-dora-border shadow-dora-card hover:scale-105 transition-all">
          <GadgetIllustration categorySlug="paper-portal" size="md" />
          <span className="block text-center text-xs font-semibold text-dora-text mt-1">Paper Portal</span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-12 top-24 z-0 pointer-events-none transform rotate-6 animate-float-slow">
        <div className="p-3 bg-white/80 backdrop-blur-md rounded-3xl border border-dora-border shadow-dora-card hover:scale-105 transition-all">
          <GadgetIllustration categorySlug="magic-lens" size="md" />
          <span className="block text-center text-xs font-semibold text-dora-text mt-1">Magic Lens</span>
        </div>
      </div>

      <div className="hidden xl:block absolute left-20 bottom-24 z-0 pointer-events-none transform rotate-12 animate-float-slow">
        <div className="p-3 bg-white/80 backdrop-blur-md rounded-3xl border border-dora-border shadow-dora-card hover:scale-105 transition-all">
          <GadgetIllustration categorySlug="code-capsule" size="md" />
          <span className="block text-center text-xs font-semibold text-dora-text mt-1">Code Capsule</span>
        </div>
      </div>

      <div className="hidden xl:block absolute right-24 bottom-28 z-0 pointer-events-none transform -rotate-12 animate-float">
        <div className="p-3 bg-white/80 backdrop-blur-md rounded-3xl border border-dora-border shadow-dora-card hover:scale-105 transition-all">
          <GadgetIllustration categorySlug="scan-portal" size="md" />
          <span className="block text-center text-xs font-semibold text-dora-text mt-1">Scan Portal</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Headline & Magic Search */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-dora-border shadow-dora-sm text-dora-blue text-xs sm:text-sm font-semibold mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 text-dora-yellow" />
              <span>50 Functional Magical Gadgets Ready to Use</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dora-text tracking-tight leading-[1.15]">
              Welcome to Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-dora-deep via-dora-blue to-dora-sky bg-clip-text text-transparent">
                Digital Gadget Universe!
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-lg sm:text-xl text-dora-textLight max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Every problem has a gadget. Discover magical tools that make your everyday work faster, easier, and smarter — right in your browser with 100% privacy.
            </p>

            {/* Interactive Magic Search Input */}
            <form onSubmit={handleSearchSubmit} className="mt-8 max-w-lg mx-auto lg:mx-0">
              <div className="relative flex items-center p-2 rounded-2xl bg-white/90 backdrop-blur-lg border-2 border-dora-border shadow-dora-card focus-within:border-dora-blue focus-within:shadow-dora-hover transition-all">
                <Search className="w-6 h-6 text-dora-blue ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 50 tools (e.g. merge pdf, compress image, gst, qr)..."
                  className="w-full px-3 py-2.5 bg-transparent text-dora-text placeholder-dora-textLight/70 text-sm sm:text-base focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-semibold text-sm sm:text-base shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-dora-textLight">
                <span className="font-medium text-dora-text">Popular:</span>
                {[
                  { name: "PDF Merger", slug: "pdf-merger" },
                  { name: "Image Compressor", slug: "image-compressor" },
                  { name: "GST Calculator", slug: "gst-calculator" },
                  { name: "JSON Formatter", slug: "json-formatter" },
                  { name: "WiFi QR", slug: "wifi-qr-generator" },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tools/${item.slug}`}
                    className="px-2.5 py-1 rounded-lg bg-white/80 hover:bg-dora-lightSky border border-dora-border text-dora-deep hover:text-dora-blue transition-colors font-medium shadow-xs"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </form>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/tools"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-base shadow-dora-hover hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-dora-yellow" />
                <span>Explore All 50 Gadgets</span>
              </Link>
              <Link
                href="/pricing"
                className="px-7 py-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-dora-border text-dora-text font-bold text-base shadow-dora-sm hover:bg-dora-lightSky active:scale-95 transition-all"
              >
                <span>Start Free</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-dora-border/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-dora-textLight">
              <div className="flex items-center gap-1.5 font-medium text-dora-text">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Client-Side Privacy</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-dora-text">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Zero File Upload Latency</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-dora-text">
                <Globe className="w-4 h-4 text-dora-blue" />
                <span>No Installation Required</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Animated Mascot & Dimensional Portal */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Swirling Dimensional Portal Rings */}
            <div className="relative w-[320px] sm:w-[420px] h-[360px] sm:h-[460px] flex items-center justify-center">
              {/* Outer Portal Halo */}
              <div className="absolute inset-0 rounded-[40%] bg-gradient-to-tr from-dora-sky/40 via-blue-400/30 to-purple-400/20 animate-portal-spin blur-md" />
              {/* Inner Portal Mirror */}
              <div className="absolute inset-4 rounded-[42%] bg-gradient-to-b from-white/90 via-sky-50/80 to-blue-100/90 border-4 border-white/80 shadow-dora-glow backdrop-blur-xl" />

              {/* Floating Sparkles & Stars */}
              <div className="absolute top-6 right-8 text-2xl animate-sparkle">✨</div>
              <div className="absolute bottom-12 left-6 text-xl animate-sparkle">⭐</div>
              <div className="absolute top-1/2 left-2 text-xl animate-bounce">⚡</div>

              {/* DoraBot Mascot Centerstage */}
              <div className="relative z-10 animate-float">
                <DoraBot
                  expression="waving"
                  size="hero"
                  showSpeechBubble={true}
                  speechText="Hop in! Which magical gadget shall we use today?"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
