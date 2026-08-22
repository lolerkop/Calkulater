import { expect, test } from '@playwright/test';
import { calculators } from '../src/data/calculators';
import { getCalculators, getCategories } from '../src/lib/i18n';
import { matchesCalculatorSearch } from '../src/lib/search';

// Ожидания выводятся из реестра, а не вписаны числом: волна калькуляторов не
// должна требовать правки этого файла. Отбор считается прежней функцией
// matchesCalculatorSearch — тем самым проверяется совпадение DOM-фильтра с ней.
const RU = getCalculators('ru');
const CATS = getCategories('ru');
const ROWS = RU.map((c) => ({ ...c, categoryName: CATS.find((x) => x.id === c.category)?.name }));
const TOTAL = RU.length;
const expected = (query: string) => ROWS.filter((c) => matchesCalculatorSearch(c as never, query)).length;

// Контракт фильтра каталога.
//
// Подборка СТРАНИЧНАЯ (Catalog Scale 4). Сервер отдаёт срез страницы настоящей
// разметкой, и без JavaScript работают и он, и переходы между страницами. Как
// только появляется отбор, ответом становится ГЛОБАЛЬНЫЙ список — он не
// помещается в один срез, — поэтому серверная сетка скрывается, а результат
// рисует клиентская сетка из того же ленивого индекса локали.
//
// Тест закрепляет то, что от страничности измениться не должно: результаты
// отбора совпадают с прежней функцией по ВСЕМУ каталогу, спрятанное недоступно
// клавиатуре, пустое состояние, сброс и фокус.

// «Видимая карточка» — та, которую читатель сейчас видит: либо серверная в
// нескрытой сетке, либо клиентская в сетке результатов.
const visible = '[data-catalog-ssr-grid]:not([hidden]) [data-catalog-card]:not([hidden]), [data-catalog-global-grid] [data-catalog-card]';
const all = '[data-catalog-card]';
const PAGE_SIZE = 150;
const firstPage = Math.min(PAGE_SIZE, TOTAL);

