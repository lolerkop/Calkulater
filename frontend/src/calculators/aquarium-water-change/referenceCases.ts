import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const aquariumWaterChangeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "аквариум 240 л, подмена 25 %, грунт и декор 12 %",
    inputs: {"changePct": 25, "decorPct": 12, "volume": 240},
    expectPrimary: "52,8 л",
    expectSecondary: [{ label: "Чистый объём воды", value: "211,2 л" }, { label: "Останется", value: "158,4 л" }, { label: "Объём аквариума", value: "240 л" }],
  },
  {
    name: "аквариум 60 л, подмена 40 %, декор 8 %",
    inputs: {"changePct": 40, "decorPct": 8, "volume": 60},
    expectPrimary: "22,08 л",
    expectSecondary: [{ label: "Чистый объём воды", value: "55,2 л" }, { label: "Останется", value: "33,12 л" }, { label: "Объём аквариума", value: "60 л" }],
  },
  {
    name: "полная подмена без декора",
    inputs: {"changePct": 100, "decorPct": 0, "volume": 100},
    expectPrimary: "100 л",
    expectSecondary: [{ label: "Чистый объём воды", value: "100 л" }, { label: "Останется", value: "0 л" }, { label: "Объём аквариума", value: "100 л" }],
  },
  {
    name: "нулевая доля подмены отклоняется",
    inputs: {"changePct": 0, "decorPct": 0, "volume": 100},
    expectPrimary: "—",
  },
];
