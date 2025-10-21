import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium uppercase tracking-wide',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-carbon',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'relative overflow-hidden group',

        // Variant styles
        {
          'bg-heat text-white hover:bg-heat-dark focus:ring-heat': variant === 'primary',
          'bg-soft-white text-ink hover:bg-porcelain focus:ring-soft-white':
            variant === 'secondary',
          'border-2 border-heat text-heat hover:bg-heat hover:text-white focus:ring-heat':
            variant === 'outline',
          'text-soft-white hover:bg-white/10 focus:ring-soft-white': variant === 'ghost',
        },

        // Size styles
        {
          'px-4 py-2 text-xs': size === 'sm',
          'px-6 py-3 text-sm': size === 'md',
          'px-8 py-4 text-base': size === 'lg',
        },

        // Width
        fullWidth && 'w-full',

        className
      )}
      disabled={disabled}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <span
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          'bg-gradient-to-r from-transparent via-white/20 to-transparent',
          'animate-shimmer'
        )}
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
