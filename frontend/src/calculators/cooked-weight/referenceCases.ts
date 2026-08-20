import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   200 г сухого × 2,5 = 500 г готового; калорий 200/100 × 350 = 700
//   на 100 г готового 700 / 500 × 100 = 140
//   750 г готового / 2,2 = 340,909090… г сухого; калорий 340,909… /100 × 330 = 1125
//   коэффициент 1: вес не меняется, 200 г -> 200 г, на 100 г готового 350
export const cookedWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "200 граммов сухого риса при коэффициенте 2,5",
    inputs: { mode: 'rawToCooked', raw: 200, cooked: 0, factor: 2.5, kcalPer100Raw: 350 },
    expectPrimary: "500 г",
    expectSecondary: [
      { label: "Калорий всего", value: "700 ккал" },
      { label: "Ккал на 100 г готового", value: "140" },
    ],
  },
  {
    name: "обратный счёт: 750 граммов готовой гречки",
    inputs: { mode: 'cookedToRaw', raw: 0, cooked: 750, factor: 2.2, kcalPer100Raw: 330 },
    expectPrimary: "340,91 г",
    expectSecondary: [
      { label: "Готовый вес", value: "750 г" },
      { label: "Калорий всего", value: "1 125 ккал" },
    ],
  },
  {
    name: "граница: коэффициент 1 — вес не меняется",
    inputs: { mode: 'rawToCooked', raw: 200, cooked: 0, factor: 1, kcalPer100Raw: 350 },
    expectPrimary: "200 г",
    expectSecondary: [{ label: "Ккал на 100 г готового", value: "350" }],
  },
  {
    name: "нулевой коэффициент отклоняется",
    inputs: { mode: 'rawToCooked', raw: 200, cooked: 0, factor: 0, kcalPer100Raw: 350 },
    expectPrimary: "—",
  },
];
