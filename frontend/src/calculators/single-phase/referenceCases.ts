import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const singlePhaseReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "230 В, 6,5 А, cos φ 0,95",
    inputs: {"current": 6.5, "mode": "P", "powerFactor": 0.95, "voltage": 230},
    expectPrimary: "1 420,25 Вт",
    expectSecondary: [{ label: "Полная мощность", value: "1 495 ВА" }, { label: "Реактивная мощность", value: "466,81 вар" }, { label: "Ток", value: "6,5 А" }],
  },
  {
    name: "220 В, 12 А, cos φ 0,8",
    inputs: {"current": 12, "mode": "P", "powerFactor": 0.8, "voltage": 220},
    expectPrimary: "2 112 Вт",
    expectSecondary: [{ label: "Полная мощность", value: "2 640 ВА" }, { label: "Реактивная мощность", value: "1 584 вар" }, { label: "Ток", value: "12 А" }],
  },
  {
    name: "чисто активная нагрузка, cos φ = 1",
    inputs: {"current": 10, "mode": "P", "powerFactor": 1, "voltage": 230},
    expectPrimary: "2 300 Вт",
    expectSecondary: [{ label: "Полная мощность", value: "2 300 ВА" }, { label: "Реактивная мощность", value: "0 вар" }, { label: "Ток", value: "10 А" }],
  },
  {
    name: "нулевое напряжение отклоняется",
    inputs: {"current": 5, "mode": "P", "powerFactor": 1, "voltage": 0},
    expectPrimary: "—",
  },
];
