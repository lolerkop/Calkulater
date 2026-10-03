import { describe, it, expect } from 'vitest';
import { calcDeposit } from '../src/lib/calculators/deposit';

describe('deposit: calcDeposit', () => {
  it('считает депозит с ежемесячной капитализацией', () => {
    const r = calcDeposit({
      amount: 100_000,
      months: 12,
      rate: 12,
      capitalization: 'yes',
      capPeriod: 'month',
      topUp: 0,
    });
    expect(r.primary.label).toBe('Итоговая сумма');
    expect(r.primary.value).not.toBe('—');
    // (1 + 0.12/12)^12 ≈ 1.12683, итого ≈ 112 683
    const profitRow = r.secondary.find((s) => s.label === 'Начисленные проценты');
    expect(profitRow).toBeDefined();
  });

  it('без капитализации проценты копятся отдельно', () => {
    const r = calcDeposit({
      amount: 100_000,
      months: 12,
      rate: 12,
      capitalization: 'no',
      topUp: 0,
    });
    // Простые проценты: 100000 * 0.12 = 12000
    const profitRow = r.secondary.find((s) => s.label === 'Начисленные проценты');
    expect(profitRow?.value).toMatch(/12[\s\u00A0\u202F]?000/);
  });

  it('учитывает пополнения', () => {
    const r = calcDeposit({
      amount: 10_000,
      months: 6,
      rate: 10,
      capitalization: 'yes',
      capPeriod: 'month',
      topUp: 1000,
    });
    const topUpRow = r.secondary.find((s) => s.label === 'Сумма пополнений');
    expect(topUpRow?.value).toMatch(/6[\s\u00A0\u202F]?000/);
  });

  it('пополнение в начале месяца даёт больше процентов, чем в конце', () => {
    const beginning = calcDeposit({ amount: 10_000, months: 12, rate: 12, capitalization: 'yes', capPeriod: 'month', topUp: 1_000, topUpTiming: 'beginning' });
    const end = calcDeposit({ amount: 10_000, months: 12, rate: 12, capitalization: 'yes', capPeriod: 'month', topUp: 1_000, topUpTiming: 'end' });
    const money = (value: string) => Number(value.replace(/[^\d,.-]/g, '').replace(',', '.'));
    expect(money(beginning.primary.value)).toBeGreaterThan(money(end.primary.value));
  });

  it('возвращает ошибку при некорректных входных данных', () => {
    const r = calcDeposit({ amount: -1, months: 0, rate: 0 });
    expect(r.primary.value).toBe('—');
  });

  const money = (value: string | undefined) => Number(value?.replace(/[^\d,.-]/g, '').replace(',', '.'));

  it.each(['month', 'quarter', 'year'])('капитализация %s совпадает с закрытой формулой без пополнений', (capPeriod) => {
    const periods = capPeriod === 'month' ? 12 : capPeriod === 'quarter' ? 4 : 1;
    const result = calcDeposit({ amount: 100_000, months: 24, rate: 12, capitalization: 'yes', capPeriod, topUp: 0 });
    const expected = 100_000 * (1 + 0.12 / periods) ** (2 * periods);
    expect(money(result.primary.value)).toBe(Math.round(expected));
    expect(result.secondary.find((row) => row.label === 'Эффективная годовая ставка')?.value)
      .toBe(`${((1 + 0.12 / periods) ** periods * 100 - 100).toFixed(2).replace('.', ',')}%`);
  });

  it('незавершённый квартал выплачивает начисленные, ещё не капитализированные проценты', () => {
    const result = calcDeposit({ amount: 1_000, months: 4, rate: 12, capitalization: 'yes', capPeriod: 'quarter', topUp: 100, topUpTiming: 'end' });
    // First quarter: 10 + 11 + 12 = 33 interest. Month 4: 1333 * 1% = 13.33.
    expect(money(result.primary.value)).toBe(1_446);
    expect(money(result.secondary.find((row) => row.label === 'Начисленные проценты')?.value)).toBe(46);
    expect(money(result.table?.rows.at(-1)?.[2])).toBe(1_446);
  });

  it('без капитализации конец/начало пополнения проверяются арифметической прогрессией', () => {
    const inputs = { amount: 1_000, months: 12, rate: 12, capitalization: 'no', topUp: 100 };
    const end = calcDeposit({ ...inputs, topUpTiming: 'end' });
    const beginning = calcDeposit({ ...inputs, topUpTiming: 'beginning' });
    // End: 120 + (0+1+...+11)*1 = 186. Beginning: 120 + (1+...+12)*1 = 198.
    expect(money(end.primary.value)).toBe(2_386);
    expect(money(beginning.primary.value)).toBe(2_398);
  });

  it('нулевая ставка сохраняет взносы и нулевой доход', () => {
    const result = calcDeposit({ amount: 0, months: 6, rate: 0, capitalization: 'yes', capPeriod: 'year', topUp: 100 });
    expect(money(result.primary.value)).toBe(600);
    expect(money(result.secondary.find((row) => row.label === 'Начисленные проценты')?.value)).toBe(0);
  });

  it.each([
    { amount: NaN }, { rate: Infinity }, { topUp: -1 }, { months: 1.5 }, { months: 1201 },
    { capitalization: 'unknown' }, { capPeriod: 'day' }, { topUpTiming: 'unknown' },
    { amount: 1e308, rate: 1000 },
  ])('недопустимый вход возвращает ошибку: %j', (override) => {
    const result = calcDeposit({ amount: 1_000, months: 12, rate: 12, capitalization: 'yes', ...override });
    expect(result.primary.value).toBe('—');
    expect(result.table).toBeUndefined();
  });

  it.each(['amount', 'months', 'rate', 'topUp'])('числовое поле %s не принимает boolean как 0 или 1', (field) => {
    for (const value of [true, false]) {
      const result = calcDeposit({ amount: 1000, months: 12, rate: 12, [field]: value });
      expect(result.primary.value).toBe('—');
      expect(result.table).toBeUndefined();
    }
  });
});
