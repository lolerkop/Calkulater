import { expect, it } from 'vitest';
import type { CalcFunction, CalcResult } from '../src/lib/types';
import { parseLocalizedNumber } from '../src/lib/format';
import { compute as curtain } from '../src/calculators/curtain-size/compute';
import { compute as luggage } from '../src/calculators/luggage-linear/compute';
import { compute as frame } from '../src/calculators/picture-frame-mat/compute';
import { compute as price } from '../src/calculators/price-per-unit/compute';
import { compute as print } from '../src/calculators/print-3d-cost/compute';
import { compute as stock } from '../src/calculators/stock-duration/compute';
import { compute as subs } from '../src/calculators/subscriptions-cost/compute';
import { compute as tip } from '../src/calculators/tip/compute';
import { compute as trip } from '../src/calculators/trip-budget/compute';
import { validate as tipValidate } from '../src/calculators/tip/validate';
import { validate as tripValidate } from '../src/calculators/trip-budget/validate';
import oracle from '../reports/originality-final-state-peer-evidence/independent-decimal-oracles.json';

const engines: Record<string, CalcFunction> = {
  'curtain-size': curtain, 'luggage-linear': luggage, 'picture-frame-mat': frame,
  'price-per-unit': price, 'print-3d-cost': print, 'stock-duration': stock,
  'subscriptions-cost': subs, tip, 'trip-budget': trip,
};
const row = (result: CalcResult, label: string) => result.secondary.find(r => r.label === label)?.value ?? '';
function numeric(text: string): number {
  const clean = text.replace(/[\s\u00a0\u202f]/g, '').replace(',', '.');
  const scientific = /^([+-]?[\d.]+)·10\^([+-]?\d+)/.exec(clean);
  return scientific ? Number(scientific[1] + 'e' + scientific[2]) : parseFloat(clean);
}
const inputsFor = (id: string) => oracle.normalCases.find(c => c.id === id)!.inputs as unknown as Parameters<CalcFunction>[0];

// These literals come from the independent Python Decimal ledger, not the compute functions.
for (const c of oracle.normalCases) it(c.id + ': independent fixed arithmetic and subject labels', () => {
  const result = engines[c.id](c.inputs as unknown as Parameters<CalcFunction>[0]);
  for (const [label, value] of Object.entries(c.numericExpected)) {
    expect(numeric(label === 'primary' ? result.primary.value : row(result, label))).toBeCloseTo(Number(value), 2);
  }
  if ('primaryLiteral' in c) expect(result.primary.value).toBe(c.primaryLiteral);
  if ('stringExpected' in c) for (const [label, value] of Object.entries(c.stringExpected ?? {})) expect(row(result, label)).toBe(value);
});

