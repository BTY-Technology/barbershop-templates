'use client'

import React, { useState, FormEvent } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { validateNewsletterForm } from '@/utils/validation'
import { FormErrors, NewsletterFormData } from '@/types'

export default function NewsletterForm() {
  const [formData, setFormData] = useState<NewsletterFormData>({ email: '' })
  const [errors, setErrors] = useState<FormErrors<NewsletterFormData>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    // Validate form
    const validationErrors = validateNewsletterForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success
      setSuccess(true)
      setFormData({ email: '' })

      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      setErrors({ email: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
            error={errors.email}
            aria-label="Email address for newsletter"
            disabled={loading}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          loading={loading}
          disabled={loading || success}
        >
          {success ? 'Subscribed!' : 'Subscribe'}
        </Button>
      </div>

      {success && (
        <p className="text-green-600 text-sm mt-2" role="status">
          Thanks for subscribing! Check your inbox for confirmation.
        </p>
      )}
    </form>
  )
}
