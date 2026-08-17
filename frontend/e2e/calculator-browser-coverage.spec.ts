import { expect, test, type Locator, type Page } from '@playwright/test';

// Intl.NumberFormat('ru-RU') вставляет между разрядами U+00A0. В ожидаемых
// значениях ниже это настоящий неразрывный пробел, а не обычный пробел.
const INVALID_RESULT_TOKENS = /NaN|Infinity|undefined|\[object Object\]/;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function resultRowValue(page: Page, label: string): Locator {
  const labelCell = page
    .getByTestId('calc-result')
    .locator('dt')
    .filter({ hasText: new RegExp(`^${escapeRegExp(label)}$`, 'i') });
  return labelCell.locator('..').locator('dd');
}

async function expectResultRow(
  page: Page,
  label: string,
  value: string | RegExp,
): Promise<void> {
  const rowValue = resultRowValue(page, label);
  await expect(rowValue).toHaveCount(1);
  await expect(rowValue).toHaveText(value);
}

async function expectHealthyResult(page: Page): Promise<void> {
  const result = page.getByTestId('calc-result');
  await expect(result).toBeVisible();
  await expect(result).not.toContainText(INVALID_RESULT_TOKENS);
}

async function localIsoDateAfter(page: Page, days: number): Promise<string> {
  return page.evaluate((offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }, days);
}

function formatRuPrice(value: number): string {
  return `${new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)} ₽`;
}

async function expectOptionalPriceContract(
  page: Page,
  options: {
    field: string;
    costLabel: string;
    quantity: number;
    expectQuantity: () => Promise<void>;
  },
): Promise<void> {
  const price = 125;
  const field = page.getByTestId(`field-${options.field}`);
  const error = page.getByTestId(`field-error-${options.field}`);

  // Нулевая optional-цена не добавляет строку стоимости.
  await options.expectQuantity();
  await expect(page.getByTestId('calc-result')).not.toContainText(options.costLabel);

  // Стёртая необязательная цена значит «цены нет», а не ошибку ввода: раннер
  // сверяет её с нулём, поэтому основной расчёт остаётся на месте, а строка
  // стоимости просто не выводится — ровно как при явном нуле.
  // Прежде здесь закреплялось противоположное: пустое поле роняло весь
  // результат. Это поведение исправлено, и тест переписан под новый контракт.
  await field.fill('');
  await expect(error).toHaveCount(0);
  await expectHealthyResult(page);
  await options.expectQuantity();
  await expect(page.getByTestId('calc-result')).not.toContainText(options.costLabel);
  await expect(page.getByTestId('calc-form')).toBeVisible();

  await field.fill('0');
  await expectHealthyResult(page);
  await options.expectQuantity();
  await expect(page.getByTestId('calc-result')).not.toContainText(options.costLabel);

  // Ожидание стоимости намеренно считается из количества и цены, а не берётся
  // из текущего текста результата.
  await field.fill(String(price));
  await expectResultRow(
    page,
    options.costLabel,
    formatRuPrice(options.quantity * price),
  );
  await expectHealthyResult(page);

  for (const invalidPrice of ['-1', 'мусор']) {
    await field.fill(invalidPrice);
    await expect(error).toBeVisible();
    await expect(page.getByTestId('calc-result')).toHaveCount(0);
    await expect(page.getByTestId('calc-form')).toBeVisible();
  }

  // После ошибочного ввода калькулятор восстанавливается без перезагрузки.
  await field.fill('0');
  await expectHealthyResult(page);
  await options.expectQuantity();
  await expect(page.getByTestId('calc-result')).not.toContainText(options.costLabel);
}

