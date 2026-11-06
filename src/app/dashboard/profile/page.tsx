"use client";

import React, { useState, useEffect } from "react";
import { User, Mail, Shield, Save } from "lucide-react";
import { getCurrentUser, updateCurrentUser } from "@/lib/store";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const u = getCurrentUser();
    setUser(u);
    setName(u.name);
    setEmail(u.email);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateCurrentUser({ name, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-black text-dora-text">My Profile</h1>
        <p className="text-xs text-dora-textLight">Manage your personal credentials and gadget preferences.</p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Display Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-bold"
            />
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep flex items-center gap-2 shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
            {saved && <span className="text-xs font-bold text-emerald-600">✓ Profile updated successfully!</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
