import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const cssUnitsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "24 px → rem при корне 16",
    inputs: {"fromUnit": "px", "parentSize": 16, "rootSize": 16, "toUnit": "rem", "value": 24},
    expectPrimary: "1,5",
    expectSecondary: [{ label: "В пикселях", value: "24 px" }, { label: "В rem", value: "1,5" }, { label: "В em", value: "1,5" }, { label: "В пунктах", value: "18" }],
  },
  {
    name: "1,5 rem → px при корне 18",
    inputs: {"fromUnit": "rem", "parentSize": 16, "rootSize": 18, "toUnit": "px", "value": 1.5},
    expectPrimary: "27",
    expectSecondary: [{ label: "В пикселях", value: "27 px" }, { label: "В rem", value: "1,5" }, { label: "В em", value: "1,688" }, { label: "В пунктах", value: "20,25" }],
  },
  {
    name: "16 px → rem при корне 16 даёт единицу",
    inputs: {"fromUnit": "px", "parentSize": 16, "rootSize": 16, "toUnit": "rem", "value": 16},
    expectPrimary: "1",
    expectSecondary: [{ label: "В пикселях", value: "16 px" }, { label: "В rem", value: "1" }, { label: "В em", value: "1" }, { label: "В пунктах", value: "12" }],
  },
  {
    name: "нулевой корневой размер отклоняется",
    inputs: {"fromUnit": "px", "parentSize": 16, "rootSize": 0, "toUnit": "rem", "value": 16},
    expectPrimary: "—",
  },
];
