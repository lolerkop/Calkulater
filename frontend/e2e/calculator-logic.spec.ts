import { expect, test } from '@playwright/test';

test('localized numeric input calculates and division by zero stays inline', async ({ page }) => {
  await page.goto('/ru/finance/percent-calculator/');

  await page.getByTestId('field-a').fill('15');
  await page.getByTestId('field-b').fill('2 000');
  await expect(page.getByTestId('calc-result-primary')).toContainText('300,00');

  await page.getByTestId('field-mode').selectOption('what');
  await page.getByTestId('field-b').fill('0');
  await expect(page.getByTestId('field-error-b')).toBeVisible();
  await expect(page.getByTestId('calc-result')).toHaveCount(0);
});

test('BMI rejects zero height inline', async ({ page }) => {
  await page.goto('/ru/sport/bmi-calculator/');

  await page.getByTestId('field-height').fill('0');
  await expect(page.getByTestId('field-error-height')).toBeVisible();
  await expect(page.getByTestId('calc-result')).toHaveCount(0);
});

test('VAT warns about a 2026 operation with the old main rate', async ({ page }) => {
  await page.goto('/ru/finance/vat-calculator/');

  await page.getByTestId('field-operationDate').fill('2026-01-01');
  await page.getByTestId('field-rate').selectOption('20');
  await expect(page.getByTestId('calc-result')).toContainText('основная ставка была повышена до 22%');
});

test('currency pair pages keep their pair fixed', async ({ page }) => {
  await page.goto('/ru/currency/usd-to-eur/');

  await expect(page.getByTestId('field-from')).toBeDisabled();
  await expect(page.getByTestId('field-from')).toHaveValue('USD');
  await expect(page.getByTestId('field-to')).toBeDisabled();
  await expect(page.getByTestId('field-to')).toHaveValue('EUR');
  await expect(page.getByTestId('calc-swap-currencies-btn')).toHaveCount(0);
});

test('legacy currency pair share links still restore their parameters', async ({ page }) => {
  await page.goto('/ru/currency/usd-to-eur/?amount=250&from=GBP&to=TRY');

  await expect(page.getByTestId('field-amount')).toHaveValue('250');
  await expect(page.getByTestId('field-from')).toHaveValue('GBP');
  await expect(page.getByTestId('field-to')).toHaveValue('TRY');
  await expect(page.getByTestId('calc-result')).toBeVisible();
});

test('working days reports invalid excluded dates beside the field', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/?excludedDates=2026-02-31');

  await page.getByTestId('field-startDate').fill('2026-02-01');
  await page.getByTestId('field-endDate').fill('2026-02-28');
  await expect(page.getByTestId('field-error-excludedDates')).toBeVisible();
  await expect(page.getByTestId('calc-result')).toHaveCount(0);
});

test('date relationships are reported beside the affected field', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/');
  await page.getByTestId('field-startDate').fill('2026-02-28');
  await page.getByTestId('field-endDate').fill('2026-02-01');
  await expect(page.getByTestId('field-error-endDate')).toBeVisible();

  await page.goto('/ru/date-time/age-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await page.getByTestId('field-birthDate').fill('2026-02-01');
  await page.getByTestId('field-targetDate').fill('2025-02-01');
  await expect(page.getByTestId('field-error-targetDate')).toBeVisible();
});

test('copy link restores calculator state after reload', async ({ context, page }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/ru/building/tile-calculator/');

  await page.getByTestId('field-length').fill('5,5');
  await page.getByTestId('field-width').fill('3');
  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-btn')).toContainText('Ссылка скопирована');

  const copiedUrl = await page.evaluate(() => navigator.clipboard.readText());
  expect(copiedUrl).toContain('length=5.5');
  await page.goto(copiedUrl);
  await expect(page.getByTestId('field-length')).toHaveValue('5.5');
  await expect(page.getByTestId('field-width')).toHaveValue('3');
  await expect(page.getByTestId('calc-result-primary')).not.toContainText(/NaN|Infinity|undefined/);
});
