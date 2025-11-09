'use client'

import React from 'react'
import { Button } from './Button'
import { cn } from '@/lib/utils'
import { formatPhone } from '@/lib/utils'

export interface EmergencyCTAProps {
  phone: string
  locale?: 'en' | 'es'
  className?: string
  position?: 'fixed' | 'static'
}

export function EmergencyCTA({
  phone,
  locale = 'en',
  className,
  position = 'static'
}: EmergencyCTAProps) {
  const text = locale === 'en' ? 'Call Now' : 'Llamar Ahora'
  const displayPhone = formatPhone(phone)

  return (
    <div
      className={cn(
        'bg-charcoal border-2 border-fire rounded-lg p-4 shadow-xl',
        position === 'fixed' && 'fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-40',
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-300 mb-1">
            {locale === 'en' ? '24/7 Emergency Response' : 'Respuesta de Emergencia 24/7'}
          </p>
          <p className="text-lg font-heading font-semibold text-white">
            {displayPhone}
          </p>
        </div>
        <Button variant="emergency" size="md" asChild>
          <a href={`tel:${phone}`} className="whitespace-nowrap">
            {text}
          </a>
        </Button>
      </div>
    </div>
  )
}
