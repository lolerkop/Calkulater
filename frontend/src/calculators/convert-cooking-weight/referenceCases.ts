import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками.
//   стакан муки: 240 мл × 0,53 г/мл = 127,2 г
//   200 мл мёда: 200 × 1,42 = 284 г
export const convertCookingWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "стакан муки в граммах",
    inputs: { "direction": "toGrams", "product": "flour", "unit": "cup", "value": 1 },
    expectPrimary: "127,2",
    expectSecondary: [
      { label: "Плотность продукта", value: "0,53 г/мл" },
      { label: "В миллилитрах", value: "240 мл" },
      { label: "Исходное значение", value: "1" },
    ],
  },
  {
    name: "мёд из миллилитров в граммы",
    inputs: { "direction": "toGrams", "product": "honey", "unit": "ml", "value": 200 },
    expectPrimary: "284",
    expectSecondary: [
      { label: "Плотность продукта", value: "1,42 г/мл" },
      { label: "В миллилитрах", value: "200 мл" },
      { label: "Исходное значение", value: "200" },
    ],
  },
  {
    name: "граница: нулевое количество",
    inputs: { "direction": "toGrams", "product": "salt", "unit": "tsp", "value": 0 },
    expectPrimary: "0",
    expectSecondary: [
      { label: "Плотность продукта", value: "1,2 г/мл" },
      { label: "В миллилитрах", value: "0 мл" },
      { label: "Исходное значение", value: "0" },
    ],
  },
  {
    name: "неизвестный продукт отклоняется",
    inputs: { "direction": "toGrams", "product": "cocoa", "unit": "cup", "value": 1 },
    expectPrimary: "—",
  },
  {
    name: "неизвестная единица отклоняется",
    inputs: { "direction": "toGrams", "product": "flour", "unit": "pint", "value": 1 },
    expectPrimary: "—",
  },
];