test.describe('browser coverage for previously uncovered calculators', () => {
  test('deposit calculator recalculates the term', async ({ page }) => {
    await page.goto('/ru/finance/deposit-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('112 683 ₽');
    await expectResultRow(page, 'Начисленные проценты', '12 683 ₽');
    await expectHealthyResult(page);

    await page.getByTestId('field-months').fill('24');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('126 973 ₽');
    await expectResultRow(page, 'Начисленные проценты', '26 973 ₽');
    await expectHealthyResult(page);
  });

  test('compound interest recalculates a shorter term', async ({ page }) => {
    await page.goto('/ru/finance/compound-interest/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('1 294 929 ₽');
    await expectResultRow(page, 'Внесённая сумма', '700 000 ₽');
    await expectHealthyResult(page);

    await page.getByTestId('field-years').fill('5');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('551 716 ₽');
    await expectResultRow(page, 'Внесённая сумма', '400 000 ₽');
    await expectHealthyResult(page);
  });

  test('mortgage calculator keeps the loan principal while term changes', async ({ page }) => {
    await page.goto('/ru/finance/mortgage-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('74 981 ₽');
    await expectResultRow(page, 'Сумма кредита', '6 400 000 ₽');
    await expectHealthyResult(page);

    await page.getByTestId('field-years').fill('10');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('95 559 ₽');
    await expectResultRow(page, 'Сумма кредита', '6 400 000 ₽');
    await expectHealthyResult(page);
  });

  test('discount calculator handles quantity and amount modes', async ({ page }) => {
    await page.goto('/ru/finance/discount-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('4 000 ₽');
    await expectResultRow(page, 'Размер скидки', '1 000 ₽');
    await expectHealthyResult(page);

    await page.getByTestId('field-quantity').fill('3');
    await expectResultRow(page, 'Итого за товары', '12 000 ₽');

    await page.getByTestId('field-mode-opt-byAmount').click();
    await page.getByTestId('field-discountAmt').fill('1500');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('3 500 ₽');
    await expectResultRow(page, 'Процент скидки', '30,00%');
    await expectResultRow(page, 'Итого за товары', '10 500 ₽');
    await expectHealthyResult(page);
  });

  test('margin calculator distinguishes markup from margin', async ({ page }) => {
    await page.goto('/ru/finance/margin-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('125 ₽');
    await expectResultRow(page, 'Наценка', '25,00%');
    await expectResultRow(page, 'Маржа', '20,00%');
    await expectHealthyResult(page);

    await page.getByTestId('field-mode').selectOption('fromMarkup');
    await expect(page.getByTestId('field-markupPct')).toHaveValue('30');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('130 ₽');
    await expectResultRow(page, 'Маржа', '23,08%');
    await expectHealthyResult(page);
  });

  for (const currency of [
    { id: 'eur-to-mdl', symbol: '€' },
    { id: 'usd-to-mdl', symbol: '$' },
  ]) {
    test(`${currency.id} keeps the fixed currency pair`, async ({ page }) => {
      await page.goto(`/ru/currency/${currency.id}/`);

      await expect(page.getByTestId('calc-result-primary')).toContainText('L');
      await expect(resultRowValue(page, 'Из')).toContainText(`100,00 ${currency.symbol}`);
      await expectHealthyResult(page);

      await page.getByTestId('field-amount').fill('250');
      await expect(resultRowValue(page, 'Из')).toContainText(`250,00 ${currency.symbol}`);
      await expect(page.getByTestId('calc-result-primary')).toContainText('L');
      await expectHealthyResult(page);
    });
  }

  test('calorie calculator recalculates calories and macros', async ({ page }) => {
    await page.goto('/ru/sport/calorie-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('2 556 ккал');
    await expectResultRow(page, 'Базовый обмен (BMR)', '1 649 ккал');
    await expectResultRow(page, 'Белки', '192 г');
    await expectResultRow(page, 'Жиры', '71 г');
    await expectResultRow(page, 'Углеводы', '288 г');
    await expectHealthyResult(page);

    await page.getByTestId('field-gender-opt-female').click();
    await expect(page.getByTestId('calc-result-primary')).toHaveText('2 298 ккал');
    await expectResultRow(page, 'Базовый обмен (BMR)', '1 483 ккал');
    await expectResultRow(page, 'Белки', '172 г');
    await expectHealthyResult(page);
  });

  test('one rep max calculator covers the supported repetition boundary', async ({ page }) => {
    await page.goto('/ru/sport/one-rep-max-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('93,3 кг');
    await expectResultRow(page, '80% от 1ПМ', '74,7 кг');
    await expectHealthyResult(page);

    await page.getByTestId('field-weight').fill('100');
    await page.getByTestId('field-reps').fill('12');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('140,0 кг');
    await expectResultRow(page, 'Формула Лэндера', '144,4 кг');
    await expectHealthyResult(page);
  });

  test('paint calculator recalculates reserve and optional can price', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto('/ru/building/paint-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('9,9 л');
    await expectResultRow(page, 'Количество банок', '4 шт. × 2,5 л');
    await expectHealthyResult(page);

    await page.getByTestId('field-reserve').fill('0');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('9,0 л');
    await expectResultRow(page, 'Количество банок', '4 шт. × 2,5 л');
    await expectResultRow(page, 'Площадь окрашивания', '30,00 м²');
    await expectHealthyResult(page);

    await expectOptionalPriceContract(page, {
      field: 'canPrice',
      costLabel: 'Стоимость краски',
      quantity: 4,
      expectQuantity: () => expectResultRow(page, 'Количество банок', '4 шт. × 2,5 л'),
    });
    expect(pageErrors).toEqual([]);
  });

  test('laminate calculator recalculates packs and optional pack price', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto('/ru/building/laminate-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('11 шт.');
    await expectResultRow(page, 'Площадь пола', '20,00 м²');
    await expectHealthyResult(page);

    await page.getByTestId('field-length').fill('10');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('21 шт.');
    await expectResultRow(page, 'Площадь пола', '40,00 м²');
    await expectHealthyResult(page);

    await expectOptionalPriceContract(page, {
      field: 'packPrice',
      costLabel: 'Ориентировочная стоимость',
      quantity: 21,
      expectQuantity: async () => {
        await expect(page.getByTestId('calc-result-primary')).toHaveText('21 шт.');
      },
    });
    expect(pageErrors).toEqual([]);
  });

  test('screed calculator recalculates material and optional bag price', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto('/ru/building/screed-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText('1,100 м³');
    await expectResultRow(page, 'Мешков', '80 шт.');
    await expectResultRow(page, 'Сухая смесь', '1 980 кг');
    await expectHealthyResult(page);

    await page.getByTestId('field-thickness').fill('6');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('1,320 м³');
    await expectResultRow(page, 'Мешков', '96 шт.');
    await expectResultRow(page, 'Сухая смесь', '2 376 кг');
    await expectHealthyResult(page);

    await expectOptionalPriceContract(page, {
      field: 'bagPrice',
      costLabel: 'Стоимость смеси',
      quantity: 96,
      expectQuantity: () => expectResultRow(page, 'Мешков', '96 шт.'),
    });
    expect(pageErrors).toEqual([]);
  });

  test('date shift calculator applies days and truncates a missing month day', async ({ page }) => {
    await page.goto('/ru/date-time/date-calculator/');

    await expect(page.getByTestId('calc-result-primary')).toHaveText(
      await localIsoDateAfter(page, 90),
    );
    await expectResultRow(page, 'Всего календарных дней', '90');
    await expectHealthyResult(page);

    await page.getByTestId('field-startDate').fill('2026-01-01');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('2026-04-01');
    await expectResultRow(page, 'Исходная дата', '2026-01-01');

    await page.getByTestId('field-startDate').fill('2026-01-31');
    await page.getByTestId('field-shiftMonths').fill('1');
    await page.getByTestId('field-shiftDays').fill('0');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('2026-02-28');
    await expectResultRow(page, 'Всего календарных дней', '28');
    await expectHealthyResult(page);
  });
});

test.describe('optional building material prices', () => {
  test('tile pack price follows the number of packs', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto('/ru/building/tile-calculator/');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('147 шт.');

    await expectOptionalPriceContract(page, {
      field: 'packPrice',
      costLabel: 'Стоимость плитки',
      quantity: 10,
      expectQuantity: () => expectResultRow(page, 'Количество упаковок', '10 шт.'),
    });
    expect(pageErrors).toEqual([]);
  });

  test('wallpaper roll price follows the number of rolls', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto('/ru/building/wallpaper-calculator/');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('6 шт.');

    await expectOptionalPriceContract(page, {
      field: 'rollPrice',
      costLabel: 'Стоимость обоев',
      quantity: 6,
      expectQuantity: async () => {
        await expect(page.getByTestId('calc-result-primary')).toHaveText('6 шт.');
      },
    });
    expect(pageErrors).toEqual([]);
  });
});
