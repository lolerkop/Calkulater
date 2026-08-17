import { expect, test, type Page } from '@playwright/test';

// Текстовый слой: описания полей, подписи с единицами и перенос слов.
//
// Три разных дефекта с одной общей чертой — всё видно только в тексте, а не в
// геометрии, поэтому проверяется именно текст: содержимое узлов, результат
// выделения и фактические строки, на которые браузер разложил подпись кнопки.

// ─────────────── блок «Поля и единицы» ───────────────

/** Булевы формулировки, которыми блок описывал любой переключатель. */
const БУЛЕВО: Record<string, string> = {
  ru: 'да или нет',
  en: 'yes or no',
  uk: 'так або ні',
};

const ОПИСАНИЯ = `(() => [...document.querySelectorAll('[data-testid="calculator-fields"] li')]
  .map((li) => ({
    подпись: (li.querySelector('strong') || {}).textContent || '',
    целиком: li.textContent.trim(),
  })))()`;

async function описания(page: Page) {
  await page.locator('[data-testid="calculator-fields"]').waitFor();
  return page.evaluate(ОПИСАНИЯ) as Promise<Array<{ подпись: string; целиком: string }>>;
}

/** Переключатели, у которых варианты заведомо не сводятся к «да/нет». */
const НЕБУЛЕВЫ: Array<[string, string, string, string[]]> = [
  ['ru', '/ru/finance/credit-calculator/', 'Единица срока', ['Лет', 'Месяцев']],
  ['en', '/en/finance/loan-calculator/', 'Term unit', ['Years', 'Months']],
  ['uk', '/uk/finansy/kalkulyator-kredytu/', 'Одиниця строку', ['Роки', 'Місяці']],
  ['ru', '/ru/sport/calorie-calculator/', 'Пол', ['Мужской', 'Женский']],
  ['en', '/en/fitness/calorie-calculator/', 'Gender', ['Male', 'Female']],
  ['uk', '/uk/fitness/kalkulyator-kaloriy/', 'Стать', ['Чоловік', 'Жінка']],
  ['ru', '/ru/sport/calorie-calculator/', 'Цель', ['Похудение', 'Поддержание', 'Набор']],
  ['ru', '/ru/building/tile-calculator/', 'Способ расчёта', ['По размерам', 'По площади']],
  ['ru', '/ru/date-time/date-calculator/', 'Направление', ['Прибавить', 'Отнять']],
];

