import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   целые части делятся на общий НОД; доли = vᵢ/Σv
export const ratioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "отношение 12:18",
    inputs: { "parts": "12 18", "total": 0 },
    expectPrimary: "2:3",
    expectSecondary: [{ label: "Сумма частей", value: "30" }, { label: "Доля первой части", value: "40,00%" }],
  },
  {
    name: "три части 2:3:5 от 6000",
    inputs: { "parts": "2 3 5", "total": 6000 },
    expectPrimary: "2:3:5",
    expectSecondary: [{ label: "Сумма частей", value: "10" }, { label: "Доля первой части", value: "20,00%" }],
  },
  {
    name: "уже несократимое 7:9",
    inputs: { "parts": "7 9", "total": 0 },
    expectPrimary: "7:9",
    expectSecondary: [{ label: "Сумма частей", value: "16" }, { label: "Доля первой части", value: "43,75%" }],
  },
  {
    name: "нулевая часть отклоняется",
    inputs: { "parts": "3 0", "total": 0 },
    expectPrimary: "—",
  },
];
