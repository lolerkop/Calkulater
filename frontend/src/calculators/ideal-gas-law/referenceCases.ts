import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из PV = nRT при R = 8,314462618 Дж/(моль·К),
// то есть в базовых единицах Па · м³ · моль · К:
//   P = 2 · 8,314462618 · 300 / 0,05 = 99 773,551416 Па
//   V = 1 · 8,314462618 · 273,15 / 101 325 = 0,0224139695 м³ = 22,414 л
//   T = 0 K даёт ровно нулевое давление; ниже абсолютного нуля — отклонение.
export const idealGasLawReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'n=2, T=300 K, V=0,05 м³ -> P',
    inputs: { solve: 'p', n: 2, tempUnit: 'k', t: 300, volumeUnit: 'm3', v: 0.05, pressureUnit: 'pa' },
    expectPrimary: '99 773,55 Па',
  },
  {
    name: '1 моль при н.у. -> V в литрах',
    inputs: { solve: 'v', n: 1, tempUnit: 'k', t: 273.15, pressureUnit: 'pa', p: 101325, volumeUnit: 'l' },
    expectPrimary: '22,414 л',
  },
  {
    name: 'T = 0 K даёт нулевое давление',
    inputs: { solve: 'p', n: 2, tempUnit: 'k', t: 0, volumeUnit: 'm3', v: 0.05, pressureUnit: 'pa' },
    expectPrimary: '0 Па',
  },
  {
    name: 'температура ниже абсолютного нуля',
    inputs: { solve: 'p', n: 2, tempUnit: 'k', t: -5, volumeUnit: 'm3', v: 0.05, pressureUnit: 'pa' },
    expectPrimary: '—',
  },
];
