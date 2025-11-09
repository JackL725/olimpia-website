import type { Metadata } from 'next'

export interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  locale?: 'en' | 'es'
  alternateLocale?: string
}

/**
 * Generate metadata for Next.js pages
 */
export function generateMetadata(props: SEOProps): Metadata {
  const {
    title,
    description,
    canonical,
    ogImage = '/og/default.jpg',
    noindex = false,
    locale = 'en',
    alternateLocale,
  } = props

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.olimpiasbiohazard.com'
  const fullUrl = canonical ? `${baseUrl}${canonical}` : undefined

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Olimpia's Biohazard & Restoration",
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: fullUrl,
    },
  }

  if (alternateLocale) {
    metadata.alternates = {
      ...metadata.alternates,
      languages: {
        'en': locale === 'en' ? (canonical || '/') : (canonical?.replace('/es', '') || '/'),
        'es': locale === 'es' ? (canonical || '/es') : `/es${canonical || '/'}`,
      },
    }
  }

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: false,
    }
  }

  return metadata
}

/**
 * Truncate text for meta descriptions
 */
export function truncateDescription(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3).trim() + '...'
}

/**
 * Generate page title with site name
 */
export function formatTitle(pageTitle: string, includeSiteName: boolean = true): string {
  if (!includeSiteName) return pageTitle
  return `${pageTitle} | Olimpia's Biohazard`
}

/**
 * Generate hreflang links
 */
export function generateHreflangLinks(path: string): Array<{ rel: string; href: string; hrefLang: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.olimpiasbiohazard.com'

  return [
    {
      rel: 'alternate',
      href: `${baseUrl}${path}`,
      hrefLang: 'en',
    },
    {
      rel: 'alternate',
      href: `${baseUrl}/es${path}`,
      hrefLang: 'es',
    },
    {
      rel: 'alternate',
      href: `${baseUrl}${path}`,
      hrefLang: 'x-default',
    },
  ]
}