test.describe('фильтр каталога', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ru/calculators/');
    // Поле поиска присутствует в разметке до гидратации, поэтому его видимость
    // ничего не доказывает. Счётчик найденного заполняет уже контроллер, прочитав
    // карточки из DOM: его появление и есть признак того, что фильтр готов.
    await expect(page.locator('[data-testid="catalog-result-count"]')).toContainText(String(TOTAL));
  });

  test('карточки отдаёт сервер, а не клиент, и страницы покрывают подборку ровно один раз', async ({ page }) => {
    void calculators;
    // Разметка присутствует в ответе до какой-либо гидратации — на каждой странице.
    const seen: string[] = [];
    const pageCount = Math.ceil(TOTAL / PAGE_SIZE);
    for (let index = 1; index <= pageCount; index += 1) {
      const url = index === 1 ? '/ru/calculators/' : `/ru/calculators/page/${index}/`;
      const raw = await (await page.request.get(url)).text();
      const links = [...raw.matchAll(/<a href="(\/ru\/[a-z0-9-]+\/[a-z0-9-]+\/)"[^>]*data-catalog-card/g)].map((m) => m[1]);
      expect(links.length, `${url}: срез не больше размера страницы`).toBeLessThanOrEqual(PAGE_SIZE);
      expect(raw).not.toContain('<noscript><div class="space-y-12">');
      seen.push(...links);
    }
    // Точное разбиение: каждый калькулятор ровно на одной странице.
    expect(seen.length).toBe(TOTAL);
    expect(new Set(seen).size).toBe(TOTAL);
  });

  test('отбор по запросу совпадает с прежним и охватывает весь каталог', async ({ page }) => {
    await expect(page.locator(visible)).toHaveCount(firstPage);

    const search = page.locator('[data-testid="catalog-search"]');
    await search.fill('конвертер');
    await expect(page.locator(visible)).toHaveCount(expected('конвертер'));

    await search.fill('кредит');
    await expect(page.locator(visible)).toHaveCount(expected('кредит'));

    // Регистр и обрамляющие пробелы не влияют на отбор.
    await search.fill('  КРЕДИТ  ');
    await expect(page.locator(visible)).toHaveCount(expected('кредит'));

    await search.fill('');
    await expect(page.locator(visible)).toHaveCount(firstPage);
  });

  test('бейджи и подпись ссылки не участвуют в поиске', async ({ page }) => {
    // Иначе «открыть» совпало бы со всеми карточками: подпись стоит в каждой.
    await page.locator('[data-testid="catalog-search"]').fill('открыть');
    await expect(page.locator(visible)).toHaveCount(0);
  });

  test('серверная сетка при отборе скрыта целиком и недоступна клавиатуре', async ({ page }) => {
    await page.locator('[data-testid="catalog-search"]').fill('кредит');
    await expect(page.locator(visible)).toHaveCount(expected('кредит'));
    const ssrGrid = page.locator('[data-catalog-ssr-grid]');
    await expect(ssrGrid).toBeHidden();
    // hidden выключает узел целиком: он не в порядке обхода и не читается.
    expect(await ssrGrid.evaluate((el) => el.hasAttribute('hidden'))).toBe(true);
    const tabbable = await page.locator(`${all}`).evaluateAll((nodes) =>
      nodes.filter((node) => (node as HTMLElement).offsetParent !== null).length);
    expect(tabbable, 'видимых карточек ровно столько, сколько найдено').toBe(expected('кредит'));
  });

  test('пустое состояние и сброс', async ({ page }) => {
    await page.locator('[data-testid="catalog-search"]').fill('щщщщ');
    await expect(page.locator(visible)).toHaveCount(0);
    // Пустое состояние рисует остров после отбора; под параллельной нагрузкой
    // отрисовка иногда отстаёт, поэтому ожиданию дан запас.
    await expect(page.locator('[data-testid="catalog-empty"]')).toBeVisible({ timeout: 15000 });

    await page.locator('[data-testid="catalog-empty-reset"]').click();
    await expect(page.locator(visible)).toHaveCount(firstPage);
    await expect(page.locator('[data-testid="catalog-empty"]')).toHaveCount(0);
  });

  test('ввод не теряет фокус и каретку', async ({ page }) => {
    const search = page.locator('[data-testid="catalog-search"]');
    await search.click();
    await search.type('кредит', { delay: 20 });
    await expect(search).toBeFocused();
    expect(await search.evaluate((el: HTMLInputElement) => el.selectionStart)).toBe('кредит'.length);
    await expect(page.locator(visible)).toHaveCount(expected('кредит'));
  });

  test('метка «новые» и сортировка по имени охватывают весь каталог', async ({ page }) => {
    const newTotal = ROWS.filter((row) => row.isNew).length;
    await page.locator('[data-testid="catalog-tag-new"]').click();
    await expect(page.locator(visible)).toHaveCount(newTotal);
    expect(newTotal).toBeGreaterThan(0);
    expect(newTotal).toBeLessThan(TOTAL);

    await page.locator('[data-testid="catalog-tag-all"]').click();
    await expect(page.locator(visible)).toHaveCount(firstPage);

    // Сортировка по имени идёт по ВСЕЙ подборке, а не по срезу страницы:
    // клиентская сетка перечисляет все калькуляторы в алфавитном порядке.
    await page.locator('[data-testid="catalog-sort"]').selectOption('name');
    await expect(page.locator(visible)).toHaveCount(TOTAL);
    const titles = await page.locator(`${visible} h3`).allTextContents();
    const sorted = [...titles].sort((a, b) => a.localeCompare(b, 'ru'));
    expect(titles.join('|')).toBe(sorted.join('|'));
  });

  test('состояние переживает перезагрузку через адрес', async ({ page }) => {
    await page.locator('[data-testid="catalog-search"]').fill('кредит');
    await expect(page).toHaveURL(/[?&]q=%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82/);
    await page.reload();
    await expect(page.locator(visible)).toHaveCount(expected('кредит'));
  });
});
