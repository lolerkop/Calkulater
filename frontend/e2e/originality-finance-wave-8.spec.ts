import { expect, test, type Page } from '@playwright/test';
import { cases, locales, type BrowserCase, type Locale, type RowExpectation, type Values } from './originality-finance-wave-8.fixtures';

// Publication tests deliberately import no MAIN calculator, manifest or registry.
// The sixteen normal/boundary expectations and eight preserved default values
// have a separate100-digit Decimal ledger; copied URLs come from the app's own
// clipboard write, never from the test's query constructor.
const viewports = [{ width: 390, height: 844 }, { width: 1365, height: 900 }] as const;
const currency: Record<Locale, string> = { ru: '₽', en: '$', uk: '₴', de: '€', es: '€' };
const yearWord: Record<Locale, string> = { ru: 'лет', en: 'years', uk: 'років', de: 'Jahre', es: 'años' };
const nativeLetters = /[А-Яа-яЁёІіЇїЄєҐґ]/;
const technicalLeak = /\b(?:NaN|Infinity|undefined)\b/;
const unrelatedKey = 'not-a-calculator-field';

function numeric(text: string, locale: Locale): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
function fixtureUrl(sample: BrowserCase, locale: Locale, inputs: Values): string {
  for (const key of Object.keys(inputs)) if (!(key in sample.defaults) && key !== unrelatedKey) throw new Error(`${sample.id}: unknown fixture field ${key}`);
  return `${sample.pages[locale].path}?${new URLSearchParams(Object.entries(inputs).map(([key, value]) => [key, String(value)]))}`;
}
async function primary(page: Page, locale: Locale, expected: number) {
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await expect.poll(async () => numeric(await page.getByTestId('calc-result-primary').innerText(), locale)).toBeCloseTo(expected, 3);
}
async function rows(page: Page, locale: Locale, values: readonly RowExpectation[]) {
  for (const row of values) await expect.poll(async () => numeric(await page.getByTestId(`calc-result-row-${row.index}`).locator('dd').innerText(), locale)).toBeCloseTo(row.value, 5);
}
async function fieldValues(page: Page, values: Values) {
  for (const [key, value] of Object.entries(values)) await expect(page.getByTestId(`field-${key}`)).toHaveValue(String(value));
}
async function nativeResult(page: Page, locale: Locale) {
  const result = await page.getByTestId('calc-result').innerText();
  expect(result).not.toMatch(technicalLeak);
  if (locale === 'en' || locale === 'de' || locale === 'es') expect(result).not.toMatch(nativeLetters);
}
async function failure(page: Page, locale: Locale) {
  // Form validation can replace the entire numeric panel. Poll the actual
  // feedback surface, without attempting innerText on an absent result.
  await expect.poll(async () => await page.locator('[data-testid^="field-error-"]:visible').count() > 0
    || (await page.getByTestId('calc-result-primary').allTextContents()).some(value => value.trim() === '—')).toBe(true);
  if (await page.locator('[data-testid^="field-error-"]:visible').count()) {
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
  }
  const feedback = [await page.getByTestId('calc-result-wrap').innerText(), ...await page.locator('[data-testid^="field-error-"]:visible').allTextContents()].join('\n');
  expect(feedback).not.toMatch(technicalLeak);
  if (locale === 'en' || locale === 'de' || locale === 'es') expect(feedback).not.toMatch(nativeLetters);
}
async function layout(page: Page, width: number, sample: BrowserCase) {
  expect(await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) <= window.innerWidth + 1)).toBe(true);
  for (const name of Object.keys(sample.defaults)) {
    const field = page.getByTestId(`field-${name}`);
    await expect(field).toBeVisible();
    const box = await field.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(-1);
    expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
  }
  for (const id of ['calc-form', 'calc-result-wrap']) {
    const box = await page.getByTestId(id).boundingBox();
    expect(box).not.toBeNull(); expect(box!.width).toBeGreaterThan(100);
    expect(box!.x).toBeGreaterThanOrEqual(-1); expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
  }
}
async function unitLabels(page: Page, locale: Locale, sample: BrowserCase) {
  for (const name of sample.moneyFields) await expect(page.getByTestId(`field-label-${name}`)).toContainText(`(${currency[locale]})`);
  if (sample.primaryUnit === 'money') await expect(page.getByTestId('calc-result-primary')).toContainText(currency[locale]);
  if (sample.primaryUnit === 'percent') await expect(page.getByTestId('calc-result-primary')).toContainText('%');
  if (sample.primaryUnit === 'years') await expect(page.getByTestId('calc-result-primary')).toContainText(yearWord[locale]);
  for (const index of sample.moneyRows) await expect(page.getByTestId(`calc-result-row-${index}`).locator('dd')).toContainText(currency[locale]);
}
async function installShareCapture(page: Page) {
  // Capture the isolated page's real clipboard API argument. This verifies the
  // application-created URL; it does not read or alter the user's OS clipboard.
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', {
    configurable: true, value: { writeText: async (text: string) => { (window as Window & { financeWave8Share?: string }).financeWave8Share = text; } },
  }));
}
async function copiedUrl(page: Page, sample: BrowserCase, locale: Locale, values: Values): Promise<string> {
  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toBeVisible();
  await page.getByTestId('calc-share-confirm').click();
  await expect.poll(() => page.evaluate(() => (window as Window & { financeWave8Share?: string }).financeWave8Share ?? '')).not.toBe('');
  const copied = await page.evaluate(() => (window as Window & { financeWave8Share?: string }).financeWave8Share!);
  const url = new URL(copied);
  expect(url.origin).toBe(new URL(page.url()).origin);
  expect(url.pathname).toBe(sample.pages[locale].path); expect(url.hash).toBe('#calculator');
  const expected = Object.fromEntries(Object.entries(values).filter(([key, value]) => key !== unrelatedKey && value !== sample.defaults[key]).map(([key, value]) => [key, String(value)]));
  expect(Object.fromEntries(url.searchParams)).toEqual(expected);
  expect(url.searchParams.has(unrelatedKey)).toBe(false);
  return copied;
}
async function body(page: Page, sample: BrowserCase, locale: Locale) {
  const copy = sample.pages[locale];
  await expect(page.locator('h1')).toHaveText(copy.h1);
  await expect(page.locator('main')).toContainText(copy.longDescription);
  for (const instruction of copy.howToUse) await expect(page.locator('main')).toContainText(instruction);
  await expect(page.locator('main')).toContainText(copy.howItWorks);
  await expect(page.locator('main')).toContainText(copy.example);
  await expect(page.getByTestId('calc-form')).toContainText(copy.disclaimer);
  for (const [name, help] of Object.entries(copy.help)) await expect(page.locator(`#f-${name}-help`)).toHaveText(help);
  for (const source of copy.sources) await expect(page.locator('main').locator(`a[href="${source}"]`)).toBeVisible();
  const faq = page.getByTestId('calculator-faq');
  await expect(faq.locator('details')).toHaveCount(copy.faq.length);
  for (const [index, item] of copy.faq.entries()) {
    await expect(faq.getByTestId(`faq-item-${index}`).locator('summary')).toContainText(item.q);
    await expect(faq.getByTestId(`faq-item-${index}`).locator('p')).toHaveText(item.a);
  }
}

