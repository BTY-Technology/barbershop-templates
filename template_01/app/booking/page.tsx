'use client'

import React, { useState, FormEvent, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { services, getServiceById } from '@/lib/data/services'
import { validateBookingForm } from '@/utils/validation'
import { BookingFormData, FormErrors } from '@/types'

export default function BookingPage() {
  const searchParams = useSearchParams()
  const preselectedServiceId = searchParams.get('service')

  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: preselectedServiceId || '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  })

  const [errors, setErrors] = useState<FormErrors<BookingFormData>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    ...services.map((service) => ({
      value: service.id,
      label: `${service.name} - $${service.price}`,
    })),
  ]

  const timeOptions = [
    { value: '', label: 'Select a time' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '18:00', label: '6:00 PM' },
  ]

  const selectedService = formData.service ? getServiceById(formData.service) : null

  // Get minimum date (tomorrow)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    // Validate form
    const validationErrors = validateBookingForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }

    setLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      setSuccess(true)
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        notes: '',
      })

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      setErrors({ email: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 mt-20">
        <div className="container-custom text-center">
          <p className="text-text text-sm uppercase tracking-widest mb-4">
            Book Appointment
          </p>
          <h1 className="text-5xl sm:text-7xl font-playfair font-light tracking-tight mb-6">
            Reserve Your Spot
          </h1>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Choose your service, preferred time, and let our master barbers take care of the rest.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          {success && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-1">
                    Booking Confirmed!
                  </h3>
                  <p className="text-green-700">
                    Thank you for booking with us. We've sent a confirmation email to{' '}
                    {formData.email}. We look forward to seeing you!
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">
                  Booking Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      required
                      disabled={loading}
                    />

                    <Input
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      required
                      disabled={loading}
                    />
                  </div>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    disabled={loading}
                  />

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="(555) 123-4567"
                    required
                    disabled={loading}
                  />

                  {/* Service Selection */}
                  <Select
                    id="service"
                    name="service"
                    label="Service"
                    value={formData.service}
                    onChange={handleChange}
                    options={serviceOptions}
                    error={errors.service}
                    required
                    disabled={loading}
                  />

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      label="Preferred Date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      error={errors.preferredDate}
                      min={minDate}
                      required
                      disabled={loading}
                    />

                    <Select
                      id="preferredTime"
                      name="preferredTime"
                      label="Preferred Time"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      options={timeOptions}
                      error={errors.preferredTime}
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Additional Notes */}
                  <Textarea
                    id="notes"
                    name="notes"
                    label="Additional Notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any specific requests or preferences?"
                    helperText="Optional - Let us know if you have any special requests"
                    disabled={loading}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                  >
                    Confirm Booking
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Summary */}
              {selectedService && (
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <h3 className="text-xl font-playfair font-semibold">
                    Booking Summary
                  </h3>

                  <div className="border-t pt-4 space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <p className="font-semibold">{selectedService.name}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{selectedService.duration} minutes</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-semibold text-accent text-2xl">
                        ${selectedService.price}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <h3 className="text-xl font-playfair font-semibold">Contact Us</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 Main Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contact@barbershop.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barbershop location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
