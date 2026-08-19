import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: V = размеры формы, затем V × (1 + запас/100).
//   6 × 4 × 0,2 = 4,8 м³; × 1,05 = 5,04 м³; запас 0,24 м³
//   10 × 3 × 0,15 = 4,5 м³ без запаса
// Чистый объём и объём с запасом остаются разными величинами и выводятся отдельно.
export const concreteReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'плита 6×4×0,2 с запасом 5 %',
    inputs: { mode: 'slab', length: 6, width: 4, thickness: 0.2, waste: 5 },
    expectPrimary: '5,04 м³',
    expectSecondary: [{ label: 'Чистый объём', value: '4,8 м³' }, { label: 'Запас', value: '0,24 м³' }],
  },
  {
    name: 'плита 10×3×0,15 без запаса',
    inputs: { mode: 'slab', length: 10, width: 3, thickness: 0.15, waste: 0 },
    expectPrimary: '4,5 м³',
    expectSecondary: [{ label: 'Чистый объём', value: '4,5 м³' }],
  },
  {
    name: '1×1×0,01 — тонкая стяжка',
    inputs: { mode: 'slab', length: 1, width: 1, thickness: 0.01, waste: 0 },
    expectPrimary: '0,01 м³',
  },
  {
    name: 'отрицательный запас отклоняется',
    inputs: { mode: 'slab', length: 6, width: 4, thickness: 0.2, waste: -5 },
    expectPrimary: '—',
  },
];
