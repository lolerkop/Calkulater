import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из p = правильные ÷ всего × 100 вручную:
//   18 / 20 = 0,9 → 90 % · 37 / 45 = 0,8222… → 82,22 %
export const testScorePercentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '18 из 20 — это 90 %',
    inputs: { correct: 18, total: 20 },
    expectPrimary: '90,00%',
    expectSecondary: [{ label: 'Ошибок', value: '2' }],
  },
  {
    name: '37 из 45 — это 82,22 %',
    inputs: { correct: 37, total: 45 },
    expectPrimary: '82,22%',
  },
  {
    name: 'проходной балл пройден',
    inputs: { correct: 18, total: 20, passMark: 60 },
    expectPrimary: '90,00%',
    expectSecondary: [{ label: 'Проходной балл', value: 'Тест сдан' }],
  },
  {
    name: 'проходной балл не пройден',
    inputs: { correct: 9, total: 20, passMark: 60 },
    expectPrimary: '45,00%',
    expectSecondary: [{ label: 'Проходной балл', value: 'Тест не сдан' }],
  },
  {
    name: 'граница: ноль правильных даёт ноль процентов',
    inputs: { correct: 0, total: 10 },
    expectPrimary: '0,00%',
  },
  {
    name: 'граница: все ответы верны — ровно сто процентов',
    inputs: { correct: 10, total: 10 },
    expectPrimary: '100,00%',
  },
  {
    name: 'недопустимо: правильных больше, чем вопросов',
    inputs: { correct: 21, total: 20 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: ноль вопросов',
    inputs: { correct: 5, total: 0 },
    expectPrimary: '—',
  },
];
