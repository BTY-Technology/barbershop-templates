'use client'

import React, { useState, useMemo } from 'react'
import { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/data/services'
import { ServiceCategory, ServiceSortOption } from '@/types'
import BackToTop from '@/components/BackToTop'

const categories: { value: ServiceCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Services' },
  { value: 'haircut', label: 'Haircuts' },
  { value: 'beard', label: 'Beard' },
  { value: 'styling', label: 'Styling' },
  { value: 'grooming', label: 'Grooming' },
  { value: 'package', label: 'Packages' },
  { value: 'kids', label: 'Kids' },
]

const sortOptions: { value: ServiceSortOption; label: string }[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
  { value: 'duration', label: 'Duration' },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all')
  const [sortBy, setSortBy] = useState<ServiceSortOption>('popular')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = services

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((service) => service.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (service) =>
          service.name.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query)
      )
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'duration':
          return a.duration - b.duration
        default:
          return 0
      }
    })

    return sorted
  }, [selectedCategory, sortBy, searchQuery])

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 mt-20">
        <div className="container-custom text-center">
          <p className="text-text text-sm uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="text-5xl sm:text-7xl font-playfair font-light tracking-tight mb-6">
            Professional Grooming
          </h1>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="label">
                  Search Services
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="label">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory | 'all')}
                  className="input"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label htmlFor="sort" className="label">
                  Sort By
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as ServiceSortOption)}
                  className="input"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredServices.length} of {services.length} services
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-4">
                No services found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="text-accent hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
