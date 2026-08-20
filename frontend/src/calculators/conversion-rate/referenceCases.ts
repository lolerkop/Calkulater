import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const conversionRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "8000 визитов, 240 конверсий, бюджет 60 000",
    inputs: { "visitors": 8000, "conversions": 240, "cost": 60000 },
    expectPrimary: "3,00%",
    expectSecondary: [{ label: "Конверсий", value: "240" }, { label: "Визитов", value: "8 000" }, { label: "Цена конверсии", value: "250,00 ₽" }, { label: "Визитов на одну конверсию", value: "33,333" }],
  },
  {
    name: "1500 визитов, 27 конверсий, без бюджета",
    inputs: { "visitors": 1500, "conversions": 27, "cost": 0 },
    expectPrimary: "1,80%",
    expectSecondary: [{ label: "Конверсий", value: "27" }, { label: "Визитов", value: "1 500" }, { label: "Визитов на одну конверсию", value: "55,556" }],
  },
  {
    name: "нулевая конверсия",
    inputs: { "visitors": 5000, "conversions": 0, "cost": 40000 },
    expectPrimary: "0,00%",
    expectSecondary: [{ label: "Конверсий", value: "0" }, { label: "Визитов", value: "5 000" }],
  },
  {
    name: "конверсий больше визитов — отклоняется",
    inputs: { "visitors": 100, "conversions": 200, "cost": 0 },
    expectPrimary: "—",
  },
];
