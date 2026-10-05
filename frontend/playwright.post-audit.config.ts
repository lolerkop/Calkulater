import { defineConfig, devices } from '@playwright/test';

// An owned static preview is started separately; never reuse an owner's preview.
export default defineConfig({
  testDir: './e2e', fullyParallel: true, workers: 2, retries: 0,
  reporter: [['line'], ['json', { outputFile: process.env.CALCUWAY_BROWSER_REPORT }]],
  use: { baseURL: 'http://127.0.0.1:8771', trace: 'retain-on-failure' },
  outputDir: '../fixes/post-audit-2026-10-05/results/playwright-artifacts',
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
