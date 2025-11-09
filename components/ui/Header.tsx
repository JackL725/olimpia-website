'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from './Container'
import { Button } from './Button'
import { LanguageToggle } from './LanguageToggle'
import { getLocaleFromPathname, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export interface HeaderProps {
  phone?: string
}

export function Header({ phone = '+15035551234' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)

  const navigation = [
    { name: locale === 'en' ? 'Services' : 'Servicios', href: locale === 'en' ? '/services' : '/es/services' },
    { name: locale === 'en' ? 'Service Area' : 'Área de Servicio', href: locale === 'en' ? '/service-area' : '/es/service-area' },
    { name: locale === 'en' ? 'About' : 'Acerca', href: locale === 'en' ? '/about' : '/es/about' },
    { name: locale === 'en' ? 'Contact' : 'Contacto', href: locale === 'en' ? '/contact' : '/es/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-coal/95 backdrop-blur-sm border-b border-gold/20">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href={locale === 'en' ? '/' : '/es'} className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-gold">
              Olimpia&apos;s
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-gray-300 hover:text-gold'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button variant="emergency" size="sm" asChild>
              <a href={`tel:${phone}`}>
                {t('cta.callNow', locale)}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gold/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-2 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-gray-300 hover:text-gold'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gold/20 space-y-3">
              <LanguageToggle className="block" />
              <Button variant="emergency" size="md" className="w-full" asChild>
                <a href={`tel:${phone}`}>
                  {t('cta.callNow', locale)}
                </a>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
