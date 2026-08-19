import { test, expect, type Page } from '@playwright/test';

// Индекс поиска приезжает отдельным файлом по первому обращению к поиску.
// Это вторая асинхронная граница после гидратации, и она своя: запрос
// посетителя живёт в React, а данные — в сети. Ниже проверяется именно стык.

const INDEX = '**/search-index/*.json';

/** Держит ответ индекса до явного разрешения. */
async function задержатьИндекс(page: Page) {
  let отпустить: () => void = () => {};
  const ждать = new Promise<void>((resolve) => { отпустить = resolve; });
  await page.route(INDEX, async (route) => {
    await ждать;
    await route.continue();
  });
  return () => отпустить();
}

/** Остров подключается по client:idle: до этого onFocus ещё не навешен. */
async function дождатьсяГидратации(page: Page) {
  await page.waitForFunction(() => {
    const box = document.querySelector('[data-testid="search-box"]');
    const island = box && box.closest('astro-island');
    return !!island && !island.hasAttribute('ssr');
  }, undefined, { timeout: 25000 });
}

test.describe('ленивый индекс поиска', () => {
  test('индекс не запрашивается, пока поиск не тронули', async ({ page }) => {
    const запросы: string[] = [];
    page.on('request', (r) => { if (r.url().includes('/search-index/')) запросы.push(r.url()); });
    await page.goto('/ru/');
    await дождатьсяГидратации(page);
    await page.waitForTimeout(1200);
    expect(запросы, 'нетронутая страница индекс не тянет').toEqual([]);
  });

  test('фокус на поле поднимает индекс', async ({ page }) => {
    const запросы: string[] = [];
    page.on('request', (r) => { if (r.url().includes('/search-index/')) запросы.push(r.url()); });
    await page.goto('/ru/');
    await дождатьсяГидратации(page);
    await page.getByTestId('search-input').focus();
    await expect.poll(() => запросы.length, { timeout: 10000 }).toBeGreaterThan(0);
    expect(запросы[0], 'локаль своя').toContain('/search-index/ru.json');
  });

  test('набранное во время загрузки индекса не теряется', async ({ page }) => {
    const отпустить = await задержатьИндекс(page);
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.fill('кредит');
    // Индекс ещё в пути: панели быть не должно, но текст обязан стоять.
    expect(await input.inputValue()).toBe('кредит');
    expect(await page.getByTestId('search-results').count(), 'панель ждёт индекс').toBe(0);
    отпустить();
    await page.getByTestId('search-results').waitFor({ timeout: 10000 });
    expect(await input.inputValue(), 'запрос пережил загрузку').toBe('кредит');
    expect(await page.getByTestId('search-result-0').count()).toBeGreaterThan(0);
  });

  test('запрос сменился во время загрузки — выдача по новому', async ({ page }) => {
    const отпустить = await задержатьИндекс(page);
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.fill('кредит');
    await input.fill('плитка');
    отпустить();
    await page.getByTestId('search-results').waitFor({ timeout: 10000 });
    const ссылки = await page.locator('[data-testid^="search-result-"]').evaluateAll(
      (nodes) => nodes.map((n) => n.getAttribute('href') ?? ''),
    );
    expect(ссылки.length, 'что-то нашлось').toBeGreaterThan(0);
    expect(ссылки.some((h) => h.includes('tile')), 'выдача по «плитка»').toBe(true);
    expect(ссылки.some((h) => h.includes('credit')), 'старого запроса в выдаче нет').toBe(false);
  });

  test('очистка во время загрузки не оставляет выдачу', async ({ page }) => {
    const отпустить = await задержатьИндекс(page);
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.fill('кредит');
    await input.fill('');
    отпустить();
    await page.waitForTimeout(1000);
    expect(await input.inputValue(), 'поле осталось пустым').toBe('');
    expect(await page.getByTestId('search-results').count(), 'панели нет').toBe(0);
  });

  test('индекс не отдался — поле остаётся рабочим, страница не падает', async ({ page }) => {
    const ошибки: string[] = [];
    page.on('pageerror', (e) => ошибки.push(String(e)));
    await page.route(INDEX, (route) => route.fulfill({ status: 500, body: 'nope' }));
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.fill('кредит');
    await page.waitForTimeout(1200);
    expect(await input.inputValue(), 'ввод продолжает работать').toBe('кредит');
    await input.fill('кредит наличными');
    expect(await input.inputValue()).toBe('кредит наличными');
    expect(ошибки, 'необработанных исключений нет').toEqual([]);
  });

  test('повторное обращение не тянет индекс заново', async ({ page }) => {
    const запросы: string[] = [];
    page.on('request', (r) => { if (r.url().includes('/search-index/')) запросы.push(r.url()); });
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.fill('кредит');
    await page.getByTestId('search-results').waitFor({ timeout: 10000 });
    await input.fill('');
    await input.fill('плитка');
    await page.getByTestId('search-results').waitFor({ timeout: 10000 });
    expect(запросы.length, 'индекс забран один раз').toBe(1);
  });

  test('404 тоже ищет и тоже лениво', async ({ page }) => {
    const запросы: string[] = [];
    page.on('request', (r) => { if (r.url().includes('/search-index/')) запросы.push(r.url()); });
    await page.goto('/nesuschestvuyushchaya-stranica/');
    const input = page.getByTestId('search-input');
    await input.waitFor();
    expect(запросы, 'до обращения индекса нет').toEqual([]);
    await input.fill('кредит');
    await page.getByTestId('search-results').waitFor({ timeout: 10000 });
    expect(await page.getByTestId('search-result-0').count()).toBeGreaterThan(0);
  });
});
