import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную (Phase 13P refcases.json):
//   i = 12 / 12 / 100 = 0,01; (1,01)^12 = 1,1268250301…
//   A = 1 000 000 * 0,01 / (1 - 1,1268250301^-1) = 88 848,7887… -> 88 848,79
//   Первый месяц: проценты 1 000 000 * 0,01 = 10 000, тело 78 848,79
//   11 * 88 848,79 + 88 848,76 = 1 066 185,45 — последний платёж забирает снос
//   округления, поэтому остаток закрывается ровно в нуль.
//   Нулевая ставка считается делением: 120 000 / 12 = 10 000.
export const annuityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '1 000 000 ₽ под 12% на 12 месяцев',
    inputs: { amount: 1000000, rate: 12, months: 12 },
    expectPrimary: '88 848,79 ₽',
    expectSecondary: [
      { label: 'Всего выплат', value: '1 066 185,45 ₽' },
      { label: 'Переплата', value: '66 185,45 ₽' },
      { label: 'Первый месяц: проценты', value: '10 000,00 ₽' },
      { label: 'Первый месяц: тело', value: '78 848,79 ₽' },
      { label: 'Последний платёж', value: '88 848,76 ₽' },
    ],
  },
  {
    name: '500 000 ₽ под 9,5% на 24 месяца',
    inputs: { amount: 500000, rate: 9.5, months: 24 },
    expectPrimary: '22 957,25 ₽',
    expectSecondary: [
      { label: 'Всего выплат', value: '550 973,92 ₽' },
      { label: 'Переплата', value: '50 973,92 ₽' },
      { label: 'Последний платёж', value: '22 957,17 ₽' },
    ],
  },
  {
    name: 'граница: нулевая ставка — деление без процентов',
    inputs: { amount: 120000, rate: 0, months: 12 },
    expectPrimary: '10 000,00 ₽',
    expectSecondary: [{ label: 'Переплата', value: '0,00 ₽' }],
  },
  {
    name: 'нулевой срок отклоняется',
    inputs: { amount: 1000000, rate: 12, months: 0 },
    expectPrimary: '—',
  },
];
