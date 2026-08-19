import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную (Phase 13P refcases.json):
//   100 000 / 21 = 4 761,9047… -> 4 761,90 ₽; / 8 = 595,2380… -> 595,24 ₽
//   75 500 / 22 = 3 431,8181… -> 3 431,82 ₽; / 7 = 490,2597… -> 490,26 ₽
//   Число рабочих дней — поле со значением по умолчанию, а не календарная истина.
export const workdayCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '100 000 при 21 дне и 8 часах',
    inputs: { salary: 100000, days: 21, hours: 8 },
    expectPrimary: '4 761,90 ₽',
    expectSecondary: [{ label: 'Стоимость часа', value: '595,24 ₽' }],
  },
  {
    name: '75 500 при 22 днях и 7 часах',
    inputs: { salary: 75500, days: 22, hours: 7 },
    expectPrimary: '3 431,82 ₽',
    expectSecondary: [{ label: 'Стоимость часа', value: '490,26 ₽' }],
  },
  {
    name: 'граница: один день, один час',
    inputs: { salary: 100000, days: 1, hours: 1 },
    expectPrimary: '100 000,00 ₽',
    expectSecondary: [{ label: 'Стоимость часа', value: '100 000,00 ₽' }],
  },
  {
    name: 'нулевое число рабочих дней отклоняется',
    inputs: { salary: 100000, days: 0, hours: 8 },
    expectPrimary: '—',
  },
];
