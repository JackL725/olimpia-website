import enStrings from '@/17-i18n/strings.en.json'
import esStrings from '@/17-i18n/strings.es.json'

export type Locale = 'en' | 'es'

const translations = {
  en: enStrings,
  es: esStrings,
}

/**
 * Get translated string by key
 */
export function t(key: string, locale: Locale = 'en'): string {
  const keys = key.split('.')
  let value: any = translations[locale]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}

/**
 * Get locale from pathname
 */
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/es')) return 'es'
  return 'en'
}

/**
 * Get alternate locale
 */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en'
}

/**
 * Get localized path
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'es') {
    return path === '/' ? '/es' : `/es${path}`
  }
  return path
}

/**
 * Remove locale prefix from path
 */
export function removeLocalePrefix(path: string): string {
  return path.replace(/^\/(es|en)/, '') || '/'
}

/**
 * Locale display names
 */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
}
