'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQProps {
  items: FAQItem[]
  locale?: 'en' | 'es'
  className?: string
}

export function FAQ({ items, locale = 'en', className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const heading = locale === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'

  return (
    <section className={cn('py-20 bg-charcoal', className)}>
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
          {heading}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-coal rounded-lg border border-gold/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-charcoal transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white pr-8">{item.question}</span>
                <svg
                  className={cn(
                    'w-5 h-5 text-gold transition-transform flex-shrink-0',
                    openIndex === index && 'transform rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
