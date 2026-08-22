import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   индейка 5 кг: 20 + 40×5 = 220 мин = 3 ч 40 мин; отдых 20 % = 44 мин
//   стейк 0,3 кг: 2 + 20×0,3 = 8 мин; отдых 30 % = 2,4 мин
//   без отдыха: 0 + 30×2 = 60 мин ровно = 1 ч 0 мин
export const roastTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "индейка 5 кг при 40 мин/кг и базе 20 мин",
    inputs: { weight: 5, minutes_per_kg: 40, base_minutes: 20, rest_pct: 20 },
    expectPrimary: "3 ч 40 мин",
    expectSecondary: [
      { label: "Минут готовки", value: "220 мин" },
      { label: "Отдых после духовки", value: "44 мин" },
      { label: "Всего с отдыхом", value: "264 мин" },
    ],
  },
  {
    name: "стейк 300 г при 20 мин/кг и базе 2 мин",
    inputs: { weight: 0.3, minutes_per_kg: 20, base_minutes: 2, rest_pct: 30 },
    expectPrimary: "8 мин",
    expectSecondary: [
      { label: "Минут готовки", value: "8 мин" },
      { label: "Отдых после духовки", value: "2,4 мин" },
      { label: "Всего с отдыхом", value: "10,4 мин" },
    ],
  },
  {
    name: "граница: без отдыха и без постоянной части",
    inputs: { weight: 2, minutes_per_kg: 30, base_minutes: 0, rest_pct: 0 },
    expectPrimary: "1 ч 0 мин",
    expectSecondary: [
      { label: "Минут готовки", value: "60 мин" },
      { label: "Отдых после духовки", value: "0 мин" },
    ],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { weight: 0, minutes_per_kg: 30, base_minutes: 10, rest_pct: 10 },
    expectPrimary: "—",
  },
  {
    name: "отдых свыше половины времени отклоняется",
    inputs: { weight: 2, minutes_per_kg: 30, base_minutes: 10, rest_pct: 60 },
    expectPrimary: "—",
  },
];
