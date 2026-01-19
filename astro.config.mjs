// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";




// https://astro.build/config
export default defineConfig({
    site: "https://leandro-arias.vercel.app",
  integrations: [sitemap()],
});
