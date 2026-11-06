"use client";

import React from "react";
import { CATEGORIES } from "@/lib/categories-data";
import { Layers } from "lucide-react";

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Category Portals (10)</h1>
        <p className="text-xs text-slate-400">Configure dimensional metadata, lore, and visual themes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CATEGORIES.map((cat, i) => (
          <div key={cat.slug} className="p-5 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                {cat.gadgetName}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">/categories/{cat.slug}</span>
            </div>
            <h3 className="text-lg font-black text-white">{cat.name}</h3>
            <p className="text-xs text-slate-400">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
