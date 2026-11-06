"use client";

import React, { useState, useEffect } from "react";
import { Printer, Download, Plus, Trash2, CheckCircle2, Circle, Sparkles, CreditCard, RefreshCw } from "lucide-react";
import { recordToolActivity, saveProject } from "@/lib/store";

// 46. INVOICE GENERATOR
export function InvoiceGeneratorTool() {
  const [invoiceNum, setInvoiceNum] = useState("INV-2026-001");
  const [date, setDate] = useState("2026-11-05");
  const [senderName, setSenderName] = useState("Dora Agency Inc.");
  const [senderEmail, setSenderEmail] = useState("billing@doraagency.com");
  const [clientName, setClientName] = useState("Acme Global Corp.");
  const [clientEmail, setClientEmail] = useState("finance@acmeglobal.com");
  const [items, setItems] = useState([
    { id: "1", desc: "Digital Architecture & SaaS Engineering", qty: 1, rate: 45000 },
    { id: "2", desc: "UI/UX Magical Glassmorphism System", qty: 1, rate: 25000 },
  ]);
  const [taxRate, setTaxRate] = useState(18); // 18% GST

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Math.random().toString(), desc: "Consulting / Feature Work", qty: 1, rate: 10000 },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateItem = (id: string, key: "desc" | "qty" | "rate", val: any) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [key]: val } : it)));
  };

  const subtotal = items.reduce((acc, it) => acc + (it.qty || 0) * (it.rate || 0), 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const grandTotal = subtotal + taxAmount;

  const handlePrint = () => {
    window.print();
    recordToolActivity({
      toolSlug: "invoice-generator",
      toolName: "Invoice Generator",
      categoryName: "Productivity Tools",
      summary: `Printed invoice ${invoiceNum} for ₹${grandTotal.toLocaleString()}`,
    });
  };

  const handleSaveDraft = () => {
    saveProject({
      userId: "usr_current",
      toolSlug: "invoice-generator",
      toolName: "Invoice Generator",
      title: `Invoice ${invoiceNum} — ${clientName}`,
      description: `Total ₹${grandTotal.toLocaleString()}`,
      data: { invoiceNum, date, senderName, clientName, items, grandTotal },
    });
    alert("Invoice saved to your dashboard projects!");
  };

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="p-4 rounded-2xl bg-white border border-dora-border shadow-xs flex flex-wrap items-center justify-between gap-4 no-print">
        <div>
          <h2 className="text-lg font-bold text-dora-text">GST-Ready Invoice Maker</h2>
          <p className="text-xs text-dora-textLight">Live calculations with print-ready A4 stylesheet.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveDraft}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-dora-text font-bold text-xs"
          >
            Save Draft
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl bg-dora-blue hover:bg-dora-deep text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Invoice Paper Sheet */}
      <div className="printable-area p-8 sm:p-12 rounded-3xl bg-white border border-dora-border shadow-dora-card max-w-4xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-dora-border">
          <div>
            <span className="text-3xl font-black text-dora-text tracking-tight">INVOICE</span>
            <div className="mt-2 text-xs text-slate-500 space-y-0.5">
              <p>Invoice No: <strong className="text-dora-text">{invoiceNum}</strong></p>
              <p>Date: <strong className="text-dora-text">{date}</strong></p>
              <p>Payment Terms: Due upon receipt</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <span className="text-lg font-black text-dora-blue">DORA TOOLS GADGET ENGINE</span>
            <p className="text-slate-500 mt-1">Official Verification: www.doratools.online</p>
          </div>
        </div>

        {/* Sender & Client Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
          <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border space-y-2">
            <span className="font-bold text-dora-deep uppercase tracking-wider block">Billed From:</span>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="w-full font-bold text-dora-text bg-transparent border-b border-slate-200 focus:outline-none"
            />
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className="w-full text-slate-500 bg-transparent border-b border-slate-200 focus:outline-none"
            />
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border space-y-2">
            <span className="font-bold text-dora-deep uppercase tracking-wider block">Billed To:</span>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full font-bold text-dora-text bg-transparent border-b border-slate-200 focus:outline-none"
            />
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="w-full text-slate-500 bg-transparent border-b border-slate-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Itemized Table */}
        <div className="space-y-3">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase">
                <th className="py-2.5">Item Description</th>
                <th className="py-2.5 w-20 text-center">Qty</th>
                <th className="py-2.5 w-32 text-right">Rate (₹)</th>
                <th className="py-2.5 w-32 text-right">Amount (₹)</th>
                <th className="py-2.5 w-10 text-center no-print"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item) => (
                <tr key={item.id} className="group">
                  <td className="py-2.5">
                    <input
                      type="text"
                      value={item.desc}
                      onChange={(e) => updateItem(item.id, "desc", e.target.value)}
                      className="w-full font-medium text-dora-text bg-transparent focus:outline-none"
                    />
                  </td>
                  <td className="py-2.5 text-center">
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => updateItem(item.id, "qty", Number(e.target.value))}
                      className="w-16 text-center font-bold text-dora-text bg-transparent focus:outline-none"
                    />
                  </td>
                  <td className="py-2.5 text-right">
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateItem(item.id, "rate", Number(e.target.value))}
                      className="w-24 text-right font-bold text-dora-text bg-transparent focus:outline-none"
                    />
                  </td>
                  <td className="py-2.5 text-right font-bold text-dora-text">
                    ₹{((item.qty || 0) * (item.rate || 0)).toLocaleString()}
                  </td>
                  <td className="py-2.5 text-center no-print">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 rounded text-slate-300 hover:text-rose-500"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={addItem}
            className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-dora-deep font-bold text-xs hover:bg-sky-100"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </div>

        {/* Totals Section */}
        <div className="pt-6 border-t-2 border-slate-100 flex flex-col items-end gap-2 text-xs">
          <div className="w-64 flex justify-between text-slate-500">
            <span>Subtotal:</span>
            <span className="font-bold text-dora-text">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="w-64 flex justify-between text-slate-500 items-center">
            <span>GST Rate (%):</span>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              className="w-16 text-right font-bold border border-slate-200 rounded px-1 text-xs"
            />
          </div>
          <div className="w-64 flex justify-between text-slate-500">
            <span>GST Tax Amount:</span>
            <span className="font-bold text-emerald-700">₹{taxAmount.toLocaleString()}</span>
          </div>
          <div className="w-64 flex justify-between text-base font-black text-dora-text pt-2 border-t border-slate-200">
            <span>Grand Total:</span>
            <span className="text-dora-blue">₹{grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 47. RECEIPT GENERATOR
export function ReceiptGeneratorTool() {
  const [receiptNo, setReceiptNo] = useState("REC-8841");
  const [payer, setPayer] = useState("Rahul Verma");
  const [amount, setAmount] = useState(15000);
  const [purpose, setPurpose] = useState("House Rent for November 2026");
  const [paymentMode, setPaymentMode] = useState("UPI / Online Transfer");

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-2xl bg-white border border-dora-border shadow-xs flex items-center justify-between no-print">
        <h2 className="text-lg font-bold text-dora-text">Payment & Cash Receipt Slip</h2>
        <button
          onClick={() => window.print()}
          className="px-5 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Printer className="w-4 h-4" />
          <span>Print Receipt Slip</span>
        </button>
      </div>

      <div className="printable-area p-8 rounded-3xl bg-white border-2 border-dashed border-dora-blue/40 max-w-xl mx-auto space-y-6 shadow-sm">
        <div className="text-center pb-4 border-b border-slate-200">
          <span className="text-2xl font-black text-dora-text">PAYMENT RECEIPT</span>
          <p className="text-xs text-slate-400">Receipt #{receiptNo}</p>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">Received With Thanks From:</span>
            <input
              type="text"
              value={payer}
              onChange={(e) => setPayer(e.target.value)}
              className="font-bold text-right text-dora-text bg-transparent border-b border-slate-200"
            />
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Amount Received:</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="font-black text-right text-dora-blue bg-transparent text-base border-b border-slate-200"
            />
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Towards / For:</span>
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="font-bold text-right text-dora-text bg-transparent border-b border-slate-200"
            />
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Payment Mode:</span>
            <input
              type="text"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="font-bold text-right text-dora-text bg-transparent border-b border-slate-200"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex justify-between items-end text-xs text-slate-400">
          <div>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Status: Verified Paid</p>
          </div>
          <div className="text-center">
            <div className="w-32 border-b border-slate-300 mb-1" />
            <span>Authorized Signature</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 48. RESUME BUILDER
export function ResumeBuilderTool() {
  const [name, setName] = useState("Alex Vance");
  const [title, setTitle] = useState("Principal Full-Stack & Systems Engineer");
  const [email, setEmail] = useState("alex@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [summary, setSummary] = useState("Passionate software craftsman with 8+ years experience architecting high-scale SaaS web platforms, real-time distributed systems, and delightful UX.");
  const [skills, setSkills] = useState("TypeScript, React, Next.js, Node.js, PostgreSQL, Docker, Tailwind CSS, WebAssembly");

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-2xl bg-white border border-dora-border shadow-xs flex items-center justify-between no-print">
        <div>
          <h2 className="text-lg font-bold text-dora-text">ATS-Friendly Resume Builder</h2>
          <p className="text-xs text-dora-textLight">Single-column layout proven to parse smoothly on applicant tracking engines.</p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-5 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Export PDF</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 no-print">
        {/* Editor Controls */}
        <div className="p-6 rounded-3xl bg-white border border-dora-border space-y-4">
          <h3 className="text-sm font-bold text-dora-text">Resume Fields</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Professional Title"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
            />
          </div>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Professional Summary"
            className="w-full h-24 px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Skills list"
            className="w-full h-20 px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
        </div>

        {/* Live Resume Sheet View */}
        <div className="printable-area p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-4 text-xs font-sans">
          <div className="text-center pb-3 border-b border-slate-200">
            <h1 className="text-xl font-bold text-slate-900">{name}</h1>
            <p className="text-xs font-semibold text-dora-blue mt-0.5">{title}</p>
            <p className="text-[11px] text-slate-500 mt-1">{email} • {phone} • linkedin.com/in/{name.toLowerCase().replace(/\s+/g, "")}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-100 pb-0.5 mb-1.5">Summary</h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">{summary}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-100 pb-0.5 mb-1.5">Core Competencies</h4>
            <p className="text-slate-700 text-[11px] leading-relaxed">{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 49. TO-DO LIST (Local Storage + Confetti)
export function TodoListTool() {
  const [tasks, setTasks] = useState<{ id: string; text: string; done: boolean; priority: "high" | "med" | "low" }[]>([
    { id: "1", text: "Merge quarterly marketing reports into PDF", done: false, priority: "high" },
    { id: "2", text: "Compress images for next blog release", done: true, priority: "med" },
    { id: "3", text: "Compute GST breakdown for client invoice", done: false, priority: "low" },
  ]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<"high" | "med" | "low">("med");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), text: input.trim(), done: false, priority },
    ]);
    setInput("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Smart Priority To-Do List</h2>
          <p className="text-xs text-dora-textLight">Organize tasks and track execution milestones in local storage.</p>
        </div>
        <span className="text-xs font-bold text-dora-blue px-3 py-1 bg-sky-50 rounded-full border border-dora-border">
          {completedCount} / {tasks.length} Completed
        </span>
      </div>

      <form onSubmit={addTask} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task or gadget milestone..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as any)}
          className="px-3 py-2 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-bold"
        >
          <option value="high">High Priority</option>
          <option value="med">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit" className="px-5 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep">
          Add Task
        </button>
      </form>

      <div className="space-y-2">
        {tasks.map((t) => (
          <div
            key={t.id}
            onClick={() => toggleTask(t.id)}
            className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
              t.done ? "bg-slate-50 border-slate-200 opacity-60" : "bg-[#F8FBFF] border-dora-border hover:bg-sky-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {t.done ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-slate-400" />}
              <span className={`text-xs font-bold ${t.done ? "line-through text-slate-500" : "text-dora-text"}`}>
                {t.text}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                  t.priority === "high"
                    ? "bg-rose-100 text-rose-700"
                    : t.priority === "med"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {t.priority}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(t.id);
                }}
                className="p-1 rounded text-slate-300 hover:text-rose-500"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 50. BUSINESS CARD GENERATOR
export function BusinessCardTool() {
  const [name, setName] = useState("Kenjiro Sato");
  const [role, setRole] = useState("Chief Product Designer");
  const [company, setCompany] = useState("Dora Tools");
  const [phone, setPhone] = useState("+91 98765 00000");
  const [email, setEmail] = useState("kenjiro@doratools.online");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-2xl bg-white border border-dora-border shadow-xs flex items-center justify-between no-print">
        <h2 className="text-lg font-bold text-dora-text">3.5&quot; x 2&quot; Business Card Designer</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-dora-text font-bold text-xs"
          >
            Flip Card View (3D)
          </button>
          <button
            onClick={() => window.print()}
            className="px-5 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print 300 DPI Card</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 no-print items-center">
        {/* Editor Inputs */}
        <div className="p-6 rounded-3xl bg-white border border-dora-border space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 rounded-xl border border-dora-border text-xs"
          />
        </div>

        {/* 3D Flip Card Preview */}
        <div className="flex justify-center p-6">
          <div
            className="w-[350px] h-[200px] rounded-2xl shadow-dora-hover border-2 border-white bg-gradient-to-tr from-dora-deep to-dora-blue text-white p-6 flex flex-col justify-between cursor-pointer transition-transform duration-500 hover:scale-105"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {!isFlipped ? (
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black">{name}</h3>
                    <p className="text-xs text-sky-200 font-semibold">{role}</p>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold">
                    ⚙️
                  </span>
                </div>
                <div className="text-[11px] text-sky-100 space-y-0.5">
                  <p>{company}</p>
                  <p>{phone}</p>
                  <p>{email}</p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                <span className="text-2xl font-black">{company}</span>
                <p className="text-xs text-sky-200">www.doratools.online</p>
                <span className="text-[10px] text-white/70">Tap to flip back</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
