'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/lib/data/services';
import { ServiceCategory, SortOption } from '@/types';
import { cn } from '@/lib/utils';

const categories: Array<{ value: ServiceCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All Services' },
  { value: 'haircut', label: 'Haircuts' },
  { value: 'beard', label: 'Beard' },
  { value: 'grooming', label: 'Grooming' },
  { value: 'styling', label: 'Styling' },
  { value: 'coloring', label: 'Coloring' },
  { value: 'treatment', label: 'Treatment' },
];

const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: 'name', label: 'Name (A-Z)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'duration-asc', label: 'Duration (Short to Long)' },
  { value: 'duration-desc', label: 'Duration (Long to Short)' },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((service) => service.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (service) =>
          service.name.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query) ||
          service.category.toLowerCase().includes(query)
      );
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'duration-asc':
        sorted.sort((a, b) => a.duration - b.duration);
        break;
      case 'duration-desc':
        sorted.sort((a, b) => b.duration - a.duration);
        break;
    }

    return sorted;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-carbon">
      {/* Page Header */}
      <section className="bg-ink border-b border-white/10 py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-soft-white uppercase mb-4">
              Our Services
            </h1>
            <p className="text-soft-white/70 text-lg">
              Browse our full range of premium grooming services
            </p>
          </div>
        </Container>
      </section>

      {/* Filters and Search */}
      <section className="sticky top-20 z-40 bg-carbon/95 backdrop-blur-md border-b border-white/10 py-6">
        <Container>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-soft-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={cn(
                      'px-4 py-2 text-xs uppercase tracking-wide font-medium transition-all',
                      selectedCategory === category.value
                        ? 'bg-heat text-white'
                        : 'bg-white/5 text-soft-white/70 hover:bg-white/10'
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-wide text-soft-white/60">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-white/5 border border-white/10 rounded-none px-3 py-2 text-sm text-soft-white focus:outline-none focus:border-heat transition-colors cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-carbon">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <Container>
          {filteredAndSortedServices.length > 0 ? (
            <>
              <div className="mb-6 text-soft-white/60 text-sm">
                Showing {filteredAndSortedServices.length} service
                {filteredAndSortedServices.length !== 1 ? 's' : ''}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredAndSortedServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-soft-white/60 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
