"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  Smile,
  Check,
  Star,
  Search,
  ExternalLink,
} from "lucide-react";
import { CATEGORIES } from "@/lib/categories-data";
import { TOOLS } from "@/lib/tools-data";
import { PRICING_PLANS } from "@/lib/plans-data";
import { BLOG_POSTS } from "@/lib/blogs-data";
import { GadgetIllustration } from "../illustrations/GadgetIllustrations";
import { DoraBot } from "../mascot/DoraBot";

// --- SECTION 4: EXPLORE GADGETS (10 Categories) ---
export function ExploreGadgetsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dora-lightSky border border-dora-border text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>10 Magical Pocket Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-dora-text tracking-tight">
            Explore the Digital Gadget Universe
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dora-textLight">
            Every category is powered by its own original magical gadget. Browse all 10 specialized portals with 50 browser-based tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group relative flex flex-col p-6 rounded-3xl bg-gradient-to-b from-white to-[#F8FBFF] border border-dora-border shadow-dora-card hover:shadow-dora-hover hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Category Gadget Artwork */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-4 rounded-2xl bg-white shadow-dora-sm border border-dora-border/60 group-hover:scale-110 transition-transform">
                <GadgetIllustration categorySlug={cat.slug} size="md" />
              </div>

              {/* Title & Tagline */}
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-dora-deep">
                    {cat.gadgetName}
                  </span>
                  <h3 className="text-lg font-black text-dora-text mt-0.5 group-hover:text-dora-blue transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs text-dora-textLight line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-dora-blue">
                  <span>5 Tools</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center">
                    Enter <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 5: POPULAR GADGETS ---
export function PopularGadgetsSection() {
  const popularTools = TOOLS.filter((t) => t.isPopular).slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5FAFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-dora-blue mb-2">
              <Star className="w-4 h-4 fill-dora-yellow text-dora-yellow" />
              <span>Most Summoned Gadgets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-dora-text tracking-tight">
              Popular Everyday Tools
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-dora-deep hover:text-dora-blue group"
          >
            <span>View All 50 Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex flex-col p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-dora-border shadow-dora-card hover:shadow-dora-hover hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-dora-lightSky flex items-center justify-center text-dora-deep group-hover:scale-110 transition-transform">
                  <GadgetIllustration categorySlug={tool.category} size="sm" animate={false} />
                </div>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-sky-50 text-dora-deep border border-dora-border">
                  {tool.gadgetName}
                </span>
              </div>

              <h3 className="text-base font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                {tool.name}
              </h3>
              <p className="mt-2 text-xs text-dora-textLight leading-relaxed flex-1">
                {tool.shortDesc}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-dora-textLight">
                <span className="font-semibold text-dora-text">Free Forever</span>
                <span className="text-dora-blue font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Use Tool <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 6: HOW IT WORKS ---
export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Discover Your Gadget",
      desc: "Use the instant search bar or explore our 10 gadget pocket portals to select the exact tool for your task.",
      emoji: "🔍",
    },
    {
      step: "02",
      title: "Enter Data or Drop Files",
      desc: "Drop your PDFs, photos, or text. Processing executes directly on your device via Canvas and WebAssembly with 100% privacy.",
      emoji: "🪄",
    },
    {
      step: "03",
      title: "Get Results Instantly",
      desc: "Download pristine converted images, merged PDFs, validated code, or customized QR codes in a split second.",
      emoji: "⚡",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dora-lightSky border border-dora-border text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <span>Simple 3-Step Magic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-dora-text tracking-tight">
            How Dora Tools Works
          </h2>
          <p className="mt-3 text-base text-dora-textLight">
            No complex installations, no wait times, and zero privacy worries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="relative p-8 rounded-3xl bg-[#F8FBFF] border border-dora-border shadow-dora-sm hover:shadow-dora-card transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-dora-sm border border-dora-border flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {s.emoji}
              </div>
              <span className="text-xs font-black tracking-widest text-dora-blue uppercase">
                Step {s.step}
              </span>
              <h3 className="text-xl font-bold text-dora-text mt-2">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-dora-textLight leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 7: WHY DORA TOOLS ---
export function WhyDoraToolsSection() {
  const perks = [
    {
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      title: "100% Client-Side Privacy",
      desc: "Your confidential PDFs, images, and tax numbers are processed inside your browser sandbox. Nothing is saved or leaked.",
    },
    {
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50",
      title: "Zero File Upload Waiting",
      desc: "Stop waiting for multi-gigabyte uploads to crawl across the web. Processing kicks off immediately at native hardware speed.",
    },
    {
      icon: Smile,
      color: "text-dora-blue",
      bg: "bg-sky-50",
      title: "50 Free Ready Gadgets",
      desc: "Every single tool is fully functional without mandatory card payments or hidden paywalls on core utilities.",
    },
    {
      icon: Cpu,
      color: "text-purple-500",
      bg: "bg-purple-50",
      title: "Powered by WebAssembly & Canvas",
      desc: "Engineered with cutting-edge web standards: pdf-lib, HTML5 Canvas 2D, Web Crypto, and Web Workers.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5FAFF] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Mascot Graphic */}
          <div className="flex-1 flex justify-center">
            <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card max-w-md text-center">
              <DoraBot
                expression="happy"
                size="lg"
                showSpeechBubble={true}
                speechText="Your files stay safe with you! No sneaky uploads here."
              />
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-dora-text">
                  DoraBot Security Guarantee
                </span>
                <p className="text-[11px] text-dora-textLight mt-1">
                  Protected by browser origin isolation and client-side execution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Perks Grid */}
          <div className="flex-1 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-dora-blue">
                Built Differently
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-dora-text mt-1 tracking-tight">
                Why Millions Love Dora Tools
              </h2>
              <p className="mt-3 text-base text-dora-textLight">
                We believe standard tools should never compromise your privacy or demand extortionate software subscriptions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((p) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white border border-dora-border shadow-xs hover:shadow-dora-sm transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center ${p.color} mb-3`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-dora-text">
                      {p.title}
                    </h3>
                    <p className="text-xs text-dora-textLight mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SECTION 8: PRICING (4 Plans) ---
export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-24 bg-white relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dora-lightSky border border-dora-border text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>Transparent Fair Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-dora-text tracking-tight">
            Choose Your Superpower Plan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-dora-textLight">
            Free forever for everyday use. Upgrade anytime for higher bulk capacity, team collaboration, and cloud storage.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-[#F0F7FF] border border-dora-border">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-white text-dora-deep shadow-dora-sm"
                  : "text-dora-textLight hover:text-dora-text"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingPeriod === "yearly"
                  ? "bg-white text-dora-deep shadow-dora-sm"
                  : "text-dora-textLight hover:text-dora-text"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const price = billingPeriod === "yearly" ? Math.round(plan.priceYearly / 12) : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col p-6 rounded-3xl transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-gradient-to-b from-white via-sky-50/50 to-white border-2 border-dora-blue shadow-dora-hover -translate-y-2"
                    : "bg-white border border-dora-border shadow-dora-card hover:shadow-dora-hover hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm ${
                      plan.isPopular
                        ? "bg-dora-blue text-white"
                        : "bg-amber-100 text-amber-800 border border-amber-200"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-black text-dora-text">{plan.name}</h3>
                  <p className="text-xs text-dora-textLight mt-1">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="my-4 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-dora-text">
                      ₹{price}
                    </span>
                    <span className="text-xs text-dora-textLight font-semibold">/month</span>
                  </div>
                  {billingPeriod === "yearly" && plan.priceYearly > 0 && (
                    <span className="text-[11px] text-emerald-600 font-bold block mt-1">
                      Billed ₹{plan.priceYearly}/year (Save ₹{plan.priceMonthly * 12 - plan.priceYearly})
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 my-4 flex-1 text-xs">
                  {plan.features.map((feat, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 ${
                        feat.included ? "text-dora-text" : "text-slate-400 line-through opacity-70"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          feat.included ? (feat.highlight ? "text-dora-blue font-bold" : "text-emerald-500") : "text-slate-300"
                        }`}
                      />
                      <span className={feat.highlight ? "font-bold text-dora-deep" : ""}>{feat.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Plan Action CTA */}
                <Link
                  href={plan.id === "free" ? "/tools" : `/pricing?plan=${plan.id}`}
                  className={`w-full py-3 rounded-2xl text-center text-sm font-bold transition-all shadow-xs ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-dora-blue to-dora-deep text-white shadow-dora-sm hover:opacity-95"
                      : plan.id === "free"
                      ? "bg-slate-100 hover:bg-slate-200 text-dora-text"
                      : "bg-dora-lightSky hover:bg-dora-blue hover:text-white text-dora-deep border border-dora-border"
                  }`}
                >
                  {plan.id === "free" ? "Start Free" : `Upgrade to ${plan.name}`}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 9: LATEST TOOLS ---
export function LatestToolsSection() {
  const latestTools = TOOLS.slice(TOOLS.length - 4);

  return (
    <section className="py-20 bg-[#F8FBFF] border-t border-dora-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-dora-blue">
              Fresh from the Laboratory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-dora-text tracking-tight mt-1">
              Newly Launched Gadgets
            </h2>
          </div>
          <Link
            href="/tools"
            className="text-xs font-bold text-dora-deep hover:text-dora-blue flex items-center gap-1"
          >
            All 50 Tools <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {latestTools.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="p-5 rounded-2xl bg-white border border-dora-border shadow-xs hover:shadow-dora-sm hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                  NEW
                </span>
                <span className="text-xs text-dora-textLight font-medium">
                  {t.gadgetName}
                </span>
              </div>
              <h3 className="text-sm font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                {t.name}
              </h3>
              <p className="text-xs text-dora-textLight mt-1 line-clamp-2">
                {t.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 10: BLOG ---
export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-dora-blue">
              Gadget Academy & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-dora-text tracking-tight mt-1">
              Latest Tutorials & Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold text-dora-deep hover:text-dora-blue flex items-center gap-1 group"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl bg-[#F8FBFF] border border-dora-border overflow-hidden shadow-xs hover:shadow-dora-hover transition-all"
            >
              {/* Blog Header Color Accent */}
              <div className="h-44 bg-gradient-to-tr from-dora-blue via-dora-sky to-purple-400 p-6 flex flex-col justify-between text-white relative">
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md self-start">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dora-text group-hover:text-dora-blue transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-dora-textLight line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-dora-blue">
                  <span>By {post.author.name}</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center">
                    Read Guide <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
