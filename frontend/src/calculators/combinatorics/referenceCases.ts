import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из определений вручную:
//   C(10,3) = 10·9·8 / (3·2·1) = 120 · P(10,3) = 10·9·8 = 720
//   C с повторениями (10,3) = C(12,3) = 12·11·10 / 6 = 220 · 10³ = 1000
//   C(52,5) = 2 598 960 — число покерных рук
export const combinatoricsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'сочетания C(10,3) = 120',
    inputs: { mode: 'combinations', n: 10, k: 3 },
    expectPrimary: '120',
    expectSecondary: [{ label: 'Размещений из тех же чисел', value: '720' }],
  },
  {
    name: 'размещения P(10,3) = 720',
    inputs: { mode: 'permutations', n: 10, k: 3 },
    expectPrimary: '720',
  },
  {
    name: 'сочетания с повторениями (10,3) сводятся к C(12,3) = 220',
    inputs: { mode: 'combinations', n: 10, k: 3, repetition: 'yes' },
    expectPrimary: '220',
  },
  {
    name: 'размещения с повторениями 10³ = 1000',
    inputs: { mode: 'permutations', n: 10, k: 3, repetition: 'yes' },
    expectPrimary: '1 000',
  },
  {
    name: 'граница: пустая выборка — ровно один способ',
    inputs: { mode: 'combinations', n: 7, k: 0 },
    expectPrimary: '1',
  },
  {
    name: 'покерная рука: C(52,5) = 2 598 960',
    inputs: { mode: 'combinations', n: 52, k: 5 },
    expectPrimary: '2 598 960',
  },
  {
    name: 'точность: C(60,30) больше 2^53 и считается без потери разрядов',
    inputs: { mode: 'combinations', n: 60, k: 30 },
    expectPrimary: '118 264 581 564 861 424',
  },
  {
    name: 'с повторениями выборка может превышать множество',
    inputs: { mode: 'combinations', n: 3, k: 5, repetition: 'yes' },
    expectPrimary: '21',
  },
  {
    name: 'недопустимо: без повторений k больше n',
    inputs: { mode: 'combinations', n: 5, k: 7 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: отрицательное множество',
    inputs: { mode: 'combinations', n: -1, k: 2 },
    expectPrimary: '—',
  },
];
