import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   по высоте: S = a·h = 10 × 6 = 60; периметр по одной стороне неизвестен
//   по сторонам: S = a·b·sin θ = 10 × 8 × sin 30° = 40; P = 2(10+8) = 36
//   90° даёт прямоугольник: 10 × 8 × 1 = 80
//   180° вырождается в отрезок и отклоняется, а не даёт нулевую площадь.
export const geomParallelogramReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'основание 10, высота 6',
    inputs: { unit: 'cm', mode: 'height', a: 10, h: 6 },
    expectPrimary: '60 см²',
    expectSecondary: [{ label: 'Периметр', value: '—' }],
  },
  {
    name: 'стороны 10 и 8, угол 30°',
    inputs: { unit: 'cm', mode: 'sides', a: 10, b: 8, angle: 30 },
    expectPrimary: '40 см²',
    expectSecondary: [{ label: 'Периметр', value: '36 см' }],
  },
  {
    name: 'угол 90° — прямоугольник',
    inputs: { unit: 'cm', mode: 'sides', a: 10, b: 8, angle: 90 },
    expectPrimary: '80 см²',
  },
  {
    name: 'угол 180° вырождается',
    inputs: { unit: 'cm', mode: 'sides', a: 10, b: 8, angle: 180 },
    expectPrimary: '—',
  },
];
