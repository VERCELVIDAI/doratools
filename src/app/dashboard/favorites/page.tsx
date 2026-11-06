"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Star, ArrowRight, Trash2 } from "lucide-react";
import { getFavoriteSlugs, toggleFavorite } from "@/lib/store";
import { getToolBySlug } from "@/lib/tools-data";
import { GadgetIllustration } from "@/components/illustrations/GadgetIllustrations";

export default function FavoritesPage() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getFavoriteSlugs());
  }, []);

  const tools = slugs.map((s) => getToolBySlug(s)).filter(Boolean);

  const removeFav = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    toggleFavorite(slug);
    setSlugs(getFavoriteSlugs());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-dora-text">Favorite Gadgets</h1>
          <p className="text-xs text-dora-textLight">Your starred tools for instant one-click access.</p>
        </div>
      </div>

      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t: any) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs hover:shadow-dora-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-dora-lightSky flex items-center justify-center">
                    <GadgetIllustration categorySlug={t.category} size="sm" animate={false} />
                  </div>
                  <button
                    onClick={(e) => removeFav(e, t.slug)}
                    className="p-1.5 rounded-lg hover:bg-rose-50 text-amber-400 hover:text-rose-500 transition-colors"
                  >
                    <Star className="w-4 h-4 fill-amber-400" />
                  </button>
                </div>
                <h3 className="text-base font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                  {t.name}
                </h3>
                <p className="text-xs text-dora-textLight mt-1 line-clamp-2">
                  {t.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-dora-blue">
                <span>Launch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-dora-border max-w-md mx-auto space-y-3">
          <Star className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-dora-text">No Favorites Starred Yet</h3>
          <p className="text-xs text-dora-textLight">
            Click the star icon on any gadget page to pin it to your dashboard.
          </p>
          <Link
            href="/tools"
            className="inline-block px-5 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs"
          >
            Browse All Tools
          </Link>
        </div>
      )}
    </div>
  );
}
