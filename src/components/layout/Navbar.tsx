"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowRight, User, Shield, Layers, BookOpen, CreditCard } from "lucide-react";
import { DoraBot } from "../mascot/DoraBot";
import { getCurrentUser } from "@/lib/store";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getCurrentUser());
    const handleUserUpdate = () => setUser(getCurrentUser());
    window.addEventListener("dora-user-updated", handleUserUpdate);
    return () => window.removeEventListener("dora-user-updated", handleUserUpdate);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Tools", href: "/tools" },
    { name: "Categories", href: "/categories" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-dora-border/70 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Mascot Icon */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-dora-deep to-dora-sky shadow-dora-sm group-hover:scale-105 transition-transform">
            {/* Pocket Icon Emblem */}
            <DoraBot expression="happy" size="sm" className="w-8 h-8 pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-dora-text tracking-tight group-hover:text-dora-blue transition-colors">
                DORA<span className="text-dora-blue">TOOLS</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-dora-yellow animate-pulse" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-dora-textLight -mt-1">
              Digital Gadget Universe
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-dora-lightSky text-dora-deep shadow-xs"
                    : "text-dora-text hover:text-dora-blue hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-dora-border shadow-xs hover:border-dora-blue text-dora-text text-sm font-semibold transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-dora-sky/20 text-dora-deep flex items-center justify-center text-xs font-bold">
                  {user.name.charAt(0)}
                </div>
                <span>Dashboard</span>
              </Link>

              {user.role === "admin" && (
                <Link
                  href="/admin"
                  className="px-3 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold hover:bg-purple-100 transition-colors flex items-center gap-1"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin</span>
                </Link>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-bold text-dora-text hover:text-dora-blue transition-colors"
            >
              Sign In
            </Link>
          )}

          <Link
            href="/tools"
            className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-sm shadow-dora-sm hover:shadow-dora-hover hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-dora-yellow" />
            <span>Launch Gadgets</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/tools"
            className="px-3 py-1.5 rounded-lg bg-dora-blue text-white text-xs font-bold"
          >
            Tools
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-dora-text hover:bg-dora-lightSky focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dora-border bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-dora-lightSky/60 text-sm font-bold text-dora-text hover:bg-dora-lightSky"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-white border border-dora-border text-dora-text font-bold text-sm"
            >
              User Dashboard
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-purple-50 text-purple-700 font-bold text-sm"
            >
              Admin Center
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
