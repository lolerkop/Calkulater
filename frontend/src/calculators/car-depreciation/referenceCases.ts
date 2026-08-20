import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const carDepreciationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "2 400 000, 4 года, 12 % в год, первый год 20 %",
    inputs: {"firstYearPct": 20, "price": 2400000, "ratePct": 12, "years": 4},
    expectPrimary: "1 308 426,24 ₽",
    expectSecondary: [{ label: "Потеряно в деньгах", value: "1 091 573,76 ₽" }, { label: "Потеряно, доля", value: "45,48%" }, { label: "Цена покупки", value: "2 400 000,00 ₽" }],
  },
  {
    name: "950 000, 7 лет, 10 % в год, первый год 15 %",
    inputs: {"firstYearPct": 15, "price": 950000, "ratePct": 10, "years": 7},
    expectPrimary: "429 138,61 ₽",
    expectSecondary: [{ label: "Потеряно в деньгах", value: "520 861,39 ₽" }, { label: "Потеряно, доля", value: "54,83%" }, { label: "Цена покупки", value: "950 000,00 ₽" }],
  },
  {
    name: "новый автомобиль, ноль лет",
    inputs: {"firstYearPct": 20, "price": 1500000, "ratePct": 12, "years": 0},
    expectPrimary: "1 500 000,00 ₽",
    expectSecondary: [{ label: "Потеряно в деньгах", value: "0,00 ₽" }, { label: "Потеряно, доля", value: "0,00%" }, { label: "Цена покупки", value: "1 500 000,00 ₽" }],
  },
  {
    name: "нулевая цена отклоняется",
    inputs: {"firstYearPct": 20, "price": 0, "ratePct": 12, "years": 3},
    expectPrimary: "—",
  },
];
