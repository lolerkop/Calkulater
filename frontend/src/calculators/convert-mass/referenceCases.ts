import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения взяты из международных определений единиц, а не получены прогоном
// движка:
//   1 кг = 1000 г · 1 фунт = 453,59237 г (точно) · 1 унция = 28,349523125 г (точно)
//   1 стоун = 14 фунтов · 1 т = 1000 кг
export const massReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'килограмм в граммы: ровно 1000',
    inputs: { value: 1, from: 'kg', to: 'g' },
    expectPrimary: '1 000,00 г',
  },
  {
    name: 'фунт в граммы: точно 453,59237',
    inputs: { value: 1, from: 'lb', to: 'g' },
    expectPrimary: '453,5924 г',
  },
  {
    name: 'унция в граммы: точно 28,349523125',
    inputs: { value: 1, from: 'oz', to: 'g' },
    expectPrimary: '28,3495 г',
  },
  {
    name: 'стоун равен четырнадцати фунтам',
    inputs: { value: 1, from: 'st', to: 'lb' },
    expectPrimary: '14,0000 фунт',
  },
  {
    name: 'тонна в килограммы',
    inputs: { value: 1, from: 't', to: 'kg' },
    expectPrimary: '1 000,00 кг',
  },
  {
    name: 'обратно: 453,59237 грамма дают фунт',
    inputs: { value: 453.59237, from: 'g', to: 'lb' },
    expectPrimary: '1,0000 фунт',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'kg', to: 'oz' },
    expectPrimary: '0 унция',
  },
];
