"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Star,
  History,
  FolderKanban,
  ArrowRight,
  TrendingUp,
  Layers,
  Crown,
} from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";
import { getCurrentUser, getToolHistory, getFavoriteSlugs, getSavedProjects } from "@/lib/store";
import { getToolBySlug } from "@/lib/tools-data";
import { GadgetIllustration } from "@/components/illustrations/GadgetIllustrations";

export default function DashboardOverviewPage() {
  const [user, setUser] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [favSlugs, setFavSlugs] = useState<string[]>([]);
  const [savedProjects, setSavedProjects] = useState<any[]>([]);

  useEffect(() => {
    setUser(getCurrentUser());
    setHistory(getToolHistory().slice(0, 5));
    setFavSlugs(getFavoriteSlugs().slice(0, 4));
    setSavedProjects(getSavedProjects().slice(0, 3));
  }, []);

  const favoriteTools = favSlugs.map((slug) => getToolBySlug(slug)).filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Welcome Banner with DoraBot */}
      <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dora-lightSky text-dora-deep text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>Digital Universe Member</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-dora-text tracking-tight">
            Welcome Back, {user?.name || "Explorer"}!
          </h1>
          <p className="text-xs sm:text-sm text-dora-textLight max-w-xl">
            Your personal digital gadget cockpit. Discover tools, manage saved project templates, and monitor daily execution metrics.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <Link
              href="/tools"
              className="px-4 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep transition-all"
            >
              Launch a Gadget
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-bold text-xs hover:bg-amber-100 transition-all"
            >
              Upgrade Limits
            </Link>
          </div>
        </div>

        <div className="shrink-0 z-10">
          <DoraBot expression="happy" size="md" showSpeechBubble speechText="All 50 gadgets are ready!" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Plan", val: user?.subscription?.planName || "Free", icon: Crown, color: "text-amber-500", bg: "bg-amber-50" },
          { label: "Tools Used", val: user?.stats?.totalToolsUsed || "12", icon: Zap, color: "text-dora-blue", bg: "bg-sky-50" },
          { label: "Files Processed", val: user?.stats?.totalFilesProcessed || "28", icon: Layers, color: "text-emerald-500", bg: "bg-emerald-50" },
          { label: "Saved Projects", val: savedProjects.length, icon: FolderKanban, color: "text-purple-500", bg: "bg-purple-50" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="p-5 rounded-2xl bg-white border border-dora-border shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400">{s.label}</span>
                <div className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center ${s.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <span className="text-xl font-black text-dora-text">{s.val}</span>
            </div>
          );
        })}
      </div>

      {/* Favorites & Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Favorite Gadgets */}
        <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <h3 className="text-sm font-bold text-dora-text">Favorite Gadgets</h3>
            </div>
            <Link href="/dashboard/favorites" className="text-xs text-dora-blue font-bold hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-2">
            {favoriteTools.map((t: any) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#F8FBFF] hover:bg-sky-50 border border-dora-border text-xs transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-dora-border flex items-center justify-center">
                    <GadgetIllustration categorySlug={t.category} size="sm" animate={false} />
                  </div>
                  <span className="font-bold text-dora-text">{t.name}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Gadget Activity */}
        <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-dora-blue" />
              <h3 className="text-sm font-bold text-dora-text">Recent Activity</h3>
            </div>
            <Link href="/dashboard/history" className="text-xs text-dora-blue font-bold hover:underline">
              Full History
            </Link>
          </div>

          <div className="space-y-2">
            {history.length > 0 ? (
              history.map((h: any) => (
                <div
                  key={h.id}
                  className="p-3 rounded-2xl bg-[#F8FBFF] border border-dora-border text-xs flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-dora-text block">{h.toolName}</span>
                    <span className="text-[11px] text-slate-400">{h.summary}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">Just now</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400 py-4 text-center">No recent gadget executions logged.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
