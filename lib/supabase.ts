import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Plan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  created_at: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan_id: string;
  payment_status: "pending" | "completed" | "failed";
  payment_id?: string;
  order_id?: string;
  amount: number;
  created_at: string;
};

export type Admin = {
  id: string;
  email: string;
  password_hash: string;
  created_at: string;
};
