import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// Independent fixed expectations, derived before the engine changes:
// 36,000/1,450 →24.83; 1,250/84,000×100 →1.49%; 30,000/120,000×1,000 =250.
// ROAS4× with40%margin leaves72,000 and gives60%ad-spend return.
// Monthly churn12% gives100/12 paid months; 800×(100/12)×.7 →4,666.67.
// 420×1,490 =625,800; 500,000/12,500 =40; 450/9,000×100 =5%.
// Browser expectations never call an engine to generate their numeric oracle.
type Locale = (typeof locales)[number];
type Values = Record<string, string | number>;
const cases = [
  { id: 'cpc', inputs: { cost: 36000, clicks: 1450, impressions: 92000 }, expected: 24.83, active: 'clicks', invalid: 1.5 },
  { id: 'cpm', inputs: { mode: 'cpm', cost: 30000, impressions: 120000 }, expected: 250, active: 'impressions', invalid: 0 },
  { id: 'ctr', inputs: { clicks: 1250, impressions: 84000, cost: 25000 }, expected: 1.49, active: 'cost', invalid: -1 },
  { id: 'roas', inputs: { revenue: 480000, cost: 120000, margin: 40 }, expected: 4, active: 'margin', invalid: 101 },
  { id: 'ltv', inputs: { mode: 'churn', arpu: 800, churn: 12, margin: 70, cac: 2800 }, expected: 4666.67, active: 'churn', invalid: 0 },
  { id: 'mrr-arr', inputs: { subscribers: 420, arpuMonth: 1490, growthPct: 4 }, expected: 625800, active: 'subscribers', invalid: 1.5 },
  { id: 'arpu-arppu', inputs: { revenue: 500000, users: 12500, payingUsers: 900 }, expected: 40, active: 'users', invalid: 100.5 },
  { id: 'engagement-rate', inputs: { engagements: 450, base: 'reach', reach: 9000 }, expected: 5, active: 'engagements', invalid: 1.5 },
] as const;

const roasLabels = {
  ru: ['Остаток после учтённых затрат и рекламы', 'Доходность рекламного расхода', 'Точка окупаемости по доходу', 'ROAS для покрытия рекламы'],
  en: ['Remainder after included costs and ads', 'Return on ad spend after included costs', 'Break-even revenue', 'ROAS needed to cover advertising'],
  uk: ['Залишок після врахованих витрат і реклами', 'Дохідність рекламних витрат', 'Точка окупності за доходом', 'ROAS для покриття реклами'],
  de: ['Rest nach berücksichtigten Kosten und Werbung', 'Rendite der Werbeausgaben', 'Umsatz am Break-even', 'ROAS zur Deckung der Werbung'],
  es: ['Resto tras costes incluidos y publicidad', 'Rentabilidad del gasto publicitario', 'Ingresos de equilibrio', 'ROAS necesario para cubrir publicidad'],
} as const;
const cacCoverageLabels = {
  ru: 'Простой срок покрытия CAC', en: 'Simple CAC coverage time', uk: 'Простий строк покриття CAC',
  de: 'Einfache CAC-Deckungszeit', es: 'Tiempo simple de cobertura del CAC',
} as const;
const sources = {
  cpc: 'https://support.google.com/google-ads/answer/14074/average-cost-per-click-avg-cpc-definition?hl=en-GB',
  cpm: 'https://support.google.com/google-ads/answer/6310?hl=en-au',
  ctr: 'https://support.google.com/google-ads/answer/2615875?hl=en',
  roas: 'https://support.google.com/google-ads/answer/14090?hl=en',
  ltv: 'https://stripe.com/guides/atlas/business-of-saas',
  'mrr-arr': 'https://stripe.com/resources/more/what-is-monthly-recurring-revenue',
  'arpu-arppu': 'https://support.google.com/analytics/table/13948007?hl=en-GB',
  'engagement-rate': 'https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/share-statistics?view=li-lms-2026-08',
} as const;

