import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const salaryRaiseReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "со 120 000 до 148 000",
    inputs: {"mode": "fromNew", "newSalary": 148000, "oldSalary": 120000},
    expectPrimary: "23,33%",
    expectSecondary: [{ label: "Разница", value: "28 000,00 ₽" }, { label: "Было", value: "120 000,00 ₽" }, { label: "Стало", value: "148 000,00 ₽" }, { label: "Множитель", value: "1,2333" }],
  },
  {
    name: "с 74 500 до 71 000 — понижение",
    inputs: {"mode": "fromNew", "newSalary": 71000, "oldSalary": 74500},
    expectPrimary: "-4,70%",
    expectSecondary: [{ label: "Разница", value: "-3 500,00 ₽" }, { label: "Было", value: "74 500,00 ₽" }, { label: "Стало", value: "71 000,00 ₽" }, { label: "Множитель", value: "0,953" }],
  },
  {
    name: "без изменения",
    inputs: {"mode": "fromNew", "newSalary": 100000, "oldSalary": 100000},
    expectPrimary: "0,00%",
    expectSecondary: [{ label: "Разница", value: "0,00 ₽" }, { label: "Было", value: "100 000,00 ₽" }, { label: "Стало", value: "100 000,00 ₽" }, { label: "Множитель", value: "1" }],
  },
  {
    name: "нулевая прежняя зарплата отклоняется",
    inputs: {"mode": "fromNew", "newSalary": 100, "oldSalary": 0},
    expectPrimary: "—",
  },
];
