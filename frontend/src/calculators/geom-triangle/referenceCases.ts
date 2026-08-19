import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из формулы Герона S = √(p(p−a)(p−b)(p−c)):
//   3,4,5 -> p = 6,  S = √(6·3·2·1) = 6,        3²+4² = 5² -> прямоугольный
//   7,8,9 -> p = 12, S = √(12·5·4·3) = √720 = 26,8328157…
//   основание 10 и высота 4 -> S = ½·10·4 = 20
export const geomTriangleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "египетский треугольник 3-4-5",
    inputs: {"mode": "sss", "unit": "m", "a": 3, "b": 4, "c": 5},
    expectPrimary: "6 м²",
    expectSecondary: [{ label: "Периметр", value: "12 м" }, { label: "Вид треугольника", value: "прямоугольный" }],
  },
  {
    name: "разносторонний 7-8-9 по Герону",
    inputs: {"mode": "sss", "unit": "cm", "a": 7, "b": 8, "c": 9},
    expectPrimary: "26,833 см²",
    expectSecondary: [{ label: "Периметр", value: "24 см" }, { label: "Вид треугольника", value: "остроугольный" }],
  },
  {
    name: "по основанию и высоте: ½·10·4 = 20",
    inputs: {"mode": "baseHeight", "unit": "m", "base": 10, "height": 4},
    expectPrimary: "20 м²",
    expectSecondary: [{ label: "Основание", value: "10 м" }],
  },
  {
    name: "граница: почти вырожденный треугольник ещё считается",
    inputs: {"mode": "sss", "unit": "m", "a": 1, "b": 1, "c": 1.999999},
    expectPrimary: "0,001 м²",
    expectSecondary: [{ label: "Вид треугольника", value: "тупоугольный" }],
  },
  {
    name: "вырожденные стороны 1-2-3 отклоняются",
    inputs: {"mode": "sss", "unit": "cm", "a": 1, "b": 2, "c": 3},
    expectPrimary: "—",
  },
  {
    name: "невозможные стороны 1-1-5 отклоняются",
    inputs: {"mode": "sss", "unit": "cm", "a": 1, "b": 1, "c": 5},
    expectPrimary: "—",
  },
];
