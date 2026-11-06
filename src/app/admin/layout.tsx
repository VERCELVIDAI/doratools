"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Shield,
  Users,
  Wrench,
  Layers,
  CreditCard,
  Ticket,
  BarChart3,
  FileText,
  Search,
  HelpCircle,
  Settings,
  LogOut,
  ExternalLink,
  Lock,
} from "lucide-react";
import { getCurrentUser } from "@/lib/store";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const u = getCurrentUser();
    setUser(u);
  }, []);

  const adminNav = [
    { name: "Overview", href: "/admin", icon: Shield },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Tools (50)", href: "/admin/tools", icon: Wrench },
    { name: "Categories (10)", href: "/admin/categories", icon: Layers },
    { name: "Plans & Pricing", href: "/admin/plans", icon: CreditCard },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Payments", href: "/admin/payments", icon: CreditCard },
    { name: "Coupons", href: "/admin/coupons", icon: Ticket },
    { name: "Revenue Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Blog CMS", href: "/admin/blog", icon: FileText },
    { name: "SEO Management", href: "/admin/seo", icon: Search },
    { name: "Support Tickets", href: "/admin/support", icon: HelpCircle },
    { name: "Website Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 border-r border-slate-800 p-4 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="p-3 bg-purple-950/60 border border-purple-800/60 rounded-2xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black tracking-wider text-purple-300 block">
                ADMIN CONTROL
              </span>
              <span className="text-[10px] text-slate-400">Dora Tools Core</span>
            </div>
          </div>

          <nav className="space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-800 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-900"
          >
            <span>Exit to User Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>

      {/* Main Admin Viewport */}
      <main className="flex-1 p-6 sm:p-10 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
