'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { checkoutSchema, type CheckoutFormData } from '@/lib/validations';
import { formatPrice, generateTimeSlots, generateAvailableDates, formatDateInput } from '@/lib/utils';
import { teamMembers } from '@/lib/data/team';
import Image from 'next/image';

type CheckoutStep = 'cart' | 'details' | 'payment' | 'confirmation';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('cart');
  const [orderNumber] = useState(() => Math.random().toString(36).substr(2, 9).toUpperCase());

  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Order placed:', { ...data, cart, total: cartTotal, orderNumber });
    setCurrentStep('confirmation');
  };

  const steps = [
    { id: 'cart', label: 'Cart' },
    { id: 'details', label: 'Details' },
    { id: 'payment', label: 'Payment' },
  ];

  const getCurrentStepIndex = () => steps.findIndex((s) => s.id === currentStep);

  if (cart.length === 0 && currentStep !== 'confirmation') {
    return (
      <div className="min-h-screen bg-carbon flex items-center justify-center">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-soft-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-display text-3xl text-soft-white uppercase mb-2">Your Cart is Empty</h1>
              <p className="text-soft-white/70">Add some services to get started</p>
            </div>
            <Button onClick={() => router.push('/services')}>Browse Services</Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-carbon">
      <section className="section-padding">
        <Container>
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-soft-white uppercase mb-8">Checkout</h1>

            {/* Progress Steps */}
            {currentStep !== 'confirmation' && (
              <div className="flex items-center justify-center gap-4 mb-12">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm ${
                          index <= getCurrentStepIndex()
                            ? 'bg-heat text-white'
                            : 'bg-white/5 text-soft-white/40'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span
                        className={`hidden sm:block text-sm uppercase tracking-wide ${
                          index <= getCurrentStepIndex() ? 'text-soft-white' : 'text-soft-white/40'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-px w-12 sm:w-20 ${
                          index < getCurrentStepIndex() ? 'bg-heat' : 'bg-white/10'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* Cart Step */}
          {currentStep === 'cart' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="font-display text-2xl text-soft-white uppercase mb-6">Your Services</h2>
                {cart.map((item) => (
                  <div key={item.service.id} className="bg-white/5 border border-white/10 p-6 flex gap-6">
                    <div className="relative w-24 h-24 shrink-0">
                      <Image
                        src={item.service.images[0]}
                        alt={item.service.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-display text-lg text-soft-white uppercase">
                        {item.service.name}
                      </h3>
                      <p className="text-sm text-soft-white/60">{item.service.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.service.id, item.quantity - 1)}
                            className="w-8 h-8 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                          >
                            −
                          </button>
                          <span className="w-12 text-center text-soft-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.service.id, item.quantity + 1)}
                            className="w-8 h-8 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.service.id)}
                          className="text-heat hover:text-heat-dark text-sm uppercase tracking-wide transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-heat font-bold text-lg">
                        {formatPrice(item.service.price * item.quantity)}
                      </div>
                      <div className="text-xs text-soft-white/60">
                        {formatPrice(item.service.price)} each
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="bg-white/5 border border-white/10 p-6 sticky top-28">
                  <h3 className="font-display text-xl text-soft-white uppercase mb-6">Summary</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-soft-white/80">
                      <span>Subtotal</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-soft-white/80">
                      <span>Tax (est.)</span>
                      <span>{formatPrice(cartTotal * 0.08)}</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex justify-between text-soft-white font-bold text-lg">
                      <span>Total</span>
                      <span className="text-heat">{formatPrice(cartTotal * 1.08)}</span>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={() => setCurrentStep('details')}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Details & Payment Steps */}
          {(currentStep === 'details' || currentStep === 'payment') && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {currentStep === 'details' && (
                    <div className="space-y-6">
                      <h2 className="font-display text-2xl text-soft-white uppercase">
                        Your Information
                      </h2>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                            First Name *
                          </label>
                          <input
                            {...register('firstName')}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-xs text-heat">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                            Last Name *
                          </label>
                          <input
                            {...register('lastName')}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-xs text-heat">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-heat">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                          Phone *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-heat">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                            Appointment Date *
                          </label>
                          <input
                            {...register('date')}
                            type="date"
                            min={formatDateInput(availableDates[0])}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                          />
                          {errors.date && (
                            <p className="mt-1 text-xs text-heat">{errors.date.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                            Time *
                          </label>
                          <select
                            {...register('time')}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot} className="bg-carbon">
                                {slot}
                              </option>
                            ))}
                          </select>
                          {errors.time && (
                            <p className="mt-1 text-xs text-heat">{errors.time.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                          Preferred Barber (Optional)
                        </label>
                        <select
                          {...register('barberId')}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white focus:outline-none focus:border-heat transition-colors"
                        >
                          <option value="">No preference</option>
                          {teamMembers.map((barber) => (
                            <option key={barber.id} value={barber.id} className="bg-carbon">
                              {barber.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {currentStep === 'payment' && (
                    <div className="space-y-6">
                      <h2 className="font-display text-2xl text-soft-white uppercase">
                        Payment Information
                      </h2>

                      <div className="bg-neon/10 border border-neon/30 p-4 text-sm text-neon">
                        <strong>Test Mode:</strong> Use card number 4242 4242 4242 4242 with any future expiry and CVV
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                          Card Number *
                        </label>
                        <input
                          {...register('cardNumber')}
                          placeholder="4242 4242 4242 4242"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                        />
                        {errors.cardNumber && (
                          <p className="mt-1 text-xs text-heat">{errors.cardNumber.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                          Cardholder Name *
                        </label>
                        <input
                          {...register('cardholderName')}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                        />
                        {errors.cardholderName && (
                          <p className="mt-1 text-xs text-heat">{errors.cardholderName.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                            Expiry Date *
                          </label>
                          <input
                            {...register('expiryDate')}
                            placeholder="MM/YY"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                          />
                          {errors.expiryDate && (
                            <p className="mt-1 text-xs text-heat">{errors.expiryDate.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soft-white mb-2 uppercase tracking-wide">
                            CVV *
                          </label>
                          <input
                            {...register('cvv')}
                            placeholder="123"
                            maxLength={4}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-soft-white placeholder:text-soft-white/40 focus:outline-none focus:border-heat transition-colors"
                          />
                          {errors.cvv && (
                            <p className="mt-1 text-xs text-heat">{errors.cvv.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            {...register('newsletter')}
                            type="checkbox"
                            className="mt-1 w-4 h-4 accent-heat"
                          />
                          <span className="text-sm text-soft-white/80">
                            Send me exclusive offers and updates
                          </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            {...register('termsAccepted')}
                            type="checkbox"
                            className="mt-1 w-4 h-4 accent-heat"
                          />
                          <span className="text-sm text-soft-white/80">
                            I agree to the terms and conditions *
                          </span>
                        </label>
                        {errors.termsAccepted && (
                          <p className="text-xs text-heat">{errors.termsAccepted.message}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div className="bg-white/5 border border-white/10 p-6 sticky top-28 space-y-6">
                    <h3 className="font-display text-xl text-soft-white uppercase">Summary</h3>
                    <div className="space-y-2">
                      {cart.map((item) => (
                        <div key={item.service.id} className="flex justify-between text-sm text-soft-white/80">
                          <span>
                            {item.service.name} ×{item.quantity}
                          </span>
                          <span>{formatPrice(item.service.price * item.quantity)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-soft-white/80">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotal)}</span>
                      </div>
                      <div className="flex justify-between text-soft-white/80">
                        <span>Tax</span>
                        <span>{formatPrice(cartTotal * 0.08)}</span>
                      </div>
                      <div className="h-px bg-white/10" />
                      <div className="flex justify-between text-soft-white font-bold text-lg">
                        <span>Total</span>
                        <span className="text-heat">{formatPrice(cartTotal * 1.08)}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {currentStep === 'details' && (
                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          fullWidth
                          onClick={() => setCurrentStep('payment')}
                        >
                          Continue to Payment
                        </Button>
                      )}

                      {currentStep === 'payment' && (
                        <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                          {isSubmitting ? 'Processing...' : `Pay ${formatPrice(cartTotal * 1.08)}`}
                        </Button>
                      )}

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        fullWidth
                        onClick={() => {
                          if (currentStep === 'payment') setCurrentStep('details');
                          else if (currentStep === 'details') setCurrentStep('cart');
                        }}
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* Confirmation Step */}
          {currentStep === 'confirmation' && (
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 mx-auto bg-heat/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-heat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-display text-4xl text-soft-white uppercase mb-4">
                  Booking Confirmed!
                </h2>
                <p className="text-soft-white/70 text-lg">
                  Your appointment has been successfully booked
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 text-left">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-soft-white/60 uppercase tracking-wide mb-1">Order Number</p>
                    <p className="text-2xl font-display text-heat">{orderNumber}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-sm text-soft-white/60 uppercase tracking-wide mb-2">Services</p>
                    {cart.map((item) => (
                      <p key={item.service.id} className="text-soft-white/80">
                        {item.service.name} ×{item.quantity}
                      </p>
                    ))}
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between text-lg">
                    <span className="text-soft-white">Total Paid</span>
                    <span className="font-bold text-heat">{formatPrice(cartTotal * 1.08)}</span>
                  </div>
                </div>
              </div>

              <p className="text-soft-white/70">
                A confirmation email has been sent to your email address with all the details.
              </p>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    clearCart();
                    router.push('/');
                  }}
                  variant="primary"
                >
                  Return Home
                </Button>
                <Button onClick={() => router.push('/services')} variant="outline">
                  Browse Services
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
