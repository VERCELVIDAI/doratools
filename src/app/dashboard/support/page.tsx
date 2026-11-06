"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Send, CheckCircle2 } from "lucide-react";

export default function SupportTicketsPage() {
  const [tickets, setTickets] = useState([
    {
      id: "TCK-109",
      subject: "Inquiry on bulk PDF merging limit",
      status: "resolved",
      date: "2026-11-03",
    },
  ]);
  const [showNew, setShowNew] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setTickets((prev) => [
      {
        id: `TCK-${Math.floor(Math.random() * 900) + 100}`,
        subject,
        status: "open",
        date: new Date().toISOString().split("T")[0],
      },
      ...prev,
    ]);
    setShowNew(false);
    setSubject("");
    setMessage("");
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-dora-text">Support Tickets</h1>
          <p className="text-xs text-dora-textLight">Direct assistance from our gadget engineering team.</p>
        </div>
        <button
          onClick={() => setShowNew(!showNew)}
          className="px-4 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Ticket</span>
        </button>
      </div>

      {showNew && (
        <form onSubmit={handleCreate} className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-dora-text">Open New Support Ticket</h3>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject summary..."
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border text-xs bg-[#F8FBFF]"
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe the issue or feature request..."
            rows={4}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border text-xs bg-[#F8FBFF]"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowNew(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-dora-blue text-white text-xs font-bold"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      )}

      <div className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs space-y-3">
        <div className="divide-y divide-slate-100">
          {tickets.map((t) => (
            <div key={t.id} className="py-3.5 flex items-center justify-between text-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-dora-text">{t.subject}</span>
                  <span className="text-[10px] text-slate-400">({t.id})</span>
                </div>
                <span className="text-slate-400 mt-0.5 block">Opened on {t.date}</span>
              </div>
              <span
                className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                  t.status === "resolved"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-sky-50 text-dora-blue border border-dora-border"
                }`}
              >
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
