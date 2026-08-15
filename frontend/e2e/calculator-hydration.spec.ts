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

test('form still works normally after hydration has completed', async ({ page }) => {
  await page.goto('/ru/finance/vat-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();

  await page.getByTestId('field-rate').selectOption('20');
  await expect(page.getByTestId('field-rate')).toHaveValue('20');
  await expect(page.getByTestId('calc-result')).toContainText('НДС 20%');

  await page.getByTestId('field-amount').fill('24000');
  await expect(page.getByTestId('calc-result')).toContainText('4 000 ₽');
});
