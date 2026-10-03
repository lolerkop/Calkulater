import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из a² + b² = c²:
//   3, 4      -> c = 5,  S = 6,  P = 12
//   a=5, c=13 -> b = 12, S = 30, P = 30
//   1, 1      -> c = √2 = 1,4142135…, S = 0,5
//   a=0,9999, c=1 -> b = √(1 − 0,99980001) = 0,0141417…
export const geomRightTriangleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "по двум катетам: 3-4-5",
    inputs: {"mode": "legs", "unit": "m", "a": 3, "b": 4},
    expectPrimary: "5 м",
    expectSecondary: [{ label: "Площадь", value: "6 м²" }, { label: "Периметр", value: "12 м" }],
  },
  {
    name: "по катету и гипотенузе: 5-12-13",
    inputs: {"mode": "legHyp", "unit": "cm", "a": 5, "c": 13},
    expectPrimary: "12 см",
    expectSecondary: [{ label: "Площадь", value: "30 см²" }, { label: "Периметр", value: "30 см" }],
  },
  {
    name: "равные катеты дают гипотенузу √2",
    inputs: {"mode": "legs", "unit": "m", "a": 1, "b": 1},
    expectPrimary: "1,414 м",
    expectSecondary: [{ label: "Площадь", value: "0,5 м²" }],
  },
  {
    name: "граница: гипотенуза едва длиннее катета",
    inputs: {"mode": "legHyp", "unit": "m", "a": 0.9999, "c": 1},
    expectPrimary: "0,0141 м",
  },
  {
    name: "гипотенуза, равная катету, отклоняется",
    inputs: {"mode": "legHyp", "unit": "cm", "a": 5, "c": 5},
    expectPrimary: "—",
  },
  {
    name: "гипотенуза короче катета отклоняется",
    inputs: {"mode": "legHyp", "unit": "cm", "a": 6, "c": 5},
    expectPrimary: "—",
  },
  // Независимые аналитические случаи: масштабирование формул и явные границы области.
  {"name": "большая гипотенуза и катет без переполнения квадратов", "inputs": {"mode": "legHyp", "unit": "m", "a": 1e+154, "c": 2e+154}, "expectPrimary": "1,732·10^154 м", "expectSecondary": [{"label": "Площадь", "value": "8,660·10^307 м²"}]},
  {"name": "неизвестный режим не превращается в обратный", "inputs": {"mode": "other", "unit": "m", "a": 3, "c": 5}, "expectPrimary": "—"},
];
