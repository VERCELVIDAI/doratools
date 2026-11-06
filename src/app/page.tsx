import React from "react";
import { PortalHero } from "@/components/portal/PortalHero";
import {
  ExploreGadgetsSection,
  PopularGadgetsSection,
  HowItWorksSection,
  WhyDoraToolsSection,
  PricingSection,
  LatestToolsSection,
  BlogSection,
} from "@/components/home/HomeSections";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero with Portal and Mascot */}
      <PortalHero />

      {/* 10 Gadget Categories */}
      <ExploreGadgetsSection />

      {/* Popular Gadgets */}
      <PopularGadgetsSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Why Choose Dora Tools (Privacy & Architecture) */}
      <WhyDoraToolsSection />

      {/* 4 Pricing Plans */}
      <PricingSection />

      {/* Newly Launched Tools */}
      <LatestToolsSection />

      {/* Blog & Educational Guides */}
      <BlogSection />

      {/* Pre-Footer Magical CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-dora-deep via-dora-blue to-dora-sky text-white relative overflow-hidden">
        {/* Swirling Background Portal Rings */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-dora-yellow/15 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-dora-yellow text-xs font-black uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 fill-dora-yellow" />
            <span>Ready to Unleash Your First Gadget?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Step Into the Magical Digital Universe Today
          </h2>

          <p className="mt-4 text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-normal">
            Join thousands of creators, engineers, and businesses using Dora Tools to solve everyday problems with 100% browser-based privacy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools"
              className="px-8 py-4 rounded-2xl bg-white text-dora-deep font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-dora-yellow" />
              <span>Explore All 50 Tools Free</span>
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white font-bold text-base hover:bg-white/25 active:scale-95 transition-all"
            >
              <span>View Membership Plans</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
