"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Home,
  Tent,
  MapPin,
  Star,
  TentTree,
  Building2,
  UtensilsCrossed,
  Car,
  ShieldCheck,
  Phone,
  Users,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import EnrollmentModal from "@/components/EnrollmentModal";
import { PricingCards } from "@/components/PaymentPlan";

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

const CalendarIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2.078V6.078"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2.078V6.078"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 4.078H5C3.89543 4.078 3 4.97343 3 6.078V20.078C3 21.1826 3.89543 22.078 5 22.078H19C20.1046 22.078 21 21.1826 21 20.078V6.078C21 4.97343 20.1046 4.078 19 4.078Z"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 10.078H21"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14.078H8.01"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14.078H12.01"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14.078H16.01"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 18.078H8.01"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.078H12.01"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 18.078H16.01"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LanguageIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 8.078L11 14.078"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 14.078L10 8.078L12 5.078"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 5.078H14"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 2.078H8"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 22.078L17 12.078L12 22.078"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 18.078H20"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.078V12.078L16 14.078"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22.078C17.5228 22.078 22 17.6009 22 12.078C22 6.55516 17.5228 2.078 12 2.078C6.47715 2.078 2 6.55516 2 12.078C2 17.6009 6.47715 22.078 12 22.078Z"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 13.078L21.223 16.56C21.2983 16.6101 21.3858 16.6389 21.4761 16.6432C21.5664 16.6475 21.6563 16.6273 21.736 16.5846C21.8157 16.5419 21.8824 16.4784 21.9289 16.4008C21.9754 16.3232 22 16.2345 22 16.144V7.94802C22 7.86005 21.9768 7.77362 21.9328 7.69747C21.8887 7.62132 21.8253 7.55815 21.7491 7.51432C21.6728 7.4705 21.5863 7.44758 21.4983 7.44788C21.4103 7.44818 21.324 7.47168 21.248 7.51602L16 10.578"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 6.078H4C2.89543 6.078 2 6.97343 2 8.078V16.078C2 17.1826 2.89543 18.078 4 18.078H14C15.1046 18.078 16 17.1826 16 16.078V8.078C16 6.97343 15.1046 6.078 14 6.078Z"
      stroke="#761D14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const benefits = [
  {
    icon: "/atmanirbhar/student.gif",
    title:
      "<b>Local Prayagraj Team</b><br/>On-ground support during your visit",
  },
  {
    icon: "/atmanirbhar/cert.gif",
    title: "<b>Trusted Stay Options</b><br/>Hotels, tents & dharamshalas",
  },
  {
    icon: "/atmanirbhar/whatappIcon.jpeg",
    title: "<b>WhatsApp Trip Support</b><br/>Instant assistance anytime",
  },
  {
    icon: "/atmanirbhar/hand.gif",
    title: "<b>Safe & Family Friendly</b><br/>Senior & women friendly services",
  },
];

const stayOptions = [
  {
    title: "Budget Guest House",
    icon: "lucide:Home",
    alt: "Budget guest house",
  },
  { title: "Mid-range Lodge", icon: "lucide:MapPin", alt: "Mid-range lodge" },
  {
    title: "Tent Accommodation",
    icon: "lucide:Tent",
    alt: "Tent accommodation",
  },
  { title: "Premium Camps", icon: "lucide:TentTree", alt: "Premium campsites" },
  {
    title: "Ashram / Dharamshala Stay",
    icon: "lucide:Building2",
    alt: "Ashram stay lotus",
  },
];

const journeyDays = [
  {
    day: 1,
    title: "<b>Holy Sangam Snan</b> with proper guidance & safe timing",
  },
  {
    day: 2,
    title: "<b>Akhara & Temple Darshan</b> covering major spiritual spots",
  },
  {
    day: 3,
    title: "<b>Peaceful Morning Ganga Views</b> & spiritual atmosphere",
  },
  {
    day: 4,
    title: "<b>Clean Stay & Pure Veg Food</b> arranged by locals",
  },
  {
    day: 5,
    title: "<b>Easy Travel Inside Mela</b> via cab & e-rickshaw",
  },
  {
    day: 6,
    title: "<b>Guided Spiritual Journey</b> with Prayagraj experts",
  },
];

