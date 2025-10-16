import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { teamMembers } from '@/lib/data/team'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Barbershop, our master barbers, and our commitment to exceptional grooming services.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 mt-20">
        <div className="container-custom text-center">
          <p className="text-text text-sm uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-5xl sm:text-7xl font-playfair font-light tracking-tight mb-6">
            Our Story
          </h1>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Where tradition meets innovation in the art of grooming.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                alt="Barbershop interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-playfair font-light text-gradient">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Barbershop, we&apos;re more than just a place to get a haircut—we&apos;re a community dedicated to the art of grooming. Since our founding, we&apos;ve been committed to providing exceptional service in a welcoming, modern environment.
                </p>
                <p>
                  Every member of our team is a master of their craft, trained in both traditional barbering techniques and contemporary styling. We believe in taking the time to understand each client&apos;s unique style and delivering results that exceed expectations.
                </p>
                <p>
                  Our commitment extends beyond the chair. We use only premium, sustainable products and maintain the highest standards of cleanliness and safety. Your trust is our most valuable asset, and we work every day to earn it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <p className="text-4xl font-playfair font-bold text-accent">15+</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">
                    Years in Business
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-playfair font-bold text-accent">2000+</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-light text-gradient mb-6">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We pursue perfection in every cut, shave, and styling session. Our commitment to excellence is unwavering.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Every service is a work of art. We combine traditional techniques with modern innovation to deliver exceptional results.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re more than a barbershop—we&apos;re a gathering place where relationships are built and stories are shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Meet Our Team
            </p>
            <h2 className="text-4xl sm:text-5xl font-playfair font-light text-gradient mb-6">
              Master Artisans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented barbers bring years of experience and passion to every service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {member.experience} years experience
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.social?.instagram && (
                    <div className="pt-4">
                      <span className="text-accent text-sm font-medium">
                        {member.social.instagram}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl sm:text-5xl font-playfair font-light mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-text text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why our clients keep coming back.
          </p>

          <Link href="/booking">
            <Button variant="primary" size="lg">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
