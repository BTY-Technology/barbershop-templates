import { z } from 'zod';

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

// Booking form validation
export const bookingSchema = z.object({
  serviceId: z.string().min(1, 'Please select a service'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  barberId: z.string().optional(),
  additionalNotes: z.string().optional(),
});

// Checkout form validation
export const checkoutSchema = z.object({
  // Customer details
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),

  // Booking details
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  barberId: z.string().optional(),

  // Payment details (mock validation)
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, 'Card number must be 16 digits')
    .or(z.string().regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Card number must be 16 digits')),
  cardholderName: z.string().min(3, 'Please enter the cardholder name'),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format'),
  cvv: z.string().regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),

  // Additional
  newsletter: z.boolean().default(false),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type BookingFormData = z.infer<typeof bookingSchema>;
export type CheckoutFormData = z.infer<typeof checkoutSchema>;
