import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   220 − 35 = 185; резерв 185 − 60 = 125; зона 70–80 % = 60 + 125·0,7 … 60 + 125·0,8
//   Танака: 208 − 0,7 · 42 = 178,6 -> 179 уд/мин
//   без пульса покоя резерв равен максимуму, и зоны — прямые доли
export const maxHeartRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "возраст 35, формула 220 − возраст, пульс покоя 60",
    inputs: { "age": 35, "formula": "220-age", "restingHr": 60 },
    expectPrimary: "185 уд/мин",
    expectSecondary: [{ label: "Резерв сердца", value: "125 уд/мин" }, { label: "Пульс покоя", value: "60 уд/мин" }, { label: "Аэробная зона 70–80 %", value: "148–160 уд/мин" }],
  },
  {
    name: "возраст 42, формула Танаки, пульс покоя 55",
    inputs: { "age": 42, "formula": "tanaka", "restingHr": 55 },
    expectPrimary: "179 уд/мин",
    expectSecondary: [{ label: "Резерв сердца", value: "124 уд/мин" }, { label: "Аэробная зона 70–80 %", value: "142–154 уд/мин" }],
  },
  {
    name: "граница: пульс покоя не задан — зоны считаются долями максимума",
    inputs: { "age": 30, "formula": "220-age", "restingHr": 0 },
    expectPrimary: "190 уд/мин",
    expectSecondary: [{ label: "Резерв сердца", value: "190 уд/мин" }, { label: "Аэробная зона 70–80 %", value: "133–152 уд/мин" }],
  },
  {
    name: "пульс покоя выше максимального отклоняется",
    inputs: { "age": 35, "formula": "220-age", "restingHr": 190 },
    expectPrimary: "—",
  },
];
