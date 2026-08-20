import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomPrismReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "правильная шестиугольная, сторона 4 см, высота 10 см",
    inputs: {"height": 10, "side": 4, "sides": 6, "unit": "cm"},
    expectPrimary: "415,69 см³",
    expectSecondary: [{ label: "Площадь основания", value: "41,569 см²" }, { label: "Боковая поверхность", value: "240 см²" }, { label: "Полная поверхность", value: "323,14 см²" }, { label: "Периметр основания", value: "24 см" }],
  },
  {
    name: "треугольная, сторона 6 см, высота 15 см",
    inputs: {"height": 15, "side": 6, "sides": 3, "unit": "cm"},
    expectPrimary: "233,83 см³",
    expectSecondary: [{ label: "Площадь основания", value: "15,588 см²" }, { label: "Боковая поверхность", value: "270 см²" }, { label: "Полная поверхность", value: "301,18 см²" }, { label: "Периметр основания", value: "18 см" }],
  },
  {
    name: "квадратная, сторона 2 см, высота 2 см",
    inputs: {"height": 2, "side": 2, "sides": 4, "unit": "cm"},
    expectPrimary: "8 см³",
    expectSecondary: [{ label: "Площадь основания", value: "4 см²" }, { label: "Боковая поверхность", value: "16 см²" }, { label: "Полная поверхность", value: "24 см²" }, { label: "Периметр основания", value: "8 см" }],
  },
  {
    name: "меньше трёх сторон отклоняется",
    inputs: {"height": 1, "side": 1, "sides": 2, "unit": "cm"},
    expectPrimary: "—",
  },
];
