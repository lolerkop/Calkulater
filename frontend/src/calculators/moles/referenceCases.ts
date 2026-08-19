import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: n = m / M, N = n · N_A.
//   18 / 18,015 = 0,9991673605… -> 0,9992 моль
//   N = 0,9991673605 · 6,02214076·10^23 = 6,0171264879·10^23 -> 6,017·10^23
//   (в Phase 13P здесь стояла опечатка 6,013 — см. refcase-corrections.md)
//   44 / 44,009 = 0,9997954964… -> 0,9998 моль
export const molesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '18 г воды при M=18,015',
    inputs: { mode: 'mass', mass: 18, molarMass: 18.015 },
    expectPrimary: '0,9992 моль',
    expectSecondary: [{ label: 'Число частиц', value: '6,017·10^23' }],
  },
  {
    name: '44 г CO2 при M=44,009',
    inputs: { mode: 'mass', mass: 44, molarMass: 44.009 },
    expectPrimary: '0,9998 моль',
  },
  {
    name: 'ровно один моль',
    inputs: { mode: 'mass', mass: 44.009, molarMass: 44.009 },
    expectPrimary: '1 моль',
    expectSecondary: [{ label: 'Число частиц', value: '6,022·10^23' }],
  },
  {
    name: 'нулевая молярная масса отклоняется',
    inputs: { mode: 'mass', mass: 18, molarMass: 0 },
    expectPrimary: '—',
  },
];
