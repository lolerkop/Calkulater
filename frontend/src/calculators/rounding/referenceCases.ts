import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const roundingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "2 748,536 до двух знаков, к ближайшему",
    inputs: {"digits": 2, "mode": "half", "value": 2748.536},
    expectPrimary: "2 748,54",
    expectSecondary: [{ label: "Исходное значение", value: "2 748,536" }, { label: "Разница", value: "0,004" }, { label: "Знаков", value: "2" }],
  },
  {
    name: "2 748,536 до одного знака, вниз",
    inputs: {"digits": 1, "mode": "down", "value": 2748.536},
    expectPrimary: "2 748,5",
    expectSecondary: [{ label: "Исходное значение", value: "2 748,536" }, { label: "Разница", value: "-0,036" }, { label: "Знаков", value: "1" }],
  },
  {
    name: "целое остаётся собой",
    inputs: {"digits": 0, "mode": "half", "value": 500.0},
    expectPrimary: "500",
    expectSecondary: [{ label: "Исходное значение", value: "500" }, { label: "Разница", value: "0" }, { label: "Знаков", value: "0" }],
  },
  {
    name: "отрицательное число знаков отклоняется",
    inputs: {"digits": -1, "mode": "half", "value": 1.5},
    expectPrimary: "—",
  },
];
