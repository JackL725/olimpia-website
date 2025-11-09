import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Us — 24/7 Emergency Response | Olimpia\'s Biohazard',
  description: 'Contact Olimpia\'s Biohazard for emergency cleanup services. Available 24/7 throughout Portland Metro. Call (503) 555-1234.',
  alternates: {
    canonical: '/contact',
    languages: {
      'en': '/contact',
      'es': '/es/contact',
    },
  },
}

const PHONE = '+15035551234'

export default function ContactPage() {
  return (
    <>
      <Header phone={PHONE} />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                24/7 emergency response for biohazard cleanup and restoration services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${PHONE}`} className="btn-emergency">
                  Call Now: (503) 555-1234
                </a>
                <a href={`mailto:info@olimpiasbiohazard.com`} className="btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </Container>
        </section>

        <div className="py-20 bg-coal">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Request a Callback
                </h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible. For immediate assistance, please call our 24/7 emergency line.
                </p>

                <form className="space-y-6">
                  <Input
                    label="Name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(503) 555-1234"
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />

                  <Input
                    label="ZIP Code"
                    name="zip"
                    required
                    placeholder="97222"
                    maxLength={5}
                  />

                  <Select
                    label="Service Needed"
                    name="service"
                    required
                    options={[
                      { value: '', label: 'Select a service' },
                      { value: 'crime-scene', label: 'Crime Scene Cleanup' },
                      { value: 'biohazard', label: 'Biohazard Remediation' },
                      { value: 'unattended-death', label: 'Unattended Death Cleanup' },
                      { value: 'water-damage', label: 'Water Damage Restoration' },
                      { value: 'fire-damage', label: 'Fire Damage Restoration' },
                      { value: 'hoarding', label: 'Hoarding Cleanup' },
                      { value: 'other', label: 'Other' },
                    ]}
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    required
                    placeholder="Please describe your situation..."
                    rows={5}
                  />

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-400">
                      I consent to being contacted about my inquiry and understand this information will be handled according to the privacy policy.
                    </label>
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Submit Request
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-8">
                  {/* Emergency Contact */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      24/7 Emergency Line
                    </h3>
                    <p className="text-gray-300 mb-4">
                      For immediate emergency response, call our 24/7 hotline:
                    </p>
                    <a href={`tel:${PHONE}`} className="text-3xl font-bold text-white hover:text-gold transition-colors">
                      (503) 555-1234
                    </a>
                    <p className="text-sm text-gray-400 mt-4">
                      Available 24 hours a day, 7 days a week, including holidays
                    </p>
                  </div>

                  {/* Email */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Email
                    </h3>
                    <a href="mailto:info@olimpiasbiohazard.com" className="text-water hover:text-gold transition-colors">
                      info@olimpiasbiohazard.com
                    </a>
                    <p className="text-sm text-gray-400 mt-2">
                      We respond to emails within 2 business hours
                    </p>
                  </div>

                  {/* Address */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Service Area
                    </h3>
                    <p className="text-gray-300 mb-2">
                      Based in Milwaukie, Oregon
                    </p>
                    <p className="text-gray-300">
                      Serving all of Portland Metro Area
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Hours
                    </h3>
                    <p className="text-gray-300 text-lg font-semibold">
                      24/7 Emergency Response
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Office hours: Monday-Friday, 8AM-5PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FAQ Link */}
        <section className="py-20 bg-charcoal">
          <Container size="md">
            <div className="text-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                Have Questions?
              </h2>
              <p className="text-gray-300 mb-6">
                Check out our frequently asked questions for quick answers
              </p>
              <a href="/#faq" className="text-water hover:text-gold transition-colors">
                View FAQ →
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
