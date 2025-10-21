'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/types';
import { formatPrice, formatDuration, cn } from '@/lib/utils';
import { Button } from './Button';
import { useCart } from '@/context/CartContext';

interface ServiceCardProps {
  service: Service;
  priority?: boolean;
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative bg-carbon border border-white/10 overflow-hidden hover:border-heat/50 transition-all duration-300 animate-fade-in"
    >
      {/* Featured badge */}
      {service.featured && (
        <div className="absolute top-4 left-4 z-10 bg-heat text-white text-xs font-display uppercase px-3 py-1">
          Featured
        </div>
      )}

      {/* Image */}
      <Link href={`/services/${service.id}`} className="block relative aspect-[4/3] overflow-hidden bg-white/5">
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          className={cn(
            "object-cover group-hover:scale-110 transition-all duration-700",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse" />
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/30 to-transparent" />
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/services/${service.id}`}>
              <h3 className="font-display text-xl text-soft-white uppercase tracking-wide group-hover:text-heat transition-colors">
                {service.name}
              </h3>
            </Link>
            <span className="text-heat font-bold text-lg shrink-0">
              {formatPrice(service.price)}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-soft-white/60 uppercase">
            <span className="font-medium">{service.category}</span>
            <span>•</span>
            <span>{formatDuration(service.duration)}</span>
          </div>
        </div>

        <p className="text-sm text-soft-white/80 line-clamp-2">
          {service.description}
        </p>

        <div className="flex gap-2 pt-2">
          <Button
            variant="primary"
            size="sm"
            fullWidth
            onClick={() => addToCart(service)}
          >
            Add to Cart
          </Button>
          <Link href={`/services/${service.id}`} className="shrink-0">
            <Button variant="outline" size="sm">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
