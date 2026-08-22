import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   круг Ø20: S = π·10² = 314,159 мм²; 314,159e−6 × 6 × 7,85 × 1000 = 14,797 кг
//   полоса 40×4: S = 160 мм²; 160e−6 × 3 × 7,85 × 1000 = 3,768 кг
//   квадрат 10: S = 100 мм²; 100e−6 × 1 × 7,85 × 1000 = 0,785 кг
export const metalWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "круг Ø20 мм длиной 6 м, сталь 7,85",
    inputs: { shape: 'round', density: 7.85, a: 20, b: 0, length: 6 },
    expectPrimary: "14,797 кг",
    expectSecondary: [
      { label: "Площадь сечения", value: "314,16 мм²" },
      { label: "Объём металла", value: "0,001885 м³" },
      { label: "Погонная масса", value: "2,466 кг/м" },
    ],
  },
  {
    name: "полоса 40×4 мм длиной 3 м",
    inputs: { shape: 'flat', density: 7.85, a: 40, b: 4, length: 3 },
    expectPrimary: "3,768 кг",
    expectSecondary: [
      { label: "Площадь сечения", value: "160 мм²" },
      { label: "Объём металла", value: "0,00048 м³" },
      { label: "Погонная масса", value: "1,256 кг/м" },
    ],
  },
  {
    name: "граница: квадрат 10 мм длиной ровно метр",
    inputs: { shape: 'square', density: 7.85, a: 10, b: 0, length: 1 },
    expectPrimary: "0,785 кг",
    expectSecondary: [
      { label: "Площадь сечения", value: "100 мм²" },
      { label: "Погонная масса", value: "0,785 кг/м" },
    ],
  },
  {
    name: "неизвестная форма сечения отклоняется",
    inputs: { shape: 'hex', density: 7.85, a: 10, b: 0, length: 1 },
    expectPrimary: "—",
  },
  {
    name: "нулевая плотность отклоняется",
    inputs: { shape: 'round', density: 0, a: 20, b: 0, length: 6 },
    expectPrimary: "—",
  },
];
