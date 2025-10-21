import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartModal } from '@/components/ui/CartModal';
import { CartProvider } from '@/context/CartContext';
import { companyInfo } from '@/lib/data/company';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} - ${companyInfo.tagline}`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    'Premium barbershop services with a bold streetwear aesthetic. Expert cuts, beard sculpting, and grooming in Brooklyn, NY.',
  keywords: [
    'barbershop',
    'haircut',
    'beard trim',
    'men\'s grooming',
    'Brooklyn',
    'NYC',
    'fade',
    'styling',
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: companyInfo.name,
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: 'Premium barbershop services with a bold streetwear aesthetic.',
  },
  twitter: {
    card: 'summary_large_image',
    title: companyInfo.name,
    description: 'Premium barbershop services with a bold streetwear aesthetic.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-sans bg-carbon text-soft-white antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <CartModal />
        </CartProvider>
      </body>
    </html>
  );
}
