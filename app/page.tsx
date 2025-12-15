import { Button } from "@/components/ui/button";
import { formatDate, formatTime } from "@/utils/dateTimeParser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import FlipboardTimer from "@/components/marketingPages/FlipboardCounter";
import { ChevronDown } from "lucide-react";


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

// Calendar icon
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

// Language icon
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

// Clock icon
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

// Video icon
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

// Benefit cards data
const benefits = [
  {
    icon: "/atmanirbhar/bird.gif",
    title: "Earn<b> 1 Lakh+</b> monthly with Astrology",
  },
  {
    icon: "/atmanirbhar/cert.gif",
    title: "Become a<b> Certified & Trusted Astrologer</b>",
  },
  {
    icon: "/atmanirbhar/lotus_n.gif",
    title: "Access <b>100+ Guru-level secrets</b> no one shares!",
  },
  {
    icon: "/atmanirbhar/hand.gif",
    title: "<b>Decode any Kundali</b> with confidence",
  },
];

// 8-day journey data
const journeyDays = [
  {
    day: 1,
    title:
      "Learn the art of pinpoint prediction through <b>KP Astrology</b>, guided by Prof. Krish.",
  },
  {
    day: 2,
    title:
      "Master the power of <b>Lal Kitab remedies</b> and chart-based corrections with Dr. Mahesh.",
  },
  {
    day: 3,
    title:
      "Master the most accurate prediction system of <b>Nakshatra Nadi</b> guided by Pt. Dinesh.",
  },
  {
    day: 4,
    title: "Learn <b>Vedic Numerology</b> and predict with powerful accuracy.",
  },
  {
    day: 5,
    title:
      "Unlock the hidden secrets of your birthdate using the power of the <b>Mystical Triangle</b>.",
  },
  {
    day: 6,
    title:
      "Get 70+ powerful combinations for predictions using <b>Bhrigu Nandi Nadi</b>.",
  },
  {
    day: 7,
    title:
      "Unlock the rarest, most potent <b>Aghori shastra</b> secrets to break lifelong blockages.",
  },
  {
    day: 8,
    title:
      "Heal, attract, and align with the power of crystals by learning <b>crystal healing</b>.",
  },
];

// Statistics data
const stats = [
  {
    icon: "/atmanirbhar/student_cert.gif",
    title: "<b>1,000,000+</b> Learners Empowered",
  },
  {
    icon: "/atmanirbhar/books.gif",
    title: "<b>20+ Authentic</b> Occult Courses",
  },
  {
    icon: "/atmanirbhar/mandala.gif",
    title: "<b>10,000+ Skilled</b> Astrologers Trained",
  },
  {
    icon: "/atmanirbhar/india.gif",
    title: "<b>Pan-India & Global</b> Recognition",
  },
];

// Guru photos
const gurus = [
  {
    imgUrl: "/atmanirbhar/krish.webp",
    name: "Prof. Krish Murali Eswar",
    content1: "KP Astrology Expert",
    content2: "25+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/krishna.webp", // Assuming this URL points to Krishna Sai Siri
    name: "Krishna Sai Siri",
    content1: "Crystal Healing Expert",
    content2: "25+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/rohet.webp",
    name: "Dr. Rohet Sethi",
    content1: "Mystical Triangle Expert",
    content2: "20+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/vaibhav.webp",
    name: "Vaibhav Gupta",
    content1: "Bhrigu Nandi Nadi Expert",
    content2: "16+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/tarun.webp",
    name: "Dr. Tarun Malik",
    content1: "Past Life Regression Expert",
    content2: "15+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/mahesh.webp",
    name: "Dr. Mahesh Mankar",
    content1: "Lal Kitab Expert",
    content2: "10+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/chaitanyaa.webp",
    name: "Dr. Chaitanyaa Missra",
    content1: "Vastu Shastra Expert",
    content2: "18+ years of experience",
  },
  {
    imgUrl: "/atmanirbhar/ameeta.webp",
    name: "Ameeta S Bhatia",
    content1: "Akashic Records Expert",
    content2: "17+ years of experience",
  },
];

