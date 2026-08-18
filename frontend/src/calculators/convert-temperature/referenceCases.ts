import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Якоря шкал взяты из определений, а не получены прогоном движка:
//   0 °C = 32 °F = 273,15 K
//   100 °C = 212 °F = 373,15 K
//   −40 °C = −40 °F — единственная точка совпадения шкал
//   0 K = −273,15 °C = −459,67 °F — абсолютный ноль
//   491,67 °Ra = 273,15 K
export const temperatureReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'точка замерзания: 0 °C = 32 °F',
    inputs: { value: 0, from: 'c', to: 'f' },
    expectPrimary: '32,0000 °F',
  },
  {
    name: 'точка кипения: 100 °C = 212 °F',
    inputs: { value: 100, from: 'c', to: 'f' },
    expectPrimary: '212,0000 °F',
  },
  {
    name: 'обратно: 212 °F = 100 °C',
    inputs: { value: 212, from: 'f', to: 'c' },
    expectPrimary: '100,0000 °C',
  },
  {
    name: 'единственное совпадение шкал: −40 °C = −40 °F',
    inputs: { value: -40, from: 'c', to: 'f' },
    expectPrimary: '-40,0000 °F',
  },
  {
    name: 'абсолютный ноль: 0 K = −273,15 °C',
    inputs: { value: 0, from: 'k', to: 'c' },
    expectPrimary: '-273,1500 °C',
  },
  {
    name: 'абсолютный ноль по Фаренгейту: 0 K = −459,67 °F',
    inputs: { value: 0, from: 'k', to: 'f' },
    expectPrimary: '-459,6700 °F',
  },
  {
    name: 'Ранкин: 491,67 °Ra = 273,15 K',
    inputs: { value: 491.67, from: 'r', to: 'k' },
    expectPrimary: '273,1500 K',
  },
  {
    name: 'совпадение единиц не даёт дрейфа: 36,6 °C остаётся 36,6',
    inputs: { value: 36.6, from: 'c', to: 'c' },
    expectPrimary: '36,6000 °C',
  },
];
