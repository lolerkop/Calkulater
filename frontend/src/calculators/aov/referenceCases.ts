import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную: 250 000 / 200 = 1250 · 999 / 3 = 333
export const aovReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 250 000 на 200 заказов дают 1250',
    inputs: { revenue: 250000, orders: 200 },
    expectPrimary: '1 250 ₽',
  },
  {
    name: 'делится нацело: 999 на 3 заказа дают 333',
    inputs: { revenue: 999, orders: 3 },
    expectPrimary: '333 ₽',
  },
  {
    name: 'граница: один заказ равен всей выручке',
    inputs: { revenue: 250000, orders: 1 },
    expectPrimary: '250 000 ₽',
  },
  {
    name: 'граница: нулевая выручка',
    inputs: { revenue: 0, orders: 200 },
    expectPrimary: '0 ₽',
  },
  {
    name: 'недопустимо: ноль заказов',
    inputs: { revenue: 250000, orders: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: дробное число заказов',
    inputs: { revenue: 250000, orders: 12.5 },
    expectPrimary: '—',
  },
];
