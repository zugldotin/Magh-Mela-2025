import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
    const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;
    const CASHFREE_ENV = process.env.NEXT_PUBLIC_CASHFREE_ENV || "sandbox";

    const body = await request.json();
    const {
      leadId,
      orderId,
      amount,
      customerName,
      customerEmail,
      customerPhone,
    } = body;

    if (
      !orderId ||
      !amount ||
      !customerName ||
      !customerEmail ||
      !customerPhone
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!CASHFREE_APP_ID || !CASHFREE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Payment gateway not configured" },
        { status: 500 }
      );
    }

    // Debug: Log environment configuration (remove in production)
    console.log("🔧 Cashfree Environment:", CASHFREE_ENV);
    console.log("🔑 App ID exists:", !!CASHFREE_APP_ID);
    console.log("🔑 Secret Key exists:", !!CASHFREE_SECRET_KEY);
    console.log(
      "🔑 App ID (first 10 chars):",
      CASHFREE_APP_ID?.substring(0, 10)
    );

    // Determine API URL based on environment
    const CASHFREE_API_URL =
      CASHFREE_ENV === "production"
        ? "https://api.cashfree.com/pg/orders"
        : "https://sandbox.cashfree.com/pg/orders";

    console.log("🌐 Using API URL:", CASHFREE_API_URL);

    // Create order using Orders API
    const orderPayload = {
      order_id: orderId,
      order_amount: Number(amount),
      order_currency: "INR",
      customer_details: {
        customer_id: leadId || orderId,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone.toString(),
      },
      order_meta: {
        return_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/payment/success?order_id={order_id}`,
      },
    };

    const response = await fetch(CASHFREE_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-version": "2023-08-01",
        "x-client-id": CASHFREE_APP_ID,
        "x-client-secret": CASHFREE_SECRET_KEY,
      },
      body: JSON.stringify(orderPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Cashfree order creation failed");
      console.error("Status:", response.status);
      console.error("Response:", JSON.stringify(data, null, 2));
      return NextResponse.json(
        {
          error: data.message || "Failed to create order",
          details: data,
          environment: CASHFREE_ENV,
        },
        { status: response.status }
      );
    }

    console.log("✅ Cashfree order created successfully");
    return NextResponse.json({
      success: true,
      payment_session_id: data.payment_session_id,
      order_id: data.order_id,
      cf_order_id: data.cf_order_id,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
