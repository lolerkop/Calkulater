import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную (Phase 13P refcases.json):
//   50 000 * 1,12 = 56 000; 56 000 / 6 = 9 333,3333… -> 9 333,33
//   последний: 56 000 - 5 * 9 333,33 = 9 333,35
//   Наценка 0% даёт ровное деление и нулевую переплату.
export const installmentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '60 000 с взносом 10 000 на 6 месяцев под 12%',
    inputs: { price: 60000, down: 10000, months: 6, markup: 12 },
    expectPrimary: '9 333,33 ₽',
    expectSecondary: [
      { label: 'Сумма рассрочки', value: '50 000,00 ₽' },
      { label: 'Всего к выплате', value: '56 000,00 ₽' },
      { label: 'Переплата', value: '6 000,00 ₽' },
      { label: 'Последний платёж', value: '9 333,35 ₽' },
    ],
  },
  {
    name: '120 000 без взноса на 12 месяцев без наценки',
    inputs: { price: 120000, down: 0, months: 12, markup: 0 },
    expectPrimary: '10 000,00 ₽',
    expectSecondary: [{ label: 'Переплата', value: '0,00 ₽' }, { label: 'Последний платёж', value: '10 000,00 ₽' }],
  },
  {
    name: 'граница: срок в один платёж',
    inputs: { price: 60000, down: 10000, months: 1, markup: 12 },
    expectPrimary: '56 000,00 ₽',
    expectSecondary: [{ label: 'Последний платёж', value: '56 000,00 ₽' }],
  },
  {
    name: 'взнос не меньше цены отклоняется',
    inputs: { price: 60000, down: 60000, months: 6, markup: 12 },
    expectPrimary: '—',
  },
];
