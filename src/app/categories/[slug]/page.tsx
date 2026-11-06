import React from "react";
import Link from "next/link";
import { Metadata } from "next";
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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return { title: "Category Not Found | Dora Tools" };

  const url = `https://www.doratools.online/categories/${cat.slug}`;

  return {
    title: `${cat.name} (${cat.gadgetName}) — Free Online Gadgets | Dora Tools`,
    description: `${cat.description} Explore all ${cat.toolsCount} free tools with 100% private in-browser processing.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${cat.name} (${cat.gadgetName}) | Dora Tools`,
      description: cat.description,
      url,
      siteName: "Dora Tools",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${cat.name} - Dora Tools`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} (${cat.gadgetName}) | Dora Tools`,
      description: cat.description,
      images: ["/og-image.png"],
    },
  };
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const categoryTools = getToolsByCategory(category.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": `${category.name} (${category.gadgetName})`,
        "url": `https://www.doratools.online/categories/${category.slug}`,
        "description": category.description,
        "hasPart": categoryTools.map((t) => ({
          "@type": "SoftwareApplication",
          "name": t.name,
          "url": `https://www.doratools.online/tools/${t.slug}`,
          "description": t.shortDesc,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.doratools.online",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Categories",
            "item": "https://www.doratools.online/categories",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": category.name,
            "item": `https://www.doratools.online/categories/${category.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-8 sm:py-12 bg-gradient-to-b from-[#F0F7FF] via-[#F8FBFF] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back breadcrumb */}
        <div className="mb-6">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-dora-textLight hover:text-dora-blue transition-colors px-3 py-1.5 rounded-xl glass-ultra border border-white/80 active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </Link>
        </div>

        {/* Hero Header Card */}
        <div className="p-6 sm:p-12 rounded-3xl glass-ultra shadow-glass border border-white/80 mb-10 sm:mb-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dora-lightSky text-dora-deep text-xs font-bold uppercase tracking-wider mb-3 border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
              <span>Gadget Universe: {category.gadgetName}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
              {category.name}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-dora-textLight leading-relaxed max-w-2xl">
              {category.description}
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-dora-text">
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{categoryTools.length} Supercharged Functional Gadgets</span>
              </div>
              <div className="flex items-center gap-1.5 bg-sky-50 text-dora-deep px-3 py-1 rounded-lg border border-sky-200">
                <ShieldCheck className="w-4 h-4 text-dora-blue" />
                <span>100% In-Browser Execution</span>
              </div>
            </div>
          </div>

          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-sky-50 to-blue-100 border-2 border-white shadow-glass flex items-center justify-center shrink-0">
            <GadgetIllustration categorySlug={category.slug} size="lg" />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-dora-text tracking-tight">
              Available Gadgets in {category.name} ({categoryTools.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex flex-col p-5 sm:p-6 rounded-3xl glass-ultra shadow-glass hover:shadow-dora-hover hover:-translate-y-1.5 transition-all duration-300 border border-white/80 active:scale-98"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-dora-lightSky border border-dora-sky/30 shadow-2xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GadgetIllustration categorySlug={tool.category} size="sm" animate={false} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {tool.isNew && (
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        New
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-sky-50 text-dora-deep border border-dora-border">
                      Free
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-xs text-dora-textLight leading-relaxed flex-1 line-clamp-2">
                  {tool.shortDesc}
                </p>

                <div className="mt-5 pt-3.5 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-dora-blue">
                  <span className="text-emerald-600 font-bold text-[11px]">Client-Side</span>
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
    </>
  );
}
