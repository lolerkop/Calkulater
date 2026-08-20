import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const diceProbabilityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "два кубика d6, сумма 7",
    inputs: {"count": 2, "sides": 6, "target": 7},
    expectPrimary: "16,67%",
    expectSecondary: [{ label: "Благоприятных исходов", value: "6" }, { label: "Всего исходов", value: "36" }, { label: "Ожидаемая сумма", value: "7" }],
  },
  {
    name: "три кубика d6, сумма 10",
    inputs: {"count": 3, "sides": 6, "target": 10},
    expectPrimary: "12,50%",
    expectSecondary: [{ label: "Благоприятных исходов", value: "27" }, { label: "Всего исходов", value: "216" }, { label: "Ожидаемая сумма", value: "10,5" }],
  },
  {
    name: "минимальная сумма на двух d6",
    inputs: {"count": 2, "sides": 6, "target": 2},
    expectPrimary: "2,78%",
    expectSecondary: [{ label: "Благоприятных исходов", value: "1" }, { label: "Всего исходов", value: "36" }, { label: "Ожидаемая сумма", value: "7" }],
  },
  {
    name: "сумма вне диапазона отклоняется",
    inputs: {"count": 2, "sides": 6, "target": 1},
    expectPrimary: "—",
  },
];
