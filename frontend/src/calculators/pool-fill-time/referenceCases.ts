import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: литры = объём × 1000, минуты = литры ÷ расход.
//   32 м³ → 32 000 л ÷ 20 = 1600 мин = 26,67 ч
//   8×4×1,5 = 48 м³ → 48 000 ÷ 35 = 1371,43 мин · π·2²·1,2 = 15,0796 м³
export const poolFillTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'готовый объём 32 м³ при расходе 20 л/мин',
    inputs: { mode: 'volume', volume: 32, flow: 20, flowUnit: 'lmin' },
    expectPrimary: '26,67 ч',
    expectSecondary: [{ label: 'Всего минут', value: '1 600,00' }],
  },
  {
    name: 'прямоугольная чаша 8 × 4 × 1,5 м при 35 л/мин',
    inputs: { mode: 'rect', length: 8, width: 4, depth: 1.5, flow: 35, flowUnit: 'lmin' },
    expectPrimary: '22,86 ч',
    expectSecondary: [{ label: 'Объём чаши', value: '48,00 м³' }],
  },
  {
    name: 'круглая чаша диаметром 4 м и глубиной 1,2 м при 25 л/мин',
    inputs: { mode: 'round', diameter: 4, depth: 1.2, flow: 25, flowUnit: 'lmin' },
    expectPrimary: '10,05 ч',
    expectSecondary: [{ label: 'Объём чаши', value: '15,08 м³' }],
  },
  {
    name: 'граница: кубометр при расходе 1000 л/мин наполняется за минуту',
    inputs: { mode: 'volume', volume: 1, flow: 1000, flowUnit: 'lmin' },
    expectSecondary: [{ label: 'Всего минут', value: '1,00' }],
    expectPrimary: '0,02 ч',
  },
  {
    name: 'расход в кубометрах в час пересчитывается верно',
    inputs: { mode: 'volume', volume: 32, flow: 1.2, flowUnit: 'm3hour' },
    expectPrimary: '26,67 ч',
  },
  {
    name: 'недопустимо: нулевой расход',
    inputs: { mode: 'volume', volume: 32, flow: 0, flowUnit: 'lmin' },
    expectPrimary: '—',
  },
];
