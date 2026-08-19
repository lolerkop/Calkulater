import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную (Phase 13P refcases.json):
//   (85 − 70) / 10 = 1,5      ·  (62 − 70) / 12 = −0,6667
//   x = μ даёт ровно 0        ·  σ = 0 отклоняется: делить не на что
export const zScoreReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'x=85, μ=70, σ=10',
    inputs: { x: 85, mean: 70, sd: 10 },
    expectPrimary: '1,5',
    expectSecondary: [{ label: 'Отклонение', value: '15' }],
  },
  {
    name: 'x=62, μ=70, σ=12 — отрицательный z',
    inputs: { x: 62, mean: 70, sd: 12 },
    expectPrimary: '-0,6667',
    expectSecondary: [{ label: 'Отклонение', value: '-8' }],
  },
  {
    name: 'граница: x равен среднему — ровно нуль',
    inputs: { x: 70, mean: 70, sd: 10 },
    expectPrimary: '0',
    expectSecondary: [{ label: 'Отклонение', value: '0' }],
  },
  {
    name: 'нулевое отклонение отклоняется',
    inputs: { x: 85, mean: 70, sd: 0 },
    expectPrimary: '—',
  },
];
