import { expect, test, type Page } from '@playwright/test';

// Два контракта, которые легко потерять при правках стилей.
//
// 1. Видимость фокуса. Сайт не рисует собственных рамок у каждой кнопки: он
//    полагается на общее правило :focus-visible в global.css. Правило легко
//    случайно перебить локальным `outline: none`, и клавиатурный пользователь
//    останется без указателя. При этом мышью рамка появляться не должна.
//
// 2. Область нажатия переключателя языка. Сама плашка 40×30, а соседний язык
//    отстоит на 4px, поэтому область нажатия расширена по вертикали
//    псевдоэлементом. Порог здесь не 44: у мобильной полосы есть лишь 11px
//    запаса сверху и снизу, а выходить за него нельзя — полоса прокручиваемая
//    и обрежет лишнее. Поэтому контракт — не меньше 40px по высоте, что
//    заметно больше исходных 30px и не меняет ни вид, ни раскладку.

const активный = (page: Page) =>
  page.evaluate(() => {
    const el = document.activeElement;
    if (!el) return null;
    const style = getComputedStyle(el);
    return {
      tid: el.getAttribute('data-testid') ?? el.tagName.toLowerCase(),
      focusVisible: el.matches(':focus-visible'),
      outlineStyle: style.outlineStyle,
      outlineWidth: parseFloat(style.outlineWidth),
      boxShadow: style.boxShadow,
    };
  });

test.describe('видимость фокуса с клавиатуры', () => {
  for (const [path, name] of [
    ['/ru/', 'RU главная'],
    ['/ru/finance/credit-calculator/', 'калькулятор'],
    ['/ru/calculators/', 'каталог'],
  ] as const) {
    test(`${name}: каждый элемент под Tab показывает фокус`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(path);
      await page.waitForTimeout(300);

      const безИндикатора: string[] = [];
      for (let step = 0; step < 25; step += 1) {
        await page.keyboard.press('Tab');
        const state = await активный(page);
        if (!state || state.tid === 'body') break;
        // Индикатором считается либо общий контур :focus-visible, либо
        // собственное оформление поля — рамка с подсветкой.
        const контур = state.outlineStyle !== 'none' && state.outlineWidth >= 2;
        const тень = state.boxShadow !== 'none';
        if (!контур && !тень) безИндикатора.push(state.tid);
      }
      expect(безИндикатора, `без видимого фокуса: ${безИндикатора.join(', ')}`).toEqual([]);
    });
  }

  test('мышь не рисует рамку, клавиатура рисует', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    const кнопка = page.getByTestId('calc-share-btn');
    await кнопка.waitFor();

    await кнопка.click({ force: true });
    const мышью = await page.evaluate(() => {
      const el = document.querySelector('[data-testid="calc-share-btn"]')!;
      return { focusVisible: el.matches(':focus-visible'), outline: getComputedStyle(el).outlineStyle };
    });
    expect(мышью.focusVisible, 'мышь не должна включать :focus-visible').toBe(false);
    expect(мышью.outline).toBe('none');

    // Уйти и вернуться клавишей — так браузер считает взаимодействие клавиатурным.
    await кнопка.focus();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Tab');
    const клавишей = await page.evaluate(() => {
      const el = document.querySelector('[data-testid="calc-share-btn"]')!;
      const style = getComputedStyle(el);
      return {
        focusVisible: el.matches(':focus-visible'),
        outline: style.outlineStyle,
        width: parseFloat(style.outlineWidth),
      };
    });
    expect(клавишей.focusVisible, 'клавиатура должна включать :focus-visible').toBe(true);
    expect(клавишей.outline).toBe('solid');
    expect(клавишей.width).toBeGreaterThanOrEqual(2);
  });
});

test.describe('область нажатия переключателя языка', () => {
  const МИНИМУМ = 40;

  for (const width of [320, 375, 390, 430]) {
    test(`на ${width}px область нажатия не меньше ${МИНИМУМ}px и не задевает соседей`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/');
      const ссылка = page.getByTestId('header-lang-en');
      await ссылка.scrollIntoViewIfNeeded();

      const замер = await page.evaluate(() => {
        const en = document.querySelector('[data-testid="header-lang-en"]') as HTMLElement;
        const ru = document.querySelector('[data-testid="header-lang-ru"]') as HTMLElement;
        const box = en.getBoundingClientRect();
        const cx = box.x + box.width / 2;
        // Реальная область: сканируем вверх и вниз, пока точка принадлежит ссылке.
        let top = box.y;
        let bottom = box.bottom;
        for (let y = Math.round(box.y); y > box.y - 25; y -= 1) {
          const hit = document.elementFromPoint(cx, y);
          if (hit === en || en.contains(hit)) top = y; else break;
        }
        for (let y = Math.round(box.bottom); y < box.bottom + 25; y += 1) {
          const hit = document.elementFromPoint(cx, y);
          if (hit === en || en.contains(hit)) bottom = y; else break;
        }
        const rb = ru.getBoundingClientRect();
        const попадаетВСоседа = document.elementFromPoint(rb.x + rb.width / 2, rb.y + rb.height / 2);
        return {
          видимая: Math.round(box.height),
          область: Math.round(bottom - top),
          соседЦел: попадаетВСоседа === ru || ru.contains(попадаетВСоседа),
          перелив: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
        };
      });

      expect(замер.область, 'область нажатия').toBeGreaterThanOrEqual(МИНИМУМ);
      expect(замер.область, 'область должна быть больше видимой плашки').toBeGreaterThan(замер.видимая);
      expect(замер.соседЦел, 'расширение перехватило соседний язык').toBe(true);
      expect(замер.перелив, 'горизонтальный перелив').toBe(0);
    });
  }

  test('нажатие выше и ниже плашки открывает нужную локаль', async ({ page }) => {
    for (const смещение of [-5, 15, 35]) {
      await page.setViewportSize({ width: 375, height: 900 });
      await page.goto('/ru/');
      const ссылка = page.getByTestId('header-lang-en');
      await ссылка.scrollIntoViewIfNeeded();
      const box = (await ссылка.boundingBox())!;
      await page.mouse.click(box.x + box.width / 2, box.y + смещение);
      await page.waitForURL(/\/en\//, { timeout: 10000 });
      expect(new URL(page.url()).pathname, `смещение ${смещение}px`).toBe('/en/');
    }
  });

  test('расширение не изменило высоту шапки и полосы', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/ru/');
    const размеры = await page.evaluate(() => ({
      шапка: Math.round(document.querySelector('[data-testid="site-header"]')!.getBoundingClientRect().height),
      полоса: Math.round(document.querySelector('[data-testid="header-nav"]')!.getBoundingClientRect().height),
      плашка: Math.round(document.querySelector('[data-testid="header-lang-en"]')!.getBoundingClientRect().height),
    }));
    // Значения зафиксированы: расширение области нажатия не должно их двигать.
    // 119/54 вместо прежних 118/53 — цена перехода на одну полосу разделов
    // вместо двух: рамка строки переехала на саму полосу. Плашка языка как
    // была 30px, так и осталась — расширение по-прежнему только виртуальное.
    expect(размеры.шапка).toBe(119);
    expect(размеры.полоса).toBe(54);
    expect(размеры.плашка).toBe(30);
  });
});
