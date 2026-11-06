"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Shield, Heart, ExternalLink, Mail, Github, Twitter } from "lucide-react";
import { DoraBot } from "../mascot/DoraBot";
import { CATEGORIES } from "@/lib/categories-data";

export function Footer() {
  return (
    <footer className="bg-white border-t border-dora-border/80 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-dora-sky/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-dora-border/60">
          {/* Brand Info & Mascot Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-dora-deep to-dora-sky flex items-center justify-center text-white font-bold text-lg shadow-dora-sm">
                ⚙️
              </div>
              <span className="text-2xl font-black text-dora-text tracking-tight">
                DORA<span className="text-dora-blue">TOOLS</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-dora-deep">
              &quot;Your Digital Gadget Universe!&quot;
            </p>
            <p className="text-xs text-dora-textLight leading-relaxed max-w-sm">
              &quot;Every Problem Has a Gadget.&quot; Discover 50 client-side magical gadgets designed for creators, developers, founders, and professionals. 100% private, fast, and browser-powered.
            </p>

            <div className="flex items-center gap-3 pt-2 text-dora-textLight">
              <span className="text-xs font-semibold text-dora-text">Official:</span>
              <a
                href="https://www.doratools.online"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-dora-blue font-bold hover:underline"
              >
                www.doratools.online
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero data leaves your browser</span>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dora-text mb-4">
              Gadget Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-dora-textLight hover:text-dora-blue transition-colors font-medium flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-dora-blue">5 tools</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dora-text mb-4">
              More Universes
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.slice(5, 10).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-dora-textLight hover:text-dora-blue transition-colors font-medium flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-dora-blue">5 tools</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform & Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dora-text mb-4">
              Product & Legal
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/pricing" className="text-dora-textLight hover:text-dora-blue transition-colors">
                  Pricing Plans (₹0 - ₹399)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-dora-textLight hover:text-dora-blue transition-colors">
                  Gadget Blog & Tutorials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dora-textLight hover:text-dora-blue transition-colors">
                  About Dora Tools
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-dora-textLight hover:text-dora-blue transition-colors">
                  FAQ & Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dora-textLight hover:text-dora-blue transition-colors">
                  Contact Support
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-100">
                <Link href="/privacy" className="text-xs text-slate-500 hover:text-dora-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-slate-500 hover:text-dora-blue">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-xs text-slate-500 hover:text-dora-blue">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dora-textLight">
          <p>© {new Date().getFullYear()} DORA TOOLS. All rights reserved. Original IP and trademarks.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Engineered with pure client-side magic for</span>
            <span className="font-semibold text-dora-text">www.doratools.online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
