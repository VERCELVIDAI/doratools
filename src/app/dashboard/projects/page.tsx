"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FolderKanban, Trash2, ArrowRight, Plus } from "lucide-react";
import { getSavedProjects, deleteSavedProject } from "@/lib/store";

export default function SavedProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setProjects(getSavedProjects());
  }, []);

  const handleDelete = (id: string) => {
    deleteSavedProject(id);
    setProjects(getSavedProjects());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-dora-text">Saved Projects & Drafts</h1>
          <p className="text-xs text-dora-textLight">Your saved invoices, resume drafts, and gadget workspaces.</p>
        </div>
        <Link
          href="/tools"
          className="px-4 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Project</span>
        </Link>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-dora-blue px-2 py-0.5 rounded-md bg-sky-50 border border-dora-border">
                    {p.toolName}
                  </span>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-1 text-slate-300 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-base font-bold text-dora-text mt-3">{p.title}</h3>
                <p className="text-xs text-dora-textLight mt-1">{p.description || "Draft document"}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Saved draft</span>
                <Link
                  href={`/tools/${p.toolSlug}`}
                  className="font-bold text-dora-blue flex items-center gap-1 hover:underline"
                >
                  <span>Open in Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-dora-border max-w-md mx-auto space-y-3">
          <FolderKanban className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-dora-text">No Saved Projects Yet</h3>
          <p className="text-xs text-dora-textLight">
            Create an invoice, design a business card, or build a resume to save drafts here.
          </p>
        </div>
      )}
    </div>
  );
}
