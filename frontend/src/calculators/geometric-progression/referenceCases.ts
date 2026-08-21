import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно.
//   2·3⁹ = 39 366; сумма 2(1−3¹⁰)/(1−3) = 59 048
//   100 при r = 0,5: восьмой член 0,7813, сумма 199,22, бесконечная 200
//   r = 10 и n = 50 дают 10⁴⁹ — отклоняется как непредставимое
export const geometricProgressionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "удвоение втрое на десяти членах",
    inputs: { "a1": 2, "n": 10, "r": 3 },
    expectPrimary: "39 366",
    expectSecondary: [
      { label: "Сумма ряда", value: "59 048" },
      { label: "Знаменатель", value: "3" },
      { label: "Членов", value: "10" },
    ],
  },
  {
    name: "убывающая прогрессия с бесконечной суммой",
    inputs: { "a1": 100, "n": 8, "r": 0.5 },
    expectPrimary: "0,7813",
    expectSecondary: [
      { label: "Сумма ряда", value: "199,22" },
      { label: "Знаменатель", value: "0,5" },
      { label: "Членов", value: "8" },
      { label: "Сумма бесконечного ряда", value: "200" },
    ],
  },
  {
    name: "граница: один член при знаменателе один",
    inputs: { "a1": 5, "n": 1, "r": 1 },
    expectPrimary: "5",
    expectSecondary: [
      { label: "Сумма ряда", value: "5" },
      { label: "Знаменатель", value: "1" },
      { label: "Членов", value: "1" },
    ],
  },
  {
    name: "нулевой знаменатель отклоняется",
    inputs: { "a1": 2, "n": 10, "r": 0 },
    expectPrimary: "—",
  },
  {
    name: "слишком большой ряд отклоняется",
    inputs: { "a1": 2, "n": 50, "r": 10 },
    expectPrimary: "—",
  },
];
