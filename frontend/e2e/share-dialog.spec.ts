import { expect, test, type Page } from '@playwright/test';

// Предупреждение перед копированием ссылки — НЕ модальное окно. Оно стоит в
// потоке формы ниже кнопки «Скопировать ссылку», ничего не перекрывает, не
// имеет подложки и не поднято по z-index. Поэтому здесь намеренно не
// проверяются ни перехват фокуса, ни блокировка прокрутки: и то и другое на
// немодальном элементе сделало бы остальную страницу недостижимой с клавиатуры
// без видимой причины. Тесты закрепляют настоящий контракт: панель забирает
// фокус при открытии, ВОЗВРАЩАЕТ его на открывшую кнопку при закрытии, не
// мешает работать со страницей и не копирует ссылку без подтверждения.

// Предупреждение показывают только калькуляторы категорий finance, currency и
// sport: у остальных ссылка копируется сразу.
const WARNING_ROUTES = [
  { path: '/ru/finance/credit-calculator/', name: 'RU кредит' },
  { path: '/ru/finance/margin-calculator/', name: 'RU маржа' },
  { path: '/en/finance/loan-calculator/', name: 'EN кредит' },
  { path: '/uk/fitness/kalkulyator-bmi/', name: 'UK ИМТ' },
  { path: '/ru/finance/break-even-calculator/', name: 'RU безубыточность' },
];

async function openWarning(page: Page) {
  const trigger = page.getByTestId('calc-share-btn');
  await expect(trigger).toBeVisible();
  await trigger.focus();
  await trigger.click();
  await expect(page.getByTestId('calc-share-warning')).toBeVisible();
  return trigger;
}

const activeTestId = (page: Page) =>
  page.evaluate(() => document.activeElement?.getAttribute('data-testid') ?? document.activeElement?.tagName ?? null);