test.describe('блок «Поля и единицы» описывает переключатели их вариантами', () => {
  for (const [loc, route, подпись, варианты] of НЕБУЛЕВЫ) {
    test(`${loc}: «${подпись}» — ${варианты.join(' / ')}`, async ({ page }) => {
      await page.goto(route);
      const список = await описания(page);
      const строка = список.find((x) => x.подпись === подпись);
      expect(строка, `поле «${подпись}» должно быть в блоке`).toBeTruthy();

      // Варианты не булевы, значит и описание не должно обещать «да или нет».
      expect(строка!.целиком.toLowerCase(), 'ложное булево описание')
        .not.toContain(БУЛЕВО[loc]);
      // Описание — это сами варианты, взятые из уже локализованных подписей.
      for (const в of варианты) {
        expect(строка!.целиком, `вариант «${в}»`).toContain(в);
      }
    });
  }

  test('настоящий булев переключатель остаётся понятным', async ({ page }) => {
    await page.goto('/ru/date-time/working-days-calculator/');
    const список = await описания(page);
    const строка = список.find((x) => x.подпись === 'Учитывать выходные как рабочие');
    expect(строка).toBeTruthy();
    // Здесь варианты действительно «Нет» и «Да» — описание обязано их назвать.
    expect(строка!.целиком).toContain('Нет');
    expect(строка!.целиком).toContain('Да');
  });

  test('описания не протекают служебными значениями', async ({ page }) => {
    for (const route of [
      '/ru/finance/credit-calculator/',
      '/ru/sport/calorie-calculator/',
      '/ru/building/brick-calculator/',
      '/en/finance/mortgage-calculator/',
      '/uk/finansy/kalkulyator-znyzhky/',
    ]) {
      await page.goto(route);
      const список = await описания(page);
      expect(список.length, route).toBeGreaterThan(0);
      for (const x of список) {
        expect(x.целиком, route).not.toMatch(/\[object|undefined|null|NaN/);
        // Между подписью и описанием стоит тире с пробелами, лишней пунктуации быть не должно.
        expect(x.целиком, route).not.toMatch(/\s—\s*[.,;/]|[.,;/]\s*$/);
      }
    }
  });
});

// ─────────────── подпись поля и единица ───────────────

const ПОДПИСИ = `(() => [...document.querySelectorAll('[data-testid^="field-label-"]')].map((e) => {
  const span = e.querySelector('span');
  const r = document.createRange();
  r.selectNodeContents(e);
  return { testid: e.getAttribute('data-testid'), текст: e.textContent, выделение: r.toString(),
    единица: span ? span.textContent : null };
}))()`;

test.describe('подпись поля отделена от единицы настоящим пробелом', () => {
  for (const [loc, route] of [
    ['ru', '/ru/finance/credit-calculator/'],
    ['en', '/en/finance/loan-calculator/'],
    ['uk', '/uk/finansy/kalkulyator-kredytu/'],
    ['ru', '/ru/building/screed-calculator/'],
    ['ru', '/ru/sport/body-fat-calculator/'],
  ] as const) {
    test(`${loc} ${route}`, async ({ page }) => {
      await page.goto(route);
      await page.waitForSelector('[data-testid="calc-result-primary"]');
      const подписи = await page.evaluate(ПОДПИСИ) as Array<{ testid: string; текст: string; выделение: string; единица: string | null }>;
      const сЕдиницей = подписи.filter((x) => x.единица);
      expect(сЕдиницей.length, 'на странице должны быть поля с единицей').toBeGreaterThan(0);

      for (const x of сЕдиницей) {
        // Разделение должно быть в самом тексте, а не только в отступе: копирование
        // и чтение вслух берут именно текст.
        expect(x.текст, `${x.testid}: пробел перед единицей`).toMatch(/\S\s\(/);
        expect(x.выделение, `${x.testid}: выделение мышью`).toMatch(/\S\s\(/);
        expect(x.текст, `${x.testid}: без двойных пробелов`).not.toMatch(/\s\s/);
        expect(x.текст, `${x.testid}: без хвостового пробела`).not.toMatch(/\s$/);
      }
      for (const x of подписи.filter((v) => !v.единица)) {
        expect(x.текст, `${x.testid}: без единицы — без лишних пробелов`).not.toMatch(/\s\s|^\s|\s$/);
      }
    });
  }
});

// ─────────────── перенос подписи кнопки ───────────────

/** Раскладывает текстовый узел по фактическим строкам браузера. */
const ПОСТРОЧНО = `((sel) => {
  const e = document.querySelector(sel);
  if (!e) return null;
  const узел = [...e.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim().length > 2);
  if (!узел) return null;
  const t = узел.textContent;
  const строки = [];
  const rng = document.createRange();
  for (let i = 0; i < t.length; i += 1) {
    rng.setStart(узел, i); rng.setEnd(узел, i + 1);
    const y = Math.round(rng.getBoundingClientRect().top);
    let s = строки.find((v) => Math.abs(v.y - y) < 4);
    if (!s) { s = { y, симв: '' }; строки.push(s); }
    s.симв += t[i];
  }
  const b = e.getBoundingClientRect();
  const p = e.parentElement.getBoundingClientRect();
  return { текст: t, строки: строки.map((s) => s.симв),
    вылезает: Math.max(0, Math.round(b.right - p.right), Math.round(p.left - b.left)),
    докПерелив: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth) };
})`;

const КНОПКИ = ['calc-share-btn', 'calc-reset-btn'];

test.describe('подписи кнопок не рвутся внутри слова', () => {
  for (const [loc, route] of [
    ['ru', '/ru/finance/credit-calculator/'],
    ['en', '/en/finance/loan-calculator/'],
    ['uk', '/uk/finansy/kalkulyator-kredytu/'],
  ] as const) {
    for (const ширина of [320, 360, 375, 430]) {
      test(`${loc} @ ${ширина}`, async ({ page }) => {
        await page.setViewportSize({ width: ширина, height: 900 });
        await page.goto(route);
        await page.waitForSelector('[data-testid="calc-result-primary"]');
        for (const id of КНОПКИ) {
          const r = await page.evaluate(`${ПОСТРОЧНО}("[data-testid='${id}']")`) as any;
          expect(r, id).toBeTruthy();
          // Переносить по пробелу можно, разрывать слово посередине — нет.
          const строкиБезПоследней = r.строки.slice(0, -1) as string[];
          for (const s of строкиБезПоследней) {
            expect(s, `${id} @${ширина}: строка «${s}» из «${r.текст}» обрывается внутри слова`)
              .toMatch(/[\s \-–—]$/);
          }
          expect(r.вылезает, `${id}: текст не должен выходить за кнопку`).toBe(0);
          expect(r.докПерелив, `${id}: перелив документа`).toBe(0);
        }
      });
    }
  }
});
