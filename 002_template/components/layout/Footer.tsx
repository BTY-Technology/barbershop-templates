'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/lib/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-white/10 text-soft-white">
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl text-heat uppercase tracking-wider mb-4">
                Barbershop
              </h3>
              <p className="text-sm text-soft-white/70">{companyInfo.tagline}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-sm uppercase tracking-wide text-soft-white">
                Hours
              </h4>
              <div className="text-xs text-soft-white/70 space-y-1">
                {Object.entries(companyInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-sm uppercase tracking-wide text-soft-white mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2 text-sm">
                <Link
                  href="/services"
                  className="block text-soft-white/70 hover:text-heat transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="block text-soft-white/70 hover:text-heat transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/booking"
                  className="block text-soft-white/70 hover:text-heat transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/checkout"
                  className="block text-soft-white/70 hover:text-heat transition-colors"
                >
                  Cart & Checkout
                </Link>
              </nav>
            </div>

            <div className="flex gap-4">
              {companyInfo.social.instagram && (
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-white/70 hover:text-heat transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {companyInfo.social.tiktok && (
                <a
                  href={companyInfo.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-white/70 hover:text-heat transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-sm uppercase tracking-wide text-soft-white mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-soft-white/70">
                <div>
                  <p>{companyInfo.address.street}</p>
                  <p>
                    {companyInfo.address.city}, {companyInfo.address.state}{' '}
                    {companyInfo.address.zip}
                  </p>
                </div>
                <div>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="hover:text-heat transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-heat transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-soft-white/60">
          <p>&copy; {currentYear} Barbershop. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-heat transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-heat transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
