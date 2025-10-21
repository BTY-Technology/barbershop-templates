'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { getFeaturedServices } from '@/lib/data/services';

export default function HomePage() {
  const featuredServices = getFeaturedServices();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center noise-overlay">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920"
            alt="Barbershop interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/70 to-carbon/95" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 text-center py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-heat uppercase tracking-tight leading-none animate-fade-in">
                Where Style
                <br />
                <span className="text-soft-white">Meets Street</span>
              </h1>
              <p className="text-lg sm:text-xl text-soft-white/80 max-w-2xl mx-auto animate-slide-up">
                Premium grooming services with a bold, modern edge. Book your transformation today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="/booking">
                <Button size="lg" variant="primary">
                  Book Now
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-heat">15+</div>
                <div className="text-sm text-soft-white/60 uppercase tracking-wide mt-2">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-heat">10K+</div>
                <div className="text-sm text-soft-white/60 uppercase tracking-wide mt-2">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-heat">6</div>
                <div className="text-sm text-soft-white/60 uppercase tracking-wide mt-2">
                  Expert Barbers
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-heat"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding bg-carbon">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-soft-white mb-4 uppercase">
              Featured Services
            </h2>
            <p className="text-soft-white/70 max-w-2xl mx-auto">
              Discover our most popular services, crafted to perfection by our expert barbers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} priority={index < 3} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-ink">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-soft-white mb-4 uppercase">
              Why Choose Us
            </h2>
            <p className="text-soft-white/70 max-w-2xl mx-auto">
              Experience the difference that sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-heat/10 rounded-full flex items-center justify-center group-hover:bg-heat/20 transition-colors">
                <svg
                  className="w-8 h-8 text-heat"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl text-soft-white uppercase">Expert Barbers</h3>
              <p className="text-soft-white/70 text-sm">
                Our team consists of licensed, experienced professionals passionate about their
                craft
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-heat/10 rounded-full flex items-center justify-center group-hover:bg-heat/20 transition-colors">
                <svg
                  className="w-8 h-8 text-heat"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl text-soft-white uppercase">Flexible Hours</h3>
              <p className="text-soft-white/70 text-sm">
                Open 6 days a week with extended hours to fit your schedule
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-heat/10 rounded-full flex items-center justify-center group-hover:bg-heat/20 transition-colors">
                <svg
                  className="w-8 h-8 text-heat"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl text-soft-white uppercase">Premium Products</h3>
              <p className="text-soft-white/70 text-sm">
                We use only the finest grooming products for exceptional results
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-heat to-heat-dark noise-overlay">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase">
              Ready for Your Next Cut?
            </h2>
            <p className="text-white/90 text-lg">
              Book your appointment today and experience the Barbershop difference
            </p>
            <div className="pt-4">
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  Book Your Appointment
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
