import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const maxLoanReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "доход 120 000, нагрузка 40 %, 18 % на 20 лет",
    inputs: { "income": 120000, "dtiPct": 40, "rate": 18, "years": 20 },
    expectPrimary: "3 110 195,14 ₽",
    expectSecondary: [{ label: "Допустимый платёж", value: "48 000,00 ₽" }, { label: "Всего выплат", value: "11 520 000,00 ₽" }, { label: "Переплата", value: "8 409 804,86 ₽" }, { label: "Платежей", value: "240" }],
  },
  {
    name: "доход 85 000, нагрузка 35 %, 12 % на 15 лет",
    inputs: { "income": 85000, "dtiPct": 35, "rate": 12, "years": 15 },
    expectPrimary: "2 478 819,50 ₽",
    expectSecondary: [{ label: "Допустимый платёж", value: "29 750,00 ₽" }, { label: "Всего выплат", value: "5 355 000,00 ₽" }, { label: "Переплата", value: "2 876 180,50 ₽" }, { label: "Платежей", value: "180" }],
  },
  {
    name: "нулевая ставка — сумма равна сумме платежей",
    inputs: { "income": 100000, "dtiPct": 30, "rate": 0, "years": 10 },
    expectPrimary: "3 600 000,00 ₽",
    expectSecondary: [{ label: "Допустимый платёж", value: "30 000,00 ₽" }, { label: "Всего выплат", value: "3 600 000,00 ₽" }, { label: "Переплата", value: "0,00 ₽" }, { label: "Платежей", value: "120" }],
  },
  {
    name: "нулевая долговая нагрузка отклоняется",
    inputs: { "income": 120000, "dtiPct": 0, "rate": 18, "years": 20 },
    expectPrimary: "—",
  },
];
