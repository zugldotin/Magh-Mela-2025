import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PricingCards() {
  return (
    <div className="container mx-auto px-4 py-16 ">
      {/* Header */}
      <div className="text-center mb-12">
 
          <h1 className="text-white text-xl font-bold leading-tight mb-4 font-roboto pb-2 max-w-sm text-center">
              Why this event is unlike anything you&apos;ve seen before ?
            </h1>

          
            <p className="text-white/80 text-base  leading-normal mb-8 font-poppins mx-3">
              A peaceful, spiritual and well-managed Magh Mela journey guided by
              trusted local experts.
            </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Normal Plan */}
        <Card className="overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/50 hover:scale-105 hover:-translate-y-2 group animate-in fade-in slide-in-from-left-8  delay-300">
          {/* Image Header */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/prayagraj-sangam-ganges-river-boats-pilgrims-sunri-csKoE59XpvFxzAcGOQN4xSoJzSauUy.jpg"
              alt="Magh Mela Sangam"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-in zoom-in duration-500 delay-500">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                NORMAL PLAN
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 bg-gradient-to-br from-white to-orange-50/30">
            {/* Price */}
            <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-orange-900 bg-clip-text">₹199</span>
                <span className="text-orange-600">/ person</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="text-gray-700">Slot booking</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="text-gray-700">Basic stay support</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="text-gray-700">Food & cab planning</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="text-gray-700">WhatsApp trip manager</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="text-gray-700">Pay remaining amount later</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl hover:shadow-orange-300/50 transition-all duration-300 relative overflow-hidden group/button">
              <span className="relative z-10">Choose Normal Plan →</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>
        </Card>

        {/* Premium Plan */}
        <Card className="overflow-hidden border-2 border-amber-400 hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-300/60 hover:scale-105 hover:-translate-y-2 relative group animate-in fade-in slide-in-from-right-8 duration-700 delay-300 ring-2 ring-amber-200/50">
          {/* Popular Badge */}
          <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-bounce">
            ⭐ RECOMMENDED
          </div>

          {/* Image Header */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/prayagraj-kumbh-mela-temples-golden-hour-sacred-gh-mK7190MbVwp49uz7ha0hWE3GmUBOHC.jpg"
              alt="Premium Magh Mela Experience"
              fill
              className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-in zoom-in duration-500 delay-500">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                PREMIUM PLAN
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/50">
            {/* Price */}
            <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent">
                  ₹499
                </span>
                <span className="text-amber-700 font-semibold">/ person</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 font-bold group-hover/item:scale-125 group-hover/item:text-amber-700 transition-all duration-300" />
                <span className="text-gray-800 font-medium">Priority booking</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 font-bold group-hover/item:scale-125 group-hover/item:text-amber-700 transition-all duration-300" />
                <span className="text-gray-800 font-medium">Better stay options</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 font-bold group-hover/item:scale-125 group-hover/item:text-amber-700 transition-all duration-300" />
                <span className="text-gray-800 font-medium">Dedicated trip manager</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 font-bold group-hover/item:scale-125 group-hover/item:text-amber-700 transition-all duration-300" />
                <span className="text-gray-800 font-medium">VIP Sangam Snan support</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 font-bold group-hover/item:scale-125 group-hover/item:text-amber-700 transition-all duration-300" />
                <span className="text-gray-800 font-medium">Faster confirmation</span>
              </li>
              <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 font-bold group-hover/item:scale-125 group-hover/item:text-amber-700 transition-all duration-300" />
                <span className="text-gray-800 font-medium">Foreign tourist friendly</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 relative overflow-hidden group/button">
              <span className="relative z-10">Choose Premium Plan →</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Trust Banner */}
      <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
        <p className="text-sm text-orange-700">
          🕉️ Join thousands of pilgrims experiencing the divine Magh Mela at Prayagraj Sangam
        </p>
      </div>
    </div>
  )
}