function number(text: string, locale: Locale): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
function url(id: string, locale: Locale, inputs: Values): string {
  const calc = getCalculatorById(id, locale)!;
  for (const key of Object.keys(inputs)) if (!calc.fields.some(field => field.name === key)) throw new Error(`${id}: unknown fixture field ${key}`);
  return `${calc.fullPath}?${new URLSearchParams(Object.entries(inputs).map(([key, value]) => [key, String(value)]))}`;
}
async function primary(page: Page, locale: Locale, expected: number) {
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await expect.poll(async () => number(await page.getByTestId('calc-result-primary').innerText(), locale)).toBeCloseTo(expected, 3);
}
async function secondary(page: Page, locale: Locale, label: string, expected: number) {
  const rows = page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]');
  const row = rows.filter({ has: page.locator('dt').filter({ hasText: label }) });
  await expect(row).toHaveCount(1);
  await expect.poll(async () => number(await row.locator('dd').innerText(), locale)).toBeCloseTo(expected, 3);
}
async function visibleFailure(page: Page) {
  await expect.poll(async () => {
    if (await page.locator('[data-testid^="field-error-"]:visible').count()) return true;
    return (await page.getByTestId('calc-result-primary').allTextContents()).some(text => text.trim() === '—');
  }).toBe(true);
  await expect(page.locator('main')).not.toContainText(/\b(?:NaN|Infinity|undefined)\b/);
}

