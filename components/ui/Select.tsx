import React from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: Array<{ value: string; label: string }>
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, id, options, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-fire ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'w-full px-4 py-3 bg-charcoal border rounded-md text-white',
            'focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'cursor-pointer',
            error ? 'border-fire' : 'border-gray-600',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-fire">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-400">{helperText}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
