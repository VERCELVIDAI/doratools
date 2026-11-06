"use client";

import React, { useState } from "react";
import { Settings, Save, Globe, Shield } from "lucide-react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("Dora Tools");
  const [domain, setDomain] = useState("https://www.doratools.online");
  const [tagline, setTagline] = useState("Your Digital Gadget Universe!");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-black text-white">Platform Settings & Branding</h1>
        <p className="text-xs text-slate-400">Configure global metadata and platform toggles.</p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-300 mb-1">Platform Brand Name</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-300 mb-1">Primary Production Domain</label>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-300 mb-1">Main Brand Tagline</label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold"
            />
          </div>

          <label className="flex items-center gap-2 pt-2 cursor-pointer font-bold text-slate-300">
            <input
              type="checkbox"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
              className="rounded"
            />
            <span>Enable System Maintenance Mode</span>
          </label>

          <div className="pt-4 flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
            {saved && <span className="text-emerald-400 font-bold">✓ Platform settings updated!</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
