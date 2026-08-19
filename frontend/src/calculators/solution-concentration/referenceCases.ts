import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   25 / 500 · 100 = 5,00 %; растворителя 500 − 25 = 475 г
//   15 / 300 · 100 = 5,00 % (масса к объёму)
//   Вещества больше, чем раствора, — невозможная концентрация, а не 100 %.
export const solutionConcentrationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '25 г в 500 г раствора (по массе)',
    inputs: { mode: 'ww', solute: 25, solution: 500 },
    expectPrimary: '5,00%',
    expectSecondary: [{ label: 'Масса растворителя', value: '475,00 г' }],
  },
  {
    name: '15 г в 300 мл (масса к объёму)',
    inputs: { mode: 'wv', solute: 15, volume: 300 },
    expectPrimary: '5,00%',
  },
  {
    name: 'чистое вещество — 100%',
    inputs: { mode: 'ww', solute: 100, solution: 100 },
    expectPrimary: '100,00%',
    expectSecondary: [{ label: 'Масса растворителя', value: '0,00 г' }],
  },
  {
    name: 'вещества больше, чем раствора',
    inputs: { mode: 'ww', solute: 600, solution: 500 },
    expectPrimary: '—',
  },
];
