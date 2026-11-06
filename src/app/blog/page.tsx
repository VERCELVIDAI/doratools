import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Clock, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogs-data";

export const metadata = {
  title: "Gadget Academy & Blog | Dora Tools",
  description: "Tutorials, technical architectural deep dives, and practical productivity guides on digital gadgets, SEO, and client-side processing.",
};

export default function BlogListingPage() {
  return (
    <div className="py-12 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dora-border shadow-xs text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-dora-blue" />
            <span>Gadget Academy & Engineering Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Latest Tutorials & Articles
          </h1>
          <p className="mt-3 text-base sm:text-lg text-dora-textLight">
            Learn how to streamline workflows, understand tax compliance, and build privacy-first SaaS solutions.
          </p>
        </div>

        {/* Featured Post */}
        {BLOG_POSTS.length > 0 && (
          <div className="mb-16">
            <Link
              href={`/blog/${BLOG_POSTS[0].slug}`}
              className="group block p-8 sm:p-10 rounded-3xl bg-white border border-dora-border shadow-dora-card hover:shadow-dora-hover transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl bg-gradient-to-tr from-dora-deep via-dora-blue to-dora-sky p-8 flex flex-col justify-between text-white">
                  <span className="self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                    {BLOG_POSTS[0].category}
                  </span>
                  <div>
                    <span className="text-xs text-sky-200">Featured Deep-Dive</span>
                    <h2 className="text-2xl sm:text-3xl font-black mt-1 leading-snug">
                      {BLOG_POSTS[0].title}
                    </h2>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-dora-textLight">
                    <span>{BLOG_POSTS[0].publishedAt}</span>
                    <span>•</span>
                    <span>{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-dora-text group-hover:text-dora-blue transition-colors">
                    {BLOG_POSTS[0].title}
                  </h3>
                  <p className="text-sm text-dora-textLight leading-relaxed">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between text-xs font-bold text-dora-blue">
                    <span>By {BLOG_POSTS[0].author.name}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Remaining Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl bg-white border border-dora-border overflow-hidden shadow-xs hover:shadow-dora-card hover:-translate-y-1 transition-all"
            >
              <div className="h-44 bg-gradient-to-tr from-sky-400 to-indigo-500 p-6 flex flex-col justify-between text-white">
                <span className="self-start px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-sky-100">{post.readTime}</span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-dora-text group-hover:text-dora-blue transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-dora-textLight line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-dora-blue">
                  <span>{post.publishedAt}</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
