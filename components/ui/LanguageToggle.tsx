'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPathname, getAlternateLocale, removeLocalePrefix, localeNames } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPathname(pathname)
  const alternateLocale = getAlternateLocale(currentLocale)
  const basePath = removeLocalePrefix(pathname)
  const alternatePath = alternateLocale === 'es' ? `/es${basePath}` : basePath

  return (
    <Link
      href={alternatePath}
      className={cn(
        'text-sm text-water hover:text-gold transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-coal rounded px-2 py-1',
        className
      )}
      aria-label={`Switch to ${localeNames[alternateLocale]}`}
    >
      {localeNames[alternateLocale]}
    </Link>
  )
}
