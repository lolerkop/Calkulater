import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: ROAS = доход ÷ расход, ROI = (доход−расход) ÷ расход.
//   480 000 / 120 000 = 4,0× → 400 % и ROI 300 %
//   95 000 / 120 000 = 0,791666… → ROI −20,83 %
export const roasReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'доход 480 000 при расходе 120 000 — ROAS 4×',
    inputs: { revenue: 480000, cost: 120000, margin: 100 },
    expectPrimary: '4,00×',
    expectSecondary: [
      { label: 'ROAS в процентах', value: '400,00%' },
      { label: 'ROI', value: '300,00%' },
    ],
  },
  {
    name: 'убыточная кампания: доход 95 000 при расходе 120 000',
    inputs: { revenue: 95000, cost: 120000, margin: 100 },
    expectPrimary: '0,79×',
    expectSecondary: [{ label: 'ROI', value: '-20,83%' }],
  },
  {
    name: 'граница: доход равен расходу — точка окупаемости',
    inputs: { revenue: 120000, cost: 120000, margin: 100 },
    expectPrimary: '1,00×',
    expectSecondary: [{ label: 'ROI', value: '0,00%' }],
  },
  {
    name: 'маржа снижает окупаемость: 480 000 при марже 40 %',
    inputs: { revenue: 480000, cost: 120000, margin: 40 },
    expectPrimary: '4,00×',
    expectSecondary: [{ label: 'ROAS по валовой марже', value: '1,60×' }],
  },
  {
    name: 'недопустимо: нулевой расход',
    inputs: { revenue: 480000, cost: 0, margin: 100 },
    expectPrimary: '—',
  },
];
