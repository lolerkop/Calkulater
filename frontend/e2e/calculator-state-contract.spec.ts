import { expect, test, type Locator, type Page } from '@playwright/test';
import { calculators } from '../src/data/calculators';
import { getCalculatorById } from '../src/lib/i18n';
import type { CalculatorDef, Field, FieldType } from '../src/lib/types';

// Список и маршруты намеренно строятся из production-реестра. Ручной mapping
// ниже хранит только осмысленное non-default состояние и независимое ожидание.
// Контракт copy-result уже проверяет актуальный и неустаревший результат в
// calculator-characterization.spec.ts, поэтому здесь он не дублируется.
const INVALID_RESULT_TOKENS = /NaN|Infinity|undefined|\[object Object\]/;

type QueryValue = string | number | boolean;
type ExpectedRow = { label: string; value?: string; contains?: string };
type StateScenario = {
  query: Record<string, QueryValue>;
  result: {
    primary?: string;
    rows?: ExpectedRow[];
  };
};

const stateScenarios: Record<string, StateScenario> = {
  'credit-calculator': {
    query: { amount: 120000, term: 1, termUnit: 'years', rate: 0, type: 'annuity' },
    result: { primary: '10 000 ₽' },
  },
  'deposit-calculator': {
    query: {
      amount: 100000,
      months: 12,
      rate: 0,
      capitalization: 'yes',
      capPeriod: 'quarter',
      topUp: 0,
      topUpTiming: 'end',
    },
    result: { primary: '100 000 ₽' },
  },
  'compound-interest': {
    query: {
      principal: 100000,
      rate: 0,
      compounding: 'quarter',
      years: 1,
      topUp: 0,
      frequency: 'year',
    },
    result: { primary: '100 000 ₽' },
  },
  'mortgage-calculator': {
    query: {
      price: 1200000,
      downPaymentMode: 'percent',
      downPaymentPct: 0,
      years: 1,
      rate: 0,
      type: 'annuity',
    },
    result: { primary: '100 000 ₽' },
  },
  'income-tax-calculator': {
    query: {
      amount: 100000,
      period: 'month',
      direction: 'gross',
      mode: 'fixed',
      rate: 10,
    },
    result: { primary: '10 000 ₽' },
  },
  'vat-calculator': {
    query: { amount: 1000, operationDate: '2026-01-15', rate: '10', operation: 'add' },
    result: { primary: '100 ₽' },
  },
  'percent-calculator': {
    query: { mode: 'addPct', a: 100, b: 10 },
    result: { primary: '110,00' },
  },
  'discount-calculator': {
    query: {
      price: 1000,
      mode: 'byAmount',
      discountAmt: 100,
      secondDiscountPct: 0,
      quantity: 2,
    },
    result: { primary: '900 ₽', rows: [{ label: 'Итого за товары', value: '1 800 ₽' }] },
  },
  'break-even-calculator': {
    // 10 000 постоянных затрат при марже 500 - 300 = 200 дают ровно 50 единиц.
    query: { fixedCosts: 10000, unitPrice: 500, variableCost: 300, plannedUnits: 0 },
    result: { primary: '50 \u0448\u0442.', rows: [{ label: '\u041c\u0430\u0440\u0436\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c \u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u044b', value: '200\u00a0\u20bd' }] },
  },
  'margin-calculator': {
    query: { mode: 'fromMarkup', cost: 100, markupPct: 50, quantity: 2 },
    result: { primary: '150 ₽' },
  },
  'currency-converter': {
    query: { amount: 250, from: 'EUR', to: 'EUR' },
    result: { primary: '250,00 €' },
  },
  'usd-to-eur': {
    query: { amount: 250 },
    result: { rows: [{ label: 'Из', contains: '250,00 $' }] },
  },
  'eur-to-mdl': {
    query: { amount: 250 },
    result: { rows: [{ label: 'Из', contains: '250,00 €' }] },
  },
  'usd-to-mdl': {
    query: { amount: 250 },
    result: { rows: [{ label: 'Из', contains: '250,00 $' }] },
  },
  'bmi-calculator': {
    query: { height: 200, weight: 100 },
    result: { primary: '25,0' },
  },
  'calorie-calculator': {
    query: {
      gender: 'female',
      age: 30,
      height: 160,
      weight: 60,
      activity: '1.2',
      goal: 'lose',
      goalAdjustment: 20,
      proteinPct: 30,
      fatPct: 25,
    },
    result: {
      primary: '1 237 ккал',
      rows: [{ label: 'Базовый обмен (BMR)', value: '1 289 ккал' }],
    },
  },
  'running-pace-calculator': {
    query: { distance: 5, unit: 'km', hours: 0, minutes: 30, seconds: 0 },
    result: { primary: '6:00/км' },
  },
  'one-rep-max-calculator': {
    query: { weight: 100, reps: 1 },
    result: { primary: '100,0 кг' },
  },
  'tile-calculator': {
    query: {
      mode: 'area',
      manualArea: 1,
      tileLength: 100,
      tileWidth: 100,
      packArea: 1,
      reserve: 0,
      glueConsumption: 0,
      packPrice: 0,
    },
    result: { primary: '1 шт.', rows: [{ label: 'Количество упаковок', value: '1 шт.' }] },
  },
  'wallpaper-calculator': {
    query: {
      length: 1,
      width: 1,
      height: 2,
      rollWidth: 1,
      rollLength: 10,
      windows: 0,
      doors: 0,
      pattern: 0,
      rollPrice: 0,
    },
    result: { primary: '1 шт.' },
  },
  'paint-calculator': {
    query: {
      mode: 'manual',
      area: 10,
      coats: 1,
      consumption: 0.1,
      canVolume: 1,
      reserve: 0,
      canPrice: 0,
    },
    result: { primary: '1,0 л' },
  },
  'laminate-calculator': {
    query: {
      length: 2,
      width: 2,
      packArea: 2,
      reserve: 0,
      packPrice: 0,
      underlayPrice: 0,
    },
    result: { primary: '2 шт.' },
  },
  'screed-calculator': {
    query: {
      mode: 'area',
      manualArea: 1,
      thickness: 1,
      mixConsumption: 10,
      bagWeight: 10,
      reserve: 0,
      bagPrice: 0,
    },
    result: { primary: '0,010 м³', rows: [{ label: 'Мешков', value: '1 шт.' }] },
  },
  'age-calculator': {
    query: { birthDate: '2000-01-01', targetDate: '2025-01-01' },
    result: { primary: '25 лет, 0 месяцев, 0 дней' },
  },
  'working-days-calculator': {
    query: {
      startDate: '2026-01-05',
      endDate: '2026-01-09',
      includeWeekends: 'no',
      saturdayWorking: 'yes',
      excludedDates: '2026-01-07',
    },
    result: { primary: '4 дн.', rows: [{ label: 'Исключённые даты', value: '1' }] },
  },
  'date-shift-calculator': {
    query: {
      startDate: '2026-01-01',
      shiftDirection: 'forward',
      shiftYears: 0,
      shiftMonths: 0,
      shiftWeeks: 0,
      shiftDays: 1,
    },
    result: { primary: '2026-01-02' },
  },
};

