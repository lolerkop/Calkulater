import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из C1·V1 = C2·V2:
//   2 · 50 / 0,5 = 200 мл; добавить 200 − 50 = 150 мл
//   1 · 250 / 10 = 25 мл; добавить 250 − 25 = 225 мл
//   C1 = C2 — разбавлять нечем: объём не меняется, добавить 0.
//   C2 > C1 — это концентрирование, а не разбавление, и оно отклоняется.
export const dilutionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'C1=2, V1=50 мл, C2=0,5 -> V2',
    inputs: { solve: 'v2', c1: 2, v1: 50, c2: 0.5 },
    expectPrimary: '200 мл',
    expectSecondary: [{ label: 'Добавить растворителя', value: '150 мл' }],
  },
  {
    name: 'C1=10, V2=250 мл, C2=1 -> V1',
    inputs: { solve: 'v1', c1: 10, c2: 1, v2: 250 },
    expectPrimary: '25 мл',
    expectSecondary: [{ label: 'Добавить растворителя', value: '225 мл' }],
  },
  {
    name: 'без разбавления: C1 равно C2',
    inputs: { solve: 'v2', c1: 2, v1: 50, c2: 2 },
    expectPrimary: '50 мл',
    expectSecondary: [{ label: 'Добавить растворителя', value: '0 мл' }],
  },
  {
    name: 'C2 больше C1 — это не разбавление',
    inputs: { solve: 'v2', c1: 1, v1: 50, c2: 2 },
    expectPrimary: '—',
  },
];
