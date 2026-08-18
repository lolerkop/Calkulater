import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   12 000 000 / 40 = 300 000; в месяц 300 000 / 12 = 25 000
//   12 000 000 / 1 = 12 000 000
export const revenuePerEmployeeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 12 млн на 40 сотрудников дают 300 000',
    inputs: { revenue: 12000000, employees: 40 },
    expectPrimary: '300 000 ₽',
    expectSecondary: [{ label: 'В месяц на сотрудника', value: '25 000 ₽' }],
  },
  {
    name: 'граница: один сотрудник',
    inputs: { revenue: 12000000, employees: 1 },
    expectPrimary: '12 000 000 ₽',
  },
  {
    name: 'граница: нулевая выручка',
    inputs: { revenue: 0, employees: 40 },
    expectPrimary: '0 ₽',
  },
  {
    name: 'недопустимо: дробное число сотрудников',
    inputs: { revenue: 12000000, employees: 40.5 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: ноль сотрудников',
    inputs: { revenue: 12000000, employees: 0 },
    expectPrimary: '—',
  },
];
