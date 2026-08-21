import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: formatStatistic отбрасывает хвостовые нули,
// поэтому 0,8400 отгружается как 0,84.
//   84/178 = 0,4719 — здоровый; 89/178 = ровно 0,5 — уже повышенный
export const waistRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "талия восемьдесят четыре при росте сто семьдесят восемь",
    inputs: { "height": 178, "hip": 100, "waist": 84 },
    expectPrimary: "0,4719",
    expectSecondary: [
      { label: "Отношение талии к бёдрам", value: "0,84" },
      { label: "Категория", value: "здоровый" },
    ],
  },
  {
    name: "повышенное отношение",
    inputs: { "height": 170, "hip": 98, "waist": 95 },
    expectPrimary: "0,5588",
    expectSecondary: [
      { label: "Отношение талии к бёдрам", value: "0,9694" },
      { label: "Категория", value: "повышенный" },
    ],
  },
  {
    name: "граница: ровно половина роста",
    inputs: { "height": 178, "hip": 100, "waist": 89 },
    expectPrimary: "0,5",
    expectSecondary: [
      { label: "Отношение талии к бёдрам", value: "0,89" },
      { label: "Категория", value: "повышенный" },
    ],
  },
  {
    name: "нулевая талия отклоняется",
    inputs: { "height": 178, "hip": 100, "waist": 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой рост отклоняется",
    inputs: { "height": 0, "hip": 100, "waist": 84 },
    expectPrimary: "—",
  },
];