it('curtain exact decimal ceil does not add an unnecessary panel', () => {
  const result = curtain({ windowWidth: .1, fullness: 3, fabricWidth: .3, height: 100, hem: 0 });
  expect(row(result, 'Полотнищ')).toBe('1 шт');
  expect(result.primary.value).toBe('1 м');
});
it('curtain actual positive decimal remainder requires another panel', () => {
  expect(row(curtain({ windowWidth: .10000000000000002, fullness: 3, fabricWidth: .3, height: 100, hem: 0 }), 'Полотнищ')).toBe('2 шт');
});
it('luggage decimal dimensions exactly at the supplied limit pass with no false negative reserve', () => {
  const result = luggage({ l: .1, w: .2, h: .3, limit: .6 });
  expect(row(result, 'По введённому пределу')).toBe('проходит');
  expect(numeric(row(result, 'Запас до предела'))).toBe(0);
});
it('luggage genuine shortest decimal excess is still reported', () => {
  const result = luggage({ l: .1, w: .2, h: .30000000000000004, limit: .6 });
  expect(row(result, 'По введённому пределу')).toBe('превышена');
  expect(numeric(row(result, 'Запас до предела'))).toBeLessThan(0);
});
it('luggage includes its declared volume without overflowing intermediate products', () => {
  expect(numeric(row(luggage({ l: 1e100, w: 1e100, h: 1e-200, limit: 3e100 }), 'Объём коробки'))).toBe(.001);
});
it('mat narrow border area survives cancellation between huge rectangles', () => {
  expect(numeric(row(frame({ photoWidth: 1e100, photoHeight: 1e100, border: 1e-100, bottomExtra: 0 }), 'Площадь паспарту'))).toBe(4);
});
it('unit price decimal equality is independent of the floating multiplication path', () => {
  expect(price({ mode: 'compare', unit: 'pcs', priceA: '0.3', amountA: '3', priceB: '0.1', amountB: '1' }).primary.value).toBe('одинаково');
});
it('unit price retains a genuine positive decimal difference rather than an epsilon tie', () => {
  const result = price({ mode: 'compare', unit: 'kg', priceA: .30000000000000004, amountA: 3, priceB: .1, amountB: 1 });
  expect(result.primary.value).toBe('B');
  expect(numeric(row(result, 'Переплата за единицу')) / (4e-17 / 3)).toBeCloseTo(1, 3);
});
it('price modes ignore only their inactive numeric inputs', () => {
  expect(price({ mode: 'single', unit: 'kg', price: 150, amount: .5, priceA: true, priceB: 'bad' }).primary.value).toBe('300,00 ₽ за кг');
  expect(price({ mode: 'compare', unit: 'kg', priceA: 100, amountA: 1, priceB: 100, amountB: 1, price: false, amount: 'bad' }).primary.value).toBe('одинаково');
  expect(price({ mode: 'single', unit: 'kg', price: true, amount: .5 }).primary.value).toBe('—');
  expect(price({ mode: 'compare', unit: 'kg', priceA: false, amountA: 1, priceB: 100, amountB: 1 }).primary.value).toBe('—');
});
it('subscription 1.005/3 and .335/1 have the same .34 final half-cent display', () => {
  const result = subs({ items: 'A 1.005 3' });
  expect(result.primary.value).toBe('0,34 ₽');
  expect(row(result, 'Её вклад в месяц')).toBe('0,34 ₽');
  expect(result.table?.rows[0][3]).toBe('0,34');
  expect(result.primary.value).toBe(subs({ items: 'A 0.335 1' }).primary.value);
});
it('subscription aggregate keeps unrounded charges before the final monthly and annual display', () => {
  const result = subs({ items: 'A 1.005 3\nB 1.005 3\nC 1.005 3' });
  expect(result.primary.value).toBe('1,01 ₽');
  expect(row(result, 'В год')).toBe('12,06 ₽');
  expect(result.table?.rows.map(r => r[3])).toEqual(['0,34', '0,34', '0,34']);
});
it('subscription largest selection compares exact accepted fractions before equal binary display values', () => {
  // B−A = 1/90000001500000004, positive although both final binary ratios coincide.
  // Very long accepted periods are a numerical boundary, not an ordinary subscription recommendation.
  expect(row(subs({ items: 'A 100000000 300000001\nB 100000001 300000004' }), 'Самая дорогая')).toBe('B');
  expect(row(subs({ items: 'A 1 3\nB 2 6' }), 'Самая дорогая')).toBe('A');
});
it('print cost 1g×1.005/3g and 1g×.335/1g give the same .34 final cost', () => {
  const other = { grams: 1, hours: 1, powerW: 0, kwhPrice: 0, wearPerHour: 0, markupPct: 0 };
  const result = print({ ...other, spoolPrice: 1.005, spoolWeight: 3 });
  expect(result.primary.value).toBe('0,34 ₽');
  expect(row(result, 'Пластик')).toBe('0,34 ₽');
  expect(row(result, 'Цена грамма пластика')).toBe('0,34 ₽');
  expect(result.primary.value).toBe(print({ ...other, spoolPrice: .335, spoolWeight: 1 }).primary.value);
});
it('tip per-person 1.005/3 and .67/2 display the same .34 without asserting cent allocation', () => {
  const first = tip({ bill: 1.005, tipPercent: 0, people: 3, roundPerPerson: 'no' });
  const second = tip({ bill: .67, tipPercent: 0, people: 2, roundPerPerson: 'no' });
  expect(row(first, 'С человека')).toBe('0,34 ₽');
  expect(row(first, 'С человека')).toBe(row(second, 'С человека'));
  expect(first.primary.value).toBe('1,01 ₽');
});
it('tip explicit whole-unit rounding remains separate from two-digit display rounding', () => {
  const result = tip({ bill: .3, tipPercent: 0, people: 3, roundPerPerson: 'yes' });
  expect(result.primary.value).toBe('3,00 ₽');
  expect(row(result, 'С человека')).toBe('1,00 ₽');
  expect(row(result, 'Сверх счёта из-за округления')).toBe('2,70 ₽');
});
it('stock positive tiny duration and true exhaustion stay distinct', () => {
  expect(numeric(stock({ stock: 1, perDay: 1e300, reserveDays: 0 }).primary.value)).toBe(1e-300);
  expect(stock({ stock: 0, perDay: 2, reserveDays: 0 }).primary.value).toBe('0 дней');
});
it('fractional trip days are a duration while nights and travellers remain counts', () => {
  expect(trip({ nights: 0, days: 1.5, people: 2, hotelPerNight: 0, foodPerDayPerPerson: 4, transport: 0, activities: 0, other: 0 }).primary.value).toBe('12,00 ₽');
});

