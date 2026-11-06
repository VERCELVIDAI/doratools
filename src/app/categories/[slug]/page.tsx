import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { getCategoryBySlug, CATEGORIES } from "@/lib/categories-data";
import { getToolsByCategory } from "@/lib/tools-data";
import { GadgetIllustration } from "@/components/illustrations/GadgetIllustrations";

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return { title: "Category Not Found | Dora Tools" };
  return {
    title: `${cat.name} (${cat.gadgetName}) | Dora Tools`,
    description: cat.description,
  };
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const categoryTools = getToolsByCategory(category.slug);

  return (
    <div className="py-12 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back breadcrumb */}
        <div className="mb-6">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-dora-textLight hover:text-dora-blue transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </Link>
        </div>

        {/* Hero Header Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dora-lightSky text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
              <span>Gadget Universe: {category.gadgetName}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
              {category.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-dora-textLight leading-relaxed max-w-2xl">
              {category.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-dora-text">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>5 Real Functional Tools</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-dora-blue" />
                <span>100% In-Browser Execution</span>
              </div>
            </div>
          </div>

          <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-sky-50 to-blue-100 border-2 border-white shadow-dora-card flex items-center justify-center shrink-0">
            <GadgetIllustration categorySlug={category.slug} size="lg" />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-dora-text tracking-tight mb-6">
            Available Gadgets in {category.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex flex-col p-6 rounded-3xl bg-white border border-dora-border shadow-dora-card hover:shadow-dora-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-dora-lightSky flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GadgetIllustration categorySlug={tool.category} size="sm" animate={false} />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                    Free
                  </span>
                </div>

                <h3 className="text-lg font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-xs text-dora-textLight leading-relaxed flex-1">
                  {tool.shortDesc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-dora-blue">
                  <span>Launch Tool</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Enter <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
