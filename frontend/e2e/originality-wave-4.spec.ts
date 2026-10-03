import { expect, test } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// These expectations use explicit arithmetic, not calls to the production runner.
// 24,000 = 100,000 × 8% × 3; 262.5 = 84,000/320;
// 2024-12-31 belongs to ISO week1 of2025; 1mSv = 1,000μSv.
const cases = [
  { id: 'simple-interest', input: { mode: 'interest', principal: 100000, rate: 8, years: 3 }, expected: 24000, invalid: { years: 0 } },
  { id: 'contribution-margin', input: { price: 500, variable: 300, volume: 1000 }, expected: 200, invalid: { price: 0 } },
  { id: 'cac', input: { spend: 100000, customers: 50, ltv: 9000 }, expected: 2000, invalid: { customers: 0 } },
  { id: 'payback-period', input: { investment: 5000000, cashflow: 1200000, rate: 10 }, expected: 4.167, invalid: { cashflow: 0 } },
  { id: 'cpa-cpl-cpi', input: { mode: 'cpi', cost: 84000, actions: 320 }, expected: 262.5, invalid: { actions: 0 } },
  { id: 'conversion-rate', input: { visitors: 8000, conversions: 240, cost: 60000 }, expected: 3, invalid: { visitors: 0 } },
  { id: 'week-number', input: { date: '2024-12-31' }, expected: 1, invalid: { date: '2024-02-30' } },
  { id: 'solution-concentration', input: { mode: 'ww', solute: 25, solution: 500 }, expected: 5, invalid: { solution: 0 } },
  { id: 'molarity', input: { mode: 'moles', moles: 0.5, volumeUnit: 'l', volume: 2 }, expected: 0.25, invalid: { volume: 0 } },
  { id: 'moles', input: { mode: 'mass', mass: 44.009, molarMass: 44.009 }, expected: 1, invalid: { molarMass: 0 } },
  { id: 'ph-poh', input: { mode: 'fromH', h: 0.001 }, expected: 3, invalid: { h: 0 } },
  { id: 'convert-radiation', input: { from: 'mSv', to: 'uSv', value: 1 }, expected: 1000, invalid: { value: -1 } },
] as const;

function numeric(text: string, locale: string) {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const value = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? value.replaceAll(',', '') : value.replaceAll('.', '').replace(',', '.'));
}

for (const sample of cases) for (const locale of locales) {
  const calculator = getCalculatorById(sample.id, locale)!;
  // A misspelled query key would silently leave a default in place.
  for (const key of Object.keys(sample.input)) {
    if (!calculator.fields.some((field) => field.name === key)) throw new Error(`${sample.id}: unknown fixture field${key}`);
  }
  test(`${locale} ${sample.id}: independent arithmetic and authored method survive reload`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const query = new URLSearchParams(Object.entries(sample.input).map(([key, value]) => [key, String(value)]));
    await page.goto(`${calculator.fullPath}?${query}`);
    const primary = page.getByTestId('calc-result-primary');
    await expect(primary).toBeVisible();
    await expect.poll(async () => numeric(await primary.innerText(), locale)).toBeCloseTo(sample.expected, 3);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
    await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
    await page.reload();
    await expect.poll(async () => numeric(await primary.innerText(), locale)).toBeCloseTo(sample.expected, 3);
    expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: invalid denominator or domain has a visible error`, async ({ page }) => {
    const query = new URLSearchParams(Object.entries({ ...sample.input, ...sample.invalid }).map(([key, value]) => [key, String(value)]));
    await page.goto(`${calculator.fullPath}?${query}`);
    await expect.poll(async () => {
      const inline = page.locator('[data-testid^="field-error-"]:visible');
      if (await inline.count() > 0) return true;
      // An inline validation error removes the result. Reading its absent
      // locator must not consume the whole polling deadline before hydration.
      return (await page.getByTestId('calc-result-primary').allTextContents()).some((text) => text.trim() === '—');
    }).toBe(true);
    await expect(page.locator('main')).not.toContainText(/NaN|Infinity|undefined/);
  });
}

for (const [locale, abdomen, difference] of [
  ['ru', 'Обхват живота', 'Живот минус шея'],
  ['en', 'Abdomen circumference', 'Abdomen minus neck'],
  ['uk', 'Обхват живота', 'Живіт мінус шия'],
  ['de', 'Bauchumfang', 'Bauch minus Hals'],
  ['es', 'Perímetro abdominal', 'Abdomen menos cuello'],
] as const) {
  test(`${locale}: male measurement result follows the navel abdomen equation`, async ({ page }) => {
    const calculator = getCalculatorById('body-fat-calculator', locale)!;
    await page.goto(`${calculator.fullPath}?sex=male&height=180&neck=38&waist=90`);
    await expect.poll(async () => numeric(await page.getByTestId('calc-result-primary').innerText(), locale)).toBe(19.9);
    await expect(page.getByTestId('calc-result').locator('dt')).toContainText([abdomen, difference]);
  });
  for (const [target, expected] of [['kml', 10], ['mpgus', 23.521], ['mpguk', 28.248]] as const) {
    test(`${locale}: fuel primary identifies target${target}`, async ({ page }) => {
      const calculator = getCalculatorById('convert-fuel-economy', locale)!;
      await page.goto(`${calculator.fullPath}?fromUnit=l100km&toUnit=${target}&value=10`);
      await expect.poll(async () => numeric(await page.getByTestId('calc-result-primary').innerText(), locale)).toBeCloseTo(expected, 3);
      const label = page.getByTestId('calc-result').locator('[data-testid="calc-result-primary"]').locator('..').locator('div').first();
      // The same target label is also present in the secondary unit rows.
      const labelText = (await label.textContent())?.trim();
      expect(labelText).toBeTruthy();
      expect(labelText).toMatch(target === 'kml' ? /km\/l|км\/л/i : /mpg/i);
    });
  }
}

for (const width of [390, 1365]) for (const sample of [
  { locale: 'es' as const, id: 'body-fat-calculator', query: 'sex=female&height=165&neck=32&waist=72&hip=96' },
  { locale: 'de' as const, id: 'molar-mass', query: 'formula=%28OH%290' },
]) {
  test(`${sample.locale} ${sample.id}: caption remains readable at${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const calculator = getCalculatorById(sample.id, sample.locale)!;
    await page.goto(`${calculator.fullPath}?${sample.query}`);
    const row = page.getByTestId('calc-result-row-0');
    await expect(row.locator('dd')).not.toBeEmpty();
    const layout = await row.evaluate((element) => {
      const dt = element.querySelector('dt')!;
      const dd = element.querySelector('dd')!;
      const a = dt.getBoundingClientRect();
      const b = dd.getBoundingClientRect();
      return { labelWidth: a.width, valueWidth: b.width, labelRight: a.right, valueLeft: b.left, labelBottom: a.bottom, valueTop: b.top,
        overflow: [element, dt, dd].some((node) => node.scrollWidth > node.clientWidth + 1),
        pageOverflow: document.documentElement.scrollWidth > window.innerWidth };
    });
    expect(layout.labelWidth).toBeGreaterThanOrEqual(width === 390 ? 240 : 140);
    expect(layout.valueWidth).toBeGreaterThanOrEqual(width === 390 ? 240 : 160);
    expect(layout.overflow).toBe(false);
    expect(layout.pageOverflow).toBe(false);
    if (width === 390) expect(layout.valueTop).toBeGreaterThanOrEqual(layout.labelBottom - 1);
    else expect(layout.labelRight).toBeLessThanOrEqual(layout.valueLeft + 1);
  });
}
