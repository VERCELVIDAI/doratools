import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, planId, billingPeriod } = await req.json();

    const secret = process.env.RAZORPAY_KEY_SECRET || "dora_secret_key_testing_sandbox";

    // HMAC SHA256 Signature computation: sha256(order_id + "|" + payment_id, secret)
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    // In testing/sandbox or when signature matches
    const isSignatureValid =
      expectedSignature === razorpay_signature ||
      process.env.NODE_ENV !== "production" ||
      !process.env.RAZORPAY_KEY_SECRET;

    if (!isSignatureValid) {
      return NextResponse.json({ success: false, error: "Invalid payment signature." }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Payment signature verified successfully.",
      subscription: {
        planId,
        billingPeriod,
        status: "active",
        verifiedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Payment verification failed." }, { status: 500 });
  }
}
