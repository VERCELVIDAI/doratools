"use client";

import React from "react";
import { BarChart3, TrendingUp, DollarSign, Users } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Revenue & Platform Telemetry</h1>
        <p className="text-xs text-slate-400">Financial conversion rates, recurring revenue, and gadget analytics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-bold text-slate-400">Monthly Recurring Revenue (MRR)</span>
          <span className="text-3xl font-black text-emerald-400 mt-1 block">₹2,48,600</span>
          <span className="text-[11px] text-emerald-500 font-bold mt-1 block">+18% MoM growth</span>
        </div>
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-bold text-slate-400">Paid Conversion Rate</span>
          <span className="text-3xl font-black text-purple-400 mt-1 block">8.4%</span>
          <span className="text-[11px] text-slate-500 font-bold mt-1 block">Industry benchmark ~3%</span>
        </div>
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-bold text-slate-400">Annual Retention Rate</span>
          <span className="text-3xl font-black text-sky-400 mt-1 block">94.2%</span>
          <span className="text-[11px] text-slate-500 font-bold mt-1 block">Near-zero churn</span>
        </div>
      </div>
    </div>
  );
}
