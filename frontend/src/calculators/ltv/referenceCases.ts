import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: LTV = ARPU × срок × маржа.
//   1200 × 18 = 21 600 · срок из оттока 5 % = 1/0,05 = 20 → 1200 × 20 = 24 000
//   800 × (1/0,12) × 0,7 = 800 × 8,3333 × 0,7 = 4666,67
export const ltvReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'по сроку: 1200 в месяц на 18 месяцев',
    inputs: { mode: 'months', arpu: 1200, months: 18, margin: 100, cac: 0 },
    expectPrimary: '21 600,00 ₽',
  },
  {
    name: 'по оттоку: 5 % в месяц дают срок 20 месяцев',
    inputs: { mode: 'churn', arpu: 1200, churn: 5, margin: 100, cac: 0 },
    expectPrimary: '24 000,00 ₽',
    expectSecondary: [{ label: 'Срок жизни клиента', value: '20,00 мес' }],
  },
  {
    name: 'маржа учитывается: ARPU 800, отток 12 %, маржа 70 %',
    inputs: { mode: 'churn', arpu: 800, churn: 12, margin: 70, cac: 0 },
    expectPrimary: '4 666,67 ₽',
    expectSecondary: [{ label: 'Срок жизни клиента', value: '8,33 мес' }],
  },
  {
    name: 'с CAC появляется отношение LTV к стоимости привлечения',
    inputs: { mode: 'months', arpu: 1200, months: 18, margin: 100, cac: 7200 },
    expectPrimary: '21 600,00 ₽',
    expectSecondary: [{ label: 'Отношение LTV к CAC', value: '3,00×' }],
  },
  {
    name: 'граница: стопроцентный отток даёт срок в один период',
    inputs: { mode: 'churn', arpu: 500, churn: 100, margin: 100, cac: 0 },
    expectPrimary: '500,00 ₽',
  },
  {
    name: 'недопустимо: нулевой отток означал бы вечного клиента',
    inputs: { mode: 'churn', arpu: 1200, churn: 0, margin: 100, cac: 0 },
    expectPrimary: '—',
  },
];
