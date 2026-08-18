import { expect, test } from '@playwright/test';

// Контракт фильтра каталога.
//
// Сетку карточек рисует Astro один раз, а остров только показывает и прячет
// уже готовые карточки. До этой правки остров получал все калькуляторы
// сериализованными props и перерисовывал сетку на клиенте; при 48
// калькуляторах это стоило 33 878 сырых байт на каждой локали. Тест закрепляет
// то, что от смены владельца разметки не должно измениться: результаты отбора,
// доступность спрятанных карточек, пустое состояние, сброс и фокус.

const visible = '[data-catalog-card]:not([hidden])';
const all = '[data-catalog-card]';

test.describe('фильтр каталога', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ru/calculators/');
    await expect(page.locator('[data-testid="catalog-search"]')).toBeVisible();
  });

  test('карточки отдаёт сервер, а не клиент', async ({ page }) => {
    // Разметка присутствует в ответе до какой-либо гидратации.
    const raw = await (await page.request.get('/ru/calculators/')).text();
    const links = new Set([...raw.matchAll(/href="(\/ru\/[a-z0-9-]+\/[a-z0-9-]+\/)"/g)].map((m) => m[1]));
    expect(links.size).toBe(48);
    expect(raw).not.toContain('<noscript><div class="space-y-12">');
  });

  test('отбор по запросу совпадает с прежним', async ({ page }) => {
    await expect(page.locator(visible)).toHaveCount(48);

    const search = page.locator('[data-testid="catalog-search"]');
    // Числа сверены с прежней реализацией: matchesCalculatorSearch по реестру
    // даёт ровно 16 и 14. Замеры «21» и «17» из предыдущего этапа считали и
    // ссылки вне сетки, поэтому были завышены на пять.
    await search.fill('конвертер');
    await expect(page.locator(visible)).toHaveCount(16);

    await search.fill('кредит');
    await expect(page.locator(visible)).toHaveCount(14);

    // Регистр и обрамляющие пробелы не влияют на отбор.
    await search.fill('  КРЕДИТ  ');
    await expect(page.locator(visible)).toHaveCount(14);

    await search.fill('');
    await expect(page.locator(visible)).toHaveCount(48);
  });

  test('бейджи и подпись ссылки не участвуют в поиске', async ({ page }) => {
    // Иначе «открыть» совпало бы со всеми карточками: подпись стоит в каждой.
    await page.locator('[data-testid="catalog-search"]').fill('открыть');
    await expect(page.locator(visible)).toHaveCount(0);
  });

  test('спрятанная карточка недоступна ни клавиатуре, ни поиску по странице', async ({ page }) => {
    await page.locator('[data-testid="catalog-search"]').fill('кредит');
    const hidden = page.locator('[data-catalog-card][hidden]').first();
    await expect(hidden).toBeHidden();
    expect(await page.locator(all).count()).toBe(48);
    // hidden выключает элемент целиком: он не в порядке обхода и не читается.
    expect(await hidden.evaluate((el) => el.hasAttribute('hidden'))).toBe(true);
  });

  test('пустое состояние и сброс', async ({ page }) => {
    await page.locator('[data-testid="catalog-search"]').fill('щщщщ');
    await expect(page.locator(visible)).toHaveCount(0);
    await expect(page.locator('[data-testid="catalog-empty"]')).toBeVisible();

    await page.locator('[data-testid="catalog-empty-reset"]').click();
    await expect(page.locator(visible)).toHaveCount(48);
    await expect(page.locator('[data-testid="catalog-empty"]')).toHaveCount(0);
  });

  test('ввод не теряет фокус и каретку', async ({ page }) => {
    const search = page.locator('[data-testid="catalog-search"]');
    await search.click();
    await search.type('кредит', { delay: 20 });
    await expect(search).toBeFocused();
    expect(await search.evaluate((el: HTMLInputElement) => el.selectionStart)).toBe('кредит'.length);
    await expect(page.locator(visible)).toHaveCount(14);
  });

  test('метка «новые» и сортировка по имени', async ({ page }) => {
    await page.locator('[data-testid="catalog-tag-new"]').click();
    const newCount = await page.locator(visible).count();
    expect(newCount).toBeGreaterThan(0);
    expect(newCount).toBeLessThan(48);

    await page.locator('[data-testid="catalog-tag-all"]').click();
    await expect(page.locator(visible)).toHaveCount(48);

    await page.locator('[data-testid="catalog-sort"]').selectOption('name');
    // Порядок задаётся CSS-свойством order, разметка не пересобирается.
    const orders = await page.locator(visible).evaluateAll((nodes) =>
      nodes.map((node) => Number(getComputedStyle(node).order)));
    expect(orders.some((value) => value !== 0)).toBe(true);
    await expect(page.locator(visible)).toHaveCount(48);
  });

  test('состояние переживает перезагрузку через адрес', async ({ page }) => {
    await page.locator('[data-testid="catalog-search"]').fill('кредит');
    await expect(page).toHaveURL(/[?&]q=%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82/);
    await page.reload();
    await expect(page.locator(visible)).toHaveCount(14);
  });
});
