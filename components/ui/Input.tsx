import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-fire ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 bg-charcoal border rounded-md text-white',
            'focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'placeholder:text-gray-500',
            error ? 'border-fire' : 'border-gray-600',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-fire">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-400">{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
