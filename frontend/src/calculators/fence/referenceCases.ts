import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   ⌈40/2,5⌉ = 16 секций, столбов 16 + 1 + 1 калитка = 18
//   лаг 16 × 2,5 × 2 = 80 м
export const fenceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сорок метров с калиткой",
    inputs: { "gates": 1, "height": 1.8, "length": 40, "rails": 2, "span": 2.5 },
    expectPrimary: "18",
    expectSecondary: [
      { label: "Секций", value: "16" },
      { label: "Метров лаг", value: "80" },
      { label: "Площадь зашивки", value: "72 м²" },
      { label: "Фактический шаг столбов", value: "2,5 м" },
    ],
  },
  {
    name: "сто метров с двумя воротами",
    inputs: { "gates": 2, "height": 2, "length": 100, "rails": 3, "span": 3 },
    expectPrimary: "37",
    expectSecondary: [
      { label: "Секций", value: "34" },
      { label: "Метров лаг", value: "306" },
      { label: "Площадь зашивки", value: "200 м²" },
      { label: "Фактический шаг столбов", value: "2,941 м" },
    ],
  },
  {
    name: "граница: одна секция",
    inputs: { "gates": 0, "height": 1.5, "length": 2.5, "rails": 1, "span": 2.5 },
    expectPrimary: "2",
    expectSecondary: [
      { label: "Секций", value: "1" },
      { label: "Метров лаг", value: "2,5" },
      { label: "Площадь зашивки", value: "3,75 м²" },
      { label: "Фактический шаг столбов", value: "2,5 м" },
    ],
  },
  {
    name: "нулевая длина отклоняется",
    inputs: { "gates": 0, "height": 1.8, "length": 0, "rails": 2, "span": 2.5 },
    expectPrimary: "—",
  },
  {
    name: "шесть лаг отклоняются",
    inputs: { "gates": 0, "height": 1.8, "length": 40, "rails": 6, "span": 2.5 },
    expectPrimary: "—",
  },
];
