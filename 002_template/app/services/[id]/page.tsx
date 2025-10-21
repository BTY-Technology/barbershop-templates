import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { getServiceById, getRelatedServices } from '@/lib/data/services';
import { formatPrice, formatDuration } from '@/lib/utils';
import type { Metadata } from 'next';

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceById(params.id);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.name,
    description: service.longDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.id);

  return (
    <div className="min-h-screen bg-carbon">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-carbon/30" />

        {service.featured && (
          <div className="absolute top-8 left-8 bg-heat text-white text-sm font-display uppercase px-4 py-2">
            Featured Service
          </div>
        )}
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <Container size="narrow">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-soft-white/60 uppercase">
                <Link href="/services" className="hover:text-heat transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-heat">{service.category}</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-soft-white uppercase">
                {service.name}
              </h1>

              <div className="flex items-center gap-6 pt-2">
                <div>
                  <div className="text-3xl font-bold text-heat">{formatPrice(service.price)}</div>
                  <div className="text-sm text-soft-white/60">Starting price</div>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div>
                  <div className="text-xl font-semibold text-soft-white">
                    {formatDuration(service.duration)}
                  </div>
                  <div className="text-sm text-soft-white/60">Duration</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-soft-white/80 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl text-soft-white uppercase">
                  What's Included
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-soft-white/80">
                      <svg
                        className="w-5 h-5 text-heat shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {service.images.length > 1 && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl text-soft-white uppercase">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {service.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden group">
                      <Image
                        src={image}
                        alt={`${service.name} ${index + 2}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking" className="flex-1">
                <Button size="lg" variant="primary" fullWidth>
                  Book This Service
                </Button>
              </Link>
              <Link href="/services" className="flex-1">
                <Button size="lg" variant="outline" fullWidth>
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-ink">
          <Container>
            <h2 className="font-display text-3xl md:text-4xl text-soft-white uppercase mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
