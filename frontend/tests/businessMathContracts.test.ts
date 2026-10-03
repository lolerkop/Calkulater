import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';
import type { CalcFunction, CalcResult } from '../src/lib/types';
import { compute as advertising } from '../src/calculators/ad-roi/compute';
import { compute as aov } from '../src/calculators/aov/compute';
import { compute as day } from '../src/calculators/day-of-week/compute';
import { compute as difference } from '../src/calculators/difference-abs-rel/compute';
import { compute as dividend } from '../src/calculators/dividend-yield/compute';
import { compute as logarithm } from '../src/calculators/logarithm/compute';
import { compute as returns } from '../src/calculators/return-rate/compute';
import { compute as employee } from '../src/calculators/revenue-per-employee/compute';
import { compute as roi } from '../src/calculators/roi/compute';
import { compute as shipping } from '../src/calculators/shipping-per-unit/compute';

const number = (text: string) => Number(text.replace(/[^\d,.-]/g, '').replace(',', '.'));
const row = (result: CalcResult, label: string) => result.secondary.find((item) => item.label === label)!.value;
const error = (result: CalcResult) => {
  expect(result.primary.value).toBe('—');
  expect(result.secondary.some((item) => item.accent === 'red')).toBe(true);
};

describe('individual business and mathematical contracts: independent evidence', () => {
  it('advertising separates revenue/spend from full business profit', () => {
    // Four revenue units per ad-cost unit, so surplus is three cost units.
    const result = advertising({ revenue: 200000, spend: 50000 });
    expect(number(result.primary.value)).toBe(300);
    expect(row(result, 'ROAS')).toBe('4,00 : 1');
    expect(number(row(result, 'Выручка минус реклама'))).toBe(150000);
    expect(result.secondary.some(({ label }) => label === 'Прибыль кампании')).toBe(false);
    // These outputs do not change to account for the absent product-cost field.
    expect(200000 * 0.2 - 50000).toBe(-10000);
    expect(number(advertising({ revenue: 0, spend: 50000 }).primary.value)).toBe(-100);
    expect(number(advertising({ revenue: 50000, spend: 50000 }).primary.value)).toBe(0);
    error(advertising({ revenue: -1, spend: 50000 }));
    error(advertising({ revenue: 1, spend: 0 }));
  });

  it('AOV divides the matching cohort revenue by a whole positive order count', () => {
    expect(number(aov({ revenue: 250000, orders: 200 }).primary.value)).toBe(1250);
    expect(number(aov({ revenue: 0, orders: 200 }).primary.value)).toBe(0);
    expect(number(aov({ revenue: '2 500', orders: '2' }).primary.value)).toBe(1250);
    error(aov({ revenue: 250000, orders: 0 }));
    error(aov({ revenue: 250000, orders: 2.5 }));
    error(aov({ revenue: -1, orders: 2 }));
    error(aov({ revenue: 1, orders: Number.MAX_SAFE_INTEGER + 1 }));
  });

  it.each([
    // Independent Python datetime.date.isocalendar, weekday and tm_yday oracle.
    ['2018-12-31', 'понедельник', 365, 1, 2019],
    ['2024-12-31', 'вторник', 366, 1, 2025],
    ['2021-01-01', 'пятница', 1, 53, 2020],
    ['2023-01-01', 'воскресенье', 1, 52, 2022],
    ['2000-01-01', 'суббота', 1, 52, 1999],
    ['2015-12-31', 'четверг', 365, 53, 2015],
    ['2016-01-04', 'понедельник', 4, 1, 2016],
    ['2024-02-29', 'четверг', 60, 9, 2024],
    ['0001-01-01', 'понедельник', 1, 1, 1],
    ['0099-12-31', 'четверг', 365, 53, 99],
    ['0100-01-01', 'пятница', 1, 53, 99],
    ['9999-12-31', 'пятница', 365, 52, 9999],
    ['2011-12-30', 'пятница', 364, 52, 2011],
  ] as const)('calendar %s has a truthful numeric ISO week and week-year', (date, weekday, ordinal, week, year) => {
    const result = day({ date });
    expect(result.primary.value).toBe(weekday);
    expect(number(row(result, 'День года'))).toBe(ordinal);
    expect(number(row(result, 'Номер недели ISO'))).toBe(week);
    expect(number(row(result, 'Год недели ISO'))).toBe(year);
  });

  it('Gregorian century leap rules and date existence agree with the calendar', () => {
    error(day({ date: '1900-02-29' }));
    error(day({ date: '2100-02-29' }));
    expect(day({ date: '2000-02-29' }).primary.value).toBe('вторник');
    expect(row(day({ date: '2000-02-29' }), 'Дней в году')).toBe('366');
    error(day({ date: '2023-02-30' }));
    error(day({ date: true }));
    error(day({ date: '0000-01-01' }));
    error(day({ date: '10000-01-01' }));
    expect(row(day({ date: '2024-06-01' }), 'Выходной')).toBe('Да');
    expect(row(day({ date: '2024-06-03' }), 'Выходной')).toBe('Нет');
  });

  it('the same Gregorian date survives timezone transitions including Apia’s local skipped day', async () => {
    const bundled = await build({
      stdin: {
        contents: "import { compute } from './src/calculators/day-of-week/compute.ts'; import { validateDate } from './src/calculators/day-of-week/validateDate.ts'; console.log(JSON.stringify(['2011-12-30', '0001-01-01', '2024-03-31'].map(date => ({ result: compute({date}), valid: validateDate(date) }))));",
        resolveDir: process.cwd(),
      },
      bundle: true, platform: 'node', format: 'esm', write: false,
    });
    const outputs = ['UTC', 'Europe/Kyiv', 'America/New_York', 'Pacific/Apia'].map((TZ) =>
      JSON.parse(execFileSync(process.execPath, ['--input-type=module', '-e', bundled.outputFiles[0].text], {
        env: { ...process.env, TZ }, encoding: 'utf8',
      })) as { result: CalcResult; valid: boolean }[]);
    for (const output of outputs) {
      expect(output).toEqual(outputs[0]);
      expect(output.every(({ valid }) => valid)).toBe(true);
      expect(output[0].result.primary.value).toBe('пятница');
      expect(output[1].result.primary.value).toBe('понедельник');
      expect(output[2].result.primary.value).toBe('воскресенье');
    }
  });

  it('unit difference stays signed and relative change uses the magnitude of the original base', () => {
    const growth = difference({ from: 120, to: 150 });
    expect(number(growth.primary.value)).toBe(30);
    expect(number(row(growth, 'Относительная разница'))).toBe(25);
    const reverse = difference({ from: 150, to: 120 });
    expect(number(reverse.primary.value)).toBe(-30);
    expect(number(row(reverse, 'Относительная разница'))).toBe(-20);
    const negativeBase = difference({ from: -50, to: 50 });
    expect(number(negativeBase.primary.value)).toBe(100);
    expect(number(row(negativeBase, 'Относительная разница'))).toBe(200);
    const zero = difference({ from: 0, to: 5 });
    expect(number(zero.primary.value)).toBe(5);
    expect(row(zero, 'Относительная разница')).toBe('Не определена при нулевой базе');
    expect(row(difference({ from: -50, to: -50 }), 'Направление')).toBe('Без изменений');
  });

  it('dividend yield uses annual dividends and preserves fractional holdings', () => {
    const result = dividend({ dividend: 12, price: 200, shares: 2.5 });
    expect(number(result.primary.value)).toBe(6);
    expect(number(row(result, 'Дивиденды на пакет'))).toBe(30);
    expect(number(row(result, 'Стоимость пакета'))).toBe(500);
    expect(number(dividend({ dividend: 0, price: 200 }).primary.value)).toBe(0);
    expect(dividend({ dividend: 12, price: 200, shares: ' ' }).secondary).toHaveLength(1);
    error(dividend({ dividend: 12, price: 0 }));
    error(dividend({ dividend: -1, price: 200 }));
    error(dividend({ dividend: 12, price: 200, shares: -1 }));
  });

  it('logarithm modes respect both the domain and the inactive base field', () => {
    expect(logarithm({ mode: 'custom', value: 1024, base: 2 }).primary.value).toBe('10');
    expect(logarithm({ mode: 'custom', value: 4, base: 0.5 }).primary.value).toBe('-2');
    expect(logarithm({ mode: 'custom', value: 1, base: 0.5 }).primary.value).toBe('0');
    expect(logarithm({ mode: 'log10', value: 1000, base: false }).primary.value).toBe('3');
    expect(logarithm({ mode: 'ln', value: Math.E, base: -100 }).primary.value).toBe('1');
    expect(logarithm({ value: 100 }).primary.value).toBe('2');
    error(logarithm({ mode: 'custom', value: 4, base: 1 }));
    error(logarithm({ mode: 'custom', value: 4, base: 0 }));
    error(logarithm({ mode: 'log10', value: 0 }));
    error(logarithm({ mode: 'typo', value: 100 }));
    error(logarithm({ mode: true, value: 100 }));
  });

  it('very small logarithm inputs are not falsely written as zero', () => {
    const result = logarithm({ value: 1e-100 });
    expect(result.primary.value).toBe('-100');
    expect(row(result, 'Запись')).toContain('1,000000e-100');
    expect(row(result, 'Проверка возведением')).toContain('1,000000e-100');
    const nearOne = logarithm({ mode: 'custom', value: 2, base: 1 + Number.EPSILON });
    expect(nearOne.primary.value).not.toBe('—');
    expect(row(nearOne, 'Запись')).toContain('1,0000000000000002');
  });

  it('return rate is bounded by the cohort, with both endpoints supported', () => {
    const result = returns({ returns: 45, orders: 900 });
    expect(number(result.primary.value)).toBe(5);
    expect(number(row(result, 'Оставлено покупателями'))).toBe(95);
    expect(number(returns({ returns: 0, orders: 900 }).primary.value)).toBe(0);
    expect(number(returns({ returns: 900, orders: 900 }).primary.value)).toBe(100);
    error(returns({ returns: 901, orders: 900 }));
    error(returns({ returns: -1, orders: 900 }));
    error(returns({ returns: 1.5, orders: 900 }));
    error(returns({ returns: 0, orders: 0 }));
    error(returns({ returns: 0, orders: Number.MAX_SAFE_INTEGER + 1 }));
  });

  it('revenue per employee accepts whole headcount and makes the monthly row an annual average', () => {
    const result = employee({ revenue: 12000000, employees: 20 });
    expect(number(result.primary.value)).toBe(600000);
    expect(number(row(result, 'В месяц на сотрудника'))).toBe(50000);
    expect(number(employee({ revenue: 0, employees: 20 }).primary.value)).toBe(0);
    error(employee({ revenue: 12000000, employees: 2.5 }));
    error(employee({ revenue: 12000000, employees: 0 }));
    error(employee({ revenue: -1, employees: 20 }));
    error(employee({ revenue: 1, employees: Number.MAX_SAFE_INTEGER + 1 }));
  });

  it('ROI counts extra costs in both profit and the investment basis, without rounding costs away', () => {
    const result = roi({ received: 130000, invested: 100000, extra: 5000 });
    expect(number(result.primary.value)).toBe(23.81);
    expect(number(row(result, 'Прибыль'))).toBe(25000);
    expect(number(row(result, 'Всего вложено'))).toBe(105000);
    expect(number(roi({ received: 0, invested: 100000 }).primary.value)).toBe(-100);
    expect(number(roi({ received: 100, invested: 0, extra: 50 }).primary.value)).toBe(100);
    expect(number(roi({ received: 130000, invested: 100000, extra: '' }).primary.value)).toBe(30);
    error(roi({ received: 130000, invested: 100000, extra: -5000 }));
    error(roi({ received: -1, invested: 100000 }));
    error(roi({ received: 1, invested: -100, extra: 200 }));
    error(roi({ received: 130000, invested: 0 }));
  });

  it('shipping allocates the entire batch including optional whole-batch packaging', () => {
    const result = shipping({ shipping: 5000, units: 100, packaging: 1000 });
    expect(number(result.primary.value)).toBe(60);
    expect(number(row(result, 'Всего логистики'))).toBe(6000);
    expect(number(shipping({ shipping: 5000, units: 100 }).primary.value)).toBe(50);
    expect(number(shipping({ shipping: 5000, units: 100, packaging: ' ' }).primary.value)).toBe(50);
    expect(number(shipping({ shipping: 0, units: 100, packaging: 0 }).primary.value)).toBe(0);
    error(shipping({ shipping: 5000, units: 0 }));
    error(shipping({ shipping: 5000, units: 2.5 }));
    error(shipping({ shipping: 5000, units: 100, packaging: -10 }));
    error(shipping({ shipping: -1, units: 100 }));
    error(shipping({ shipping: 1, units: Number.MAX_SAFE_INTEGER + 1 }));
  });

  const engines: { id: string; compute: CalcFunction; valid: Parameters<CalcFunction>[0]; active: string[] }[] = [
    { id: 'ad-roi', compute: advertising, valid: { revenue: 200000, spend: 50000 }, active: ['revenue', 'spend'] },
    { id: 'aov', compute: aov, valid: { revenue: 250000, orders: 200 }, active: ['revenue', 'orders'] },
    { id: 'difference-abs-rel', compute: difference, valid: { from: 120, to: 150 }, active: ['from', 'to'] },
    { id: 'dividend-yield', compute: dividend, valid: { dividend: 12, price: 200, shares: 2.5 }, active: ['dividend', 'price', 'shares'] },
    { id: 'logarithm', compute: logarithm, valid: { mode: 'custom', value: 1024, base: 2 }, active: ['value', 'base'] },
    { id: 'return-rate', compute: returns, valid: { returns: 45, orders: 900 }, active: ['returns', 'orders'] },
    { id: 'revenue-per-employee', compute: employee, valid: { revenue: 12000000, employees: 20 }, active: ['revenue', 'employees'] },
    { id: 'roi', compute: roi, valid: { received: 130000, invested: 100000, extra: 5000 }, active: ['received', 'invested', 'extra'] },
    { id: 'shipping-per-unit', compute: shipping, valid: { shipping: 5000, units: 100, packaging: 1000 }, active: ['shipping', 'units', 'packaging'] },
  ];
  it.each(engines)('$id rejects malformed, boolean and nonfinite active inputs rather than returning plausible numbers', ({ compute, valid, active }) => {
    for (const key of active) for (const malformed of [true, false, NaN, Infinity, -Infinity, 'garbage', {}, [], { toString: () => '1' }]) {
      error(compute({ ...valid, [key]: malformed } as unknown as Parameters<CalcFunction>[0]));
    }
    for (const key of active.filter((name) => !['shares', 'extra', 'packaging'].includes(name))) {
      const missing = { ...valid }; delete missing[key]; error(compute(missing));
      error(compute({ ...valid, [key]: '' }));
    }
  });

  it('unrepresentable intermediate results produce a precision error, not a dash inside a plausible result', () => {
    error(advertising({ revenue: 1e308, spend: 1 }));
    error(difference({ from: -1e308, to: 1e308 }));
    error(dividend({ dividend: 12, price: 200, shares: 1e308 }));
    error(roi({ received: 1e308, invested: 1e308, extra: 1e308 }));
    error(shipping({ shipping: 1e308, units: 1, packaging: 1e308 }));
    error(logarithm({ value: Number.MAX_VALUE }));
  });
});
