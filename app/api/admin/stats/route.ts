import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "magh-mela-secret-key-2025";

function verifyToken(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const admin = verifyToken(request);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: allLeads } = await supabase
      .from("leads")
      .select("payment_status, amount");

    const stats = {
      totalLeads: allLeads?.length || 0,
      completedPayments: allLeads?.filter((l) => l.payment_status === "completed").length || 0,
      pendingPayments: allLeads?.filter((l) => l.payment_status === "pending").length || 0,
      failedPayments: allLeads?.filter((l) => l.payment_status === "failed").length || 0,
      totalRevenue: allLeads
        ?.filter((l) => l.payment_status === "completed")
        .reduce((sum, l) => sum + Number(l.amount), 0) || 0,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
