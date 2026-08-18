import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную: 45 / 900 = 0,05 → 5 % · 0 / 900 = 0 % · 900 / 900 = 100 %
export const returnRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 45 возвратов из 900 заказов дают 5 %',
    inputs: { returns: 45, orders: 900 },
    expectPrimary: '5,00 %',
    expectSecondary: [{ label: 'Оставлено покупателями', value: '95,00 %' }],
  },
  {
    name: 'граница: возвратов нет',
    inputs: { returns: 0, orders: 900 },
    expectPrimary: '0,00 %',
  },
  {
    name: 'граница: вернулись все заказы',
    inputs: { returns: 900, orders: 900 },
    expectPrimary: '100,00 %',
  },
  {
    name: 'перекрёстная проверка: возвратов больше, чем заказов',
    inputs: { returns: 1000, orders: 900 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: ноль заказов',
    inputs: { returns: 45, orders: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: дробное число возвратов',
    inputs: { returns: 4.5, orders: 900 },
    expectPrimary: '—',
  },
];
