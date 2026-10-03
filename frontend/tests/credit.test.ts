import { describe, it, expect } from 'vitest';
import { calcCredit, creditAnnuityPayment } from '../src/lib/calculators/credit';

describe('credit: creditAnnuityPayment', () => {
  it('корректно считает аннуитетный платёж', () => {
    // 1 000 000 ₽ на 12 мес. под 12% годовых ≈ 88 848,79
    const payment = creditAnnuityPayment(1_000_000, 12, 12);
    expect(payment).toBeCloseTo(88848.79, 1);
  });

  it('при нулевой ставке делит сумму на срок', () => {
    expect(creditAnnuityPayment(120_000, 12, 0)).toBeCloseTo(10_000, 5);
  });

  it('не теряет точность при почти нулевой положительной ставке', () => {
    expect(creditAnnuityPayment(120_000, 12, 1e-14)).toBeCloseTo(10_000, 8);
  });
});

describe('credit: calcCredit', () => {
  it('возвращает результат для аннуитетного кредита', () => {
    const r = calcCredit({ amount: 1_000_000, term: 1, termUnit: 'years', rate: 12, type: 'annuity' });
    expect(r.primary.label).toBe('Ежемесячный платеж');
    expect(r.primary.value).not.toBe('—');
    // Срок в секции
    expect(r.secondary.some((s) => s.label === 'Срок' && s.value.includes('12'))).toBe(true);
  });

  it('срок в месяцах используется без умножения на 12', () => {
    const r = calcCredit({ amount: 100_000, term: 6, termUnit: 'months', rate: 10, type: 'annuity' });
    expect(r.secondary.find((s) => s.label === 'Срок')?.value).toBe('6 мес.');
  });

  it('возвращает ошибку при отрицательных входных данных', () => {
    const r = calcCredit({ amount: 0, term: 0, rate: 0 });
    expect(r.primary.value).toBe('—');
  });

  it('дифференцированный платёж добавляет note', () => {
    const r = calcCredit({ amount: 500_000, term: 12, termUnit: 'months', rate: 10, type: 'differentiated' });
    expect(r.note).toBeDefined();
    expect(r.note).toContain('первого');
  });

  it('ежемесячная доплата сокращает срок и график заканчивается нулевым остатком', () => {
    const r = calcCredit({
      amount: 500_000,
      term: 5,
      termUnit: 'years',
      rate: 14,
      type: 'annuity',
      extraPayment: 5_000,
    });
    const term = r.secondary.find((s) => s.label === 'Срок')?.value;
    expect(Number(term?.match(/\d+/)?.[0])).toBeLessThan(60);
    expect(r.secondary.some((s) => s.label === 'Сокращение срока')).toBe(true);
    expect(r.table?.rows.at(-1)?.at(-1)).toMatch(/^0/);
  });

  const money = (value: string | undefined) => Number(value?.replace(/[^\d,.-]/g, '').replace(',', '.'));
  const item = (result: ReturnType<typeof calcCredit>, label: string) => money(result.secondary.find((row) => row.label === label)?.value);

  it('разовая комиссия добавляется ровно один раз, не финансируется и не меняет проценты', () => {
    const inputs = { amount: 120_000, term: 12, termUnit: 'months', rate: 0, type: 'annuity' };
    const plain = calcCredit(inputs);
    const withFee = calcCredit({ ...inputs, oneTimeFee: 2_500 });
    expect(money(withFee.primary.value)).toBe(10_000);
    expect(withFee.table).toEqual(plain.table);
    expect(item(withFee, 'Общая сумма выплат')).toBe(122_500);
    expect(item(withFee, 'Переплата')).toBe(2_500);
    expect(item(withFee, 'Сумма процентов')).toBe(0);
  });

  it('дифференцированный график совпадает с независимой суммой арифметической прогрессии', () => {
    const result = calcCredit({ amount: 120_000, term: 12, termUnit: 'months', rate: 12, type: 'differentiated', oneTimeFee: 300 });
    // Principal balances: 120000, 110000, ..., 10000. 1% of their sum is 7800.
    expect(money(result.primary.value)).toBe(11_200);
    expect(item(result, 'Последний платеж')).toBe(10_100);
    expect(item(result, 'Сумма процентов')).toBe(7_800);
    expect(item(result, 'Общая сумма выплат')).toBe(128_100);
  });

  it('окончательное погашение с доплатой ограничено фактическим остатком', () => {
    const result = calcCredit({ amount: 1_000, term: 12, termUnit: 'months', rate: 12, extraPayment: 2_000 });
    expect(result.secondary.find((row) => row.label === 'Срок')?.value).toBe('1 мес.');
    expect(money(result.table?.rows[0]?.[1])).toBe(1_010);
    expect(item(result, 'Сумма процентов')).toBe(10);
    expect(money(result.table?.rows[0]?.[4])).toBe(0);
  });

  it('не списывает непогашенный остаток меньше одной копейки', () => {
    const result = calcCredit({ amount: 0.02, term: 12, termUnit: 'months', rate: 0 });
    expect(result.secondary.find((row) => row.label === 'Срок')?.value).toBe('12 мес.');
    expect(money(result.table?.rows.at(-1)?.[4])).toBe(0);
    expect(item(result, 'Общая сумма выплат')).toBe(0.02);
  });

  it('не выдаёт график с нулевым погашением из-за предела точности длинного дорогого кредита', () => {
    const result = calcCredit({ amount: 100_000, term: 100, termUnit: 'years', rate: 100 });
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].value).toContain('точности');
  });

  it.each([
    { rate: Infinity }, { amount: NaN }, { oneTimeFee: -1 }, { extraPayment: -1 },
    { type: 'unknown' }, { termUnit: 'weeks' }, { term: 1.5, termUnit: 'months' },
    { term: 1201, termUnit: 'months' },
  ])('недопустимый вход не превращается в правдоподобный расчёт: %j', (override) => {
    const result = calcCredit({ amount: 120_000, term: 12, termUnit: 'months', rate: 12, ...override });
    expect(result.primary.value).toBe('—');
    expect(result.table).toBeUndefined();
  });

  it.each(['amount', 'term', 'rate', 'extraPayment', 'oneTimeFee'])('числовое поле %s не принимает boolean как 0 или 1', (field) => {
    for (const value of [true, false]) {
      const result = calcCredit({ amount: 120000, term: 12, termUnit: 'months', rate: 12, [field]: value });
      expect(result.primary.value).toBe('—');
      expect(result.table).toBeUndefined();
    }
  });
});
