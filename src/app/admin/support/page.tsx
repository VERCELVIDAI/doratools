"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState([
    { id: "TCK-109", customer: "Rahul Verma", subject: "Inquiry on bulk PDF merging limit", status: "Resolved", priority: "Low" },
    { id: "TCK-110", customer: "Pooja Patel", subject: "Suggesting SVG color palette generator gadget", status: "Open", priority: "Medium" },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Support Ticket Resolution Center</h1>
        <p className="text-xs text-slate-400">Incoming inquiries and bug reports.</p>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300 min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
              <th className="py-3 px-4">Ticket</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {tickets.map((t) => (
              <tr key={t.id} className="hover:bg-slate-900/50">
                <td className="py-3 px-4 font-mono text-purple-400">{t.id}</td>
                <td className="py-3 px-4 font-bold text-white">{t.customer}</td>
                <td className="py-3 px-4 text-slate-300">{t.subject}</td>
                <td className="py-3 px-4 text-slate-400">{t.priority}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    t.status === "Resolved" ? "bg-emerald-950 text-emerald-400" : "bg-sky-950 text-sky-400"
                  }`}>
                    {t.status}
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
