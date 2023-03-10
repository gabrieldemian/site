import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  root: './',
  publicDir: 'public',
  site: 'https://gabriel-site.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), solidJs()],
})
