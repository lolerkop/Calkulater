import { expect, test } from '@playwright/test';

const requiredRoutes = [
  '/',
  '/ru/',
  '/en/',
  '/uk/',
  '/ru/contacts/',
  '/ru/privacy/',
  '/ru/finance/',
  '/ru/currency/',
  '/ru/finance/percent-calculator/',
  '/ru/finance/income-tax-calculator/',
  '/ru/finance/vat-calculator/',
  '/ru/currency/currency-converter/',
  '/ru/currency/usd-to-eur/',
  '/ru/date-time/age-calculator/',
  '/ru/date-time/working-days-calculator/',
  '/ru/building/tile-calculator/',
  '/ru/building/wallpaper-calculator/',
  '/uk/fitness/kalkulyator-bmi/',
];

test('required release routes load with core SEO metadata', async ({ page }) => {
  for (const route of requiredRoutes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBeLessThan(400);
    await expect(page.locator('h1'), route).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]'), route).toHaveCount(1);
    await expect(page.locator('meta[name="description"]'), route).toHaveAttribute('content', /\S+/);
    await expect(page, route).toHaveTitle(/\S+/);
  }
});

test('canonical stays clean when tracking parameters are present', async ({ page }) => {
  await page.goto('/ru/finance/percent-calculator/?utm_source=release-qa&tag=test');
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toBe('https://calcuway.com/ru/finance/percent-calculator/');
});

test('critical calculator examples return finite expected results', async ({ page }) => {
  await page.goto('/ru/finance/income-tax-calculator/');
  await page.getByTestId('field-amount').fill('200000');
  await expect(page.getByTestId('calc-result-primary')).toContainText(/26[\s\u00a0\u202f]?000/);

  await page.goto('/ru/finance/vat-calculator/');
  await page.getByTestId('field-amount').fill('100000');
  await page.getByTestId('field-rate').selectOption('22');
  await page.getByTestId('field-operation-opt-add').click();
  await expect(page.getByTestId('calc-result-primary')).toContainText(/22[\s\u00a0\u202f]?000/);

  await page.goto('/ru/finance/percent-calculator/');
  await page.getByTestId('field-a').fill('15');
  await page.getByTestId('field-b').fill('2000');
  await expect(page.getByTestId('calc-result-primary')).toContainText('300,00');

  await page.goto('/uk/fitness/kalkulyator-bmi/');
  await page.getByTestId('field-weight').fill('72');
  await page.getByTestId('field-height').fill('175');
  await expect(page.getByTestId('calc-result-primary')).toContainText('23,5');

  await page.goto('/ru/building/tile-calculator/');
  await page.getByTestId('field-length').fill('4');
  await page.getByTestId('field-width').fill('3');
  await page.getByTestId('field-tileLength').fill('30');
  await page.getByTestId('field-tileWidth').fill('30');
  await page.getByTestId('field-reserve').fill('10');
  await expect(page.getByTestId('calc-result-primary')).toContainText('147');
  await expect(page.getByTestId('calc-result-primary')).not.toContainText('132');

  await page.goto('/ru/currency/currency-converter/');
  await page.getByTestId('field-amount').fill('100');
  await page.getByTestId('field-from').selectOption('USD');
  await page.getByTestId('field-to').selectOption('USD');
  await expect(page.getByTestId('calc-result-primary')).toContainText('100,00');
});

test('key calculator UI contains no non-finite values or internal slugs', async ({ page }) => {
  for (const route of [
    '/ru/finance/income-tax-calculator/',
    '/ru/finance/vat-calculator/',
    '/ru/currency/usd-to-eur/',
    '/uk/fitness/kalkulyator-bmi/',
    '/ru/building/tile-calculator/',
  ]) {
    await page.goto(route);
    const body = await page.locator('body').innerText();
    expect(body, route).not.toMatch(/\b(?:NaN|Infinity|undefined)\b/);
    const resultTitle = await page.getByTestId('calc-result-heading').innerText();
    expect(resultTitle, route).not.toMatch(/[a-z0-9]+-[a-z0-9-]+/);
  }
});
