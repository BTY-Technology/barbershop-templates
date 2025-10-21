// Service types
export interface Service {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  duration: number // in minutes
  category: ServiceCategory
  image: string
  images: string[]
  popular: boolean
  featured: boolean
  benefits: string[]
  suitable: string[]
}

export type ServiceCategory =
  | 'haircut'
  | 'beard'
  | 'styling'
  | 'grooming'
  | 'package'
  | 'kids'

export interface ServiceFilter {
  category?: ServiceCategory
  priceRange?: {
    min: number
    max: number
  }
  search?: string
}

export type ServiceSortOption =
  | 'popular'
  | 'price-low'
  | 'price-high'
  | 'name'
  | 'duration'

// Booking types
export interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
  notes?: string
}

export interface BookingState {
  selectedService: Service | null
  bookingData: Partial<BookingFormData>
  step: number
}

// Team member types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  specialties: string[]
  experience: number
  social?: {
    instagram?: string
    twitter?: string
  }
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  content: string
  rating: number
}

// Newsletter types
export interface NewsletterFormData {
  email: string
}

// Form validation errors
export type FormErrors<T> = {
  [K in keyof T]?: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// SEO types
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}
