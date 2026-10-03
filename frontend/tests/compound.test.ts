import { describe, it, expect } from 'vitest';
import { calcCompound } from '../src/lib/calculators/compound';

describe('compound: calcCompound', () => {
  it('считает капитал при ежемесячной капитализации', () => {
    const r = calcCompound({ principal: 100_000, rate: 12, years: 1, topUp: 0, frequency: 'month' });
    expect(r.primary.value).not.toBe('—');
    expect(r.table?.rows.length).toBe(1);
  });

  it('таблица содержит строку на каждый год (но не более 30)', () => {
    const r = calcCompound({ principal: 1000, rate: 5, years: 5, topUp: 0, frequency: 'month' });
    expect(r.table?.rows.length).toBe(5);
  });

  it('пополнения увеличивают внесённую сумму', () => {
    const r = calcCompound({ principal: 10_000, rate: 5, years: 1, topUp: 1000, frequency: 'month' });
    const invested = r.secondary.find((s) => s.label === 'Внесённая сумма')?.value;
    // 10 000 + 12 * 1000 = 22 000
    expect(invested).toMatch(/22[\s\u00A0\u202F]?000/);
  });

  it('разделяет частоту пополнений и капитализации', () => {
    const monthly = calcCompound({ principal: 100_000, rate: 12, years: 2, topUp: 0, frequency: 'year', compounding: 'month' });
    const yearly = calcCompound({ principal: 100_000, rate: 12, years: 2, topUp: 0, frequency: 'month', compounding: 'year' });
    const money = (value: string) => Number(value.replace(/[^\d,.-]/g, '').replace(',', '.'));
    expect(money(monthly.primary.value)).toBeGreaterThan(money(yearly.primary.value));
  });

  it('возвращает ошибку при отрицательных входных данных', () => {
    const r = calcCompound({ principal: -1, rate: 0, years: 0 });
    expect(r.primary.value).toBe('—');
  });

  const money = (value: string | undefined) => Number(value?.replace(/[^\d,.-]/g, '').replace(',', '.'));

  it.each(['month', 'quarter', 'year'])('капитализация %s совпадает с закрытой формулой без пополнений', (compounding) => {
    const periods = compounding === 'month' ? 12 : compounding === 'quarter' ? 4 : 1;
    const result = calcCompound({ principal: 1_000, rate: 12, years: 2, topUp: 0, compounding });
    expect(money(result.primary.value)).toBe(Math.round(1_000 * (1 + 0.12 / periods) ** (2 * periods)));
  });

  it('месячные взносы при годовой капитализации получают проценты за фактические месяцы', () => {
    const result = calcCompound({ principal: 1_000, rate: 12, years: 1, topUp: 100, frequency: 'month', compounding: 'year' });
    // Annual interest on initial balance: 120. Contributions earn 1% for 11,10,...,0 months: 66.
    expect(money(result.primary.value)).toBe(2_386);
    expect(money(result.secondary.find((row) => row.label === 'Прибыль')?.value)).toBe(186);
  });

  it('квартальные взносы при годовой капитализации не получают доход до своего внесения', () => {
    const result = calcCompound({ principal: 1_000, rate: 12, years: 1, topUp: 100, frequency: 'quarter', compounding: 'year' });
    // 120 + 100*0.01*(9+6+3+0) = 138.
    expect(money(result.primary.value)).toBe(1_538);
  });

  it('совпадающие месячные периоды дают будущую стоимость обычного аннуитета взносов', () => {
    const result = calcCompound({ principal: 1_000, rate: 12, years: 2, topUp: 100, frequency: 'month', compounding: 'month' });
    const factor = 1.01 ** 24;
    const expected = 1_000 * factor + 100 * (factor - 1) / 0.01;
    expect(money(result.primary.value)).toBe(Math.round(expected));
    expect(money(result.table?.rows.at(-1)?.[2])).toBe(Math.round(expected));
  });

  it('дробный год учитывается до целого месяца и выплачивает неполный период капитализации', () => {
    const result = calcCompound({ principal: 1_000, rate: 12, years: 1.5, topUp: 0, compounding: 'year' });
    expect(money(result.primary.value)).toBe(1_187); // 1120 + 1120*0.01*6 = 1187.2.
    expect(result.secondary.find((row) => row.label === 'Срок')?.value).toBe('18 мес.');
    expect(result.table?.rows).toHaveLength(2);
    expect(money(result.table?.rows.at(-1)?.[0])).toBe(1.5);
    expect(money(result.table?.rows.at(-1)?.[2])).toBe(1_187);
  });

  it('длинная таблица сохраняет итоговый год и сообщает о сокращении', () => {
    const result = calcCompound({ principal: 1_000, rate: 0, years: 40, topUp: 100, frequency: 'year' });
    expect(result.table?.rows).toHaveLength(31);
    expect(result.table?.rows.at(-1)?.[0]).toBe('40');
    expect(money(result.table?.rows.at(-1)?.[2])).toBe(5_000);
    expect(result.table?.note).toBeDefined();
  });

  it.each([
    { principal: NaN }, { rate: Infinity }, { topUp: -1 }, { years: 1.1 }, { years: 1001 },
    { frequency: 'day' }, { compounding: 'day' }, { principal: 1e308, rate: 1000 },
  ])('недопустимый вход возвращает ошибку: %j', (override) => {
    const result = calcCompound({ principal: 1_000, rate: 12, years: 1, topUp: 100, ...override });
    expect(result.primary.value).toBe('—');
    expect(result.table).toBeUndefined();
  });

  it.each(['principal', 'years', 'rate', 'topUp'])('числовое поле %s не принимает boolean как 0 или 1', (field) => {
    for (const value of [true, false]) {
      const result = calcCompound({ principal: 1000, years: 1, rate: 12, [field]: value });
      expect(result.primary.value).toBe('—');
      expect(result.table).toBeUndefined();
    }
  });
});
