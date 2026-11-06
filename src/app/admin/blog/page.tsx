"use client";

import React from "react";
import { BLOG_POSTS } from "@/lib/blogs-data";
import { FileText, Plus, Edit2 } from "lucide-react";

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Blog CMS Management</h1>
          <p className="text-xs text-slate-400">Published Articles: {BLOG_POSTS.length}</p>
        </div>
        <button
          onClick={() => alert("Open new blog post editor")}
          className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Article</span>
        </button>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300 min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
              <th className="py-3 px-4">Article Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Author</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {BLOG_POSTS.map((post) => (
              <tr key={post.slug} className="hover:bg-slate-900/50">
                <td className="py-3 px-4 font-bold text-white max-w-xs truncate">{post.title}</td>
                <td className="py-3 px-4 text-purple-400">{post.category}</td>
                <td className="py-3 px-4 text-slate-400">{post.author.name}</td>
                <td className="py-3 px-4 text-slate-500">{post.publishedAt}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold">
                    Published
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
