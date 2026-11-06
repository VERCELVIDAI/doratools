import React from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";

export default function VerifyEmailPage() {
  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4 text-center space-y-6">
        <DoraBot expression="celebrating" size="lg" showSpeechBubble speechText="Email verified! Welcome aboard!" />
        <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h1 className="text-2xl font-black text-dora-text">Email Address Confirmed</h1>
          <p className="text-xs text-dora-textLight">
            Your Dora Tools account is activated with full access to 50 magical digital gadgets.
          </p>
          <div className="pt-2">
            <Link
              href="/dashboard"
              className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-xs shadow-dora-sm hover:opacity-95"
            >
              Go to Your Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
