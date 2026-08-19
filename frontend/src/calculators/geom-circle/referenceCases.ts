import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из S = πr², C = 2πr:
//   r = 3  -> S = 28,2743338…, C = 18,8495559…
//   d = 10 -> r = 5, S = 78,5398163…, C = 31,4159265…
//   C = 31,4159265 -> r = 4,99999999…  (обратный ход того же выражения)
//   S = 78,5398163 -> r = 4,99999999…
export const geomCircleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "по радиусу: π·3² = 28,274",
    inputs: {"mode": "radius", "unit": "m", "r": 3},
    expectPrimary: "28,274 м²",
    expectSecondary: [{ label: "Диаметр", value: "6 м" }, { label: "Длина окружности", value: "18,85 м" }],
  },
  {
    name: "по диаметру: 10 / 2 = 5",
    inputs: {"mode": "diameter", "unit": "cm", "d": 10},
    expectPrimary: "78,54 см²",
    expectSecondary: [{ label: "Радиус", value: "5 см" }, { label: "Длина окружности", value: "31,416 см" }],
  },
  {
    name: "по длине окружности: 31,4159265 / 2π = 5",
    inputs: {"mode": "circumference", "unit": "m", "c": 31.4159265},
    expectPrimary: "78,54 м²",
    expectSecondary: [{ label: "Радиус", value: "5 м" }],
  },
  {
    name: "по площади: √(78,5398163 / π) = 5",
    inputs: {"mode": "area", "unit": "m", "area": 78.5398163},
    expectPrimary: "78,54 м²",
    expectSecondary: [{ label: "Радиус", value: "5 м" }],
  },
  {
    name: "граница: единичный радиус даёт площадь π",
    inputs: {"mode": "radius", "unit": "m", "r": 1},
    expectPrimary: "3,142 м²",
    expectSecondary: [{ label: "Длина окружности", value: "6,283 м" }],
  },
  {
    name: "нулевой радиус отклоняется",
    inputs: {"mode": "radius", "unit": "cm", "r": 0},
    expectPrimary: "—",
  },
];
