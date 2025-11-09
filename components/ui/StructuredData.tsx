import React from 'react'

export interface StructuredDataProps {
  data: Record<string, any> | Array<Record<string, any>>
}

/**
 * Component to inject JSON-LD structured data into the page
 */
export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data]

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}
