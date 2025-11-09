'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { cn } from '@/lib/utils'

export interface CallbackButtonProps {
  locale?: 'en' | 'es'
  className?: string
  variant?: 'primary' | 'emergency'
}

export function CallbackButton({
  locale = 'en',
  className,
  variant = 'primary'
}: CallbackButtonProps) {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const text = {
    button: locale === 'en' ? 'Call Me Now' : 'Llámame Ahora',
    title: locale === 'en' ? 'Request Callback' : 'Solicitar Llamada',
    name: locale === 'en' ? 'Name' : 'Nombre',
    phone: locale === 'en' ? 'Phone' : 'Teléfono',
    zip: locale === 'en' ? 'ZIP Code' : 'Código Postal',
    submit: locale === 'en' ? 'Request Call' : 'Solicitar Llamada',
    cancel: locale === 'en' ? 'Cancel' : 'Cancelar',
    success: locale === 'en' ? 'We&apos;ll call you in 2-5 minutes!' : '¡Te llamaremos en 2-5 minutos!',
    error: locale === 'en' ? 'Something went wrong. Please call us directly.' : 'Algo salió mal. Por favor llámanos directamente.',
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      zip: formData.get('zip'),
      locale,
    }

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to request callback')

      setSuccess(true)
      setTimeout(() => {
        setShowForm(false)
        setSuccess(false)
      }, 5000)
    } catch (err) {
      setError(text.error)
    } finally {
      setLoading(false)
    }
  }

  if (!showForm) {
    return (
      <Button
        variant={variant}
        onClick={() => setShowForm(true)}
        className={className}
      >
        {text.button}
      </Button>
    )
  }

  return (
    <div className={cn('bg-charcoal border border-gold/20 rounded-lg p-6 max-w-md', className)}>
      <h3 className="text-xl font-heading font-semibold text-gold mb-4">
        {text.title}
      </h3>

      {success ? (
        <div className="text-center py-4">
          <div className="text-4xl mb-2">✓</div>
          <p className="text-hazard font-semibold">{text.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label={text.name}
            required
            disabled={loading}
            placeholder="John Doe"
          />
          <Input
            name="phone"
            type="tel"
            label={text.phone}
            required
            disabled={loading}
            placeholder="(503) 555-1234"
          />
          <Input
            name="zip"
            label={text.zip}
            required
            disabled={loading}
            placeholder="97222"
            maxLength={5}
          />

          {error && (
            <p className="text-sm text-fire">{error}</p>
          )}

          <div className="flex gap-3">
            <Button
              type="submit"
              variant="emergency"
              disabled={loading}
              className="flex-1"
            >
              {loading ? (locale === 'en' ? 'Sending...' : 'Enviando...') : text.submit}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowForm(false)}
              disabled={loading}
            >
              {text.cancel}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
