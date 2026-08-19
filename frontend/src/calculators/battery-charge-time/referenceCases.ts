import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из t = ёмкость / (ток × КПД):
//   100 / (10 × 1,0) = 10 ч        ·  100 / (10 × 0,8) = 12,5 ч
//   5 / (2 × 0,9) = 2,7778 ч -> 2 ч 47 мин
export const batteryChargeTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "100 А·ч током 10 А при полном КПД",
    inputs: {"capacityAh": 100, "currentA": 10, "efficiency": 100},
    expectPrimary: "10 ч 0 мин",
    expectSecondary: [{ label: "В часах", value: "10,00 ч" }],
  },
  {
    name: "тот же случай при КПД 80 % — на четверть дольше",
    inputs: {"capacityAh": 100, "currentA": 10, "efficiency": 80},
    expectPrimary: "12 ч 30 мин",
    expectSecondary: [{ label: "В часах", value: "12,50 ч" }],
  },
  {
    name: "малая батарея 5 А·ч током 2 А при КПД 90 %",
    inputs: {"capacityAh": 5, "currentA": 2, "efficiency": 90},
    expectPrimary: "2 ч 47 мин",
    expectSecondary: [{ label: "В часах", value: "2,78 ч" }],
  },
  {
    name: "граница: ток равен ёмкости — час зарядки",
    inputs: {"capacityAh": 100, "currentA": 100, "efficiency": 100},
    expectPrimary: "1 ч 0 мин",
  },
  {
    name: "нулевой ток отклоняется",
    inputs: {"capacityAh": 100, "currentA": 0, "efficiency": 100},
    expectPrimary: "—",
  },
  {
    name: "нулевой КПД отклоняется",
    inputs: {"capacityAh": 100, "currentA": 10, "efficiency": 0},
    expectPrimary: "—",
  },
];
