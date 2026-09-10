import { expect, test, type Page } from '@playwright/test';
import { getCalculators, getCategories } from '../src/lib/i18n';

// Испанская локаль в браузере.
//
// Статические ворота видят только собранный HTML, а результат калькулятора
// дорисовывает остров после гидратации: подписи и значения там переводятся
// другим путём и в артефакт не попадают вовсе. Именно там жили русские подписи
// на немецких страницах, и та же дорога открыта испанским. Поэтому проверка
// открывает каждую испанскую страницу, перебирает все переключатели и списки и
// требует, чтобы в видимом тексте не осталось ни кириллицы, ни мусора.

const spanish = getCalculators('es');
const categories = getCategories('es');
const CYRILLIC = /[А-Яа-яЁё]+/g;
const JUNK = /NaN|Infinity|undefined|\[object Object\]/;

async function expectSpanishText(page: Page, where: string): Promise<void> {
  const text = await page.locator('main').innerText();
  expect([...new Set(text.match(CYRILLIC) ?? [])], where).toEqual([]);
}

test.describe.configure({ mode: 'parallel' });

test('испанский каталог покрывает все разделы', () => {
  expect(spanish.length).toBeGreaterThanOrEqual(16);
  expect(new Set(spanish.map((c) => c.category)).size).toBe(categories.length);
});

for (const calculator of spanish) {
  test(`испанская страница ${calculator.id} остаётся испанской во всех режимах`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(String(error)));

    await page.goto(calculator.fullPath!);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    const result = page.getByTestId('calc-result');
    await expect(result).toBeVisible({ timeout: 15000 });

    const check = async (step: string) => {
      await expectSpanishText(page, `${calculator.id} :: ${step}`);
      expect(await result.innerText(), `${calculator.id} :: ${step}`).not.toMatch(JUNK);
    };
    await check('значения по умолчанию');

    let touched = 0;
    let absent = 0;
    let locked = 0;
    for (const field of calculator.fields) {
      for (const option of field.options ?? []) {
        const button = page.getByTestId(`field-${field.name}-opt-${String(option.value)}`);
        const select = page.locator(`select[data-testid="field-${field.name}"]`);
        const control = (await button.count()) ? button.first()
          : (await select.count()) ? select.first()
          : null;
        if (!control) {
          expect(field.showIf, `${calculator.id}.${field.name}: элемента нет без showIf`).toBeTruthy();
          absent += 1;
          continue;
        }
        if (await control.isDisabled()) {
          locked += 1;
          continue;
        }
        if (await button.count()) await control.click();
        else await control.selectOption(String(option.value));
        touched += 1;
        await check(`${field.name}=${String(option.value)}`);
      }
    }
    const variants = calculator.fields.reduce((sum, f) => sum + (f.options?.length ?? 0), 0);
    expect(touched + absent + locked, `${calculator.id}: варианты учтены`).toBe(variants);

    expect(errors, `${calculator.id}: ошибки страницы`).toEqual([]);
  });
}

test('испанские разделы и служебные страницы не отдают чужой язык', async ({ page }) => {
  const routes = ['/es/', '/es/calculators/', '/es/about/', '/es/contacts/', '/es/privacy/',
    ...categories.map((category) => `/es/${category.slug}/`)];
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expectSpanishText(page, route);
  }
});

for (const width of [320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440]) {
  test(`испанская страница не уезжает вбок при ширине ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      '/es/',
      '/es/calculators/',
      '/es/finanzas/cuota-francesa/',
      '/es/reformas/calculadora-azulejos/',
      '/es/quimica/calculadora-de-ph-y-poh/',
    ]) {
      await page.goto(route);
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${route} @ ${width}`).toBeLessThanOrEqual(1);
      await expectSpanishText(page, `${route} @ ${width}`);
    }
  });
}

test('испанская форма проходится с клавиатуры и считает без мыши', async ({ page }) => {
  await page.goto('/es/finanzas/cuota-francesa/');
  const result = page.getByTestId('calc-result');
  await expect(result).toBeVisible();

  const amount = page.getByTestId('field-amount');
  await amount.focus();
  await expect(amount).toBeFocused();
  await amount.press('ControlOrMeta+a');
  await amount.pressSequentially('250000');
  await expect(result).toContainText('€');
  await expectSpanishText(page, 'после ввода с клавиатуры');

  const names: string[] = [];
  for (let i = 0; i < 14; i += 1) {
    await page.keyboard.press('Tab');
    const name = await page.evaluate(() => {
      const active = document.activeElement as HTMLElement | null;
      if (!active) return '';
      return active.getAttribute('aria-label') ?? active.textContent?.trim() ?? active.tagName;
    });
    if (name) names.push(name);
  }
  expect(names.every((name) => name.length > 0), 'у каждой остановки табуляции есть имя').toBe(true);
});

test('испанские числа печатаются запятой, а не английской точкой', async ({ page }) => {
  await page.goto('/es/finanzas/cuota-francesa/');
  const primary = page.getByTestId('calc-result-primary');
  await expect(primary).toBeVisible();
  const shown = (await primary.innerText()).trim();
  // Запятая — десятичный разделитель; английская группировка запятой запрещена.
  expect(shown, 'испанский результат').not.toMatch(/\d,\d{3}(?!\d)/);
  expect(shown).toMatch(/€/);
});

test('испанский поиск находит слово, набранное без ударения', async ({ page }) => {
  await page.goto('/es/calculators/');
  const search = page.locator('[data-testid="catalog-search"]');
  await expect(search).toBeVisible();
  await search.fill('prestamo');
  const visible = '[data-catalog-ssr-grid]:not([hidden]) [data-catalog-card]:not([hidden]), [data-catalog-global-grid] [data-catalog-card]';
  await expect.poll(async () => page.locator(visible).count(), { timeout: 10000 }).toBeGreaterThan(0);
  const hrefs = await page.locator(visible).evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute('href') ?? ''));
  expect(hrefs.some((href) => href.includes('/es/finanzas/cuota-francesa/')), 'найдена куота франсеса').toBe(true);
  await expectSpanishText(page, 'поиск без ударения');
});
