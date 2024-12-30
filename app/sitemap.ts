import type { MetadataRoute } from 'next'
import { navItems } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  console.log(typeof navItems,'asd')
  return [
    {
      url: 'https://amarsree.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
   ...navItems.map((item: { href: string; label: string }) => ({
      url: `https://amarsree.com/#${item.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
