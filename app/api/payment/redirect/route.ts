import { NextRequest, NextResponse } from "next/server";

const CASHFREE_ENV = process.env.NEXT_PUBLIC_CASHFREE_ENV || "sandbox";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("order_id");

  if (!orderId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
  const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;

  const CASHFREE_API_URL =
    CASHFREE_ENV === "production"
      ? `https://api.cashfree.com/pg/orders/${orderId}`
      : `https://sandbox.cashfree.com/pg/orders/${orderId}`;

  try {
    const response = await fetch(CASHFREE_API_URL, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "x-api-version": "2022-09-01",
        "x-client-id": CASHFREE_APP_ID || "",
        "x-client-secret": CASHFREE_SECRET_KEY || "",
      },
    });

    const data = await response.json();

    if (data.payment_session_id) {
      // Redirect to Cashfree payment page
      const paymentUrl =
        CASHFREE_ENV === "production"
          ? `https://payments.cashfree.com/order/#${data.payment_session_id}`
          : `https://sandbox.cashfree.com/pg/view/order/${orderId}`;
      
      return NextResponse.redirect(paymentUrl);
    }

    // If order exists, redirect to success page to check status
    return NextResponse.redirect(
      new URL(`/payment/success?order_id=${orderId}`, request.url)
    );
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
