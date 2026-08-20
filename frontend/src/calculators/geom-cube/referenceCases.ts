import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const geomCubeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "ребро 3 см",
    inputs: { "unit": "cm", "mode": "side", "side": 3 },
    expectPrimary: "27 см³",
    expectSecondary: [{ label: "Площадь поверхности", value: "54 см²" }, { label: "Диагональ куба", value: "5,196 см" }, { label: "Диагональ грани", value: "4,243 см" }, { label: "Сумма рёбер", value: "36 см" }],
  },
  {
    name: "ребро 12,5 см",
    inputs: { "unit": "cm", "mode": "side", "side": 12.5 },
    expectPrimary: "1 953,13 см³",
    expectSecondary: [{ label: "Площадь поверхности", value: "937,5 см²" }, { label: "Диагональ куба", value: "21,651 см" }, { label: "Диагональ грани", value: "17,678 см" }, { label: "Сумма рёбер", value: "150 см" }],
  },
  {
    name: "очень малое ребро 0,1 см",
    inputs: { "unit": "cm", "mode": "side", "side": 0.1 },
    expectPrimary: "0,001 см³",
    expectSecondary: [{ label: "Площадь поверхности", value: "0,06 см²" }, { label: "Диагональ куба", value: "0,1732 см" }, { label: "Диагональ грани", value: "0,1414 см" }, { label: "Сумма рёбер", value: "1,2 см" }],
  },
  {
    name: "обратный режим: объём 64 см³ → ребро",
    inputs: { "unit": "cm", "mode": "volume", "volume": 64 },
    expectPrimary: "4 см",
    expectSecondary: [{ label: "Площадь поверхности", value: "96 см²" }],
  },
  {
    name: "нулевое ребро отклоняется",
    inputs: { "unit": "cm", "mode": "side", "side": 0 },
    expectPrimary: "—",
  },
];
