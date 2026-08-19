import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную при φ = (1 + √5)/2 = 1,6180339887…
//   отрезок 100: большая часть 100/φ = 61,80340; меньшая 38,19660
//   34 × φ = 55,01316
//   φ хранится в полной точности и округляется только при выводе.
export const goldenRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'отрезок 100 — большая часть',
    inputs: { mode: 'split', total: 100 },
    expectPrimary: '61,8034',
    expectSecondary: [{ label: 'Меньшая часть', value: '38,1966' }, { label: 'φ', value: '1,618034' }],
  },
  {
    name: '34 — больший партнёр',
    inputs: { mode: 'grow', a: 34 },
    expectPrimary: '55,0132',
    expectSecondary: [{ label: 'φ', value: '1,618034' }],
  },
  {
    name: 'единица даёт сам φ',
    inputs: { mode: 'grow', a: 1 },
    expectPrimary: '1,618',
    expectSecondary: [{ label: 'φ', value: '1,618034' }],
  },
  {
    name: 'неположительное значение отклоняется',
    inputs: { mode: 'grow', a: 0 },
    expectPrimary: '—',
  },
];
