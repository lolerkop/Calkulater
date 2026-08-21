import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   10×8×0,3 = 24 м³, плюс 5 % -> 25,2
//   прутков: ⌊8/0,2⌋+1 = 41 и ⌊10/0,2⌋+1 = 51, всё ×2 слоя
export const slabFoundationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "плита десять на восемь с сеткой двести",
    inputs: { "rebarDiameter": 12, "length": 10, "meshStep": 0.2, "thickness": 0.3, "waste": 5, "width": 8 },
    expectPrimary: "25,2 м³",
    expectSecondary: [
      { label: "Площадь плиты", value: "80 м²" },
      { label: "Чистый объём", value: "24 м³" },
      { label: "Длина арматуры", value: "1 636 м" },
      { label: "Вес арматуры", value: "1 452,46 кг" },
      { label: "Прутков", value: "184" },
    ],
  },
  {
    name: "плита шесть на шесть без запаса",
    inputs: { "rebarDiameter": 10, "length": 6, "meshStep": 0.25, "thickness": 0.25, "waste": 0, "width": 6 },
    expectPrimary: "9 м³",
    expectSecondary: [
      { label: "Площадь плиты", value: "36 м²" },
      { label: "Чистый объём", value: "9 м³" },
      { label: "Длина арматуры", value: "600 м" },
      { label: "Вес арматуры", value: "369,92 кг" },
      { label: "Прутков", value: "100" },
    ],
  },
  {
    name: "граница: метр на метр с шагом в метр",
    inputs: { "rebarDiameter": 8, "length": 1, "meshStep": 1, "thickness": 0.1, "waste": 0, "width": 1 },
    expectPrimary: "0,1 м³",
    expectSecondary: [
      { label: "Площадь плиты", value: "1 м²" },
      { label: "Чистый объём", value: "0,1 м³" },
      { label: "Длина арматуры", value: "8 м" },
      { label: "Вес арматуры", value: "3,157 кг" },
      { label: "Прутков", value: "8" },
    ],
  },
  {
    name: "нулевая длина отклоняется",
    inputs: { "rebarDiameter": 12, "length": 0, "meshStep": 0.2, "thickness": 0.3, "waste": 5, "width": 8 },
    expectPrimary: "—",
  },
  {
    name: "нулевой шаг сетки отклоняется",
    inputs: { "rebarDiameter": 12, "length": 10, "meshStep": 0, "thickness": 0.3, "waste": 5, "width": 8 },
    expectPrimary: "—",
  },
];
