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
