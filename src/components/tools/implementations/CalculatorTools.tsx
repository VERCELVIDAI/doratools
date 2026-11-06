"use client";

import React, { useState } from "react";
import { Calculator, Percent, Coins, CreditCard, TrendingUp, Target } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 26. PERCENTAGE CALCULATOR
export function PercentageCalcTool() {
  const [valA, setValA] = useState(15);
  const [valB, setValB] = useState(250);

  const whatIsXPercentOfY = ((valA / 100) * valB).toFixed(2);
  const xIsWhatPercentOfY = valB !== 0 ? (((valA / valB) * 100).toFixed(2)) : "0";

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Multi-Mode Percentage Calculator</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Value A (e.g. Rate / Part):</label>
          <input
            type="number"
            value={valA}
            onChange={(e) => setValA(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Value B (e.g. Total / Base):</label>
          <input
            type="number"
            value={valB}
            onChange={(e) => setValB(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
          <span className="text-xs font-semibold text-sky-800 block">What is {valA}% of {valB}?</span>
          <span className="text-3xl font-black text-dora-blue mt-1 block">{whatIsXPercentOfY}</span>
        </div>
        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
          <span className="text-xs font-semibold text-purple-800 block">{valA} is what percent of {valB}?</span>
          <span className="text-3xl font-black text-purple-700 mt-1 block">{xIsWhatPercentOfY}%</span>
        </div>
      </div>
    </div>
  );
}

// 27. GST CALCULATOR (Indian Tax)
export function GstCalcTool() {
  const [amount, setAmount] = useState(10000);
  const [slab, setSlab] = useState(18);
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");
  const [taxType, setTaxType] = useState<"intra" | "inter">("intra");

  const gstRate = slab / 100;
  let netPrice = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (mode === "exclusive") {
    netPrice = amount;
    gstAmount = amount * gstRate;
    totalAmount = amount + gstAmount;
  } else {
    netPrice = amount / (1 + gstRate);
    gstAmount = amount - netPrice;
    totalAmount = amount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const igst = gstAmount;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Indian GST Tax Calculator</h2>
          <p className="text-xs text-dora-textLight">Calculate Inclusive or Exclusive GST with CGST, SGST, and IGST breakdowns.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Base Amount (₹ INR):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">GST Rate Slab:</label>
          <select
            value={slab}
            onChange={(e) => setSlab(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          >
            <option value={5}>5% (Essential goods)</option>
            <option value={12}>12% (Standard goods)</option>
            <option value={18}>18% (Services / IT / SaaS)</option>
            <option value={28}>28% (Luxury goods)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Calculation Type:</label>
          <div className="flex gap-2">
            <button
              onClick={() => setMode("exclusive")}
              className={`flex-1 py-2 rounded-xl text-xs font-bold ${
                mode === "exclusive" ? "bg-dora-blue text-white" : "bg-slate-100 text-dora-text"
              }`}
            >
              Add GST (Exclusive)
            </button>
            <button
              onClick={() => setMode("inclusive")}
              className={`flex-1 py-2 rounded-xl text-xs font-bold ${
                mode === "inclusive" ? "bg-dora-blue text-white" : "bg-slate-100 text-dora-text"
              }`}
            >
              Remove GST (Inclusive)
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 text-xs font-bold text-dora-text">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="radio" checked={taxType === "intra"} onChange={() => setTaxType("intra")} />
          <span>Intra-State (CGST 50% + SGST 50%)</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="radio" checked={taxType === "inter"} onChange={() => setTaxType("inter")} />
          <span>Inter-State (IGST 100%)</span>
        </label>
      </div>

      {/* Tax Breakdown Table */}
      <div className="p-6 rounded-2xl bg-gradient-to-b from-[#F0F7FF] to-white border border-dora-border space-y-3">
        <div className="flex justify-between text-xs text-dora-textLight">
          <span>Net Base Amount:</span>
          <span className="font-bold text-dora-text">₹{netPrice.toFixed(2)}</span>
        </div>
        {taxType === "intra" ? (
          <>
            <div className="flex justify-between text-xs text-dora-textLight">
              <span>CGST ({slab / 2}%):</span>
              <span className="font-bold text-dora-text">₹{cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-dora-textLight">
              <span>SGST ({slab / 2}%):</span>
              <span className="font-bold text-dora-text">₹{sgst.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <div className="flex justify-between text-xs text-dora-textLight">
            <span>IGST ({slab}%):</span>
            <span className="font-bold text-dora-text">₹{igst.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-xs font-bold text-emerald-700 pt-2 border-t border-slate-200">
          <span>Total GST Tax:</span>
          <span>₹{gstAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-black text-dora-text pt-2 border-t-2 border-dora-border">
          <span>Final Total Amount:</span>
          <span className="text-dora-blue">₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

// 28. EMI CALCULATOR
export function EmiCalcTool() {
  const [loan, setLoan] = useState(1000000); // 10 Lakhs
  const [rate, setRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(5);

  const monthlyRate = rate / (12 * 100);
  const months = tenureYears * 12;

  const emi =
    loan && rate && tenureYears
      ? (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loan;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Loan EMI & Repayment Calculator</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Loan Amount (₹):</label>
          <input
            type="number"
            value={loan}
            onChange={(e) => setLoan(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Annual Interest Rate (%):</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Loan Tenure (Years):</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold text-dora-text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
          <span className="text-xs font-bold text-slate-500 block">Monthly EMI</span>
          <span className="text-2xl font-black text-dora-blue mt-1 block">₹{Math.round(emi).toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
          <span className="text-xs font-bold text-slate-500 block">Total Interest Payable</span>
          <span className="text-2xl font-black text-amber-700 mt-1 block">₹{Math.round(totalInterest).toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
          <span className="text-xs font-bold text-slate-500 block">Total Amount Payable</span>
          <span className="text-2xl font-black text-purple-700 mt-1 block">₹{Math.round(totalPayment).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

// 29. ROI CALCULATOR
export function RoiCalcTool() {
  const [invested, setInvested] = useState(50000);
  const [returned, setReturned] = useState(120000);

  const profit = returned - invested;
  const roiPercent = invested > 0 ? ((profit / invested) * 100).toFixed(1) : "0";

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Return on Investment (ROI) Calculator</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Amount Invested (₹):</label>
          <input
            type="number"
            value={invested}
            onChange={(e) => setInvested(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Amount Returned / Revenue (₹):</label>
          <input
            type="number"
            value={returned}
            onChange={(e) => setReturned(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
          <span className="text-xs font-bold text-slate-500 block">Net Profit</span>
          <span className="text-2xl font-black text-emerald-700 mt-1 block">₹{profit.toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
          <span className="text-xs font-bold text-slate-500 block">Total ROI</span>
          <span className="text-2xl font-black text-dora-blue mt-1 block">{roiPercent}%</span>
        </div>
      </div>
    </div>
  );
}

// 30. CPC & AD BUDGET CALCULATOR
export function CpcCalcTool() {
  const [spend, setSpend] = useState(5000);
  const [clicks, setClicks] = useState(250);

  const cpc = clicks > 0 ? (spend / clicks).toFixed(2) : "0";

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Cost Per Click (CPC) Calculator</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Total Ad Spend (₹):</label>
          <input
            type="number"
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Total Clicks Delivered:</label>
          <input
            type="number"
            value={clicks}
            onChange={(e) => setClicks(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-sm font-bold"
          />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center">
        <span className="text-xs font-bold text-slate-500 block">Effective Cost Per Click (CPC)</span>
        <span className="text-3xl font-black text-dora-blue mt-1 block">₹{cpc} / click</span>
      </div>
    </div>
  );
}
