import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: литры = путь/100 × расход; итого = топливо + платные.
//   800/100 × 7,5 = 60 л × 62 = 3720
//   1200/100 × 9 = 108 л × 58 = 6264 + 1500 = 7764; на четверых 1941
export const tripCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '800 км при 7,5 л/100 и цене 62 — 3720 рублей',
    inputs: { distance: 800, consumption: 7.5, fuelPrice: 62, tolls: 0, passengers: 1 },
    expectPrimary: '3 720,00 ₽',
    expectSecondary: [{ label: 'Израсходовано литров', value: '60,00 л' }],
  },
  {
    name: 'с платными дорогами и делением на четверых',
    inputs: { distance: 1200, consumption: 9, fuelPrice: 58, tolls: 1500, passengers: 4 },
    expectPrimary: '7 764,00 ₽',
    expectSecondary: [
      { label: 'Топливо', value: '6 264,00 ₽' },
      { label: 'На человека', value: '1 941,00 ₽' },
    ],
  },
  {
    name: 'туда и обратно удваивает путь и стоимость',
    inputs: { distance: 800, consumption: 7.5, fuelPrice: 62, tolls: 0, passengers: 1, roundTrip: 'yes' },
    expectPrimary: '7 440,00 ₽',
  },
  {
    name: 'граница: без платных дорог итог равен стоимости топлива',
    inputs: { distance: 100, consumption: 10, fuelPrice: 60, tolls: 0, passengers: 1 },
    expectPrimary: '600,00 ₽',
  },
  {
    name: 'недопустимо: ноль пассажиров',
    inputs: { distance: 800, consumption: 7.5, fuelPrice: 62, tolls: 0, passengers: 0 },
    expectPrimary: '—',
  },
];