const steps = [
  {
    day: 1,
    title: "<b>Choose Your Plan</b> — Normal or Premium as per your need",
  },
  {
    day: 2,
    title: "<b>Fill a Simple Booking Form</b> with basic travel details",
  },
  {
    day: 3,
    title: "<b>Pay ₹199 / ₹499</b> to confirm your Magh Mela slot",
  },
  {
    day: 4,
    title: "<b>Get Confirmation Email</b> with booking details",
  },
  {
    day: 5,
    title: "<b>WhatsApp Chat Starts</b> with your trip manager",
  },
  {
    day: 6,
    title: "<b>Final Planning on Call</b> — stay, food & travel finalized",
  },
];

const stats = [
  {
    icon: "/atmanirbhar/student_cert.gif",
    title: "<b>10,000+</b><br/>Pilgrims Assisted",
  },
  {
    icon: "/atmanirbhar/books.gif",
    title: "<b>50+</b><br/>Verified Stay Options",
  },
  {
    icon: "/atmanirbhar/teacher.gif",
    title: "<b>24×7</b><br/>Local Support",
  },
  {
    icon: "/atmanirbhar/india.gif",
    title: "<b>Indian & Foreign</b><br/>Tourists Welcome",
  },
];

const gurus = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80",
    name: "Pandit Ramesh Mishra",
    content1: "Local Sangam Guide",
    content2: "Trusted Prayagraj guide with 20+ years local experience",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1496483353456-90997957cf99?auto=format&fit=crop&w=1200&q=80",
    name: "Acharya Satyendra",
    content1: "Akhara Liaison",
    content2: "Coordinates with akharas and spiritual groups",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    name: "Swami Anant Dev",
    content1: "Sangam Safety Coordinator",
    content2: "Emergency & crowd management specialist",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    name: "Pandit Kashi Nath",
    content1: "Pilgrim Assistance Lead",
    content2: "Helps with stay, darshan and local logistics",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80",
    name: "Pooja Sehgal",
    content1: "Volunteer & Welfare Lead",
    content2: "Organises volunteer support for families and seniors",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1526505262320-1c2a6cfb0b23?auto=format&fit=crop&w=1200&q=80",
    name: "Smt. Meera Verma",
    content1: "Community Relations",
    content2: "Local community coordinator for visitor services",
  },
];

