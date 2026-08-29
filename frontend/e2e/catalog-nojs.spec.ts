import { expect, test } from '@playwright/test';
import { getCalculators, locales } from '../src/lib/i18n';
import { CATALOG_PAGE_SIZE, catalogPageCount, catalogPagePath } from '../src/lib/catalogPagination';

// Контракт подборки БЕЗ JavaScript.
//
// Прежний контракт звучал так: «все ссылки на калькуляторы лежат в одном
// документе подборки». Catalog Scale 4 заменила его намеренно и на более
// сильный, потому что прежний упирался в арифметику: одна страница со всеми
// карточками при 500 калькуляторах не помещается в потолок маршрута ни при
// какой чистке разметки, а убрать описания значило бы решить задачу за счёт
// продукта.
//
// Новый контракт:
//   «все калькуляторы отрисованы сервером и достижимы по ограниченному графу
//    страничности БЕЗ JavaScript».
//
// Он строже прежнего в том, что требует ещё и точного разбиения: каждый
// калькулятор обязан стоять ровно на одной странице.

test.describe('подборка без JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  for (const locale of locales) {
    test(`${locale}: страницы отрисованы, ссылки настоящие, разбиение точное`, async ({ page }) => {
      const total = getCalculators(locale).length;
      const pages = catalogPageCount(total);
      const catalogPath = `/${locale}/calculators/`;
      const seen: string[] = [];

      for (let index = 1; index <= pages; index += 1) {
        const path = catalogPagePath(catalogPath, index);
        const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
        expect(response?.status(), path).toBe(200);

        // Карточки видны без гидратации.
        const cards = page.locator('[data-catalog-ssr-grid] [data-catalog-card]');
        const count = await cards.count();
        expect(count, `${path}: карточки отрисованы сервером`).toBeGreaterThan(0);
        expect(count, `${path}: срез не больше размера страницы`).toBeLessThanOrEqual(CATALOG_PAGE_SIZE);
        await expect(cards.first()).toBeVisible();

        // Дубля в <noscript> нет: он показывал бы каждый калькулятор дважды.
        expect(await page.locator('noscript').count(), `${path}: без дубля в noscript`).toBe(0);

        const hrefs = await cards.evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href') ?? ''));
        seen.push(...hrefs);

        // Навигация — настоящие ссылки на все страницы.
        // При единственной странице блока страничности нет вовсе, и это верно:
        // немецкий каталог курируется и пока умещается на одну страницу.
        if (pages === 1) {
          await expect(
            page.locator('[data-testid="catalog-pagination"]'),
            `${path}: одна страница — страничности быть не должно`,
          ).toHaveCount(0);
          continue;
        }
        for (let other = 1; other <= pages; other += 1) {
          const link = page.locator(`[data-testid="catalog-pagination-page-${other}"]`);
          await expect(link, `${path}: ссылка на страницу ${other}`).toHaveAttribute('href', catalogPagePath(catalogPath, other));
        }
        // Текущая страница помечена для скринридера, а не только видом.
        await expect(page.locator(`[data-testid="catalog-pagination-page-${index}"]`)).toHaveAttribute('aria-current', 'page');
      }

      expect(seen.length, 'сумма срезов равна численности').toBe(total);
      expect(new Set(seen).size, 'ни один калькулятор не повторяется').toBe(total);
    });

    test(`${locale}: переход по страничности и по карточке работает кликом без JS`, async ({ page }) => {
      const catalogPath = `/${locale}/calculators/`;
      const pages = catalogPageCount(getCalculators(locale).length);
      await page.goto(catalogPath, { waitUntil: 'domcontentloaded' });
      if (pages > 1) {
        await page.locator('[data-testid="catalog-pagination-next"]').click();
        await expect(page).toHaveURL(new RegExp(`${catalogPath}page/2/$`));
        await expect(page.locator('[data-catalog-ssr-grid] [data-catalog-card]').first()).toBeVisible();
        await page.locator('[data-testid="catalog-pagination-prev"]').click();
        await expect(page).toHaveURL(new RegExp(`${catalogPath}$`));
      }
      // И сам калькулятор открывается кликом с последней страницы.
      await page.goto(catalogPagePath(catalogPath, pages), { waitUntil: 'domcontentloaded' });
      const last = page.locator('[data-catalog-ssr-grid] [data-catalog-card]').last();
      const href = await last.getAttribute('href');
      await last.click();
      await expect(page).toHaveURL(new RegExp(`${href}$`));
      await expect(page.locator('[data-testid="calculator-fields"]')).toBeVisible();
    });
  }

  test('глубина от корня подборки до любого калькулятора — два клика', async ({ page }) => {
    const total = getCalculators('ru').length;
    const pages = catalogPageCount(total);
    await page.goto('/ru/calculators/', { waitUntil: 'domcontentloaded' });
    // С корня видны ссылки на ВСЕ страницы, поэтому «корень → страница →
    // калькулятор» покрывает весь каталог за два клика при любом их числе.
    const pageLinks = await page.locator('[data-testid^="catalog-pagination-page-"]').count();
    expect(pageLinks).toBe(pages);
    const fromRoot = await page.locator('[data-catalog-ssr-grid] [data-catalog-card]').count();
    let reachable = fromRoot;
    for (let index = 2; index <= pages; index += 1) {
      await page.goto(`/ru/calculators/page/${index}/`, { waitUntil: 'domcontentloaded' });
      reachable += await page.locator('[data-catalog-ssr-grid] [data-catalog-card]').count();
    }
    expect(reachable, 'весь каталог достижим за два клика').toBe(total);
  });
});

// Доступность самой страничности. Контрол новый, поэтому базы для сравнения у
// него нет: требования заданы прямо.
test.describe('доступность страничности', () => {
  test('клавиатура, фокус, размер цели и отсутствие переполнения', async ({ page }) => {
    for (const width of [320, 375, 430, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/calculators/', { waitUntil: 'domcontentloaded' });
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${width}px: горизонтальное переполнение`).toBeLessThanOrEqual(0);
      const boxes = await page.locator('[data-testid="catalog-pagination"] a').evaluateAll((els) =>
        els.map((e) => { const b = e.getBoundingClientRect(); return { w: Math.round(b.width), h: Math.round(b.height) }; }));
      expect(boxes.length, `${width}px: ссылки страничности есть`).toBeGreaterThan(0);
      for (const box of boxes) {
        expect(box.w, `${width}px: ширина цели`).toBeGreaterThanOrEqual(44);
        expect(box.h, `${width}px: высота цели`).toBeGreaterThanOrEqual(44);
      }
    }

    // Обход табом доходит до страничности, фокус виден, переход работает.
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/ru/calculators/', { waitUntil: 'domcontentloaded' });
    const next = page.locator('[data-testid="catalog-pagination-next"]');
    await next.focus();
    await expect(next).toBeFocused();
    const outline = await next.evaluate((el) => {
      const s = getComputedStyle(el);
      return { outline: s.outlineStyle, width: s.outlineWidth, shadow: s.boxShadow };
    });
    expect(outline.outline !== 'none' || outline.shadow !== 'none', 'фокус виден').toBe(true);
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/ru\/calculators\/page\/2\/$/);
    // Текущая страница объявлена скринридеру.
    await expect(page.locator('[data-testid="catalog-pagination-page-2"]')).toHaveAttribute('aria-current', 'page');
  });
});
