import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из точных определений, а не прогоном движка:
//   1 lbf = 0,45359237 × 9,80665 = 4,4482216152605 Н · 1 ft = 0,3048 м (точно)
//   1 lbf·ft = 1,3558179483314 Н·м · 1 lbf·ft = 12 lbf·in · 1 lbf·in = 16 ozf·in
//   1 кгс·м = 9,80665 Н·м
export const torqueReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'фунт-сила-фут в ньютон-метрах: 1,3558',
    inputs: { value: 1, from: 'lbfft', to: 'nm' },
    expectPrimary: '1,3558 Н·м',
  },
  {
    name: 'обратно: ньютон-метр в фунт-сила-футах',
    inputs: { value: 1, from: 'nm', to: 'lbfft' },
    expectPrimary: '0,737562 lbf·ft',
  },
  {
    name: 'в футе двенадцать дюймов',
    inputs: { value: 1, from: 'lbfft', to: 'lbfin' },
    expectPrimary: '12,0000 lbf·in',
  },
  {
    name: 'десять килограмм-сила-метров в ньютон-метрах',
    inputs: { value: 10, from: 'kgfm', to: 'nm' },
    expectPrimary: '98,0665 Н·м',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'nm', to: 'nm' },
    expectPrimary: '36,6000 Н·м',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'nm', to: 'ozfin' },
    expectPrimary: '0 ozf·in',
  },
];
