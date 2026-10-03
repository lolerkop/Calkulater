import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   100 000 / 50 = 2 000 · 100 000 / 1 = 100 000 · 0 / 50 = 0
//   при LTV 9 000 отношение 9 000 / 2 000 = 4,50
export const cacReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 100 000 на 50 клиентов дают 2 000',
    inputs: { spend: 100000, customers: 50 },
    expectPrimary: '2 000 ₽',
  },
  {
    name: 'с известным LTV: отношение 4,50 к одному',
    inputs: { spend: 100000, customers: 50, ltv: 9000 },
    expectPrimary: '2 000 ₽',
    expectSecondary: [{ label: 'LTV к CAC', value: '4,50 : 1' }],
  },
  {
    name: 'граница: один клиент забирает весь бюджет',
    inputs: { spend: 100000, customers: 1 },
    expectPrimary: '100 000 ₽',
  },
  {
    name: 'граница: нулевые расходы дают нулевую стоимость',
    inputs: { spend: 0, customers: 50 },
    expectPrimary: '0 ₽',
  },
  {
    name: 'недопустимо: ноль клиентов',
    inputs: { spend: 100000, customers: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: дробное число клиентов',
    inputs: { spend: 100000, customers: 12.5 },
    expectPrimary: '—',
  },
// Дополнения: независимое деление, границы фактических счётчиков и IEEE-754.
  {
    name: 'ноль расходов: стоимость 0, отношение не определено делением',
    inputs: { spend: 0, customers: 50, ltv: 9000 },
    expectPrimary: '0 ₽',
    expectSecondary: [{ label: 'LTV к CAC', value: '—' }],
  },
  {
    name: 'пожизненная выручка не может быть отрицательной',
    inputs: { spend: 100000, customers: 50, ltv: -1 },
    expectPrimary: '—',
  },
  {
    name: 'малые затраты: 10⁻⁸ на одного клиента',
    inputs: { spend: 1e-8, customers: 1 },
    expectPrimary: '1,000·10^-8 ₽',
  },
];
