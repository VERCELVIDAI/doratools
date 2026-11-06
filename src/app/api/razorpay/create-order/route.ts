import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { planId, billingPeriod, couponCode } = await req.json();

    const prices: Record<string, { monthly: number; yearly: number }> = {
      starter: { monthly: 99, yearly: 950 },
      pro: { monthly: 199, yearly: 1900 },
      business: { monthly: 399, yearly: 3800 },
    };

    if (!prices[planId]) {
      return NextResponse.json({ error: "Invalid plan specified." }, { status: 400 });
    }

    let baseAmount = billingPeriod === "yearly" ? prices[planId].yearly : prices[planId].monthly;

    // Apply coupon discount if valid
    if (couponCode && (couponCode.toUpperCase() === "MAGIC50" || couponCode.toUpperCase() === "DORA2026")) {
      baseAmount = Math.round(baseAmount * 0.5);
    }

    const amountInPaise = baseAmount * 100;
    const orderId = `order_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;

    // Razorpay Key ID from env or sandbox fallback
    const keyId = process.env.RAZORPAY_KEY_ID || "rzp_test_DoraToolsUniverse";

    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        amount: amountInPaise,
        currency: "INR",
        planId,
        billingPeriod,
        keyId,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to initialize order." }, { status: 500 });
  }
}
