import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomEllipseReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "полуоси 5 и 3 см",
    inputs: { "unit": "cm", "a": 5, "b": 3 },
    expectPrimary: "47,124 см²",
    expectSecondary: [{ label: "Периметр (Рамануджан)", value: "25,527 см" }, { label: "Эксцентриситет", value: "0,8" }, { label: "Расстояние между фокусами", value: "8 см" }],
  },
  {
    name: "полуоси 12 и 7,5 см",
    inputs: { "unit": "cm", "a": 12, "b": 7.5 },
    expectPrimary: "282,74 см²",
    expectSecondary: [{ label: "Периметр (Рамануджан)", value: "62,079 см" }, { label: "Эксцентриситет", value: "0,7806" }, { label: "Расстояние между фокусами", value: "18,735 см" }],
  },
  {
    name: "равные полуоси — это круг",
    inputs: { "unit": "cm", "a": 4, "b": 4 },
    expectPrimary: "50,265 см²",
    expectSecondary: [{ label: "Периметр (Рамануджан)", value: "25,133 см" }, { label: "Эксцентриситет", value: "0" }, { label: "Расстояние между фокусами", value: "0 см" }],
  },
  {
    name: "нулевая полуось отклоняется",
    inputs: { "unit": "cm", "a": 0, "b": 3 },
    expectPrimary: "—",
  },
];
