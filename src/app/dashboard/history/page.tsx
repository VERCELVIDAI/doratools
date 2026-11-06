"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { History, Trash2, ArrowRight } from "lucide-react";
import { getToolHistory, clearToolHistory } from "@/lib/store";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    setHistory(getToolHistory());
  }, []);

  const handleClear = () => {
    if (confirm("Clear your entire execution history?")) {
      clearToolHistory();
      setHistory([]);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-dora-text">Download & Activity History</h1>
          <p className="text-xs text-dora-textLight">Audit log of your recent gadget processing operations.</p>
        </div>
        {history.length > 0 && (
          <button
            onClick={handleClear}
            className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
          >
            Clear History
          </button>
        )}
      </div>

      <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs space-y-3">
        {history.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {history.map((item) => (
              <div key={item.id} className="py-3.5 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-dora-text">{item.toolName}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.categoryName}
                    </span>
                  </div>
                  <p className="text-slate-500 mt-0.5">{item.summary}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">
                    {new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <Link href={`/tools/${item.toolSlug}`} className="text-dora-blue font-bold hover:underline">
                    Re-run
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            No recent activity recorded.
          </div>
        )}
      </div>
    </div>
  );
}
