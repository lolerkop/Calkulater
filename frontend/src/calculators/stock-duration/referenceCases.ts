import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   30 / 2 = 15 дней          ·  1000 / 75 = 13,333… -> 13,3
//   при страховом запасе 3 дня заказывать через 15 − 3 = 12 дней
export const stockDurationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "30 кг при расходе 2 кг в сутки",
    inputs: {"stock": 30, "perDay": 2, "reserveDays": 0},
    expectPrimary: "15 дней",
  },
  {
    name: "1000 при расходе 75 в сутки",
    inputs: {"stock": 1000, "perDay": 75, "reserveDays": 0},
    expectPrimary: "13,3 дней",
  },
  {
    name: "со страховым запасом в 3 дня",
    inputs: {"stock": 30, "perDay": 2, "reserveDays": 3},
    expectPrimary: "15 дней",
    expectSecondary: [{ label: "Заказать через", value: "12 дней" }],
  },
  {
    name: "граница: суточного запаса хватит на день",
    inputs: {"stock": 1, "perDay": 1, "reserveDays": 0},
    expectPrimary: "1 дней",
  },
  {
    name: "нулевой расход отклоняется",
    inputs: {"stock": 30, "perDay": 0, "reserveDays": 0},
    expectPrimary: "—",
  },
];