const Index = ({
  masterclassId,
  masterclass,
  fullDomain,
  abTestType,
  abTestCounter,
}: {
  masterclassId: string;
  masterclass: any;
  fullDomain: string;
  abTestType: string;
  abTestCounter: number;
}) => {
  const router = useRouter();
  const source = router.query.source;
  const leadComment = router.query.comment;
  const slots = masterclass?.slots;
  const activeSlot = slots?.find((slot: any) => slot.active);
  const activeDate = formatDate(activeSlot?.startDateTime);
  const activeTimeSlot = formatTime(activeSlot?.startDateTime);
  const [price, setPrice] = useState<any>({
    price: masterclass.price,
    discountedPrice: masterclass.discountedPrice,
    workshopTitle: masterclass.title,
    source: "default",
  });
  const amount = price?.discountedPrice;
  useEffect(() => {
    let data = masterclass?.metaData?.prices?.find(
      (price: any) => price.source === source
    );
    if (data) {
      setPrice(data);
    }
  }, [source, masterclass]);
  const tkn = router.query.tkn;
  const bkt = router.query.bkt;
  const tokenObj = {discountedPrice:10};
  const uiPrice = tokenObj?.discountedPrice ?? price?.discountedPrice;
  const ctaText =
    tkn && bkt == "B"
      ? "Register Your Seat Now"
      : `Register Now For ₹${uiPrice}`;
  const formCtaText =
    tkn && bkt == "B"
      ? "Register  Your Seat Now"
      : `Reserve Your Seat For Just ₹${uiPrice}`;
  const [isEnrollNowFormOpen, setIsEnrollNowFormOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FFF8E5]  mx-auto relative">

      <section className="bg-[#FFF8E5] pb-16 px-10 h-[800px] flex flex-col items-center relative">

        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />

        <div className="absolute z-[12] bg-[radial-gradient(circle_at_center,_#ffffff50,_#ffffff0)] w-full !aspect-square rounded-full top-[50px]"/>

        <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto z-30">
          <div className="bg-astro-red  text-center py-2 px-5 rounded-b-2xl mb-6 mx-auto w-fit bg-[#761D14] text-white">
            <span className="font-bold text-base font-inter">
              Live 8 Days Event
            </span>
          </div>

          <div className="text-center mb-6 flex flex-col relative z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a7561c0d045a86c71713aacc60331a1ebd33a9e1?width=283"
              alt="Astrolearn"
              className="h-6 mx-auto mb-4"
            />
            <img
              src="/atmanirbhar/aatmanirbhar.svg"
              alt="Project Aatmanirbhar Jyotish"
              className="w-80 h-auto mx-auto"
            />
          </div>

          <div className="text-center mb-6 z-10">
            <div className="text-gray-500 font-poppins text-xs max-w-[280px] mx-auto">
              From Learning to Legacy
              <br /> Become an astrologer whom everyone trusts!
            </div>
          </div>

          {/* Main Event Card */}
          <div className="w-full flex flex-col items-center justify-center relative z-10 ">
          <Image
            src={"/atmanirbhar/teachers.webp"}
            alt=""
            width={400}
            height={400}
            className="w-full max-w-[350px] h-auto z-10"
          />
            <div className="bg-white rounded-lg shadow-lg p-4 place-self-center  w-full h-auto max-w-[350px]">
              <h3 className="text-astro-gray-dark text-xl font-bold text-center mb-4 font-roboto text-balance">
                India's Biggest Jyotish Learning Festival Is Here
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span className="text-astro-gray-dark font-semibold text-sm font-poppins">
                      {activeDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LanguageIcon />
                    <span className="text-astro-gray-dark font-semibold text-sm font-poppins">
                      English & Hindi
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span className="text-astro-gray-dark font-semibold text-sm font-poppins">
                      {activeTimeSlot}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VideoIcon />
                    <span className="text-astro-gray-dark font-semibold text-sm font-poppins">
                      Live Classes
                    </span>
                  </div>
                </div>
              </div>

              <DecorativeOrnament
                className="w-72 h-4 mx-auto mb-4"
                fill="#CD0000"
              />

              <p className="text-[#cd0000] text-center mb-6 font-poppins">
                #HarrGharAstrologer
              </p>

              {/* Event Highlights */}

              <div className="space-y mb-3 ">
                <div className="bg-white rounded-lg p-3 px-0  shadow-sm flex items-center gap-3 ">

                  <img
                    src="/atmanirbhar/om.gif"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-astro-gray-dark font-bold text-xs mb-1 font-poppins">
                      8 Days, 8 Gurus, 10+ Subjects
                    </h4>
                    <p className="text-astro-gray-medium text-xs leading-tight font-poppins">
                      The foundation you need to become a trusted astrologer.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 px-0 shadow-sm flex items-center gap-3">
                  <img
                    src="/atmanirbhar/flower.gif"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-astro-gray-dark font-bold text-xs mb-1 font-poppins">
                      Master Predictions. Heal Lives. Raise Status
                    </h4>
                    <p className="text-astro-gray-medium text-xs leading-tight font-poppins">
                      From Lal Kitab to Past Life. Learn what matters.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 px-0 shadow-sm flex items-center gap-3">
                  <img
                    src="/atmanirbhar/lotus.gif"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-astro-gray-dark font-bold text-xs mb-1 font-poppins">
                      For Learners, Healers & Future Astrologers
                    </h4>
                    <p className="text-astro-gray-medium text-xs leading-tight font-poppins">
                      Personal use or career building, all in one journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center  overflow-x-clip ">

        <div className="absolute bg-[#761D14] rounded-full w-[800px] aspect-square -top-24 z-0" />

        <div
          className={cn(
            "absolute inset-0 z-[25] -top-20 opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />

        <section className="h-full flex flex-col justify-center items-center px-2 py-16 pb-8 relative overflow-hidden  bg-[#761D14] w-full ">
          <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center   relative   z-[30]  pt-[150px] flex flex-col items-center justify-center">
            
            <h1 className="text-white text-xl font-bold leading-tight mb-4 font-roboto pb-2 max-w-sm text-center">

              Why this event is unlike anything you've seen before ?
            </h1>

            <DecorativeOrnament
              className="w-72 h-4 mx-auto mb-6 "
              fill="white"
            />

            <p className="text-white/80 text-base  leading-normal mb-8 font-poppins mx-3">
              Hear from the 8 Gurus themselves — why they created this festival,
              who is it for, and how it will change your spiritual and
              professional path forever
            </p>

            {/* Video placeholder */}

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
              <div className="absolute bottom-0 h-[46px]  left-0 right-0 w-full z-[30] "/>
              <div className="absolute top-0 h-[52px] left-0 right-0 w-full z-[30] "/>
            </div>
            <div className="w-full px-3">
              <Button
                className="inline-flex items-center justify-center w-full !bg-white  font-bold text-lg py-6 px-8 rounded-xl !text-black  "

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
        <div className="max-w-md  mx-auto text-center relative z-10">

          <h2 className="text-astro-primary text-xl  font-bold mb-4 font-roboto pt-8 relative z-[4] text-[#761D14]">

            Why You Should Not Miss This?
          </h2>

          <DecorativeOrnament
            className="w-72 h-4 mx-auto mb-6 relative z-[3]"
            fill="#761D14"
          />

          <p className="leading-normal mb-5 font-poppins relative z-[4] text-[#787575]">
            Practical path to self reliance in astrology.
            <br />
            Gain skills, clarity and credibility in just 8 days.
          </p>

          <div className="grid grid-cols-2  gap-2 mb-2 relative z-[5]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-[14px] shadow-sm flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="" className="!w-[60px] !aspect-square mb-3" />
                <p
                  className="text-astro-gray-dark text-[11.82px] font-semibold leading-tight font-poppins"
                  dangerouslySetInnerHTML={{ __html: benefit.title }}
                />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4 mb-6 z-[6] relative">
            <img
              src="/atmanirbhar/student.gif"
              alt=""
              className="!w-[60px] !aspect-square flex-shrink-0"
            />
            <p className="text-astro-gray-dark text-xs font-semibold font-poppins">
              <b>1M+</b>took the first step.
              <br /> Now it ‘s your turn to become a Part of India’s Largest
              Growing <b>Astro-Community</b>{" "}
            </p>
          </div>

          <Button
            className="inline-flex items-center justify-center w-full !bg-[#761d14] font-bold text-lg py-6 px-8 rounded-xl !text-white z-[6] relative mb-5"

            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>

      <section className="bg-astro-primary  p-8 pb-6 px-3 relative overflow-hidden bg-[#761D14]">
        <div
          className={cn(
            "absolute inset-0 z-[25] opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />
        <div className="max-w-md  mx-auto text-center relative z-30">
          <h2 className="text-white text-xl  mb-4 font-roboto">
            Your 8-Day Journey to Self-Reliance Through Jyotish
          </h2>

          <DecorativeOrnament className="w-72 h-4 mx-auto mb-8" fill="white" />

          <div className="relative md:max-w-2xl md:mx-auto">
            <div className="absolute left-5 top-8 bottom-8 w-0.5 border-l-2 border-dashed  border-white/60"></div>

            <div className="space-y-4">
              {journeyDays.map((day, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Number circle */}
                  <div className="relative z-10 bg-white/30 rounded-full p-1 flex-shrink-0">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-astro-primary font-bold text-xs font-poppins">
                        {day.day}
                      </span>
                    </div>
                  </div>

                  {/* Day info */}
                  <div className="bg-white rounded-lg p-[9px] px-[5px] flex-1 flex items-center gap-1 shadow-sm">
                    <img
                      src="/atmanirbhar/lotus.gif"
                      alt=""
                      className="w-[50px] h-[50px] flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-astro-gray-dark text-xs font-bold mb-1 font-poppins text-left">
                        Day {day.day}
                      </h3>
                      <p
                        className="text-astro-gray-medium text-[12px] leading-tight font-poppins text-left "
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

              className="inline-flex items-center justify-center w-full !bg-white !text-black font-bold text-lg py-6 px-8 rounded-xl   z-[26]"

              onClick={() => setIsEnrollNowFormOpen(true)}
            >
              {ctaText ?? "Claim Your FREE Seat Now"}
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Learners Section */}
      <section className="bg-cream-gradient p-6 px-4 bg-[#FFF8E5] relative z-10">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />
        <div className="max-w-md mx-auto text-center">

          <h2 className="text-astro-primary text-xl  font-bold mb-4 font-roboto z-10 relative text-[#761d14]">

            Trusted by Over 1 Million Spiritual Learners
          </h2>

          <DecorativeOrnament
            className="w-72 h-4 mx-auto mb-6 z-10 relative"
            fill="#761D14"
          />

          <p className="text-[#787575] leading-normal mb-8 font-poppins z-10 relative">
            India’s leading platform for practical astrology and occult learning

            — trusted by thousands. <br/> Gain practical knowledge, build confidence,

            and turn their passion for astrology into a respected skill — all
            from their home.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2  gap-2 mb-2 z-10 relative">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center"
              >
                <img src={stat.icon} alt="" className="!w-[60px] !aspect-square mb-3" />
                <p
                  className="text-astro-gray-dark text-xs font-semibold leading-tight font-poppins"
                  dangerouslySetInnerHTML={{ __html: stat.title }}
                />
              </div>
            ))}
          </div>

          {/* Teacher stat - full width */}
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4 mb-8 z-10 relative">
            <img
              src="/atmanirbhar/teacher.gif"
              alt=""
              className="!w-[60px] !aspect-square flex-shrink-0"
            />
            <p className="text-astro-gray-dark text-xs font-semibold font-poppins">
              Led by <b>India's Most Credible</b> Teachers
            </p>
          </div>

          <Button

            className="inline-flex items-center justify-center w-full  !text-white font-bold text-lg py-6 px-8 rounded-xl  !bg-[#761D14] z-10 relative"

            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>

      {/* Gurus Section */}
      <section className="bg-astro-primary  p-6 lg:px-12 relative overflow-hidden bg-[#761D14] z-10">
        <div
          className={cn(
            "absolute inset-0 z-20 opacity-10",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />

        <div className="max-w-md  z-30 mx-auto text-center relative">
          <h2 className="text-white text-xl  font-bold mb-4 font-roboto">
            Guided by the Best in the Field
          </h2>

          <DecorativeOrnament className="w-72 h-4 mx-auto mb-6" fill="white" />

          <p className="text-white/80 text-base leading-normal mb-8 font-poppins">
            Our faculty isn’t just experienced — they’re celebrated authorities
            in their fields. They’ve guided thousands—and now they’re here to
            help you become a confident, self-reliant astrologer through Project
            Aatmanirbhar Jyotish
          </p>

          {/* Gurus Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-white z-30 relative">
            {gurus.map((guru, index) => (
              <div key={index} className=" rounded-xl overflow-hidden">
                <div className="">
                  <Image
                    src={guru.imgUrl}
                    alt=""
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <div className="text-[12px] font-bold">{guru.name}</div>
                <div className="text-[12px]">
                  <div>{guru.content1}</div>
                  <div className="text-[9px]">{guru.content2}</div>
                </div>
              </div>
            ))}
          </div>

          <Button
            className="inline-flex items-center justify-center w-full !bg-white !text-black font-bold text-lg py-6 px-8 rounded-xl  "

            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-2 px-3  fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto">

        <div className="absolute w-full h-full bg-gradient-to-r from-[#FF682070] via-white to-[#046A3875] left-0 bottom-0 flex" />
        <div className="absolute w-full h-[70%] bg-gradient-to-b from-white via-white/80 to-white/10 left-0 top-0 flex z-10" />

        <div className="w-full flex gap-3 relative max-w-96 mx-auto z-20">
          <FlipboardTimer startMinutes={7} />
          <Button
            className="inline-flex items-center justify-center w-full  !text-white font-bold text-lg py-6 px-8 rounded-xl   !bg-[#761D14] "

            onClick={() => setIsEnrollNowFormOpen(true)}
          >
            {ctaText ?? "Claim Your FREE Seat Now"}
          </Button>
        </div>
      </section>
      <section className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center relative z-10 p-8">
        <div
          className={cn(
            "absolute inset-0 z-10 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]"
          )}
        />
        <h2 className="text-[#761d14] text-xl font-bold mb-4 font-roboto">
          They Took the Leap — And It Changed Their Life{" "}
        </h2>

        <DecorativeOrnament className="w-72 h-4 mx-auto mb-6" fill="#761d14" />

        <CaraouselComp />
      </section>
      <section className="w-full max-w-4xl mx-auto p-6 !pb-24 relative bg-[rgb(118,29,20)]">
        <div
          className={cn(
            "absolute inset-0 z-20 opacity-5",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]"
          )}
        />
        <h2 className="text-2xl font-bold text-white mb-3 text-center">
          Frequently Asked Questions
        </h2>
        <DecorativeOrnament className="w-72 h-4 mx-auto mb-3" fill="white" />
        <div className="text-white text-center mb-3">
          And how it will change your spiritual and professional path forever
        </div>
        <div className="relative z-[26] ">
          {faqData.map((faq, index) => (
            <FaqAccordionItem key={index} item={faq} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;

const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left "
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-700 text-md">
          {item.question}
        </span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
const faqData: FaqItem[] = [{
    question: "Is this beginner friendly?",
    answer:
      "Absolutely! This course is designed for beginners. We start from the basics and gradually move to advanced concepts, making sure you understand everything step by step.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! After successfully completing the masterclass, you will receive a digital certificate that you can share or add to your profile.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "The classes are live for an interactive experience, and all sessions are recorded so you can watch them anytime if you miss a class or want to revise.",
  },
  {
    question: "Will I be able to predict after this?",
    answer:
      "You will gain the skills and strategies needed to analyze charts and trends effectively. While predictions depend on practice and market conditions, this masterclass will give you the right tools to start making informed decisions.",
  },
  {
    question: "Can I make a career after this?",
    answer:
      "Yes, many students use the knowledge gained to start a trading or investing journey, and some even turn it into a full-time career. However, your growth will depend on consistent practice and applying what you learn.",
  },];

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
    <div className="w-[75%]   aspect-[9:16] max-w-sm mx-auto  z-[26] relative">
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

      {/* Dots indicator */}
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

const InfiniteLoopComp = ({items}:{items:any}) => {
  


  // Repeat items 4 times to simulate infinite scroll
  const repeatedItems = Array(4)
    .fill(items)
    .flat();

  return (
    <div className="w-full aspect-[9/16] overflow-y-auto border border-gray-400 rounded-lg no-scrollbar">
      {repeatedItems.map((item, index) => (
        <div
          key={index}
          className="h-32 flex items-center justify-center border-b border-gray-300 bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold"
        >

         
           <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>

        </div>
      ))}
    </div>
  );
};
 function InfiniteScroll({items,durationInit}:{items:any[],durationInit?:any}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // 7 items that will be repeated
  


  // Repeat items 4 times for smooth infinite scroll
  const repeatedItems = [...items, ...items, ...items, ...items]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let startTime: number
    const duration = durationInit??20000 

    const totalWidth = scrollContainer.scrollWidth / 2

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = (elapsed % duration) / duration
      const translateX = -(progress * totalWidth)

      scrollContainer.style.transform = `translateX(${translateX}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* 9:16 aspect ratio container */}
      <div className="w-80 aspect-[9/16] bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Infinite scroll container */}
        <div className="h-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex h-full transition-none will-change-transform hover:pause"
            style={{ width: "max-content" }}
          >
            {repeatedItems.map((item, index) => (
              <div
                key={`${item.id}-${Math.floor(index / 7)}`}
                className={`flex-shrink-0 w-32 h-full ${item.color} flex items-center justify-center font-bold text-lg mx-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200`}
              >

               <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>

              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  )
}