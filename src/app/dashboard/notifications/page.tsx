"use client";

import React from "react";
import { Bell, Sparkles, ShieldCheck } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: "1",
      title: "50 Gadgets Officially Activated!",
      desc: "Welcome to Dora Tools! All 10 categories and 50 client-side tools are now live and ready.",
      time: "1 hour ago",
      icon: Sparkles,
      color: "text-dora-blue",
      bg: "bg-sky-50",
    },
    {
      id: "2",
      title: "Privacy Shield Verified",
      desc: "Your browser isolation sandbox is actively blocking any third-party file uploads.",
      time: "3 hours ago",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-black text-dora-text">Notifications & Alerts</h1>
        <p className="text-xs text-dora-textLight">Platform updates, gadget announcements, and account notices.</p>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => {
          const Icon = n.icon;
          return (
            <div
              key={n.id}
              className="p-5 rounded-2xl bg-white border border-dora-border shadow-xs flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-xl ${n.bg} ${n.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-dora-text">{n.title}</h3>
                  <span className="text-[10px] text-slate-400">{n.time}</span>
                </div>
                <p className="text-xs text-dora-textLight mt-1">{n.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