export default function Page() {
  const [isEnrollNowFormOpen, setIsEnrollNowFormOpen] = useState(false);
  const uiPrice = 10;
  const ctaText = "Book Your Magh Mela Slot";
  const activeDate = "Jan – Feb 2026";
  const activeTimeSlot = "Flexible Arrival Time";

  return (
    <div className="min-h-screen bg-[#FFF8E5]  mx-auto relative">
      <section className="bg-[url('/maghmela-nobg.png')] sm:bg-[url('/bkg.jpg')] bg-cover bg-center bg-no-repeat pb-16 px-4 sm:px-6 lg:px-10 min-h-[640px] flex flex-col items-center relative">
        <div className="absolute inset-0 bg-[#00000040] sm:bg-[#00000085]  min-h-dvh min-w-full" />
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />

        <div className="bg-gradient-to-t from-[#FFF8E5]/80 via-[#FFF8E5]/40 to-transparent absolute bottom-0 left-0 right-0 h-14" />

        <div className="max-md:max-w-md md:max-w-full  mx-auto z-30 relative">
          <div className="text-center mt-20 sm:mt-36 flex flex-col relative z-10 items-center justify-center overflow-visible w-full h-full sm:gap-3">
            <motion.img
              src="/atmanirbhar/header.png"
              alt="Project Aatmanirbhar Jyotish"
              loading="lazy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-72 sm:w-80 md:w-96 h-auto mx-auto z-10 max-w-full max-md:mt-32"
            />
            <div className="text-center mb-6 z-10 italic ">
              <div className="text-[#fff] font-poppins text-xs md:text-sm max-w-[280px] md:max-w-[320px] mx-auto">
                Experience the Divinity and
                <br /> of Triveni Sangam at Prayagraj
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative hidden  flex-col items-center justify-center  overflow-x-clip ">
        <div
          className={cn(
            "absolute inset-0 z-[25] -top-20 opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />

        <section className="h-full flex flex-col justify-center items-center px-2 py-16 pb-8 relative overflow-hidden  bg-[#761D14] w-full ">
          <div className="max-w-md md:max-w-4xl lg:max-w-4xl mx-auto text-center   relative   z-[30]  pt-[150px] flex flex-col items-center justify-center">
            <h1 className="text-white text-xl font-bold leading-tight mb-4 font-roboto pb-2 max-w-sm text-center">
              Why this event is unlike anything you&apos;ve seen before ?
            </h1>

            <DecorativeOrnament
              className="w-72 h-4 mx-auto mb-6 "
              fill="white"
            />

            <p className="text-white/80 text-base  leading-normal mb-8 font-poppins mx-3">
              A peaceful, spiritual and well-managed Magh Mela journey guided by
              trusted local experts.
            </p>

            <div className=" rounded-lg mb-6 w-auto h-auto  flex items-center justify-center aspect-video relative z-30">
              <iframe
                width="360"
                height="215"
                src="https://www.youtube.com/embed/BOdx1Xa5T_Y?si=J47JwsLx0I0rrZOn?autoplay=1&loop=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="z-[29] rounded-md"
              ></iframe>
              <div className="absolute bottom-0 h-[46px]  left-0 right-0 w-full z-[30] " />
              <div className="absolute top-0 h-[52px] left-0 right-0 w-full z-[30] " />
            </div>
            <div className="w-full px-3">
              <Button
                className="inline-flex items-center justify-center w-full !bg-white font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl !text-black"
                onClick={() => setIsEnrollNowFormOpen(true)}
              >
                {ctaText ?? "Claim Your FREE Seat Now"}
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-cream-gradient px-4 bg-[#FFF8E5] relative">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />
        <div className="max-md:max-w-md max-w-4xl  mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-[#761D14]">
            Why PrayagrajVisit.in?{" "}
          </h2>

          <DecorativeOrnament
            className="w-72 h-4 mx-auto mb-6 relative z-[3]"
            fill="#761D14"
          />

          <p className="leading-normal mb-5 font-poppins relative z-[4] text-[#787575]">
            Trusted local Prayagraj team helping pilgrims
            <br />
            experience Magh Mela safely and comfortably.
          </p>

          <div className="grid grid-cols-2  gap-2 mb-2 relative z-[5] sm:flex">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="bg-white rounded-lg p-[14px] shadow-sm flex flex-col items-center  md:w-[220px]"
              >
                <img
                  src={benefit.icon}
                  alt=""
                  aria-hidden="true"
                  className="!w-[60px] !aspect-square mb-3 sm:w-[65px]! "
                />
                <p
                  className="text-slate-800 text-[12px] font-semibold leading-tight font-poppins"
                  dangerouslySetInnerHTML={{ __html: benefit.title }}
                />
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4 mb-6 z-[6] relative sm:justify-center">
            <img
              src="/atmanirbhar/bird.gif "
              alt="Celebratory bird animation"
              className="!w-[60px] !aspect-square flex-shrink-0 sm:W-[70px]!"
            />
            <p className="text-slate-800 text-sm font-semibold font-poppins text-[12px]">
              <b>1M+</b>took the first step.
              <br /> Now it ‘s your turn to become a Part of India’s Largest
              Growing <b>Astro-Community</b>{" "}
            </p>
          </div>

          <Button
            className="inline-flex items-center justify-center w-full !bg-[#761d14] font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl !text-white z-[6] relative mb-5"
            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>

      <section className="bg-astro-primary  p-8 pb-6 max-sm:px-3 relative overflow-hidden bg-[#761D14]">
        <div
          className={cn(
            "absolute inset-0 z-[25] opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />
        <div className="max-md:max-w-md  mx-auto text-center relative z-30 md:w-4xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-white">
            What You Will Experience
          </h2>

          <DecorativeOrnament className="w-72 h-4 mx-auto mb-8" fill="white" />

          <div className="relative md:max-w-4xl md:mx-auto">
            <div className="space-y-4">
              {journeyDays.map((day, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-white rounded-lg p-[9px] px-[5px] flex-1 flex items-center gap-1 shadow-sm">
                    <img
                      src="/atmanirbhar/lotus.gif"
                      alt="Lotus motif"
                      aria-hidden="true"
                      className="w-[50px]  flex-shrink-0 sm:w-[55px]! aspect-square!"
                    />

                    <div className="flex-1">
                      <p
                        className="text-slate-700 text-sm leading-tight font-poppins sm:text-base text-start "
                        dangerouslySetInnerHTML={{ __html: day.title }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 z-[30]">
            <DecorativeOrnament
              className="w-72 h-4 mx-auto mb-4 "
              fill="white"
            />

            <Button
              className="inline-flex items-center justify-center w-full !bg-white !text-black font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl z-[26]"
              onClick={() => setIsEnrollNowFormOpen(true)}
            >
              {ctaText ?? "Claim Your FREE Seat Now"}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E5] p-6 sm:p-8 max-sm:px-4 relative overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-[#761D14] text-center">
            Stay Options (As Per Your Budget)
          </h2>

          <DecorativeOrnament
            className="w-56 h-4 mx-auto mb-6"
            fill="#761D14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {stayOptions.map((option, idx) => {
              const isLucide = String(option.icon || "").startsWith("lucide:");
              const lucideName = isLucide
                ? String(option.icon).split(":")[1]
                : null;
              const lucideMap = {
                Home,
                Tent,
                MapPin,
                Star,
                TentTree,
                Building2,
              } as any;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.06 * idx }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col items-center"
                >
                  <div className="w-full flex items-center justify-center py-6">
                    {isLucide && lucideName ? (
                      (() => {
                        const Icon = lucideMap[lucideName];
                        return Icon ? <Icon size={36} color="#761D14" /> : null;
                      })()
                    ) : (
                      <img
                        src={String(option.icon)}
                        alt={option.alt ?? option.title}
                        className="w-12 h-12 object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <p className="text-[#761D14] font-semibold text-sm sm:text-base">
                      {option.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-[#761D14] text-white rounded-lg p-4 text-center font-semibold">
            👉 Final stay confirm trip manager call par
          </div>
        </div>
      </section>

      <section className="bg-astro-primary p-8 pb-6 max-sm:px-3 relative overflow-hidden bg-[#761D14]">
        <div
          className={cn(
            "absolute inset-0 z-[25] opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />
        <div className="max-md:max-w-md mx-auto text-center relative z-30 md:max-w-4xl md:w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight text-white">
            Food & Travel Services
          </h2>

          <div className="relative md:max-w-4xl md:mx-auto">
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-center justify-center h-full">
                <div className=" gap-3 mb-4 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-[#761D14] flex flex-col items-center justify-center">
                    <UtensilsCrossed /> Food
                  </h3>
                </div>
                <ul className="space-y-2 text-slate-800 text-sm font-semibold font-poppins">
                  <li>✓ Pure veg meals</li>
                  <li>✓ Breakfast + Lunch + Dinner</li>
                  <li>✓ Special Sangam Bhoj</li>
                  <li>✓ International (on request)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-center justify-center h-full">
                <div className="flex items-center gap-3 mb-4 flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#761D14] flex flex-col items-center justify-center">
                    <Car />
                    Travel
                  </h3>
                </div>
                <ul className="space-y-2 text-slate-800 text-sm font-semibold font-poppins">
                  <li>✓ Airport / Railway pickup</li>
                  <li>✓ Cab, Auto, E-rickshaw</li>
                  <li>✓ Bike Taxi</li>
                  <li>✓ 24×7 local support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-gradient p-6 px-4 bg-[#FFF8E5] relative z-10">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />
        <div className="max-md:max-w-md mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-[#761D14]">
            Trusted by Spiritual Learners
          </h2>

          <DecorativeOrnament
            className="w-72 h-4 mx-auto mb-6 z-10 relative"
            fill="#761D14"
          />

          <p className="text-[#787575] leading-normal mb-8 font-poppins z-10 relative">
            Prayagraj’s most trusted local guide service for Magh Mela — relied on by
            thousands of pilgrims. <br />
            Experience the sacred Sangam with proper guidance, safety, and peace
            of mind, all while staying close to the true spiritual essence of
            the Mela.
          </p>

          <div className="grid grid-cols-2  gap-2 mb-2 z-10 relative md:flex ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center md:w-[220px]"
              >
                <img
                  src={stat.icon}
                  alt=""
                  aria-hidden="true"
                  className="!w-[60px] !aspect-square mb-3"
                />
                <p
                  className="text-slate-800 text-sm font-semibold leading-tight font-poppins sm:text-base"
                  dangerouslySetInnerHTML={{ __html: stat.title }}
                />
              </div>
            ))}
          </div>

          <Button
            className="inline-flex items-center justify-center w-full !text-white font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl !bg-[#761D14] z-10 relative"
            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>

      <section className="bg-astro-primary  p-6 lg:px-12 relative overflow-hidden bg-[#761D14] z-10">
        <div
          className={cn(
            "absolute inset-0 z-20 opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />

        <div className="max-w-md  z-30 mx-auto text-center relative md:max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-white">
            Guided by the Best in the Field
          </h2>

          <DecorativeOrnament className="w-72 h-4 mx-auto mb-6" fill="white" />

          <p className="text-white/80 text-base leading-normal mb-8 font-poppins">
            Our local guides aren't just knowledgeable — they're trusted
            Prayagraj experts with 20+ years of experience. They've helped
            thousands of pilgrims experience Magh Mela safely and spiritually —
            and now they're here to guide you through the sacred Sangam journey
            with confidence, comfort, and authentic local insights.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8 text-white z-30 relative md:grid-cols-3">
            {gurus.map((guru, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white/5 p-4 flex flex-col items-center text-center h-full"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-3">
                  <Image
                    src={guru.imgUrl}
                    alt={guru.name}
                    width={112}
                    height={112}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-bold truncate ">{guru.name}</div>
                <div className="text-sm mt-1">
                  <div className="truncate">{guru.content1}</div>
                  <div className="text-xs text-white/85 truncate text-wrap">
                    {guru.content2}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            className="inline-flex items-center justify-center w-full !bg-white !text-black font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl"
            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>
      <PricingCards />
      <section className="bg-astro-primary  p-8 pb-6 max-sm:px-3 relative overflow-hidden bg-[#761D14]">
        <div
          className={cn(
            "absolute inset-0 z-[25] opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />
        <div className="max-md:max-w-md  mx-auto text-center relative z-30 md:w-4xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-white">
            How It Works?
          </h2>

          <DecorativeOrnament className="w-72 h-4 mx-auto mb-8" fill="white" />

          <div className="relative md:max-w-4xl md:mx-auto">
            <div className="absolute left-5 top-8 bottom-8 w-0.5 border-l-2 border-dashed  border-white/60"></div>

            <div className="space-y-4">
              {steps.map((day, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative z-10 bg-white/30 rounded-full p-1 flex-shrink-0">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center sm:w-8! sm:h-8!">
                      <span className="text-astro-primary font-bold text-xs sm:text-sm font-poppins text-[16px]">
                        {day.day}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-[9px] px-[5px] flex-1 flex items-center gap-1 shadow-sm">
                    <img
                      src="/atmanirbhar/lotus.gif"
                      alt="Lotus motif"
                      aria-hidden="true"
                      className="w-[50px]  flex-shrink-0 sm:w-[55px]! aspect-square!"
                    />
                    <div className="flex-1">
                      <p
                        className="text-slate-700 text-sm leading-tight font-poppins sm:text-base text-start"
                        dangerouslySetInnerHTML={{ __html: day.title }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 z-[30]">
            <DecorativeOrnament
              className="w-72 h-4 mx-auto mb-4 "
              fill="white"
            />

            <Button
              className="inline-flex items-center justify-center w-full !bg-white !text-black font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl z-[26]"
              onClick={() => setIsEnrollNowFormOpen(true)}
            >
              {ctaText ?? "Claim Your FREE Seat Now"}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-2 px-3  fixed bottom-0 left-0 right-0 z-40 w-fullmx-auto ">
        <div className="absolute w-full h-full bg-[url('/atmanirbhar/bgImg.jpeg')] bg-cover bg-bottom bg-no-repeat left-0 bottom-0 flex" />
        <div className="absolute w-full h-[70%] bg-gradient-to-b from-white via-white/80 to-white/10 left-0 top-0 flex z-10" />

        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex gap-3 relative max-w-96 mx-auto z-20"
        >
          <Button
            className="inline-flex items-center justify-center w-full !text-white font-bold text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl !bg-[#761D14]"
            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </motion.div>
      </section>

      <section className="bg-[#FFF8E5] p-6 sm:p-10 relative overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />

        <div className="max-w-4xl mx-auto relative z-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-[#761D14]">
                SAFETY & SUPPORT
              </h2>
              <p className="text-[#761D14] mt-1 max-w-xl">
                Your safety matters — vetted partners, on-ground help and
                transparent pricing for peace of mind.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span className="text-sm text-slate-600">
                Need immediate help?
              </span>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center px-3 py-2 bg-[#761D14] text-white rounded-md text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden />
                Call Helpline
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.article
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className={
                  "flex gap-4 p-4 bg-white rounded-lg shadow-sm border"
                }
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FFF8E5] text-[#761D14]">
                  <ShieldCheck className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-[#761D14]">
                    Verified partners
                  </h3>
                  <p className="text-sm text-slate-600">
                    Vetted local accommodation, guides and vendors.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FFF8E5] text-[#761D14]">
                  <Users className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-[#761D14]">
                    Family & senior friendly
                  </h3>
                  <p className="text-sm text-slate-600">
                    Accessible stays and extra assistance when needed.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FFF8E5] text-[#761D14]">
                  <Phone className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-[#761D14]">
                    24/7 local support
                  </h3>
                  <p className="text-sm text-slate-600">
                    On-ground team and emergency helpline available round the
                    clock.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FFF8E5] text-[#761D14]">
                  <CreditCard className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-[#761D14]">
                    Transparent pricing
                  </h3>
                  <p className="text-sm text-slate-600">
                    Clear costs with no hidden fees or surprise charges.
                  </p>
                </div>
              </motion.article>
            </div>

            <aside className="bg-white p-4 rounded-lg shadow-sm border flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-[#761D14]">
                  On-call Support
                </h4>
                <p className="text-sm text-slate-600">
                  Quick help via WhatsApp or phone. Save the helpline for urgent
                  assistance.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#25D366] text-white rounded-md text-sm"
                  >
                    <Phone className="w-4 h-4" aria-hidden />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-[#761D14] text-[#761D14] rounded-md text-sm"
                  >
                    <Phone className="w-4 h-4" aria-hidden />
                    Call
                  </a>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <p className="mb-2">
                  <strong className="text-[#761D14]">Emergency?</strong> Use the
                  helpline above for immediate response.
                </p>
                <p>
                  If you&apos;d like to report a non-urgent issue,{" "}
                  <a href="/contact" className="text-[#761D14] underline">
                    contact us
                  </a>{" "}
                  and we&apos;ll follow up within 24 hours.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal
        open={isEnrollNowFormOpen}
        onOpenChange={setIsEnrollNowFormOpen}
      />
    </div>
  );
}

const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left "
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white text-md">
          {item.question}
        </span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 text-sm bg-white rounded-lg px-4 ${
          isOpen ? " max-h-96 py-2 " : " max-h-0"
        }`}
      >
        <p className="text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};
interface FaqItem {
  question: string;
  answer: string;
}
const faqData: FaqItem[] = [
  {
    question: "What is the ₹199 / ₹499 payment for?",
    answer:
      "This amount is for slot booking and trip planning. Remaining charges are paid later after final confirmation.",
  },
  {
    question: "Is this service safe for families and seniors?",
    answer:
      "Yes. Our services are family-friendly and supported by verified local partners in Prayagraj.",
  },
  {
    question: "When will my stay be confirmed?",
    answer:
      "After payment, our trip manager contacts you on WhatsApp to finalize stay and services.",
  },
  {
    question: "Do you support foreign tourists?",
    answer:
      "Yes. We assist both Indian and international tourists with travel and stay planning.",
  },
  {
    question: "How will I receive updates after booking?",
    answer:
      "You will receive confirmation via email and WhatsApp support will start shortly.",
  },
];

const testimonials = [
  {
    src: "/atmanirbhar/testimonial1.webp",
    alt: "Testimonial",
  },
  {
    src: "/atmanirbhar/testimonial2.webp",
    alt: "Testimonial",
  },
  {
    src: "/atmanirbhar/testimonial3.webp",
    alt: "Testimonial",
  },
  {
    src: "/atmanirbhar/testimonial4.webp",
    alt: "Testimonial",
  },
  {
    src: "/atmanirbhar/testimonial5.webp",
    alt: "Testimonial",
  },
  {
    src: "/atmanirbhar/testimonial6.webp",
    alt: "Testimonial",
  },
];

function CaraouselComp() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-[75%] aspect-[9/16] max-w-sm mx-auto z-[26] relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`!h-2 !aspect-square !rounded-full transition-colors ${
              index === current ? "bg-red-800" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#761C14] text-[#FFF8E5] py-12 px-6 pb-24 flex items-center justify-center flex-col w-full">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="">
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="text-[#FFF8E5]/90 leading-relaxed">
            PrayagrajVisit.in is a local travel service helping pilgrims
            experience Magh Mela 2026 with comfort, safety and trust.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-3 text-[#FFF8E5]/90">
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>Helpline: XXXXXXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <span>💬</span>
              <span>WhatsApp Support</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span>
              <span>Email support</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#FFF8E5]/90 underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#FFF8E5]/90 underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-[#FFF8E5]/90 underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#FFF8E5]/20 text-center">
        <p className="text-[#FFF8E5]/80 text-sm">
          © 2026 PrayagrajVisit.in - All rights reserved
        </p>
      </div>
    </footer>
  );
}
