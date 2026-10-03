import { expect, test } from '@playwright/test';

test('privacy page exposes all required sections and the configured private contact', async ({ page }) => {
  await page.goto('/ru/privacy/');

  for (const id of ['operator', 'data', 'local', 'share-links', 'storage', 'analytics', 'processors', 'logs', 'retention', 'rights', 'contact', 'updated', 'changes']) {
    await expect(page.getByTestId(`privacy-section-${id}`)).toBeVisible();
  }
  const email = process.env.PUBLIC_PRIVACY_EMAIL || process.env.PUBLIC_CONTACT_EMAIL || '';
  if (email) {
    await expect(page.getByTestId('privacy-contact')).toHaveText(email);
    await expect(page.getByTestId('privacy-contact')).toHaveAttribute('href', `mailto:${email}`);
    await expect(page.getByTestId('privacy-section-contact')).not.toContainText('Отдельный приватный email пока не настроен');
  } else {
    await expect(page.getByTestId('privacy-contact')).toHaveCount(0);
    await expect(page.getByTestId('privacy-section-contact')).toContainText('Отдельный приватный email пока не настроен');
  }
  await expect(page.getByTestId('privacy-section-contact')).toContainText('GitHub');
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
