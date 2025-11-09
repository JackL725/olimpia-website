import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'emergency' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-coal disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-gold text-coal hover:bg-opacity-90 focus:ring-gold',
      emergency: 'bg-fire text-white hover:bg-opacity-90 focus:ring-fire',
      secondary: 'bg-charcoal text-white border border-gold hover:bg-opacity-80 focus:ring-gold',
      ghost: 'bg-transparent text-water hover:text-gold focus:ring-water',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
