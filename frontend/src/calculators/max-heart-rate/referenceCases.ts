import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   220 − 35 = 185; резерв 185 − 60 = 125; зона 70–80 % = 60 + 125·0,7 … 60 + 125·0,8
//   Танака: 208 − 0,7 · 42 = 178,6 -> 179 уд/мин
//   без пульса покоя резерв равен максимуму, и зоны — прямые доли
export const maxHeartRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "возраст 35, формула 220 − возраст, пульс покоя 60",
    inputs: { "age": 35, "formula": "220-age", "restingHr": 60 },
    expectPrimary: "185",
    expectSecondary: [{ label: "Резерв сердца", value: "125" }, { label: "Пульс покоя", value: "60" }, { label: "Аэробная зона 70–80 %", value: "148–160" }],
  },
  {
    name: "возраст 42, формула Танаки, пульс покоя 55",
    inputs: { "age": 42, "formula": "tanaka", "restingHr": 55 },
    expectPrimary: "179",
    expectSecondary: [{ label: "Резерв сердца", value: "124" }, { label: "Аэробная зона 70–80 %", value: "142–154" }],
  },
  {
    name: "граница: пульс покоя не задан — зоны считаются долями максимума",
    inputs: { "age": 30, "formula": "220-age", "restingHr": 0 },
    expectPrimary: "190",
    expectSecondary: [{ label: "Резерв сердца", value: "190" }, { label: "Аэробная зона 70–80 %", value: "133–152" }],
  },
  {
    name: "пульс покоя выше максимального отклоняется",
    inputs: { "age": 35, "formula": "220-age", "restingHr": 190 },
    expectPrimary: "—",
  },
];
