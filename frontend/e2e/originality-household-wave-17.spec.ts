import { expect, test, type Page, type Locator } from '@playwright/test';
import { cases } from './originality-household-wave-17.fixtures';

export type C9Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
export type C9Values = Record<string, string | number | boolean>;
export type C9Expectation = { kind: 'number'; value: number } | { kind: 'dimensions'; values: number[] } | { kind: 'literal'; value: string };
export type C9Scenario = {
  inputs: C9Values; expected: C9Expectation; rows: { index: number; label: string; expected: C9Expectation }[];
  inactive: string[]; rowCount: number; unit: string; table?: { row: number; column: number; value: number }[];
  independentDerivation: string;
};
export type C9Page = {
  locale: C9Locale; path: string; h1: string;
  body: { longDescription: string; howToUse: string[]; howItWorks: string; example: string; faq: { q: string; a: string }[]; disclaimer?: string };
  help: Record<string, string>; sources: string[]; normal: C9Scenario; boundary: C9Scenario; controls: C9Scenario[];
  defaultExpected: C9Expectation; blankField: string; domainField: string; domainValue: number | string; counts: string[];
};
export type C9Case = { id: string; defaults: C9Values; fields: string[]; defaultInactive: string[]; pages: C9Page[] };
const unrelated = 'not-a-calculator-field';
const leak = /\b(?:NaN|Infinity|undefined)\b/;
const foreign = /[А-Яа-яЁёІіЇїЄєҐґ]/;

