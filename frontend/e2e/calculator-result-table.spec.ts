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

// Сноска таблицы. Она вычислялась и переводилась, но слой отображения читал
// только result.note верхнего уровня: на боевом график погашения кредитной
// карты с итогом «99 мес» обрывался на 36-й строке молча. Здесь проверяется
// именно то, что видит посетитель, включая связь таблицы со сноской.
test.describe('результат-таблица: сноска', () => {
  const NOTE = '[data-testid="calc-result-table-note"]';

  test('усечённый график прямо сообщает, что показаны не все строки', async ({ page }) => {
    await page.goto('/ru/finance/pogashenie-kreditnoy-karty/?balance=500000&apr=25&payment=12000');
    const table = await resultTable(page);
    await expect(table.locator('tbody tr')).toHaveCount(36);
    const note = page.locator(NOTE);
    await expect(note).toBeVisible();
    await expect(note).toHaveText(/36/);
    // Сноска стоит после таблицы и связана с ней.
    const describedBy = await table.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    // useId выдаёт идентификатор с двоеточиями: для aria-describedby это
    // законно, а как селектор CSS требует экранирования — берём по атрибуту.
    await expect(page.locator(`[id="${describedBy}"]`)).toHaveText(await note.innerText());
  });

  test('безусловная сноска видна и без усечения', async ({ page }) => {
    await page.goto('/ru/chemistry/molar-mass/');
    await resultTable(page);
    await expect(page.locator(NOTE)).toBeVisible();
    await expect(page.locator(NOTE)).toHaveText(/IUPAC/);
  });

  for (const [locale, route, expected] of [
    ['en', '/en/chemistry/molar-mass-calculator/', /IUPAC standard atomic weights/],
    ['uk', '/uk/himiya/molyarna-masa/', /стандартні атомні ваги/],
  ] as const) {
    test(`сноска переведена в ${locale}`, async ({ page }) => {
      await page.goto(route);
      await resultTable(page);
      const note = page.locator(NOTE);
      await expect(note).toBeVisible();
      await expect(note).toHaveText(expected);
      if (locale === 'en') {
        expect(await note.innerText()).not.toMatch(/[А-Яа-яЁё]/);
      }
    });
  }

  test('таблица без сноски не получает пустого блока', async ({ page }) => {
    await page.goto('/ru/finance/annuity/?amount=500000&rate=9.5&months=24');
    await resultTable(page);
    await expect(page.locator(NOTE)).toHaveCount(0);
    await expect(page.locator('main table').first()).not.toHaveAttribute('aria-describedby', /./);
  });

  test('на узком экране сноска переносится, а не уезжает вбок', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto('/ru/chemistry/molar-mass/');
    await resultTable(page);
    const note = page.locator(NOTE);
    await expect(note).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    // Сноска не внутри прокручиваемого контейнера таблицы.
    const insideScroller = await note.evaluate((node) => {
      let el: HTMLElement | null = node.parentElement;
      while (el) {
        if (getComputedStyle(el).overflowX === 'auto' || getComputedStyle(el).overflowX === 'scroll') return true;
        el = el.parentElement;
      }
      return false;
    });
    expect(insideScroller).toBe(false);
  });
});
