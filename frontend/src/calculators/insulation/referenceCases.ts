import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: V = площадь × толщина(мм)/1000.
//   60 × 0,1 = 6 м³; плит ceil(60 / 0,72) = ceil(83,33) = 84; упаковок ceil(84/6) = 14
//   24,5 × 0,05 = 1,225 м³; ceil(24,5 / 0,6) = ceil(40,83) = 41; ceil(41/8) = 6
//   Ровно одна плита: 0,72 / 0,72 = 1 без округления вверх.
// Размер плиты и число в упаковке — редактируемые поля, а не зашитый каталог.
export const insulationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '60 м², 100 мм, плита 0,72 м²',
    inputs: { area: 60, thickness: 100, slabArea: 0.72, perPack: 6 },
    expectPrimary: '6 м³',
    expectSecondary: [{ label: 'Плит', value: '84 шт' }, { label: 'Упаковок', value: '14 шт' }],
  },
  {
    name: '24,5 м², 50 мм, плита 0,6 м²',
    inputs: { area: 24.5, thickness: 50, slabArea: 0.6, perPack: 8 },
    expectPrimary: '1,225 м³',
    expectSecondary: [{ label: 'Плит', value: '41 шт' }, { label: 'Упаковок', value: '6 шт' }],
  },
  {
    name: 'ровно одна плита',
    inputs: { area: 0.72, thickness: 100, slabArea: 0.72, perPack: 6 },
    expectPrimary: '0,072 м³',
    expectSecondary: [{ label: 'Плит', value: '1 шт' }, { label: 'Упаковок', value: '1 шт' }],
  },
  {
    name: 'нулевая площадь плиты отклоняется',
    inputs: { area: 60, thickness: 100, slabArea: 0, perPack: 6 },
    expectPrimary: '—',
  },
];
