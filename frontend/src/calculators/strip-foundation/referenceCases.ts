import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: V = периметр × ширина ленты × глубина.
//   40 × 0,4 × 0,8 = 12,8 м³; × 1,05 = 13,44 м³
//   28,6 × 0,3 × 1,2 = 10,296 м³
// Периметр — длина самой ленты, а не габарит здания.
export const stripFoundationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'периметр 40, лента 0,4×0,8, запас 5 %',
    inputs: { perimeter: 40, width: 0.4, depth: 0.8, waste: 5 },
    expectPrimary: '13,44 м³',
    expectSecondary: [{ label: 'Чистый объём', value: '12,8 м³' }],
  },
  {
    name: 'периметр 28,6, лента 0,3×1,2',
    inputs: { perimeter: 28.6, width: 0.3, depth: 1.2, waste: 0 },
    expectPrimary: '10,296 м³',
    expectSecondary: [{ label: 'Чистый объём', value: '10,296 м³' }],
  },
  {
    name: 'минимальный контур',
    inputs: { perimeter: 4, width: 0.1, depth: 0.1, waste: 0 },
    expectPrimary: '0,04 м³',
  },
  {
    name: 'нулевая глубина отклоняется',
    inputs: { perimeter: 40, width: 0.4, depth: 0, waste: 5 },
    expectPrimary: '—',
  },
];
