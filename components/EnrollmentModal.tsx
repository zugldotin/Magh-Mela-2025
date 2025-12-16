"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

interface EnrollmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DecorativeOrnament = ({ className = "", fill = "white" }) => (
  <svg
    className={className}
    viewBox="0 0 300 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M152.309 1.51698C153.192 1.72741 153.833 2.88212 152.097 4.77915C152.097 4.77915 152.432 4.57143 152.837 4.22433C152.49 4.62861 152.282 4.96377 152.282 4.96377C154.179 3.22763 155.334 3.86927 155.544 4.75191C155.755 5.63455 154.506 7.06197 154.506 7.06197C156.819 6.51018 158.033 4.29505 156.099 3.10593C155.15 2.52228 154.213 2.95938 153.505 3.55562C154.101 2.84756 154.539 1.91108 153.955 0.96185C152.766 -0.972286 150.551 0.241685 149.999 2.55526C149.999 2.55526 151.426 1.3064 152.309 1.51698Z"
      fill={fill}
    />
    <path
      d="M147.689 12.6072C146.807 12.3968 146.165 11.2421 147.901 9.34508C147.901 9.34508 147.566 9.5528 147.162 9.8999C147.509 9.49562 147.716 9.16046 147.716 9.16046C145.819 10.8966 144.665 10.2551 144.454 9.37232C144.244 8.48968 145.493 7.06226 145.493 7.06226C143.179 7.61405 141.965 9.82917 143.899 11.0183C144.849 11.6019 145.785 11.1648 146.493 10.5688C145.897 11.2768 145.46 12.2132 146.043 13.1624C147.233 15.0965 149.448 13.8825 149.999 11.569C149.999 11.569 148.572 12.8178 147.689 12.6072Z"
      fill={fill}
    />
    <path
      d="M144.454 4.75211C144.665 3.86947 145.819 3.22784 147.716 4.96398C147.716 4.96398 147.509 4.62882 147.162 4.22454C147.566 4.57148 147.901 4.77936 147.901 4.77936C146.165 2.88218 146.807 1.72762 147.689 1.51719C148.572 1.30661 149.999 2.55562 149.999 2.55562C149.448 0.242051 147.232 -0.97192 146.043 0.962216C145.46 1.91144 145.897 2.84777 146.493 3.55599C145.785 2.95991 144.849 2.52265 143.899 3.1063C141.965 4.29558 143.179 6.51055 145.493 7.06234C145.493 7.06234 144.244 5.63476 144.454 4.75211Z"
      fill={fill}
    />
    <path
      d="M154.506 7.06213C154.506 7.06213 155.755 8.48956 155.544 9.3722C155.334 10.2548 154.179 10.8965 152.282 9.16034C152.282 9.16034 152.49 9.4955 152.837 9.89978C152.432 9.55284 152.097 9.34496 152.097 9.34496C153.833 11.2421 153.192 12.3967 152.309 12.6071C151.426 12.8177 149.999 11.5687 149.999 11.5687C150.551 13.8823 152.766 15.0962 153.955 13.1621C154.539 12.2129 154.102 11.2766 153.506 10.5685C154.214 11.1646 155.15 11.6018 156.099 11.018C158.033 9.82905 156.819 7.61392 154.506 7.06213Z"
      fill={fill}
    />
    <path
      d="M139.09 8.61478C139.947 8.61478 140.642 7.91965 140.642 7.06215C140.642 6.20466 139.947 5.50952 139.09 5.50952C138.232 5.50952 137.537 6.20466 137.537 7.06215C137.537 7.91965 138.232 8.61478 139.09 8.61478Z"
      fill={fill}
    />
    <path
      d="M150 8.61478C150.857 8.61478 151.553 7.91965 151.553 7.06215C151.553 6.20466 150.857 5.50952 150 5.50952C149.142 5.50952 148.447 6.20466 148.447 7.06215C148.447 7.91965 149.142 8.61478 150 8.61478Z"
      fill={fill}
    />
    <path
      d="M134.071 6.10635L0 7.06211L134.071 8.01786C134.074 8.01786 134.082 8.01786 134.084 8.01786C134.612 8.01404 135.037 7.58315 135.033 7.05526C135.029 6.52736 134.599 6.10253 134.071 6.10635Z"
      fill={fill}
    />
    <path
      d="M160.91 8.61478C161.768 8.61478 162.463 7.91965 162.463 7.06215C162.463 6.20466 161.768 5.50952 160.91 5.50952C160.053 5.50952 159.357 6.20466 159.357 7.06215C159.357 7.91965 160.053 8.61478 160.91 8.61478Z"
      fill={fill}
    />
    <path
      d="M165.916 6.10632C165.388 6.11015 164.963 6.54103 164.967 7.06893C164.971 7.59683 165.402 8.02166 165.929 8.01784L300 7.06208L165.929 6.10632C165.927 6.10632 165.919 6.10632 165.916 6.10632Z"
      fill={fill}
    />
  </svg>
);

