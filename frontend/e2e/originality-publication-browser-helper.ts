import { expect, test, type Page } from '@playwright/test';

export type NativeLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
export type Values = Record<string, string | number | boolean>;
export type NumericExpectation = { kind: 'number' | 'ratio'; value: number } | { kind: 'duration'; numbers: number[] };
export type BrowserScenario = { inputs: Values; expected: NumericExpectation; rows: { index: number; expectation: NumericExpectation }[]; inactive: string[]; rowCount: number; primaryUnit: string; independentLiteral: string };
export type PublicationPage = { locale: NativeLocale; path: string; h1: string; body: { longDescription: string; howItWorks: string; howToUse: string[]; example: string; faq: { q: string; a: string }[]; disclaimer?: string }; help: Record<string, string>; sources: string[]; normal: BrowserScenario; boundary: BrowserScenario; defaultExpected: NumericExpectation; blankField: string; domainField: string; domainInvalid: number; countFields: string[] };
export type PublicationCase = { id: string; category: 'finance' | 'household'; defaults: Values; fieldNames: string[]; defaultInactive: string[]; pages: PublicationPage[] };
const viewports = [{ width: 390, height: 844 }, { width: 1365, height: 900 }] as const;
const foreign = /[А-Яа-яЁёІіЇїЄєҐґ]/;
const leak = /\b(?:NaN|Infinity|undefined)\b/;
const unrelated = 'not-a-calculator-field';
function numeric(text: string, locale: NativeLocale): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
async function numericSurface(page: Page, testId: string, locale: NativeLocale, oracle: NumericExpectation, row = false) {
  const surface = row ? page.getByTestId(testId).locator('dd') : page.getByTestId(testId);
  if (oracle.kind === 'duration') await expect.poll(async () => [...((await surface.allTextContents())[0] ?? '').matchAll(/\d+/g)].map(token => Number(token[0]))).toEqual(oracle.numbers);
  else await expect.poll(async () => { const text = (await surface.allTextContents())[0] ?? ''; return numeric(oracle.kind === 'ratio' ? text.replace(/^1\s*:/, '') : text, locale); }).toBeCloseTo(oracle.value, 3);
}
async function primary(page: Page, locale: NativeLocale, oracle: NumericExpectation) {
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await numericSurface(page, 'calc-result-primary', locale, oracle);
}
async function rows(page: Page, locale: NativeLocale, expected: BrowserScenario['rows']) {
  for (const row of expected) await numericSurface(page, `calc-result-row-${row.index}`, locale, row.expectation, true);
}
function route(sample: PublicationCase, copy: PublicationPage, values: Values): string {
  for (const name of Object.keys(values)) if (!sample.fieldNames.includes(name) && name !== unrelated) throw new Error(`Unknown fixture field ${sample.id}.${name}`);
  return `${copy.path}?${new URLSearchParams(Object.entries(values).map(([key, value]) => [key, String(value)]))}`;
}
async function fields(page: Page, sample: PublicationCase, values: Values, inactive: string[]) {
  for (const name of sample.fieldNames) {
    const field = page.getByTestId(`field-${name}`);
    if (inactive.includes(name)) await expect(field).toHaveCount(0);
    else { await expect(field).toBeVisible(); if (name in values) await expect(field).toHaveValue(String(values[name])); }
  }
}
async function native(page: Page, locale: NativeLocale) {
  const text = await page.getByTestId('calc-result-wrap').innerText();
  expect(text).not.toMatch(leak);
  if (['en', 'de', 'es'].includes(locale)) expect(text).not.toMatch(foreign);
}
async function failure(page: Page, locale: NativeLocale) {
  // Poll existing surfaces: an invalid form can remove the numeric panel.
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
async function layout(page: Page, sample: PublicationCase, width: number, inactive: string[]) {
  expect(await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) <= window.innerWidth + 1)).toBe(true);
  for (const id of ['calc-form', 'calc-result-wrap', ...sample.fieldNames.filter(name => !inactive.includes(name)).map(name => `field-${name}`)]) {
    const box = await page.getByTestId(id).boundingBox();
    expect(box).not.toBeNull(); expect(box!.x).toBeGreaterThanOrEqual(-1); expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
  }
}
async function body(page: Page, copy: PublicationPage) {
  await expect(page.locator('h1')).toHaveText(copy.h1);
  for (const text of [copy.body.longDescription, ...copy.body.howToUse, copy.body.howItWorks, copy.body.example]) await expect(page.locator('main')).toContainText(text);
  if (copy.body.disclaimer) await expect(page.getByTestId('calc-form')).toContainText(copy.body.disclaimer);
  const faq = page.getByTestId('calculator-faq');
  await expect(faq.locator('details')).toHaveCount(copy.body.faq.length);
  for (const [index, item] of copy.body.faq.entries()) {
    await expect(faq.getByTestId(`faq-item-${index}`).locator('summary')).toContainText(item.q);
    await expect(faq.getByTestId(`faq-item-${index}`).locator('p')).toHaveText(item.a);
  }
  for (const [field, help] of Object.entries(copy.help)) await expect(page.locator(`#f-${field}-help`)).toHaveText(help);
  for (const href of copy.sources) await expect(page.locator('main').locator(`a[href="${href}"]`)).toBeVisible();
}
async function captureShare(page: Page) {
  // Capture this isolated page's own clipboard argument, not the user's clipboard.
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (text: string) => { (window as Window & { originalityShare?: string }).originalityShare = text; } } }));
}
async function copied(page: Page, sample: PublicationCase, copy: PublicationPage, values: Values, inactive: string[]) {
  await page.evaluate(() => { delete (window as Window & { originalityShare?: string }).originalityShare; });
  await page.getByTestId('calc-share-btn').click();
  if (sample.category === 'finance') { await expect(page.getByTestId('calc-share-warning')).toBeVisible(); await page.getByTestId('calc-share-confirm').click(); }
  else await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => (window as Window & { originalityShare?: string }).originalityShare ?? '')).not.toBe('');
  const raw = await page.evaluate(() => (window as Window & { originalityShare?: string }).originalityShare!);
  const actual = new URL(raw);
  expect(actual.origin).toBe(new URL(page.url()).origin); expect(actual.pathname).toBe(copy.path); expect(actual.hash).toBe('#calculator');
  const expected = Object.fromEntries(Object.entries(values).filter(([key, value]) => key !== unrelated && !inactive.includes(key) && value !== sample.defaults[key]).map(([key, value]) => [key, String(value)]));
  expect(Object.fromEntries(actual.searchParams)).toEqual(expected);
  for (const name of [...inactive, unrelated]) expect(actual.searchParams.has(name)).toBe(false);
  return raw;
}
export function registerPublicationCases(samples: PublicationCase[], wave: string) {
  for (const viewport of viewports) for (const sample of samples) for (const copy of sample.pages) test.describe(`${wave} ${viewport.width}px ${copy.locale} ${sample.id}`, () => {
    test.use({ viewport });
    test('independent normal, full native publication, actual clipboard URL, reload and default omission', async ({ page }) => {
      const errors: string[] = []; page.on('pageerror', error => errors.push(error.message)); await captureShare(page);
      const normal = copy.normal;
      await page.goto(route(sample, copy, { ...normal.inputs, [unrelated]: 'ignored' }));
      await primary(page, copy.locale, normal.expected); await rows(page, copy.locale, normal.rows); await fields(page, sample, normal.inputs, normal.inactive);
      await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(normal.rowCount);
      await body(page, copy); await native(page, copy.locale); await layout(page, sample, viewport.width, normal.inactive);
      if (normal.expected.kind !== 'duration' && normal.primaryUnit) await expect(page.getByTestId('calc-result-primary')).toContainText(normal.primaryUnit);
      if (['en', 'de', 'es'].includes(copy.locale)) await expect(page.getByTestId('calc-form')).not.toContainText(foreign);
      const share = await copied(page, sample, copy, normal.inputs, normal.inactive);
      await page.goto(share); await primary(page, copy.locale, normal.expected); await page.reload(); await primary(page, copy.locale, normal.expected); await fields(page, sample, normal.inputs, normal.inactive);
      await page.getByTestId('calc-reset-btn').click(); await primary(page, copy.locale, copy.defaultExpected); await fields(page, sample, sample.defaults, sample.defaultInactive); expect(new URL(page.url()).search).toBe('');
      const defaultShare = await copied(page, sample, copy, sample.defaults, sample.defaultInactive); expect(new URL(defaultShare).search).toBe('');
      expect(errors).toEqual([]);
    });
    test('blank/domain recovery, active-field scope, exact counts and independent boundary query', async ({ page }) => {
      const errors: string[] = []; page.on('pageerror', error => errors.push(error.message)); await captureShare(page);
      await page.goto(route(sample, copy, copy.normal.inputs)); await primary(page, copy.locale, copy.normal.expected);
      const field = page.getByTestId(`field-${copy.blankField}`);
      for (const bad of ['', 'broken-value']) { await field.fill(bad); await expect(page.getByTestId(`field-error-${copy.blankField}`)).toBeVisible(); await failure(page, copy.locale); }
      await field.fill(String(copy.normal.inputs[copy.blankField])); await primary(page, copy.locale, copy.normal.expected);
      await page.goto(route(sample, copy, { ...copy.normal.inputs, [copy.domainField]: copy.domainInvalid })); await failure(page, copy.locale); await page.reload(); await failure(page, copy.locale);
      await page.getByTestId(`field-${copy.domainField}`).fill(String(copy.normal.inputs[copy.domainField])); await primary(page, copy.locale, copy.normal.expected);
      for (const count of copy.countFields) { const raw = ['de', 'es'].includes(copy.locale) ? '1,00000000000000001' : '1.00000000000000001'; await page.getByTestId(`field-${count}`).fill(raw); await expect(page.getByTestId(`field-error-${count}`)).toBeVisible(); await failure(page, copy.locale); await page.getByTestId(`field-${count}`).fill(String(copy.normal.inputs[count])); await primary(page, copy.locale, copy.normal.expected); }
      const boundary = copy.boundary;
      await page.goto(route(sample, copy, { ...boundary.inputs, ...Object.fromEntries(boundary.inactive.map(name => [name, -1])) }));
      await primary(page, copy.locale, boundary.expected); await rows(page, copy.locale, boundary.rows); await fields(page, sample, boundary.inputs, boundary.inactive); await native(page, copy.locale); await layout(page, sample, viewport.width, boundary.inactive);
      await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(boundary.rowCount);
      const link = await copied(page, sample, copy, boundary.inputs, boundary.inactive);
      await page.goto(link); await primary(page, copy.locale, boundary.expected); await page.reload(); await primary(page, copy.locale, boundary.expected);
      expect(errors).toEqual([]);
    });
  });
}
