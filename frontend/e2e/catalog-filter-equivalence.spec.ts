import { expect, test } from '@playwright/test';
import { getCalculators, getCategories, locales } from '../src/lib/i18n';
import { categoryAliases, matchesCalculatorSearch } from '../src/lib/search';
import { CATALOG_PAGE_SIZE } from '../src/lib/catalogPagination';

// Эквивалентность отбора после Catalog Scale 4.
//
// Подборка стала страничной, и главный риск изменения — молчаливая подмена
// смысла: «искать по калькуляторам» превратилось бы в «искать по текущей
// странице». Проверка прогоняет большой корпус запросов через НАСТОЯЩИЙ
// контроллер на странице и сверяет УПОРЯДОЧЕННЫЕ адреса результата с прежней
// функцией отбора по всему реестру.
//
// Сверяются не числа, а списки: совпадение количеств при разном составе —
// именно тот дефект, который проверка обязана ловить.

const CATALOG = { ru: '/ru/calculators/', en: '/en/calculators/', uk: '/uk/calculators/', de: '/de/calculators/' } as const;

/** Корпус запросов: из настоящих данных, а не выдуманный. */
function corpus(locale: (typeof locales)[number]): string[] {
  const rows = getCalculators(locale);
  const cats = getCategories(locale);
  const words = (text: string) => text.split(/[\s,.:;()«»"'—–-]+/).filter((w) => w.length >= 4);
  const set = new Set<string>();
  for (const row of rows) {
    for (const w of words(row.name).slice(0, 4)) set.add(w.toLowerCase());
    for (const w of words(row.shortDescription).slice(0, 5)) set.add(w.toLowerCase());
    for (const k of (row.keywords ?? [])) set.add(k.toLowerCase());
  }
  for (const c of cats) {
    set.add(c.id);
    set.add(c.name.toLowerCase());
    for (const a of (categoryAliases[c.id] ?? '').split(/\s+/).filter(Boolean).slice(0, 3)) set.add(a);
  }
  // Регистр, обрамление и внутренние пробелы.
  const base = [...set];
  for (const q of base.slice(0, 150)) {
    set.add(q.toUpperCase());
    set.add(`  ${q}  `);
    set.add(q.replace(/\s+/g, '   '));
  }
  // Заведомо ненаходимое.
  set.add('щщщщщщ');
  set.add('zzzzzz');
  set.add('0000000');
  return [...set];
}

for (const locale of locales) {
  test(`отбор эквивалентен прежнему по всему каталогу: ${locale}`, async ({ page }) => {
    // Механическое доказательство на тысячах запросов: это не проверка времени
    // отклика, а сверка составов, поэтому ей нужен свой запас времени. Ждём при
    // этом не сон, а завершение каждого шага.
    test.setTimeout(600_000);
    const rows = getCalculators(locale);
    const cats = getCategories(locale);
    const enriched = rows.map((row) => ({
      ...row,
      categoryName: cats.find((c) => c.id === row.category)?.name,
    }));
    // Глобальный порядок подборки: популярность, затем имя. Тот же, что режется
    // по страницам и тот же, в котором контроллер выводит результат.
    const ordered = [...enriched].sort(
      (a, b) => b.popularity - a.popularity || a.name.localeCompare(b.name, locale),
    );
    const queries = corpus(locale);

    await page.goto(CATALOG[locale], { waitUntil: 'networkidle' });
    await expect(page.locator('[data-catalog-ready]')).toBeAttached({ timeout: 20000 });
    // Прогреть ленивый индекс: он и есть источник глобальной подборки.
    await page.locator('[data-testid="catalog-search"]').fill('a');
    await expect.poll(() => page.locator('[data-catalog-global-grid]').count(), { timeout: 20000 }).toBe(1);

    const run = (list: string[]) => page.evaluate(async (chunk: string[]) => {
      const input = document.querySelector('[data-testid="catalog-search"]') as HTMLInputElement;
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
      const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const out: string[][] = [];
      for (const query of chunk) {
        setter.call(input, query);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        await frame();
        const nodes = document.querySelectorAll('[data-catalog-global-grid] [data-catalog-card]');
        out.push([...nodes].map((n) => (n as HTMLAnchorElement).getAttribute('href') ?? ''));
      }
      return out;
    }, list);

    // Разбиваем на порции: один вызов на несколько тысяч запросов упирался бы в
    // предел одного evaluate, а не в само поведение.
    const actual: string[][] = [];
    for (let index = 0; index < queries.length; index += 250) {
      actual.push(...(await run(queries.slice(index, index + 250))));
    }

    let mismatches = 0;
    const examples: string[] = [];
    for (const [index, query] of queries.entries()) {
      const expected = ordered
        .filter((row) => matchesCalculatorSearch(row as never, query))
        .map((row) => row.fullPath);
      const got = actual[index];
      if (expected.join('|') !== got.join('|')) {
        mismatches += 1;
        if (examples.length < 5) {
          examples.push(`«${query}»: ожидалось ${expected.length}, получено ${got.length}`);
        }
      }
    }
    console.log(`ЭКВИВАЛЕНТНОСТЬ ${locale}: запросов ${queries.length}, расхождений ${mismatches}`);
    expect(mismatches, `расхождения: ${examples.join(' | ')}`).toBe(0);

    // И главное: результат НЕ ограничен текущей страницей.
    const wide = actual[queries.findIndex((q) => q === 'калькулятор' || q === 'calculator')] ?? [];
    if (wide.length > 0) {
      expect(wide.length, 'широкий запрос выходит за пределы одной страницы').toBeGreaterThan(CATALOG_PAGE_SIZE);
    }
  });
}
