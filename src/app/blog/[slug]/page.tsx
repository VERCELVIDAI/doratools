import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, Sparkles, Share2 } from "lucide-react";
import { getBlogPostBySlug, BLOG_POSTS } from "@/lib/blogs-data";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found | Dora Tools" };

  return {
    title: `${post.title} | Dora Tools Blog`,
    description: post.excerpt,
    keywords: post.seo.keywords,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="py-12 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-dora-textLight hover:text-dora-blue transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Academy</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <article className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-dora-lightSky text-dora-deep text-xs font-black uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-dora-text tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-dora-textLight pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 font-bold text-dora-text">
                <User className="w-4 h-4 text-dora-blue" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Markdown Body */}
          <div className="prose prose-slate max-w-none text-sm text-dora-text leading-relaxed space-y-4 whitespace-pre-line">
            {post.content}
          </div>

          {/* Author Box */}
          <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-dora-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-dora-blue text-white flex items-center justify-center font-bold text-lg shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-sm font-bold text-dora-text">{post.author.name}</h4>
              <p className="text-xs text-dora-textLight">{post.author.role}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
