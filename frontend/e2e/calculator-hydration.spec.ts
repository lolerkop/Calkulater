import { expect, test, type Page } from '@playwright/test';

// Deterministic reproduction of the hydration/URL-restore race.
//
// The island is rendered to HTML at build time and hydrated with client:load. Until
// its chunk executes, the form is plain SSR markup that a user can already type into.
// These tests hold that chunk on the wire, interact with the un-hydrated markup, and
// only then let hydration run — so the problematic ordering is forced rather than
// waited for. No timeouts and no reliance on a rare timing window.

const ISLAND_CHUNK = '**/_astro/CalculatorIsland*.js';

/**
 * Blocks the island chunk and returns a function that lets it through, so a test can
 * interact with the SSR markup before hydration and then trigger hydration on demand.
 */
async function holdHydration(page: Page): Promise<() => void> {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });

  await page.route(ISLAND_CHUNK, async (route) => {
    await gate;
    await route.continue();
  });

  return release;
}

test('input made before hydration survives it (no query)', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/finance/vat-calculator/', { waitUntil: 'commit' });

  // The SSR markup is usable while the island chunk is still in flight.
  await expect(page.getByTestId('field-rate')).toHaveValue('22');
  await page.getByTestId('field-rate').selectOption('20');
  await expect(page.getByTestId('field-rate')).toHaveValue('20');

  hydrate();

  // calc-result only exists once the island has hydrated and run a calculation.
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('field-rate')).toHaveValue('20');
  // The choice reached the calculation, not just the DOM: 12000 at 20% extracts 2000.
  await expect(page.getByTestId('calc-result')).toContainText('НДС 20%');
  await expect(page.getByTestId('calc-result')).toContainText('2 000 ₽');
});

test('typed input made before hydration survives it (no query)', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/building/tile-calculator/', { waitUntil: 'commit' });

  await expect(page.getByTestId('field-length')).toHaveValue('4');
  await page.getByTestId('field-length').fill('8');
  await expect(page.getByTestId('field-length')).toHaveValue('8');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('field-length')).toHaveValue('8');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('294 шт.');
});

test('share-link state is still restored when nothing was touched before hydration', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/building/tile-calculator/?length=7&width=6&reserve=25', { waitUntil: 'commit' });

  // SSR markup carries defaults; the query is applied by the island after hydration.
  await expect(page.getByTestId('field-length')).toHaveValue('4');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('field-length')).toHaveValue('7');
  await expect(page.getByTestId('field-width')).toHaveValue('6');
  await expect(page.getByTestId('field-reserve')).toHaveValue('25');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('584 шт.');
});

test('input made before hydration wins over the query state it conflicts with', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/building/tile-calculator/?length=7&width=6&reserve=25', { waitUntil: 'commit' });

  await expect(page.getByTestId('field-length')).toHaveValue('4');
  await page.getByTestId('field-length').fill('9');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  // The edit is the most recent user intent, so it wins; untouched fields still restore.
  await expect(page.getByTestId('field-length')).toHaveValue('9');
  await expect(page.getByTestId('field-width')).toHaveValue('6');
  await expect(page.getByTestId('field-reserve')).toHaveValue('25');
});

// Поле исключаемых дат держит собственный черновик: это не значение калькулятора,
// а внутреннее состояние UI, поэтому общий захват правок его не касается.
test('excluded dates draft typed before hydration survives it', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/date-time/working-days-calculator/', { waitUntil: 'commit' });

  // В серверной разметке черновик пуст, а кнопка добавления недоступна.
  await expect(page.getByTestId('field-excludedDates')).toHaveValue('');
  await expect(page.getByTestId('excluded-date-add')).toBeDisabled();

  await page.getByTestId('field-excludedDates').fill('2026-02-10');
  await expect(page.getByTestId('field-excludedDates')).toHaveValue('2026-02-10');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  // Введённое значение уцелело, и React о нём знает: кнопка стала активной.
  await expect(page.getByTestId('field-excludedDates')).toHaveValue('2026-02-10');
  await expect(page.getByTestId('excluded-date-add')).toBeEnabled();

  await page.getByTestId('excluded-date-add').click();
  await expect(page.getByTestId('excluded-date-chip')).toHaveText('2026-02-10');
  await expect(page.getByTestId('field-excludedDates')).toHaveValue('');
});

