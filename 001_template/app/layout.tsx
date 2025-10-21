import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingProvider } from "@/lib/context/BookingContext";
import { Providers } from "./providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Barbershop - Premium Grooming Services | BTY Technology",
    template: "%s | BTY Technology",
  },
  description:
    "Experience exceptional grooming at Barbershop. Professional haircuts, styling, and grooming services in a modern, welcoming environment.",
  keywords: [
    "barbershop",
    "haircut",
    "grooming",
    "mens haircut",
    "hair styling",
    "barber",
    "BTY Technology",
  ],
  authors: [{ name: "BTY Technology" }],
  creator: "BTY Technology",
  publisher: "BTY Technology",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://barbershop-001.website.btytechnology.com/",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barbershop-001.website.btytechnology.com/",
    siteName: "Barbershop | BTY Technology",
    title: "Barbershop - Premium Grooming Services | BTY Technology",
    description:
      "Experience exceptional grooming at Barbershop. Professional haircuts, styling, and grooming services.",
    images: [
      {
        url: "/btyopngraph.png",
        width: 1200,
        height: 630,
        alt: "Barbershop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbershop - Premium Grooming Services | BTY Technology",
    description: "Experience exceptional grooming at Barbershop.",
    images: ["/btyopngraph.png"],
    creator: "@btytechnology",
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <Providers>
          <BookingProvider>
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>

            <Header />

            <main id="main-content" className="min-h-screen">
              {children}
            </main>

            <Footer />
          </BookingProvider>
        </Providers>
      </body>
    </html>
  );
}
