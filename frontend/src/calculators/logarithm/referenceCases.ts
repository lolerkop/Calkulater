import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения известны из определения степени, а не получены прогоном:
//   10³ = 1000 → log₁₀(1000) = 3 · e¹ = e → ln(e) = 1
//   2¹⁰ = 1024 → log₂(1024) = 10 · 2⁻¹ = 0,5 → log₂(0,5) = −1
export const logarithmReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'десятичный: log₁₀(1000) = 3',
    inputs: { mode: 'log10', value: 1000 },
    expectPrimary: '3',
  },
  {
    name: 'натуральный: ln(e) = 1',
    inputs: { mode: 'ln', value: Math.E },
    expectPrimary: '1',
  },
  {
    name: 'по основанию 2: log₂(1024) = 10',
    inputs: { mode: 'custom', value: 1024, base: 2 },
    expectPrimary: '10',
  },
  {
    name: 'отрицательный результат: log₂(0,5) = −1',
    inputs: { mode: 'custom', value: 0.5, base: 2 },
    expectPrimary: '-1',
  },
  {
    name: 'граница: логарифм единицы равен нулю при любом основании',
    inputs: { mode: 'custom', value: 1, base: 7 },
    expectPrimary: '0',
  },
  {
    name: 'недопустимо: ноль вне области определения',
    inputs: { mode: 'log10', value: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: отрицательный аргумент',
    inputs: { mode: 'ln', value: -5 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: основание равно единице',
    inputs: { mode: 'custom', value: 5, base: 1 },
    expectPrimary: '—',
  },
];
