"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Contact Support & Dispatch
          </h1>
          <p className="text-sm sm:text-base text-dora-textLight">
            Have a question, feedback, or a magical gadget suggestion? Drop our architectural team a message!
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">Message Dispatched!</h3>
                <p className="text-xs text-emerald-700">
                  Thank you, {name}! Our team will get back to you at {email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-dora-text mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dora-text mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-dora-text mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-dora-text mb-1">Message</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep flex items-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
            <div className="space-y-4 text-xs">
              <div>
                <span className="font-bold text-dora-text block">Official Email</span>
                <a href="mailto:support@doratools.online" className="text-dora-blue hover:underline">
                  support@doratools.online
                </a>
              </div>
              <div>
                <span className="font-bold text-dora-text block">Response SLA</span>
                <span className="text-dora-textLight">Under 4 hours for Pro & Business</span>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <DoraBot expression="waving" size="sm" showSpeechBubble speechText="We're here to help!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
