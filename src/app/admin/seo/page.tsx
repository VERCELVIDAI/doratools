"use client";

import React from "react";
import { Search, Globe, CheckCircle2 } from "lucide-react";

export default function AdminSeoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">SEO & Search Engine Indexing</h1>
        <p className="text-xs text-slate-400">Manage XML Sitemaps, robots.txt, and canonical tags for [www.doratools.online](https://www.doratools.online).</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Sitemap.xml Auto-Generated</span>
          </div>
          <p className="text-xs text-slate-400">All 50 tools, 10 categories, and blog pages indexed in /sitemap.xml.</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Robots.txt Active</span>
          </div>
          <p className="text-xs text-slate-400">Allows public crawlers on /tools and /blog while disallowing /admin.</p>
        </div>
      </div>
    </div>
  );
}
