import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   2,8 / 0,18 = 15,6 -> 16 подступенков, высота 2,8 / 16 = 0,175
//   1,2 / 0,20 = 6 ровно -> 6 подступенков по 0,2
//   0,18 / 0,18 = 1 -> один подступенок, проступей нет, длина марша нулевая
export const stairsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "подъём 2,8 м при пределе ступени 0,18 м",
    inputs: { rise_total: 2.8, tread: 0.28, max_riser: 0.18 },
    expectPrimary: "16 шт",
    expectSecondary: [
      { label: "Высота подступенка", value: "0,175 м" },
      { label: "Проступей", value: "15 шт" },
      { label: "Длина марша", value: "4,2 м" },
      { label: "Угол наклона", value: "32,005°" },
      { label: "Формула удобства 2h + b", value: "0,63 м" },
    ],
  },
  {
    name: "подъём 1,2 м делится на предел ровно",
    inputs: { rise_total: 1.2, tread: 0.3, max_riser: 0.2 },
    expectPrimary: "6 шт",
    expectSecondary: [
      { label: "Высота подступенка", value: "0,2 м" },
      { label: "Длина марша", value: "1,5 м" },
      { label: "Угол наклона", value: "33,69°" },
    ],
  },
  {
    name: "граница: ровно один подступенок, проступей нет",
    inputs: { rise_total: 0.18, tread: 0.3, max_riser: 0.18 },
    expectPrimary: "1 шт",
    expectSecondary: [
      { label: "Проступей", value: "0 шт" },
      { label: "Длина марша", value: "0 м" },
      { label: "Высота подступенка", value: "0,18 м" },
    ],
  },
  {
    name: "нулевая проступь отклоняется",
    inputs: { rise_total: 2.8, tread: 0, max_riser: 0.18 },
    expectPrimary: "—",
  },
  {
    name: "нулевой предел высоты ступени отклоняется",
    inputs: { rise_total: 2.8, tread: 0.28, max_riser: 0 },
    expectPrimary: "—",
  },
];
