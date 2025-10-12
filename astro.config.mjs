// astro.config.mjs
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://sizemygenerator.com', // canonical URL (https, non-www)
  integrations: [sitemap()],
})
