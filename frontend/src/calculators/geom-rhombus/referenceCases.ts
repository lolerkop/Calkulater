import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomRhombusReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "диагонали 6 и 8 см",
    inputs: { "unit": "cm", "mode": "diagonals", "d1": 6, "d2": 8 },
    expectPrimary: "24 см²",
    expectSecondary: [{ label: "Сторона", value: "5 см" }, { label: "Периметр", value: "20 см" }, { label: "Высота", value: "4,8 см" }],
  },
  {
    name: "диагонали 10 и 24 см",
    inputs: { "unit": "cm", "mode": "diagonals", "d1": 10, "d2": 24 },
    expectPrimary: "120 см²",
    expectSecondary: [{ label: "Сторона", value: "13 см" }, { label: "Периметр", value: "52 см" }, { label: "Высота", value: "9,231 см" }],
  },
  {
    name: "равные диагонали — это квадрат",
    inputs: { "unit": "cm", "mode": "diagonals", "d1": 8, "d2": 8 },
    expectPrimary: "32 см²",
    expectSecondary: [{ label: "Сторона", value: "5,657 см" }, { label: "Периметр", value: "22,627 см" }, { label: "Высота", value: "5,657 см" }],
  },
  {
    name: "нулевая диагональ отклоняется",
    inputs: { "unit": "cm", "mode": "diagonals", "d1": 0, "d2": 8 },
    expectPrimary: "—",
  },
  // Независимые аналитические случаи: масштабирование формул и явные границы области.
  {"name": "половина произведения диагоналей без промежуточного переполнения", "inputs": {"unit": "m", "d1": 2e+154, "d2": 1e+154}, "expectPrimary": "1,000·10^308 м²"},
  {"name": "булево значение не считается единичной диагональю", "inputs": {"unit": "m", "d1": true, "d2": 8}, "expectPrimary": "—"},
];