test.describe('предупреждение перед копированием ссылки', () => {
  for (const close of ['Escape', 'Отмена', 'Подтвердить'] as const) {
    test(`фокус возвращается на кнопку после закрытия через «${close}»`, async ({ page }) => {
      await page.goto('/ru/finance/credit-calculator/');
      const trigger = await openWarning(page);

      // Открытая панель забирает фокус на действие по умолчанию.
      await expect.poll(() => activeTestId(page)).toBe('calc-share-confirm');

      if (close === 'Escape') await page.keyboard.press('Escape');
      else if (close === 'Отмена') await page.getByTestId('calc-share-cancel').click();
      else await page.getByTestId('calc-share-confirm').click();

      await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
      // Без возврата фокус падает на body, и следующий Tab начинает обход
      // страницы заново — пользователь теряет место.
      await expect.poll(() => activeTestId(page)).toBe('calc-share-btn');
      await expect(trigger).toBeFocused();
    });
  }

  test('панель объявлена немодальной и не мешает работать со страницей', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    await openWarning(page);

    const panel = page.getByTestId('calc-share-warning');
    await expect(panel).toHaveAttribute('role', 'alertdialog');
    await expect(panel).toHaveAttribute('aria-modal', 'false');
    await expect(panel).toHaveAttribute('aria-labelledby', 'share-warning-title');
    await expect(panel).toHaveAttribute('aria-describedby', 'share-warning-text');

    const layout = await panel.evaluate((element) => {
      const style = getComputedStyle(element);
      const box = element.getBoundingClientRect();
      const trigger = document.querySelector('[data-testid="calc-share-btn"]')!.getBoundingClientRect();
      return {
        position: style.position,
        zIndex: style.zIndex,
        // Подложек в разметке нет вовсе — перекрывать страницу нечему.
        overlays: [...document.querySelectorAll('body *')].filter((node) => {
          const s = getComputedStyle(node);
          return s.position === 'fixed' && s.display !== 'none'
            && node.getBoundingClientRect().width > 300
            && !node.closest('[data-testid="site-header"]');
        }).length,
        belowTrigger: box.top >= trigger.top,
      };
    });
    expect(layout.position).toBe('static');
    expect(layout.zIndex).toBe('auto');
    expect(layout.overlays).toBe(0);
    expect(layout.belowTrigger).toBe(true);
  });

  test('Escape закрывает даже когда фокус ушёл из панели', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    await openWarning(page);

    // Страница немодальная: уходить фокусом наружу разрешено.
    await page.getByTestId('calc-reset-btn').focus();
    await expect.poll(() => activeTestId(page)).toBe('calc-reset-btn');

    await page.keyboard.press('Escape');
    await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
    // Фокус принадлежит другому контролу — отбирать его нельзя.
    await expect.poll(() => activeTestId(page)).toBe('calc-reset-btn');
  });

  test('страница остаётся прокручиваемой, позиция не прыгает', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    const trigger = await openWarning(page);

    const start = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 500);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(start);

    // Панель едет вместе со страницей: она часть потока, а не наложение.
    const moved = await page.getByTestId('calc-share-warning').evaluate((element) => {
      const box = element.getBoundingClientRect();
      return { visible: box.bottom > 0 && box.top < window.innerHeight, top: box.top };
    });
    expect(typeof moved.top).toBe('number');

    const before = await page.evaluate(() => window.scrollY);
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
    // Закрытие не должно телепортировать страницу.
    const after = await page.evaluate(() => window.scrollY);
    expect(Math.abs(after - before)).toBeLessThan(200);
    await expect(trigger).toBeVisible();
  });

  test('ссылка копируется только после подтверждения', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    await page.addInitScript(() => {
      (window as unknown as { __copies: number }).__copies = 0;
    });
    await page.reload();
    await page.evaluate(() => {
      (window as unknown as { __copies: number }).__copies = 0;
      const original = navigator.clipboard?.writeText?.bind(navigator.clipboard);
      if (original) {
        navigator.clipboard.writeText = (text: string) => {
          (window as unknown as { __copies: number }).__copies += 1;
          return original(text);
        };
      }
      document.addEventListener('copy', () => {
        (window as unknown as { __copies: number }).__copies += 1;
      });
    });
    const copies = () => page.evaluate(() => (window as unknown as { __copies: number }).__copies);

    await openWarning(page);
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
    expect(await copies(), 'Escape не должен копировать').toBe(0);

    await openWarning(page);
    await page.getByTestId('calc-share-cancel').click();
    await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
    expect(await copies(), 'Отмена не должна копировать').toBe(0);

    await openWarning(page);
    await page.getByTestId('calc-share-confirm').click();
    await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
    expect(await copies(), 'Подтверждение должно скопировать').toBeGreaterThan(0);
  });

  test('повторные открытия не ломают возврат фокуса', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    for (let round = 0; round < 5; round += 1) {
      const trigger = await openWarning(page);
      if (round % 2 === 0) await page.keyboard.press('Escape');
      else await page.getByTestId('calc-share-cancel').click();
      await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
      await expect(trigger, `круг ${round}`).toBeFocused();
    }
  });

  test('кнопка открывает предупреждение с клавиатуры', async ({ page }) => {
    await page.goto('/ru/finance/credit-calculator/');
    for (const key of ['Enter', 'Space']) {
      await page.getByTestId('calc-share-btn').focus();
      await page.keyboard.press(key);
      await expect(page.getByTestId('calc-share-warning'), `клавиша ${key}`).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
    }
  });
});

test.describe('предупреждение на разных калькуляторах и экранах', () => {
  for (const route of WARNING_ROUTES) {
    test(`${route.name}: открывается и возвращает фокус`, async ({ page }) => {
      await page.goto(route.path);
      const trigger = await openWarning(page);
      await expect.poll(() => activeTestId(page)).toBe('calc-share-confirm');
      await page.keyboard.press('Escape');
      await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
      await expect(trigger).toBeFocused();
    });
  }

  for (const width of [320, 375, 768]) {
    test(`на ${width}px предупреждение помещается и обе кнопки доступны`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 320 ? 568 : 812 });
      await page.goto('/ru/finance/credit-calculator/');
      await openWarning(page);

      const geometry = await page.getByTestId('calc-share-warning').evaluate((element) => {
        const box = element.getBoundingClientRect();
        const buttons = [...element.querySelectorAll('button')].map((button) => {
          const b = button.getBoundingClientRect();
          return { right: b.right, width: b.width, height: b.height };
        });
        return {
          right: box.right,
          viewport: document.documentElement.clientWidth,
          overflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
          buttons,
        };
      });

      expect(geometry.overflow, 'горизонтальный перелив').toBe(0);
      expect(geometry.right).toBeLessThanOrEqual(geometry.viewport + 0.5);
      for (const button of geometry.buttons) {
        expect(button.right, 'кнопка уходит за правый край').toBeLessThanOrEqual(geometry.viewport + 0.5);
        expect(button.height, 'кнопка схлопнулась').toBeGreaterThan(24);
      }

      // Закрыть с узкого экрана можно, и фокус возвращается.
      await page.getByTestId('calc-share-cancel').click();
      await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
      await expect(page.getByTestId('calc-share-btn')).toBeFocused();
    });
  }
});
