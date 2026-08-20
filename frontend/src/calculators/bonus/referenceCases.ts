import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const bonusReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "оклад 145 000, премия 35 %, налог 13 %",
    inputs: {"bonusPct": 35, "salary": 145000, "taxPct": 13},
    expectPrimary: "44 152,50 ₽",
    expectSecondary: [{ label: "Премия до налога", value: "50 750,00 ₽" }, { label: "Налог", value: "6 597,50 ₽" }, { label: "Оклад", value: "145 000,00 ₽" }],
  },
  {
    name: "оклад 62 500, премия 120 %, налог 13 %",
    inputs: {"bonusPct": 120, "salary": 62500, "taxPct": 13},
    expectPrimary: "65 250,00 ₽",
    expectSecondary: [{ label: "Премия до налога", value: "75 000,00 ₽" }, { label: "Налог", value: "9 750,00 ₽" }, { label: "Оклад", value: "62 500,00 ₽" }],
  },
  {
    name: "нулевая премия",
    inputs: {"bonusPct": 0, "salary": 90000, "taxPct": 13},
    expectPrimary: "0,00 ₽",
    expectSecondary: [{ label: "Премия до налога", value: "0,00 ₽" }, { label: "Налог", value: "0,00 ₽" }, { label: "Оклад", value: "90 000,00 ₽" }],
  },
  {
    name: "налог сто процентов отклоняется",
    inputs: {"bonusPct": 10, "salary": 1000, "taxPct": 100},
    expectPrimary: "—",
  },
];
