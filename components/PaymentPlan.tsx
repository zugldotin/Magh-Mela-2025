import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Decorative ornament SVG component
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

export function PricingCards() {
  return (
    <section className="bg-[#FFF8E5] px-4 py-16 relative">
      <div
        className={cn(
          "absolute inset-0 z-10 opacity-5",
          "[background-size:30px_30px]",
          "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
        )}
      />

      <div className="max-md:max-w-md max-w-4xl mx-auto text-center relative z-20">
        {/* Header */}
        <h2 className="text-[#761D14] text-xl font-bold mb-4 font-roboto">
          Choose Your Magh Mela Plan
        </h2>

        <DecorativeOrnament className="w-72 h-4 mx-auto mb-6" fill="#761D14" />

        <p className="leading-normal mb-8 font-poppins text-[#787575]">
          A peaceful, spiritual and well-managed Magh Mela journey guided by
          trusted local experts.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-2 relative z-20">
          {/* Normal Plan */}
          <Card className="bg-white rounded-lg shadow-sm overflow-hidden border-none">
            {/* Image Header */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/prayagraj-sangam-ganges-river-boats-pilgrims-sunri-csKoE59XpvFxzAcGOQN4xSoJzSauUy.jpg"
                alt="Magh Mela Sangam"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3">
                <div className="inline-flex items-center gap-2 bg-[#761D14] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NORMAL PLAN
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#761D14]">
                    ₹299
                  </span>
                  <span className="text-[#787575]">/ person</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5" />
                  <span className="text-[#787575] text-sm">Slot booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5" />
                  <span className="text-[#787575] text-sm">
                    Basic stay support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5" />
                  <span className="text-[#787575] text-sm">
                    Food & cab planning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5" />
                  <span className="text-[#787575] text-sm">
                    WhatsApp trip manager
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5" />
                  <span className="text-[#787575] text-sm">
                    Pay remaining amount later
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <Button className="w-full bg-[#761D14] hover:bg-[#5a1510] text-white font-bold text-base py-6 rounded-xl">
                Choose Normal Plan →
              </Button>
            </div>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#761D14] relative">
            {/* Popular Badge */}
            <div className="absolute top-3 right-3 z-10 bg-[#761D14] text-white px-3 py-1 rounded-full text-xs font-bold">
              ⭐ RECOMMENDED
            </div>

            {/* Image Header */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/prayagraj-kumbh-mela-temples-golden-hour-sacred-gh-mK7190MbVwp49uz7ha0hWE3GmUBOHC.jpg"
                alt="Premium Magh Mela Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3">
                <div className="inline-flex items-center gap-2 bg-[#761D14] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  PREMIUM PLAN
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 bg-gradient-to-br from-white to-[#FFF8E5]/30">
              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#761D14]">
                    ₹699
                  </span>
                  <span className="text-[#787575] font-semibold">/ person</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5 font-bold" />
                  <span className="text-[#787575] text-sm font-medium">
                    Priority booking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5 font-bold" />
                  <span className="text-[#787575] text-sm font-medium">
                    Better stay options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5 font-bold" />
                  <span className="text-[#787575] text-sm font-medium">
                    Dedicated trip manager
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5 font-bold" />
                  <span className="text-[#787575] text-sm font-medium">
                    VIP Sangam Snan support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5 font-bold" />
                  <span className="text-[#787575] text-sm font-medium">
                    Faster confirmation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#761D14] shrink-0 mt-0.5 font-bold" />
                  <span className="text-[#787575] text-sm font-medium">
                    Foreign tourist friendly
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <Button className="w-full bg-[#761D14] hover:bg-[#5a1510] text-white font-bold text-base py-6 rounded-xl">
                Choose Premium Plan →
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
