"use client";

import React, { useState } from "react";
import { Settings, Trash2, Download, RefreshCw, AlertTriangle } from "lucide-react";
import { clearToolHistory } from "@/lib/store";

export default function SettingsPage() {
  const [cleared, setCleared] = useState(false);

  const handleClearCache = () => {
    clearToolHistory();
    setCleared(true);
    setTimeout(() => setCleared(false), 2000);
  };

  const handleDeleteAccount = () => {
    if (confirm("Permanently delete your account and all associated local storage data? This action is irreversible.")) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-black text-dora-text">Account Settings</h1>
        <p className="text-xs text-dora-textLight">Manage your privacy storage, data controls, and preferences.</p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
        <div>
          <h3 className="text-sm font-bold text-dora-text mb-1">Local Storage Hygiene</h3>
          <p className="text-xs text-dora-textLight mb-3">
            Clear all cached tool drafts and history entries from your browser memory.
          </p>
          <button
            onClick={handleClearCache}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-dora-text font-bold text-xs flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Clear Local Storage Cache</span>
          </button>
          {cleared && <p className="text-xs font-bold text-emerald-600 mt-2">✓ Local storage cleared.</p>}
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-sm font-bold text-rose-600 flex items-center gap-1.5 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span>Danger Zone</span>
          </h3>
          <p className="text-xs text-dora-textLight mb-3">
            Permanently delete your user profile and cancel any active subscription.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs"
          >
            Delete Account Permanently
          </button>
        </div>
      </div>
    </div>
  );
}
