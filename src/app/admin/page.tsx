"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  CreditCard,
  TrendingUp,
  Activity,
  Wrench,
  ShieldAlert,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AdminOverviewPage() {
  const stats = [
    { label: "Total Registered Users", val: "14,820", change: "+12% this week", color: "text-purple-400" },
    { label: "Active Subscriptions", val: "1,248", change: "+8% this month", color: "text-emerald-400" },
    { label: "Monthly Recurring Revenue", val: "₹2,48,600", change: "+18% MoM", color: "text-sky-400" },
    { label: "Total Gadget Executions", val: "482,900", change: "100% Client-Side", color: "text-amber-400" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
            Operational Intelligence
          </span>
          <h1 className="text-3xl font-black text-white mt-1">Platform Command Center</h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time multi-tenant telemetry for [www.doratools.online](https://www.doratools.online)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-400">All 50 Gadget Portals Operational</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-400">{s.label}</span>
            <div className={`text-2xl sm:text-3xl font-black ${s.color}`}>{s.val}</div>
            <span className="text-[11px] font-semibold text-slate-500 block">{s.change}</span>
          </div>
        ))}
      </div>

      {/* Recent Activity & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white">Recent Subscription Orders</h3>
            <Link href="/admin/payments" className="text-xs text-purple-400 hover:underline">
              View All Payments
            </Link>
          </div>
          <div className="space-y-3 text-xs">
            {[
              { id: "pay_101", user: "Vikram Mehta", plan: "Pro Sorcerer (₹199)", time: "2m ago", status: "Success" },
              { id: "pay_102", user: "Deepak Rawat", plan: "Starter Wizard (₹99)", time: "14m ago", status: "Success" },
              { id: "pay_103", user: "TechStudio LLP", plan: "Business Universe (₹399)", time: "35m ago", status: "Success" },
            ].map((p) => (
              <div key={p.id} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">{p.user}</span>
                  <span className="text-slate-400">{p.plan}</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-bold block">{p.status}</span>
                  <span className="text-slate-500 text-[10px]">{p.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white">Top Gadgets by Volume</h3>
            <Link href="/admin/tools" className="text-xs text-purple-400 hover:underline">
              Manage 50 Tools
            </Link>
          </div>
          <div className="space-y-3 text-xs">
            {[
              { name: "PDF Merger", cat: "Paper Portal", volume: "128,400 runs", health: "100%" },
              { name: "Image Compressor", cat: "Magic Lens", volume: "94,200 runs", health: "100%" },
              { name: "GST Calculator", cat: "Number Machine", volume: "76,800 runs", health: "100%" },
              { name: "JSON Formatter", cat: "Code Capsule", volume: "62,100 runs", health: "100%" },
            ].map((t) => (
              <div key={t.name} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">{t.name}</span>
                  <span className="text-slate-400">{t.cat}</span>
                </div>
                <div className="text-right">
                  <span className="text-purple-300 font-bold block">{t.volume}</span>
                  <span className="text-emerald-400 text-[10px]">Uptime: {t.health}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
