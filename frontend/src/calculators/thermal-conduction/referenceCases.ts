import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   λ 0,04, d 0,2 -> R = 5 м²·К/Вт; q = 0,04·25/0,2 = 5 Вт/м²; Q = 50 Вт
//   стекло λ 1,0, d 0,004 -> R = 0,004; q = 5 000 Вт/м²; Q = 10 000 Вт
//   ΔT = 0 -> поток нулевой, сопротивление слоя от этого не меняется
export const thermalConductionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "стена 10 м², 200 мм утеплителя, перепад 25 К",
    inputs: { area: 10, thickness: 0.2, k: 0.04, dt: 25 },
    expectPrimary: "50 Вт",
    expectSecondary: [
      { label: "Плотность потока", value: "5 Вт/м²" },
      { label: "Сопротивление слоя", value: "5 м²·К/Вт" },
      { label: "Коэффициент теплопередачи", value: "0,2 Вт/(м²·К)" },
    ],
  },
  {
    name: "окно 2 м², 4 мм стекла, перепад 20 К",
    inputs: { area: 2, thickness: 0.004, k: 1, dt: 20 },
    expectPrimary: "10 000 Вт",
    expectSecondary: [
      { label: "Плотность потока", value: "5 000 Вт/м²" },
      { label: "Сопротивление слоя", value: "0,004 м²·К/Вт" },
      { label: "Коэффициент теплопередачи", value: "250 Вт/(м²·К)" },
    ],
  },
  {
    name: "граница: нулевой перепад температур не даёт потока",
    inputs: { area: 10, thickness: 0.2, k: 0.04, dt: 0 },
    expectPrimary: "0 Вт",
    expectSecondary: [
      { label: "Плотность потока", value: "0 Вт/м²" },
      { label: "Сопротивление слоя", value: "5 м²·К/Вт" },
    ],
  },
  {
    name: "нулевая толщина слоя отклоняется",
    inputs: { area: 10, thickness: 0, k: 0.04, dt: 25 },
    expectPrimary: "—",
  },
  {
    name: "нулевая теплопроводность отклоняется",
    inputs: { area: 10, thickness: 0.2, k: 0, dt: 25 },
    expectPrimary: "—",
  },
];
