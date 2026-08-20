import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const modularScaleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "база 16, отношение 1,25, вверх 5, вниз 2",
    inputs: {"base": 16, "ratio": 1.25, "stepsDown": 2, "stepsUp": 5},
    expectPrimary: "48,828",
    expectSecondary: [{ label: "Наименьший размер", value: "10,24" }, { label: "Ступеней", value: "8" }, { label: "База", value: "16" }],
  },
  {
    name: "база 18, отношение 1,618, вверх 3, вниз 1",
    inputs: {"base": 18, "ratio": 1.618, "stepsDown": 1, "stepsUp": 3},
    expectPrimary: "76,244",
    expectSecondary: [{ label: "Наименьший размер", value: "11,125" }, { label: "Ступеней", value: "5" }, { label: "База", value: "18" }],
  },
  {
    name: "только база",
    inputs: {"base": 16, "ratio": 1.2, "stepsDown": 0, "stepsUp": 0},
    expectPrimary: "16",
    expectSecondary: [{ label: "Наименьший размер", value: "16" }, { label: "Ступеней", value: "1" }, { label: "База", value: "16" }],
  },
  {
    name: "отношение не больше единицы отклоняется",
    inputs: {"base": 16, "ratio": 1, "stepsDown": 1, "stepsUp": 3},
    expectPrimary: "—",
  },
];
