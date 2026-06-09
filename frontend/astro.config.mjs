import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const SITE = process.env.PUBLIC_SITE_URL || 'http://localhost:3000';

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
