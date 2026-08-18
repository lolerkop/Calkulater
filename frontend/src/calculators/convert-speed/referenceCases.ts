import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения взяты из международных определений единиц, а не получены прогоном
// движка:
//   36 км/ч = 10 м/с · 1 миля/ч = 1,609344 км/ч (точно) · 1 узел = 1,852 км/ч (точно)
//   1 м/с = 1 / 0,3048 фут/с = 3,280839895…
export const speedReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '36 км/ч равны 10 м/с',
    inputs: { value: 36, from: 'kmh', to: 'ms' },
    expectPrimary: '10,0000 м/с',
  },
  {
    name: 'миля в час в км/ч: 1,609344',
    inputs: { value: 1, from: 'mph', to: 'kmh' },
    expectPrimary: '1,6093 км/ч',
  },
  {
    name: 'узел в км/ч: 1,852',
    inputs: { value: 1, from: 'kn', to: 'kmh' },
    expectPrimary: '1,8520 км/ч',
  },
  {
    name: 'метр в секунду в футы в секунду',
    inputs: { value: 1, from: 'ms', to: 'fts' },
    expectPrimary: '3,2808 фут/с',
  },
  {
    name: 'обратно: 10 м/с дают 36 км/ч',
    inputs: { value: 10, from: 'ms', to: 'kmh' },
    expectPrimary: '36,0000 км/ч',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'kmh', to: 'kn' },
    expectPrimary: '0 узел',
  },
];
