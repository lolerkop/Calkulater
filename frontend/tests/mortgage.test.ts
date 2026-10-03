import { describe, it, expect } from 'vitest';
import { calcMortgage } from '../src/lib/calculators/mortgage';

describe('mortgage: calcMortgage', () => {
  it('считает аннуитетный платёж по ипотеке', () => {
    // 5 000 000 - 1 000 000 = 4 000 000 кредит, 20 лет, 10% годовых
    const r = calcMortgage({ price: 5_000_000, downPayment: 1_000_000, years: 20, rate: 10, type: 'annuity' });
    expect(r.primary.label).toBe('Ежемесячный платеж');
    expect(r.primary.value).not.toBe('—');
    const loan = r.secondary.find((s) => s.label === 'Сумма кредита')?.value;
    expect(loan).toMatch(/4[\s\u00A0\u202F]?000[\s\u00A0\u202F]?000/);
  });

  it('первоначальный взнос больше или равен цене → ошибка', () => {
    const r = calcMortgage({ price: 1_000_000, downPayment: 1_000_000, years: 10, rate: 8 });
    expect(r.primary.value).toBe('—');
  });

  it('дифференцированный платёж содержит note', () => {
    const r = calcMortgage({ price: 3_000_000, downPayment: 500_000, years: 10, rate: 9, type: 'differentiated' });
    expect(r.note).toBeDefined();
  });

  it('принимает первоначальный взнос в процентах и учитывает досрочную доплату', () => {
    const r = calcMortgage({
      price: 5_000_000,
      downPaymentMode: 'percent',
      downPaymentPct: 20,
      years: 20,
      rate: 10,
      type: 'annuity',
      extraPayment: 10_000,
    });
    expect(r.secondary.find((s) => s.label === 'Сумма кредита')?.value).toMatch(/4[\s\u00A0\u202F]?000[\s\u00A0\u202F]?000/);
    expect(r.secondary.find((s) => s.label === 'Первоначальный взнос')?.value).toContain('20,0%');
    expect(r.secondary.some((s) => s.label === 'Сокращение срока')).toBe(true);
  });

  const money = (value: string | undefined) => Number(value?.replace(/[^\d,.-]/g, '').replace(',', '.'));
  const item = (result: ReturnType<typeof calcMortgage>, label: string) => money(result.secondary.find((row) => row.label === label)?.value);

  it('страховка учитывается в расходах только до фактического погашения и не меняет график долга', () => {
    const inputs = { price: 150_000, downPayment: 30_000, years: 1, rate: 0, extraPayment: 10_000 };
    const plain = calcMortgage(inputs);
    const insured = calcMortgage({ ...inputs, monthlyInsurance: 500 });
    expect(insured.table).toEqual(plain.table);
    expect(insured.secondary.find((row) => row.label === 'Срок')?.value).toBe('6 мес.');
    expect(item(insured, 'Страховка и расходы за срок')).toBe(3_000);
    expect(item(insured, 'Расход в месяц со страховкой')).toBe(20_500);
    expect(item(insured, 'Переплата')).toBe(0);
    expect(item(insured, 'Общая стоимость с взносом')).toBe(153_000);
  });

  it('дробный срок в годах сохраняет число целых месяцев без округления до года', () => {
    const result = calcMortgage({ price: 180_000, downPayment: 0, years: 1.5, rate: 0 });
    expect(money(result.primary.value)).toBe(10_000);
    expect(result.secondary.find((row) => row.label === 'Срок')?.value).toBe('18 мес.');
  });

  it('дифференцированные проценты совпадают с независимой формулой', () => {
    const result = calcMortgage({ price: 150_000, downPayment: 30_000, years: 1, rate: 12, type: 'differentiated' });
    expect(money(result.primary.value)).toBe(11_200);
    expect(item(result, 'Переплата')).toBe(7_800);
    expect(item(result, 'Общая стоимость с взносом')).toBe(157_800);
  });

  it('не выдаёт график с нулевым погашением из-за предела числовой точности', () => {
    const result = calcMortgage({ price: 150_000, downPayment: 30_000, years: 100, rate: 100 });
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].value).toContain('точности');
  });

  it.each([
    { price: Infinity }, { rate: NaN }, { downPayment: -1 }, { extraPayment: -1 },
    { monthlyInsurance: -1 }, { downPaymentMode: 'percent', downPaymentPct: -20 },
    { downPaymentMode: 'percent', downPaymentPct: 100 }, { type: 'unknown' },
    { downPaymentMode: 'unknown' }, { years: 1.1 }, { years: 101 },
  ])('недопустимый вход возвращает ошибку: %j', (override) => {
    const result = calcMortgage({ price: 150_000, downPayment: 30_000, years: 1, rate: 12, ...override });
    expect(result.primary.value).toBe('—');
    expect(result.table).toBeUndefined();
  });

  it.each(['price', 'years', 'rate', 'downPayment', 'extraPayment', 'monthlyInsurance'])('числовое поле %s не принимает boolean как 0 или 1', (field) => {
    for (const value of [true, false]) {
      const result = calcMortgage({ price: 150000, downPayment: 30000, years: 1, rate: 12, [field]: value });
      expect(result.primary.value).toBe('—');
      expect(result.table).toBeUndefined();
    }
  });

  it('процент взноса не принимает boolean, неактивная сумма взноса не меняет процентный режим', () => {
    const inputs = { price: 150000, downPaymentMode: 'percent', downPaymentPct: 20, years: 1, rate: 0 };
    expect(calcMortgage({ ...inputs, downPaymentPct: true }).primary.value).toBe('—');
    expect(calcMortgage({ ...inputs, downPaymentPct: false }).primary.value).toBe('—');
    expect(calcMortgage({ ...inputs, downPayment: true })).toEqual(calcMortgage(inputs));
  });
});
