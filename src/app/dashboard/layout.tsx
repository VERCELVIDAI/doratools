"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  CreditCard,
  BarChart2,
  Bookmark,
  FolderKanban,
  History,
  Star,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  Sparkles,
  Menu,
  X,
  Shield,
} from "lucide-react";
import { DoraBot } from "@/components/mascot/DoraBot";
import { getCurrentUser } from "@/lib/store";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());
    const handleUpdate = () => setUser(getCurrentUser());
    window.addEventListener("dora-user-updated", handleUpdate);
    return () => window.removeEventListener("dora-user-updated", handleUpdate);
  }, []);

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Profile", href: "/dashboard/profile", icon: User },
    { name: "My Subscription", href: "/dashboard/subscription", icon: CreditCard },
    { name: "Usage Analytics", href: "/dashboard/analytics", icon: BarChart2 },
    { name: "Saved Tools", href: "/dashboard/saved-tools", icon: Bookmark },
    { name: "Saved Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Download History", href: "/dashboard/history", icon: History },
    { name: "Favorites", href: "/dashboard/favorites", icon: Star },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { name: "Support Tickets", href: "/dashboard/support", icon: HelpCircle },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5FAFF] flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-white border-b border-dora-border p-4 flex items-center justify-between no-print">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-dora-blue text-white flex items-center justify-center font-bold text-xs">
            ⚙️
          </span>
          <span className="font-black text-sm text-dora-text">DORA DASHBOARD</span>
        </Link>
        <button onClick={() => setMobileNav(!mobileNav)} className="p-2 text-dora-text">
          {mobileNav ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Glassmorphism Sidebar */}
      <aside
        className={`${
          mobileNav ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white/95 backdrop-blur-md border-r border-dora-border p-4 flex flex-col justify-between shrink-0 no-print`}
      >
        <div className="space-y-6">
          {/* User Profile Mini Card */}
          <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-dora-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-dora-blue text-white font-bold flex items-center justify-center text-sm shadow-xs">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-dora-text truncate block">
                {user?.name || "Explorer"}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-dora-blue px-2 py-0.5 rounded-md bg-sky-50 border border-dora-border inline-block mt-0.5">
                {user?.subscription?.planName || "Free Explorer"}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNav(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-dora-lightSky text-dora-deep shadow-xs"
                      : "text-dora-textLight hover:text-dora-blue hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-dora-blue" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          {user?.role === "admin" && (
            <Link
              href="/admin"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold"
            >
              <Shield className="w-4 h-4" />
              <span>Admin Center</span>
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
