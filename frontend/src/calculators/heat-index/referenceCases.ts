import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью
// по тем же девяти коэффициентам регрессии:
//   32 °C при 70 % -> 89,6 °F -> индекс 104,74 °F -> 40,409 °C
//   28 °C при 90 % -> 82,4 °F -> индекс 92,746 °F -> 33,748 °C
//   26,7 °C при 50 % -> 80,06 °F — ровно на нижней границе области
export const heatIndexReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "32 °C при влажности 70 %",
    inputs: { t: 32, rh: 70 },
    expectPrimary: "40,409 °C",
    expectSecondary: [
      { label: "Прибавка к термометру", value: "8,409 °C" },
      { label: "В градусах Фаренгейта", value: "104,74 °F" },
      { label: "Термометр по Фаренгейту", value: "89,6 °F" },
    ],
  },
  {
    name: "28 °C при влажности 90 %",
    inputs: { t: 28, rh: 90 },
    expectPrimary: "33,748 °C",
    expectSecondary: [
      { label: "Прибавка к термометру", value: "5,748 °C" },
      { label: "В градусах Фаренгейта", value: "92,746 °F" },
    ],
  },
  {
    name: "граница: ровно 26,7 °C — нижний край области",
    inputs: { t: 26.7, rh: 50 },
    expectPrimary: "27,142 °C",
    expectSecondary: [
      { label: "Прибавка к термометру", value: "0,4423 °C" },
      { label: "Термометр по Фаренгейту", value: "80,06 °F" },
    ],
  },
  {
    name: "ниже области применимости отклоняется",
    inputs: { t: 22, rh: 80 },
    expectPrimary: "—",
  },
  {
    name: "влажность больше 100 % отклоняется",
    inputs: { t: 32, rh: 110 },
    expectPrimary: "—",
  },
];
