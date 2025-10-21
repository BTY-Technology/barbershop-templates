# Barbershop - Premium Grooming Services Website

A bold, modern barbershop website template built with Next.js 14, featuring a streetwear-inspired aesthetic, complete e-commerce functionality, and comprehensive booking system.

## Features

### Core Functionality
- 🏠 **Home Page**: Hero section, featured services showcase, stats, and CTAs
- 💈 **Service Catalog**: Filterable and sortable service listings with categories
- 📄 **Service Detail Pages**: High-quality image galleries, detailed descriptions, related services
- 👥 **About Us**: Team profiles with specialties and social links
- 📅 **Booking System**: Complete appointment booking with date/time selection
- 🛒 **Shopping Cart**: Cart management with persistent storage
- 💳 **Multi-Step Checkout**: Customer details, payment processing, confirmation

### Technical Features
- ⚡ **Next.js 14 App Router**: Server-side rendering for optimal performance
- 📱 **Fully Responsive**: Mobile-first design with breakpoints at 576/768/992/1200px
- 🎨 **Tailwind CSS**: Custom streetwear theme with bold typography
- 🎭 **Framer Motion**: Smooth animations and transitions
- 📝 **TypeScript**: Full type safety throughout
- ✅ **Form Validation**: Zod schemas with react-hook-form
- 🌐 **SEO Optimized**: Meta tags, Open Graph, structured data
- ♿ **WCAG Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- 🎯 **State Management**: React Context API for cart and booking
- 💾 **Local Storage**: Cart persistence across sessions

### Design System
- **Color Palette**:
  - Ink Black (#0B0B0B)
  - Heat Red (#FF3B30)
  - Neon Cyan (#00E5FF)
  - Carbon (#121212)
  - Soft White (#EAEAEA)
- **Typography**: Bebas Neue (display) + Inter (body)
- **Components**: Reusable UI library with Button, Card, Container, Form inputs

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Date Handling**: [date-fns](https://date-fns.org/)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. **Download Bebas Neue font** (optional):

Download Bebas Neue font from [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue) and place the TTF file in:
```
public/fonts/BebasNeue-Regular.ttf
```

Or update `app/layout.tsx` to use Google Fonts CDN instead of local font.

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
barbershop-template/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with fonts & providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles & Tailwind
│   ├── services/                # Service pages
│   │   ├── page.tsx            # Service catalog with filters
│   │   └── [id]/page.tsx       # Service detail pages
│   ├── about/page.tsx           # About us & team
│   ├── booking/page.tsx         # Appointment booking
│   └── checkout/page.tsx        # Multi-step checkout
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── ServiceCard.tsx
│   └── layout/                  # Layout components
│       ├── Header.tsx           # Sticky header with mobile menu
│       └── Footer.tsx           # Three-column footer
├── context/
│   └── CartContext.tsx          # Shopping cart state management
├── lib/
│   ├── data/                    # Mock data
│   │   ├── services.ts          # Service listings
│   │   ├── team.ts              # Team members
│   │   └── company.ts           # Company info
│   ├── utils.ts                 # Utility functions
│   └── validations.ts           # Zod schemas
├── types/
│   └── index.ts                 # TypeScript type definitions
├── public/
│   ├── fonts/                   # Custom fonts (Bebas Neue)
│   └── images/                  # Static images
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind theme customization
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Pages Overview

### Home (`/`)
- Hero section with brand introduction
- Featured services grid (6 services)
- Why choose us section
- Call-to-action sections
- Statistics display

### Services (`/services`)
- Complete service catalog (12 services)
- Category filtering (All, Haircut, Beard, Grooming, etc.)
- Sort options (Name, Price, Duration)
- Search functionality
- Responsive grid layout

### Service Detail (`/services/[id]`)
- Full-size hero image
- Detailed service description
- Pricing and duration
- Benefits list
- Image gallery
- Related services
- Book now CTA

### About (`/about`)
- Company story
- Mission statement
- Team member profiles (6 barbers)
- Specialty tags
- Social media links
- Experience indicators

### Booking (`/booking`)
- Service selection dropdown
- Personal information form
- Date and time picker
- Barber preference
- Contact information display
- Map integration placeholder
- Business hours

### Checkout (`/checkout`)
- **Step 1**: Cart review with quantity controls
- **Step 2**: Customer details and appointment booking
- **Step 3**: Mock payment form (test mode)
- **Confirmation**: Order summary with order number
- Progress indicator
- Sticky order summary

## Customization Guide

### 1. Update Company Information

Edit `lib/data/company.ts`:
```typescript
export const companyInfo: CompanyInfo = {
  name: 'Your Barbershop Name',
  address: { /* your address */ },
  // ... other details
}
```

### 2. Customize Services

Edit `lib/data/services.ts` to add, remove, or modify services.

### 3. Update Team Members

Edit `lib/data/team.ts` with your actual team information.

### 4. Change Color Scheme

Edit `tailwind.config.ts`:
```typescript
colors: {
  ink: '#YourColor',
  heat: '#YourAccent',
  // ...
}
```

### 5. Replace Images

Update image URLs in:
- Service data (`lib/data/services.ts`)
- Team data (`lib/data/team.ts`)
- Page components (hero images, etc.)

Use your own images or integrate with a CMS/image service.

### 6. Add Google Maps

In `app/booking/page.tsx`, replace the map placeholder with:
```tsx
<iframe
  src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
  className="w-full h-full"
  loading="lazy"
/>
```

### 7. Integrate Real Payment Gateway

Replace the mock payment in `app/checkout/page.tsx` with:
- [Stripe](https://stripe.com/)
- [Square](https://squareup.com/)
- [PayPal](https://www.paypal.com/)

### 8. Add Analytics

Add to `app/layout.tsx`:
- Google Analytics
- Facebook Pixel
- Other tracking scripts

## Environment Variables

Create `.env.local`:

```env
# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

# Stripe (optional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_secret

# Email service (optional)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@yourdomain.com
```

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Pre-deployment Checklist

- [ ] Replace all mock data with real content
- [ ] Add real images (optimized WebP/AVIF)
- [ ] Download and add Bebas Neue font
- [ ] Set up environment variables
- [ ] Configure payment gateway
- [ ] Add Google Maps API key
- [ ] Set up analytics tracking
- [ ] Test all forms and validation
- [ ] Test responsive design on real devices
- [ ] Run accessibility audit
- [ ] Test SEO with Google tools
- [ ] Set up error monitoring (Sentry, etc.)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

- **Netlify**: `npm run build` outputs to `.next/`
- **AWS Amplify**: Follow Next.js deployment guide
- **DigitalOcean**: Use App Platform
- **Self-hosted**: Use PM2 or Docker

## Performance Optimization

- ✅ Image optimization with Next.js Image
- ✅ Code splitting with App Router
- ✅ Font optimization with next/font
- ✅ CSS optimization with Tailwind purge
- ✅ Lazy loading for images and components
- ✅ Server-side rendering for SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Focus indicators
- Screen reader friendly

## Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch
```

## Troubleshooting

### Font not loading
- Ensure Bebas Neue TTF is in `public/fonts/`
- Or use Google Fonts CDN in `app/layout.tsx`

### Images not displaying
- Check Unsplash URLs are accessible
- Add domains to `next.config.js` remotePatterns

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (18.0+)

## Support

For issues, questions, or contributions, please contact BTY Technology.

## License

This project is licensed under the MIT License.

---

**Built with ❤️ by BTY Technology**

Template Version: 002
Last Updated: 2025
