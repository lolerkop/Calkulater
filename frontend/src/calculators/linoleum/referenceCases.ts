import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   ⌈3,5/3⌉ = 2 полосы × 5 м × 1,05 = 10,5 погонных метров, швов 1
export const linoleumReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "комната шире рулона: две полосы и шов",
    inputs: { "length": 5, "reserve": 5, "rollWidth": 3, "width": 3.5 },
    expectPrimary: "10,5 м",
    expectSecondary: [
      { label: "Полос", value: "2" },
      { label: "Площадь пола", value: "17,5 м²" },
      { label: "Куплено", value: "31,5 м²" },
      { label: "Обрезки", value: "14 м²" },
      { label: "Швов", value: "1" },
    ],
  },
  {
    name: "комната ровно в рулон",
    inputs: { "length": 6, "reserve": 0, "rollWidth": 2.5, "width": 2.5 },
    expectPrimary: "6 м",
    expectSecondary: [
      { label: "Полос", value: "1" },
      { label: "Площадь пола", value: "15 м²" },
      { label: "Куплено", value: "15 м²" },
      { label: "Обрезки", value: "0 м²" },
      { label: "Швов", value: "0" },
    ],
  },
  {
    name: "граница: квадрат ровно по ширине рулона",
    inputs: { "length": 4, "reserve": 0, "rollWidth": 4, "width": 4 },
    expectPrimary: "4 м",
    expectSecondary: [
      { label: "Полос", value: "1" },
      { label: "Площадь пола", value: "16 м²" },
      { label: "Куплено", value: "16 м²" },
      { label: "Обрезки", value: "0 м²" },
      { label: "Швов", value: "0" },
    ],
  },
  {
    name: "нулевая длина отклоняется",
    inputs: { "length": 0, "reserve": 5, "rollWidth": 3, "width": 3.5 },
    expectPrimary: "—",
  },
  {
    name: "нулевая ширина рулона отклоняется",
    inputs: { "length": 5, "reserve": 5, "rollWidth": 0, "width": 3.5 },
    expectPrimary: "—",
  },
];
