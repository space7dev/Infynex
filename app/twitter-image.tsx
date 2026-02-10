import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/config'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0b1f4d 0%, #1f2a44 50%, #111827 100%)',
          color: '#ffffff',
          padding: '64px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: 56, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 26, color: '#e5e7eb', maxWidth: 920 }}>
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
