import { expect, test } from '@playwright/test';

// Подборка на синтетическом масштабе.
//
// Настоящих калькуляторов 211, а сертифицированная цель — 300. Проверить
// поведение на цели можно только синтетикой, поэтому карточки клонируются из
// настоящей ПРЯМО В БРАУЗЕРЕ: они живут в памяти вкладки и не попадают ни в
// исходники, ни в сборку, ни в манифесты, ни в карту сайта.
//
// Размер страницы на цели проверяет отдельный гейт бюджетов; здесь проверяется
// ПОВЕДЕНИЕ: сетка, ссылки, отбор, сортировка, сброс, клавиатура и вёрстка.

const visible = '[data-catalog-card]:not([hidden])';
const search = '[data-testid="catalog-search"]';
const TARGET = 300;

async function inflate(page: import('@playwright/test').Page, target: number) {
  return page.evaluate((n) => {
    const grid = document.getElementById('catalog-results')!;
    const cards = [...document.querySelectorAll('[data-catalog-card]')] as HTMLElement[];
    const proto = cards[cards.length - 1];
    for (let i = cards.length; i < n; i += 1) {
      const clone = proto.cloneNode(true) as HTMLElement;
      clone.setAttribute('href', `/ru/math/synthetic-${i}/`);
      clone.querySelector('h3')!.textContent = `синтетический калькулятор ${i}`;
      clone.querySelector('p')!.textContent = `описание синтетического калькулятора ${i}`;
      grid.appendChild(clone);
    }
    return document.querySelectorAll('[data-catalog-card]').length;
  }, target);
}

test(`подборка работает при ${TARGET} карточках`, async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/ru/calculators/', { waitUntil: 'networkidle' });
  const real = await page.locator('[data-catalog-card]').count();
  expect(await inflate(page, TARGET)).toBe(TARGET);

  // все ссылки на месте и уникальны
  const hrefs = await page.locator('[data-catalog-card]').evaluateAll(
    (els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href')));
  expect(hrefs).toHaveLength(TARGET);
  expect(new Set(hrefs).size, 'ссылки уникальны').toBe(TARGET);
  expect(await page.locator('#catalog-results').count(), 'ровно одна сетка').toBe(1);

  // текстовый отбор сужает выдачу и находит синтетическое
  await page.locator(search).fill('синтетический');
  await expect.poll(() => page.locator(visible).count(), { timeout: 15000 })
    .toBe(TARGET - real);

  // сортировка и сброс
  await page.locator('[data-testid="catalog-sort"]').selectOption('name');
  await expect.poll(() => page.locator(visible).count()).toBe(TARGET - real);
  await page.locator(search).fill('');
  await expect.poll(() => page.locator(visible).count()).toBe(TARGET);

  // клавиатура не проваливается в спрятанные карточки
  await page.locator(search).fill('синтетический');
  await expect.poll(() => page.locator(visible).count()).toBeLessThan(TARGET);
  await page.locator(search).focus();
  const focusedHidden: string[] = [];
  for (let i = 0; i < 25; i += 1) {
    await page.keyboard.press('Tab');
    const bad = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || !el.hasAttribute('data-catalog-card')) return null;
      return el.hasAttribute('hidden') ? el.getAttribute('href') : null;
    });
    if (bad) focusedHidden.push(bad);
  }
  expect(focusedHidden, 'спрятанная карточка получила фокус').toEqual([]);
  expect(errors, 'ошибки страницы на масштабе').toEqual([]);
});

for (const width of [320, 1440]) {
  test(`вёрстка подборки не ломается при ${TARGET} карточках @ ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/ru/calculators/', { waitUntil: 'networkidle' });
    await inflate(page, TARGET);
    const over = await page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(over, `переполнение документа @${width}`).toBeLessThanOrEqual(1);
    const report = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('[data-catalog-card]')] as HTMLElement[];
      const ids = [...document.querySelectorAll('[id]')].map((e) => e.id);
      return { noName: cards.filter((c) => !(c.textContent ?? '').trim()).length,
        dupIds: ids.length - new Set(ids).size };
    });
    expect(report.noName, 'карточки без доступного имени').toBe(0);
    expect(report.dupIds, 'дубли id').toBe(0);
  });
}