for (const viewport of viewports) for (const sample of cases) for (const locale of locales) {
  test.describe(`${viewport.width}px ${locale} ${sample.id}`, () => {
    test.use({ viewport });
    test('independent normal values, native body, units, actual copied query, reload and defaults', async ({ page }) => {
      const errors: string[] = []; page.on('pageerror', error => errors.push(error.message));
      await installShareCapture(page);
      await page.goto(fixtureUrl(sample, locale, { ...sample.inputs, [unrelatedKey]: 'ignored-malformed' }));
      await primary(page, locale, sample.expected); await rows(page, locale, sample.rows);
      await fieldValues(page, sample.inputs); await nativeResult(page, locale);
      await body(page, sample, locale); await unitLabels(page, locale, sample); await layout(page, viewport.width, sample);
      if (locale === 'en' || locale === 'de' || locale === 'es') await expect(page.getByTestId('calc-form')).not.toContainText(nativeLetters);
      if (sample.id === 'time-value-money') {
        expect(await page.getByTestId('field-mode').locator('option').evaluateAll(options => options.map(option => (option as HTMLOptionElement).value))).toEqual(['fv', 'pv']);
        expect(await page.getByTestId('field-compounding').locator('option').evaluateAll(options => options.map(option => (option as HTMLOptionElement).value))).toEqual(['month', 'quarter', 'year']);
      }
      const copied = await copiedUrl(page, sample, locale, sample.inputs);
      await page.goto(copied); await primary(page, locale, sample.expected);
      await page.reload(); await primary(page, locale, sample.expected); await fieldValues(page, sample.inputs);
      await page.getByTestId('calc-reset-btn').click(); await primary(page, locale, sample.defaultExpected);
      await fieldValues(page, sample.defaults); expect(new URL(page.url()).search).toBe('');
      const defaultLink = await copiedUrl(page, sample, locale, sample.defaults);
      expect(new URL(defaultLink).search).toBe('');
      expect(errors).toEqual([]);
    });
    test('blank/malformed/domain recovery, optional row scope and independent signed/fractional boundary', async ({ page }) => {
      const errors: string[] = []; page.on('pageerror', error => errors.push(error.message));
      await installShareCapture(page);
      await page.goto(fixtureUrl(sample, locale, sample.inputs)); await primary(page, locale, sample.expected);
      const required = page.getByTestId(`field-${sample.blankField}`);
      await required.fill(''); await expect(page.getByTestId(`field-error-${sample.blankField}`)).toBeVisible(); await failure(page, locale);
      await required.fill('broken-value'); await expect(page.getByTestId(`field-error-${sample.blankField}`)).toBeVisible(); await failure(page, locale);
      await required.fill(String(sample.inputs[sample.blankField])); await primary(page, locale, sample.expected);
      await expect(page.locator('[data-testid^="field-error-"]:visible')).toHaveCount(0);
      await page.getByTestId(`field-${sample.domainField}`).fill(String(sample.domainInvalid)); await failure(page, locale);
      await page.goto(fixtureUrl(sample, locale, { ...sample.inputs, [sample.domainField]: sample.domainInvalid }));
      await failure(page, locale); await page.reload(); await failure(page, locale);
      await page.getByTestId(`field-${sample.domainField}`).fill(String(sample.inputs[sample.domainField])); await primary(page, locale, sample.expected);
      if (sample.optionalAmount) {
        await page.getByTestId(`field-${sample.optionalAmount}`).fill(''); await primary(page, locale, sample.expected);
        await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(sample.optionalRowCount!);
        await expect(page.locator('[data-testid^="field-error-"]:visible')).toHaveCount(0);
        const copied = await copiedUrl(page, sample, locale, { ...sample.inputs, [sample.optionalAmount]: '' });
        expect(new URL(copied).searchParams.has(sample.optionalAmount)).toBe(true);
        expect(new URL(copied).searchParams.get(sample.optionalAmount)).toBe('');
        await page.goto(copied); await primary(page, locale, sample.expected);
        await expect(page.getByTestId(`field-${sample.optionalAmount}`)).toHaveValue('');
        await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(sample.optionalRowCount!);
        if (sample.id === 'real-return') {
          // Duration stays active when optional capital is absent; it must not
          // be incorrectly treated as a hidden or unvalidated field.
          await expect(page.getByTestId('field-years')).toBeVisible();
          await page.getByTestId('field-years').fill(''); await expect(page.getByTestId('field-error-years')).toBeVisible(); await failure(page, locale);
          await page.getByTestId('field-years').fill('1.5'); await primary(page, locale, 4.67);
        }
      }
      await page.goto(fixtureUrl(sample, locale, sample.boundary.inputs));
      await primary(page, locale, sample.boundary.expected); await rows(page, locale, sample.boundary.rows);
      await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(sample.boundary.rowCount);
      await fieldValues(page, sample.boundary.inputs); await nativeResult(page, locale); await layout(page, viewport.width, sample);
      if (sample.id === 'budget-50-30-20') {
        // Independent rounding is stated in the body.103 is displayed as
        // 52+31+21=104; the test must not invent a reconciled allocation.
        const allocation = [await page.getByTestId('calc-result-primary').innerText(), await page.getByTestId('calc-result-row-0').locator('dd').innerText(), await page.getByTestId('calc-result-row-1').locator('dd').innerText()];
        expect(allocation.reduce((sum, value) => sum + numeric(value, locale), 0)).toBe(104);
      }
      await page.reload(); await primary(page, locale, sample.boundary.expected);
      expect(errors).toEqual([]);
    });
  });
}