const sourceIds = new Set(calculators.map((calculator) => calculator.id));
const unknownScenarioIds = Object.keys(stateScenarios).filter((id) => !sourceIds.has(id));
if (unknownScenarioIds.length > 0) {
  throw new Error(`State scenarios reference unknown calculators: ${unknownScenarioIds.join(', ')}`);
}

const calculatorCases = calculators.map((sourceCalculator) => {
  const calculator = getCalculatorById(sourceCalculator.id, 'ru');
  const scenario = stateScenarios[sourceCalculator.id];
  if (!calculator) throw new Error(`No RU route for ${sourceCalculator.id}`);
  if (!scenario) throw new Error(`No state scenario for ${sourceCalculator.id}`);
  return { calculator, scenario };
});

if (calculatorCases.length !== 26) {
  throw new Error(`Expected 26 calculators in the source registry, got ${calculatorCases.length}`);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function resultRowValue(page: Page, label: string): Locator {
  const labelCell = page
    .getByTestId('calc-result')
    .locator('dt')
    .filter({ hasText: new RegExp(`^${escapeRegExp(label)}$`, 'i') });
  return labelCell.locator('..').locator('dd');
}

function queryString(query: Record<string, QueryValue>): string {
  const params = new URLSearchParams();
  for (const [name, value] of Object.entries(query)) params.set(name, String(value));
  return params.toString();
}

async function expectHealthyResult(page: Page): Promise<void> {
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await expect(page.getByTestId('calc-result')).not.toContainText(INVALID_RESULT_TOKENS);
}

async function expectScenarioResult(page: Page, scenario: StateScenario): Promise<void> {
  await expectHealthyResult(page);
  if (scenario.result.primary) {
    await expect(page.getByTestId('calc-result-primary')).toHaveText(scenario.result.primary);
  }
  for (const row of scenario.result.rows ?? []) {
    const value = resultRowValue(page, row.label);
    await expect(value).toHaveCount(1);
    if (row.value !== undefined) await expect(value).toHaveText(row.value);
    if (row.contains !== undefined) await expect(value).toContainText(row.contains);
  }
}

async function expectScenarioResultChanged(page: Page, scenario: StateScenario): Promise<void> {
  if (scenario.result.primary) {
    await expect(page.getByTestId('calc-result-primary')).not.toHaveText(scenario.result.primary);
    return;
  }

  const marker = scenario.result.rows?.[0];
  if (!marker) throw new Error('Every state scenario needs a stable result marker');
  const value = resultRowValue(page, marker.label);
  if (marker.value !== undefined) await expect(value).not.toHaveText(marker.value);
  if (marker.contains !== undefined) await expect(value).not.toContainText(marker.contains);
}

async function localIsoDate(page: Page, offsetDays = 0): Promise<string> {
  return page.evaluate((offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }, offsetDays);
}

function staticDefaultValue(field: Field): string | number | boolean {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'toggle') return field.options?.[0]?.value ?? false;
  if (field.type === 'checkbox') return false;
  if (field.type === 'number') return 0;
  return '';
}

