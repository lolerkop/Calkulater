import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   1500 / 25 = 60 · (1500 + 250) / 25 = 70 · 1500 / 1 = 1500
export const shippingPerUnitReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 1500 на 25 единиц дают 60',
    inputs: { shipping: 1500, units: 25 },
    expectPrimary: '60 ₽',
  },
  {
    name: 'с упаковкой: 1500 и 250 на 25 единиц дают 70',
    inputs: { shipping: 1500, units: 25, packaging: 250 },
    expectPrimary: '70 ₽',
    expectSecondary: [{ label: 'В том числе упаковка', value: '250 ₽' }],
  },
  {
    name: 'упаковка не задана — строка упаковки не выводится',
    inputs: { shipping: 1500, units: 25, packaging: 0 },
    expectPrimary: '60 ₽',
    expectSecondary: [{ label: 'Единиц в партии', value: '25' }],
  },
  {
    name: 'граница: одна единица забирает всю доставку',
    inputs: { shipping: 1500, units: 1 },
    expectPrimary: '1 500 ₽',
  },
  {
    name: 'недопустимо: ноль единиц',
    inputs: { shipping: 1500, units: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: дробное число единиц',
    inputs: { shipping: 1500, units: 25.5 },
    expectPrimary: '—',
  },
];
