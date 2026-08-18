import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   12 / 200 = 0,06 → 6,00 % · 0 / 200 = 0 % · 25 / 200 = 12,50 %
//   пакет 100 акций: дивиденды 1200, стоимость 20 000
export const dividendYieldReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: дивиденд 12 при цене 200 даёт 6 %',
    inputs: { dividend: 12, price: 200 },
    expectPrimary: '6,00 %',
  },
  {
    name: 'с пакетом: сто акций дают 1200 дивидендов',
    inputs: { dividend: 12, price: 200, shares: 100 },
    expectPrimary: '6,00 %',
    expectSecondary: [
      { label: 'Дивиденды на пакет', value: '1 200 ₽' },
      { label: 'Стоимость пакета', value: '20 000 ₽' },
    ],
  },
  {
    name: 'граница: дивиденды не выплачивались',
    inputs: { dividend: 0, price: 200 },
    expectPrimary: '0,00 %',
  },
  {
    name: 'высокая доходность: 25 при цене 200',
    inputs: { dividend: 25, price: 200 },
    expectPrimary: '12,50 %',
  },
  {
    name: 'недопустимо: нулевая цена',
    inputs: { dividend: 12, price: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: отрицательный дивиденд',
    inputs: { dividend: -12, price: 200 },
    expectPrimary: '—',
  },
];
