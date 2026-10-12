import { expect, test } from '@playwright/test';
import { getCategories, locales, type Locale } from '../src/lib/i18n';

const WIDTHS = [320, 375, 767, 768, 800, 900, 1022, 1023, 1024, 1440];
const ROUTES: { path: string; locale: Locale; everyLocale?: boolean }[] = [
  { path: '/ru/', locale: 'ru' },
  { path: '/en/', locale: 'en' },
  { path: '/uk/', locale: 'uk' },
  { path: '/ru/finance/', locale: 'ru' },
  { path: '/ru/date-time/working-days-calculator/', locale: 'ru', everyLocale: false },
];

for (const width of WIDTHS) {
  test(`${width}px: visible navigation controls and every category fit the viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ROUTES) {
      await page.goto(route.path);
      const where = `${route.path} @ ${width}px`;
      const catalog = page.getByTestId('header-nav-all-calculators');
      const categories = page.getByTestId('header-categories-toggle');
      const language = page.getByTestId('header-language-toggle');
      for (const control of [catalog, categories, language]) await expect(control).toBeVisible();
      const geometry = await page.getByTestId('site-header').evaluate((header) => {
        const controls = [...header.querySelectorAll<HTMLElement>('.header-catalog-link, summary')]
          .map((element) => element.getBoundingClientRect());
        return {
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          outside: controls.filter((box) => box.left < 0 || box.right > innerWidth).length,
          tooSmall: controls.filter((box) => box.width < 40 || box.height < 40).length,
          overlaps: controls.some((box, index) => controls.slice(index + 1).some((other) =>
            box.left < other.right && box.right > other.left && box.top < other.bottom && box.bottom > other.top)),
        };
      });
      expect(geometry.overflow, `${where}: document overflow`).toBeLessThanOrEqual(1);
      expect(geometry.outside, `${where}: control outside viewport`).toBe(0);
      expect(geometry.tooSmall, `${where}: undersized tap target`).toBe(0);
      expect(geometry.overlaps, `${where}: overlapping controls`).toBe(false);
      await categories.click();
      const panel = page.getByTestId('header-categories-panel');
      await expect(panel).toBeVisible();
      const categoryLinks = panel.getByRole('link');
      expect(await categoryLinks.count(), `${where}: category count`).toBe(getCategories(route.locale).length);
      const box = (await panel.boundingBox())!;
      expect(box.x, `${where}: panel left edge`).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width, `${where}: panel right edge`).toBeLessThanOrEqual(width);
      expect(await panel.evaluate((element) => element.scrollWidth - element.clientWidth), `${where}: horizontal menu scroll`).toBeLessThanOrEqual(1);
      for (const category of getCategories(route.locale)) {
        await expect(page.getByTestId(`header-nav-${category.slug}`)).toHaveCount(1);
        await expect(page.getByTestId(`header-nav-${category.slug}`)).toHaveAttribute('href', `/${route.locale}/${category.slug}/`);
      }
      await language.click();
      await expect(page.getByTestId('header-categories-menu')).not.toHaveAttribute('open');
      expect(await page.locator('[data-language-switcher] a').count(), `${where}: available languages`)
        .toBeGreaterThanOrEqual(route.everyLocale === false ? locales.length - 1 : locales.length);
      const languageOptions = page.locator('[data-language-switcher] .header-language-option');
      expect(await languageOptions.count()).toBe(locales.length);
      for (const option of await languageOptions.all()) {
        await expect(option).toBeVisible();
        const optionBox = (await option.boundingBox())!;
        expect(optionBox.x).toBeGreaterThanOrEqual(0);
        expect(optionBox.x + optionBox.width).toBeLessThanOrEqual(width);
        expect(optionBox.height).toBeGreaterThanOrEqual(40);
      }
    }
  });
}

test('category menu follows its selected section and opens a destination', async ({ page }) => {
  await page.goto('/ru/finance/percent-calculator/');
  await page.getByTestId('header-categories-toggle').click();
  await expect(page.getByTestId('header-nav-finance')).toHaveAttribute('aria-current', 'location');
  await page.getByTestId('header-nav-finance').click();
  await expect(page).toHaveURL(/\/ru\/finance\/$/);
  await page.getByTestId('header-categories-toggle').click();
  await expect(page.getByTestId('header-nav-finance')).toHaveAttribute('aria-current', 'page');
});

test('menus remain usable when JavaScript is disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 800 } });
  const page = await context.newPage();
  await page.goto('/ru/');
  await page.getByTestId('header-categories-toggle').click();
  await expect(page.getByTestId('header-nav-finance')).toBeVisible();
  await page.getByTestId('header-nav-finance').click();
  await expect(page).toHaveURL(/\/ru\/finance\/$/);
  await page.getByTestId('header-language-toggle').click();
  await expect(page.getByTestId('header-lang-en')).toBeVisible();
  await page.getByTestId('header-lang-en').click();
  await expect(page).toHaveURL(/\/en\/finance\/$/);
  await context.close();
});
