import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import { getServiceBySlug, services } from '@/lib/data/services'
import { formatPrice, formatDuration } from '@/utils/validation'
import ImageZoom from '@/components/ImageZoom'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.name,
    description: service.longDescription,
    openGraph: {
      title: `${service.name} | Barbershop`,
      description: service.longDescription,
      images: [service.image],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  // Get related services (same category, excluding current)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-secondary">
      {/* Breadcrumb */}
      <div className="bg-white border-b mt-20">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-600 hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/services"
              className="text-gray-600 hover:text-accent transition-colors"
            >
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Service Details */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image with Zoom */}
              <ImageZoom src={service.image} alt={service.name} />

              {/* Additional Images */}
              {service.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {service.images.slice(1).map((img, index) => (
                    <div
                      key={index}
                      className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={img}
                        alt={`${service.name} view ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Service Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                  {service.category}
                </span>
                {service.popular && (
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                {service.featured && (
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-playfair font-semibold text-primary">
                {service.name}
              </h1>

              {/* Price and Duration */}
              <div className="flex items-center gap-8 text-2xl">
                <div>
                  <span className="font-bold text-accent">{formatPrice(service.price)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{formatDuration(service.duration)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.longDescription}
              </p>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold mb-3">What&apos;s Included:</h2>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Perfect For:</h2>
                <div className="flex flex-wrap gap-2">
                  {service.suitable.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 space-y-3">
                <Link href={`/booking?service=${service.id}`} className="block">
                  <Button variant="primary" size="lg" fullWidth>
                    Book This Service
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" size="lg" fullWidth>
                    Have Questions? Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-center mb-12">
              You Might Also Like
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
