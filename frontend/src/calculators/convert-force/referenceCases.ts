import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из точных определений, а не прогоном движка:
//   килограмм-сила = 9,80665 Н (стандартное ускорение свободного падения, точно)
//   фунт-сила = 0,45359237 кг × 9,80665 = 4,4482216152605 Н (оба множителя точны)
//   дина = 10⁻⁵ Н (точно) · тонна-сила = 1000 кгс
export const forceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'десять килограмм-сил в ньютонах: 98,0665',
    inputs: { value: 10, from: 'kgf', to: 'n' },
    expectPrimary: '98,0665 Н',
  },
  {
    name: 'фунт-сила в ньютонах: 4,4482',
    inputs: { value: 1, from: 'lbf', to: 'n' },
    expectPrimary: '4,4482 Н',
  },
  {
    name: 'обратно: килоньютон в килограмм-силах',
    inputs: { value: 1, from: 'kn', to: 'kgf' },
    expectPrimary: '101,9716 кгс',
  },
  {
    name: 'дина — стотысячная ньютона',
    inputs: { value: 100000, from: 'dyn', to: 'n' },
    expectPrimary: '1,0000 Н',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'n', to: 'n' },
    expectPrimary: '36,6000 Н',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'kgf', to: 'lbf' },
    expectPrimary: '0 lbf',
  },
];