test('a pre-hydration draft does not disturb excluded dates restored from the query', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/date-time/working-days-calculator/?excludedDates=2026-02-03', { waitUntil: 'commit' });

  // Список восстанавливается только после гидратации, в разметке его ещё нет.
  await expect(page.getByTestId('excluded-date-chip')).toHaveCount(0);
  await page.getByTestId('field-excludedDates').fill('2026-02-05');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('excluded-date-chip')).toHaveText(['2026-02-03']);
  // Черновик остаётся черновиком и не попадает в список сам по себе.
  await expect(page.getByTestId('field-excludedDates')).toHaveValue('2026-02-05');

  await page.getByTestId('excluded-date-add').click();
  await expect(page.getByTestId('excluded-date-chip')).toHaveText(['2026-02-03', '2026-02-05']);
});

test('excluded dates add and remove work normally after hydration', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();

  await page.getByTestId('field-excludedDates').fill('2026-02-11');
  await page.getByTestId('excluded-date-add').click();
  await expect(page.getByTestId('excluded-date-chip')).toHaveText(['2026-02-11']);

  // Повторная дата не дублируется.
  await page.getByTestId('field-excludedDates').fill('2026-02-11');
  await page.getByTestId('excluded-date-add').click();
  await expect(page.getByTestId('excluded-date-chip')).toHaveCount(1);

  await page.getByTestId('excluded-date-remove-2026-02-11').click();
  await expect(page.getByTestId('excluded-date-chip')).toHaveCount(0);
});

test('reset clears excluded dates while keeping the staged draft', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/?excludedDates=2026-02-03');
  await expect(page.getByTestId('excluded-date-chip')).toHaveText(['2026-02-03']);

  // Черновик набран, но ещё не добавлен в список.
  await page.getByTestId('field-excludedDates').fill('2026-02-07');
  await page.getByTestId('calc-reset-btn').click();

  await expect(page.getByTestId('excluded-date-chip')).toHaveCount(0);
  await expect(page.getByTestId('field-excludedDates')).toHaveValue('2026-02-07');
  await expect(page).not.toHaveURL(/\?/);
});

test('form still works normally after hydration has completed', async ({ page }) => {
  await page.goto('/ru/finance/vat-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();

  await page.getByTestId('field-rate').selectOption('20');
  await expect(page.getByTestId('field-rate')).toHaveValue('20');
  await expect(page.getByTestId('calc-result')).toContainText('НДС 20%');

  await page.getByTestId('field-amount').fill('24000');
  await expect(page.getByTestId('calc-result')).toContainText('4 000 ₽');
});

// Conditional (showIf) fields are the one input class the cases above do not
// reach: they exist in the SSR markup only while their controlling field holds
// the matching value, so an edit made before hydration has to survive both the
// island taking over and the visibility rule being re-evaluated.
test('a conditional showIf field edited before hydration keeps its value', async ({ page }) => {
  const reactErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error' && /418|423|425|hydrat/i.test(message.text())) {
      reactErrors.push(message.text());
    }
  });
  page.on('pageerror', (error) => reactErrors.push(String(error)));

  const hydrate = await holdHydration(page);
  await page.goto('/ru/finance/income-tax-calculator/?mode=fixed', { waitUntil: 'commit' });

  // The SSR markup is built from the field defaults, so the fixed-rate field is
  // hidden until hydration applies the query. The visible controls are still
  // editable, and that edit is what has to survive.
  await expect(page.getByTestId('field-amount')).toHaveValue('150000');
  await page.getByTestId('field-amount').fill('200000');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  // The query made mode=fixed win, so the conditional rate field is now shown…
  await expect(page.getByTestId('field-rate')).toBeVisible();
  await expect(page.getByTestId('field-rate')).toHaveValue('13');
  // …and the pre-hydration edit still won over the default, reaching the result:
  // 200 000 at a fixed 13% is 26 000.
  await expect(page.getByTestId('field-amount')).toHaveValue('200000');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('26 000 ₽');
  expect(reactErrors).toEqual([]);
});

test('hiding a conditional field after hydration keeps the visible mode consistent', async ({ page }) => {
  await page.goto('/ru/finance/discount-calculator/');

  // byPercent is the default, so the percent field is the visible one.
  await expect(page.getByTestId('field-discountPct')).toBeVisible();
  await expect(page.getByTestId('field-discountAmt')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-primary')).toHaveText('4 000 ₽');

  await page.getByTestId('field-mode-opt-byAmount').click();

  await expect(page.getByTestId('field-discountAmt')).toBeVisible();
  await expect(page.getByTestId('field-discountPct')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-primary')).toHaveText('4 000 ₽');

  await page.getByTestId('field-discountAmt').fill('2500');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('2 500 ₽');
});
