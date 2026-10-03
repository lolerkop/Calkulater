import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// Fixed expectations were derived independently with80-digitDecimal algebra
// and monthly recurrences before the engine changes. No numeric expectation
// below calls a calculator. Annuity schedules round monthly interest/principal
// to cents; the other loan comparisons retain precision until presentation.
type Locale = (typeof locales)[number];
type Values = Record<string, string | number>;
type Sample = {
  id: string; inputs: Values; expected: number; defaultExpected: number;
  rows: readonly number[]; active: string; invalid: number;
};
const cases: readonly Sample[] = [
  { id: 'annuity', inputs: { amount: 500000, rate: 9.5, months: 24 }, expected: 22957.25, defaultExpected: 88848.79, rows: [550973.92, 50973.92, 3958.33, 18998.92, 22957.17], active: 'months', invalid: 0 },
  { id: 'apr-apy', inputs: { mode: 'toApy', rate: 7.5, periods: 4 }, expected: 7.71, defaultExpected: 19.56, rows: [7.5, 1.88, 4, 1.0771], active: 'periods', invalid: 0 },
  { id: 'cagr', inputs: { begin: 200000, end: 100000, years: 4 }, expected: -15.91, defaultExpected: 14.87, rows: [-50, .5], active: 'end', invalid: 0 },
  { id: 'savings-goal', inputs: { mode: 'payment', goal: 30000, initial: 5000, rate: 4, years: 5 }, expected: 360.41, defaultExpected: 11582.09, rows: [60, 21624.78, 3375.22, 30000, 30000], active: 'goal', invalid: 0 },
  { id: 'lease-payment', inputs: { price: 3500000, down: 700000, residualPct: 25, months: 48, rate: 9.5 }, expected: 54651.04, defaultExpected: 34222.22, rows: [40104.17, 14546.88, 875000, 3323250], active: 'down', invalid: -1 },
  { id: 'early-repayment', inputs: { amount: 1200000, rate: 12, years: 7, extra: 5000 }, expected: 166166.99, defaultExpected: 5039148.29, rows: [21183.28, 62, 84, 1613228.48], active: 'extra', invalid: -1 },
  { id: 'refinancing', inputs: { balance: 800000, oldRate: 18, oldMonths: 48, newRate: 16, newMonths: 60, fee: 0 }, expected: -39266.76, defaultExpected: 524776.76, rows: [23500, 19454.45, 1127999.98, 1167266.74], active: 'fee', invalid: -1 },
  { id: 'down-payment', inputs: { mode: 'percent', price: 3200000, percent: 15 }, expected: 480000, defaultExpected: 1000000, rows: [2720000, 15], active: 'percent', invalid: 101 },
];
const sourceUrls: Record<string, string> = {
  annuity: 'https://support.microsoft.com/en-us/excel/functions/pmt-function',
  'apr-apy': 'https://support.microsoft.com/en-us/excel/functions/effect-function',
  cagr: 'https://support.microsoft.com/en-us/excel/functions/rri-function',
  'savings-goal': 'https://support.microsoft.com/en-us/excel/functions/fv-function',
  'lease-payment': 'https://www.federalreserve.gov/pubs/leasing/resource/consider/ongoing_info6.htm',
  'early-repayment': 'https://support.microsoft.com/en-us/excel/functions/nper-function',
  refinancing: 'https://files.consumerfinance.gov/f/documents/cfpb_should_i_refinance_handout.pdf',
  'down-payment': 'https://www.consumerfinance.gov/owning-a-home/prepare/determine-your-down-payment/',
};
const fractionalHelp: Record<Locale, string> = { ru: 'дроб', en: 'fractional', uk: 'дроб', de: 'gebrochen', es: 'fraccion' };

