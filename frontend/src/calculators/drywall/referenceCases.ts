import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   40 × 1 × 1,1 = 44 м²; лист 2,5×1,2 = 3 м²; ⌈44/3⌉ = 15 листов
export const drywallReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сорок метров в один слой",
    inputs: { "area": 40, "layers": 1, "profileStep": 0.6, "sheetLength": 2.5, "sheetWidth": 1.2, "waste": 10 },
    expectPrimary: "15",
    expectSecondary: [
      { label: "Площадь", value: "40 м²" },
      { label: "С запасом", value: "44 м²" },
      { label: "Площадь листа", value: "3 м²" },
      { label: "Метров профиля", value: "80" },
      { label: "Саморезов", value: "900" },
    ],
  },
  {
    name: "семьдесят пять метров в два слоя",
    inputs: { "area": 75, "layers": 2, "profileStep": 0.4, "sheetLength": 3, "sheetWidth": 1.2, "waste": 5 },
    expectPrimary: "44",
    expectSecondary: [
      { label: "Площадь", value: "75 м²" },
      { label: "С запасом", value: "157,5 м²" },
      { label: "Площадь листа", value: "3,6 м²" },
      { label: "Метров профиля", value: "212,5" },
      { label: "Саморезов", value: "5 280" },
    ],
  },
  {
    name: "граница: ровно один лист",
    inputs: { "area": 3, "layers": 1, "profileStep": 0.6, "sheetLength": 2.5, "sheetWidth": 1.2, "waste": 0 },
    expectPrimary: "1",
    expectSecondary: [
      { label: "Площадь", value: "3 м²" },
      { label: "С запасом", value: "3 м²" },
      { label: "Площадь листа", value: "3 м²" },
      { label: "Метров профиля", value: "6" },
      { label: "Саморезов", value: "60" },
    ],
  },
  {
    name: "нулевая площадь отклоняется",
    inputs: { "area": 0, "layers": 1, "profileStep": 0.6, "sheetLength": 2.5, "sheetWidth": 1.2, "waste": 10 },
    expectPrimary: "—",
  },
  {
    name: "четыре слоя отклоняются",
    inputs: { "area": 40, "layers": 4, "profileStep": 0.6, "sheetLength": 2.5, "sheetWidth": 1.2, "waste": 10 },
    expectPrimary: "—",
  },
];
