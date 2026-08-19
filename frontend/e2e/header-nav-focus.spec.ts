import { test, expect, type Page } from '@playwright/test';

// Полоса разделов прокручивается по горизонтали. Браузер сам доматывает её
// только к пункту, который не виден совсем: задевающий край он считает
// видимым и оставляет обрезанным. С ростом числа разделов от такого пункта
// оставалось всё меньше, и по фокусу было не понять, где стоишь.
//
// Проверяется не «хоть сколько-то видно», а «видно целиком»: это сильнее
// существующего порога в 24 пикселя и не зависит от того, сколько сейчас
// категорий и какой они длины.

type Placement = { text: string; visible: number; width: number; navWidth: number };

async function focusedPlacement(page: Page): Promise<Placement | null> {
  return page.evaluate(async () => {
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const element = document.activeElement as HTMLElement | null;
    const strip = element?.closest('.nav-scroll') as HTMLElement | null;
    if (!element || !strip) return null;
    const item = element.getBoundingClientRect();
    const view = strip.getBoundingClientRect();
    return {
      text: element.textContent?.trim() ?? '',
      visible: Math.min(item.right, view.right) - Math.max(item.left, view.left),
      width: item.width,
      navWidth: view.width,
    };
  });
}

/** Проходит полосу с клавиатуры и возвращает геометрию каждого пункта. */
async function traverse(page: Page, key: 'Tab' | 'Shift+Tab', from: 'first' | 'last') {
  await page.evaluate((edge) => {
    const links = document.querySelectorAll<HTMLElement>('[data-testid="header-nav"] a');
    (edge === 'first' ? links[0] : links[links.length - 1])?.focus();
  }, from);

  const seen: Placement[] = [];
  for (let step = 0; step < 24; step += 1) {
    const placement = await focusedPlacement(page);
    if (!placement) break;
    seen.push(placement);
    await page.keyboard.press(key);
    await page.waitForTimeout(60);
  }
  return seen;
}

const DESKTOP = [768, 820, 1024, 1280, 1440];

test.describe('полоса разделов: фокус с клавиатуры', () => {
  for (const width of DESKTOP) {
    test(`${width}px: каждый раздел виден целиком при обходе табом`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/');
      const seen = await traverse(page, 'Tab', 'first');
      expect(seen.length, 'полоса должна быть проходима').toBeGreaterThan(3);
      for (const item of seen) {
        // Пункт шире полосы целиком не поместится — тогда требуем всю полосу.
        const expected = Math.min(item.width, item.navWidth);
        expect(item.visible, `«${item.text}» видно ${item.visible.toFixed(1)} из ${item.width.toFixed(0)}`)
          .toBeGreaterThan(expected - 1.5);
      }
    });

    test(`${width}px: обратный обход Shift+Tab тоже показывает пункт целиком`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/');
      const seen = await traverse(page, 'Shift+Tab', 'last');
      expect(seen.length).toBeGreaterThan(3);
      for (const item of seen) {
        const expected = Math.min(item.width, item.navWidth);
        expect(item.visible, `«${item.text}» назад: видно ${item.visible.toFixed(1)} из ${item.width.toFixed(0)}`)
          .toBeGreaterThan(expected - 1.5);
      }
    });
  }

  test('фокус в полосе не двигает страницу по вертикали', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 700 });
    await page.goto('/ru/');
    await page.evaluate(() => window.scrollTo(0, 240));
    await page.waitForTimeout(120);
    const before = await page.evaluate(() => window.scrollY);
    const links = page.getByTestId('header-nav').getByRole('link');
    const total = await links.count();
    for (let index = 0; index < total; index += 1) {
      await links.nth(index).focus();
      await page.waitForTimeout(40);
    }
    const after = await page.evaluate(() => window.scrollY);
    expect(Math.abs(after - before), 'страница не должна прыгать по вертикали').toBeLessThanOrEqual(2);
  });

  test('после ручной прокрутки полосы фокус возвращает пункт в поле зрения', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 900 });
    await page.goto('/ru/');
    const links = page.getByTestId('header-nav').getByRole('link');
    const total = await links.count();
    for (const [name, index] of [['первый', 0], ['средний', Math.floor(total / 2)], ['последний', total - 1]] as const) {
      // Уводим полосу в противоположный край, чтобы фокус пришлось доматывать.
      await page.evaluate((edge) => {
        const strip = document.querySelector('[data-testid="header-nav"]') as HTMLElement;
        strip.scrollLeft = edge;
      }, index === 0 ? 99999 : 0);
      await page.waitForTimeout(60);
      await links.nth(index).focus();
      const placement = await focusedPlacement(page);
      expect(placement, `${name} пункт`).not.toBeNull();
      const expected = Math.min(placement!.width, placement!.navWidth);
      expect(placement!.visible, `${name}: «${placement!.text}»`).toBeGreaterThan(expected - 1.5);
    }
  });

  test('смена ширины не оставляет сфокусированный пункт обрезанным', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 });
    await page.goto('/ru/');
    const links = page.getByTestId('header-nav').getByRole('link');
    await links.nth(await links.count() - 1).focus();
    await page.setViewportSize({ width: 768, height: 900 });
    await page.waitForTimeout(150);
    await links.nth(await links.count() - 1).focus();
    const placement = await focusedPlacement(page);
    const expected = Math.min(placement!.width, placement!.navWidth);
    expect(placement!.visible, `после сужения: «${placement!.text}»`).toBeGreaterThan(expected - 1.5);
  });

  for (const width of [375, 430]) {
    test(`${width}px: мобильная навигация не ломается и не даёт горизонтального переполнения`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/ru/');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, 'страница не должна ехать вбок').toBeLessThanOrEqual(1);
      // Мобильная полоса — тот же .nav-scroll: её пункты тоже должны быть достижимы.
      const mobile = page.locator('.nav-scroll.md\\:hidden a');
      const count = await mobile.count();
      if (count > 0) {
        await mobile.first().focus();
        const placement = await focusedPlacement(page);
        expect(placement).not.toBeNull();
        expect(placement!.visible).toBeGreaterThan(0);
      }
    });
  }
});
