import { expect, test, type Page } from '@playwright/test';

// Геометрия ВСЕЙ панели управления подборкой: поиск, сортировка, фильтры.
//
// Корень проблемы структурный, и он один на всю панель. В global.css
// `@tailwind utilities` объявлен в самом начале, а собственные правила идут
// после него — значит при равной специфичности они всегда перебивают утилиты.
// У .field-input / .field-select / .field-textarea стоит сокращённое
// `padding: 0.75rem 0.875rem`, поэтому ЛЮБОЙ `pl-*` / `pr-*` на таком элементе
// мёртв, а фактический отступ остаётся 14px. Иконка при left-3 занимает
// 12–28px и накрывает первые 14px текста.
//
// Так было у поля поиска (утилиты pl-10 pr-11) и у сортировки (утилита pl-10).
// Место под иконку резервируется правилом .field-lead-icon, а не утилитой.
//
// Проверка намеренно СЛЕПАЯ к именам контролов: она обходит все абсолютно
// позиционированные элементы внутри панели и требует зазор до текстовой
// области соседнего поля. Поэтому новая иконка, добавленная в панель завтра,
// попадёт под проверку сама, без правки теста.

const МИН_ЗАЗОР = 8;
const ШИРИНЫ = [320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440];
const ЛОКАЛИ: Array<[string, string, string]> = [
  ['/ru/calculators/', 'RU', 'калькулятор процентов и вкладов'],
  ['/en/calculators/', 'EN', 'compound interest and deposit calculator'],
  ['/uk/calculators/', 'UK', 'калькулятор відсотків та вкладів'],
];

// Панель гидрируется отложенно: до этого React не видит ввод, а кнопки
// очистки в разметке ещё нет. Astro снимает с острова атрибут ssr.
async function дождатьсяПанели(page: Page): Promise<void> {
  await page.getByTestId('catalog-search').waitFor();
  await page.waitForFunction(() => {
    const island = document.querySelector('[data-testid="catalog-search"]')?.closest('astro-island');
    return !!island && !island.hasAttribute('ssr');
  }, undefined, { timeout: 20000 });
}

type Замер = {
  иконки: Array<{ имя: string; хозяин: string; сторона: 'слева' | 'справа'; зазор: number; ширина: number }>;
  поля: Array<{ tid: string; paddingLeft: number; paddingRight: number; ширина: number }>;
  кнопкиБезИконок: boolean;
  обрезанныеПодписи: string[];
  перелив: number;
};

const обмерить = (page: Page): Promise<Замер> => page.evaluate(() => {
  const якорь = document.querySelector('[data-testid="catalog-search"]')!;
  const панель = якорь.closest('div.rounded-3xl')!;
  // Блоки фильтров лежат в той же карточке, но проверим и по именам — на случай
  // если разметку когда-нибудь вынесут наружу.
  const блоки = ['catalog-tag-filter', 'category-filter', 'catalog-quick-queries']
    .map((tid) => document.querySelector(`[data-testid="${tid}"]`))
    .filter((el): el is Element => el !== null);
  const области = [панель, ...блоки];

  const иконки: Замер['иконки'] = [];
  const поля: Замер['поля'] = [];
  const видимыеПоля = new Set<Element>();

  for (const область of области) {
    for (const el of область.querySelectorAll('input, select, textarea')) {
      if (видимыеПоля.has(el)) continue;
      видимыеПоля.add(el);
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      поля.push({
        tid: el.getAttribute('data-testid') ?? el.id,
        paddingLeft: parseFloat(s.paddingLeft),
        paddingRight: parseFloat(s.paddingRight),
        ширина: Math.round(r.width),
      });
    }

    for (const ic of область.querySelectorAll('svg, button')) {
      if (getComputedStyle(ic).position !== 'absolute') continue;
      const ir = ic.getBoundingClientRect();
      if (ir.width === 0 && ir.height === 0) continue;
      const хозяин = ic.parentElement?.querySelector('input, select, textarea');
      if (!хозяин) continue;
      const s = getComputedStyle(хозяин);
      const hr = хозяин.getBoundingClientRect();
      const текстОт = hr.left + parseFloat(s.borderLeftWidth) + parseFloat(s.paddingLeft);
      const текстДо = hr.right - parseFloat(s.borderRightWidth) - parseFloat(s.paddingRight);
      const слева = ir.left - hr.left < hr.width / 2;
      иконки.push({
        имя: (ic.getAttribute('class') ?? '').split(' ').find((c) => c.startsWith('lucide-'))
          ?? ic.getAttribute('data-testid') ?? ic.tagName.toLowerCase(),
        хозяин: хозяин.getAttribute('data-testid') ?? хозяин.id,
        сторона: слева ? 'слева' : 'справа',
        зазор: Math.round(слева ? текстОт - ir.right : ir.left - текстДо),
        ширина: Math.round(ir.width),
      });
    }
  }

  // Кнопки фильтров: подписи не должны обрезаться и не должны нести иконок,
  // под которые никто не резервировал место.
  const кнопки = блоки.flatMap((b) => [...b.querySelectorAll('button')]);
  const обрезанные = кнопки
    .filter((b) => b.scrollWidth > b.clientWidth + 1)
    .map((b) => (b.getAttribute('data-testid') ?? (b.textContent ?? '').trim().slice(0, 20)));

  return {
    иконки,
    поля,
    кнопкиБезИконок: кнопки.every((b) => b.querySelector('svg') === null),
    обрезанныеПодписи: обрезанные,
    перелив: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
  };
});

