import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const employeeCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "оклад 180 000, взносы 30 %, накладные 25 000",
    inputs: {"gross": 180000, "overhead": 25000, "taxPct": 30},
    expectPrimary: "259 000,00 ₽",
    expectSecondary: [{ label: "Взносы", value: "54 000,00 ₽" }, { label: "Оклад", value: "180 000,00 ₽" }, { label: "Накладные", value: "25 000,00 ₽" }, { label: "Множитель к окладу", value: "1,4389" }],
  },
  {
    name: "оклад 95 000, взносы 43 %, накладные 12 500",
    inputs: {"gross": 95000, "overhead": 12500, "taxPct": 43},
    expectPrimary: "148 350,00 ₽",
    expectSecondary: [{ label: "Взносы", value: "40 850,00 ₽" }, { label: "Оклад", value: "95 000,00 ₽" }, { label: "Накладные", value: "12 500,00 ₽" }, { label: "Множитель к окладу", value: "1,5616" }],
  },
  {
    name: "без взносов и накладных",
    inputs: {"gross": 120000, "overhead": 0, "taxPct": 0},
    expectPrimary: "120 000,00 ₽",
    expectSecondary: [{ label: "Взносы", value: "0,00 ₽" }, { label: "Оклад", value: "120 000,00 ₽" }, { label: "Накладные", value: "0,00 ₽" }, { label: "Множитель к окладу", value: "1" }],
  },
  {
    name: "нулевой оклад отклоняется",
    inputs: {"gross": 0, "overhead": 0, "taxPct": 30},
    expectPrimary: "—",
  },
];
