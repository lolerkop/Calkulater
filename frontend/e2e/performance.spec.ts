import { expect, test } from '@playwright/test';

test('calculator load and input stay within the CLS target', async ({ page }) => {
  await page.addInitScript(() => {
    (window as any).__performanceMetrics = { cls: 0 };
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any) {
        if (!entry.hadRecentInput) (window as any).__performanceMetrics.cls += entry.value;
      }
    }).observe({ type: 'layout-shift', buffered: true });
  });

  await page.goto('/ru/finance/income-tax-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await page.locator('#f-amount').fill('250000');
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await page.waitForTimeout(250);

  const metrics = await page.evaluate(() => (window as any).__performanceMetrics);
  expect(metrics.cls).toBeLessThanOrEqual(0.1);
});

test('production pages use local fonts and a single calculator island', async ({ page }) => {
  const thirdPartyFontRequests: string[] = [];
  page.on('request', (request) => {
    if (/fonts\.(?:googleapis|gstatic)\.com/.test(request.url())) thirdPartyFontRequests.push(request.url());
  });

  await page.goto('/uk/fitness/kalkulyator-bmi/');
  await expect(page.locator('[data-testid^="calculator-island-"]')).toHaveCount(1);
  expect(thirdPartyFontRequests).toEqual([]);
  const loadedFonts = await page.evaluate(() =>
    performance.getEntriesByType('resource')
      .map((entry) => entry.name)
      .filter((url) => url.includes('/fonts/')),
  );
  expect(loadedFonts.length).toBeGreaterThan(0);
});
