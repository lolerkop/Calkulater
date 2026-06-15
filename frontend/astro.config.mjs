import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const CANONICAL_SITE = 'https://calcuway.com';
const SITE = process.env.PUBLIC_SITE_URL || CANONICAL_SITE;

if (SITE !== CANONICAL_SITE && !SITE.startsWith('http://localhost') && !SITE.startsWith('http://127.0.0.1')) {
  throw new Error(`PUBLIC_SITE_URL must be ${CANONICAL_SITE} for production builds.`);
}

export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
      allowedHosts: true,
    },
  },
});
