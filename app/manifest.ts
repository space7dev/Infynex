export default function manifest() {
  return {
    name: 'Infynex Solutions',
    short_name: 'Infynex',
    description: 'Leading technology solutions provider specializing in Mobile Apps, Blockchain, AI, and Custom Software Development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
