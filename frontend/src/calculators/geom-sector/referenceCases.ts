import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную, угол переводится в радианы явно:
//   r=5, 60°: S = ½r²θ = ½·25·π/3 = 13,08997; дуга rθ = 5,23599; хорда 2r·sin(θ/2) = 5
//   r=12, 90°: S = ½·144·π/2 = 113,0973; дуга 18,84956; хорда 16,97056
//   360°: полный круг S = πr² = 78,53982; хорда обязана быть РОВНО нулём,
//   а не остатком с плавающей точкой.
export const geomSectorReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'r=5, 60°',
    inputs: { unit: 'cm', radius: 5, angle: 60 },
    expectPrimary: '13,09 см²',
    expectSecondary: [{ label: 'Длина дуги', value: '5,236 см' }, { label: 'Хорда', value: '5 см' }],
  },
  {
    name: 'r=12, 90°',
    inputs: { unit: 'cm', radius: 12, angle: 90 },
    expectPrimary: '113,1 см²',
    expectSecondary: [{ label: 'Длина дуги', value: '18,85 см' }, { label: 'Хорда', value: '16,971 см' }],
  },
  {
    name: '360° — полный круг, хорда ровно нуль',
    inputs: { unit: 'cm', radius: 5, angle: 360 },
    expectPrimary: '78,54 см²',
    expectSecondary: [{ label: 'Длина дуги', value: '31,416 см' }, { label: 'Хорда', value: '0 см' }],
  },
  {
    name: 'угол больше 360° отклоняется',
    inputs: { unit: 'cm', radius: 5, angle: 361 },
    expectPrimary: '—',
  },
];
