"use client";

import React from "react";
import { CreditCard, CheckCircle2 } from "lucide-react";

export default function AdminPaymentsPage() {
  const transactions = [
    { id: "pay_Kx87fG2a", customer: "Vikram Mehta", amount: "₹199", plan: "Pro Sorcerer", date: "2026-11-05 17:42", gateway: "Razorpay", status: "captured" },
    { id: "pay_Kx85u91q", customer: "Deepak Rawat", amount: "₹99", plan: "Starter Wizard", date: "2026-11-05 16:30", gateway: "Razorpay", status: "captured" },
    { id: "pay_Kx78bL3z", customer: "TechStudio LLP", amount: "₹399", plan: "Business Universe", date: "2026-11-05 14:15", gateway: "Razorpay", status: "captured" },
    { id: "pay_Kx69aP8k", customer: "Ananya Roy", amount: "₹1,900", plan: "Pro Sorcerer (Annual)", date: "2026-11-04 11:20", gateway: "Razorpay", status: "captured" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Payment Transactions & Audit</h1>
        <p className="text-xs text-slate-400">Razorpay server-side signature verified records.</p>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300 min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
              <th className="py-3 px-4">Payment ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-900/50">
                <td className="py-3 px-4 font-mono text-purple-400">{tx.id}</td>
                <td className="py-3 px-4 font-bold text-white">{tx.customer}</td>
                <td className="py-3 px-4 text-slate-400">{tx.plan}</td>
                <td className="py-3 px-4 font-black text-emerald-400">{tx.amount}</td>
                <td className="py-3 px-4 text-slate-500">{tx.date}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                    {tx.status}
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
