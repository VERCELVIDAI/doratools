"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CreditCard, Check, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { getCurrentUser, upgradeUserPlan } from "@/lib/store";

export default function SubscriptionPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const sub = user?.subscription;

  const handleCancelSub = () => {
    if (confirm("Are you sure you want to downgrade to the Free Explorer tier?")) {
      upgradeUserPlan("free");
      setUser(getCurrentUser());
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-black text-dora-text">My Subscription</h1>
        <p className="text-xs text-dora-textLight">Manage your billing plan, limits, and payment renewals.</p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-dora-blue">Current Plan</span>
            <h2 className="text-2xl font-black text-dora-text mt-0.5">{sub?.planName || "Free Explorer"}</h2>
            <p className="text-xs text-dora-textLight mt-1">Status: <strong className="text-emerald-600 font-bold uppercase">{sub?.status || "Active"}</strong></p>
          </div>

          <div className="text-right">
            <span className="text-3xl font-black text-dora-text">₹{sub?.price || 0}</span>
            <span className="text-xs text-dora-textLight font-semibold">/{sub?.billingPeriod || "month"}</span>
          </div>
        </div>

        {/* Feature Limits */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Superpowers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-dora-border">
              <span className="text-slate-500 block">Daily Bulk Operations</span>
              <span className="font-bold text-dora-text mt-0.5 block">{sub?.features?.bulkOperationsLimit || 5} operations / day</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-dora-border">
              <span className="text-slate-500 block">Saved Cloud Projects</span>
              <span className="font-bold text-dora-text mt-0.5 block">{sub?.features?.savedProjectsLimit || 3} projects</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-dora-border">
              <span className="text-slate-500 block">Download & Audit History</span>
              <span className="font-bold text-dora-text mt-0.5 block">{sub?.features?.historyDays || 7} days retention</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-dora-border">
              <span className="text-slate-500 block">Team Workspaces</span>
              <span className="font-bold text-dora-text mt-0.5 block">{sub?.features?.teamMembersLimit || 1} seat(s)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/pricing"
            className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep transition-all shadow-xs"
          >
            Change / Upgrade Plan
          </Link>

          {sub?.planId !== "free" && (
            <button
              onClick={handleCancelSub}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
