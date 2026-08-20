import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const profitReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "выручка 480 000, затраты 315 000",
    inputs: {"cost": 315000, "revenue": 480000},
    expectPrimary: "165 000,00 ₽",
    expectSecondary: [{ label: "Маржа", value: "34,38%" }, { label: "Наценка", value: "52,38%" }, { label: "Выручка", value: "480 000,00 ₽" }, { label: "Затраты", value: "315 000,00 ₽" }],
  },
  {
    name: "выручка 9 900, затраты 7 260",
    inputs: {"cost": 7260, "revenue": 9900},
    expectPrimary: "2 640,00 ₽",
    expectSecondary: [{ label: "Маржа", value: "26,67%" }, { label: "Наценка", value: "36,36%" }, { label: "Выручка", value: "9 900,00 ₽" }, { label: "Затраты", value: "7 260,00 ₽" }],
  },
  {
    name: "затраты равны выручке — нулевая прибыль",
    inputs: {"cost": 50000, "revenue": 50000},
    expectPrimary: "0,00 ₽",
    expectSecondary: [{ label: "Маржа", value: "0,00%" }, { label: "Наценка", value: "0,00%" }, { label: "Выручка", value: "50 000,00 ₽" }, { label: "Затраты", value: "50 000,00 ₽" }],
  },
  {
    name: "нулевая выручка отклоняется",
    inputs: {"cost": 100, "revenue": 0},
    expectPrimary: "—",
  },
];
