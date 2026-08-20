import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomAnnulusReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "R 10, r 6 см",
    inputs: { "unit": "cm", "R": 10, "r": 6 },
    expectPrimary: "201,06 см²",
    expectSecondary: [{ label: "Ширина кольца", value: "4 см" }, { label: "Внешняя окружность", value: "62,832 см" }, { label: "Внутренняя окружность", value: "37,699 см" }, { label: "Средний радиус", value: "8 см" }],
  },
  {
    name: "R 2,5, r 1,25 см",
    inputs: { "unit": "cm", "R": 2.5, "r": 1.25 },
    expectPrimary: "14,726 см²",
    expectSecondary: [{ label: "Ширина кольца", value: "1,25 см" }, { label: "Внешняя окружность", value: "15,708 см" }, { label: "Внутренняя окружность", value: "7,854 см" }, { label: "Средний радиус", value: "1,875 см" }],
  },
  {
    name: "внутренний радиус 0 — сплошной круг",
    inputs: { "unit": "cm", "R": 5, "r": 0 },
    expectPrimary: "78,54 см²",
    expectSecondary: [{ label: "Ширина кольца", value: "5 см" }, { label: "Внешняя окружность", value: "31,416 см" }, { label: "Внутренняя окружность", value: "0 см" }, { label: "Средний радиус", value: "2,5 см" }],
  },
  {
    name: "внутренний радиус не меньше внешнего отклоняется",
    inputs: { "unit": "cm", "R": 5, "r": 5 },
    expectPrimary: "—",
  },
];
