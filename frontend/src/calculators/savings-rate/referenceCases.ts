import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Числовые ожидания выведены вручную из формулы:
//   (100000 − 70000) / 100000 = 0,30 → 30,00 %
//   (80000 − 80000) / 80000  = 0     → 0,00 %
//   (50000 − 60000) / 50000  = −0,20 → −20,00 %
// Разделитель разрядов — неразрывный пробел общего форматтера, не часть формулы.
export const savingsRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: доход 100 000, расходы 70 000 → 30,00 %',
    inputs: { income: 100000, expenses: 70000 },
    expectPrimary: '30,00 %',
    expectSecondary: [{ label: 'Сбережения за период', value: '30 000 ₽' }],
  },
  {
    name: 'нулевые сбережения: доход равен расходам',
    inputs: { income: 80000, expenses: 80000 },
    expectPrimary: '0,00 %',
    expectSecondary: [{ label: 'Сбережения за период', value: '0 ₽' }],
  },
  {
    name: 'перерасход даёт отрицательную норму, а не ошибку',
    inputs: { income: 50000, expenses: 60000 },
    expectPrimary: '-20,00 %',
    expectSecondary: [{ label: 'Внимание', value: 'Расходы превышают доход' }],
  },
  {
    name: 'нулевой доход: доля неопределена',
    inputs: { income: 0, expenses: 100 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Доход должен быть больше нуля' }],
  },
];
