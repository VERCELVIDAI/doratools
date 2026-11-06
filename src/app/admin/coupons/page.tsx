"use client";

import React, { useState } from "react";
import { Ticket, Plus } from "lucide-react";

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState([
    { code: "DORA2026", discount: "50%", maxRedemptions: 1000, used: 240, active: true },
    { code: "MAGIC50", discount: "50%", maxRedemptions: 500, used: 110, active: true },
    { code: "WELCOME20", discount: "20%", maxRedemptions: 5000, used: 840, active: true },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Coupon Management</h1>
          <p className="text-xs text-slate-400">Create and monitor promotional promotional codes.</p>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300 min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
              <th className="py-3 px-4">Coupon Code</th>
              <th className="py-3 px-4">Discount</th>
              <th className="py-3 px-4">Usage Count</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {coupons.map((c) => (
              <tr key={c.code} className="hover:bg-slate-900/50">
                <td className="py-3 px-4 font-mono font-bold text-purple-400">{c.code}</td>
                <td className="py-3 px-4 font-bold text-emerald-400">{c.discount} OFF</td>
                <td className="py-3 px-4 text-slate-400">{c.used} / {c.maxRedemptions}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold">
                    Active
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
