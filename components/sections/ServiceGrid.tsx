import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

export interface Service {
  title: string
  description: string
  href: string
  icon?: string
}

export interface ServiceGridProps {
  services: Service[]
  locale?: 'en' | 'es'
  className?: string
}

export function ServiceGrid({ services, locale = 'en', className }: ServiceGridProps) {
  const heading = locale === 'en' ? 'Our Services' : 'Nuestros Servicios'
  const subheading = locale === 'en'
    ? 'Professional biohazard and restoration services available 24/7'
    : 'Servicios profesionales de materiales peligrosos y restauración disponibles 24/7'

  return (
    <section className={cn('py-20 bg-coal', className)}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="h-full cursor-pointer">
                <CardHeader>
                  {service.icon && (
                    <div className="text-4xl mb-3">{service.icon}</div>
                  )}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-4 text-water hover:text-gold transition-colors inline-flex items-center">
                    {locale === 'en' ? 'Learn more' : 'Saber más'}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
