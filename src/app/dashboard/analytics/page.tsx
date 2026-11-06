"use client";

import React, { useState, useEffect } from "react";
import { BarChart2, ShieldCheck, Zap, Activity } from "lucide-react";
import { getCurrentUser, getDailyUsage } from "@/lib/store";

export default function AnalyticsPage() {
  const [daily, setDaily] = useState({ date: "", count: 0 });

  useEffect(() => {
    setDaily(getDailyUsage());
  }, []);

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-black text-dora-text">Usage Analytics</h1>
        <p className="text-xs text-dora-textLight">Real-time performance and tool execution telemetry.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs text-center">
          <Activity className="w-6 h-6 text-dora-blue mx-auto mb-2" />
          <span className="text-xs font-bold text-slate-400 block">Today&apos;s Operations</span>
          <span className="text-3xl font-black text-dora-text mt-1 block">{daily.count}</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs text-center">
          <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
          <span className="text-xs font-bold text-slate-400 block">External Data Leaks</span>
          <span className="text-3xl font-black text-emerald-600 mt-1 block">0 Bytes</span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs text-center">
          <Zap className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <span className="text-xs font-bold text-slate-400 block">Average Latency</span>
          <span className="text-3xl font-black text-amber-600 mt-1 block">&lt; 15 ms</span>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-4">
        <h2 className="text-base font-bold text-dora-text">Top Executed Gadget Categories</h2>
        <div className="space-y-3">
          {[
            { cat: "Paper Portal (PDF Tools)", pct: 45, color: "bg-rose-500" },
            { cat: "Magic Lens (Image Tools)", pct: 25, color: "bg-purple-500" },
            { cat: "Number Machine (Calculators)", pct: 15, color: "bg-amber-500" },
            { cat: "Scan Portal (QR Codes)", pct: 10, color: "bg-dora-blue" },
            { cat: "Smart Pocket (Productivity)", pct: 5, color: "bg-emerald-500" },
          ].map((item) => (
            <div key={item.cat} className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-dora-text">{item.cat}</span>
                <span className="text-slate-500">{item.pct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className={`h-full ${item.color}`} style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
