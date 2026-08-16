import { getCalculatorById, locales } from '../lib/i18n';

type ExampleInput = Record<string, string | number | boolean>;
type PublishedLocale = (typeof locales)[number];

export type PublishedExample = {
  calculatorId: string;
  locale: PublishedLocale;
  source: string;
  input: ExampleInput;
  expected: string[];
  exampleKind?: 'calculator' | 'seo';
  onlyLocales?: PublishedLocale[];
};

const canonicalPublishedExamples: PublishedExample[] = [
  { calculatorId: 'credit-calculator', locale: 'ru', source: '/ru/finance/credit-calculator/', input: { amount: 500000, term: 5, termUnit: 'years', rate: 14, type: 'annuity' }, expected: ['11 634 ₽', '198 048 ₽'] },
  { calculatorId: 'deposit-calculator', locale: 'ru', source: '/ru/finance/deposit-calculator/', input: { amount: 100000, months: 12, rate: 12, capitalization: 'yes', capPeriod: 'month', topUp: 0 }, expected: ['112 683 ₽', '12 683 ₽'] },
  { calculatorId: 'compound-interest', locale: 'ru', source: '/ru/finance/compound-interest/', input: { principal: 100000, rate: 10, compounding: 'month', years: 10, topUp: 5000, frequency: 'month' }, expected: ['1 294 929 ₽'] },
  { calculatorId: 'mortgage-calculator', locale: 'ru', source: '/ru/finance/mortgage-calculator/', input: { price: 8000000, downPaymentMode: 'amount', downPayment: 1600000, years: 20, rate: 13, type: 'annuity' }, expected: ['74 981 ₽', '11 595 403 ₽'] },
  { calculatorId: 'income-tax-calculator', locale: 'ru', source: '/ru/finance/income-tax-calculator/', input: { amount: 200000, period: 'month', direction: 'gross', mode: 'progressive' }, expected: ['26 000 ₽', '174 000 ₽'] },
  { calculatorId: 'vat-calculator', locale: 'ru', source: '/ru/finance/vat-calculator/', input: { amount: 12200, rate: '22', operation: 'extract' }, expected: ['2 200 ₽', '10 000 ₽'] },
  { calculatorId: 'vat-calculator', locale: 'ru', source: '/ru/finance/vat-calculator/', input: { amount: 10000, rate: '22', operation: 'add' }, expected: ['2 200 ₽', '12 200 ₽'] },
  { calculatorId: 'percent-calculator', locale: 'ru', source: '/ru/finance/percent-calculator/', input: { mode: 'of', a: 15, b: 200 }, expected: ['30,00'] },
  { calculatorId: 'percent-calculator', locale: 'ru', source: '/ru/finance/percent-calculator/', input: { mode: 'what', a: 50, b: 200 }, expected: ['25,00%'] },
  { calculatorId: 'percent-calculator', locale: 'ru', source: '/ru/finance/percent-calculator/', input: { mode: 'addPct', a: 200, b: 15 }, expected: ['230,00'] },
  { calculatorId: 'percent-calculator', locale: 'ru', source: '/ru/finance/percent-calculator/', input: { mode: 'subPct', a: 200, b: 15 }, expected: ['170,00'] },
  { calculatorId: 'percent-calculator', locale: 'ru', source: '/ru/finance/percent-calculator/', input: { mode: 'change', a: 100, b: 130 }, expected: ['+30,00%'] },
  { calculatorId: 'discount-calculator', locale: 'ru', source: '/ru/finance/discount-calculator/', input: { price: 5000, mode: 'byPercent', discountPct: 20, secondDiscountPct: 0, quantity: 1 }, expected: ['4 000 ₽', '1 000 ₽', '20,00%'] },
  { calculatorId: 'currency-converter', locale: 'ru', source: '/ru/currency/currency-converter/', input: { amount: 100, from: 'USD', to: 'EUR' }, expected: ['€', '100,00 $'] },
  { calculatorId: 'usd-to-eur', locale: 'ru', source: '/ru/currency/usd-to-eur/', input: { amount: 100, from: 'USD', to: 'EUR' }, expected: ['€', '100,00 $'] },
  { calculatorId: 'eur-to-mdl', locale: 'ru', source: '/ru/currency/eur-to-mdl/', input: { amount: 100, from: 'EUR', to: 'MDL' }, expected: ['L', '100,00 €'] },
  { calculatorId: 'usd-to-mdl', locale: 'ru', source: '/ru/currency/usd-to-mdl/', input: { amount: 100, from: 'USD', to: 'MDL' }, expected: ['L', '100,00 $'] },
  { calculatorId: 'bmi-calculator', locale: 'ru', source: '/ru/sport/bmi-calculator/', input: { height: 175, weight: 70 }, expected: ['22,9', 'Норма'] },
  { calculatorId: 'calorie-calculator', locale: 'ru', source: '/ru/sport/calorie-calculator/', input: { gender: 'male', age: 30, height: 175, weight: 70, activity: '1.55', goal: 'maintain', goalAdjustment: 15, proteinPct: 30, fatPct: 25 }, expected: ['2 556 ккал'] },
  { calculatorId: 'running-pace-calculator', locale: 'ru', source: '/ru/sport/running-pace-calculator/', input: { distance: 5, unit: 'km', hours: 0, minutes: 25, seconds: 0 }, expected: ['5:00/км', '12,00 км/ч'] },
  { calculatorId: 'one-rep-max-calculator', locale: 'ru', source: '/ru/sport/one-rep-max-calculator/', input: { weight: 80, reps: 5 }, expected: ['93,3 кг', '74,7 кг'] },
  { calculatorId: 'tile-calculator', locale: 'ru', source: '/ru/building/tile-calculator/', input: { mode: 'room', length: 4, width: 3, tileLength: 30, tileWidth: 30, packArea: 1.44, reserve: 10, glueConsumption: 5 }, expected: ['147 шт.', '10 шт.'] },
  { calculatorId: 'wallpaper-calculator', locale: 'ru', source: '/ru/building/wallpaper-calculator/', input: { length: 5, width: 4, height: 2.7, rollWidth: 1.06, rollLength: 10, windows: 1, doors: 1, pattern: 0 }, expected: ['6 шт.'] },
  { calculatorId: 'paint-calculator', locale: 'ru', source: '/ru/building/paint-calculator/', input: { mode: 'manual', area: 30, coats: 2, consumption: 0.15, canVolume: 2.5, reserve: 0 }, expected: ['9,0 л', '4 шт. × 2,5 л'] },
  { calculatorId: 'laminate-calculator', locale: 'ru', source: '/ru/building/laminate-calculator/', input: { length: 5, width: 4, packArea: 2.13, reserve: 10 }, expected: ['11 шт.', '22,00 м²'] },
  { calculatorId: 'age-calculator', locale: 'ru', source: '/ru/date-time/age-calculator/', input: { birthDate: '1990-01-01', targetDate: '2026-02-01' }, expected: ['36 лет, 1 месяц'] },
  { calculatorId: 'working-days-calculator', locale: 'ru', source: '/ru/date-time/working-days-calculator/', input: { startDate: '2026-02-01', endDate: '2026-02-28', includeWeekends: 'no', saturdayWorking: 'no', excludedDates: '' }, expected: ['20 дн.', '28', '8'] },
  { calculatorId: 'margin-calculator', locale: 'ru', source: '/ru/finance/margin-calculator/', input: { mode: 'fromPrice', cost: 100, sellPrice: 125, quantity: 1 }, expected: ['125 ₽', '25 ₽', '25,00%', '20,00%'] },
  { calculatorId: 'screed-calculator', locale: 'ru', source: '/ru/building/screed-calculator/', input: { mode: 'room', length: 5, width: 4, thickness: 5, mixConsumption: 18, bagWeight: 25, reserve: 10, bagPrice: 0 }, expected: ['1,100 м³', '1 980 кг', '80 шт.'] },
  { calculatorId: 'date-shift-calculator', locale: 'ru', source: '/ru/date-time/date-calculator/', input: { startDate: '2026-01-01', shiftDirection: 'forward', shiftYears: 0, shiftMonths: 0, shiftWeeks: 0, shiftDays: 90 }, expected: ['2026-04-01', 'Среда', '90', '14'] },
  { calculatorId: 'credit-calculator', locale: 'ru', source: '/ru/finance/credit-calculator/', input: { amount: 500000, term: 5, termUnit: 'years', rate: 14, type: 'annuity' }, expected: ['11 634 ₽', '698 048 ₽', '198 048 ₽'], exampleKind: 'seo', onlyLocales: ['ru'] },
  { calculatorId: 'percent-calculator', locale: 'ru', source: '/ru/finance/percent-calculator/', input: { mode: 'change', a: 4000, b: 4800 }, expected: ['+20,00%', '800,00'], exampleKind: 'seo', onlyLocales: ['ru'] },
  { calculatorId: 'discount-calculator', locale: 'ru', source: '/ru/finance/discount-calculator/', input: { price: 12000, mode: 'byPercent', discountPct: 15, secondDiscountPct: 0, quantity: 1 }, expected: ['10 200 ₽', '1 800 ₽'], exampleKind: 'seo', onlyLocales: ['ru'] },
  { calculatorId: 'bmi-calculator', locale: 'ru', source: '/ru/sport/bmi-calculator/', input: { height: 178, weight: 82 }, expected: ['25,9', 'Избыточный вес'], exampleKind: 'seo', onlyLocales: ['ru'] },
  { calculatorId: 'credit-calculator', locale: 'en', source: '/en/finance/loan-calculator/', input: { amount: 20000, term: 5, termUnit: 'years', rate: 8, type: 'annuity' }, expected: ['406 ₽', '24 332 ₽', '4 332 ₽'], exampleKind: 'seo', onlyLocales: ['en'] },
  { calculatorId: 'percent-calculator', locale: 'en', source: '/en/finance/percentage-calculator/', input: { mode: 'change', a: 40, b: 50 }, expected: ['+25,00%', '10,00'], exampleKind: 'seo', onlyLocales: ['en'] },
  { calculatorId: 'discount-calculator', locale: 'en', source: '/en/finance/discount-calculator/', input: { price: 120, mode: 'byPercent', discountPct: 15, secondDiscountPct: 0, quantity: 1 }, expected: ['102 ₽', '18 ₽'], exampleKind: 'seo', onlyLocales: ['en'] },
  { calculatorId: 'bmi-calculator', locale: 'en', source: '/en/fitness/bmi-calculator/', input: { height: 178, weight: 82 }, expected: ['25,9', 'Избыточный вес'], exampleKind: 'seo', onlyLocales: ['en'] },
];

export const publishedExamples: PublishedExample[] = canonicalPublishedExamples.flatMap((example) =>
  (example.onlyLocales ?? locales).flatMap((locale) => {
    const calculator = getCalculatorById(example.calculatorId, locale);
    if (!calculator) return [];
    const { onlyLocales: _onlyLocales, ...publishedExample } = example;
    return [{ ...publishedExample, locale, source: calculator.fullPath }];
  }),
);