for (const [id, key] of [
  ['curtain-size', 'windowWidth'], ['luggage-linear', 'limit'], ['picture-frame-mat', 'bottomExtra'],
  ['price-per-unit', 'priceA'], ['print-3d-cost', 'wearPerHour'], ['stock-duration', 'reserveDays'],
  ['tip', 'people'], ['trip-budget', 'other'],
] as const) for (const invalid of [true, '1e-999', Infinity, null]) it(id + ': explicit active invalid ' + key + '/' + String(invalid), () => {
  expect(engines[id]({ ...inputsFor(id), [key]: invalid } as unknown as Parameters<CalcFunction>[0]).primary.value).toBe('—');
});
for (const invalid of [true, 'A 1e-999 1', 'A 1 0']) it('subscriptions strict row/text ' + String(invalid), () => {
  expect(subs({ items: invalid }).primary.value).toBe('—');
});
for (const invalid of ['other', true, null, 1]) it('closed price and tip enum ' + String(invalid), () => {
  expect(price({ ...inputsFor('price-per-unit'), mode: invalid } as unknown as Parameters<CalcFunction>[0]).primary.value).toBe('—');
  expect(tip({ ...inputsFor('tip'), roundPerPerson: invalid } as unknown as Parameters<CalcFunction>[0]).primary.value).toBe('—');
});
for (const [id, key] of [['tip', 'people'], ['trip-budget', 'people'], ['trip-budget', 'nights']] as const) {
  for (const raw of [1.5, '1.00000000000000001', '1.00000000000000001e0', '9007199254740992']) it(id + ': exact raw count ' + key + '/' + raw, () => {
    expect(engines[id]({ ...inputsFor(id), [key]: raw }).primary.value).toBe('—');
  });
  for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) it(id + '/' + locale + ': native pre-normalization whole-count guard', () => {
    const raw = locale === 'en' ? '1.00000000000000001' : '1,00000000000000001';
    const validator = id === 'tip' ? tipValidate : tripValidate;
    const errors = validator({ values: { ...inputsFor(id), [key]: raw }, fields: [], locale, parseNumber: value => parseLocalizedNumber(value, locale) });
    expect(errors[key]).toBeTruthy();
    if (!['ru', 'uk'].includes(locale)) expect(errors[key]).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
  });
}

const unrepresentable: [string, Parameters<CalcFunction>[0]][] = [
  ['curtain-size', { windowWidth: 1e308, fullness: 2, fabricWidth: 1, height: 1, hem: 0 }],
  ['luggage-linear', { l: 1e-200, w: 1e-200, h: 1e-200, limit: 1 }],
  ['picture-frame-mat', { photoWidth: 1e308, photoHeight: 1e308, border: 1e308, bottomExtra: 0 }],
  ['price-per-unit', { mode: 'single', unit: 'kg', price: 1e308, amount: 1e-308 }],
  ['print-3d-cost', { grams: 1e-200, spoolPrice: 1e-200, spoolWeight: 1, hours: 1, powerW: 0, kwhPrice: 0, wearPerHour: 0, markupPct: 0 }],
  ['stock-duration', { stock: 1e-200, perDay: 1e200, reserveDays: 0 }],
  ['subscriptions-cost', { items: 'A 1e308 1e-308' }],
  ['tip', { bill: 1e308, tipPercent: 100, people: 2, roundPerPerson: 'no' }],
  ['trip-budget', { nights: 0, days: 1e-200, people: 1, hotelPerNight: 0, foodPerDayPerPerson: 1e-200, transport: 0, activities: 0, other: 0 }],
];
for (const [id, values] of unrepresentable) it(id + ': mathematically nonzero underflow or overflow is an explicit error', () => {
  expect(engines[id](values).primary.value).toBe('—');
});
