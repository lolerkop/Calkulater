import { expect, test } from '@playwright/test';
import { getCalculators } from '../src/lib/i18n';
import { CATALOG_PAGE_SIZE, catalogPageCount } from '../src/lib/catalogPagination';

// Подборка на масштабе.
//
// Контракт изменён Catalog Scale 4. Раньше все калькуляторы стояли одной
// страницей, и проверка масштаба клонировала карточки прямо в DOM, чтобы
// посмотреть на поведение при цели в 300. Теперь страница ОГРАНИЧЕНА срезом, а
// численность каталога влияет только на число страниц, поэтому проверять надо
// другое:
//
//   1. срез каждой страницы не превышает размер страницы;
//   2. страницы вместе дают ТОЧНОЕ разбиение подборки — ни пропусков, ни дублей;
//   3. любой калькулятор достижим от корня подборки за два клика без JS;
//   4. отбор и сортировка охватывают весь каталог, а не текущий срез;
//   5. клиентская сетка выдерживает глобальный результат целиком.
//
// Вес страниц на цели в 500 проверяет отдельный гейт бюджетов: он умеет строить
// набор страниц синтетически и не требует браузера.

const TOTAL = getCalculators('ru').length;
const PAGES = catalogPageCount(TOTAL);
const SSR = '[data-catalog-ssr-grid] [data-catalog-card]';
const GLOBAL = '[data-catalog-global-grid] [data-catalog-card]';
const visible = `[data-catalog-ssr-grid]:not([hidden]) [data-catalog-card]:not([hidden]), ${GLOBAL}`;

const pagePath = (index: number) => (index === 1 ? '/ru/calculators/' : `/ru/calculators/page/${index}/`);

test('страницы подборки дают точное разбиение и достижимы без JS', async ({ page }) => {
  const seen: string[] = [];
  for (let index = 1; index <= PAGES; index += 1) {
    const response = await page.request.get(pagePath(index));
    expect(response.status(), pagePath(index)).toBe(200);
    const html = await response.text();
    const links = [...html.matchAll(/<a href="(\/ru\/[a-z0-9-]+\/[a-z0-9-]+\/)"[^>]*data-catalog-card/g)].map((m) => m[1]);
    expect(links.length, `${pagePath(index)}: срез не больше размера страницы`).toBeLessThanOrEqual(CATALOG_PAGE_SIZE);
    expect(links.length, `${pagePath(index)}: срез не пуст`).toBeGreaterThan(0);
    // Навигация по страницам — настоящие ссылки, а не состояние на клиенте.
    for (let other = 1; other <= PAGES; other += 1) {
      expect(html, `${pagePath(index)}: ссылка на страницу ${other}`).toContain(`href="${pagePath(other)}"`);
    }
    seen.push(...links);
  }
  expect(seen.length, 'сумма срезов равна численности подборки').toBe(TOTAL);
  expect(new Set(seen).size, 'ни один калькулятор не повторяется на двух страницах').toBe(TOTAL);
});

test('несуществующие номера страниц не порождаются', async ({ page }) => {
  for (const bad of [String(PAGES + 1), '0', '999', 'abc']) {
    const response = await page.request.get(`/ru/calculators/page/${bad}/`);
    expect(response.status(), `page/${bad}/`).toBe(404);
  }
  // Алиаса первой страницы нет: у неё канонический адрес подборки.
  expect((await page.request.get('/ru/calculators/page/1/')).status()).toBe(404);
});

test('глобальный отбор охватывает весь каталог и клиентская сетка его выдерживает', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/ru/calculators/', { waitUntil: 'networkidle' });
  await expect(page.locator('[data-testid="catalog-result-count"]')).toContainText(String(TOTAL), { timeout: 20000 });
  expect(await page.locator(SSR).count()).toBe(Math.min(CATALOG_PAGE_SIZE, TOTAL));

  // Сортировка по имени выводит ВЕСЬ каталог одной клиентской сеткой.
  const started = Date.now();
  await page.locator('[data-testid="catalog-sort"]').selectOption('name');
  await expect.poll(() => page.locator(GLOBAL).count(), { timeout: 20000 }).toBe(TOTAL);
  const elapsed = Date.now() - started;
  expect(elapsed, 'глобальная выдача отрисовывается без заметной задержки').toBeLessThan(5000);

  const hrefs = await page.locator(GLOBAL).evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href')));
  expect(new Set(hrefs).size, 'глобальная выдача без дублей').toBe(TOTAL);

  // Сброс возвращает страничное состояние.
  await page.locator('[data-testid="catalog-sort"]').selectOption('popular');
  await expect(page.locator('[data-catalog-ssr-grid]')).toBeVisible();
  await expect(page.locator('[data-testid="catalog-pagination"]')).toBeVisible();
  await expect.poll(() => page.locator(visible).count()).toBe(Math.min(CATALOG_PAGE_SIZE, TOTAL));
  expect(errors).toEqual([]);
});
