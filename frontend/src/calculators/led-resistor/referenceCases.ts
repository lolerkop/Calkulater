import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из R = (Us − Uf) / I вручную, а не прогоном функции:
//   (5 − 2) / 0,02 = 150 Ом · (12 − 3,2) / 0,35 = 25,142857… Ом
//   (3,3 − 3,2) / 0,001 = 100 Ом
export const ledResistorReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'типовой светодиод: (5 − 2) / 0,02 = 150 Ом',
    inputs: { supplyVoltage: 5, forwardVoltage: 2, current: 20, currentUnit: 'ma' },
    expectPrimary: '150 Ом',
    expectSecondary: [
      { label: 'Мощность на резисторе', value: '0,06 Вт' },
      { label: 'Мощность на светодиоде', value: '0,04 Вт' },
    ],
  },
  {
    name: 'мощный светодиод: (12 − 3,2) / 0,35 = 25,142857… Ом',
    inputs: { supplyVoltage: 12, forwardVoltage: 3.2, current: 350, currentUnit: 'ma' },
    expectPrimary: '25,14 Ом',
    expectSecondary: [{ label: 'Мощность на резисторе', value: '3,08 Вт' }],
  },
  {
    name: 'ток в амперах даёт тот же ответ, что и в миллиамперах',
    inputs: { supplyVoltage: 5, forwardVoltage: 2, current: 0.02, currentUnit: 'a' },
    expectPrimary: '150 Ом',
  },
  {
    name: 'граница: минимальный запас (3,3 − 3,2) / 0,001 = 100 Ом',
    inputs: { supplyVoltage: 3.3, forwardVoltage: 3.2, current: 1, currentUnit: 'ma' },
    expectPrimary: '100 Ом',
  },
  {
    name: 'недопустимо: прямое напряжение выше питания',
    inputs: { supplyVoltage: 3, forwardVoltage: 3.2, current: 20, currentUnit: 'ma' },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: прямое напряжение равно питанию — гасить нечего',
    inputs: { supplyVoltage: 3.2, forwardVoltage: 3.2, current: 20, currentUnit: 'ma' },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевой ток',
    inputs: { supplyVoltage: 5, forwardVoltage: 2, current: 0, currentUnit: 'ma' },
    expectPrimary: '—',
  },
];
