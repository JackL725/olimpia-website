import { FAQItem } from '@/components/sections/FAQ'

export interface LocalBusinessSchemaProps {
  name: string
  description: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  url: string
  logo?: string
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmergencyService'],
    name: props.name,
    description: props.description,
    telephone: props.phone,
    email: props.email,
    url: props.url,
    logo: props.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.address.street,
      addressLocality: props.address.city,
      addressRegion: props.address.state,
      postalCode: props.address.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$-$$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '45.4461',
        longitude: '-122.6368',
      },
      geoRadius: '50000',
    },
  }
}

export interface ServiceSchemaProps {
  name: string
  description: string
  provider: string
  areaServed: string
  url: string
}

export function generateServiceSchema(props: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: props.name,
    description: props.description,
    provider: {
      '@type': 'LocalBusiness',
      name: props.provider,
    },
    areaServed: {
      '@type': 'City',
      name: props.areaServed,
    },
    url: props.url,
    serviceType: 'Biohazard Cleanup',
  }
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateSiteNavigationSchema(links: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: links.map((link) => link.name),
    url: links.map((link) => link.url),
  }
}
