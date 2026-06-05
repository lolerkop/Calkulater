import { describe, it, expect } from 'vitest';
import { calcVat } from '../src/lib/calculators/vat';

// Intl.NumberFormat использует NBSP/NNBSP — нормализуем до обычных пробелов
const norm = (s: string) => s.replace(/\s+/g, ' ');

describe('vat: выделить НДС из суммы', () => {
  it('из 120 000 ₽ при ставке 20% выделяет 20 000 ₽', () => {
    const r = calcVat({ amount: 120_000, rate: 20, operation: 'extract' });
    expect(norm(r.primary.value)).toContain('20 000');
    const net = r.secondary.find((s) => s.label === 'Сумма без НДС');
    const gross = r.secondary.find((s) => s.label === 'Сумма с НДС');
    expect(norm(net?.value || '')).toContain('100 000');
    expect(norm(gross?.value || '')).toContain('120 000');
  });

  it('из 110 000 ₽ при ставке 10% выделяет 10 000 ₽', () => {
    const r = calcVat({ amount: 110_000, rate: 10, operation: 'extract' });
    expect(norm(r.primary.value)).toContain('10 000');
  });

  it('при ставке 0% НДС равен нулю', () => {
    const r = calcVat({ amount: 100_000, rate: 0, operation: 'extract' });
    expect(r.primary.value).toContain('0');
  });
});

describe('vat: начислить НДС сверху', () => {
  it('к 100 000 ₽ при ставке 20% добавляет 20 000 ₽', () => {
    const r = calcVat({ amount: 100_000, rate: 20, operation: 'add' });
    expect(norm(r.primary.value)).toContain('20 000');
    const gross = r.secondary.find((s) => s.label === 'Сумма с НДС');
    expect(norm(gross?.value || '')).toContain('120 000');
  });

  it('к 100 000 ₽ при ставке 10% добавляет 10 000 ₽', () => {
    const r = calcVat({ amount: 100_000, rate: 10, operation: 'add' });
    expect(norm(r.primary.value)).toContain('10 000');
  });
});

describe('vat: ошибки ввода', () => {
  it('нулевая сумма возвращает прочерк', () => {
    const r = calcVat({ amount: 0, rate: 20 });
    expect(r.primary.value).toBe('—');
  });

  it('отрицательная ставка возвращает прочерк', () => {
    const r = calcVat({ amount: 1000, rate: -5 });
    expect(r.primary.value).toBe('—');
  });
});
