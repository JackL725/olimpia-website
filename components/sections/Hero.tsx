import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export interface HeroProps {
  title: string
  subtitle: string
  phone: string
  locale?: 'en' | 'es'
  className?: string
  showCallback?: boolean
}

export function Hero({
  title,
  subtitle,
  phone,
  locale = 'en',
  className,
  showCallback = true
}: HeroProps) {
  const callText = locale === 'en' ? 'Call Now' : 'Llamar Ahora'
  const callMeText = locale === 'en' ? 'Call Me Now' : 'Llámame Ahora'

  return (
    <section className={cn('py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal', className)}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="emergency" size="lg" asChild>
              <a href={`tel:${phone}`} className="min-w-[200px]">
                📞 {callText}
              </a>
            </Button>
            {showCallback && (
              <Button variant="primary" size="lg" className="min-w-[200px]">
                {callMeText}
              </Button>
            )}
          </div>

          <p className="mt-8 text-sm text-gray-400">
            {locale === 'en'
              ? 'Available 24/7 • Discreet Service • OSHA Certified'
              : 'Disponible 24/7 • Servicio Discreto • Certificado OSHA'}
          </p>
        </div>
      </Container>
    </section>
  )
}
