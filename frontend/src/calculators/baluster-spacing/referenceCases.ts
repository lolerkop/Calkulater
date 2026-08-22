import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   3000 мм, стойка 40, предел 100 -> 21 стойка, просвет (3000−840)/22 = 98,18
//   1200 мм, стойка 30, предел 120 -> 8 стоек, просвет (1200−240)/9 = 106,67
//   300 мм, стойка 40, предел 130 -> 1 стойка, просвет (300−40)/2 = 130 ровно
export const balusterSpacingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пролёт 3000 мм, стойка 40 мм, просвет не более 100 мм",
    inputs: { run: 3000, baluster_width: 40, max_gap: 100 },
    expectPrimary: "21 шт",
    expectSecondary: [
      { label: "Фактический просвет", value: "98,182 мм" },
      { label: "Шаг между осями", value: "140,83 мм" },
      { label: "Суммарная ширина стоек", value: "840 мм" },
    ],
  },
  {
    name: "пролёт 1200 мм, стойка 30 мм, просвет не более 120 мм",
    inputs: { run: 1200, baluster_width: 30, max_gap: 120 },
    expectPrimary: "8 шт",
    expectSecondary: [
      { label: "Фактический просвет", value: "106,67 мм" },
      { label: "Суммарная ширина стоек", value: "240 мм" },
    ],
  },
  {
    name: "граница: одна стойка укладывается ровно в предел",
    inputs: { run: 300, baluster_width: 40, max_gap: 130 },
    expectPrimary: "1 шт",
    expectSecondary: [
      { label: "Фактический просвет", value: "130 мм" },
      { label: "Шаг между осями", value: "215 мм" },
    ],
  },
  {
    name: "стойка шире пролёта отклоняется",
    inputs: { run: 100, baluster_width: 150, max_gap: 80 },
    expectPrimary: "—",
  },
  {
    name: "нулевой предел просвета отклоняется",
    inputs: { run: 3000, baluster_width: 40, max_gap: 0 },
    expectPrimary: "—",
  },
];
