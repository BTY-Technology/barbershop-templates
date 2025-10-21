import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterForm from "@/components/NewsletterForm";
import BackToTop from "@/components/BackToTop";
import { getFeaturedServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: {
    default: "Barbershop | BTY Technology",
    template: "%s | BTY Technology",
  },
  description:
    "Experience premium grooming at Barbershop. Professional haircuts, beard grooming, and styling services in New York. | BTY Technology",
  authors: [{ name: "BTY Technology" }],
  creator: "BTY Technology",
  publisher: "BTY Technology",
  icons: {
    icon: "/btyfavi.png",
    shortcut: "/btyfavi.png",
    apple: "/btyfavi.png",
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
};

export default function HomePage() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
            alt="Modern barbershop interior"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary z-0" />

        {/* Content */}
        <div className="container-custom relative z-10 text-center px-4 mt-20">
          <div className="animate-fade-in">
            {/* Eyebrow */}
            <p className="text-text text-sm uppercase tracking-widest mb-6">
              Welcome to Excellence
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-playfair font-light tracking-tight text-secondary mb-8">
              The Art of
              <span className="block text-accent mt-2">Grooming</span>
            </h1>

            {/* Subtitle */}
            <p className="text-text text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Experience exceptional service from master barbers who combine
              traditional techniques with contemporary style.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking">
                <Button variant="primary" size="lg">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-primary"
                >
                  View Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-20 mb-36 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-playfair font-bold text-accent">
                  2000+
                </p>
                <p className="text-sm text-text uppercase tracking-wider">
                  Happy Clients
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-playfair font-bold text-accent">
                  15+
                </p>
                <p className="text-sm text-text uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-playfair font-bold text-accent">
                  4
                </p>
                <p className="text-sm text-text uppercase tracking-wider">
                  Master Barbers
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2">
            <div
              className="flex flex-col items-center gap-2"
              style={{ animation: "bounce 2s ease-in-out infinite" }}
            >
              <span className="text-sm font-medium text-text tracking-wider">
                SCROLL
              </span>
              <svg
                className="w-6 h-6 text-text"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                About Our Barbershop
              </p>
              <h2 className="text-4xl sm:text-6xl font-light font-playfair tracking-tight text-gradient">
                Crafted with Passion
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Barbershop, we believe that grooming is an art form. Every
                  cut, every shave, and every styling session is executed with
                  precision and care by our team of master barbers.
                </p>
                <p>
                  With over 15 years of combined experience, we&apos;ve honed
                  our craft to deliver exceptional results that make you look
                  and feel your absolute best. From classic cuts to contemporary
                  styles, we bring your vision to life.
                </p>
                <p>
                  Our commitment goes beyond just great haircuts. We create an
                  experience—a welcoming environment where you can relax,
                  refresh, and leave feeling confident.
                </p>
              </div>
              <Link href="/about">
                <Button variant="primary">Learn More About Us</Button>
              </Link>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80"
                    alt="Barbershop interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80"
                    alt="Barber tools"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                    alt="Haircut in progress"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80"
                    alt="Beard grooming"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Featured Services
            </p>
            <h2 className="text-5xl sm:text-7xl text-gradient font-light tracking-tight font-playfair mb-6">
              Our Signature Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From classic cuts to modern styling, discover our most popular
              services designed to help you look and feel your best.
            </p>
          </div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/services">
              <Button variant="primary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Our Process
            </p>
            <h2 className="text-5xl sm:text-7xl text-gradient font-light tracking-tight font-playfair mb-6">
              From Vision to Reality
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your style goals and preferences to understand your vision.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "We prepare with premium products and tools for optimal results.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Our master barbers bring your vision to life with precision and skill.",
              },
              {
                step: "04",
                title: "Finishing",
                description:
                  "Final touches and styling to ensure you leave looking your absolute best.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent text-2xl font-bold font-playfair">
                  {item.step}
                </div>
                <h3 className="text-xl font-playfair font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Client Stories
            </p>
            <h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">
              Loved by Many
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience at
              Barbershop.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight font-playfair mb-6">
            Stay Inspired
          </h2>
          <p className="text-text text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for grooming tips, style inspiration,
            and exclusive offers.
          </p>

          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
