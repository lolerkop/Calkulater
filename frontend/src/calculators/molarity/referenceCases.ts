import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: C = n / V(л).
//   0,5 / 2 = 0,25 моль/л
//   58,44 г при M = 58,44 г/моль -> n = 1 моль; 1 / 0,5 = 2 моль/л
//   0,001 / 10 = 0,0001 моль/л — нижняя граница обычного оформления
export const molarityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '0,5 моль в 2 л',
    inputs: { mode: 'moles', moles: 0.5, volumeUnit: 'l', volume: 2 },
    expectPrimary: '0,25 моль/л',
    expectSecondary: [{ label: 'Количество вещества', value: '0,5 моль' }, { label: 'Объём раствора', value: '2 л' }],
  },
  {
    name: '58,44 г NaCl (M=58,44) в 0,5 л',
    inputs: { mode: 'mass', mass: 58.44, molarMass: 58.44, volumeUnit: 'l', volume: 0.5 },
    expectPrimary: '2 моль/л',
    expectSecondary: [{ label: 'Количество вещества', value: '1 моль' }],
  },
  {
    name: 'очень разбавленный: 0,001 моль в 10 л',
    inputs: { mode: 'moles', moles: 0.001, volumeUnit: 'l', volume: 10 },
    expectPrimary: '0,0001 моль/л',
  },
  {
    name: 'нулевой объём отклоняется',
    inputs: { mode: 'moles', moles: 0.5, volumeUnit: 'l', volume: 0 },
    expectPrimary: '—',
  },
];
