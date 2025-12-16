-- Drop existing tables if they exist (for clean migration)
DROP TABLE IF EXISTS leads CASCADE;
DROP TABLE IF EXISTS plans CASCADE;
DROP TABLE IF EXISTS admins CASCADE;

-- Plans table
CREATE TABLE plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  place_city VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  whatsapp VARCHAR(20) NOT NULL,
  emergency_contact VARCHAR(20) NOT NULL,
  number_of_people INTEGER NOT NULL DEFAULT 1,
  journey_start_date DATE NOT NULL,
  arrival_date DATE NOT NULL,
  number_of_days INTEGER NOT NULL DEFAULT 1,
  plan_id UUID REFERENCES plans(id),
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  payment_id VARCHAR(255),
  order_id VARCHAR(255),
  amount DECIMAL(10, 2) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin table
CREATE TABLE admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default plans
INSERT INTO plans (name, price, description, features) VALUES
  ('Basic', 199, 'Basic slot booking for Magh Mela 2026', '["Slot booking confirmation", "WhatsApp support", "Trip planning guide", "Local contact details"]'),
  ('Premium', 499, 'Premium package with extra services', '["Everything in Basic", "Priority WhatsApp support", "Personalized trip planning", "Stay recommendations", "Transport assistance", "Emergency support"]');

-- Insert default admin
INSERT INTO admins (email, password) VALUES
  ('admin@maghmela.com', 'Mela@2026');

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_whatsapp ON leads(whatsapp);
CREATE INDEX IF NOT EXISTS idx_leads_payment_status ON leads(payment_status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Policies for plans (public read)
CREATE POLICY "Allow public read access to active plans" ON plans
  FOR SELECT USING (is_active = true);

-- Policies for leads (insert only for anon, full access needs service role)
CREATE POLICY "Allow public insert to leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Allow public to update their own leads (for payment status)
CREATE POLICY "Allow update leads" ON leads
  FOR UPDATE USING (true);

-- Allow public to select leads (needed for order verification)
CREATE POLICY "Allow select leads" ON leads
  FOR SELECT USING (true);

-- Allow public to select from admins (for login)
CREATE POLICY "Allow public read access to admins" ON admins
  FOR SELECT USING (true);
