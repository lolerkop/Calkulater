import { expect, test, type Page } from '@playwright/test';

// Геометрия поля поиска.
//
// Слева в поле лежит лупа, справа — кнопка очистки; обе позиционированы
// абсолютно внутри input. Место под них надо резервировать отступами самого
// поля, иначе текст и каретка заезжают под иконки.
//
// Утилитами отступов это не работает: у .field-input стоит сокращённое
// `padding`, специфичность у него та же, что у утилиты, а в файле оно идёт
// позже — поэтому padding-left и padding-right из утилит до поля не доходили.
// Отступы заданы отдельным правилом .search-input, и этот тест закрепляет
// результат: между иконкой и текстовой областью всегда остаётся зазор.
//
// Пороги выведены из раскладки, а не подобраны: слева 12px (left-3) + 20px
// лупы, справа 8px (right-2) + 36px кнопки. Требуем не меньше 8px зазора —
// с запасом ниже расчётных 12px, чтобы тест не падал от округления подпикселей.
const МИН_ЗАЗОР = 8;

type Геометрия = {
  textStart: number;
  textEnd: number;
  iconRight: number;
  clearLeft: number | null;
  clearWidth: number | null;
  gapLeft: number;
  gapRight: number | null;
  overflow: number;
};

const измерить = (page: Page): Promise<Геометрия> => page.evaluate(() => {
  const input = document.querySelector('[data-testid="search-input"]') as HTMLInputElement;
  const box = document.querySelector('[data-testid="search-box"]')!;
  const icon = box.querySelector('svg')!;
  const clear = document.querySelector('[data-testid="search-clear"]');
  const style = getComputedStyle(input);
  const rect = input.getBoundingClientRect();
  // Текстовая область input — это его content box.
  const textStart = rect.left + parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft);
  const textEnd = rect.right - parseFloat(style.borderRightWidth) - parseFloat(style.paddingRight);
  const iconRight = icon.getBoundingClientRect().right;
  const clearBox = clear ? clear.getBoundingClientRect() : null;
  return {
    textStart: Math.round(textStart),
    textEnd: Math.round(textEnd),
    iconRight: Math.round(iconRight),
    clearLeft: clearBox ? Math.round(clearBox.left) : null,
    clearWidth: clearBox ? Math.round(clearBox.width) : null,
    gapLeft: Math.round(textStart - iconRight),
    gapRight: clearBox ? Math.round(clearBox.left - textEnd) : null,
    overflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
  };
});

const ШИРИНЫ = [320, 375, 390, 430, 768, 1024, 1440, 1920];
const ЛОКАЛИ: Array<[string, string]> = [['/ru/', 'RU'], ['/en/', 'EN'], ['/uk/', 'UK']];

// Поиск монтируется через client:idle, и значение, вписанное до гидратации,
// React не подхватывает: hasQuery остаётся false и кнопка очистки не появляется.
// Astro снимает с острова атрибут ssr, когда тот гидрирован, — на него и ждём.
async function ввестиЗапрос(page: Page, текст: string): Promise<void> {
  const input = page.getByTestId('search-input');
  await input.waitFor();
  await page.waitForFunction(() => {
    const island = document.querySelector('[data-testid="search-box"]')?.closest('astro-island');
    return !!island && !island.hasAttribute('ssr');
  }, undefined, { timeout: 20000 });
  await input.fill(текст);
  await expect(page.getByTestId('search-clear')).toBeVisible({ timeout: 10000 });
}

