import { describe, it, expect } from 'vitest';
import { calcDiscount } from '../src/lib/calculators/discount';

describe('discount: скидка в процентах', () => {
  it('1000 ₽ со скидкой 20% = 800 ₽, экономия 200 ₽', () => {
    const r = calcDiscount({ price: 1000, mode: 'byPercent', discountPct: 20 });
    expect(r.primary.value).toContain('800');
    const saved = r.secondary.find((s) => s.label === 'Размер скидки');
    const pct = r.secondary.find((s) => s.label === 'Процент скидки');
    expect(saved?.value).toContain('200');
    expect(pct?.value).toMatch(/20[.,]00%/);
  });

  it('скидка ограничена сверху значением 100%', () => {
    const r = calcDiscount({ price: 500, mode: 'byPercent', discountPct: 150 });
    expect(r.primary.value).toContain('0');
    const pct = r.secondary.find((s) => s.label === 'Процент скидки');
    expect(pct?.value).toMatch(/100[.,]00%/);
  });

  it('отрицательная скидка трактуется как ноль', () => {
    const r = calcDiscount({ price: 500, mode: 'byPercent', discountPct: -10 });
    expect(r.primary.value).toContain('500');
  });
});

describe('discount: скидка фиксированной суммой', () => {
  it('1000 ₽ − скидка 250 ₽ = 750 ₽, что соответствует 25%', () => {
    const r = calcDiscount({ price: 1000, mode: 'byAmount', discountAmt: 250 });
    expect(r.primary.value).toContain('750');
    const pct = r.secondary.find((s) => s.label === 'Процент скидки');
    expect(pct?.value).toMatch(/25[.,]00%/);
  });

  it('скидка больше цены не уводит итог в минус', () => {
    const r = calcDiscount({ price: 500, mode: 'byAmount', discountAmt: 1000 });
    expect(r.primary.value).toContain('0');
    const saved = r.secondary.find((s) => s.label === 'Размер скидки');
    expect(saved?.value).toContain('500');
  });
});

describe('discount: ошибки ввода', () => {
  it('нулевая цена возвращает прочерк', () => {
    const r = calcDiscount({ price: 0, mode: 'byPercent', discountPct: 10 });
    expect(r.primary.value).toBe('—');
  });
});

describe('discount: последовательные скидки и количество', () => {
  it('считает 20% + 10% как 28% и умножает итог на количество', () => {
    const r = calcDiscount({ price: 1000, mode: 'byPercent', discountPct: 20, secondDiscountPct: 10, quantity: 3 });
    expect(r.primary.value).toContain('720');
    expect(r.secondary.find((s) => s.label === 'Процент скидки')?.value).toMatch(/28[.,]00%/);
    expect(r.secondary.find((s) => s.label === 'Итого за товары')?.value).toMatch(/2[\s\u00A0\u202F]?160/);
  });
});

describe('discount: validated cash and quantity contract', () => {
  it('rejects a negative fixed discount instead of increasing price and showing negative savings', () => {
    const r = calcDiscount({ price: 500, mode: 'byAmount', discountAmt: -10 });
    expect(r.primary.value).toBe('—');
    expect(r.secondary[0]).toEqual({ label: 'Проверьте данные', value: 'Сумма скидки не может быть отрицательной.', accent: 'red' });
  });
  it.each(['price', 'discountPct', 'secondDiscountPct', 'quantity'])('rejects malformed active %s', (field) => {
    for (const invalid of [true, false, 'abc', '', NaN, Infinity, -Infinity, { toString: () => '1' }]) {
      expect(calcDiscount({ price: 1000, mode: 'byPercent', discountPct: 20, [field]: invalid } as never).primary.value).toBe('—');
    }
  });
  it('validates the active fixed amount but ignores the hidden alternate discount', () => {
    expect(calcDiscount({ price: 1000, mode: 'byAmount', discountAmt: true } as never).primary.value).toBe('—');
    expect(calcDiscount({ price: 1000, mode: 'byAmount', discountAmt: 250, discountPct: 'invalid' }).primary.value).toBe('750 ₽');
    expect(calcDiscount({ price: 1000, mode: 'byPercent', discountPct: 20, discountAmt: true } as never).primary.value).toBe('800 ₽');
  });
  it.each([0, -1, 1.4, 1.5, Number.MAX_SAFE_INTEGER + 1])('rejects quantity %s without silent rounding', (quantity) => {
    const r = calcDiscount({ price: 1000, discountPct: 20, quantity });
    expect(r.primary.value).toBe('—');
    expect(r.secondary[0].value).toBe('Количество должно быть положительным целым числом.');
  });
  it('preserves the bounded discount convention while making adjustments visible', () => {
    for (const discountPct of [-10, 150]) {
      const r = calcDiscount({ price: 500, discountPct });
      expect(r.secondary.find((row) => row.label === 'Проверьте данные')?.value).toBe('Процентная скидка ограничена диапазоном от 0 до 100%.');
    }
    expect(calcDiscount({ price: 500, mode: 'byAmount', discountAmt: 1000 }).secondary.find((row) => row.label === 'Проверьте данные')?.value).toBe('Скидка ограничена исходной ценой.');
    expect(calcDiscount({ price: 500, discountPct: 20, secondDiscountPct: -10 }).primary.value).toBe('400 ₽');
  });
  it('applies a percentage second discount after a fixed first discount and keeps savings per unit', () => {
    const r = calcDiscount({ price: 1000, mode: 'byAmount', discountAmt: 250, secondDiscountPct: 10, quantity: 3 });
    expect(r.primary.value).toBe('675 ₽');
    expect(r.secondary.find((row) => row.label === 'Размер скидки')?.value).toBe('325 ₽');
    expect(r.secondary.find((row) => row.label === 'Процент скидки')?.value).toBe('32,50%');
    expect(r.secondary.find((row) => row.label === 'Итого за товары')?.value).toMatch(/2[\s\u00A0\u202F]?025 ₽/);
  });
  it('rejects unknown modes and numerical overflow with a reason', () => {
    expect(calcDiscount({ price: 500, mode: 'zzz', discountPct: 20 }).primary.value).toBe('—');
    expect(calcDiscount({ price: 500, mode: { toString: () => 'byPercent' }, discountPct: 20 } as never).primary.value).toBe('—');
    expect(calcDiscount({ price: 1e308, discountPct: 10, quantity: 10 }).secondary[0].value).toBe('Результат выходит за пределы числовой точности.');
  });
});
