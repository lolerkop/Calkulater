import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из needed = (target − current·(1−w)) ÷ w:
//   (85 − 78·0,7)/0,3 = 30,4/0,3 = 101,333… · (85 − 90·0,6)/0,4 = 31/0,4 = 77,5
export const finalGradeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'текущая 78 %, цель 85 % при весе экзамена 30 % — цель недостижима',
    inputs: { current: 78, target: 85, weight: 30 },
    expectPrimary: '101,33%',
  },
  {
    name: 'текущая выше цели: 90 % при цели 85 % и весе 40 %',
    inputs: { current: 90, target: 85, weight: 40 },
    expectPrimary: '77,50%',
  },
  {
    name: 'граница: цель равна текущей — нужен тот же балл',
    inputs: { current: 85, target: 85, weight: 50 },
    expectPrimary: '85,00%',
  },
  {
    name: 'недопустимо: нулевой вес экзамена',
    inputs: { current: 78, target: 85, weight: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: оценка вне диапазона',
    inputs: { current: 120, target: 85, weight: 30 },
    expectPrimary: '—',
  },
];
