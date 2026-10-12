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
  for (const width of [320, 375, 390, 430]) {
    test(`на ${width}px языки имеют отдельные цели не меньше 44px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/');
      await page.getByTestId('header-language-toggle').click();
      const sizes = await page.locator('[data-language-switcher]').evaluate((menu) => {
        const links = [...menu.querySelectorAll('a')];
        return {
          targets: links.map((link) => {
            const box = link.getBoundingClientRect();
            const hit = document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
            return { height: box.height, width: box.width, ownsCenter: hit === link || Boolean(hit && link.contains(hit)) };
          }),
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        };
      });
      expect(sizes.targets.length).toBe(5);
      for (const target of sizes.targets) {
        expect(target.height).toBeGreaterThanOrEqual(44);
        expect(target.width).toBeGreaterThanOrEqual(44);
        expect(target.ownsCenter).toBe(true);
      }
      expect(sizes.overflow).toBeLessThanOrEqual(1);
    });
  }

  test('нажатие в разных частях языка открывает нужную локаль', async ({ page }) => {
    for (const fraction of [0.15, 0.5, 0.85]) {
      await page.setViewportSize({ width: 375, height: 900 });
      await page.goto('/ru/');
      await page.getByTestId('header-language-toggle').click();
      const link = page.getByTestId('header-lang-en');
      const box = (await link.boundingBox())!;
      await page.mouse.click(box.x + box.width / 2, box.y + box.height * fraction);
      await page.waitForURL(/\/en\//, { timeout: 10000 });
      expect(new URL(page.url()).pathname).toBe('/en/');
    }
  });

  test('компактная шапка не растёт при открытии языка', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto('/ru/');
    const header = page.getByTestId('site-header');
    const before = (await header.boundingBox())!.height;
    expect(before).toBeLessThanOrEqual(128);
    await page.getByTestId('header-language-toggle').click();
    expect((await header.boundingBox())!.height).toBe(before);
    await expect(page.getByTestId('header-lang-en')).toBeVisible();
  });
});
