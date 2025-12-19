import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Magh Mela 2025 Prayagraj | Book Your Spiritual Journey at Triveni Sangam",
  description:
    "Experience the divine Magh Mela 2025 at Prayagraj with trusted local guides. Book accommodation, food & travel for Triveni Sangam Snan. 10,000+ pilgrims assisted. Safe, comfortable & spiritual journey awaits.",
  keywords: [
    "Magh Mela 2025",
    "Prayagraj Mela",
    "Triveni Sangam",
    "Magh Mela booking",
    "Prayagraj visit",
    "Kumbh Mela Prayagraj",
    "Sangam Snan",
    "Magh Mela accommodation",
    "Prayagraj pilgrimage",
    "Allahabad Mela",
    "Magh Mela tent booking",
    "Prayagraj dharamshala",
    "Magh Mela 2026",
    "Prayagraj spiritual tour",
    "Ganga Snan Prayagraj",
    "Magh Mela guide",
    "Prayagraj local guide",
    "Triveni Sangam visit",
    "Magh Mela packages",
    "Prayagraj tour packages",
  ],
  authors: [{ name: "PrayagrajVisit.in" }],
  creator: "PrayagrajVisit.in",
  publisher: "PrayagrajVisit.in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.prayagrajvisit.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Magh Mela 2025 Prayagraj | Book Your Spiritual Journey at Triveni Sangam",
    description:
      "Experience the divine Magh Mela 2025 at Prayagraj with trusted local guides. Book accommodation, food & travel for Triveni Sangam Snan. 10,000+ pilgrims assisted.",
    url: "https://www.prayagrajvisit.in",
    siteName: "PrayagrajVisit.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magh Mela 2025 Prayagraj - Triveni Sangam",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magh Mela 2025 Prayagraj | Book Your Spiritual Journey",
    description:
      "Experience the divine Magh Mela 2025 at Prayagraj with trusted local guides. 10,000+ pilgrims assisted.",
    images: ["/og-image.jpg"],
    creator: "@prayagrajvisit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.prayagrajvisit.in/#organization",
        name: "PrayagrajVisit.in",
        url: "https://www.prayagrajvisit.in",
        logo: {
          "@type": "ImageObject",
          url: "https://www.prayagrajvisit.in/logo.png",
        },
        description:
          "Trusted local Prayagraj team helping pilgrims experience Magh Mela safely and comfortably",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Prayagraj",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.prayagrajvisit.in/#localbusiness",
        name: "PrayagrajVisit.in - Magh Mela Services",
        image: "https://www.prayagrajvisit.in/og-image.jpg",
        description:
          "Book your Magh Mela 2025 journey with trusted local guides. Accommodation, food, travel & spiritual guidance for Triveni Sangam.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Prayagraj",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.4358,
          longitude: 81.8463,
        },
        url: "https://www.prayagrajvisit.in",
        priceRange: "₹₹",
        servesCuisine: "Pure Vegetarian",
        areaServed: {
          "@type": "City",
          name: "Prayagraj",
        },
      },
      {
        "@type": "Event",
        "@id": "https://www.prayagrajvisit.in/#maghmela2025",
        name: "Magh Mela 2025",
        description:
          "Experience the divine Magh Mela 2025 at Prayagraj's Triveni Sangam with professional local guidance",
        startDate: "2025-01-13",
        endDate: "2025-02-26",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Triveni Sangam, Prayagraj",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Prayagraj",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "PrayagrajVisit.in",
          url: "https://www.prayagrajvisit.in",
        },
      },
      {
        "@type": "TouristAttraction",
        name: "Triveni Sangam",
        description:
          "Sacred confluence of Ganga, Yamuna and Saraswati rivers at Prayagraj",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.4358,
          longitude: 81.8463,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Prayagraj",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '7041764519630034');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=7041764519630034&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
