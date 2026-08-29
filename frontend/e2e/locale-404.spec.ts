import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { locales, getCalculators, ui } from '../src/lib/i18n';

// Страница «не найдено» для каждой публичной локали.
//
// Раньше страница была одна и русская: посетитель английского, украинского или
// немецкого адреса попадал на русский текст и русские ссылки. Теперь у каждой
// локали своя страница, а хостинг отдаёт ближайшую вверх по дереву.
//
// Здесь два разных утверждения, и их важно не путать:
//   1. СОДЕРЖАНИЕ страницы — проверяется везде, обращением к файлу напрямую;
//   2. МАРШРУТИЗАЦИЯ «неизвестный адрес → ближайшая 404» — свойство хостинга,
//      и локальный `astro preview` его не воспроизводит: он отдаёт корневую
//      страницу. Поэтому маршрутизация проверяется только против Cloudflare.

const cloudflare = /calcuway\.com|pages\.dev/;

test.describe('содержание локальной страницы «не найдено»', () => {
  for (const locale of locales) {
    test(`${locale}: свой язык, свой заголовок и свои ссылки`, async ({ page }) => {
      const response = await page.goto(`/${locale}/404.html`);
      expect(response?.status(), 'файл страницы отдаётся').toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', locale);

      const headings = page.locator('h1');
      await expect(headings).toHaveCount(1);
      await expect(headings).not.toBeEmpty();

      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(0);

      const all = page.getByTestId('page-404-all-link');
      const home = page.getByTestId('page-404-home-link');
      await expect(all).toHaveAttribute('href', `/${locale}/calculators/`);
      await expect(home).toHaveAttribute('href', `/${locale}/`);
      await expect(all).toHaveText(ui[locale].allCalculators);
      await expect(home).toHaveText(ui[locale].home);

      // Разделы ведут внутрь своей локали, а не в русскую.
      const hrefs = await page.getByTestId('page-404-categories').locator('a')
        .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
      expect(hrefs.length).toBeGreaterThan(0);
      for (const href of hrefs) expect(href, href).toMatch(new RegExp(`^/${locale}/`));

      // Текст страницы — на своём языке: чужой кириллицы на немецкой и
      // английской странице быть не может.
      const text = await page.locator('main').innerText();
      if (locale === 'de' || locale === 'en') expect(text).not.toMatch(/[А-Яа-яЁё]/);
      expect(text).not.toMatch(/\{\w+\}|undefined|NaN/);
    });
  }

  test('счётчик инструментов совпадает с каталогом локали', async ({ page }) => {
    for (const locale of locales) {
      await page.goto(`/${locale}/404.html`);
      const text = await page.getByTestId('page-404-search').innerText();
      expect(text, locale).toContain(String(getCalculators(locale).length));
    }
  });
});

test.describe('доступность и клавиатура на странице «не найдено»', () => {
  test('обе кнопки достижимы с клавиатуры и имеют видимый фокус', async ({ page }) => {
    await page.goto('/de/404.html');
    const all = page.getByTestId('page-404-all-link');
    await all.focus();
    await expect(all).toBeFocused();
    const outline = await all.evaluate((el) => {
      const s = getComputedStyle(el, ':focus-visible');
      return `${s.outlineStyle} ${s.outlineWidth} ${s.boxShadow}`;
    });
    expect(outline.length).toBeGreaterThan(0);
    await page.keyboard.press('Tab');
    await expect(page.getByTestId('page-404-home-link')).toBeFocused();
  });

  for (const locale of locales) {
    test(`${locale}: axe без нарушений уровня A/AA`, async ({ page }) => {
      await page.goto(`/${locale}/404.html`);
      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(violations.map((v) => `${v.id}: ${v.impact}`)).toEqual([]);
    });
  }

  for (const width of [320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440]) {
    test(`ширина ${width}: страница «не найдено» не уезжает вбок`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const locale of locales) {
        await page.goto(`/${locale}/404.html`);
        const overflow = await page.evaluate(() =>
          document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, `${locale} @ ${width}`).toBeLessThanOrEqual(1);
      }
    });
  }
});

test.describe('маршрутизация неизвестного адреса', () => {
  test.skip(({ baseURL }) => !cloudflare.test(baseURL ?? ''),
    'Правило «ближайший 404.html» принадлежит Cloudflare; локальный astro preview его не воспроизводит.');

  for (const locale of locales) {
    test(`${locale}: неизвестный адрес отдаёт 404 на своём языке`, async ({ page }) => {
      for (const path of [
        `/${locale}/audit-missing-xyz/`,
        `/${locale}/calculators/page/0/`,
        `/${locale}/finance/no-such-calculator-9f2/`,
      ]) {
        const response = await page.goto(path);
        expect(response?.status(), path).toBe(404);
        await expect(page.locator('html'), path).toHaveAttribute('lang', locale);
        await expect(page.getByTestId('page-404-home-link'), path).toHaveAttribute('href', `/${locale}/`);
      }
    });
  }

  test('адрес без локали остаётся на корневой странице', async ({ page }) => {
    const response = await page.goto('/audit-missing-xyz/');
    expect(response?.status()).toBe(404);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  });
});
