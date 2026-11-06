"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <DoraBot expression="thinking" size="md" showSpeechBubble speechText="Can't find your access key? I'll help!" />
          <h1 className="text-2xl font-black text-dora-text mt-3">Reset Password</h1>
          <p className="text-xs text-dora-textLight mt-1">We will send a magical recovery link to your inbox.</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
          {sent ? (
            <div className="text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-sm font-bold text-dora-text">Recovery Link Dispatched</h3>
              <p className="text-xs text-dora-textLight">
                If an account exists for {email}, you will receive a reset password email shortly.
              </p>
              <div className="pt-2">
                <Link href="/login" className="text-xs font-bold text-dora-blue hover:underline">
                  Return to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-dora-text mb-1">Your Account Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="explorer@doratools.online"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep transition-all shadow-xs"
              >
                Send Password Reset Link
              </button>

              <div className="text-center">
                <Link href="/login" className="inline-flex items-center gap-1 text-xs font-bold text-dora-textLight hover:text-dora-blue">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
