import { LAST_UPDATED, SITE_PAGES, absoluteUrl } from '@/lib/seo'

export function GET() {
  const urls = SITE_PAGES.map((page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${LAST_UPDATED}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
