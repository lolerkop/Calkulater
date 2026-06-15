import { expect, test } from '@playwright/test';

test('privacy page exposes all required sections and contact path', async ({ page }) => {
  await page.goto('/ru/privacy/');

  for (const id of ['operator', 'data', 'local', 'share-links', 'storage', 'analytics', 'processors', 'logs', 'retention', 'rights', 'contact', 'updated', 'changes']) {
    await expect(page.getByTestId(`privacy-section-${id}`)).toBeVisible();
  }
  await expect(page.getByTestId('privacy-contact')).toHaveAttribute('href', '/ru/contacts/#privacy');
});

test('analytics UI and external loaders are absent when IDs are not configured', async ({ page }) => {
  const analyticsRequests: string[] = [];
  page.on('request', (request) => {
    if (/googletagmanager|google-analytics|mc\.yandex/.test(request.url())) analyticsRequests.push(request.url());
  });

  await page.goto('/ru/');
  await expect(page.getByTestId('analytics-consent')).toHaveCount(0);
  await expect(page.getByTestId('analytics-settings')).toHaveCount(0);
  expect(analyticsRequests).toEqual([]);
});
