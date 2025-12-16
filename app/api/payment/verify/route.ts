import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import crypto from "crypto";

const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;

function verifySignature(
  orderId: string,
  orderAmount: string,
  referenceId: string,
  txStatus: string,
  paymentMode: string,
  txMsg: string,
  txTime: string,
  signature: string
): boolean {
  const data = `${orderId}${orderAmount}${referenceId}${txStatus}${paymentMode}${txMsg}${txTime}`;
  const computedSignature = crypto
    .createHmac("sha256", CASHFREE_SECRET_KEY || "")
    .update(data)
    .digest("base64");
  return computedSignature === signature;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      orderId,
      orderAmount,
      referenceId,
      txStatus,
      paymentMode,
      txMsg,
      txTime,
      signature,
    } = body;

    const isValid = verifySignature(
      orderId,
      orderAmount,
      referenceId,
      txStatus,
      paymentMode,
      txMsg,
      txTime,
      signature
    );

    if (!isValid) {
      console.error("Invalid payment signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const paymentStatus =
      txStatus === "SUCCESS" ? "completed" : txStatus === "FAILED" ? "failed" : "pending";

    const { error } = await supabase
      .from("leads")
      .update({
        payment_status: paymentStatus,
        payment_id: referenceId,
      })
      .eq("order_id", orderId);

    if (error) {
      console.error("Error updating lead:", error);
      return NextResponse.json(
        { error: "Failed to update payment status" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("order_id");

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID required" },
        { status: 400 }
      );
    }

    const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
    const CASHFREE_ENV = process.env.NEXT_PUBLIC_CASHFREE_ENV || "sandbox";
    const CASHFREE_API_URL =
      CASHFREE_ENV === "production"
        ? `https://api.cashfree.com/pg/orders/${orderId}`
        : `https://sandbox.cashfree.com/pg/orders/${orderId}`;

    const response = await fetch(CASHFREE_API_URL, {
      method: "GET",
      headers: {
        "x-api-version": "2023-08-01",
        "x-client-id": CASHFREE_APP_ID || "",
        "x-client-secret": CASHFREE_SECRET_KEY || "",
      },
    });

    const data = await response.json();

    if (data.order_status === "PAID") {
      await supabase
        .from("leads")
        .update({
          payment_status: "completed",
          payment_id: data.cf_order_id,
        })
        .eq("order_id", orderId);
    }

    return NextResponse.json({
      success: true,
      status: data.order_status,
      order: data,
    });
  } catch (error) {
    console.error("Error checking payment status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
