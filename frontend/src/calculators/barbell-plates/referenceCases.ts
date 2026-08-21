import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками.
//   на сторону (100 − 20)/2 = 40 -> 25 + 15
//   (87,5 − 20)/2 = 33,75 -> 25 + 5 + 2,5 + 1,25
//   допуск 1e-9 обязателен: 1,25 в двоичной записи неточен
export const barbellPlatesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сто килограммов на олимпийском грифе",
    inputs: { "bar": 20, "plates": "25 20 15 10 5 2.5 1.25", "target": 100 },
    expectPrimary: "25×1 + 15×1",
    expectSecondary: [
      { label: "Фактический вес", value: "100 кг" },
      { label: "Недобор", value: "0 кг" },
      { label: "На сторону", value: "40 кг" },
      { label: "Блинов на сторону", value: "2" },
    ],
  },
  {
    name: "восемьдесят семь с половиной набираются точно",
    inputs: { "bar": 20, "plates": "25 20 15 10 5 2.5 1.25", "target": 87.5 },
    expectPrimary: "25×1 + 5×1 + 2,5×1 + 1,25×1",
    expectSecondary: [
      { label: "Фактический вес", value: "87,5 кг" },
      { label: "Недобор", value: "0 кг" },
      { label: "На сторону", value: "33,75 кг" },
      { label: "Блинов на сторону", value: "4" },
    ],
  },
  {
    name: "граница: пустой гриф",
    inputs: { "bar": 20, "plates": "25 20 15 10 5 2.5 1.25", "target": 20 },
    expectPrimary: "—",
    expectSecondary: [
      { label: "Фактический вес", value: "20 кг" },
      { label: "Недобор", value: "0 кг" },
      { label: "На сторону", value: "0 кг" },
      { label: "Блинов на сторону", value: "0" },
    ],
  },
  {
    name: "целевой вес меньше грифа отклоняется",
    inputs: { "bar": 20, "plates": "25 20 15", "target": 15 },
    expectPrimary: "—",
  },
  {
    name: "пустой список блинов отклоняется",
    inputs: { "bar": 20, "plates": "", "target": 100 },
    expectPrimary: "—",
  },
];
