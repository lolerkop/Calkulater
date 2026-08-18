import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Выведено вручную: 100000 → 50000 / 30000 / 20000; 75000 → 37500 / 22500 / 15000;
// 1 → 0,50 / 0,30 / 0,20.
export const budgetReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'круглый доход 100 000 делится на 50 000 / 30 000 / 20 000',
    inputs: { income: 100000 },
    expectPrimary: '50 000 ₽',
    expectSecondary: [
      { label: 'Желания', value: '30 000 ₽' },
      { label: 'Сбережения', value: '20 000 ₽' },
    ],
  },
  {
    name: 'дробный доход 75 000 → 37 500 / 22 500 / 15 000',
    inputs: { income: 75000 },
    expectPrimary: '37 500 ₽',
    expectSecondary: [
      { label: 'Желания', value: '22 500 ₽' },
      { label: 'Сбережения', value: '15 000 ₽' },
    ],
  },
  {
    name: 'граница: доход 1 даёт копеечные доли',
    inputs: { income: 1 },
    expectPrimary: '1 ₽',
  },
  {
    name: 'нулевой доход делить нечего',
    inputs: { income: 0 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Доход должен быть больше нуля' }],
  },
];
