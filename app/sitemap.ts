import { MetadataRoute } from 'next'
import { navItems } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://infynex.com'

  const routes = new Set<string>([
    '',
    '/mobile',
    '/blockchain',
    '/ai',
    '/products',
    '/portfolio',
    '/testimonials',
    '/about',
    '/contact',
    '/case-studies',
    '/rescue-project',
  ])

  const addRoute = (href?: string) => {
    if (!href) return
    routes.add(href)
  }

  navItems.forEach((item: any) => {
    addRoute(item.href)
    item.submenu?.forEach((subitem: any) => {
      if (subitem.items) {
        subitem.items.forEach((link: any) => addRoute(link.href))
      } else {
        addRoute(subitem.href)
      }
    })
    item.megaMenu?.columns?.forEach((column: any) => {
      column.items?.forEach((link: any) => addRoute(link.href))
    })
  })

  return Array.from(routes).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
