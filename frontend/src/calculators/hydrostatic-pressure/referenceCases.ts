import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из p = ρgh (+ p₀) при g = 9,80665:
//   1000 × 9,80665 × 10 = 98 066,5 Па = 0,980665 бар
//   с атмосферой: 98 066,5 + 101 325 = 199 391,5 Па
//   на поверхности остаётся только p₀.
export const hydrostaticPressureReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'вода, глубина 10 м',
    inputs: { density: 1000, depth: 10, p0: 0 },
    expectPrimary: '98 066,5 Па',
    expectSecondary: [{ label: 'В барах', value: '0,9807 бар' }],
  },
  {
    name: 'вода 10 м плюс атмосфера',
    inputs: { density: 1000, depth: 10, p0: 101325 },
    expectPrimary: '199 391,5 Па',
    expectSecondary: [{ label: 'В барах', value: '1,994 бар' }],
  },
  {
    name: 'на поверхности остаётся только атмосфера',
    inputs: { density: 1000, depth: 0, p0: 101325 },
    expectPrimary: '101 325 Па',
  },
  {
    name: 'отрицательная плотность отклоняется',
    inputs: { density: -1000, depth: 10, p0: 0 },
    expectPrimary: '—',
  },
];
