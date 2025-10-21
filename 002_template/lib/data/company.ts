import { CompanyInfo } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'BARBERSHOP',
  tagline: 'Where Style Meets Street',
  address: {
    street: '123 Urban Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
  },
  phone: '(718) 555-CUTS',
  email: 'book@barbershop.com',
  hours: {
    Monday: 'Closed',
    Tuesday: '10:00 AM - 8:00 PM',
    Wednesday: '10:00 AM - 8:00 PM',
    Thursday: '10:00 AM - 8:00 PM',
    Friday: '10:00 AM - 9:00 PM',
    Saturday: '9:00 AM - 9:00 PM',
    Sunday: '10:00 AM - 6:00 PM',
  },
  coordinates: {
    lat: 40.6942,
    lng: -73.9866,
  },
  social: {
    instagram: undefined,
    tiktok: undefined,
    facebook: undefined,
    twitter: undefined,
  },
};
