import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из S = a², P = 4a, d = a√2:
//   a = 5   -> S = 25,  P = 20,  d = 7,0710678…
//   S = 49  -> a = 7,   P = 28,  d = 9,8994949…
//   P = 24  -> a = 6,   S = 36
export const geomSquareReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'по стороне: 5² = 25',
    inputs: { mode: 'side', unit: 'cm', side: 5 },
    expectPrimary: '25 см²',
    expectSecondary: [{ label: 'Периметр', value: '20 см' }, { label: 'Диагональ', value: '7,071 см' }],
  },
  {
    name: 'по площади: √49 = 7',
    inputs: { mode: 'area', unit: 'm', area: 49 },
    expectPrimary: '49 м²',
    expectSecondary: [{ label: 'Сторона', value: '7 м' }, { label: 'Периметр', value: '28 м' }],
  },
  {
    name: 'по периметру: 24 / 4 = 6',
    inputs: { mode: 'perimeter', unit: 'cm', perimeter: 24 },
    expectPrimary: '36 см²',
    expectSecondary: [{ label: 'Сторона', value: '6 см' }],
  },
  {
    name: 'граница: сторона 0,001 даёт площадь 0,000001',
    inputs: { mode: 'side', unit: 'm', side: 0.001 },
    expectPrimary: '0,000001 м²',
    expectSecondary: [{ label: 'Периметр', value: '0,004 м' }],
  },
  {
    name: 'нулевая сторона отклоняется',
    inputs: { mode: 'side', unit: 'cm', side: 0 },
    expectPrimary: '—',
  },
  {
    name: 'отрицательная сторона отклоняется',
    inputs: { mode: 'side', unit: 'cm', side: -3 },
    expectPrimary: '—',
  },
];
