import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную точной целочисленной арифметикой:
//   1/2 + 1/3 = (1·3 + 1·2) / 6 = 5/6
//   2/3 · 3/4 = 6/12 -> сокращение на 6 -> 1/2
//   3/4 − 1/4 = (3·4 − 1·4) / 16 = 8/16 -> сокращение на 8 -> 1/2
//   (1/2) ÷ (1/4) = 4/2 -> сокращение на 2 -> 2
//   1/3 + 2/3 = 3/3  -> сокращение на 3 -> 1
export const fractionArithReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сложение: 1/2 + 1/3 = 5/6",
    inputs: {"op": "add", "a": 1, "b": 2, "c": 1, "d": 3},
    expectPrimary: "5/6",
    expectSecondary: [{ label: "Сокращено на", value: "1" }],
  },
  {
    name: "умножение с сокращением: 2/3 · 3/4 = 1/2",
    inputs: {"op": "mul", "a": 2, "b": 3, "c": 3, "d": 4},
    expectPrimary: "1/2",
    expectSecondary: [{ label: "Сокращено на", value: "6" }],
  },
  {
    name: "вычитание через общий знаменатель: 8/16 = 1/2",
    inputs: {"op": "sub", "a": 3, "b": 4, "c": 1, "d": 4},
    expectPrimary: "1/2",
    expectSecondary: [{ label: "Сокращено на", value: "8" }],
  },
  {
    name: "деление: (1/2) ÷ (1/4) = 2",
    inputs: {"op": "div", "a": 1, "b": 2, "c": 1, "d": 4},
    expectPrimary: "2",
    expectSecondary: [{ label: "Смешанное число", value: "2" }],
  },
  {
    name: "граница: 1/3 + 2/3 даёт целую единицу",
    inputs: {"op": "add", "a": 1, "b": 3, "c": 2, "d": 3},
    expectPrimary: "1",
    expectSecondary: [{ label: "Десятичное значение", value: "1" }],
  },
  {
    name: "нулевой знаменатель отклоняется",
    inputs: {"op": "add", "a": 1, "b": 0, "c": 1, "d": 2},
    expectPrimary: "—",
  },
  {
    name: "деление на нулевую дробь отклоняется",
    inputs: {"op": "div", "a": 1, "b": 2, "c": 0, "d": 5},
    expectPrimary: "—",
  },
];
