'use client'

import React, { useState, FormEvent } from 'react'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { validateField } from '@/utils/validation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    const newErrors: Record<string, string> = {}

    const nameError = validateField('Name', formData.name, {
      required: true,
      minLength: 2,
    })
    if (nameError) newErrors.name = nameError

    const emailError = validateField('Email', formData.email, {
      required: true,
      email: true,
    })
    if (emailError) newErrors.email = emailError

    const subjectError = validateField('Subject', formData.subject, {
      required: true,
      minLength: 3,
    })
    if (subjectError) newErrors.subject = subjectError

    const messageError = validateField('Message', formData.message, {
      required: true,
      minLength: 10,
    })
    if (messageError) newErrors.message = messageError

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setErrors({})

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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
            Get In Touch
          </p>
          <h1 className="text-5xl sm:text-7xl font-playfair font-light tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container-custom max-w-6xl">
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
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <Input
                    id="name"
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    disabled={loading}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
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
                      helperText="Optional"
                      disabled={loading}
                    />
                  </div>

                  <Input
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    required
                    disabled={loading}
                  />

                  <Textarea
                    id="message"
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    disabled={loading}
                    placeholder="Tell us how we can help you..."
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <h3 className="text-xl font-playfair font-semibold">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
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
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Address</p>
                      <p className="text-gray-600 text-sm">
                        123 Main Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
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
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 text-sm hover:text-accent transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
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
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Email</p>
                      <a
                        href="mailto:contact@barbershop.com"
                        className="text-gray-600 text-sm hover:text-accent transition-colors"
                      >
                        contact@barbershop.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
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
                    <div>
                      <p className="font-semibold text-primary mb-1">Hours</p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Follow Us
                </h3>

                <div className="flex gap-4">
                  {[
                    {
                      name: 'Instagram',
                      icon: (
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      ),
                    },
                    {
                      name: 'Facebook',
                      icon: (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      ),
                    },
                    {
                      name: 'Twitter',
                      icon: (
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      ),
                    },
                  ].map((social) => (
                    <div
                      key={social.name}
                      className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent"
                      aria-label={social.name}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white pt-0">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
