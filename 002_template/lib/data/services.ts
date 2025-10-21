import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'signature-fade',
    name: 'Signature Fade',
    category: 'haircut',
    price: 45,
    duration: 45,
    description: 'Clean, precise fade with scissor work on top',
    longDescription: 'Our signature fade combines classic barbering techniques with modern styling. Includes consultation, precision fade, scissor work, styling, and hot towel finish.',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800',
    ],
    featured: true,
    benefits: [
      'Precision fade technique',
      'Custom length consultation',
      'Hot towel finish',
      'Complimentary styling product',
    ],
    relatedServices: ['beard-trim', 'edge-up'],
  },
  {
    id: 'executive-cut',
    name: 'Executive Cut',
    category: 'haircut',
    price: 55,
    duration: 60,
    description: 'Professional cut with scalp massage and premium finish',
    longDescription: 'The ultimate professional grooming experience. Includes scalp massage, precision cut, wash, styling, and grooming product application.',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800',
    ],
    featured: true,
    benefits: [
      'Relaxing scalp massage',
      'Premium hair wash',
      'Luxury grooming products',
      'Extended styling session',
    ],
    relatedServices: ['beard-sculpt', 'facial-grooming'],
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    category: 'beard',
    price: 25,
    duration: 20,
    description: 'Shape and define your beard with precision trimming',
    longDescription: 'Expert beard shaping and maintenance using professional clippers and scissors. Includes edge definition, hot towel treatment, and beard oil application.',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800',
    ],
    featured: false,
    benefits: [
      'Precision edge work',
      'Hot towel treatment',
      'Premium beard oil',
      'Shape consultation',
    ],
    relatedServices: ['signature-fade', 'beard-sculpt'],
  },
  {
    id: 'beard-sculpt',
    name: 'Beard Sculpt',
    category: 'beard',
    price: 35,
    duration: 30,
    description: 'Complete beard transformation with shaping and styling',
    longDescription: 'Comprehensive beard grooming service including trimming, shaping, edge work, and premium product application for maximum definition.',
    images: [
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800',
    ],
    featured: true,
    benefits: [
      'Full beard reshape',
      'Multi-length layering',
      'Premium oils & balms',
      'Styling tutorial',
    ],
    relatedServices: ['executive-cut', 'facial-grooming'],
  },
  {
    id: 'edge-up',
    name: 'Edge Up & Lineup',
    category: 'grooming',
    price: 20,
    duration: 15,
    description: 'Sharp, clean edges and hairline definition',
    longDescription: 'Crisp edge work for a fresh, clean look. Perfect for maintaining your style between full cuts.',
    images: [
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
    ],
    featured: false,
    benefits: [
      'Precision edge work',
      'Hairline definition',
      'Quick refresh',
    ],
    relatedServices: ['signature-fade', 'beard-trim'],
  },
  {
    id: 'buzz-cut',
    name: 'Buzz Cut',
    category: 'haircut',
    price: 30,
    duration: 20,
    description: 'Classic all-over clipper cut',
    longDescription: 'Clean, uniform clipper cut with edge work. Simple, low-maintenance, and timeless.',
    images: [
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800',
    ],
    featured: false,
    benefits: [
      'Quick & efficient',
      'Low maintenance',
      'Clean finish',
    ],
    relatedServices: ['edge-up'],
  },
  {
    id: 'texture-styling',
    name: 'Texture & Styling',
    category: 'styling',
    price: 40,
    duration: 45,
    description: 'Advanced styling with premium products',
    longDescription: 'Professional styling session using premium products. Learn techniques to recreate the look at home.',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
    ],
    featured: true,
    benefits: [
      'Premium styling products',
      'Styling tutorial',
      'Product recommendations',
      'Take-home styling guide',
    ],
    relatedServices: ['executive-cut'],
  },
  {
    id: 'color-treatment',
    name: 'Color Treatment',
    category: 'coloring',
    price: 85,
    duration: 90,
    description: 'Professional hair coloring and gray coverage',
    longDescription: 'Expert color application including consultation, processing, and aftercare. Natural-looking results with premium products.',
    images: [
      'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800',
    ],
    featured: false,
    benefits: [
      'Color consultation',
      'Premium color products',
      'Gray coverage',
      'Aftercare products',
    ],
    relatedServices: ['executive-cut'],
  },
  {
    id: 'scalp-treatment',
    name: 'Scalp Treatment',
    category: 'treatment',
    price: 50,
    duration: 45,
    description: 'Revitalizing scalp massage and treatment',
    longDescription: 'Therapeutic scalp treatment with massage, deep cleansing, and nourishing products to promote healthy hair growth.',
    images: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800',
    ],
    featured: false,
    benefits: [
      'Deep scalp massage',
      'Cleansing treatment',
      'Nourishing oils',
      'Circulation boost',
    ],
    relatedServices: ['executive-cut'],
  },
  {
    id: 'facial-grooming',
    name: 'Facial Grooming',
    category: 'grooming',
    price: 30,
    duration: 30,
    description: 'Complete facial hair grooming and maintenance',
    longDescription: 'Comprehensive facial grooming including eyebrow trimming, nose/ear hair removal, and face cleanup.',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800',
    ],
    featured: false,
    benefits: [
      'Eyebrow trimming',
      'Nose & ear grooming',
      'Face cleanup',
      'Finishing products',
    ],
    relatedServices: ['beard-sculpt', 'executive-cut'],
  },
  {
    id: 'kids-cut',
    name: 'Kids Cut (12 & Under)',
    category: 'haircut',
    price: 30,
    duration: 30,
    description: 'Patient, professional cuts for young clients',
    longDescription: 'Child-friendly haircut experience with patient, experienced barbers. Making the first cut experience memorable.',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
    ],
    featured: false,
    benefits: [
      'Patient approach',
      'Kid-friendly environment',
      'Quick & efficient',
      'First cut certificate',
    ],
    relatedServices: [],
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    category: 'grooming',
    price: 45,
    duration: 40,
    description: 'Traditional straight razor shave with hot towels',
    longDescription: 'Classic barbershop experience with hot towel preparation, straight razor shave, aftershave treatment, and moisturizing.',
    images: [
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800',
    ],
    featured: true,
    benefits: [
      'Hot towel preparation',
      'Straight razor technique',
      'Luxury aftershave',
      'Face moisturizer',
    ],
    relatedServices: ['beard-sculpt', 'facial-grooming'],
  },
];

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  if (category === 'all') return services;
  return services.filter(service => service.category === category);
};

export const getRelatedServices = (serviceId: string, limit: number = 3): Service[] => {
  const service = getServiceById(serviceId);
  if (!service || !service.relatedServices) return [];

  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is Service => s !== undefined)
    .slice(0, limit);
};