function isVisibleAtDefaults(field: Field, fields: Field[]): boolean {
  if (!field.showIf) return true;
  const controller = fields.find((candidate) => candidate.name === field.showIf?.field);
  return Boolean(controller && staticDefaultValue(controller) === field.showIf.equals);
}

async function browserDefaultValue(page: Page, field: Field): Promise<string | number | boolean> {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'date') {
    if (field.name === 'startDate' || field.name === 'operationDate') return localIsoDate(page);
    if (field.name === 'endDate') return localIsoDate(page, 30);
  }
  return staticDefaultValue(field);
}

async function expectDefaultFields(
  page: Page,
  calculator: CalculatorDef,
  preservedExcludedDraft?: string,
): Promise<void> {
  for (const field of calculator.fields) {
    const control = page.getByTestId(`field-${field.name}`);
    if (!isVisibleAtDefaults(field, calculator.fields)) {
      await expect(control).toHaveCount(0);
      continue;
    }

    const expected = await browserDefaultValue(page, field);
    if (field.name === 'excludedDates') {
      await expect(page.getByTestId('excluded-date-chip')).toHaveCount(0);
      await expect(control).toHaveValue(preservedExcludedDraft ?? '');
    } else if (field.type === 'toggle') {
      await expect(control).toBeVisible();
      await expect(page.getByTestId(`field-${field.name}-opt-${String(expected)}`))
        .toHaveAttribute('aria-pressed', 'true');
    } else if (field.type === 'checkbox') {
      if (expected) await expect(control).toBeChecked();
      else await expect(control).not.toBeChecked();
    } else {
      await expect(control).toHaveValue(String(expected));
    }
  }
}

