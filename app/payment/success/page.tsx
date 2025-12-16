"use client";

import { useEffect, useState, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2, Clock } from "lucide-react";
import Link from "next/link";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [status, setStatus] = useState<"loading" | "success" | "pending" | "failed">("loading");

  const checkPaymentStatus = useCallback(async () => {
    if (!orderId) return;
    try {
      const res = await fetch(`/api/payment/verify?order_id=${orderId}`);
      const data = await res.json();

      if (data.status === "PAID") {
        setStatus("success");
      } else if (data.status === "PENDING" || data.status === "ACTIVE") {
        setStatus("pending");
      } else {
        setStatus("failed");
      }
    } catch (error) {
      console.error("Error checking payment:", error);
      setStatus("failed");
    }
  }, [orderId]);

  useEffect(() => {
    if (orderId) {
      checkPaymentStatus();
    }
  }, [orderId, checkPaymentStatus]);

  return (
    <div className="min-h-screen bg-[#FFF8E5] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 text-center">
        {status === "loading" && (
          <>
            <Loader2 className="h-16 w-16 animate-spin text-[#761D14] mx-auto mb-4" />
            <h1 className="text-xl font-bold text-gray-800">
              Verifying Payment...
            </h1>
            <p className="text-gray-500 mt-2">
              Please wait while we confirm your payment
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-500 mb-6">
              Thank you for booking your slot for Magh Mela 2026. You will
              receive a confirmation on WhatsApp shortly.
            </p>
            {orderId && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-mono font-medium">{orderId}</p>
              </div>
            )}
            <Link href="/">
              <Button className="w-full !bg-[#761D14] !text-white">
                Back to Home
              </Button>
            </Link>
          </>
        )}

        {status === "pending" && (
          <>
            <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Processing
            </h1>
            <p className="text-gray-500 mb-6">
              Your payment is being processed. This may take a few minutes.
              You will receive a confirmation once completed.
            </p>
            {orderId && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-mono font-medium">{orderId}</p>
              </div>
            )}
            <div className="space-y-3">
              <Button
                className="w-full !bg-[#761D14] !text-white"
                onClick={checkPaymentStatus}
              >
                Check Status Again
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </>
        )}

        {status === "failed" && (
          <>
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Failed
            </h1>
            <p className="text-gray-500 mb-6">
              Unfortunately, your payment could not be processed. Please try
              again or contact support if the issue persists.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full !bg-[#761D14] !text-white">
                  Try Again
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFF8E5] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#761D14]" />
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
