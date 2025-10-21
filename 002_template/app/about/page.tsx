import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { teamMembers } from '@/lib/data/team';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet our team of expert barbers and learn about our passion for the craft.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-carbon">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920"
          alt="Barbershop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-carbon/80" />
        <Container className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-soft-white uppercase">
            About Us
          </h1>
        </Container>
      </section>

      {/* Story */}
      <section className="section-padding">
        <Container size="narrow">
          <div className="space-y-6 text-soft-white/80 text-lg leading-relaxed">
            <h2 className="font-display text-3xl text-soft-white uppercase mb-6">Our Story</h2>
            <p>
              Founded in 2009, Barbershop has been at the forefront of modern men's grooming,
              blending classic barbering techniques with contemporary streetwear aesthetics.
            </p>
            <p>
              What started as a small neighborhood shop has grown into a destination for those who
              demand excellence in every cut, fade, and shave. Our team of master barbers brings
              decades of combined experience and an unwavering commitment to the craft.
            </p>
            <p>
              We believe grooming is more than just a service—it's an experience, a ritual, and an
              art form. Every client who walks through our doors receives personalized attention and
              leaves feeling confident and refreshed.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="section-padding bg-ink">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-soft-white uppercase">
              Our Mission
            </h2>
            <p className="text-soft-white/80 text-lg leading-relaxed">
              To provide exceptional grooming services in a welcoming environment where tradition
              meets innovation, and every client receives the highest level of expertise and care.
            </p>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-soft-white uppercase mb-4">
              Meet The Team
            </h2>
            <p className="text-soft-white/70 max-w-2xl mx-auto">
              Our expert barbers bring passion, precision, and personality to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Instagram icon (non-clickable) */}
                  <div className="absolute bottom-4 right-4 bg-heat text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-default">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="font-display text-xl text-soft-white uppercase">{member.name}</h3>
                    <p className="text-heat text-sm uppercase tracking-wide">{member.role}</p>
                  </div>
                  <p className="text-soft-white/70 text-sm">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/5 text-soft-white/60 px-2 py-1 uppercase tracking-wide"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-soft-white/50 pt-1">{member.experience} years exp.</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
