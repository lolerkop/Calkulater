import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const arpuArppuReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "выручка 500 000, 12 500 пользователей, 900 платящих",
    inputs: { "revenue": 500000, "users": 12500, "payingUsers": 900 },
    expectPrimary: "40,00 ₽",
    expectSecondary: [{ label: "ARPPU", value: "555,56 ₽" }, { label: "Доля платящих", value: "7,20%" }, { label: "Выручка", value: "500 000,00 ₽" }],
  },
  {
    name: "выручка 1 200 000, 40 000 пользователей, 5 200 платящих",
    inputs: { "revenue": 1200000, "users": 40000, "payingUsers": 5200 },
    expectPrimary: "30,00 ₽",
    expectSecondary: [{ label: "ARPPU", value: "230,77 ₽" }, { label: "Доля платящих", value: "13,00%" }, { label: "Выручка", value: "1 200 000,00 ₽" }],
  },
  {
    name: "все пользователи платящие — ARPU равен ARPPU",
    inputs: { "revenue": 300000, "users": 2000, "payingUsers": 2000 },
    expectPrimary: "150,00 ₽",
    expectSecondary: [{ label: "ARPPU", value: "150,00 ₽" }, { label: "Доля платящих", value: "100,00%" }, { label: "Выручка", value: "300 000,00 ₽" }],
  },
  {
    name: "платящих больше, чем пользователей — отклоняется",
    inputs: { "revenue": 500000, "users": 100, "payingUsers": 200 },
    expectPrimary: "—",
  },
];
