import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   (300 000 − 100 000) / 100 000 = +200 %, ROAS 3
//   (80 000 − 100 000) / 100 000 = −20 %, ROAS 0,8
//   (100 000 − 100 000) / 100 000 = 0 %, ROAS 1 — точка окупаемости
export const adRoiReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'прибыльная кампания: выручка втрое больше расходов',
    inputs: { revenue: 300000, spend: 100000 },
    expectPrimary: '200,00 %',
    expectSecondary: [{ label: 'ROAS', value: '3,00 : 1' }],
  },
  {
    name: 'убыточная кампания: вернулось меньше вложенного',
    inputs: { revenue: 80000, spend: 100000 },
    expectPrimary: '-20,00 %',
    expectSecondary: [{ label: 'ROAS', value: '0,80 : 1' }],
  },
  {
    name: 'точка окупаемости: выручка равна расходам',
    inputs: { revenue: 100000, spend: 100000 },
    expectPrimary: '0,00 %',
    expectSecondary: [{ label: 'ROAS', value: '1,00 : 1' }],
  },
  {
    name: 'граница: нулевая выручка даёт полную потерю',
    inputs: { revenue: 0, spend: 100000 },
    expectPrimary: '-100,00 %',
  },
  {
    name: 'недопустимо: нулевые расходы',
    inputs: { revenue: 300000, spend: 0 },
    expectPrimary: '—',
  },
];
