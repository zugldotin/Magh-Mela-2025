import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function generateOrderId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `MM${timestamp}${randomStr}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      place_city,
      phone,
      whatsapp,
      number_of_people,
      journey_start_date,
      arrival_date,
      number_of_days,
      plan_id,
      amount,
    } = body;

    if (
      !name ||
      !place_city ||
      !phone ||
      !whatsapp ||
      !number_of_people ||
      !journey_start_date ||
      !arrival_date ||
      !number_of_days ||
      !plan_id ||
      !amount
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const orderId = generateOrderId();

    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        name,
        place_city,
        phone,
        whatsapp,
        number_of_people,
        journey_start_date,
        arrival_date,
        number_of_days,
        plan_id,
        amount,
        order_id: orderId,
        payment_status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating lead:", error);
      return NextResponse.json(
        { error: "Failed to create booking" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error in leads API:", error);
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

    if (orderId) {
      const { data: lead, error } = await supabase
        .from("leads")
        .select("*, plans(*)")
        .eq("order_id", orderId)
        .single();

      if (error || !lead) {
        return NextResponse.json({ error: "Lead not found" }, { status: 404 });
      }

      return NextResponse.json({ lead });
    }

    return NextResponse.json({ error: "Order ID required" }, { status: 400 });
  } catch (error) {
    console.error("Error fetching lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
