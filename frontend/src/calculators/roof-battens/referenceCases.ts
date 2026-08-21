import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   60/0,35 × 1,1 = 188,57 м; брусков ⌈188,57/6⌉ = 32
//   объём 188,57 × 0,05 × 0,05 = 0,4714 м³
export const roofBattensReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "шестьдесят метров с шагом тридцать пять",
    inputs: { "area": 60, "battenLength": 6, "sectionHeight": 50, "sectionWidth": 50, "step": 0.35, "waste": 10 },
    expectPrimary: "188,57 м",
    expectSecondary: [
      { label: "Брусков", value: "32" },
      { label: "Объём древесины", value: "0,4714 м³" },
      { label: "Площадь крыши", value: "60 м²" },
      { label: "Метров на квадратный метр", value: "2,857" },
    ],
  },
  {
    name: "сто двадцать метров с шагом полметра",
    inputs: { "area": 120, "battenLength": 4, "sectionHeight": 60, "sectionWidth": 40, "step": 0.5, "waste": 5 },
    expectPrimary: "252 м",
    expectSecondary: [
      { label: "Брусков", value: "63" },
      { label: "Объём древесины", value: "0,6048 м³" },
      { label: "Площадь крыши", value: "120 м²" },
      { label: "Метров на квадратный метр", value: "2" },
    ],
  },
  {
    name: "граница: шесть метров с метровым шагом",
    inputs: { "area": 6, "battenLength": 6, "sectionHeight": 50, "sectionWidth": 50, "step": 1, "waste": 0 },
    expectPrimary: "6 м",
    expectSecondary: [
      { label: "Брусков", value: "1" },
      { label: "Объём древесины", value: "0,015 м³" },
      { label: "Площадь крыши", value: "6 м²" },
      { label: "Метров на квадратный метр", value: "1" },
    ],
  },
  {
    name: "нулевой шаг отклоняется",
    inputs: { "area": 60, "battenLength": 6, "sectionHeight": 50, "sectionWidth": 50, "step": 0, "waste": 10 },
    expectPrimary: "—",
  },
  {
    name: "нулевая длина бруска отклоняется",
    inputs: { "area": 60, "battenLength": 0, "sectionHeight": 50, "sectionWidth": 50, "step": 0.35, "waste": 10 },
    expectPrimary: "—",
  },
];
