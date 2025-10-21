'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { bookingSchema, type BookingFormData } from '@/lib/validations';
import { services } from '@/lib/data/services';
import { teamMembers } from '@/lib/data/team';
import { companyInfo } from '@/lib/data/company';
import { generateTimeSlots, generateAvailableDates, formatDateInput } from '@/lib/utils';

export default function BookingPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const availableDates = generateAvailableDates();
  const timeSlots = generateTimeSlots();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Booking submitted:', data);
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-carbon">
      <section className="section-padding">
        <Container size="narrow">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-soft-white uppercase mb-4">
              Book Your Appointment
            </h1>
            <p className="text-soft-white/70 text-lg">
              Fill out the form below to reserve your spot
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 p-6 bg-heat/10 border border-heat text-heat">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-display text-lg uppercase">Booking Confirmed!</h3>
                  <p className="text-sm text-heat/80">
                    We've sent a confirmation email with your appointment details.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                    Service *
                  </label>
                  <select
                    {...register('serviceId')}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id} className="bg-carbon">
                        {service.name} - ${service.price}
                      </option>
                    ))}
                  </select>
                  {errors.serviceId && (
                    <p className="mt-1 text-xs text-heat">{errors.serviceId.message}</p>
                  )}
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                      First Name *
                    </label>
                    <input
                      {...register('firstName')}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-heat">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName')}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-heat">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-heat">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-heat">{errors.phone.message}</p>}
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                      Date *
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      min={formatDateInput(availableDates[0])}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                    />
                    {errors.date && <p className="mt-1 text-xs text-heat">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                      Time *
                    </label>
                    <select
                      {...register('time')}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-carbon">
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="mt-1 text-xs text-heat">{errors.time.message}</p>}
                  </div>
                </div>

                {/* Barber Selection */}
                <div>
                  <label htmlFor="barberId" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                    Preferred Barber (Optional)
                  </label>
                  <select
                    {...register('barberId')}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                  >
                    <option value="">No preference</option>
                    {teamMembers.map((barber) => (
                      <option key={barber.id} value={barber.id} className="bg-carbon">
                        {barber.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <textarea
                    {...register('additionalNotes')}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors resize-none"
                    placeholder="Any special requests or preferences..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="font-display text-xl text-soft-white uppercase mb-4">
                  Visit Us
                </h3>
                <div className="space-y-4 text-soft-white/80">
                  <div>
                    <p className="font-medium text-soft-white mb-1">Address</p>
                    <p className="text-sm">
                      {companyInfo.address.street}
                      <br />
                      {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-soft-white mb-1">Phone</p>
                    <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-heat transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-soft-white mb-1">Email</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-heat transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <svg className="w-12 h-12 text-heat mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-soft-white/60">
                    Map integration placeholder
                    <br />
                    <span className="text-xs">Google Maps API would be integrated here</span>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="font-display text-xl text-soft-white uppercase mb-4">Hours</h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(companyInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-soft-white/80">
                      <span className="font-medium">{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
