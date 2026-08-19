import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из F = m · a:
//   10 · 2 = 20 Н     ·  50 / 5 = 10 кг     ·  12 / 4 = 3 м/с²
//   10⁻⁶ · 10⁻⁶ = 10⁻¹² Н — законная величина, поэтому показательная запись
export const newtonForceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сила по массе и ускорению: 10 · 2 = 20",
    inputs: {"mode": "F", "m": 10, "a": 2},
    expectPrimary: "20 Н",
    expectSecondary: [{ label: "Вес у поверхности Земли", value: "98,066 Н" }],
  },
  {
    name: "масса по силе и ускорению: 50 / 5 = 10",
    inputs: {"mode": "m", "F": 50, "a2": 5},
    expectPrimary: "10 кг",
    expectSecondary: [{ label: "Сила", value: "50 Н" }],
  },
  {
    name: "ускорение по силе и массе: 12 / 4 = 3",
    inputs: {"mode": "a", "F2": 12, "m2": 4},
    expectPrimary: "3 м/с²",
    expectSecondary: [{ label: "Масса", value: "4 кг" }],
  },
  {
    name: "граница: микроскопические величины дают 10⁻¹² Н",
    inputs: {"mode": "F", "m": 1e-06, "a": 1e-06},
    expectPrimary: "1,000·10^-12 Н",
  },
  {
    name: "нулевое ускорение при поиске массы отклоняется",
    inputs: {"mode": "m", "F": 50, "a2": 0},
    expectPrimary: "—",
  },
  {
    name: "отрицательная масса отклоняется",
    inputs: {"mode": "F", "m": -2, "a": 3},
    expectPrimary: "—",
  },
];
