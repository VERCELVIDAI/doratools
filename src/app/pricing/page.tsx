"use client";

import React, { useState } from "react";
import { Sparkles, Check, HelpCircle, Shield, Zap, ChevronDown, CreditCard, Lock } from "lucide-react";
import { PRICING_PLANS } from "@/lib/plans-data";
import { DoraBot } from "@/components/mascot/DoraBot";
import { upgradeUserPlan, getCurrentUser } from "@/lib/store";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlanModal, setSelectedPlanModal] = useState<any | null>(null);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleOpenUpgrade = (plan: any) => {
    if (plan.id === "free") return;
    setSelectedPlanModal(plan);
    setPaymentSuccess(false);
    setAppliedDiscount(0);
    setCouponCode("");
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "MAGIC50" || couponCode.toUpperCase() === "DORA2026") {
      setAppliedDiscount(50); // 50% discount
    } else {
      alert("Invalid coupon code. Try 'DORA2026' for 50% off!");
    }
  };

  const handleSimulatePayment = () => {
    if (!selectedPlanModal) return;
    upgradeUserPlan(selectedPlanModal.id, billingPeriod);
    setPaymentSuccess(true);
    setTimeout(() => {
      setSelectedPlanModal(null);
      setPaymentSuccess(false);
    }, 2500);
  };

  return (
    <div className="py-16 bg-[#F5FAFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dora-border shadow-xs text-dora-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dora-yellow" />
            <span>Transparent Pricing For Every Universe</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-dora-text tracking-tight">
            Magical Superpower Plans
          </h1>
          <p className="mt-4 text-base sm:text-lg text-dora-textLight">
            Access all 50 tools completely free. Upgrade for heavy bulk operations, team collaboration, and priority processing.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-dora-border shadow-xs">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-dora-blue text-white shadow-xs"
                  : "text-dora-text hover:text-dora-deep"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingPeriod === "yearly"
                  ? "bg-dora-blue text-white shadow-xs"
                  : "text-dora-text hover:text-dora-deep"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 text-[10px] font-black">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PRICING_PLANS.map((plan) => {
            const rawPrice = billingPeriod === "yearly" ? plan.priceYearly : plan.priceMonthly;
            const displayPrice = billingPeriod === "yearly" ? Math.round(plan.priceYearly / 12) : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col p-6 rounded-3xl transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white border-2 border-dora-blue shadow-dora-hover -translate-y-2"
                    : "bg-white border border-dora-border shadow-dora-card hover:shadow-dora-hover"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-dora-blue text-white shadow-xs">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-black text-dora-text">{plan.name}</h3>
                  <p className="text-xs text-dora-textLight mt-1">{plan.tagline}</p>
                </div>

                <div className="my-6 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-dora-text">₹{displayPrice}</span>
                    <span className="text-xs text-dora-textLight font-semibold">/month</span>
                  </div>
                  {billingPeriod === "yearly" && plan.priceYearly > 0 && (
                    <span className="text-[11px] text-emerald-600 font-bold block mt-1">
                      ₹{plan.priceYearly} billed once per year
                    </span>
                  )}
                </div>

                <ul className="space-y-3 flex-1 text-xs mb-6">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 ${
                        f.included ? "text-dora-text" : "text-slate-400 line-through opacity-70"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          f.included ? (f.highlight ? "text-dora-blue font-bold" : "text-emerald-500") : "text-slate-300"
                        }`}
                      />
                      <span className={f.highlight ? "font-bold text-dora-deep" : ""}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleOpenUpgrade(plan)}
                  className={`w-full py-3 rounded-2xl text-center text-xs font-bold transition-all shadow-xs ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-dora-blue to-dora-deep text-white hover:opacity-95"
                      : plan.id === "free"
                      ? "bg-slate-100 text-dora-text hover:bg-slate-200 cursor-default"
                      : "bg-dora-lightSky text-dora-deep hover:bg-dora-blue hover:text-white border border-dora-border"
                  }`}
                >
                  {plan.id === "free" ? "Active Free Plan" : `Select ${plan.name}`}
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card mb-20 overflow-x-auto">
          <h2 className="text-2xl font-black text-dora-text mb-6">Detailed Plan Comparison</h2>
          <table className="w-full text-left text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 text-dora-deep font-bold uppercase text-[11px]">
                <th className="py-3">Platform Capability</th>
                <th className="py-3 text-center">Free Explorer</th>
                <th className="py-3 text-center">Starter (₹99)</th>
                <th className="py-3 text-center bg-sky-50/50">Pro (₹199)</th>
                <th className="py-3 text-center">Business (₹399)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-dora-text">
              <tr>
                <td className="py-3 font-semibold">Available Tools</td>
                <td className="py-3 text-center">All 50 Tools</td>
                <td className="py-3 text-center">All 50 Tools</td>
                <td className="py-3 text-center bg-sky-50/50 font-bold">All 50 Tools</td>
                <td className="py-3 text-center">All 50 Tools</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Daily Bulk Operations</td>
                <td className="py-3 text-center">5 / day</td>
                <td className="py-3 text-center">50 / day</td>
                <td className="py-3 text-center bg-sky-50/50 font-bold">200 / day</td>
                <td className="py-3 text-center font-bold">1,000 / day</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Max File Size Limit</td>
                <td className="py-3 text-center">25 MB</td>
                <td className="py-3 text-center">50 MB</td>
                <td className="py-3 text-center bg-sky-50/50 font-bold">100 MB</td>
                <td className="py-3 text-center font-bold">200 MB</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Saved Cloud Projects</td>
                <td className="py-3 text-center">3</td>
                <td className="py-3 text-center">10</td>
                <td className="py-3 text-center bg-sky-50/50 font-bold">Unlimited</td>
                <td className="py-3 text-center font-bold">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Audit & Download History</td>
                <td className="py-3 text-center">7 Days</td>
                <td className="py-3 text-center">30 Days</td>
                <td className="py-3 text-center bg-sky-50/50 font-bold">90 Days</td>
                <td className="py-3 text-center font-bold">365 Days</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Team Members Included</td>
                <td className="py-3 text-center">1 User</td>
                <td className="py-3 text-center">1 User</td>
                <td className="py-3 text-center bg-sky-50/50 font-bold">1 User</td>
                <td className="py-3 text-center font-bold text-dora-blue">5 Users</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Custom Branding on Invoices</td>
                <td className="py-3 text-center text-slate-300">—</td>
                <td className="py-3 text-center text-slate-300">—</td>
                <td className="py-3 text-center bg-sky-50/50 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Razorpay Checkout Simulation Modal */}
        {selectedPlanModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-dora-border shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-dora-blue text-white flex items-center justify-center text-xs font-bold">
                    💳
                  </div>
                  <h3 className="text-base font-black text-dora-text">
                    Upgrade to {selectedPlanModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPlanModal(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              {paymentSuccess ? (
                <div className="p-8 text-center space-y-3">
                  <div className="text-4xl animate-bounce">🎉</div>
                  <h4 className="text-lg font-black text-emerald-700">Payment Successful!</h4>
                  <p className="text-xs text-slate-500">
                    Your account has been upgraded to {selectedPlanModal.name}. Welcome to higher limits!
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border flex justify-between items-center">
                    <div>
                      <p className="font-bold text-dora-text">{selectedPlanModal.name} ({billingPeriod})</p>
                      <p className="text-slate-500">Billed securely via Razorpay</p>
                    </div>
                    <span className="text-xl font-black text-dora-blue">
                      ₹
                      {Math.round(
                        (billingPeriod === "yearly"
                          ? selectedPlanModal.priceYearly
                          : selectedPlanModal.priceMonthly) *
                          ((100 - appliedDiscount) / 100)
                      )}
                    </span>
                  </div>

                  {/* Coupon Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon Code (e.g. DORA2026)"
                      className="flex-1 px-3 py-2 rounded-xl border border-dora-border bg-slate-50 uppercase font-bold"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-dora-text font-bold"
                    >
                      Apply
                    </button>
                  </div>

                  {appliedDiscount > 0 && (
                    <p className="text-emerald-600 font-bold">
                      ✓ Coupon Applied: 50% discount active!
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={handleSimulatePayment}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-sm shadow-dora-sm hover:opacity-95 flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Proceed with Razorpay Checkout</span>
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-2">
                      Secured by 256-bit SSL encryption. 100% money-back guarantee.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
