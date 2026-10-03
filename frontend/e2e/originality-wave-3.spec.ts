import { expect, test } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// Explicit teaching cases checked by independent arithmetic and, for the
// calendar and fitness models, the subject-wave research evidence.
const scenarios = [
  { id: 'ad-roi', input: { revenue: 200000, spend: 50000 }, expected: 300 },
  { id: 'aov', input: { revenue: 250000, orders: 200 }, expected: 1250 },
  { id: 'difference-abs-rel', input: { from: 150, to: 120 }, expected: -30 },
  { id: 'dividend-yield', input: { dividend: 12, price: 200, shares: 2.5 }, expected: 6 },
  { id: 'logarithm', input: { mode: 'custom', value: 1024, base: 2 }, expected: 10 },
  { id: 'return-rate', input: { returns: 45, orders: 900 }, expected: 5 },
  { id: 'revenue-per-employee', input: { revenue: 12000000, employees: 20 }, expected: 600000 },
  { id: 'roi', input: { received: 130000, invested: 100000, extra: 5000 }, expected: 23.81 },
  { id: 'shipping-per-unit', input: { shipping: 5000, units: 100, packaging: 1000 }, expected: 60 },
  { id: 'bmi-calculator', input: { height: 175, weight: 70 }, expected: 22.9 },
  // (10×80 + 6.25×180 −5×30 +5)×1.55×.8 = 2207.2, whole kcal display.
  { id: 'calorie-calculator', input: { gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'lose', goalAdjustment: 20, proteinPct: 35, fatPct: 25 }, expected: 2207 },
  { id: 'body-fat-calculator', input: { sex: 'male', height: 180, neck: 38, waist: 90 }, expected: 19.9 },
  { id: 'running-pace-calculator', input: { distance: 5, unit: 'km', hours: 0, minutes: 25, seconds: 0 }, text: '5:00' },
  { id: 'one-rep-max-calculator', input: { weight: 100, reps: 5 }, expected: 116.7 },
  { id: 'barbell-plates', input: { target: 32, bar: 20, plates: '4 3' }, text: '3' },
  { id: 'bike-gear-ratio', input: { chainring: 50, sprocket: 25, wheelCircumference: 2.1 }, expected: 2 },
  { id: 'bike-wheel-size', input: { mode: 'etrto', etrtoRim: 622, etrtoTire: 25 }, expected: 2111.15 },
  { id: 'dilution', input: { solve: 'v2', c1: 10, c2: 2, v1: 100 }, expected: 500 },
  { id: 'convert-cooking-weight', input: { direction: 'toGrams', product: 'flour', value: 2, unit: 'cup' }, expected: 254.4 },
  { id: 'convert-fuel-economy', input: { fromUnit: 'l100km', toUnit: 'kml', value: 10 }, expected: 10 },
  { id: 'molar-mass', input: { formula: 'NaCl' }, expected: 58.44 },
] as const;

function displayedNumber(text: string, locale: string): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}

for (const scenario of scenarios) for (const locale of locales) {
  test(`${locale} ${scenario.id}: independent scenario with actual authored content`, async ({ page }) => {
    const calculator = getCalculatorById(scenario.id, locale)!;
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const query = new URLSearchParams(Object.entries(scenario.input).map(([key, value]) => [key, String(value)]));
    await page.goto(`${calculator.fullPath}?${query}`);
    const primary = page.getByTestId('calc-result-primary');
    await expect(primary).toBeVisible();
    if ('expected' in scenario) await expect.poll(async () => displayedNumber(await primary.innerText(), locale)).toBeCloseTo(scenario.expected, 3);
    else await expect(primary).toContainText(scenario.text);
    if (scenario.id === 'barbell-plates') {
      const values = await page.getByTestId('calc-result').locator('dd').allTextContents();
      expect(values.map((value) => displayedNumber(value, locale))).toContain(32);
    }
    if (scenario.id === 'running-pace-calculator') await expect(page.getByTestId('calc-result')).toContainText('52:07');
    await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
    expect(errors).toEqual([]);
  });
}