async function expectQueryFields(
  page: Page,
  calculator: CalculatorDef,
  query: Record<string, QueryValue>,
): Promise<void> {
  for (const [name, expected] of Object.entries(query)) {
    const field = calculator.fields.find((candidate) => candidate.name === name);
    if (!field) throw new Error(`Unknown field ${calculator.id}.${name}`);

    const control = page.getByTestId(`field-${name}`);
    if (name === 'excludedDates') {
      const dates = String(expected).split(/[,;\n]+/).map((value) => value.trim()).filter(Boolean);
      await expect(page.getByTestId('excluded-date-chip')).toHaveText(dates);
      await expect(control).toHaveValue('');
    } else if (field.type === 'toggle') {
      await expect(control).toBeVisible();
      await expect(page.getByTestId(`field-${name}-opt-${String(expected)}`))
        .toHaveAttribute('aria-pressed', 'true');
    } else if (field.type === 'checkbox') {
      if (expected) await expect(control).toBeChecked();
      else await expect(control).not.toBeChecked();
    } else {
      await expect(control).toBeVisible();
      await expect(control).toHaveValue(String(expected));
    }
  }
}

test.describe('RESET contract from the calculator registry', () => {
  for (const { calculator, scenario } of calculatorCases) {
    test(`reset restores defaults for ${calculator.id}`, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.goto(`${calculator.fullPath}?${queryString(scenario.query)}`);

      await expectQueryFields(page, calculator, scenario.query);
      await expectScenarioResult(page, scenario);

      let preservedExcludedDraft: string | undefined;
      if (calculator.id === 'working-days-calculator') {
        preservedExcludedDraft = '2026-01-08';
        await page.getByTestId('field-excludedDates').fill(preservedExcludedDraft);
      }

      await page.getByTestId('calc-reset-btn').click();

      await expectDefaultFields(page, calculator, preservedExcludedDraft);
      await expectScenarioResultChanged(page, scenario);
      await expectHealthyResult(page);
      await expect(page).not.toHaveURL(/\?/);
      expect(new URL(page.url()).pathname).toBe(calculator.fullPath);
      expect(pageErrors).toEqual([]);
    });
  }
});

test.describe('QUERY ROUND-TRIP contract from the calculator registry', () => {
  for (const { calculator, scenario } of calculatorCases) {
    test(`query survives reload for ${calculator.id}`, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.goto(`${calculator.fullPath}?${queryString(scenario.query)}`);

      await expectQueryFields(page, calculator, scenario.query);
      await expectScenarioResult(page, scenario);

      await page.reload();

      await expectQueryFields(page, calculator, scenario.query);
      await expectScenarioResult(page, scenario);
      const restoredUrl = new URL(page.url());
      for (const [name, expected] of Object.entries(scenario.query)) {
        expect(restoredUrl.searchParams.get(name)).toBe(String(expected));
      }
      expect(pageErrors).toEqual([]);
    });
  }
});

type MalformedCase = {
  name: string;
  calculatorId: string;
  query: Record<string, QueryValue>;
  covers: Array<FieldType | 'conditional'>;
  assertImpossibleState: (page: Page) => Promise<void>;
};

