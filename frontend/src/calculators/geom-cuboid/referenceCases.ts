import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из V = abc, S = 2(ab+bc+ca), d = √(a²+b²+c²):
//   3×4×5 -> V = 60, S = 2(12+20+15) = 94, d = √50 = 7,0710678…
//   2,5×2,5×10 -> V = 62,5, S = 2(6,25+25+25) = 112,5, d = √106,25 = 10,6066…
//   1×1×1 — вырождение в куб: V = 1, S = 6, d = √3 = 1,7320508…
export const geomCuboidReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '3×4×5',
    inputs: { unit: 'cm', a: 3, b: 4, c: 5 },
    expectPrimary: '60 см³',
    expectSecondary: [{ label: 'Площадь поверхности', value: '94 см²' }, { label: 'Диагональ', value: '7,071 см' }],
  },
  {
    name: '2,5×2,5×10',
    inputs: { unit: 'cm', a: 2.5, b: 2.5, c: 10 },
    expectPrimary: '62,5 см³',
    expectSecondary: [{ label: 'Площадь поверхности', value: '112,5 см²' }, { label: 'Диагональ', value: '10,607 см' }],
  },
  {
    name: 'единичный куб',
    inputs: { unit: 'cm', a: 1, b: 1, c: 1 },
    expectPrimary: '1 см³',
    expectSecondary: [{ label: 'Площадь поверхности', value: '6 см²' }, { label: 'Диагональ', value: '1,732 см' }],
  },
  {
    name: 'нулевое ребро отклоняется',
    inputs: { unit: 'cm', a: 0, b: 4, c: 5 },
    expectPrimary: '—',
  },
];