for (const sample of cases) for (const locale of locales) {
  test(`${locale} ${sample.id}: independent values, query restoration, authored body and reload`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const calc = getCalculatorById(sample.id, locale)!;
    await page.goto(url(sample.id, locale, sample.inputs));
    await primary(page, locale, sample.expected);
    for (const [key, value] of Object.entries(sample.inputs)) await expect(page.getByTestId(`field-${key}`)).toHaveValue(String(value));
    if (sample.id === 'roas') for (const [i, expected] of [72000, 60, 300000, 2.5].entries()) await secondary(page, locale, roasLabels[locale][i], expected);
    if (sample.id === 'ltv') await secondary(page, locale, cacCoverageLabels[locale], 5);
    if (sample.id === 'mrr-arr') await secondary(page, locale, 'ARR', 7509600);
    if (sample.id === 'arpu-arppu') await secondary(page, locale, 'ARPPU', 555.56);
    await expect(page.locator('main')).toContainText(calc.seoContent!.howItWorks);
    await expect(page.locator('main')).toContainText(calc.seoContent!.example);
    await expect(page.locator('main').locator(`a[href="${sources[sample.id]}"]`)).toBeVisible();
    await expect(page.getByTestId('calc-result')).not.toContainText(/\b(?:NaN|Infinity|undefined)\b/);
    await page.reload();
    await primary(page, locale, sample.expected);
    for (const [key, value] of Object.entries(sample.inputs)) await expect(page.getByTestId(`field-${key}`)).toHaveValue(String(value));
    expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: active malformed input and domain error remain visible`, async ({ page }) => {
    await page.goto(url(sample.id, locale, sample.inputs));
    await primary(page, locale, sample.expected);
    await page.getByTestId(`field-${sample.active}`).fill('broken-value');
    await expect(page.getByTestId(`field-error-${sample.active}`)).toBeVisible();
    await page.getByTestId(`field-${sample.active}`).fill(String(sample.invalid));
    await visibleFailure(page);
    // Reloading a domain-invalid query must not silently return a valid default.
    await page.goto(url(sample.id, locale, { ...sample.inputs, [sample.active]: sample.invalid }));
    await visibleFailure(page);
    await page.reload();
    await visibleFailure(page);
  });
}

for (const locale of locales) {
  for (const [mode, expected, visible, inactive] of [
    ['cpm', 250, ['mode', 'cost', 'impressions'], 'cpm'],
    ['cost', 30000, ['mode', 'impressions', 'cpm'], 'cost'],
    ['impressions', 120000, ['mode', 'cost', 'cpm'], 'impressions'],
  ] as const) test(`${locale} CPM ${mode}: active pair visible, inactive malformed field ignored`, async ({ page }) => {
    const values = { mode, cost: 30000, cpm: 250, impressions: 120000, [inactive]: 'broken-value' };
    await page.goto(url('cpm', locale, values));
    await primary(page, locale, expected);
    const calc = getCalculatorById('cpm', locale)!;
    const activeNames = new Set<string>(visible);
    for (const field of calc.fields) {
      if (activeNames.has(field.name)) await expect(page.getByTestId(`field-${field.name}`)).toBeVisible();
      else await expect(page.getByTestId(`field-${field.name}`)).toHaveCount(0);
    }
    await expect(page.locator('[data-testid^="field-error-"]:visible')).toHaveCount(0);
    await page.reload();
    await primary(page, locale, expected);
  });
  test(`${locale} LTV: fractional mean months, monthly help and inactive churn`, async ({ page }) => {
    await page.goto(url('ltv', locale, { mode: 'months', arpu: 1200, months: 8.5, margin: 100, cac: 0, churn: 'broken-value' }));
    await primary(page, locale, 10200);
    await expect(page.getByTestId('field-months')).toHaveValue('8.5');
    await expect(page.getByTestId('field-churn')).toHaveCount(0);
    await expect(page.locator('#f-months-help')).toContainText({ ru: 'дробь', en: 'fraction', uk: 'дробове', de: 'Bruchteile', es: 'fracciones' }[locale]);
    await expect(page.getByTestId('calc-result').locator('dt').filter({ hasText: cacCoverageLabels[locale] })).toHaveCount(0);
    await page.reload(); await primary(page, locale, 10200);
  });
  test(`${locale} MRR: fractional monthly price has native money help and annualized ARR`, async ({ page }) => {
    await page.goto(url('mrr-arr', locale, { subscribers: 2, arpuMonth: 1.25, growthPct: 0 }));
    await primary(page, locale, 2.5); await secondary(page, locale, 'ARR', 30);
    await expect(page.getByTestId('field-arpuMonth')).toHaveValue('1.25');
    await expect(page.locator('#f-arpuMonth-help')).toContainText({ ru: 'денежная дробь', en: 'fractional monetary', uk: 'грошові дробові', de: 'Dezimalstellen', es: 'monetarios decimales' }[locale]);
    await page.reload(); await primary(page, locale, 2.5);
  });
  test(`${locale} ER: repeated actions permit150percent and inactive followers are ignored`, async ({ page }) => {
    await page.goto(url('engagement-rate', locale, { engagements: 150, base: 'reach', reach: 100, followers: 'broken-value' }));
    await primary(page, locale, 150);
    await expect(page.getByTestId('field-followers')).toHaveCount(0);
    await expect(page.locator('[data-testid^="field-error-"]:visible')).toHaveCount(0);
    await page.reload(); await primary(page, locale, 150);
    // The other valid base must also ignore its inactive denominator.
    await page.goto(url('engagement-rate', locale, { engagements: 450, base: 'followers', followers: 4000, reach: 'broken-value' }));
    await primary(page, locale, 11.25);
    await expect(page.getByTestId('field-reach')).toHaveCount(0);
  });
  test(`${locale} ARPU: zero payers omit ARPPU and persist across reload`, async ({ page }) => {
    await page.goto(url('arpu-arppu', locale, { revenue: 500, users: 100, payingUsers: 0 }));
    await primary(page, locale, 5);
    await expect(page.getByTestId('calc-result').locator('dt').filter({ hasText: 'ARPPU' })).toHaveCount(0);
    await expect(page.getByTestId('field-payingUsers')).toHaveValue('0');
    await page.reload(); await primary(page, locale, 5);
    await expect(page.getByTestId('calc-result').locator('dt').filter({ hasText: 'ARPPU' })).toHaveCount(0);
  });
  test(`${locale} ROAS: zero margin has negative contribution and no finite covering revenue`, async ({ page }) => {
    await page.goto(url('roas', locale, { revenue: 480000, cost: 120000, margin: 0 }));
    await primary(page, locale, 4); await secondary(page, locale, roasLabels[locale][0], -120000); await secondary(page, locale, roasLabels[locale][1], -100);
    const rows = page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]');
    await expect(rows.filter({ has: page.locator('dt').filter({ hasText: roasLabels[locale][2] }) }).locator('dd')).toHaveText('—');
    await page.reload(); await primary(page, locale, 4);
  });
  test(`${locale} CPC: unknown impressions omit derived CPM and CTR`, async ({ page }) => {
    await page.goto(url('cpc', locale, { cost: 5200, clicks: 260, impressions: 0 }));
    await primary(page, locale, 20);
    await expect(page.getByTestId('calc-result').locator('dt')).toHaveCount(2);
    await expect(page.getByTestId('calc-result').locator('dt').filter({ hasText: 'CPM' })).toHaveCount(0);
    await page.reload(); await primary(page, locale, 20);
  });
  test(`${locale} CTR: zero clicks retain0percent and omit finite cost per click`, async ({ page }) => {
    await page.goto(url('ctr', locale, { clicks: 0, impressions: 5000, cost: 100 }));
    await primary(page, locale, 0);
    await expect(page.getByTestId('calc-result-row-2').locator('dd')).toHaveText('—');
    await page.reload(); await primary(page, locale, 0);
  });
}
