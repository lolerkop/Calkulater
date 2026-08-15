import { expect, test } from '@playwright/test';

// Characterization tests for CalculatorIsland: they pin the CURRENT user-visible
// behaviour of paths that had no e2e coverage, so the planned extraction of the
// island can be verified as behaviour-preserving. Where the current behaviour is
// known to be wrong it is pinned as-is and marked LEGACY — fixing it is a separate
// task, and these expectations are meant to be updated deliberately at that point.
//
// Group separators come from Intl.NumberFormat('ru-RU') and are U+00A0, written here
// as an explicit escape so the source stays readable.

test('reset restores default values and clears the calculator query state', async ({ page }) => {
  await page.goto('/ru/building/tile-calculator/?length=7&width=6&reserve=25');

  await expect(page.getByTestId('field-length')).toHaveValue('7');
  await expect(page.getByTestId('field-width')).toHaveValue('6');
  await expect(page.getByTestId('field-reserve')).toHaveValue('25');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('584 шт.');

  await page.getByTestId('calc-reset-btn').click();

  await expect(page.getByTestId('field-length')).toHaveValue('4');
  await expect(page.getByTestId('field-width')).toHaveValue('3');
  await expect(page.getByTestId('field-reserve')).toHaveValue('10');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('147 шт.');
  await expect(page).not.toHaveURL(/\?/);
  await expect(page).toHaveURL(/\/ru\/building\/tile-calculator\/$/);

  // The island stays interactive after a reset.
  await page.getByTestId('field-length').fill('8');
  await expect(page.getByTestId('calc-result-primary')).not.toHaveText('147 шт.');
  await expect(page.getByTestId('calc-result-primary')).not.toContainText(/NaN|Infinity|undefined/);
});

test('share warning can be cancelled and re-opened before confirming', async ({ context, page }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/ru/finance/credit-calculator/');
  await page.getByTestId('field-amount').fill('750000');

  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toBeVisible();

  await page.getByTestId('calc-share-cancel').click();
  await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
  await expect(page.getByTestId('calc-share-btn')).toContainText('Скопировать ссылку');
  await expect(page).not.toHaveURL(/\?/);

  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toBeVisible();

  // "Ссылка скопирована" is only rendered when the clipboard write succeeded.
  await page.getByTestId('calc-share-confirm').click();
  await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
  await expect(page.getByTestId('calc-share-btn')).toContainText('Ссылка скопирована');

  await expect(page.getByTestId('calc-form')).toBeVisible();
  await expect(page.getByTestId('field-amount')).toHaveValue('750000');
  await expect(page.getByTestId('calc-result')).toBeVisible();
});

test('copy result copies the current result and not a stale one', async ({ context, page }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/ru/sport/bmi-calculator/');

  await expect(page.getByTestId('calc-result-primary')).toHaveText('22,9');
  await page.getByTestId('calc-copy-result-btn').click();
  await expect(page.getByTestId('calc-copy-result-btn')).toHaveAttribute('title', 'Результат скопирован');

  const firstCopy = await page.evaluate(() => navigator.clipboard.readText());
  expect(firstCopy).toContain('ИМТ: 22,9');
  expect(firstCopy).toContain('Вес: 70 кг');

  await page.getByTestId('field-weight').fill('90');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('29,4');

  await page.getByTestId('calc-copy-result-btn').click();
  const secondCopy = await page.evaluate(() => navigator.clipboard.readText());
  expect(secondCopy).toContain('ИМТ: 29,4');
  expect(secondCopy).toContain('Вес: 90 кг');
  expect(secondCopy).not.toContain('22,9');
});

test('showIf field appears, accepts input and hides again with the controlling toggle', async ({ page }) => {
  await page.goto('/ru/finance/income-tax-calculator/');

  await expect(page.getByTestId('field-rate')).toHaveCount(0);
  await expect(page.getByText('6 полей', { exact: true })).toBeVisible();
  await expect(page.getByTestId('calc-result-primary')).toHaveText('19\u00a0500 ₽');

  await page.getByTestId('field-mode-opt-fixed').click();
  await expect(page.getByTestId('field-rate')).toBeVisible();
  await expect(page.getByTestId('field-rate')).toHaveValue('13');
  await expect(page.getByText('7 полей', { exact: true })).toBeVisible();

  await page.getByTestId('field-rate').fill('30');
  await expect(page.getByTestId('field-rate')).toHaveValue('30');
  await expect(page.getByTestId('calc-result-primary')).not.toHaveText('19\u00a0500 ₽');

  await page.getByTestId('field-mode-opt-progressive').click();
  await expect(page.getByTestId('field-rate')).toHaveCount(0);
  await expect(page.getByText('6 полей', { exact: true })).toBeVisible();
  await expect(page.getByTestId('calc-result-primary')).toHaveText('19\u00a0500 ₽');
});

test('LEGACY: EN results keep RU number formatting and a trailing currency symbol', async ({ page }) => {
  // Pins current behaviour before the planned locale-aware formatting fix.
  // Results are produced in Russian by the runners and only post-translated, so an
  // English visitor sees a U+00A0 group separator and a postfix "$" instead of "$13,347".
  await page.goto('/en/finance/loan-calculator/?amount=600000&rate=12&term=5');

  await expect(page.getByTestId('calc-result-primary')).toHaveText('13\u00a0347 $');
  await expect(page.getByTestId('calc-result')).toContainText('800\u00a0800 $');
  await expect(page.getByTestId('calc-result-primary')).not.toContainText('$13,347');

  // Exact value without Playwright's whitespace normalization.
  expect(await page.getByTestId('calc-result-primary').textContent()).toBe('13\u00a0347 $');

  // Labels and units are translated even though the numbers are not.
  await expect(page.getByTestId('calc-result')).toContainText('Total repayment');
  await expect(page.getByTestId('calc-result')).toContainText('60 mo.');
});

test('LEGACY: UK results keep RU decimals and a doubled category value', async ({ page }) => {
  // Pins current behaviour before the planned locale-aware formatting fix.
  // "Нормальний діапазонльний діапазон" is a real defect: the UK phrase dictionary is
  // re-applied to the already-translated string, and the translation of "Норма" starts
  // with "Норма", so it is substituted a second time. Fixed separately, not here.
  await page.goto('/uk/fitness/kalkulyator-bmi/?height=180&weight=80');

  await expect(page.getByTestId('calc-result-primary')).toHaveText('24,7');
  await expect(page.getByTestId('calc-result')).toContainText('59,9–80,7 кг');
  await expect(page.getByTestId('calc-result')).toContainText('Нормальний діапазонльний діапазон');

  // Labels are translated even though the numbers are not.
  await expect(page.getByTestId('calc-result')).toContainText('Категорія');
  await expect(page.getByTestId('calc-result')).toContainText('Зріст');
});
