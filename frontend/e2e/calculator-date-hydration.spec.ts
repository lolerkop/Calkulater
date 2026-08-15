import { expect, test, type Page } from '@playwright/test';

// Regression tests for the date-field hydration defect.
//
// Automatic date defaults used to appear only on the client, so the server shipped an
// empty required date, a validation error and a different DOM. React could not hydrate
// that and threw the whole island away in favour of client rendering.
//
// Hydration correctness is asserted structurally rather than by React error codes: the
// SSR node is tagged with a JS expando before hydration, and a tag that survives proves
// React reused the server markup instead of replacing it. Uncaught page errors are
// collected as a second, independent signal.

const ISLAND_CHUNK = '**/_astro/CalculatorIsland*.js';
const MARKER = '__ssrNodeMarker';

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

function collectPageErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
}

async function tagServerMarkup(page: Page): Promise<void> {
  await expect(page.getByTestId('calc-form')).toBeVisible();
  await page.evaluate((marker) => {
    const form = document.querySelector('[data-testid="calc-form"]');
    if (form) (form as unknown as Record<string, unknown>)[marker] = true;
  }, MARKER);
}

async function serverMarkupSurvived(page: Page): Promise<boolean> {
  return page.evaluate((marker) => {
    const form = document.querySelector('[data-testid="calc-form"]');
    return Boolean(form && (form as unknown as Record<string, unknown>)[marker]);
  }, MARKER);
}

/** Local calendar date in the browser's own timezone, offset by whole days. */
async function localIsoDate(page: Page, offsetDays = 0): Promise<string> {
  return page.evaluate((offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }, offsetDays);
}

for (const { name, path } of [
  { name: 'VAT', path: '/ru/finance/vat-calculator/' },
  { name: 'working days', path: '/ru/date-time/working-days-calculator/' },
  { name: 'business days (EN)', path: '/en/date-time/business-days-calculator/' },
  { name: 'tile (no date fields)', path: '/ru/building/tile-calculator/' },
]) {
  test(`${name} reuses the server markup instead of re-rendering it`, async ({ page }) => {
    const errors = collectPageErrors(page);
    const hydrate = await holdHydration(page);
    await page.goto(path, { waitUntil: 'commit' });
    await tagServerMarkup(page);

    hydrate();

    await expect(page.getByTestId('calc-result')).toBeVisible();
    expect(await serverMarkupSurvived(page)).toBe(true);
    expect(errors).toEqual([]);
  });
}

test('server markup carries no validation error for untouched date fields', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/date-time/working-days-calculator/', { waitUntil: 'commit' });

  await expect(page.getByTestId('calc-form')).toBeVisible();
  await expect(page.getByTestId('field-startDate')).toHaveValue('');
  await expect(page.getByTestId('field-error-startDate')).toHaveCount(0);
  await expect(page.getByTestId('field-error-endDate')).toHaveCount(0);
  await expect(page.getByTestId('calc-validation')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-invalid')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-empty')).toBeVisible();

  hydrate();
  await expect(page.getByTestId('calc-result')).toBeVisible();
});

test('automatic date defaults use the visitor local date after hydration', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();

  await expect(page.getByTestId('field-startDate')).toHaveValue(await localIsoDate(page));
  await expect(page.getByTestId('field-endDate')).toHaveValue(await localIsoDate(page, 30));

  await page.goto('/ru/finance/vat-calculator/');
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('field-operationDate')).toHaveValue(await localIsoDate(page));
});

test('dates from the query string win over the automatic default', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/?startDate=2026-03-02&endDate=2026-03-06');

  await expect(page.getByTestId('field-startDate')).toHaveValue('2026-03-02');
  await expect(page.getByTestId('field-endDate')).toHaveValue('2026-03-06');
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('calc-result-primary')).not.toContainText(/NaN|Infinity|undefined/);
});

test('a date typed before hydration is not overwritten by the automatic default', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/date-time/working-days-calculator/', { waitUntil: 'commit' });

  await expect(page.getByTestId('field-startDate')).toHaveValue('');
  await page.getByTestId('field-startDate').fill('2026-04-01');

  hydrate();

  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('field-startDate')).toHaveValue('2026-04-01');
  // Untouched fields still get their automatic default.
  await expect(page.getByTestId('field-endDate')).toHaveValue(await localIsoDate(page, 30));
});

test('reset restores the automatic date default', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/?startDate=2026-03-02&endDate=2026-03-06');
  await expect(page.getByTestId('field-startDate')).toHaveValue('2026-03-02');

  await page.getByTestId('calc-reset-btn').click();

  await expect(page.getByTestId('field-startDate')).toHaveValue(await localIsoDate(page));
  await expect(page.getByTestId('field-endDate')).toHaveValue(await localIsoDate(page, 30));
  await expect(page).not.toHaveURL(/\?/);
});
