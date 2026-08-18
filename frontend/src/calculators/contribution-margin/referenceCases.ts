import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   500 − 300 = 200; 200 / 500 = 0,40 → 40,00 %
//   200 × 1000 = 200 000
//   500 − 500 = 0   → 0,00 %
//   500 − 650 = −150; −150 / 500 = −0,30 → −30,00 %
export const contributionMarginReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: цена 500, переменные 300 → маржа 200 и 40 %',
    inputs: { price: 500, variable: 300 },
    expectPrimary: '200 ₽',
    expectSecondary: [{ label: 'Доля в цене', value: '40,00 %' }],
  },
  {
    name: 'с объёмом: тысяча единиц даёт 200 000',
    inputs: { price: 500, variable: 300, volume: 1000 },
    expectPrimary: '200 ₽',
    expectSecondary: [{ label: 'Маржинальный доход на объём', value: '200 000 ₽' }],
  },
  {
    name: 'граница: переменные равны цене, маржа нулевая',
    inputs: { price: 500, variable: 500 },
    expectPrimary: '0 ₽',
    expectSecondary: [{ label: 'Доля в цене', value: '0,00 %' }],
  },
  {
    name: 'убыточная позиция: переменные выше цены',
    inputs: { price: 500, variable: 650 },
    expectPrimary: '-150 ₽',
    expectSecondary: [
      { label: 'Доля в цене', value: '-30,00 %' },
      { label: 'Внимание', value: 'Переменные затраты выше цены' },
    ],
  },
  {
    name: 'объём не задан — строка объёма не выводится',
    inputs: { price: 500, variable: 300, volume: 0 },
    expectPrimary: '200 ₽',
    expectSecondary: [{ label: 'Переменные затраты', value: '300 ₽' }],
  },
  {
    name: 'недопустимо: нулевая цена',
    inputs: { price: 0, variable: 300 },
    expectPrimary: '—',
  },
];
