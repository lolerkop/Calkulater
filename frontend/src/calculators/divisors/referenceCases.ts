import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную перебором до корня:
//   36 — полный квадрат, 9 делителей, сумма 91
//   360 — высокосоставное, 24 делителя, сумма 1170
//   97 простое: ровно два делителя · 6 совершенное: 1+2+3 = 6
export const divisorsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'полный квадрат 36 даёт нечётное число делителей',
    inputs: { n: 36 },
    expectPrimary: '1, 2, 3, 4, 6, 9, 12, 18, 36',
    expectSecondary: [
      { label: 'Количество делителей', value: '9' },
      { label: 'Сумма делителей', value: '91' },
    ],
  },
  {
    name: 'высокосоставное 360 — 24 делителя',
    inputs: { n: 360 },
    expectSecondary: [
      { label: 'Количество делителей', value: '24' },
      { label: 'Сумма делителей', value: '1 170' },
    ],
    expectPrimary: '1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360',
  },
  {
    name: 'граница: у простого числа ровно два делителя',
    inputs: { n: 97 },
    expectPrimary: '1, 97',
    expectSecondary: [{ label: 'Это число', value: 'простое' }],
  },
  {
    name: 'граница: у единицы единственный делитель',
    inputs: { n: 1 },
    expectPrimary: '1',
  },
  {
    name: 'совершенное число: сумма собственных делителей равна ему самому',
    inputs: { n: 6 },
    expectPrimary: '1, 2, 3, 6',
    expectSecondary: [{ label: 'Это число', value: 'совершенное' }],
  },
  {
    name: 'недопустимо: ноль',
    inputs: { n: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: отрицательное число',
    inputs: { n: -12 },
    expectPrimary: '—',
  },
];
