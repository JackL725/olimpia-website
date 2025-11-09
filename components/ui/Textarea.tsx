import React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-fire ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 bg-charcoal border rounded-md text-white',
            'focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'placeholder:text-gray-500',
            'resize-y min-h-[100px]',
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

Textarea.displayName = 'Textarea'
