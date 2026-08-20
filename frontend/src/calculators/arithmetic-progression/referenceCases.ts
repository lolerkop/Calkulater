import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   aₙ = a₁ + (n−1)d; Sₙ = n(a₁+aₙ)/2
export const arithmeticProgressionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "a1=3, d=5, n=10",
    inputs: { "a1": 3, "d": 5, "n": 10 },
    expectPrimary: "48",
    expectSecondary: [{ label: "Сумма ряда", value: "255" }, { label: "Разность", value: "5" }],
  },
  {
    name: "убывающая a1=100, d=−7, n=15",
    inputs: { "a1": 100, "d": -7, "n": 15 },
    expectPrimary: "2",
    expectSecondary: [{ label: "Сумма ряда", value: "765" }, { label: "Разность", value: "-7" }],
  },
  {
    name: "d=0 — постоянный ряд",
    inputs: { "a1": 4, "d": 0, "n": 6 },
    expectPrimary: "4",
    expectSecondary: [{ label: "Сумма ряда", value: "24" }, { label: "Разность", value: "0" }],
  },
  {
    name: "нулевое число членов отклоняется",
    inputs: { "a1": 3, "d": 5, "n": 0 },
    expectPrimary: "—",
  },
];
