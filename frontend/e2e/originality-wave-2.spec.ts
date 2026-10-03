import { expect, test } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';
import { ratesToUSD } from '../src/data/currencies';
import { currencyTeachingScenarios } from '../src/data/currencyScenarioContent';

type Scenario = { id: string; query: Record<string, string | number>; expected: number; precision?: number };
// Numerical expectations use SI definitions or explicit analytical equations,
// never the calculator runner or its generated published-example output.
const conversions = [
  ['angle', 180, 'deg', 'rad', 3.1416],
  ['area', 1, 'ha', 'm2', 10000],
  ['cooking-volume', 1, 'cupUS', 'ml', 236.5882],
  ['data-rate', 8, 'mbits', 'mbytes', 1],
  ['density', 1, 'gcm3', 'kgm3', 1000],
  ['digital', 1, 'MiB', 'B', 1048576],
  ['energy', 1, 'kwh', 'j', 3600000],
  ['flow', 300, 'm3h', 'ls', 83.3333],
  ['force', 1, 'kgf', 'n', 9.8067],
  ['frequency', 60, 'rpm', 'hz', 1],
  ['illuminance', 1, 'fc', 'lx', 10.7639],
  ['length', 1, 'in', 'cm', 2.54],
  ['mass', 1, 'lb', 'kg', .453592],
  ['power', 1, 'ps', 'w', 735.4988],
  ['pressure', 1, 'atm', 'kpa', 101.325],
  ['speed', 36, 'kmh', 'ms', 10],
  ['temperature', -40, 'c', 'f', -40],
  ['time', 1, 'wk', 'h', 168],
  ['torque', 12, 'lbfin', 'lbfft', 1],
  ['volume', 1, 'galUS', 'l', 3.7854],
] as const;

const scenarios: Scenario[] = conversions.map(([family, value, from, to, expected]) => ({ id: `convert-${family}`, query: { value, from, to }, expected }));
for (const [id, scenario] of Object.entries(currencyTeachingScenarios)) {
  scenarios.push({ id, query: scenario, expected: Math.round(scenario.amount * ratesToUSD[scenario.to] / ratesToUSD[scenario.from] * 100) / 100 });
}
scenarios.push(
  { id: 'currency-exchange-fee', query: { direction: 'sell', amount: 1000, rate: 2, spreadPct: 10, feePct: 5, feeFixed: 20 }, expected: 1690 },
  { id: 'currency-exchange-fee', query: { direction: 'buy', amount: 2000, rate: 2, spreadPct: 10, feePct: 5, feeFixed: 20 }, expected: 855 },
  { id: 'percent-calculator', query: { mode: 'addPct', a: 200, b: 15 }, expected: 230 },
  { id: 'discount-calculator', query: { mode: 'byPercent', price: 100, discountPct: 20, secondDiscountPct: 10, quantity: 2 }, expected: 72 },
  // MET: 7×3.5×70×45/200 = 385.875, displayed as 386 kcal.
  { id: 'activity-calories', query: { activity: 'cycling', weightKg: 70, minutes: 45 }, expected: 386 },
  // Average of the four explicit adopted models at 180 cm, male constants.
  { id: 'ideal-weight', query: { sex: 'male', height: 180 }, expected: 74.203 },
  { id: 'max-heart-rate', query: { age: 42, formula: 'tanaka', restingHr: 55 }, expected: 179 },
  { id: 'steps-distance-calories', query: { mode: 'stride', stride: 70, steps: 10000, weight: 70, kcalPerKgKm: .53 }, expected: 7 },
  { id: 'vo2max', query: { mode: 'hr', hrMax: 190, hrRest: 55 }, expected: 52.855 },
  // Adopted heuristic, not an EFSA intake norm: (72×.033 + 45/30×.35)×1.1.
  { id: 'water-intake', query: { weight: 72, activityMinutes: 45, hotWeather: 'yes' }, expected: 3.191 },
  { id: 'waist-ratio', query: { waist: 80, hip: 100, height: 160 }, expected: .5 },
  { id: 'calories-from-macros', query: { protein: 10, fat: 10, carbs: 0 }, expected: 130 },
);

function numberFromResult(text: string, locale: string): number {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}

for (const scenario of scenarios) for (const locale of locales) {
  test(`${locale} ${scenario.id} ${scenario.query.direction ?? ''}: independent numerical scenario`, async ({ page }) => {
    const calculator = getCalculatorById(scenario.id, locale)!;
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const query = new URLSearchParams(Object.entries(scenario.query).map(([key, value]) => [key, String(value)]));
    await page.goto(`${calculator.fullPath}?${query}`);
    const primary = page.getByTestId('calc-result-primary');
    await expect(primary).toBeVisible();
    await expect.poll(async () => numberFromResult(await primary.innerText(), locale)).toBeCloseTo(scenario.expected, scenario.precision ?? 3);
    await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
    expect(errors).toEqual([]);
  });
}

for (const locale of locales) {
  for (const [id, source, target] of [['usd-to-eur', 'USD', 'EUR'], ['eur-to-mdl', 'EUR', 'MDL'], ['usd-to-mdl', 'USD', 'MDL']] as const) {
    test(`${locale} ${id}: query parameters preserve its fixed currency pair`, async ({ page }) => {
      const calculator = getCalculatorById(id, locale)!;
      await page.goto(`${calculator.fullPath}?amount=200&from=GBP&to=RON`);
      const expected = Math.round(200 * ratesToUSD[target] / ratesToUSD[source] * 100) / 100;
      await expect.poll(async () => numberFromResult(await page.getByTestId('calc-result-primary').innerText(), locale)).toBeCloseTo(expected, 2);
      await expect(page.locator('#f-from')).toHaveValue(source);
      await expect(page.locator('#f-to')).toHaveValue(target);
    });
  }
  test(`${locale} energy: nonzero underflow produces a localized explicit error`, async ({ page }) => {
    // The URL codec accepts decimal notation; malformed exponent text is
    // deliberately ignored. This exact decimal restores the number 1e-308.
    const tiny = '0.' + '0'.repeat(307) + '1';
    await page.goto(`${getCalculatorById('convert-energy', locale)!.fullPath}?value=${tiny}&from=ev&to=j`);
    await expect(page.getByTestId('calc-result-primary')).toContainText('—');
    const error = { ru: 'Результат вне допустимого диапазона', en: 'The result is outside the supported range', uk: 'Результат поза допустимим діапазоном', de: 'Das Ergebnis liegt außerhalb des zulässigen Bereichs', es: 'El resultado queda fuera del intervalo admitido' }[locale];
    await expect(page.getByTestId('calc-result')).toContainText(error);
  });
  test(`${locale} calendar: ISO week-year crosses the December boundary`, async ({ page }) => {
    await page.goto(`${getCalculatorById('day-of-week', locale)!.fullPath}?date=2024-12-31`);
    await expect(page.getByTestId('calc-result')).toContainText('2025');
    await expect(page.getByTestId('calc-result')).not.toContainText('53');
  });
  test(`${locale} calendar: year 0001 is accepted by the form and calculator`, async ({ page }) => {
    await page.goto(`${getCalculatorById('day-of-week', locale)!.fullPath}?date=0001-01-01`);
    const monday = { ru: 'понедельник', en: 'Monday', uk: 'понеділок', de: 'Montag', es: 'lunes' }[locale];
    await expect(page.getByTestId('calc-result-primary')).toContainText(monday, { ignoreCase: true });
  });
}
