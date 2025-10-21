'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Button } from './Button';
import { formatPrice } from '@/lib/utils';

export function CartModal() {
  const { isOpen, closeCart, cart, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-carbon border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-display text-2xl text-soft-white uppercase">
                Cart ({cartCount})
              </h2>
              <button
                onClick={closeCart}
                className="text-soft-white/60 hover:text-soft-white transition-colors"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 mx-auto text-soft-white/20 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <p className="text-soft-white/60">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.service.id}
                    className="bg-white/5 border border-white/10 p-4 flex gap-4"
                  >
                    <div className="relative w-20 h-20 shrink-0">
                      <Image
                        src={item.service.images[0]}
                        alt={item.service.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      <h3 className="font-display text-sm text-soft-white uppercase truncate">
                        {item.service.name}
                      </h3>
                      <div className="text-heat font-bold">
                        {formatPrice(item.service.price * item.quantity)}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.service.id, item.quantity - 1)}
                          className="w-6 h-6 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-xs"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm text-soft-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.service.id, item.quantity + 1)}
                          className="w-6 h-6 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-xs"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.service.id)}
                          className="ml-auto text-heat hover:text-heat-dark text-xs uppercase tracking-wide transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-soft-white">
                  <span className="font-medium">Subtotal</span>
                  <span className="text-heat font-bold text-xl">{formatPrice(cartTotal)}</span>
                </div>

                <Link href="/checkout" onClick={closeCart}>
                  <Button variant="primary" size="lg" fullWidth>
                    Checkout
                  </Button>
                </Link>

                <button
                  onClick={closeCart}
                  className="w-full text-center text-sm text-soft-white/60 hover:text-soft-white transition-colors uppercase tracking-wide"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