const malformedCases: MalformedCase[] = [
  {
    name: 'non-number falls back to the number default',
    calculatorId: 'deposit-calculator',
    query: { amount: 'not-a-number' },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-amount')).toHaveValue('100000');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('112 683 ₽');
    },
  },
  {
    name: 'negative number is blocked before calculation',
    calculatorId: 'deposit-calculator',
    query: { rate: -1 },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-rate')).toHaveValue('-1');
      await expect(page.getByTestId('field-error-rate')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'number below min is blocked before calculation',
    calculatorId: 'credit-calculator',
    query: { amount: 999 },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-amount')).toHaveValue('999');
      await expect(page.getByTestId('field-error-amount')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'number above max is blocked before calculation',
    calculatorId: 'one-rep-max-calculator',
    query: { reps: 13 },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-reps')).toHaveValue('13');
      await expect(page.getByTestId('field-error-reps')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'absurdly large number is blocked before calculation',
    calculatorId: 'calorie-calculator',
    query: { proteinPct: '999999999999999999999999999999999' },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-error-proteinPct')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'NaN string falls back to the number default',
    calculatorId: 'compound-interest',
    query: { rate: 'NaN' },
    covers: ['number'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-rate')).toHaveValue('10');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('1 294 929 ₽');
    },
  },
  {
    name: 'unknown select option falls back to the default option',
    calculatorId: 'percent-calculator',
    query: { mode: 'missing-option' },
    covers: ['select'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-mode')).toHaveValue('of');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('30,00');
    },
  },
  {
    name: 'unknown toggle option falls back to the default option',
    calculatorId: 'credit-calculator',
    query: { type: 'impossible-toggle' },
    covers: ['toggle'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-type-opt-annuity'))
        .toHaveAttribute('aria-pressed', 'true');
      await expectHealthyResult(page);
    },
  },
  {
    name: 'impossible calendar date never reaches the result',
    calculatorId: 'date-shift-calculator',
    query: { startDate: '2026-02-31' },
    covers: ['date'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-startDate')).toHaveValue('');
      await expect(page.getByTestId('field-error-startDate')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
  {
    name: 'stale hidden showIf value cannot affect the visible mode',
    calculatorId: 'discount-calculator',
    query: {
      mode: 'byPercent',
      discountPct: 20,
      discountAmt: '999999999999999999999999999999999',
    },
    covers: ['conditional'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('field-discountAmt')).toHaveCount(0);
      await expect(page.getByTestId('field-discountPct')).toHaveValue('20');
      await expect(page.getByTestId('calc-result-primary')).toHaveText('4 000 ₽');
    },
  },
  {
    name: 'invalid excluded date is contained by textarea validation',
    calculatorId: 'working-days-calculator',
    query: {
      startDate: '2026-02-01',
      endDate: '2026-02-28',
      excludedDates: 'not-a-date',
    },
    covers: ['textarea'],
    assertImpossibleState: async (page) => {
      await expect(page.getByTestId('excluded-date-chip')).toHaveText(['not-a-date']);
      await expect(page.getByTestId('field-error-excludedDates')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    },
  },
];

const registryFieldTypes = new Set(calculators.flatMap((calculator) => (
  calculator.fields.map((field) => field.type)
)));
const malformedCoveredTypes = new Set(malformedCases.flatMap((scenario) => scenario.covers));
const uncoveredFieldTypes = [...registryFieldTypes].filter((type) => !malformedCoveredTypes.has(type));
if (uncoveredFieldTypes.length > 0) {
  throw new Error(`Malformed-query coverage is missing field types: ${uncoveredFieldTypes.join(', ')}`);
}
if (!malformedCoveredTypes.has('conditional')) {
  throw new Error('Malformed-query coverage is missing a showIf conditional case');
}

test.describe('MALFORMED QUERY contract by field class', () => {
  for (const malformed of malformedCases) {
    test(malformed.name, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      const calculator = getCalculatorById(malformed.calculatorId, 'ru');
      if (!calculator) throw new Error(`No RU route for ${malformed.calculatorId}`);

      await page.goto(`${calculator.fullPath}?${queryString(malformed.query)}`);
      await expect(page.getByTestId('calc-form')).toBeVisible();
      await malformed.assertImpossibleState(page);

      // Проверяем только область формы/результата: дефисы в меню и подвале не
      // относятся к отрицательным значениям калькулятора.
      await expect(page.getByTestId('calc-result-wrap')).not.toContainText(INVALID_RESULT_TOKENS);
      await expect(page.getByTestId('calc-form')).not.toContainText(INVALID_RESULT_TOKENS);
      expect(pageErrors).toEqual([]);
    });
  }
});
