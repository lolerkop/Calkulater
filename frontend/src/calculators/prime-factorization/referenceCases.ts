import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Разложения выведены вручную, а не прогоном реализации:
//   360 = 8 · 45 = 2³ · 3² · 5 → делителей (3+1)(2+1)(1+1) = 24
//   1024 = 2¹⁰ → делителей 11 · 97 простое → делителей 2
// Разряды разделяет неразрывный пробел общего форматтера, не формула.
//   999 = 27 · 37 = 3³ · 37 → делителей (3+1)(1+1) = 8
export const primeFactorizationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'составное: 360 = 2³ · 3² · 5, делителей 24',
    inputs: { n: 360 },
    expectPrimary: '360 = 2³ · 3² · 5',
    expectSecondary: [{ label: 'Всего делителей', value: '24' }],
  },
  {
    name: 'простое: 97 раскладывается в само себя',
    inputs: { n: 97 },
    expectPrimary: '97 = 97',
    expectSecondary: [{ label: 'Простое число', value: 'Да' }],
  },
  {
    name: 'степень двойки: 1024 = 2¹⁰, делителей 11',
    inputs: { n: 1024 },
    expectPrimary: '1 024 = 2¹⁰',
    expectSecondary: [{ label: 'Всего делителей', value: '11' }],
  },
  {
    name: 'нечётные множители: 999 = 3³ · 37',
    inputs: { n: 999 },
    expectPrimary: '999 = 3³ · 37',
    expectSecondary: [{ label: 'Всего делителей', value: '8' }],
  },
  {
    name: 'граница домена: наименьшее допустимое число',
    inputs: { n: 2 },
    expectPrimary: '2 = 2',
  },
  {
    name: 'недопустимо: единица не раскладывается',
    inputs: { n: 1 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: дробное число',
    inputs: { n: 12.5 },
    expectPrimary: '—',
  },
];
