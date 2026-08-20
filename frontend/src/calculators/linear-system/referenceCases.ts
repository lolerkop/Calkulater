import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const linearSystemReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "2x+3y=13, 4x−y=5",
    inputs: {"a1": 2, "a2": 4, "b1": 3, "b2": -1, "c1": 13, "c2": 5},
    expectPrimary: "x = 2",
    expectSecondary: [{ label: "y", value: "3" }, { label: "Определитель", value: "-14" }],
  },
  {
    name: "1.5x−2y=−1, 3x+4y=18",
    inputs: {"a1": 1.5, "a2": 3, "b1": -2, "b2": 4, "c1": -1, "c2": 18},
    expectPrimary: "x = 2,667",
    expectSecondary: [{ label: "y", value: "2,5" }, { label: "Определитель", value: "12" }],
  },
  {
    name: "единичная система x=4, y=7",
    inputs: {"a1": 1, "a2": 0, "b1": 0, "b2": 1, "c1": 4, "c2": 7},
    expectPrimary: "x = 4",
    expectSecondary: [{ label: "y", value: "7" }, { label: "Определитель", value: "1" }],
  },
  {
    name: "нулевой определитель отклоняется",
    inputs: {"a1": 1, "a2": 2, "b1": 2, "b2": 4, "c1": 3, "c2": 6},
    expectPrimary: "—",
  },
];
