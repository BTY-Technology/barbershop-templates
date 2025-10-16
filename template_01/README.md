# Barbershop - Next.js Template

A modern, fully-responsive barbershop website template built with Next.js 14, TypeScript, and Tailwind CSS. Features a complete booking system, service catalog, team profiles, and more.

![Barbershop Template](https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80)

## Features

- ✨ **Modern Design**: Clean, barbershop-inspired design with smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Next.js 14 App Router**: Latest Next.js features with server-side rendering
- 🎨 **Tailwind CSS**: Utility-first CSS for rapid UI development
- 📝 **TypeScript**: Type-safe code for better development experience
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- 📦 **Component Library**: Reusable UI components (Button, Input, Card, etc.)
- 🎯 **Service Catalog**: Filterable and sortable service listings
- 📅 **Booking System**: Complete booking form with validation
- 👥 **Team Profiles**: Showcase your barbers with detailed profiles
- 💬 **Testimonials**: Animated testimonial slider
- 📧 **Newsletter**: Newsletter signup integration
- 🗺️ **Google Maps**: Embedded map for location
- 🎨 **Image Optimization**: Next.js Image component for optimal loading

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display, Open Sans)
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/barbershop-templates.git
cd barbershop-templates
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your configuration:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BUSINESS_EMAIL=contact@barbershop.com
NEXT_PUBLIC_BUSINESS_PHONE=+1-555-123-4567
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Main Street, New York, NY 10001
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
barbershop-templates/
├── app/                      # Next.js 14 App Router
│   ├── about/               # About page
│   ├── booking/             # Booking page
│   ├── contact/             # Contact page
│   ├── services/            # Services pages
│   │   └── [slug]/         # Dynamic service pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── providers.tsx        # Client providers
├── components/              # React components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── ui/                 # UI components (Button, Input, etc.)
│   ├── BackToTop.tsx       # Back to top button
│   ├── ImageZoom.tsx       # Image zoom component
│   ├── NewsletterForm.tsx  # Newsletter form
│   ├── ServiceCard.tsx     # Service card component
│   └── TestimonialSlider.tsx # Testimonial slider
├── lib/                     # Library code
│   ├── context/            # React context
│   │   └── BookingContext.tsx
│   └── data/               # Mock data
│       ├── services.ts
│       ├── team.ts
│       └── testimonials.ts
├── types/                   # TypeScript type definitions
│   └── index.ts
├── utils/                   # Utility functions
│   └── validation.ts       # Form validation
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Pages

### Home Page (`/`)

- Hero section with call-to-action
- About section with images
- Featured services grid
- Process timeline
- Testimonial slider
- Newsletter signup

### Services Page (`/services`)

- Service grid with filtering
- Category filter
- Price range filter
- Sort options (popular, price, name, duration)
- Search functionality

### Service Detail Page (`/services/[slug]`)

- High-quality service images with zoom
- Detailed service description
- Benefits and features list
- Pricing and duration
- Related services
- Book now CTA

### About Page (`/about`)

- Mission and values
- Company story
- Team member profiles with specialties
- Stats and achievements

### Booking Page (`/booking`)

- Multi-step booking form
- Service selection
- Date and time picker
- Form validation
- Booking summary
- Contact information
- Embedded map

### Contact Page (`/contact`)

- Contact form
- Business information
- Operating hours
- Social media links
- Google Maps integration

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#2B2B2B',      // Charcoal Black
  secondary: '#FAF7F2',    // Cream White
  accent: '#B22222',       // Deep Red
  'accent-hover': '#8B1A1A',
  background: '#C0C0C0',   // Metallic Silver
  text: '#E0C7A9',         // Warm Beige
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. To change fonts:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### Content

1. **Services**: Edit `lib/data/services.ts`
2. **Team Members**: Edit `lib/data/team.ts`
3. **Testimonials**: Edit `lib/data/testimonials.ts`

### Images

Replace placeholder images with your own:

- Use high-quality images (1920x1080 or larger)
- Optimize images before uploading
- Consider using a CDN for better performance

## Building for Production

```bash
npm run build
npm start
```

This will create an optimized production build in the `.next` folder.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/barbershop-templates)

### Other Platforms

This Next.js app can be deployed to:

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Node.js

## Performance

This template is optimized for performance:

- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible
- ✅ Image optimization with Next.js Image
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email wcole@btytechnology.com or open an issue in the repository.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from Heroicons
- Fonts from Google Fonts

---

Built with ❤️ by BTY Technology