test.describe('поле поиска не пускает иконки в текст', () => {
  for (const width of ШИРИНЫ) {
    test(`на ${width}px лупа не залезает в текстовую область`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const [path, loc] of ЛОКАЛИ) {
        await page.goto(path);
        await page.getByTestId('search-input').waitFor();
        const g = await измерить(page);
        expect(g.gapLeft, `${loc} @ ${width}px: зазор между лупой и текстом`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
        expect(g.overflow, `${loc} @ ${width}px: перелив документа`).toBe(0);
      }
    });

    test(`на ${width}px кнопка очистки не залезает в текстовую область`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const [path, loc] of ЛОКАЛИ) {
        await page.goto(path);
        await ввестиЗапрос(page, 'калькулятор процентов и вкладов');
        await expect(page.getByTestId('search-clear')).toBeVisible();
        const g = await измерить(page);
        expect(g.gapRight, `${loc} @ ${width}px: зазор между текстом и кнопкой`).not.toBeNull();
        expect(g.gapRight!, `${loc} @ ${width}px: зазор между текстом и кнопкой`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
        // Область нажатия кнопки не должна уменьшиться: базовый контракт 36×36.
        expect(g.clearWidth, `${loc} @ ${width}px: размер кнопки очистки`).toBeGreaterThanOrEqual(36);
        expect(g.overflow, `${loc} @ ${width}px: перелив документа`).toBe(0);
      }
    });
  }

  test('очень длинный запрос: поле прокручивается, иконки не накрывают текст', async ({ page }) => {
    const длинный = 'калькулятор сложного процента с ежемесячной капитализацией и регулярным пополнением вклада на длительный срок';
    for (const width of [320, 375, 1440]) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/ru/');
      await ввестиЗапрос(page, длинный);
      await expect(page.getByTestId('search-clear')).toBeVisible();
      const input = page.getByTestId('search-input');

      const прокрутка = await input.evaluate((el: HTMLInputElement) => ({
        scrollW: el.scrollWidth,
        clientW: el.clientWidth,
        len: el.value.length,
      }));
      expect(прокрутка.len).toBe(длинный.length);
      expect(прокрутка.scrollW, `${width}px: текст должен прокручиваться внутри поля`).toBeGreaterThan(прокрутка.clientW);

      const g = await измерить(page);
      expect(g.gapLeft, `${width}px: зазор слева при длинном запросе`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
      expect(g.gapRight!, `${width}px: зазор справа при длинном запросе`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
      expect(g.overflow, `${width}px: перелив документа`).toBe(0);
    }
  });

  test('каретка в любом месте запроса остаётся в текстовой области', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/ru/');
    await ввестиЗапрос(page, 'калькулятор сложного процента с капитализацией');
    const input = page.getByTestId('search-input');

    for (const место of ['начало', 'середина', 'конец'] as const) {
      const позиция = await input.evaluate((el: HTMLInputElement, где: string) => {
        const pos = где === 'начало' ? 0 : где === 'середина' ? Math.floor(el.value.length / 2) : el.value.length;
        el.focus();
        el.setSelectionRange(pos, pos);
        // Браузер сам подкручивает поле так, чтобы каретка попала в видимую часть.
        return { pos, scrollLeft: el.scrollLeft, clientW: el.clientWidth, scrollW: el.scrollWidth };
      }, место);
      const g = await измерить(page);
      // Каретка живёт внутри content box; зазоры по обеим сторонам гарантируют,
      // что содержимое этой области не уходит под иконки.
      expect(g.gapLeft, `каретка ${место}: зазор слева`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
      expect(g.gapRight!, `каретка ${место}: зазор справа`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
      expect(позиция.scrollLeft, `каретка ${место}: прокрутка в допустимых границах`)
        .toBeLessThanOrEqual(Math.max(0, позиция.scrollW - позиция.clientW));
    }
  });

  test('пустое поле не оставляет широкий пустой провал справа', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.waitFor();

    const пусто = await input.evaluate((el) => getComputedStyle(el).paddingRight);
    await ввестиЗапрос(page, 'ндс');
    await expect(page.getByTestId('search-clear')).toBeVisible();
    const сЗапросом = await input.evaluate((el) => getComputedStyle(el).paddingRight);

    // Широкий правый отступ появляется только вместе с кнопкой.
    expect(parseFloat(сЗапросом), 'с запросом отступ должен быть больше').toBeGreaterThan(parseFloat(пусто));
    expect(parseFloat(пусто), 'на пустом поле лишнего провала быть не должно').toBeLessThan(24);
  });

  test('кнопка очистки чистит запрос и не ломается на повторах', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/ru/');
    const input = page.getByTestId('search-input');
    await input.waitFor();
    const clear = page.getByTestId('search-clear');

    await expect(clear).toHaveCount(0);
    for (let круг = 0; круг < 10; круг += 1) {
      await ввестиЗапрос(page, 'вклад');
      await expect(clear).toBeVisible();
      await clear.click();
      await expect(input).toHaveValue('');
      await expect(clear, `круг ${круг}`).toHaveCount(0);
      await expect(page.getByTestId('search-results'), `круг ${круг}: результаты не должны залипать`).toHaveCount(0);
      const g = await измерить(page);
      expect(g.gapLeft, `круг ${круг}`).toBeGreaterThanOrEqual(МИН_ЗАЗОР);
    }
  });
});
