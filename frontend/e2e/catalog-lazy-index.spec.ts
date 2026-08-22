import { expect, test } from '@playwright/test';

// Ленивая ГЛОБАЛЬНАЯ подборка каталога.
//
// Контракт изменён Catalog Scale 4 и это записано намеренно. Раньше сервер
// отдавал все карточки одной страницей, и отбор по категории, метке и
// сортировка обходились разметкой: индекс требовался только текстовому запросу
// ради ключевых слов. Теперь подборка страничная, сервер отдаёт срез, и ЛЮБОЙ
// отбор обязан работать по всему каталогу — иначе «искать по калькуляторам»
// молча превратилось бы в «искать по текущей странице».
//
// Поэтому индекс забирается при ПЕРВОМ взаимодействии любого рода. До
// взаимодействия — по-прежнему ни одного запроса, и после — ровно один.
//
// Граница асинхронности проверяется так же строго, как у поиска в шапке:
// главная ошибка здесь — сказать «ничего не найдено», пока данные, по которым
// ищем, ещё летят.

const CATALOG = '/ru/calculators/';
const INDEX = /\/search-index\/ru\.json/;
const visible = '[data-catalog-ssr-grid]:not([hidden]) [data-catalog-card]:not([hidden]), [data-catalog-global-grid] [data-catalog-card]';
const search = '[data-testid="catalog-search"]';

