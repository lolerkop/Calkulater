import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomPyramidReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "квадратная, сторона 6 см, высота 9 см",
    inputs: {"height": 9, "side": 6, "sides": 4, "unit": "cm"},
    expectPrimary: "108 см³",
    expectSecondary: [{ label: "Площадь основания", value: "36 см²" }, { label: "Апофема", value: "9,487 см" }, { label: "Боковая поверхность", value: "113,84 см²" }, { label: "Полная поверхность", value: "149,84 см²" }],
  },
  {
    name: "шестиугольная, сторона 3 см, высота 7 см",
    inputs: {"height": 7, "side": 3, "sides": 6, "unit": "cm"},
    expectPrimary: "54,56 см³",
    expectSecondary: [{ label: "Площадь основания", value: "23,383 см²" }, { label: "Апофема", value: "7,467 см" }, { label: "Боковая поверхность", value: "67,199 см²" }, { label: "Полная поверхность", value: "90,582 см²" }],
  },
  {
    name: "треугольная, сторона 4 см, высота 4 см",
    inputs: {"height": 4, "side": 4, "sides": 3, "unit": "cm"},
    expectPrimary: "9,238 см³",
    expectSecondary: [{ label: "Площадь основания", value: "6,928 см²" }, { label: "Апофема", value: "4,163 см" }, { label: "Боковая поверхность", value: "24,98 см²" }, { label: "Полная поверхность", value: "31,908 см²" }],
  },
  {
    name: "нулевая высота отклоняется",
    inputs: {"height": 0, "side": 3, "sides": 4, "unit": "cm"},
    expectPrimary: "—",
  },
];
