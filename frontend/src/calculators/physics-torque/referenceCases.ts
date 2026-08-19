import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из τ = F·r·sin θ, угол в радианах явно:
//   50 × 0,3 × sin 90° = 15 Н·м; плечо 0,3 м
//   50 × 0,3 × sin 30° = 7,5 Н·м; плечо 0,15 м
//   sin 0° обязан дать РОВНО нуль, а не остаток с плавающей точкой.
// Это расчёт момента силы, а не перевод единиц: конвертер живёт отдельно.
export const physicsTorqueReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'F=50 Н, r=0,3 м, 90°',
    inputs: { force: 50, radius: 0.3, angle: 90 },
    expectPrimary: '15 Н·м',
    expectSecondary: [{ label: 'Плечо силы', value: '0,3 м' }],
  },
  {
    name: 'F=50 Н, r=0,3 м, 30°',
    inputs: { force: 50, radius: 0.3, angle: 30 },
    expectPrimary: '7,5 Н·м',
    expectSecondary: [{ label: 'Плечо силы', value: '0,15 м' }],
  },
  {
    name: 'угол 0° даёт ровно нуль',
    inputs: { force: 50, radius: 0.3, angle: 0 },
    expectPrimary: '0 Н·м',
    expectSecondary: [{ label: 'Плечо силы', value: '0 м' }],
  },
  {
    name: 'отрицательное плечо отклоняется',
    inputs: { force: 50, radius: -0.3, angle: 90 },
    expectPrimary: '—',
  },
];
