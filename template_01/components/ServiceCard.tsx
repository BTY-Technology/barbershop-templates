import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Service } from '@/types'
import { formatPrice, formatDuration } from '@/utils/validation'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card padding="none" hover className="group">
      {/* Service Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
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

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={`/services/${service.slug}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </div>
      </div>

      {/* Service Info */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors">
              <Link href={`/services/${service.slug}`}>
                {service.name}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
              {service.category}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-accent">
              {formatPrice(service.price)}
            </p>
            <p className="text-sm text-gray-500">{formatDuration(service.duration)}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {service.description}
        </p>

        {/* Book Button */}
        <Link href={`/booking?service=${service.id}`} className="block">
          <Button variant="outline" fullWidth>
            Book Now
          </Button>
        </Link>
      </div>
    </Card>
  )
}
