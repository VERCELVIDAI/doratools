"use client";

import React, { useState } from "react";
import { TOOLS } from "@/lib/tools-data";
import { Search, CheckCircle, XCircle } from "lucide-react";

export default function AdminToolsPage() {
  const [search, setSearch] = useState("");
  const [toolsList, setToolsList] = useState(TOOLS);

  const toggleToolStatus = (slug: string) => {
    alert(`Tool ${slug} status toggled.`);
  };

  const filtered = toolsList.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.categoryName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white">Tool Engine Management</h1>
          <p className="text-xs text-slate-400">Total Catalog: 50 Functional Gadgets</p>
        </div>
        <div className="relative w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300 min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
              <th className="py-3 px-4">Gadget Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filtered.map((t) => (
              <tr key={t.slug} className="hover:bg-slate-900/50">
                <td className="py-3 px-4 font-bold text-white">{t.name}</td>
                <td className="py-3 px-4 text-purple-400 font-medium">{t.categoryName}</td>
                <td className="py-3 px-4 font-mono text-[11px] text-slate-500">/tools/{t.slug}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => toggleToolStatus(t.slug)}
                    className="text-xs text-purple-400 hover:text-purple-300 font-bold hover:underline"
                  >
                    Configure
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