function numeric(text: string, locale: Locale): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
function url(id: string, locale: Locale, inputs: Values): string {
  const calculator = getCalculatorById(id, locale)!;
  for (const key of Object.keys(inputs)) if (!calculator.fields.some(field => field.name === key)) throw new Error(`${id}: unknown fixture field ${key}`);
  return `${calculator.fullPath}?${new URLSearchParams(Object.entries(inputs).map(([key, value]) => [key, String(value)]))}`;
}
async function primary(page: Page, locale: Locale, expected: number) {
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await expect.poll(async () => numeric(await page.getByTestId('calc-result-primary').innerText(), locale)).toBeCloseTo(expected, 3);
}
async function rows(page: Page, locale: Locale, expected: readonly number[]) {
  for (const [index, value] of expected.entries()) {
    await expect.poll(async () => numeric(await page.getByTestId(`calc-result-row-${index}`).locator('dd').innerText(), locale)).toBeCloseTo(value, 3);
  }
}
async function failure(page: Page) {
  await expect.poll(async () => await page.locator('[data-testid^="field-error-"]:visible').count() > 0
    || (await page.getByTestId('calc-result-primary').allTextContents()).some(value => value.trim() === '—')).toBe(true);
  if (await page.locator('[data-testid^="field-error-"]:visible').count() > 0) {
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
  }
  await expect(page.locator('main')).not.toContainText(/\b(?:NaN|Infinity|undefined)\b/);
}
async function nativeFailure(page: Page, locale: Locale) {
  // A form-domain error replaces the numeric result with localized feedback.
  // Validate that actual feedback rather than waiting for a successful result.
  const feedback = [await page.getByTestId('calc-result-wrap').innerText(),
    ...await page.locator('[data-testid^="field-error-"]:visible').allTextContents()].join('\n');
  expect(feedback).not.toMatch(/\b(?:NaN|Infinity|undefined)\b/);
  if (locale === 'en' || locale === 'de' || locale === 'es') expect(feedback).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
}
async function nativeResult(page: Page, locale: Locale) {
  const result = await page.getByTestId('calc-result').innerText();
  expect(result).not.toMatch(/\b(?:NaN|Infinity|undefined)\b/);
  if (locale === 'en' || locale === 'de' || locale === 'es') expect(result).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
}
async function installShareCapture(page: Page) {
  // Only this isolated test page's own clipboard write is intercepted.
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', {
    configurable: true, value: { writeText: async (text: string) => { (window as Window & { financeShare?: string }).financeShare = text; } },
  }));
}
async function share(page: Page): Promise<string> {
  await page.getByTestId('calc-share-btn').click();
  await expect(page.getByTestId('calc-share-warning')).toBeVisible();
  await page.getByTestId('calc-share-confirm').click();
  await expect.poll(() => page.evaluate(() => (window as Window & { financeShare?: string }).financeShare ?? '')).not.toBe('');
  return page.evaluate(() => (window as Window & { financeShare?: string }).financeShare!);
}