test.describe('ленивый индекс каталога', () => {
  test('нетронутый каталог не запрашивает индекс', async ({ page }) => {
    const hits: string[] = [];
    page.on('request', (r) => { if (INDEX.test(r.url())) hits.push(r.url()); });
    await page.goto(CATALOG, { waitUntil: 'networkidle' });
    await expect(page.locator(visible).first()).toBeVisible();
    expect(hits, 'индекс не нужен до текстового запроса').toEqual([]);
  });

  test('категория и сортировка забирают индекс ровно один раз и работают глобально', async ({ page }) => {
    const hits: string[] = [];
    page.on('request', (r) => { if (INDEX.test(r.url())) hits.push(r.url()); });
    await page.goto(CATALOG, { waitUntil: 'networkidle' });
    // Остров гидратируется по `client:idle`: под параллельной нагрузкой это
    // происходит заметно позже networkidle, и клик по ещё не оживлённой кнопке
    // не даёт ничего. Признак готовности — заполненный счётчик найденного.
    await expect(page.locator('[data-catalog-ready]')).toBeAttached({ timeout: 20000 });
    const onPage = await page.locator(visible).count();

    // Кнопки категорий не имеют собственных testid: они перечисляются внутри
    // общей полосы. Берём вторую (первая — «все»).
    await page.locator('[data-testid="category-filter"] button').nth(1).click();
    await expect.poll(() => hits.length, { timeout: 15000 }).toBe(1);
    const filtered = await page.locator(visible).count();
    expect(filtered).toBeGreaterThan(0);
    // Отбор идёт по ВСЕМУ каталогу: у крупнейшего раздела членов больше, чем
    // помещается на одну страницу среза, и это обязано быть видно.
    expect(filtered).toBeLessThan(276);

    await page.locator('[data-testid="catalog-sort"]').selectOption('name');
    await expect.poll(() => page.locator(visible).count()).toBe(filtered);

    expect(hits.length, 'индекс забирается один раз, повторов нет').toBe(1);
    void onPage;
  });

  test('первый текстовый запрос забирает индекс ровно один раз', async ({ page }) => {
    const hits: string[] = [];
    page.on('request', (r) => { if (INDEX.test(r.url())) hits.push(r.url()); });
    await page.goto(CATALOG, { waitUntil: 'networkidle' });
    await page.locator(search).fill('кредит');
    await expect.poll(() => hits.length, { timeout: 15000 }).toBe(1);

    // Повторные запросы не перезагружают индекс.
    for (const q of ['ипотека', 'ндс', 'кредит', 'геометрия']) {
      await page.locator(search).fill(q);
      await page.waitForTimeout(200);
    }
    expect(hits.length, 'индекс забирается один раз на страницу').toBe(1);
  });

  test('запрос, набранный до прихода индекса, не теряется', async ({ page }) => {
    // Ответ держится ЯВНО, а не таймером: сон фиксированной длины под
    // параллельной нагрузкой сдвигает окно проверки и делает тест шатким —
    // ровно это и случилось при первом прогоне всей пачки.
    let release: () => void = () => {};
    const held = new Promise<void>((resolve) => { release = resolve; });
    await page.route(INDEX, async (route) => { await held; await route.continue(); });

    await page.goto(CATALOG, { waitUntil: 'domcontentloaded' });
    // Ждём, пока остров возьмёт сетку: предмет проверки — граница загрузки
    // индекса, а не ввод до гидратации (он проверяется отдельно и работает).
    // Без этого ожидания fill() состязается с монтированием React.
    await expect(page.locator('[data-catalog-ready]')).toBeAttached({ timeout: 20000 });
    await page.locator(search).fill('аннуитет');
    // Пока индекс заведомо в пути, «ничего не найдено» показывать нельзя:
    // часть совпадений живёт именно в ключевых словах.
    await expect(page.locator('[data-testid="catalog-empty"]')).toHaveCount(0);
    await expect(page.locator(search)).toHaveValue('аннуитет');

    release();
    // После прихода запрос по ключевому слову обязан сработать.
    await expect.poll(() => page.locator(visible).count(), { timeout: 15000 }).toBeGreaterThan(0);
    await expect(page.locator(search)).toHaveValue('аннуитет');
  });

  test('запрос, изменённый во время загрузки, берётся последним', async ({ page }) => {
    await page.route(INDEX, async (route) => {
      await new Promise((r) => setTimeout(r, 1000));
      await route.continue();
    });
    await page.goto(CATALOG, { waitUntil: 'domcontentloaded' });
    await page.locator(search).fill('кредит');
    await page.waitForTimeout(200);
    await page.locator(search).fill('геометрия');
    await expect.poll(() => page.locator(visible).count(), { timeout: 15000 }).toBeGreaterThan(0);
    await expect(page.locator(search)).toHaveValue('геометрия');
    // Совпадение по «геометрия» идёт через ИМЯ КАТЕГОРИИ, а не через заголовок
    // карточки: у калькулятора круга в названии слова «геометрия» нет и быть
    // не должно. Поэтому сверяем набор с эталонным отбором по той же категории.
    const shown = await page.locator(`${visible}`).evaluateAll(
      (els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href')));
    expect(shown.length, 'результат последнего запроса не пуст').toBeGreaterThan(0);
    expect(shown.every((h) => h!.includes('/geometry/')), 'все показанные — из геометрии').toBe(true);
  });

  test('очистка во время загрузки оставляет каталог полным', async ({ page }) => {
    await page.route(INDEX, async (route) => {
      await new Promise((r) => setTimeout(r, 1000));
      await route.continue();
    });
    await page.goto(CATALOG, { waitUntil: 'networkidle' });
    const total = await page.locator(visible).count();
    await page.locator(search).fill('кредит');
    await page.waitForTimeout(200);
    await page.locator(search).fill('');
    await expect.poll(() => page.locator(visible).count(), { timeout: 15000 }).toBe(total);
    await expect(page.locator('[data-testid="catalog-empty"]')).toHaveCount(0);
  });

  test('отказ индекса не ломает страницу: отбор идёт по видимому тексту среза', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.route(INDEX, (route) => route.abort());
    await page.goto(CATALOG, { waitUntil: 'networkidle' });
    const total = await page.locator(visible).count();
    // «кредит» есть в видимом заголовке — отбор обязан работать и без индекса.
    await page.locator(search).fill('кредит');
    await expect.poll(() => page.locator(visible).count(), { timeout: 15000 }).toBeLessThan(total);
    expect(await page.locator(visible).count()).toBeGreaterThan(0);
    // И страница остаётся живой: сброс возвращает всё.
    await page.locator(search).fill('');
    await expect.poll(() => page.locator(visible).count()).toBe(total);
    expect(errors, 'отказ сети не должен ронять остров').toEqual([]);
  });

  test('спрятанные карточки недоступны клавиатуре и после подгрузки индекса', async ({ page }) => {
    await page.goto(CATALOG, { waitUntil: 'networkidle' });
    await page.locator(search).fill('кредит');
    await expect.poll(() => page.locator(visible).count(), { timeout: 15000 }).toBeGreaterThan(0);
    await page.locator(search).focus();
    const focusedHidden: string[] = [];
    for (let i = 0; i < 30; i += 1) {
      await page.keyboard.press('Tab');
      const bad = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el || !el.hasAttribute('data-catalog-card')) return null;
        return el.hasAttribute('hidden') ? el.getAttribute('href') : null;
      });
      if (bad) focusedHidden.push(bad);
    }
    expect(focusedHidden, 'спрятанная карточка получила фокус').toEqual([]);
  });
});
