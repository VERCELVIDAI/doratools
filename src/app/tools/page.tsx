"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Sparkles, Star, ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { TOOLS } from "@/lib/tools-data";
import { CATEGORIES } from "@/lib/categories-data";
import { GadgetIllustration } from "@/components/illustrations/GadgetIllustrations";
import { toggleFavorite, isFavorite } from "@/lib/store";

export default function ToolsDirectoryPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("cat") || "all";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [favTrigger, setFavTrigger] = useState(0);

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      // Category filter
      if (selectedCategory !== "all" && tool.category !== selectedCategory) {
        return false;
      }
      // Favorites filter
      if (showOnlyFavorites && !isFavorite(tool.slug)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = tool.name.toLowerCase().includes(q);
        const matchesDesc = tool.shortDesc.toLowerCase().includes(q);
        const matchesCategory = tool.categoryName.toLowerCase().includes(q);
        const matchesGadget = tool.gadgetName.toLowerCase().includes(q);
        const matchesTag = tool.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesGadget && !matchesTag) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, showOnlyFavorites, favTrigger]);

  const handleToggleFav = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(slug);
    setFavTrigger((prev) => prev + 1);
  };

  return (
    <div className="py-12 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dora-border shadow-xs text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>50 Functional Magical Gadgets</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Explore All Digital Gadgets
          </h1>
          <p className="mt-3 text-base sm:text-lg text-dora-textLight">
            Fast, browser-based utilities with 100% client-side privacy. Pick a gadget and start working immediately.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white/90 backdrop-blur-md border border-dora-border rounded-3xl p-4 sm:p-6 shadow-dora-card mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-dora-blue absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools by name, tag, or keyword (e.g., pdf, resize, gst, qr, resume)..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#F8FBFF] border border-dora-border text-dora-text placeholder-slate-400 focus:outline-none focus:border-dora-blue transition-colors text-sm sm:text-base font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-dora-deep"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Favorite Filter Toggle */}
            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`shrink-0 px-4 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all ${
                showOnlyFavorites
                  ? "bg-amber-100 text-amber-900 border border-amber-300 shadow-xs"
                  : "bg-[#F8FBFF] border border-dora-border text-dora-text hover:bg-slate-100"
              }`}
            >
              <Star
                className={`w-4 h-4 ${
                  showOnlyFavorites ? "fill-amber-500 text-amber-500" : "text-slate-400"
                }`}
              />
              <span>Favorites Only</span>
            </button>
          </div>

          {/* Category Tabs Scroll */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-dora-blue text-white shadow-xs"
                  : "bg-slate-100 text-dora-text hover:bg-slate-200"
              }`}
            >
              All Tools (50)
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.slug
                    ? "bg-dora-deep text-white shadow-xs"
                    : "bg-slate-100 text-dora-text hover:bg-slate-200"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-75">(5)</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-dora-textLight font-semibold">
          <span>
            Showing <strong className="text-dora-text">{filteredTools.length}</strong> gadgets
          </span>
          {(searchQuery || selectedCategory !== "all" || showOnlyFavorites) && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setShowOnlyFavorites(false);
              }}
              className="text-dora-blue hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => {
              const fav = isFavorite(tool.slug);

              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group relative flex flex-col p-6 rounded-3xl bg-white border border-dora-border shadow-dora-card hover:shadow-dora-hover hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Top Bar: Icon & Category & Favorite Star */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-dora-lightSky border border-dora-border/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GadgetIllustration categorySlug={tool.category} size="sm" animate={false} />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {tool.isPopular && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          Popular
                        </span>
                      )}
                      <button
                        onClick={(e) => handleToggleFav(e, tool.slug)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-300 hover:text-amber-400 transition-colors"
                        title={fav ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            fav ? "fill-amber-400 text-amber-400" : "text-slate-300"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Tool Title & Description */}
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-dora-deep block mb-1">
                      {tool.gadgetName}
                    </span>
                    <h3 className="text-base font-black text-dora-text group-hover:text-dora-blue transition-colors leading-snug">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-xs text-dora-textLight leading-relaxed line-clamp-2">
                      {tool.shortDesc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {tool.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-dora-blue">
                    <span>Client-Side</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Open Gadget <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dora-border p-8 max-w-md mx-auto">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-bold text-dora-text">No Gadgets Matched Your Search</h3>
            <p className="text-xs text-dora-textLight mt-1 mb-6">
              Try adjusting your search terms or clearing your category filters to find what you need.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setShowOnlyFavorites(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-dora-blue text-white text-xs font-bold hover:bg-dora-deep transition-all"
            >
              Reset Filters & Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
