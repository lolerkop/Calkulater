import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную при 25 °C, где pH + pOH = 14:
//   [H+] = 1·10^-3 -> pH = 3,00; pOH = 11,00; среда кислая
//   pH = 8,4 -> [H+] = 10^-8,4 = 3,981071706·10^-9 моль/л; pOH = 5,60
//   pH = 7 -> [H+] = 1,000·10^-7; pOH = 7,00; среда нейтральная
export const phPohReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '[H+] = 1e-3',
    inputs: { mode: 'fromH', h: 0.001 },
    expectPrimary: '3,00',
    expectSecondary: [{ label: 'pOH', value: '11,00' }, { label: 'Среда', value: 'кислая' }],
  },
  {
    name: 'pH = 8,4 -> [H+]',
    inputs: { mode: 'fromPh', ph: 8.4 },
    expectPrimary: '3,981·10^-9 моль/л',
    expectSecondary: [{ label: 'pOH', value: '5,60' }, { label: 'Среда', value: 'щелочная' }],
  },
  {
    name: 'нейтральная среда, pH = 7',
    inputs: { mode: 'fromPh', ph: 7 },
    expectPrimary: '1,000·10^-7 моль/л',
    expectSecondary: [{ label: 'pOH', value: '7,00' }, { label: 'Среда', value: 'нейтральная' }],
  },
  {
    name: 'pH вне диапазона 0..14',
    inputs: { mode: 'fromPh', ph: 15 },
    expectPrimary: '—',
  },
];
