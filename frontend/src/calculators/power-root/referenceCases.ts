import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   power: aⁿ; root: ⁿ√a, для отрицательного a только при нечётном n
export const powerRootReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "2 в степени 10",
    inputs: { "mode": "power", "base": 2, "exponent": 10 },
    expectPrimary: "1 024",
    expectSecondary: [{ label: "Основание", value: "2" }, { label: "Показатель", value: "10" }],
  },
  {
    name: "корень 3-й степени из 27",
    inputs: { "mode": "root", "base": 27, "exponent": 3 },
    expectPrimary: "3",
    expectSecondary: [{ label: "Основание", value: "27" }, { label: "Показатель", value: "3" }],
  },
  {
    name: "любое число в степени 0",
    inputs: { "mode": "power", "base": 7, "exponent": 0 },
    expectPrimary: "1",
    expectSecondary: [{ label: "Основание", value: "7" }, { label: "Показатель", value: "0" }],
  },
  {
    name: "отрицательное основание, нечётный корень",
    inputs: { "mode": "root", "base": -8, "exponent": 3 },
    expectPrimary: "-2",
    expectSecondary: [{ label: "Основание", value: "-8" }, { label: "Показатель", value: "3" }],
  },
  {
    name: "чётный корень из отрицательного числа отклоняется",
    inputs: { "mode": "root", "base": -16, "exponent": 2 },
    expectPrimary: "—",
  },
];
