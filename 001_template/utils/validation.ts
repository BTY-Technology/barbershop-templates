import { FormErrors } from '@/types'

// Email validation
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation (US format)
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)]+$/
  const digitsOnly = phone.replace(/\D/g, '')
  return phoneRegex.test(phone) && digitsOnly.length >= 10
}

// Name validation
export function validateName(name: string): boolean {
  return name.trim().length >= 2
}

// Required field validation
export function validateRequired(value: string): boolean {
  return value.trim().length > 0
}

// Generic form validation helper
export function validateField(
  fieldName: string,
  value: string,
  rules: {
    required?: boolean
    email?: boolean
    phone?: boolean
    minLength?: number
    maxLength?: number
  }
): string | null {
  if (rules.required && !validateRequired(value)) {
    return `${fieldName} is required`
  }

  if (rules.email && value && !validateEmail(value)) {
    return 'Please enter a valid email address'
  }

  if (rules.phone && value && !validatePhone(value)) {
    return 'Please enter a valid phone number'
  }

  if (rules.minLength && value.length < rules.minLength) {
    return `${fieldName} must be at least ${rules.minLength} characters`
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return `${fieldName} must be no more than ${rules.maxLength} characters`
  }

  return null
}

// Booking form validation
export function validateBookingForm(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
}): FormErrors<typeof data> {
  const errors: FormErrors<typeof data> = {}

  const firstNameError = validateField('First name', data.firstName, {
    required: true,
    minLength: 2,
  })
  if (firstNameError) errors.firstName = firstNameError

  const lastNameError = validateField('Last name', data.lastName, {
    required: true,
    minLength: 2,
  })
  if (lastNameError) errors.lastName = lastNameError

  const emailError = validateField('Email', data.email, {
    required: true,
    email: true,
  })
  if (emailError) errors.email = emailError

  const phoneError = validateField('Phone', data.phone, {
    required: true,
    phone: true,
  })
  if (phoneError) errors.phone = phoneError

  if (!validateRequired(data.service)) {
    errors.service = 'Please select a service'
  }

  if (!validateRequired(data.preferredDate)) {
    errors.preferredDate = 'Please select a date'
  }

  if (!validateRequired(data.preferredTime)) {
    errors.preferredTime = 'Please select a time'
  }

  return errors
}

// Newsletter form validation
export function validateNewsletterForm(data: {
  email: string
}): FormErrors<typeof data> {
  const errors: FormErrors<typeof data> = {}

  const emailError = validateField('Email', data.email, {
    required: true,
    email: true,
  })
  if (emailError) errors.email = emailError

  return errors
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return phone
}

// Format price for display
export function formatPrice(price: number): string {
  return `$${price.toFixed(0)}`
}

// Format duration for display
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours} hr`
  }
  return `${hours} hr ${remainingMinutes} min`
}
