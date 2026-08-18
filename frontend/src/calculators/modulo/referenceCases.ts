import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания выведены вручную по выбранному соглашению о знаке:
//   q = trunc(a / b), r = a − b·q, знак остатка совпадает со знаком делимого.
//   17 = 5·3 + 2 · −17 = 5·(−3) + (−2) · 17 = (−5)·(−3) + 2 · 0 = 7·0 + 0
export const moduloReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 17 и 5 дают остаток 2 и частное 3',
    inputs: { a: 17, b: 5 },
    expectPrimary: '2',
    expectSecondary: [{ label: 'Частное', value: '3' }],
  },
  {
    name: 'отрицательное делимое: остаток берёт знак делимого',
    inputs: { a: -17, b: 5 },
    expectPrimary: '-2',
    expectSecondary: [{ label: 'Частное', value: '-3' }],
  },
  {
    name: 'отрицательный делитель: остаток остаётся положительным',
    inputs: { a: 17, b: -5 },
    expectPrimary: '2',
    expectSecondary: [{ label: 'Частное', value: '-3' }],
  },
  {
    name: 'граница: ноль делится нацело на любое число',
    inputs: { a: 0, b: 7 },
    expectPrimary: '0',
    expectSecondary: [{ label: 'Делится нацело', value: 'Да' }],
  },
  {
    name: 'кратное: остаток нулевой',
    inputs: { a: 100, b: 25 },
    expectPrimary: '0',
    expectSecondary: [{ label: 'Частное', value: '4' }],
  },
  {
    name: 'недопустимо: делитель ноль',
    inputs: { a: 17, b: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: дробное делимое',
    inputs: { a: 17.5, b: 5 },
    expectPrimary: '—',
  },
];
