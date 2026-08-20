import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const petFoodReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "собака 22 кг, множитель 1,6, корм 350 ккал/100 г",
    inputs: {"factor": 1.6, "kcalPer100": 350, "weight": 22},
    expectPrimary: "325,06 г",
    expectSecondary: [{ label: "Потребность в энергии", value: "1 137,72 ккал" }, { label: "Обмен покоя (RER)", value: "711,07 ккал" }, { label: "Масса питомца", value: "22 кг" }],
  },
  {
    name: "кошка 4,5 кг, множитель 1,2, корм 400 ккал/100 г",
    inputs: {"factor": 1.2, "kcalPer100": 400, "weight": 4.5},
    expectPrimary: "64,883 г",
    expectSecondary: [{ label: "Потребность в энергии", value: "259,53 ккал" }, { label: "Обмен покоя (RER)", value: "216,28 ккал" }, { label: "Масса питомца", value: "4,5 кг" }],
  },
  {
    name: "поддержание, множитель 1",
    inputs: {"factor": 1, "kcalPer100": 380, "weight": 10},
    expectPrimary: "103,59 г",
    expectSecondary: [{ label: "Потребность в энергии", value: "393,64 ккал" }, { label: "Обмен покоя (RER)", value: "393,64 ккал" }, { label: "Масса питомца", value: "10 кг" }],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: {"factor": 1.6, "kcalPer100": 350, "weight": 0},
    expectPrimary: "—",
  },
];
