import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const salaryConvertReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "180 000 в месяц → в год",
    inputs: {"amount": 180000, "fromPeriod": "month", "toPeriod": "year"},
    expectPrimary: "2 160 000,00 ₽",
    expectSecondary: [{ label: "В час", value: "1 071,43 ₽" }, { label: "В день", value: "8 571,43 ₽" }, { label: "В месяц", value: "180 000,00 ₽" }, { label: "В год", value: "2 160 000,00 ₽" }],
  },
  {
    name: "850 в час → в месяц",
    inputs: {"amount": 850, "fromPeriod": "hour", "toPeriod": "month"},
    expectPrimary: "142 800,00 ₽",
    expectSecondary: [{ label: "В час", value: "850,00 ₽" }, { label: "В день", value: "6 800,00 ₽" }, { label: "В месяц", value: "142 800,00 ₽" }, { label: "В год", value: "1 713 600,00 ₽" }],
  },
  {
    name: "из месяца в месяц — без изменений",
    inputs: {"amount": 95000, "fromPeriod": "month", "toPeriod": "month"},
    expectPrimary: "95 000,00 ₽",
    expectSecondary: [{ label: "В час", value: "565,48 ₽" }, { label: "В день", value: "4 523,81 ₽" }, { label: "В месяц", value: "95 000,00 ₽" }, { label: "В год", value: "1 140 000,00 ₽" }],
  },
  {
    name: "нулевая сумма отклоняется",
    inputs: {"amount": 0, "fromPeriod": "month", "toPeriod": "year"},
    expectPrimary: "—",
  },
];
