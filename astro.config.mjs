// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import { SITE } from '@/lib/seo'

export default defineConfig({
  site: SITE.url,
  vite: {
    plugins: [tailwindcss()],
  },
})
