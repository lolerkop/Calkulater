import { expect, test } from '@playwright/test';

test('full-parity language switcher links resolve to equivalent pages', async ({ page, request }) => {
  await page.goto('/ru/currency/currency-converter/');

  const switcher = page.locator('[data-language-switcher="desktop"]');
  const links = switcher.locator('a');
  await expect(links).toHaveCount(3);
  await expect(switcher).toContainText('UA');
  await expect(switcher).not.toContainText('UK');

  const hrefs = await links.evaluateAll((elements) => elements.map((element) => (element as HTMLAnchorElement).href));
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), href).toBeLessThan(400);
  }

  const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((elements) =>
    elements.map((element) => element.getAttribute('hreflang')),
  );
  expect(hreflangs).toEqual(['ru', 'en', 'uk', 'x-default']);
});

test('RU-only calculator does not link or hreflang to false translations', async ({ page, request }) => {
  await page.goto('/ru/finance/income-tax-calculator/');

  const switcher = page.locator('[data-language-switcher="desktop"]');
  await expect(switcher.locator('a')).toHaveCount(1);
  await expect(switcher.locator('[aria-disabled="true"]')).toHaveCount(2);
  await expect(page.getByTestId('locale-specific-notice')).toBeVisible();

  const href = await switcher.locator('a').getAttribute('href');
  const response = await request.get(href!);
  expect(response.status()).toBeLessThan(400);

  const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((elements) =>
    elements.map((element) => element.getAttribute('hreflang')),
  );
  expect(hreflangs).toEqual(['ru']);
});
