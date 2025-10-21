'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CartItem, Service, TeamMember } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (service: Service, barber?: TeamMember) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('barbershop-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to load cart from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('barbershop-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((service: Service, barber?: TeamMember) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.service.id === service.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.service.id === service.id
            ? { ...item, quantity: item.quantity + 1, selectedBarber: barber || item.selectedBarber }
            : item
        );
      }

      return [...prevCart, { service, quantity: 1, selectedBarber: barber }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((serviceId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.service.id !== serviceId));
  }, []);

  const updateQuantity = useCallback((serviceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(serviceId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.service.id === serviceId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
    setIsOpen(false);
  }, []);

  const cartTotal = cart.reduce(
    (total, item) => total + item.service.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
