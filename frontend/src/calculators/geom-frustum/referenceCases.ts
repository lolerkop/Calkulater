import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomFrustumReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "R 6, r 3, h 8 см",
    inputs: { "unit": "cm", "R": 6, "r": 3, "h": 8 },
    expectPrimary: "527,79 см³",
    expectSecondary: [{ label: "Образующая", value: "8,544 см" }, { label: "Боковая поверхность", value: "241,58 см²" }, { label: "Полная поверхность", value: "382,95 см²" }],
  },
  {
    name: "R 10, r 4, h 12 см",
    inputs: { "unit": "cm", "R": 10, "r": 4, "h": 12 },
    expectPrimary: "1 960,35 см³",
    expectSecondary: [{ label: "Образующая", value: "13,416 см" }, { label: "Боковая поверхность", value: "590,08 см²" }, { label: "Полная поверхность", value: "954,51 см²" }],
  },
  {
    name: "верхний радиус 0 — это конус",
    inputs: { "unit": "cm", "R": 5, "r": 0, "h": 10 },
    expectPrimary: "261,8 см³",
    expectSecondary: [{ label: "Образующая", value: "11,18 см" }, { label: "Боковая поверхность", value: "175,62 см²" }, { label: "Полная поверхность", value: "254,16 см²" }],
  },
  {
    name: "верхний радиус не меньше нижнего отклоняется",
    inputs: { "unit": "cm", "R": 5, "r": 5, "h": 10 },
    expectPrimary: "—",
  },
];
