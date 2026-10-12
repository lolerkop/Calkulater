import { expect, test } from '@playwright/test';

test('mobile result shortcut updates, hides stale values and focuses the visible result', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/ru/finance/mortgage-calculator/');
  const shortcut = page.getByTestId('calc-mobile-result-link');
  await expect(shortcut).toBeVisible();
  await expect(shortcut.getByTestId('calc-mobile-result-value')).toHaveText('74 981 ₽');
  await page.locator('#f-rate').fill('0');
  await expect(shortcut.getByTestId('calc-mobile-result-value')).toHaveText('26 667 ₽');
  await page.locator('#f-rate').fill('abc');
  await expect(shortcut.getByTestId('calc-mobile-result-value')).toHaveText('Проверьте значения');
  await page.locator('#f-rate').fill('0');
  await expect(shortcut.getByTestId('calc-mobile-result-value')).toHaveText('26 667 ₽');
  await shortcut.click();
  await expect(page.getByTestId('calc-result-wrap')).toBeFocused();
  await expect(shortcut).toBeHidden();
  const geometry = await page.evaluate(() => ({
    headerBottom: document.querySelector('header')!.getBoundingClientRect().bottom,
    resultTop: document.querySelector('[data-testid="calc-result-wrap"]')!.getBoundingClientRect().top,
    overflow: document.documentElement.scrollWidth - innerWidth,
    rate: (document.querySelector('#f-rate') as HTMLInputElement).value,
  }));
  expect(geometry.resultTop).toBeGreaterThanOrEqual(geometry.headerBottom);
  expect(geometry.overflow).toBe(0);
  expect(geometry.rate).toBe('0');
});

test('desktop result has no floating shortcut', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/ru/finance/mortgage-calculator/');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('74 981 ₽');
  await expect(page.getByTestId('calc-mobile-result-link')).toBeHidden();
});
