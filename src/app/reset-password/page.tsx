"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, CheckCircle2 } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    setDone(true);
  };

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <DoraBot expression="working" size="md" />
          <h1 className="text-2xl font-black text-dora-text mt-3">Set New Password</h1>
          <p className="text-xs text-dora-textLight mt-1">Choose a fresh security key for your account.</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
          {done ? (
            <div className="text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-sm font-bold text-dora-text">Password Updated!</h3>
              <p className="text-xs text-dora-textLight">Your new credentials are now active.</p>
              <Link href="/login" className="inline-block mt-3 px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
                Log In Now
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-dora-text mb-1">New Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-dora-text mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep transition-all shadow-xs"
              >
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
