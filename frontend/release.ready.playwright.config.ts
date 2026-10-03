import { defineConfig } from '@playwright/test';
import base from './playwright.config';

// The separately started Wrangler Pages emulator executes the actual Functions.
// It serves the frozen build and does not run a build from inside browser tests.
export default defineConfig({
  ...base,
  use: { ...base.use, baseURL: 'http://127.0.0.1:4333' },
  webServer: undefined,
  workers: 2,
  outputDir: './test-results/release-ready',
});
