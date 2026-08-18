import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Записи выведены по правилу вычитания вручную:
//   1994 = 1000 + (1000−100) + (100−10) + (5−1) = M + CM + XC + IV
//   2024 = 1000 + 1000 + 10 + 10 + 1 + 1 + 1 = MM + XX + IV… нет: MMXXIV
//   3999 = MMM + CM + XC + IX — наибольшее записываемое число
export const romanNumeralsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'правило вычитания: 1994 даёт MCMXCIV',
    inputs: { mode: 'toRoman', arabic: 1994 },
    expectPrimary: 'MCMXCIV',
  },
  {
    name: 'обычный год: 2024 даёт MMXXIV',
    inputs: { mode: 'toRoman', arabic: 2024 },
    expectPrimary: 'MMXXIV',
  },
  {
    name: 'граница домена: наибольшее число 3999',
    inputs: { mode: 'toRoman', arabic: 3999 },
    expectPrimary: 'MMMCMXCIX',
  },
  {
    name: 'граница домена: наименьшее число 1',
    inputs: { mode: 'toRoman', arabic: 1 },
    expectPrimary: 'I',
  },
  {
    name: 'обратно: MMXXIV даёт 2024',
    inputs: { mode: 'toArabic', roman: 'MMXXIV' },
    expectPrimary: '2024',
  },
  {
    name: 'обратно: строчные буквы принимаются',
    inputs: { mode: 'toArabic', roman: 'mcmxciv' },
    expectPrimary: '1994',
  },
  {
    name: 'недопустимо: неканоническая запись IIII',
    inputs: { mode: 'toArabic', roman: 'IIII' },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: ноль римскими не записывается',
    inputs: { mode: 'toRoman', arabic: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: 4000 выходит за границу',
    inputs: { mode: 'toRoman', arabic: 4000 },
    expectPrimary: '—',
  },
];
