import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM;

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export type PaymentStatus = "pending" | "completed" | "failed";

interface SendWhatsAppParams {
  to: string;
  customerName: string;
  orderId: string;
  amount: number;
  status: PaymentStatus;
  planName?: string;
}

export async function sendPaymentWhatsApp({
  to,
  customerName,
  orderId,
  amount,
  status,
  planName = "Magh Mela 2026",
}: SendWhatsAppParams): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  if (!client) {
    console.error("Twilio client not configured");
    return { success: false, error: "WhatsApp service not configured" };
  }

  const formattedPhone = to.startsWith("+") ? to : `+91${to}`;
  const whatsappTo = `whatsapp:${formattedPhone}`;

  let messageBody = "";

  switch (status) {
    case "completed":
      messageBody = `🎉 *Payment Successful!*

Hi ${customerName},

Your payment for *${planName}* has been confirmed!

📋 *Order Details:*
• Order ID: ${orderId}
• Amount: ₹${amount}
• Status: ✅ Confirmed

Our team will contact you shortly with further details about your Magh Mela 2026 experience.

Thank you for choosing us! 🙏

_Magh Mela 2026 Team_`;
      break;

    case "pending":
      messageBody = `⏳ *Payment Processing*

Hi ${customerName},

Your payment for *${planName}* is being processed.

📋 *Order Details:*
• Order ID: ${orderId}
• Amount: ₹${amount}
• Status: 🔄 Processing

We'll notify you once the payment is confirmed.

_Magh Mela 2026 Team_`;
      break;

    case "failed":
      messageBody = `❌ *Payment Failed*

Hi ${customerName},

Unfortunately, your payment for *${planName}* could not be processed.

📋 *Order Details:*
• Order ID: ${orderId}
• Amount: ₹${amount}
• Status: ❌ Failed

Please try again or contact our support team for assistance.

_Magh Mela 2026 Team_`;
      break;
  }

  try {
    const message = await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      body: messageBody,
    });

    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
    return { success: false, error: String(error) };
  }
}

export async function sendBookingConfirmation({
  to,
  customerName,
  orderId,
  date,
  time,
}: {
  to: string;
  customerName: string;
  orderId: string;
  date: string;
  time: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  if (!client) {
    console.error("Twilio client not configured");
    return { success: false, error: "WhatsApp service not configured" };
  }

  const contentSid = process.env.TWILIO_CONTENT_SID;
  if (!contentSid) {
    return { success: false, error: "Content template not configured" };
  }

  const formattedPhone = to.startsWith("+") ? to : `+91${to}`;
  const whatsappTo = `whatsapp:${formattedPhone}`;

  try {
    const message = await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      contentSid: contentSid,
      contentVariables: JSON.stringify({
        "1": date,
        "2": time,
      }),
    });

    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error("Failed to send WhatsApp template message:", error);
    return { success: false, error: String(error) };
  }
}
