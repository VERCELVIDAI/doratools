"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";
import { updateCurrentUser } from "@/lib/store";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      updateCurrentUser({
        name: name || "New Gadget Pioneer",
        email,
        role: "user",
      });
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <DoraBot expression="celebrating" size="md" showSpeechBubble speechText="Create your free explorer pass!" />
          <h1 className="text-2xl font-black text-dora-text mt-3 tracking-tight">
            Join the Gadget Universe
          </h1>
          <p className="text-xs text-dora-textLight mt-1">
            Sign up for free and unlock all 50 magical digital tools.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-dora-text mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kenjiro Sato"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none focus:border-dora-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-dora-text mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none focus:border-dora-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-dora-text mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none focus:border-dora-blue"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-xs shadow-dora-sm hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>{loading ? "Creating Account..." : "Create Free Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs text-dora-textLight">
            <span>Already have an account? </span>
            <Link href="/login" className="text-dora-blue font-bold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
