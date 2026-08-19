import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из P_in = P_out ÷ (η/100):
//   1000 / 0,85 = 1176,470588… → ток 1176,47/12 = 98,039…
//   2500 / 0,92 = 2717,391304… → ток /24 = 113,2246
export const inverterPowerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '1000 Вт при КПД 85 % от батареи 12 В',
    inputs: { outputPower: 1000, efficiency: 85, batteryVoltage: 12 },
    expectPrimary: '1 176,5 Вт',
    expectSecondary: [
      { label: 'Ток от батареи', value: '98,04 А' },
      { label: 'Потери', value: '176,5 Вт' },
    ],
  },
  {
    name: '2500 Вт при КПД 92 % от батареи 24 В',
    inputs: { outputPower: 2500, efficiency: 92, batteryVoltage: 24 },
    expectPrimary: '2 717,4 Вт',
    expectSecondary: [{ label: 'Ток от батареи', value: '113,22 А' }],
  },
  {
    name: 'граница: идеальный КПД не даёт потерь',
    inputs: { outputPower: 100, efficiency: 100, batteryVoltage: 12 },
    expectPrimary: '100,0 Вт',
    expectSecondary: [{ label: 'Потери', value: '0,0 Вт' }],
  },
  {
    name: 'недопустимо: нулевой КПД',
    inputs: { outputPower: 1000, efficiency: 0, batteryVoltage: 12 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: КПД выше ста процентов нарушает сохранение энергии',
    inputs: { outputPower: 1000, efficiency: 120, batteryVoltage: 12 },
    expectPrimary: '—',
  },
];