for (const sample of cases) for (const locale of locales) {
  test(`${locale} ${sample.id}: fixed values, authored sources, share, reload and reset`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await installShareCapture(page);
    const calculator = getCalculatorById(sample.id, locale)!;
    await page.goto(url(sample.id, locale, sample.inputs));
    await primary(page, locale, sample.expected); await rows(page, locale, sample.rows);
    for (const [key, value] of Object.entries(sample.inputs)) await expect(page.getByTestId(`field-${key}`)).toHaveValue(String(value));
    await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
    await expect(page.locator('main').locator(`a[href="${sourceUrls[sample.id]}"]`)).toBeVisible();
    await nativeResult(page, locale);
    const copied = await share(page);
    expect(new URL(copied).pathname).toBe(calculator.fullPath);
    expect(new URL(copied).hash).toBe('#calculator');
    await page.goto(copied); await primary(page, locale, sample.expected); await rows(page, locale, sample.rows);
    await page.reload(); await primary(page, locale, sample.expected);
    for (const [key, value] of Object.entries(sample.inputs)) await expect(page.getByTestId(`field-${key}`)).toHaveValue(String(value));
    await page.getByTestId('calc-reset-btn').click(); await primary(page, locale, sample.defaultExpected);
    expect(new URL(page.url()).search).toBe('');
    // Existing actual defaults are checked separately from the independent
    // default numeric result, including inactive drafts when made visible.
    for (const field of calculator.fields) {
      const input = page.getByTestId(`field-${field.name}`);
      if (await input.count()) await expect(input).toHaveValue(String(field.defaultValue));
    }
    await page.reload(); await primary(page, locale, sample.defaultExpected);
    expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: active malformed input and domain-invalid query`, async ({ page }) => {
    await page.goto(url(sample.id, locale, sample.inputs)); await primary(page, locale, sample.expected);
    await page.getByTestId(`field-${sample.active}`).fill('broken-value');
    await expect(page.getByTestId(`field-error-${sample.active}`)).toBeVisible();
    await page.getByTestId(`field-${sample.active}`).fill(String(sample.invalid)); await failure(page);
    await page.goto(url(sample.id, locale, { ...sample.inputs, [sample.active]: sample.invalid })); await failure(page);
    await page.reload(); await failure(page); await nativeFailure(page, locale);
  });
}

for (const locale of locales) {
  test(`${locale} annuity: cent-rounding tie, adjusted final payment and closed balance`, async ({ page }) => {
    await page.goto(url('annuity', locale, { amount: 200000, rate: 4, months: 240 }));
    await primary(page, locale, 1211.96); await rows(page, locale, [290870.78, 90870.78, 666.67, 545.29, 1212.34]);
    const table = page.locator('main table').first();
    await expect(table.locator('tbody tr')).toHaveCount(240);
    const last = table.locator('tbody tr').last().locator('td');
    for (const [index, value] of [240, 1212.34, 4.03, 1208.31, 0].entries()) await expect.poll(async () => numeric(await last.nth(index).innerText(), locale)).toBeCloseTo(value, 3);
    await page.reload(); await primary(page, locale, 1211.96);
  });
  test(`${locale} annuity: zero-rate thirds close with333.34 and tiny positive rate stays valid`, async ({ page }) => {
    await page.goto(url('annuity', locale, { amount: 1000, rate: 0, months: 3 }));
    await primary(page, locale, 333.33); await rows(page, locale, [1000, 0, 0, 333.33, 333.34]);
    await expect(page.locator('main table tbody tr')).toHaveCount(3);
    await expect.poll(async () => numeric(await page.locator('main table tbody tr').last().locator('td').last().innerText(), locale)).toBe(0);
    await page.goto(url('annuity', locale, { amount: 12000, rate: '0.000000000000001', months: 12 }));
    await primary(page, locale, 1000); await rows(page, locale, [12000, 0, 0, 1000, 1000]);
    await page.reload(); await primary(page, locale, 1000);
  });
  test(`${locale} APR/APY: inverse conversion, annual equality and zero interest`, async ({ page }) => {
    // ((1.12)^(1/12)-1)×1200 =11.386551521...%; independently
    // (1 +.015)^12 -1 gives19.561817146...% in the forward direction.
    await page.goto(url('apr-apy', locale, { mode: 'toApr', rate: 12, periods: 12 }));
    await primary(page, locale, 11.39); await rows(page, locale, [12, .95, 12, 1.12]);
    await page.reload(); await primary(page, locale, 11.39);
    await page.goto(url('apr-apy', locale, { mode: 'toApy', rate: 9, periods: 1 })); await primary(page, locale, 9);
    await page.goto(url('apr-apy', locale, { mode: 'toApy', rate: 0, periods: 12 })); await primary(page, locale, 0);
  });
  test(`${locale} CAGR: fractional duration is used without rounding`, async ({ page }) => {
    await page.goto(url('cagr', locale, { begin: 100, end: 110, years: .5 }));
    await primary(page, locale, 21); await rows(page, locale, [10, 1.1]);
    await expect(page.locator('#f-years-help')).toContainText(new RegExp(fractionalHelp[locale], 'i'));
    await page.reload(); await primary(page, locale, 21);
  });
  test(`${locale} savings goal: month-end contributions, minimum whole month and inactive years`, async ({ page }) => {
    await installShareCapture(page);
    await page.goto(url('savings-goal', locale, { mode: 'term', goal: 121, initial: 100, rate: 12, monthly: 10, years: 'broken-value' }));
    // Month1 is100×1.01+10 =111; month2 is111×1.01+10 =122.11.
    await primary(page, locale, 2); await rows(page, locale, [.1667, 122.11, 20, 2.11, 121]);
    await expect(page.getByTestId('field-years')).toHaveCount(0);
    await expect(page.getByTestId('field-monthly')).toBeVisible();
    const copied = await share(page); expect(new URL(copied).searchParams.has('years')).toBe(false);
    await page.goto(copied); await primary(page, locale, 2); await page.reload(); await primary(page, locale, 2);
  });
  test(`${locale} savings goal: fractional years, unrounded contributions and inactive monthly draft`, async ({ page }) => {
    await installShareCapture(page);
    await page.goto(url('savings-goal', locale, { mode: 'payment', goal: 12000, initial: 0, rate: 0, years: 1.5, monthly: 'broken-value' }));
    await primary(page, locale, 666.67); await rows(page, locale, [18, 12000, 0, 12000, 12000]);
    await expect(page.getByTestId('field-monthly')).toHaveCount(0);
    await expect(page.locator('#f-years-help')).toContainText(new RegExp(fractionalHelp[locale], 'i'));
    const copied = await share(page); expect(new URL(copied).searchParams.has('monthly')).toBe(false);
    await page.goto(copied); await primary(page, locale, 666.67); await page.reload(); await primary(page, locale, 666.67);
  });
  test(`${locale} savings goal: finite10000-month horizon is not declared unreachable`, async ({ page }) => {
    await page.goto(url('savings-goal', locale, { mode: 'term', goal: 10000, initial: 0, rate: 0, monthly: 1 }));
    await primary(page, locale, 10000); await rows(page, locale, [833.3333, 10000, 10000, 0, 10000]);
    await page.reload(); await primary(page, locale, 10000);
  });
  test(`${locale} lease: residual equals financing, total excludes the optional buyout`, async ({ page }) => {
    await page.goto(url('lease-payment', locale, { price: 1000, down: 0, residualPct: 100, months: 12, rate: 12 }));
    // F=R=1000: depreciation0, finance(1000+1000)×12/2400 =10.
    // Twelve rental payments total120; the separate1000 buyout is not paid here.
    await primary(page, locale, 10); await rows(page, locale, [0, 10, 1000, 120]);
    await expect(page.locator('main').locator(`a[href="${sourceUrls['lease-payment']}"]`)).toBeVisible();
    await page.reload(); await primary(page, locale, 10);
    await page.goto(url('lease-payment', locale, { price: 1000, down: 700, residualPct: 50, months: 12, rate: 12 })); await failure(page);
  });
  test(`${locale} early repayment: fractional18-month schedule and zero-rate extra payment`, async ({ page }) => {
    await page.goto(url('early-repayment', locale, { amount: 1800, rate: 0, years: 1.5, extra: 0 }));
    await primary(page, locale, 0); await rows(page, locale, [100, 18, 18, 1800]);
    await expect(page.locator('#f-years-help')).toContainText(new RegExp(fractionalHelp[locale], 'i'));
    await page.reload(); await primary(page, locale, 0);
    await page.goto(url('early-repayment', locale, { amount: 1200, rate: 0, years: 1, extra: 100 }));
    await primary(page, locale, 0); await rows(page, locale, [100, 6, 12, 1200]);
  });
  test(`${locale} refinancing: lower payment can cost more; separate fee is counted once`, async ({ page }) => {
    await page.goto(url('refinancing', locale, { balance: 1200, oldRate: 0, oldMonths: 12, newRate: 0, newMonths: 24, fee: 100 }));
    await primary(page, locale, -100); await rows(page, locale, [100, 50, 1200, 1300]);
    await page.reload(); await primary(page, locale, -100);
    await page.goto(url('refinancing', locale, { balance: 1200, oldRate: 0, oldMonths: 12, newRate: 0, newMonths: 12, fee: 0 }));
    await primary(page, locale, 0); await rows(page, locale, [100, 100, 1200, 1200]);
  });
  test(`${locale} down payment: known amount mode ignores and omits inactive percentage`, async ({ page }) => {
    await installShareCapture(page);
    await page.goto(url('down-payment', locale, { mode: 'amount', price: 5000000, downPayment: 1500000, percent: 'broken-value' }));
    await primary(page, locale, 1500000); await rows(page, locale, [3500000, 30]);
    await expect(page.getByTestId('field-percent')).toHaveCount(0); await expect(page.getByTestId('field-downPayment')).toBeVisible();
    const copied = await share(page); expect(new URL(copied).searchParams.has('percent')).toBe(false);
    await page.goto(copied); await primary(page, locale, 1500000); await page.reload(); await primary(page, locale, 1500000);
    await expect(page.locator('main').locator(`a[href="${sourceUrls['down-payment']}"]`)).toBeVisible();
  });
  test(`${locale} down payment: zero and full purchase price remain valid`, async ({ page }) => {
    await page.goto(url('down-payment', locale, { mode: 'percent', price: 5000000, percent: 0, downPayment: 'broken-value' }));
    await primary(page, locale, 0); await rows(page, locale, [5000000, 0]); await expect(page.getByTestId('field-downPayment')).toHaveCount(0);
    await page.goto(url('down-payment', locale, { mode: 'percent', price: 5000000, percent: 100 }));
    await primary(page, locale, 5000000); await rows(page, locale, [0, 100]); await page.reload(); await primary(page, locale, 5000000);
  });
  for (const [id, field, inputs] of [
    ['annuity', 'months', { amount: 1000, rate: 0, months: 3 }],
    ['apr-apy', 'periods', { mode: 'toApy', rate: 9, periods: 1 }],
    ['lease-payment', 'months', { price: 1000, down: 0, residualPct: 0, months: 12, rate: 0 }],
    ['refinancing', 'oldMonths', { balance: 1200, oldRate: 0, oldMonths: 12, newRate: 0, newMonths: 12, fee: 0 }],
    ['refinancing', 'newMonths', { balance: 1200, oldRate: 0, oldMonths: 12, newRate: 0, newMonths: 12, fee: 0 }],
  ] as const) test(`${locale} ${id} ${field}: exact decimal and scientific fractional counts stay invalid`, async ({ page }) => {
    await installShareCapture(page);
    await page.goto(url(id, locale, inputs));
    const raw = locale === 'en' ? '3.00000000000000001' : '3,00000000000000001';
    await page.getByTestId(`field-${field}`).fill(raw); await expect(page.getByTestId(`field-error-${field}`)).toBeVisible();
    const copied = await share(page);
    expect(new URL(copied).searchParams.get(field)).toBe(raw);
    await page.goto(copied); await expect(page.getByTestId(`field-error-${field}`)).toBeVisible();
    await page.reload(); await expect(page.getByTestId(`field-error-${field}`)).toBeVisible();
    await page.goto(url(id, locale, { ...inputs, [field]: '1.00000000000000001e1' }));
    await expect(page.getByTestId(`field-error-${field}`)).toBeVisible();
    const scientificCopy = await share(page);
    expect(new URL(scientificCopy).searchParams.get(field)).toBe('1.00000000000000001e1');
    await page.goto(scientificCopy); await failure(page); await page.reload(); await failure(page);
  });
}
