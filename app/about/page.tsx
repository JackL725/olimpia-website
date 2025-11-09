import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About Us — Portland Metro Biohazard Cleanup | Olimpia\'s',
  description: 'Professional, certified biohazard cleanup and restoration services in Portland Metro. OSHA certified technicians, 24/7 emergency response.',
  alternates: {
    canonical: '/about',
    languages: {
      'en': '/about',
      'es': '/es/about',
    },
  },
}

const PHONE = '+15035551234'

export default function AboutPage() {
  return (
    <>
      <Header phone={PHONE} />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                About Olimpia&apos;s Biohazard & Restoration
              </h1>
              <p className="text-xl text-gray-300">
                Professional, compassionate biohazard cleanup and restoration services in Portland Metro since 2020
              </p>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We provide professional biohazard cleanup and restoration services with compassion, discretion, and integrity. When families and businesses face their most challenging moments, we&apos;re here to help restore safety and peace of mind.
              </p>
            </div>
          </Container>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-charcoal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
              Certifications & Compliance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">🎓</div>
                  <CardTitle>OSHA Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    All technicians certified in bloodborne pathogen handling and biohazard remediation per OSHA standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">📋</div>
                  <CardTitle>EPA Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Follow all EPA guidelines for hazardous waste disposal and environmental protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">✅</div>
                  <CardTitle>Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Fully licensed, bonded, and insured for your protection and peace of mind.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Compassion</h3>
                <p className="text-gray-300">
                  We understand that our services are needed during the most difficult times. We approach every situation with empathy and respect.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Discretion</h3>
                <p className="text-gray-300">
                  Unmarked vehicles, plain uniforms, and complete confidentiality. Your privacy is our priority.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Professionalism</h3>
                <p className="text-gray-300">
                  Certified technicians, state-of-the-art equipment, and adherence to all safety protocols and regulations.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Availability</h3>
                <p className="text-gray-300">
                  24/7 emergency response, 365 days a year. When you need us, we&apos;re here.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Coverage Area */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Serving Portland Metro Area
              </h2>
              <p className="text-lg text-gray-300">
                Based in Milwaukie, OR, serving the entire Portland Metro region
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Milwaukie', 'Portland', 'Beaverton', 'Gresham', 'Tigard', 'Lake Oswego', 'Oregon City', 'West Linn', 'Hillsboro', 'Clackamas', 'Tualatin', 'Happy Valley'].map((city) => (
                <div key={city} className="text-center py-4 px-6 bg-coal rounded-lg border border-gold/20">
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="bg-gradient-to-br from-charcoal to-coal border-2 border-gold rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Need Emergency Biohazard Cleanup?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our certified technicians are available 24/7 for immediate response
              </p>
              <a href={`tel:${PHONE}`} className="btn-emergency inline-block">
                Call Now: (503) 555-1234
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