function проверить(з: Замер, где: string): void {
  expect(з.иконки.length, `${где}: иконки панели найдены`).toBeGreaterThan(0);
  for (const и of з.иконки) {
    expect(и.ширина, `${где}: ${и.имя} имеет ненулевую ширину`).toBeGreaterThan(0);
    expect(
      и.зазор,
      `${где}: ${и.имя} ${и.сторона} от текста поля ${и.хозяин} — зазор ${и.зазор}px`,
    ).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
  }
  expect(з.обрезанныеПодписи, `${где}: подписи кнопок не обрезаны`).toEqual([]);
  expect(з.перелив, `${где}: горизонтальный перелив документа`).toBe(0);
}

test.describe('панель подборки: иконки не заходят на текст', () => {
  for (const width of ШИРИНЫ) {
    test(`на ${width}px все контролы панели держат зазор`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const [path, loc, запрос] of ЛОКАЛИ) {
        await page.goto(path);
        await дождатьсяПанели(page);

        // Покой: поиск пуст, кнопки очистки нет.
        проверить(await обмерить(page), `${loc} @ ${width}px, пусто`);

        // С запросом: появляется кнопка очистки справа.
        await page.getByTestId('catalog-search').fill(запрос);
        await expect(page.getByTestId('catalog-search-clear')).toBeVisible();
        проверить(await обмерить(page), `${loc} @ ${width}px, с запросом`);

        // Другой режим сортировки: подпись меняет длину.
        await page.getByTestId('catalog-search-clear').click();
        await page.getByTestId('catalog-sort').selectOption('name');
        проверить(await обмерить(page), `${loc} @ ${width}px, сортировка по имени`);
      }
    });
  }

  test('место под иконку резервирует отступ поля, а не утилита', async ({ page }) => {
    // Прямая проверка корневой причины: у обоих полей с ведущей иконкой
    // отступ слева обязан перекрывать правый край иконки, иначе утилита
    // снова окажется мёртвой и никто этого не заметит.
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/ru/calculators/');
    await дождатьсяПанели(page);
    const з = await обмерить(page);

    const сИконкойСлева = з.иконки.filter((и) => и.сторона === 'слева').map((и) => и.хозяин);
    expect(сИконкойСлева.sort(), 'поля с ведущей иконкой').toEqual(['catalog-search', 'catalog-sort']);

    for (const tid of сИконкойСлева) {
      const поле = з.поля.find((п) => п.tid === tid)!;
      // 12px (left-3) + 16px (иконка) + 8px минимального зазора.
      expect(поле.paddingLeft, `${tid}: отступ слева резервирует место под иконку`)
        .toBeGreaterThanOrEqual(12 + 16 + МИН_ЗАЗОР);
    }
  });

  test('широкий правый отступ появляется только вместе с кнопкой очистки', async ({ page }) => {
    // Иначе на пустом поле остался бы заметный пустой провал справа.
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/ru/calculators/');
    await дождатьсяПанели(page);
    const поле = page.getByTestId('catalog-search');
    const пусто = await поле.evaluate((el) => getComputedStyle(el).paddingRight);
    await поле.fill('ндс');
    await expect(page.getByTestId('catalog-search-clear')).toBeVisible();
    const сЗапросом = await поле.evaluate((el) => getComputedStyle(el).paddingRight);
    expect(parseFloat(сЗапросом), 'с запросом отступ должен быть больше').toBeGreaterThan(parseFloat(пусто));
    expect(parseFloat(пусто), 'на пустом поле лишнего провала быть не должно').toBeLessThan(24);
  });

  test('очень длинный запрос прокручивается внутри поля и не заезжает под иконки', async ({ page }) => {
    const длинный = 'калькулятор сложного процента с ежемесячной капитализацией и регулярным пополнением вклада на длительный срок';
    for (const width of [320, 375, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/calculators/');
      await дождатьсяПанели(page);
      await page.getByTestId('catalog-search').fill(длинный);
      await expect(page.getByTestId('catalog-search-clear')).toBeVisible();
      const прокрутка = await page.getByTestId('catalog-search').evaluate((el: HTMLInputElement) => ({
        scrollW: el.scrollWidth, clientW: el.clientWidth, len: el.value.length,
      }));
      expect(прокрутка.len, `${width}px: текст не потерян`).toBe(длинный.length);
      expect(прокрутка.scrollW, `${width}px: текст прокручивается внутри поля`).toBeGreaterThan(прокрутка.clientW);
      проверить(await обмерить(page), `длинный запрос @ ${width}px`);
    }
  });

  test('подпись сортировки помещается целиком во всех локалях', async ({ page }) => {
    // Место под ведущую иконку берётся из ширины самого поля, поэтому отступ
    // слева и длина подписи конкурируют за одну и ту же ширину. Когда колонка
    // была 220px, отступ в 40px оставлял «Сначала популярные» всего 11px до
    // системной стрелки select, и Chromium резал подпись многоточием в RU и UK.
    // Стрелку нельзя измерить через DOM — она рисуется браузером, — поэтому
    // проверяем запас по ширине текста.
    const ЗАПАС_ПОД_СТРЕЛКУ = 16;
    for (const [path, loc] of ЛОКАЛИ) {
      for (const width of [1024, 1280, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        await дождатьсяПанели(page);
        const r = await page.evaluate(() => {
          const sel = document.querySelector('[data-testid="catalog-sort"]') as HTMLSelectElement;
          const s = getComputedStyle(sel);
          const rect = sel.getBoundingClientRect();
          const линейка = document.createElement('span');
          линейка.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;font:${s.font}`;
          document.body.appendChild(линейка);
          const ширины = [...sel.options].map((o) => {
            линейка.textContent = o.textContent;
            return { текст: o.textContent ?? '', w: линейка.getBoundingClientRect().width };
          });
          линейка.remove();
          const доступно = rect.width
            - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight)
            - parseFloat(s.borderLeftWidth) - parseFloat(s.borderRightWidth);
          const самая = ширины.reduce((a, b) => (b.w > a.w ? b : a));
          return { доступно, самая: самая.текст, ширинаТекста: самая.w };
        });
        expect(
          Math.round(r.доступно - r.ширинаТекста),
          `${loc} @ ${width}px: «${r.самая}» — запас до системной стрелки`,
        ).toBeGreaterThanOrEqual(ЗАПАС_ПОД_СТРЕЛКУ);
      }
    }
  });

  test('кнопки фильтров и категорий обходятся без иконок', async ({ page }) => {
    // Если иконку когда-нибудь добавят в кнопку фильтра, ей тоже понадобится
    // зарезервированное место — и этот тест заставит об этом вспомнить.
    await page.setViewportSize({ width: 375, height: 900 });
    for (const [path, loc] of ЛОКАЛИ) {
      await page.goto(path);
      await дождатьсяПанели(page);
      const з = await обмерить(page);
      expect(з.кнопкиБезИконок, `${loc}: кнопки фильтров без иконок`).toBe(true);
    }
  });
});
