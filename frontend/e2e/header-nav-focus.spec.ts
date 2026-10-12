import { expect, test } from '@playwright/test';
import { getCategories } from '../src/lib/i18n';

for (const width of [320, 375, 768, 1024, 1280, 1440]) {
  test(`${width}px: category disclosure supports keyboard opening, tabbing and Escape`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/ru/');
    const trigger = page.getByTestId('header-categories-toggle');
    const menu = page.getByTestId('header-categories-menu');
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(menu).toHaveAttribute('open', '');
    const links = page.getByTestId('header-categories-panel').getByRole('link');
    expect(await links.count()).toBe(getCategories('ru').length);
    for (let index = 0; index < await links.count(); index += 1) {
      await page.keyboard.press('Tab');
      await expect(links.nth(index)).toBeFocused();
      const placement = await links.nth(index).evaluate((element) => {
        const box = element.getBoundingClientRect();
        const panel = element.closest('.header-menu-panel')!.getBoundingClientRect();
        return {
          text: element.textContent?.trim(),
          visibleWidth: Math.min(box.right, panel.right) - Math.max(box.left, panel.left),
          width: box.width,
          visibleHeight: Math.min(box.bottom, panel.bottom, innerHeight) - Math.max(box.top, panel.top, 0),
          height: box.height,
        };
      });
      expect(placement.visibleWidth, placement.text).toBeGreaterThanOrEqual(placement.width - 1);
      expect(placement.visibleHeight, placement.text).toBeGreaterThanOrEqual(placement.height - 1);
    }
    await page.keyboard.press('Escape');
    await expect(menu).not.toHaveAttribute('open');
    await expect(trigger).toBeFocused();
    await page.keyboard.press('Tab');
    expect(await menu.evaluate((element) => element.contains(document.activeElement))).toBe(false);
    await expect(menu).not.toHaveAttribute('open');
  });
}

test('language disclosure closes on Escape and preserves equivalent page URLs', async ({ page }) => {
  await page.goto('/ru/finance/percent-calculator/');
  const trigger = page.getByTestId('header-language-toggle');
  await trigger.focus();
  await page.keyboard.press('Space');
  await expect(page.getByTestId('header-language-menu')).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('header-lang-ru')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('header-lang-en')).toBeFocused();
  await expect(page.getByTestId('header-lang-en')).toHaveAttribute('href', '/en/finance/percent-calculator/');
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('header-language-menu')).not.toHaveAttribute('open');
  await expect(trigger).toBeFocused();
});

test('outside click and tabbing out close a menu without trapping focus', async ({ page }) => {
  await page.goto('/ru/');
  const trigger = page.getByTestId('header-categories-toggle');
  const menu = page.getByTestId('header-categories-menu');
  await trigger.click();
  await page.getByTestId('header-logo-link').click();
  await expect(menu).not.toHaveAttribute('open');
  await trigger.focus();
  await page.keyboard.press('Enter');
  const links = page.getByTestId('header-categories-panel').getByRole('link');
  await links.last().focus();
  await page.keyboard.press('Tab');
  await expect(menu).not.toHaveAttribute('open');
  expect(await menu.evaluate((element) => element.contains(document.activeElement))).toBe(false);
});

test('tabbing through categories scrolls the panel without moving the page', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto('/ru/');
  await page.evaluate(() => window.scrollTo(0, 240));
  const before = await page.evaluate(() => window.scrollY);
  await page.getByTestId('header-categories-toggle').focus();
  await page.keyboard.press('Enter');
  const links = page.getByTestId('header-categories-panel').getByRole('link');
  for (let index = 0; index < await links.count(); index += 1) await page.keyboard.press('Tab');
  const after = await page.evaluate(() => window.scrollY);
  expect(Math.abs(after - before)).toBeLessThanOrEqual(2);
  expect(await page.getByTestId('header-categories-panel').evaluate((panel) => panel.scrollTop)).toBeGreaterThan(0);
});
