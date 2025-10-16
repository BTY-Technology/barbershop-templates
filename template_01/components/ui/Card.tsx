import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={clsx(
        'card',
        paddingStyles[padding],
        hover && 'cursor-pointer transform hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  )
}
