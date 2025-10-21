'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Service, BookingFormData, BookingState } from '@/types'

interface BookingContextType {
  bookingState: BookingState
  setSelectedService: (service: Service | null) => void
  updateBookingData: (data: Partial<BookingFormData>) => void
  resetBooking: () => void
  setStep: (step: number) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

const initialBookingState: BookingState = {
  selectedService: null,
  bookingData: {},
  step: 1,
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingState, setBookingState] = useState<BookingState>(initialBookingState)

  const setSelectedService = (service: Service | null) => {
    setBookingState((prev) => ({
      ...prev,
      selectedService: service,
    }))
  }

  const updateBookingData = (data: Partial<BookingFormData>) => {
    setBookingState((prev) => ({
      ...prev,
      bookingData: {
        ...prev.bookingData,
        ...data,
      },
    }))
  }

  const resetBooking = () => {
    setBookingState(initialBookingState)
  }

  const setStep = (step: number) => {
    setBookingState((prev) => ({
      ...prev,
      step,
    }))
  }

  return (
    <BookingContext.Provider
      value={{
        bookingState,
        setSelectedService,
        updateBookingData,
        resetBooking,
        setStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
