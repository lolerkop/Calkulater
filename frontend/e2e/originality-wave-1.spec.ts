import { expect, test } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// Expected values are analytical cases also explained in the visible copy.
// No runner is used to calculate these browser expectations.
const scenarios = [
  { id: 'credit-calculator', query: { amount: 120000, rate: 0, term: 12, termUnit: 'months', type: 'annuity', oneTimeFee: 2500, extraPayment: 0 }, expected: 10000 },
  { id: 'mortgage-calculator', query: { price: 150000, downPaymentMode: 'amount', downPayment: 30000, years: 1, rate: 0, type: 'annuity', extraPayment: 10000, monthlyInsurance: 500 }, expected: 10000 },
  // 1000 + 1200 contributions + 120 initial interest + 66 contribution interest.
  { id: 'deposit-calculator', query: { amount: 1000, rate: 12, months: 12, capitalization: 'no', capPeriod: 'year', topUp: 100, topUpTiming: 'end' }, expected: 2386 },
  { id: 'compound-interest', query: { principal: 1000, rate: 12, years: 1, compounding: 'year', topUp: 100, frequency: 'month' }, expected: 2386 },
  // Primary is the downhill gravity component: 50 * 9.80665 * sin(30°).
  { id: 'inclined-plane', query: { m: 50, angle: 30, mu: 0.2 }, expected: 245.17 },
  { id: 'potential-energy', query: { mode: 'E', m: 5, h: 10 }, expected: 490.33 },
  { id: 'kinetic-energy', query: { mode: 'E', m: 2, v: 3 }, expected: 9 },
  { id: 'ohms-law', query: { mode: 'vi', voltage: 12, current: 2 }, expected: 6 },
  { id: 'voltage-drop', query: { current: 32, length: 50, section: 6, material: 'aluminium', phase: 'three', voltage: 400 }, expected: 13.025 },
  { id: 'physics-power', query: { mode: 'P', W: 1000, t: 10 }, expected: 100 },
] as const;

function displayedNumber(text: string, locale: string): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) throw new Error(`No number in result: ${text}`);
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}

for (const scenario of scenarios) {
  for (const locale of locales) {
    const calculator = getCalculatorById(scenario.id, locale);
    if (!calculator) continue; // The deposit intentionally has only a RU public URL.
    test(`${locale} ${scenario.id}: published example and numerical result`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      const query = new URLSearchParams(Object.entries(scenario.query).map(([key, value]) => [key, String(value)]));
      await page.goto(`${calculator.fullPath}?${query}`);
      const primary = page.getByTestId('calc-result-primary');
      await expect(primary).toBeVisible();
      await expect.poll(async () => displayedNumber(await primary.innerText(), locale)).toBeCloseTo(scenario.expected, 3);
      await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
      await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
      await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
      if (scenario.id === 'voltage-drop') {
        // Three conductors, not sqrt(3): 3 * 32² * (0.0282 * 50 / 6).
        const values = await page.getByTestId('calc-result').locator('dd').allTextContents();
        expect(values.map((value) => displayedNumber(value, locale))).toContain(721.92);
      }
      expect(errors).toEqual([]);
    });
  }
}
