import { Service } from '@/types'

export const services: Service[] = [
  {
    id: '1',
    name: 'Classic Haircut',
    slug: 'classic-haircut',
    description: 'Traditional precision haircut with styling',
    longDescription: 'Experience the timeless art of barbering with our classic haircut service. Our skilled barbers combine traditional techniques with modern styling to give you a sharp, clean look that suits your personal style.',
    price: 45,
    duration: 45,
    category: 'haircut',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
      'https://images.unsplash.com/photo-1622286346003-c3d0e5623ad5?w=800&q=80',
    ],
    popular: true,
    featured: true,
    benefits: [
      'Consultation on best style for face shape',
      'Precision cutting with premium tools',
      'Styling and product recommendations',
      'Hot towel finish',
    ],
    suitable: ['All hair types', 'Business professionals', 'Classic style enthusiasts'],
  },
  {
    id: '2',
    name: 'Beard Trim & Shape',
    slug: 'beard-trim-shape',
    description: 'Professional beard grooming and shaping',
    longDescription: 'Maintain your beard in pristine condition with our expert trimming and shaping service. We sculpt and define your beard to complement your facial features perfectly.',
    price: 30,
    duration: 30,
    category: 'beard',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    ],
    popular: true,
    featured: false,
    benefits: [
      'Precision trimming and edging',
      'Beard oil application',
      'Hot towel treatment',
      'Styling advice',
    ],
    suitable: ['All beard lengths', 'Beard maintenance', 'Special occasions'],
  },
  {
    id: '3',
    name: 'Premium Package',
    slug: 'premium-package',
    description: 'Complete grooming experience - haircut, beard, and facial',
    longDescription: 'Indulge in the ultimate barbershop experience. This comprehensive package includes a premium haircut, beard grooming, and a relaxing facial treatment for the complete transformation.',
    price: 120,
    duration: 120,
    category: 'package',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
      'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=800&q=80',
    ],
    popular: true,
    featured: true,
    benefits: [
      'Full haircut service',
      'Complete beard grooming',
      'Deep cleansing facial',
      'Hot towel treatments',
      'Complimentary beverage',
      'Premium product application',
    ],
    suitable: ['Special occasions', 'Monthly maintenance', 'Self-care day'],
  },
  {
    id: '4',
    name: 'Fade & Taper',
    slug: 'fade-taper',
    description: 'Modern fade cuts with expert blending',
    longDescription: 'Get that sharp, contemporary look with our precision fade cuts. From low to high fades, our barbers master the art of seamless blending for a clean, modern style.',
    price: 55,
    duration: 60,
    category: 'haircut',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
      'https://images.unsplash.com/photo-1620331062075-b650d1b862f0?w=800&q=80',
    ],
    popular: true,
    featured: true,
    benefits: [
      'Low, mid, or high fade options',
      'Precision clipper work',
      'Expert blending techniques',
      'Detailed edge work',
      'Styling included',
    ],
    suitable: ['Modern styles', 'Active lifestyles', 'Low maintenance'],
  },
  {
    id: '5',
    name: 'Hot Shave',
    slug: 'hot-shave',
    description: 'Traditional straight razor shave experience',
    longDescription: 'Experience the luxury of a traditional hot towel shave. Using time-honored techniques and a straight razor, we deliver the closest, smoothest shave possible.',
    price: 40,
    duration: 45,
    category: 'grooming',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
    ],
    popular: false,
    featured: false,
    benefits: [
      'Hot towel preparation',
      'Premium shaving cream',
      'Straight razor technique',
      'Post-shave balm',
      'Incredibly smooth results',
    ],
    suitable: ['Special occasions', 'Clean-shaven preference', 'Luxury experience'],
  },
  {
    id: '6',
    name: 'Kids Cut',
    slug: 'kids-cut',
    description: 'Gentle haircuts for children aged 12 and under',
    longDescription: 'We make haircuts fun and comfortable for kids. Our patient barbers ensure your child gets a great haircut in a welcoming, child-friendly environment.',
    price: 25,
    duration: 30,
    category: 'kids',
    image: 'https://images.unsplash.com/photo-1503342564391-ebb28fc32ffe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503342564391-ebb28fc32ffe?w=800&q=80',
    ],
    popular: false,
    featured: false,
    benefits: [
      'Child-friendly environment',
      'Patient, experienced barbers',
      'Quick and efficient',
      'Fun atmosphere',
      'Parent can stay close',
    ],
    suitable: ['Ages 12 and under', 'First haircuts', 'School haircuts'],
  },
  {
    id: '7',
    name: 'Hair Styling',
    slug: 'hair-styling',
    description: 'Professional styling for special events',
    longDescription: 'Look your absolute best for that special event. Our styling service includes consultation, styling, and product application for a look that lasts all day.',
    price: 35,
    duration: 30,
    category: 'styling',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    ],
    popular: false,
    featured: false,
    benefits: [
      'Style consultation',
      'Premium product application',
      'Long-lasting results',
      'Product recommendations',
    ],
    suitable: ['Weddings', 'Photo shoots', 'Special events'],
  },
  {
    id: '8',
    name: 'Scalp Treatment',
    slug: 'scalp-treatment',
    description: 'Therapeutic scalp massage and treatment',
    longDescription: 'Rejuvenate your scalp with our specialized treatment. Including deep cleansing, massage, and nourishing treatments to promote healthy hair growth.',
    price: 50,
    duration: 45,
    category: 'grooming',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    ],
    popular: false,
    featured: false,
    benefits: [
      'Deep scalp cleansing',
      'Therapeutic massage',
      'Nourishing treatment application',
      'Promotes hair health',
      'Relaxing experience',
    ],
    suitable: ['Dry scalp', 'Hair thinning concerns', 'Relaxation'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

export function getPopularServices(): Service[] {
  return services.filter((service) => service.popular)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category)
}
