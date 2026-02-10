import type { Metadata } from 'next'

type ServiceMetadataInput = {
  title: string
  description: string
  canonical: string
  image: string
  imageAlt: string
}

export const buildServiceMetadata = ({
  title,
  description,
  canonical,
  image,
  imageAlt,
}: ServiceMetadataInput): Metadata => ({
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
})