function numeric(text: string, locale: C9Locale): number {
  const scientific = /([-−]?[\d.,]+)·10\^([+-]?\d+)/.exec(text.replace(/[\s\u00a0\u202f]/g, ''));
  if (scientific) return Number(scientific[1].replace('−', '-').replace(',', '.') + 'e' + scientific[2]);
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
async function value(surface: Locator, locale: C9Locale, expected: C9Expectation) {
  if (expected.kind === 'literal') { await expect(surface).toHaveText(expected.value); return; }
  if (expected.kind === 'dimensions') {
    await expect.poll(async () => ((await surface.allTextContents())[0] ?? '').split('×').map(part => numeric(part, locale))).toEqual(expected.values);
    return;
  }
  if (expected.value === 0) await expect.poll(async () => numeric((await surface.allTextContents())[0] ?? '', locale)).toBe(0);
  else if (Math.abs(expected.value) < .0001 || Math.abs(expected.value) >= 1e12) {
    await expect.poll(async () => numeric((await surface.allTextContents())[0] ?? '', locale) / expected.value).toBeCloseTo(1, 3);
  } else await expect.poll(async () => numeric((await surface.allTextContents())[0] ?? '', locale)).toBeCloseTo(expected.value, 2);
}
async function primary(page: Page, copy: C9Page, expected: C9Expectation) {
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await value(page.getByTestId('calc-result-primary'), copy.locale, expected);
}
async function scenario(page: Page, sample: C9Case, copy: C9Page, data: C9Scenario) {
  await primary(page, copy, data.expected);
  for (const row of data.rows) {
    const surface = page.getByTestId(`calc-result-row-${row.index}`);
    await expect(surface.locator('dt')).toHaveText(row.label);
    await value(surface.locator('dd'), copy.locale, row.expected);
  }
  await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(data.rowCount);
  if (data.unit) await expect(page.getByTestId('calc-result-primary')).toContainText(data.unit);
  for (const cell of data.table ?? []) await value(page.getByTestId('calc-result-wrap').locator('table tbody tr').nth(cell.row).locator('td').nth(cell.column), copy.locale, { kind: 'number', value: cell.value });
  await fields(page, sample, data.inputs, data.inactive);
  await native(page, copy.locale);
}
function route(sample: C9Case, copy: C9Page, inputs: C9Values) {
  for (const key of Object.keys(inputs)) if (key !== unrelated && !sample.fields.includes(key)) throw new Error(`Unknown ${sample.id}.${key}`);
  return `${copy.path}?${new URLSearchParams(Object.entries(inputs).map(([key, raw]) => [key, String(raw)]))}`;
}
async function fields(page: Page, sample: C9Case, inputs: C9Values, inactive: string[]) {
  for (const name of sample.fields) {
    const field = page.getByTestId(`field-${name}`);
    if (inactive.includes(name)) await expect(field).toHaveCount(0);
    else {
      await expect(field).toBeVisible();
      if (name in inputs) {
        if (await field.getAttribute('role') === 'group') {
          await expect(field.getByRole('button')).toHaveCount(2);
          await expect(field.getByRole('button', { pressed: true })).toHaveCount(1);
          await expect(field.getByTestId(`field-${name}-opt-${String(inputs[name])}`)).toHaveAttribute('aria-pressed', 'true');
          await expect(field.getByRole('button', { pressed: false })).toHaveCount(1);
        } else await expect(field).toHaveValue(String(inputs[name]));
      }
    }
  }
}
async function native(page: Page, locale: C9Locale) {
  const text = await page.getByTestId('calc-result-wrap').innerText();
  expect(text).not.toMatch(leak);
  if (['en', 'de', 'es'].includes(locale)) expect(text).not.toMatch(foreign);
}
async function failure(page: Page, locale: C9Locale) {
  await expect.poll(async () => await page.locator('[data-testid^="field-error-"]:visible').count() > 0
    || (await page.getByTestId('calc-result-primary').allTextContents()).some(text => text.trim() === '—')).toBe(true);
  if (await page.locator('[data-testid^="field-error-"]:visible').count()) {
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
  }
  const text = [await page.getByTestId('calc-result-wrap').innerText(), ...await page.locator('[data-testid^="field-error-"]:visible').allTextContents()].join('\n');
  expect(text).not.toMatch(leak);
  if (['en', 'de', 'es'].includes(locale)) expect(text).not.toMatch(foreign);
}
async function layout(page: Page, sample: C9Case, width: number, inactive: string[]) {
  expect(await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) <= window.innerWidth + 1)).toBe(true);
  for (const id of ['calc-form', 'calc-result-wrap', ...sample.fields.filter(key => !inactive.includes(key)).map(key => `field-${key}`)]) {
    const box = await page.getByTestId(id).boundingBox();
    expect(box).not.toBeNull(); expect(box!.x).toBeGreaterThanOrEqual(-1); expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
  }
}
async function publication(page: Page, copy: C9Page) {
  await expect(page.locator('h1')).toHaveText(copy.h1);
  for (const text of [copy.body.longDescription, ...copy.body.howToUse, copy.body.howItWorks, copy.body.example]) await expect(page.locator('main')).toContainText(text);
  if (copy.body.disclaimer) await expect(page.getByTestId('calc-form')).toContainText(copy.body.disclaimer);
  const faq = page.getByTestId('calculator-faq');
  await expect(faq.locator('details')).toHaveCount(copy.body.faq.length);
  for (const [index, item] of copy.body.faq.entries()) {
    await expect(faq.getByTestId(`faq-item-${index}`).locator('summary')).toContainText(item.q);
    await expect(faq.getByTestId(`faq-item-${index}`).locator('p')).toHaveText(item.a);
  }
  for (const [name, help] of Object.entries(copy.help)) await expect(page.locator(`#f-${name}-help`)).toHaveText(help);
  for (const href of copy.sources) await expect(page.locator('main').locator(`a[href="${href}"]`)).toBeVisible();
  if (['en', 'de', 'es'].includes(copy.locale)) await expect(page.getByTestId('calc-form')).not.toContainText(foreign);
}
async function captureShare(page: Page) {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (text: string) => { (window as Window & { c9Share?: string }).c9Share = text; } } }));
}
async function copied(page: Page, sample: C9Case, copy: C9Page, data: C9Values, inactive: string[]) {
  await page.evaluate(() => { delete (window as Window & { c9Share?: string }).c9Share; });
  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => (window as Window & { c9Share?: string }).c9Share ?? '')).not.toBe('');
  const raw = await page.evaluate(() => (window as Window & { c9Share?: string }).c9Share!);
  const actual = new URL(raw);
  expect(actual.origin).toBe(new URL(page.url()).origin); expect(actual.pathname).toBe(copy.path); expect(actual.hash).toBe('#calculator');
  const expected = Object.fromEntries(Object.entries(data).filter(([key, raw]) => key !== unrelated && !inactive.includes(key) && raw !== sample.defaults[key]).map(([key, raw]) => [key, String(raw)]));
  expect(Object.fromEntries(actual.searchParams)).toEqual(expected);
  for (const name of [...inactive, unrelated]) expect(actual.searchParams.has(name)).toBe(false);
  return raw;
}
for (const viewport of [{ width: 390, height: 844 }, { width: 1365, height: 900 }]) for (const sample of cases) for (const copy of sample.pages) test.describe(`household17 ${viewport.width}px ${copy.locale} ${sample.id}`, () => {
  test.use({ viewport });
  test('independent normal/defaults, all native copy, units/layout and exact clipboard/query/reload', async ({ page }) => {
    const errors: string[] = []; page.on('pageerror', error => errors.push(error.message)); await captureShare(page);
    await page.goto(route(sample, copy, { ...copy.normal.inputs, [unrelated]: 'ignored' }));
    await scenario(page, sample, copy, copy.normal); await publication(page, copy); await layout(page, sample, viewport.width, copy.normal.inactive);
    const share = await copied(page, sample, copy, copy.normal.inputs, copy.normal.inactive);
    await page.goto(share); await primary(page, copy, copy.normal.expected); await page.reload(); await scenario(page, sample, copy, copy.normal);
    await page.getByTestId('calc-reset-btn').click(); await primary(page, copy, copy.defaultExpected); await fields(page, sample, sample.defaults, sample.defaultInactive);
    expect(new URL(page.url()).search).toBe('');
    expect(new URL(await copied(page, sample, copy, sample.defaults, sample.defaultInactive)).search).toBe('');
    expect(errors).toEqual([]);
  });
  test('blank/domain recovery, exact raw counts, inactive fields and independent decimal boundaries', async ({ page }) => {
    const errors: string[] = []; page.on('pageerror', error => errors.push(error.message)); await captureShare(page);
    await page.goto(route(sample, copy, copy.normal.inputs)); await primary(page, copy, copy.normal.expected);
    for (const raw of ['', 'broken-value']) { await page.getByTestId(`field-${copy.blankField}`).fill(raw); await failure(page, copy.locale); }
    await page.getByTestId(`field-${copy.blankField}`).fill(String(copy.normal.inputs[copy.blankField])); await primary(page, copy, copy.normal.expected);
    await page.goto(route(sample, copy, { ...copy.normal.inputs, [copy.domainField]: copy.domainValue })); await failure(page, copy.locale); await page.reload(); await failure(page, copy.locale);
    await page.getByTestId(`field-${copy.domainField}`).fill(String(copy.normal.inputs[copy.domainField])); await primary(page, copy, copy.normal.expected);
    for (const name of copy.counts) {
      const raw = ['de', 'es'].includes(copy.locale) ? '1,00000000000000001' : '1.00000000000000001';
      await page.getByTestId(`field-${name}`).fill(raw); await expect(page.getByTestId(`field-error-${name}`)).toBeVisible(); await failure(page, copy.locale);
      await page.getByTestId(`field-${name}`).fill(String(copy.normal.inputs[name])); await primary(page, copy, copy.normal.expected);
    }
    if (sample.id === 'price-per-unit') {
      // Unsupported URL options are rejected before compute; the declared default is single/kg.
      // Independent fixed fallback:150 /0.5=300. Raw compute invalid-enum rejection is checked separately.
      const fallback: C9Scenario = {
        ...copy.normal,
        inputs: { mode: 'single', unit: 'kg', price: 150, amount: .5 },
        expected: { kind: 'number', value: 300 },
        rows: [
          { ...copy.normal.rows[0], expected: { kind: 'number', value: 150 } },
          { ...copy.normal.rows[1], expected: { kind: 'number', value: .5 } },
        ],
        inactive: ['priceA', 'amountA', 'priceB', 'amountB'],
        independentDerivation: 'Unknown URL mode is rejected; declared single/kg defaults give150/.5=300.',
      };
      await page.goto(route(sample, copy, {
        ...fallback.inputs, mode: 'unsupported-mode', [unrelated]: 'ignored',
        ...Object.fromEntries(fallback.inactive.map(key => [key, 'malformed-inactive'])),
      }));
      await expect(page.getByTestId('field-mode')).toHaveValue('single');
      await scenario(page, sample, copy, fallback);
      await layout(page, sample, viewport.width, fallback.inactive);
      await page.reload(); await scenario(page, sample, copy, fallback);
      const fallbackShare = await copied(page, sample, copy, fallback.inputs, fallback.inactive);
      expect(new URL(fallbackShare).search).toBe('');
      await page.goto(fallbackShare); await scenario(page, sample, copy, fallback);
      await page.reload(); await scenario(page, sample, copy, fallback);
      await page.getByTestId('calc-reset-btn').click();
      await primary(page, copy, { kind: 'number', value: 300 });
      await fields(page, sample, sample.defaults, sample.defaultInactive);
      expect(new URL(page.url()).search).toBe('');
      expect(new URL(await copied(page, sample, copy, sample.defaults, sample.defaultInactive)).search).toBe('');
    }
    for (const data of [copy.boundary, ...copy.controls]) {
      await page.goto(route(sample, copy, { ...data.inputs, ...Object.fromEntries(data.inactive.map(key => [key, 'malformed-inactive'])) }));
      await scenario(page, sample, copy, data); await layout(page, sample, viewport.width, data.inactive);
      const link = await copied(page, sample, copy, data.inputs, data.inactive);
      await page.goto(link); await primary(page, copy, data.expected); await page.reload(); await scenario(page, sample, copy, data);
    }
    expect(errors).toEqual([]);
  });
});
