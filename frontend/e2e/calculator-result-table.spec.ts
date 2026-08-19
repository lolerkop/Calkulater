import { expect, test, type Page } from '@playwright/test';

// Первые в проекте потребители CalcResult.table. Рендерер и локализация таблицы
// существовали в ядре без единого потребителя, поэтому здесь проверяется именно
// путь таблицы: разметка, доступность, перевод колонок и поведение на узких
// экранах. Отдельного платформенного контракта для таблицы не заводится —
// это точечная проверка двух реальных страниц.

async function resultTable(page: Page) {
  const table = page.locator('main table').first();
  await expect(table).toBeVisible();
  return table;
}

test.describe('результат-таблица: аннуитет и рассрочка', () => {
  test('аннуитет отдаёт график на 24 строки и закрывает остаток в нуль', async ({ page }) => {
    await page.goto('/ru/finance/annuity/?amount=500000&rate=9.5&months=24');
    const table = await resultTable(page);
    await expect(table.locator('caption')).toHaveCount(1);
    await expect(table.locator('thead th[scope="col"]')).toHaveCount(5);
    const rows = table.locator('tbody tr');
    await expect(rows).toHaveCount(24);
    await expect(rows.first().locator('td').first()).toHaveText('1');
    await expect(rows.nth(11).locator('td').first()).toHaveText('12');
    const last = rows.last().locator('td');
    await expect(last.first()).toHaveText('24');
    await expect(last.last()).toHaveText('0,00 ₽');
  });

  test('рассрочка отдаёт график на 12 строк без наценки', async ({ page }) => {
    await page.goto('/ru/finance/installment/?price=120000&down=0&months=12&markup=0');
    const table = await resultTable(page);
    await expect(table.locator('thead th[scope="col"]')).toHaveCount(3);
    const rows = table.locator('tbody tr');
    await expect(rows).toHaveCount(12);
    await expect(rows.first().locator('td').nth(1)).toHaveText('10 000,00 ₽');
    await expect(rows.last().locator('td').last()).toHaveText('0,00 ₽');
  });

  test('колонки локализованы и не протекают кириллицей в EN', async ({ page }) => {
    await page.goto('/en/finance/annuity-calculator/?amount=500000&rate=9.5&months=24');
    const table = await resultTable(page);
    const headers = await table.locator('thead th').allInnerTexts();
    expect(headers).toEqual(['Month', 'Payment', 'Interest', 'Principal', 'Balance']);
    expect(headers.join(' ')).not.toMatch(/[Ѐ-ӿ]/);
    // Разделители разрядов в английской локали переписываются на границе показа.
    await expect(table.locator('tbody tr').first().locator('td').nth(1)).toContainText('22,957.25');
  });

  test('колонки локализованы в UK и не остаются русскими', async ({ page }) => {
    await page.goto('/uk/finansy/anuitet/?amount=500000&rate=9.5&months=24');
    const table = await resultTable(page);
    const headers = await table.locator('thead th').allInnerTexts();
    expect(headers).toEqual(['Місяць', 'Платіж', 'Відсотки', 'Основний борг', 'Залишок']);
  });

  for (const width of [320, 375, 768, 1440]) {
    test(`таблица не ломает страницу на ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/ru/finance/annuity/?amount=500000&rate=9.5&months=24');
      const table = await resultTable(page);
      // Сама страница не должна прокручиваться вбок; прокручивается контейнер таблицы.
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
      const scrollable = await table.evaluate((node) => {
        const box = node.parentElement as HTMLElement;
        return getComputedStyle(box).overflowX;
      });
      expect(['auto', 'scroll']).toContain(scrollable);
    });
  }

  test('таблица не пишет предупреждений в консоль', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error' || message.type() === 'warning') errors.push(message.text());
    });
    await page.goto('/ru/finance/annuity/?amount=5000000&rate=9&months=480');
    const table = await resultTable(page);
    await expect(table.locator('tbody tr')).toHaveCount(480);
    await expect(table.locator('tbody tr').last().locator('td').last()).toHaveText('0,00 ₽');
    expect(errors.filter((text) => !/Content Security Policy|beacon|cloudflare/i.test(text))).toEqual([]);
  });
});
