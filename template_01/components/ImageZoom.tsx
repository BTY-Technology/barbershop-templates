'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ImageZoomProps {
  src: string
  alt: string
}

export default function ImageZoom({ src, alt }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      <div
        className="relative h-96 rounded-lg overflow-hidden cursor-zoom-in group"
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">Click to zoom</span>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setIsZoomed(false)}
            aria-label="Close zoom view"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
