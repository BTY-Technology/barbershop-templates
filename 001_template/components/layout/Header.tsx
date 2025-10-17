'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  // Only homepage has dark hero background, other pages have white backgrounds
  const isHomePage = pathname === '/'
  const shouldUseLightText = isHomePage && !isScrolled

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={clsx(
              'text-2xl font-playfair font-bold transition-colors duration-300',
              shouldUseLightText
                ? 'text-white hover:text-accent'
                : 'text-primary hover:text-accent'
            )}
            aria-label="Barbershop home"
          >
            BARBERSHOP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-base font-medium transition-colors duration-300 relative group',
                  isActive(link.href)
                    ? 'text-accent'
                    : shouldUseLightText
                    ? 'text-white hover:text-accent'
                    : 'text-primary hover:text-accent'
                )}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={clsx(
                    'absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300',
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/booking">
              <Button variant="primary" size="md">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-[73px] bg-white z-40 animate-fade-in"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'text-2xl font-playfair font-semibold transition-colors duration-300',
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  )}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/booking" className="w-full max-w-xs">
                <Button variant="primary" size="lg" fullWidth>
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
