"use client";

import React from "react";
import { PRICING_PLANS } from "@/lib/plans-data";
import { CreditCard, Edit3 } from "lucide-react";

export default function AdminPlansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Membership Plans & Pricing</h1>
        <p className="text-xs text-slate-400">Configure pricing slabs, bulk limits, and feature permissions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRICING_PLANS.map((plan) => (
          <div key={plan.id} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block">{plan.id}</span>
              <h3 className="text-xl font-bold text-white mt-1">{plan.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{plan.tagline}</p>
            </div>

            <div className="text-2xl font-black text-emerald-400">
              ₹{plan.priceMonthly} <span className="text-xs text-slate-500 font-normal">/mo</span>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <p>Bulk Limit: {plan.limits.bulkOperationsPerDay} ops/day</p>
              <p>Saved Projects: {plan.limits.savedProjects}</p>
              <p>Team Seats: {plan.limits.teamMembers}</p>
            </div>

            <button
              onClick={() => alert(`Edit configuration for ${plan.name}`)}
              className="w-full py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Modify Slabs</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
