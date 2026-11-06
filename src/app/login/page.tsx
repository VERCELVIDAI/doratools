"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";
import { updateCurrentUser } from "@/lib/store";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("explorer@doratools.online");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      updateCurrentUser({
        email,
        name: email.split("@")[0].toUpperCase(),
        role: email.includes("admin") ? "admin" : "user",
      });
      router.push("/dashboard");
    }, 600);
  };

  const handleQuickLogin = (role: "user" | "admin") => {
    updateCurrentUser({
      email: role === "admin" ? "admin@doratools.online" : "explorer@doratools.online",
      name: role === "admin" ? "Dora Administrator" : "Gadget Explorer",
      role,
    });
    router.push(role === "admin" ? "/admin" : "/dashboard");
  };

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {/* Mascot Header */}
        <div className="text-center mb-6">
          <DoraBot expression="happy" size="md" showSpeechBubble speechText="Welcome back to the gadget universe!" />
          <h1 className="text-2xl font-black text-dora-text mt-3 tracking-tight">
            Sign In to Dora Tools
          </h1>
          <p className="text-xs text-dora-textLight mt-1">
            Access your saved projects, history, and subscription superpowers.
          </p>
        </div>

        {/* Card */}
        <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-dora-text mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none focus:border-dora-blue"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold text-dora-text">Password</label>
                <Link href="/forgot-password" className="text-[11px] font-bold text-dora-blue hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none focus:border-dora-blue"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-xs shadow-dora-sm hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>{loading ? "Authenticating..." : "Sign In to Universe"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Logins */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center block">
              Quick One-Click Test Logins
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin("user")}
                className="py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 border border-dora-border text-dora-deep font-bold text-xs transition-colors"
              >
                Explorer User
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("admin")}
                className="py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 font-bold text-xs transition-colors"
              >
                Admin Center
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-dora-textLight">
            <span>Don&apos;t have an account? </span>
            <Link href="/register" className="text-dora-blue font-bold hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