export default function EnrollmentModal({
  open,
  onOpenChange,
}: EnrollmentModalProps) {
  const [step, setStep] = useState<"plan" | "form" | "payment">("plan");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) {
      fetchPlans();
    }
  }, [open]);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/plans");
      const data = await res.json();
      if (data.plans) {
        setPlans(data.plans);
      }
    } catch (error) {
      console.error("Failed to fetch plans:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setStep("form");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !selectedPlan) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          plan_id: selectedPlan.id,
          amount: selectedPlan.price,
        }),
      });

      const data = await res.json();

      if (data.success && data.lead) {
        initiatePayment(data.lead.id, data.lead.order_id);
      } else {
        alert(data.error || "Failed to create booking. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const initiatePayment = async (leadId: string, orderId: string) => {
    if (!selectedPlan) return;

    setStep("payment");

    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          orderId,
          amount: selectedPlan.price,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
        }),
      });

      const data = await res.json();

      if (data.success && data.payment_session_id) {
        // Load Cashfree Drop SDK and open modal
        const existingScript = document.querySelector('script[src*="cashfree"]');
        if (existingScript) existingScript.remove();

        const script = document.createElement("script");
        script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
        script.async = true;
        script.onload = async () => {
          try {
            const cashfree = await (window as unknown as { Cashfree: (config: { mode: string }) => { checkout: (options: { paymentSessionId: string; redirectTarget: string }) => Promise<{ error?: { message: string }; redirect?: boolean; paymentDetails?: unknown }> } }).Cashfree({
              mode: "sandbox",
            });
            
            const result = await cashfree.checkout({
              paymentSessionId: data.payment_session_id,
              redirectTarget: "_modal",
            });

            if (result.error) {
              console.error("Payment error:", result.error);
              alert(result.error.message || "Payment failed. Please try again.");
              setStep("form");
            }
            if (result.redirect) {
              console.log("Payment redirect");
            }
            if (result.paymentDetails) {
              console.log("Payment completed:", result.paymentDetails);
              window.location.href = `/payment/success?order_id=${orderId}`;
            }
          } catch (err) {
            console.error("Cashfree checkout error:", err);
            alert("Payment failed. Please try again.");
            setStep("form");
          }
        };
        script.onerror = () => {
          alert("Failed to load payment gateway. Please try again.");
          setStep("form");
        };
        document.head.appendChild(script);
      } else {
        alert(data.error || "Failed to initiate payment. Please try again.");
        setStep("form");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Failed to initiate payment. Please try again.");
      setStep("form");
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep("plan");
      setSelectedPlan(null);
      setFormData({ name: "", email: "", phone: "" });
      setErrors({});
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent onClose={handleClose} className="p-0 overflow-hidden">
        <div className="bg-[#761D14] p-4 text-center">
          <DialogHeader>
            <DialogTitle className="text-white text-lg">
              {step === "plan" && "Choose Your Plan"}
              {step === "form" && "Complete Your Booking"}
              {step === "payment" && "Processing Payment"}
            </DialogTitle>
            <DialogDescription className="text-white/80">
              {step === "plan" && "Select a package that suits your needs"}
              {step === "form" && "Fill in your details to proceed"}
              {step === "payment" && "Please wait while we process your payment"}
            </DialogDescription>
          </DialogHeader>
          <DecorativeOrnament
            className="w-48 h-3 mx-auto mt-3"
            fill="white"
          />
        </div>

        <div className="p-5">
          {step === "plan" && (
            <div className="space-y-3">
              {loading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-[#761D14]" />
                </div>
              ) : (
                plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan)}
                    className={cn(
                      "border-2 rounded-xl p-4 cursor-pointer transition-all hover:border-[#761D14] hover:shadow-md",
                      selectedPlan?.id === plan.id
                        ? "border-[#761D14] bg-[#FFF8E5]"
                        : "border-gray-200"
                    )}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-500">{plan.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#761D14]">
                          ₹{plan.price}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1 mt-3">
                      {plan.features?.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-4 !bg-[#761D14] !text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlanSelect(plan);
                      }}
                    >
                      Select {plan.name} Plan
                    </Button>
                  </div>
                ))
              )}
            </div>
          )}

          {step === "form" && selectedPlan && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="bg-[#FFF8E5] rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">
                    {selectedPlan.name} Plan
                  </span>
                  <span className="font-bold text-[#761D14]">
                    ₹{selectedPlan.price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep("plan")}
                  className="text-sm text-[#761D14] underline mt-1"
                >
                  Change plan
                </button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full !bg-[#761D14] !text-white py-6"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  `Pay ₹${selectedPlan.price} & Book Slot`
                )}
              </Button>
            </form>
          )}

          {step === "payment" && (
            <div className="text-center py-8">
              <Loader2 className="h-12 w-12 animate-spin text-[#761D14] mx-auto mb-4" />
              <p className="text-gray-600">
                Redirecting to payment gateway...
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please do not close this window
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
