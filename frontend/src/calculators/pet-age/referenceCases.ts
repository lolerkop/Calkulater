import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const petAgeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "кошка 7 лет",
    inputs: {"species": "cat", "years": 7},
    expectPrimary: "44",
    expectSecondary: [{ label: "Возраст питомца, лет", value: "7" }, { label: "Прибавка за каждый следующий год", value: "4" }],
  },
  {
    name: "крупная собака 4 года",
    inputs: {"species": "dog-large", "years": 4},
    expectPrimary: "38",
    expectSecondary: [{ label: "Возраст питомца, лет", value: "4" }, { label: "Прибавка за каждый следующий год", value: "7" }],
  },
  {
    name: "щенок 1 год",
    inputs: {"species": "dog-small", "years": 1},
    expectPrimary: "15",
    expectSecondary: [{ label: "Возраст питомца, лет", value: "1" }, { label: "Прибавка за каждый следующий год", value: "4" }],
  },
  {
    name: "нулевой возраст отклоняется",
    inputs: {"species": "cat", "years": 0},
    expectPrimary: "—",
  },
];
