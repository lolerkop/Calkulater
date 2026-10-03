import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

type Locale = typeof locales[number];
type Values = Record<string, string | number>;
const cases: { id: string; values: Values; key: string; expected: number }[] = [
  { id: 'cpc', values: { cost: 10, clicks: 1, impressions: 10 }, key: 'clicks', expected: 10 },
  { id: 'cpc', values: { cost: 10, clicks: 1, impressions: 10 }, key: 'impressions', expected: 10 },
  { id: 'cpm', values: { mode: 'cpm', cost: 10, impressions: 10 }, key: 'impressions', expected: 1000 },
  { id: 'cpm', values: { mode: 'cost', cpm: 100, impressions: 10 }, key: 'impressions', expected: 1 },
  { id: 'ctr', values: { clicks: 1, impressions: 10, cost: 2 }, key: 'clicks', expected: 10 },
  { id: 'ctr', values: { clicks: 1, impressions: 10, cost: 2 }, key: 'impressions', expected: 10 },
  { id: 'mrr-arr', values: { subscribers: 2, arpuMonth: 1.25, growthPct: 4 }, key: 'subscribers', expected: 2.5 },
  { id: 'arpu-arppu', values: { revenue: 10, users: 2, payingUsers: 1 }, key: 'users', expected: 5 },
  { id: 'arpu-arppu', values: { revenue: 10, users: 2, payingUsers: 1 }, key: 'payingUsers', expected: 5 },
  { id: 'engagement-rate', values: { engagements: 3, base: 'reach', reach: 2 }, key: 'engagements', expected: 150 },
  { id: 'engagement-rate', values: { engagements: 3, base: 'reach', reach: 2 }, key: 'reach', expected: 150 },
  { id: 'engagement-rate', values: { engagements: 3, base: 'followers', followers: 2 }, key: 'engagements', expected: 150 },
  { id: 'engagement-rate', values: { engagements: 3, base: 'followers', followers: 2 }, key: 'followers', expected: 150 },
];
const native = {
  ru: 'Количество должно быть целым в допустимом диапазоне',
  en: 'The count must be a whole number within the supported range',
  uk: 'Кількість має бути цілою в допустимому діапазоні',
  de: 'Die Anzahl muss eine ganze Zahl im zulässigen Bereich sein',
  es: 'El recuento debe ser entero dentro del rango admitido',
};
function url(id: string, locale: Locale, values: Values) {
  return `${getCalculatorById(id, locale)!.fullPath}?${new URLSearchParams(Object.entries(values).map(([key, value]) => [key, String(value)]))}`;
}
function number(text: string, locale: Locale) {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
async function primary(page: Page, locale: Locale, expected: number) {
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await expect.poll(async () => number(await page.getByTestId('calc-result-primary').innerText(), locale)).toBeCloseTo(expected, 3);
}
async function failure(page: Page, key: string, locale: Locale, exactCount: boolean) {
  await expect(page.getByTestId(`field-error-${key}`)).toBeVisible();
  if (exactCount) await expect(page.getByTestId(`field-error-${key}`)).toContainText(native[locale]);
  if (['en', 'de', 'es'].includes(locale)) await expect(page.getByTestId(`field-error-${key}`)).not.toContainText(/[А-Яа-яЁё]/);
  await expect(page.locator('main')).not.toContainText(/\b(?:NaN|Infinity|undefined)\b/);
}

// Decimal fractions are mathematical input data, even when binary Number
// rounds them onto an integer. Fixed valid expectations are ordinary ratios,
// with fractional money and150% engagement retained as separate real domains.
for (const [index, sample] of cases.entries()) for (const locale of locales) {
  test(`${locale}/${index}/${sample.id}/${sample.key}: exact whole count before form normalization and query reload`, async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    const point = locale === 'en' ? '.' : ',';
    const raw = `${sample.values[sample.key]}${point}00000000000000001`;
    await page.goto(url(sample.id, locale, sample.values));
    await primary(page, locale, sample.expected);
    await page.getByTestId(`field-${sample.key}`).fill(raw);
    await failure(page, sample.key, locale, true);
    await page.getByTestId(`field-${sample.key}`).fill(`${sample.values[sample.key]}${point}00000000000000000`);
    await primary(page, locale, sample.expected);
    await page.goto(url(sample.id, locale, { ...sample.values, [sample.key]: raw }));
    await expect(page.getByTestId(`field-${sample.key}`)).toHaveValue(raw);
    await failure(page, sample.key, locale, true);
    await page.reload();
    await expect(page.getByTestId(`field-${sample.key}`)).toHaveValue(raw);
    await failure(page, sample.key, locale, true);
    const scientific = '1.00000000000000001e0';
    await page.goto(url(sample.id, locale, { ...sample.values, [sample.key]: scientific }));
    await expect(page.getByTestId(`field-${sample.key}`)).toHaveValue(scientific);
    await failure(page, sample.key, locale, false);
    await page.reload();
    await expect(page.getByTestId(`field-${sample.key}`)).toHaveValue(scientific);
    await failure(page, sample.key, locale, false);
    expect(pageErrors).toEqual([]);
  });
}
for (const locale of locales) {
  test(`${locale}: optional blank CPC counts and fractional spend remain valid`, async ({ page }) => {
    await page.goto(url('cpc', locale, { cost: 10.5, clicks: 2, impressions: 0 }));
    await primary(page, locale, 5.25);
    await page.getByTestId('field-impressions').fill('');
    await primary(page, locale, 5.25);
    await expect(page.getByTestId('field-error-impressions')).toHaveCount(0);
  });
  test(`${locale}: inverse CPM ignores malformed inactive known count`, async ({ page }) => {
    await page.goto(url('cpm', locale, { mode: 'impressions', cost: 1.5, cpm: 1000, impressions: '1.00000000000000001' }));
    await expect(page.getByTestId('field-impressions')).toHaveCount(0);
    await primary(page, locale, 2);
    await page.reload();
    await primary(page, locale, 2);
  });
  for (const base of ['reach', 'followers']) test(`${locale}: ${base} engagement ignores malformed inactive base`, async ({ page }) => {
    const values = { engagements: 3, base, reach: base === 'reach' ? 2 : '1.00000000000000001', followers: base === 'followers' ? 2 : '1.00000000000000001' };
    await page.goto(url('engagement-rate', locale, values));
    await expect(page.getByTestId(base === 'reach' ? 'field-followers' : 'field-reach')).toHaveCount(0);
    await primary(page, locale, 150);
    await page.reload();
    await primary(page, locale, 150);
  });
}
