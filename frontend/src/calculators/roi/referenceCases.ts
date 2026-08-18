import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   (130 000 − 100 000) / 100 000 = 0,30 → +30,00 %
//   (130 000 − 110 000) / 110 000 = 0,181818… → +18,18 %
//   (80 000 − 100 000) / 100 000 = −0,20 → −20,00 %
export const roiReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный: 130 000 при вложении 100 000 дают +30 %',
    inputs: { received: 130000, invested: 100000 },
    expectPrimary: '30,00 %',
    expectSecondary: [{ label: 'Прибыль', value: '30 000 ₽' }],
  },
  {
    name: 'дополнительные затраты входят и в знаменатель: +18,18 %',
    inputs: { received: 130000, invested: 100000, extra: 10000 },
    expectPrimary: '18,18 %',
    expectSecondary: [{ label: 'Всего вложено', value: '110 000 ₽' }],
  },
  {
    name: 'убыток: получено меньше вложенного',
    inputs: { received: 80000, invested: 100000 },
    expectPrimary: '-20,00 %',
    expectSecondary: [{ label: 'Прибыль', value: '-20 000 ₽' }],
  },
  {
    name: 'граница: вернулось ровно вложенное',
    inputs: { received: 100000, invested: 100000 },
    expectPrimary: '0,00 %',
  },
  {
    name: 'граница: дополнительные затраты не заданы',
    inputs: { received: 130000, invested: 100000, extra: 0 },
    expectPrimary: '30,00 %',
  },
  {
    name: 'недопустимо: нулевые вложения',
    inputs: { received: 130000, invested: 0 },
    expectPrimary: '—',
  },
];
