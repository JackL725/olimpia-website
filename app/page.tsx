import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/sections/Hero'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card'
import { StructuredData } from '@/components/ui/StructuredData'
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Biohazard & Crime Scene Cleanup — Portland Metro — 24/7',
  description: '24/7 emergency biohazard and crime scene cleanup in Portland Metro. Discreet, professional service. OSHA certified. Call now for immediate response.',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/es',
    },
  },
}

const PHONE = '+15035551234'

const services = [
  {
    title: 'Crime Scene Cleanup',
    description: 'Professional crime scene cleanup and biohazard removal. Discreet, certified technicians available 24/7.',
    href: '/services/crime-scene-cleanup',
    icon: '🔍',
  },
  {
    title: 'Biohazard Remediation',
    description: 'Complete biohazard cleanup and decontamination services. OSHA-certified technicians, proper disposal.',
    href: '/services/biohazard-remediation',
    icon: '⚠️',
  },
  {
    title: 'Unattended Death Cleanup',
    description: 'Compassionate, discreet cleanup after unattended death. Complete decontamination and odor removal.',
    href: '/services/unattended-death-cleanup',
    icon: '🕊️',
  },
  {
    title: 'Water Damage Restoration',
    description: 'Emergency water extraction, drying, and restoration. Prevent mold growth. Work directly with insurance.',
    href: '/services/water-damage-restoration',
    icon: '💧',
  },
  {
    title: 'Fire Damage Restoration',
    description: 'Fire and smoke damage cleanup. Soot removal, odor elimination, structural restoration.',
    href: '/services/fire-damage-restoration',
    icon: '🔥',
  },
  {
    title: 'Hoarding Cleanup',
    description: 'Compassionate hoarding cleanup and decluttering. Respectful, non-judgmental service.',
    href: '/services/hoarding-cleanup',
    icon: '🏠',
  },
]

const faqs = [
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'We typically arrive within 1-2 hours of your call anywhere in the Portland Metro area. Our crews are on call 24/7, including weekends and holidays.',
  },
  {
    question: 'Is biohazard cleanup covered by insurance?',
    answer: 'Many homeowners and commercial insurance policies cover biohazard cleanup services. We work directly with insurance companies and can help you navigate the claims process.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Yes, all our technicians are OSHA-certified in bloodborne pathogen handling and biohazard remediation. We maintain all required licenses and follow strict safety protocols.',
  },
  {
    question: 'Do you provide discreet service?',
    answer: 'Absolutely. We understand the sensitive nature of our work. Our vehicles are unmarked, and our technicians wear plain uniforms. We respect your privacy and work with complete discretion.',
  },
  {
    question: 'What should I do immediately after a crime scene or trauma?',
    answer: 'First, ensure your safety and call 911 if needed. Once law enforcement clears the scene, do not attempt to clean it yourself. Contact us immediately for professional biohazard remediation.',
  },
]

const localBusinessSchema = generateLocalBusinessSchema({
  name: "Olimpia's Biohazard & Restoration",
  description: 'Professional biohazard cleanup and restoration services in Portland Metro. 24/7 emergency response.',
  phone: PHONE,
  email: 'info@olimpiasbiohazard.com',
  address: {
    street: '',
    city: 'Milwaukie',
    state: 'OR',
    zip: '97222',
  },
  url: 'https://www.olimpiasbiohazard.com',
})

const faqSchema = generateFAQSchema(faqs)

export default function HomePage() {
  return (
    <>
      <StructuredData data={[localBusinessSchema, faqSchema]} />

      <Header phone={PHONE} />

      <main>
        <Hero
          title="Biohazard & Crime Scene Cleanup"
          subtitle="Portland Metro — 24/7 Emergency Response — Discreet, certified technicians"
          phone={PHONE}
          locale="en"
        />

        <ServiceGrid services={services} locale="en" />

        {/* Why Choose Us */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Why Choose Olimpia&apos;s Biohazard
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Professional, compassionate service when you need it most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">✓</div>
                  <CardTitle>OSHA Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All technicians are certified in bloodborne pathogen handling and biohazard remediation. We follow strict safety protocols.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">⚡</div>
                  <CardTitle>Rapid Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Available 24/7 with typical arrival within 1-2 hours anywhere in Portland Metro. Emergency crews always on call.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">🤝</div>
                  <CardTitle>Complete Discretion</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Unmarked vehicles and plain uniforms. We understand the sensitive nature of our work and respect your privacy.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* What to Do Now - AEO Answer Card */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="bg-gradient-to-br from-charcoal to-coal border-2 border-gold rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gold mb-6">
                What Should I Do Right Now?
              </h2>

              <div className="space-y-6 text-gray-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Ensure Safety First</h3>
                    <p>If there&apos;s any immediate danger, call 911. Do not enter the affected area until authorities clear it.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Do Not Attempt Cleanup</h3>
                    <p>Biohazardous materials require specialized handling. Attempting DIY cleanup can spread contamination and pose serious health risks.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Call Us Immediately</h3>
                    <p>Contact our 24/7 emergency line. We&apos;ll arrive within 1-2 hours to assess and begin professional remediation.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gold/20 text-center">
                <a href={`tel:${PHONE}`} className="btn-emergency inline-block">
                  Call Now: (503) 555-1234
                </a>
              </div>
            </div>
          </Container>
        </section>

        <FAQ items={faqs} locale="en" />

        {/* Service Area */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Serving Portland Metro Area
              </h2>
              <p className="text-lg text-gray-300">
                24/7 emergency response throughout the region
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Milwaukie', 'Portland', 'Beaverton', 'Gresham', 'Tigard', 'Lake Oswego', 'Oregon City', 'West Linn'].map((city) => (
                <div key={city} className="text-center py-4 px-6 bg-coal rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/service-area" className="text-water hover:text-gold transition-colors">
                View all service areas →
              </a>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="en" position="fixed" />

      <Footer locale="en" phone="(503) 555-1234" />
    </>
  )
}
