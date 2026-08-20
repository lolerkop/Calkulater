import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const vacationAccrualReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "28 дней в год, отработано 7 месяцев, использовано 5",
    inputs: {"daysPerYear": 28, "daysUsed": 5, "monthsWorked": 7},
    expectPrimary: "11,333 дн.",
    expectSecondary: [{ label: "Накоплено", value: "16,333 дн." }, { label: "За месяц", value: "2,333 дн." }, { label: "Использовано", value: "5 дн." }],
  },
  {
    name: "24 дня в год, отработано 11 месяцев, использовано 0",
    inputs: {"daysPerYear": 24, "daysUsed": 0, "monthsWorked": 11},
    expectPrimary: "22 дн.",
    expectSecondary: [{ label: "Накоплено", value: "22 дн." }, { label: "За месяц", value: "2 дн." }, { label: "Использовано", value: "0 дн." }],
  },
  {
    name: "использовано ровно столько, сколько накоплено",
    inputs: {"daysPerYear": 28, "daysUsed": 14, "monthsWorked": 6},
    expectPrimary: "0 дн.",
    expectSecondary: [{ label: "Накоплено", value: "14 дн." }, { label: "За месяц", value: "2,333 дн." }, { label: "Использовано", value: "14 дн." }],
  },
  {
    name: "нулевая годовая норма отклоняется",
    inputs: {"daysPerYear": 0, "daysUsed": 0, "monthsWorked": 6},
    expectPrimary: "—",
  },
];
