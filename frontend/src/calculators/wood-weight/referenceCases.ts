import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   сосна при 12 %: 520 кг/м³ × 1 м³ = 520 кг
//   дуб при 20 %: 700 × 1,08 = 756 кг/м³, ×2,5 м³ = 1890 кг
export const woodWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "кубометр сосны при базовой влажности",
    inputs: { "moisture": 12, "species": "pine", "volume": 1 },
    expectPrimary: "520 кг",
    expectSecondary: [
      { label: "Плотность при заданной влажности", value: "520 кг/м³" },
      { label: "Базовая плотность при 12 %", value: "520 кг/м³" },
      { label: "Объём", value: "1 м³" },
    ],
  },
  {
    name: "дуб повышенной влажности",
    inputs: { "moisture": 20, "species": "oak", "volume": 2.5 },
    expectPrimary: "1 890 кг",
    expectSecondary: [
      { label: "Плотность при заданной влажности", value: "756 кг/м³" },
      { label: "Базовая плотность при 12 %", value: "700 кг/м³" },
      { label: "Объём", value: "2,5 м³" },
    ],
  },
  {
    name: "граница: абсолютно сухая ель",
    inputs: { "moisture": 0, "species": "spruce", "volume": 0.001 },
    expectPrimary: "0,396 кг",
    expectSecondary: [
      { label: "Плотность при заданной влажности", value: "396 кг/м³" },
      { label: "Базовая плотность при 12 %", value: "450 кг/м³" },
      { label: "Объём", value: "0,001 м³" },
    ],
  },
  {
    name: "нулевой объём отклоняется",
    inputs: { "moisture": 12, "species": "pine", "volume": 0 },
    expectPrimary: "—",
  },
  {
    name: "неизвестная порода отклоняется",
    inputs: { "moisture": 12, "species": "teak", "volume": 1 },
    expectPrimary: "—",
  },
];
