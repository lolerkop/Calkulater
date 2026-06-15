import { expect, test } from '@playwright/test';

test('contacts page exposes a working channel and request categories', async ({ page }) => {
  await page.goto('/ru/contacts/');

  await expect(page.getByText(/перед публичным запуском/i)).toHaveCount(0);
  await expect(page.getByTestId('contact-channel')).toHaveAttribute('href', /^(mailto:|https:\/\/)/);
  await expect(page.getByRole('heading', { name: 'Ошибки в расчётах' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Вопросы по данным' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Конфиденциальность' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Сотрудничество' })).toBeVisible();
  await expect(page.getByTestId('site-footer').getByRole('link', { name: 'Контакты', exact: true })).toBeVisible();
  await expect(page.getByTestId('site-footer').getByRole('link', { name: 'Политика', exact: true })).toBeVisible();
});

test('result headings never expose calculator slugs', async ({ page }) => {
  await page.goto('/ru/currency/usd-to-eur/');
  await expect(page.getByTestId('calc-result-heading')).toContainText('Конвертация USD в EUR');
  await expect(page.getByTestId('calc-result-heading')).not.toContainText('usd-to-eur');

  await page.goto('/ru/sport/bmi-calculator/');
  await expect(page.getByTestId('calc-result-heading')).toContainText('Индекс массы тела');
  await expect(page.getByTestId('calc-result-heading')).not.toContainText('bmi-calculator');
});

test('field counters follow visible fields and calculation is automatic', async ({ page }) => {
  await page.goto('/ru/finance/income-tax-calculator/');
  await expect(page.getByText('6 полей', { exact: true })).toBeVisible();
  await expect(page.getByTestId('calc-submit-btn')).toHaveCount(0);
  await expect(page.getByTestId('calc-result')).toBeVisible();

  await page.goto('/ru/building/tile-calculator/');
  await expect(page.getByText('9 полей', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'По площади' }).click();
  await expect(page.getByText('8 полей', { exact: true })).toBeVisible();
});

test('sensitive calculators require confirmation before copying a link', async ({ context, page }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/ru/finance/income-tax-calculator/');

  await page.getByTestId('field-amount').fill('175000');
  await expect(page).not.toHaveURL(/\?/);
  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toBeVisible();
  await page.getByTestId('calc-share-confirm').click();
  await expect(page.getByTestId('calc-share-btn')).toContainText('Ссылка скопирована');

  for (const path of ['/ru/currency/usd-to-eur/', '/ru/sport/bmi-calculator/']) {
    await page.goto(path);
    await page.getByTestId('calc-share-btn').click();
    await expect(page.getByTestId('calc-share-warning')).toBeVisible();
  }

  await page.goto('/ru/building/tile-calculator/');
  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
});
