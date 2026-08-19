import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: расход = нагрузка(кВт) × удельный(л/кВт·ч) × часы.
//   5 × 0,3 × 8 = 12 л; при 60 ₽/л это 720 ₽; в час 1,5 л
//   7,5 × 0,28 × 12 = 25,2 л; в час 2,1 л
// Удельный расход 0,3 — редактируемое допущение, а не норма для всех генераторов.
export const generatorFuelReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '5 кВт, 0,3 л/кВт·ч, 8 ч, 60 ₽/л',
    inputs: { load: 5, sfc: 0.3, hours: 8, price: 60 },
    expectPrimary: '12,00 л',
    expectSecondary: [{ label: 'Стоимость топлива', value: '720,00 ₽' }, { label: 'Расход в час', value: '1,50 л/ч' }],
  },
  {
    name: '7,5 кВт, 0,28 л/кВт·ч, 12 ч',
    inputs: { load: 7.5, sfc: 0.28, hours: 12, price: 0 },
    expectPrimary: '25,20 л',
    expectSecondary: [{ label: 'Расход в час', value: '2,10 л/ч' }],
  },
  {
    name: 'один час работы',
    inputs: { load: 5, sfc: 0.3, hours: 1, price: 0 },
    expectPrimary: '1,50 л',
  },
  {
    name: 'нулевая нагрузка отклоняется',
    inputs: { load: 0, sfc: 0.3, hours: 8, price: 60 },
    expectPrimary: '—',
  },
];
