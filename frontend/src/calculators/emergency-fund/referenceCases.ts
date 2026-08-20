import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const emergencyFundReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "расходы 85 000, цель 6 месяцев, накоплено 210 000",
    inputs: {"monthlyExpenses": 85000, "months": 6, "saved": 210000},
    expectPrimary: "510 000,00 ₽",
    expectSecondary: [{ label: "Не хватает", value: "300 000,00 ₽" }, { label: "Уже покрыто месяцев", value: "2,471" }, { label: "Готовность", value: "41,18%" }],
  },
  {
    name: "расходы 42 000, цель 3 месяца, накоплено 0",
    inputs: {"monthlyExpenses": 42000, "months": 3, "saved": 0},
    expectPrimary: "126 000,00 ₽",
    expectSecondary: [{ label: "Не хватает", value: "126 000,00 ₽" }, { label: "Уже покрыто месяцев", value: "0" }, { label: "Готовность", value: "0,00%" }],
  },
  {
    name: "цель уже достигнута",
    inputs: {"monthlyExpenses": 50000, "months": 4, "saved": 250000},
    expectPrimary: "200 000,00 ₽",
    expectSecondary: [{ label: "Не хватает", value: "0,00 ₽" }, { label: "Уже покрыто месяцев", value: "4" }, { label: "Готовность", value: "100,00%" }],
  },
  {
    name: "нулевые расходы отклоняются",
    inputs: {"monthlyExpenses": 0, "months": 6, "saved": 0},
    expectPrimary: "—",
  },
];
