"use client";

import React, { useState } from "react";
import { Users, Search, Shield, UserX, UserCheck } from "lucide-react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([
    { id: "usr_01", name: "Gadget Explorer", email: "explorer@doratools.online", role: "user", plan: "Free Explorer", joined: "2026-10-01", status: "active" },
    { id: "usr_02", name: "Dora Administrator", email: "admin@doratools.online", role: "admin", plan: "Business Universe", joined: "2026-09-15", status: "active" },
    { id: "usr_03", name: "Priya Sharma", email: "priya@gmail.com", role: "user", plan: "Pro Sorcerer", joined: "2026-10-24", status: "active" },
    { id: "usr_04", name: "Aarav Mehta", email: "aarav@techagency.in", role: "user", plan: "Starter Wizard", joined: "2026-11-01", status: "active" },
  ]);

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "active" ? "suspended" : "active" } : u
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">User Management</h1>
          <p className="text-xs text-slate-400">Total Registered Members: {users.length}</p>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300 min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Subscription Plan</th>
              <th className="py-3 px-4">Joined Date</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-900/50">
                <td className="py-3 px-4 font-bold text-white">{u.name}</td>
                <td className="py-3 px-4 text-slate-400">{u.email}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                    u.role === "admin" ? "bg-purple-900 text-purple-300" : "bg-slate-800 text-slate-400"
                  }`}>
                    {u.role}
                  </span>
                </td>
                <td className="py-3 px-4 font-bold text-sky-400">{u.plan}</td>
                <td className="py-3 px-4 text-slate-500">{u.joined}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    u.status === "active" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-rose-950 text-rose-400 border border-rose-800"
                  }`}>
                    {u.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className="text-xs text-rose-400 hover:text-rose-300 font-bold hover:underline"
                  >
                    {u.status === "active" ? "Suspend" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
