import React from "react";
import Link from "next/link";
import { HelpCircle, BookOpen, Shield, MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Help Center | Dora Tools",
  description: "Browse guides, documentation, and troubleshooting tips for Dora Tools.",
};

export default function HelpPage() {
  const cards = [
    {
      title: "Getting Started with Gadgets",
      desc: "Learn how to use PDF mergers, image compressors, and format converters on desktop or mobile.",
      link: "/tools",
      icon: BookOpen,
    },
    {
      title: "Privacy & File Security",
      desc: "Explore our browser-based architecture and understand how client-side isolation protects your data.",
      link: "/privacy",
      icon: Shield,
    },
    {
      title: "Billing & Subscription Support",
      desc: "Invoices, Razorpay payments, plan upgrades, and cancellation instructions.",
      link: "/pricing",
      icon: HelpCircle,
    },
    {
      title: "Contact Engineering Support",
      desc: "Open a support ticket or dispatch an inquiry directly to our technical team.",
      link: "/contact",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Dora Tools Help Center
          </h1>
          <p className="text-sm sm:text-base text-dora-textLight">
            Guides, tutorials, and technical support for your digital gadget universe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                href={c.link}
                className="p-6 rounded-3xl bg-white border border-dora-border shadow-xs hover:shadow-dora-card transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-dora-lightSky text-dora-deep flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-dora-text group-hover:text-dora-blue transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-dora-textLight mt-1.5 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-dora-blue">
                  <span>Explore Section</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
