// Core type definitions for the Barbershop application

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  duration: number; // in minutes
  description: string;
  longDescription: string;
  images: string[];
  featured: boolean;
  relatedServices?: string[];
  benefits?: string[];
}

export type ServiceCategory =
  | 'haircut'
  | 'beard'
  | 'styling'
  | 'grooming'
  | 'coloring'
  | 'treatment';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: number; // years
  instagram?: string;
  featured?: boolean;
}

export interface CartItem {
  service: Service;
  quantity: number;
  selectedBarber?: TeamMember;
  selectedDate?: Date;
  selectedTime?: string;
}

export interface BookingInfo {
  service: Service;
  barber?: TeamMember;
  date: Date;
  time: string;
  customerInfo: CustomerInfo;
  additionalNotes?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface CheckoutFormData {
  // Customer details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Booking details
  date: string;
  time: string;
  barberId?: string;

  // Payment details
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;

  // Additional
  newsletter: boolean;
  termsAccepted: boolean;
}

export interface FilterOptions {
  category?: ServiceCategory | 'all';
  priceRange?: {
    min: number;
    max: number;
  };
  duration?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc' | 'name';

export interface NewsletterSubscription {
  email: string;
  source: 'footer' | 'home' | 'checkout';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  social: {
    instagram?: string;
    tiktok?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
