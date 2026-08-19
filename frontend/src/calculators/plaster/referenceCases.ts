import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: масса = площадь × толщина(мм) × расход(кг/м²/мм).
//   20 × 10 × 8,5 = 1 700 кг; мешков ceil(1700 / 30) = ceil(56,67) = 57
//   35,5 × 15 × 9 = 4 792,5 кг; ceil(4792,5 / 25) = ceil(191,7) = 192
// Расход 8,5 — редактируемое допущение, а не универсальный факт о материале.
export const plasterReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '20 м², слой 10 мм, расход 8,5',
    inputs: { area: 20, thickness: 10, consumption: 8.5, bagWeight: 30 },
    expectPrimary: '1 700,00 кг',
    expectSecondary: [{ label: 'Мешков', value: '57 шт' }, { label: 'Расход на м²', value: '85,00 кг' }],
  },
  {
    name: '35,5 м², слой 15 мм',
    inputs: { area: 35.5, thickness: 15, consumption: 9, bagWeight: 25 },
    expectPrimary: '4 792,50 кг',
    expectSecondary: [{ label: 'Мешков', value: '192 шт' }],
  },
  {
    name: 'минимум: 1 м² при слое 1 мм',
    inputs: { area: 1, thickness: 1, consumption: 8.5, bagWeight: 30 },
    expectPrimary: '8,50 кг',
    expectSecondary: [{ label: 'Мешков', value: '1 шт' }],
  },
  {
    name: 'нулевая толщина слоя отклоняется',
    inputs: { area: 20, thickness: 0, consumption: 8.5, bagWeight: 30 },
    expectPrimary: '—',
  },
];
