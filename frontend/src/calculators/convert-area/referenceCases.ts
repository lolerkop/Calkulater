import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения взяты из международных определений единиц, а не получены прогоном
// движка:
//   1 м² = 10000 см² · 1 га = 10000 м² · 1 фут² = 929,0304 см² (0,3048²)
//   1 акр = 4046,8564224 м² (точно, 4840 ярдов²) · 1 дюйм² = 6,4516 см² (2,54²)
export const areaReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'квадратный метр в сантиметры: 10000',
    inputs: { value: 1, from: 'm2', to: 'cm2' },
    expectPrimary: '10 000,00 см²',
  },
  {
    name: 'гектар в квадратные метры: 10000',
    inputs: { value: 1, from: 'ha', to: 'm2' },
    expectPrimary: '10 000,00 м²',
  },
  {
    name: 'квадратный дюйм в сантиметры: 6,4516',
    inputs: { value: 1, from: 'in2', to: 'cm2' },
    expectPrimary: '6,4516 см²',
  },
  {
    name: 'квадратный фут в сантиметры: 929,0304',
    inputs: { value: 1, from: 'ft2', to: 'cm2' },
    expectPrimary: '929,0304 см²',
  },
  {
    name: 'акр в квадратные метры: 4046,8564224',
    inputs: { value: 1, from: 'ac', to: 'm2' },
    expectPrimary: '4 046,86 м²',
  },
  {
    name: 'квадратный километр в гектары: 100',
    inputs: { value: 1, from: 'km2', to: 'ha' },
    expectPrimary: '100,0000 га',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'ha', to: 'ac' },
    expectPrimary: '0 акр',
  },
];
