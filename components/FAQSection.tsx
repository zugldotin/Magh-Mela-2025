"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Magh Mela 2025?",
    answer:
      "Magh Mela 2025 is one of India's largest spiritual gatherings held annually at the Triveni Sangam in Prayagraj (Allahabad), Uttar Pradesh. It takes place during the Hindu month of Magh (January-February) and attracts millions of pilgrims who come to take a holy dip at the sacred confluence of Ganga, Yamuna, and the mythical Saraswati rivers.",
  },
  {
    question: "When is Magh Mela 2025?",
    answer:
      "Magh Mela 2025 will be held from January 13, 2025 to February 26, 2025. The most auspicious bathing dates (Shahi Snan) include Makar Sankranti (January 14), Mauni Amavasya (January 29), Basant Panchami (February 3), and Maha Shivratri (February 26).",
  },
  {
    question: "How to reach Prayagraj for Magh Mela?",
    answer:
      "Prayagraj is well-connected by air, rail, and road. By Air: Prayagraj Airport (Bamrauli) has regular flights from major cities. By Train: Prayagraj Junction is a major railway station with trains from all over India. By Road: National highways connect Prayagraj to Delhi (650 km), Lucknow (200 km), and Varanasi (120 km). We provide pickup services from airport and railway station.",
  },
  {
    question: "What accommodation options are available for Magh Mela?",
    answer:
      "We offer various accommodation options to suit all budgets: Budget Guest Houses, Mid-range Lodges, Tent Accommodations, Premium Camps, and Ashram/Dharamshala stays. All options are verified, safe, and located near the Sangam area with easy access to bathing ghats.",
  },
  {
    question: "Is Magh Mela safe for families and senior citizens?",
    answer:
      "Yes, absolutely! We specialize in making Magh Mela safe and comfortable for families, senior citizens, and women travelers. Our local guides provide 24/7 support, help navigate crowds, ensure safe bathing times, and offer wheelchair-accessible options for elderly pilgrims.",
  },
  {
    question: "What is the difference between Magh Mela and Kumbh Mela?",
    answer:
      "Magh Mela is an annual event held every year in Prayagraj during the month of Magh. Kumbh Mela is a larger event that occurs every 12 years at four different locations (Prayagraj, Haridwar, Ujjain, and Nashik). The Ardh Kumbh is held every 6 years, and the Maha Kumbh every 12 years in Prayagraj. Magh Mela offers a more peaceful and manageable spiritual experience.",
  },
  {
    question: "What is included in your Magh Mela packages?",
    answer:
      "Our packages include: Verified accommodation (tents/hotels/dharamshalas), Pure vegetarian meals (breakfast, lunch, dinner), Local transportation (cab, auto, e-rickshaw), Experienced local guides, 24/7 WhatsApp support, Airport/railway pickup, Sangam darshan assistance, and Emergency support. Packages start from ₹199 for basic planning to ₹499 for premium services.",
  },
  {
    question: "What should I bring to Magh Mela?",
    answer:
      "Essential items: Warm clothes (January-February is cold), Extra set of clothes for bathing, Towels, Personal toiletries, Medications, Valid ID proof, Cash (ATMs may be crowded), Mobile charger and power bank, Water bottle, Comfortable walking shoes, and Sunscreen/cap for daytime.",
  },
  {
    question: "Can foreigners attend Magh Mela?",
    answer:
      "Yes! Magh Mela welcomes both Indian and foreign tourists. We have experience assisting international pilgrims and can provide English-speaking guides, help with local customs, arrange vegetarian/vegan food options, and ensure a culturally enriching experience. Valid passport and visa are required for foreign nationals.",
  },
  {
    question: "How do I book my Magh Mela trip with PrayagrajVisit.in?",
    answer:
      "Booking is simple: 1) Choose your plan (Normal ₹199 or Premium ₹499), 2) Fill the booking form with travel details, 3) Pay the booking amount to confirm your slot, 4) Receive confirmation email, 5) Connect with your trip manager on WhatsApp, 6) Finalize accommodation, food, and travel details on call. Your spiritual journey begins!",
  },
  {
    question: "What are the best bathing dates (Shahi Snan) in Magh Mela 2025?",
    answer:
      "The most auspicious bathing dates are: Makar Sankranti (January 14, 2025), Mauni Amavasya (January 29, 2025), Basant Panchami (February 3, 2025), Maghi Purnima (February 12, 2025), and Maha Shivratri (February 26, 2025). However, bathing at Triveni Sangam is considered holy throughout the Magh month.",
  },
  {
    question: "Is food available at Magh Mela?",
    answer:
      "Yes, we arrange pure vegetarian meals as part of our packages. Options include traditional North Indian thalis, special Sangam Bhoj, breakfast items, and snacks. We can also accommodate special dietary requirements like Jain food, vegan options, or international cuisine on request. All food is prepared hygienically by trusted local vendors.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#FFF8E5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#761D14]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Everything you need to know about Magh Mela 2025 Prayagraj
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border-none px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#761D14] hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Schema markup for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
