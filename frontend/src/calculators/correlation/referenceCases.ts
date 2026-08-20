import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   Σdxdy = 6; Σdx² = 10; Σdy² = 6; r = 6/√60 = 0,7745966692
//   наклон 6/10 = 0,6; свободный член 4 − 0,6·3 = 2,2
//   строгая линейная связь даёт r = ±1; нулевая дисперсия ряда r не определяет
export const correlationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пять пар со слабоположительной связью",
    inputs: { "xs": "1 2 3 4 5", "ys": "2 4 5 4 5" },
    expectPrimary: "0,7746",
    expectSecondary: [{ label: "Коэффициент детерминации", value: "0,6" }, { label: "Ковариация выборки", value: "1,5" }, { label: "Наклон линии", value: "0,6" }, { label: "Свободный член", value: "2,2" }, { label: "Пар значений", value: "5" }],
  },
  {
    name: "строгая обратная связь — коэффициент −1",
    inputs: { "xs": "1 2 3 4 5", "ys": "10 8 6 4 2" },
    expectPrimary: "-1",
    expectSecondary: [{ label: "Коэффициент детерминации", value: "1" }, { label: "Наклон линии", value: "-2" }],
  },
  {
    name: "граница: строгая прямая связь — коэффициент 1",
    inputs: { "xs": "1 2 3", "ys": "2 4 6" },
    expectPrimary: "1",
    expectSecondary: [{ label: "Наклон линии", value: "2" }, { label: "Свободный член", value: "0" }],
  },
  {
    name: "десятичные значения в русской записи через запятую",
    inputs: { "xs": "1,5 2,5 3,5 4,5", "ys": "2 3 4 6" },
    expectPrimary: "0,9827",
    expectSecondary: [{ label: "Пар значений", value: "4" }, { label: "Наклон линии", value: "1,3" }, { label: "Свободный член", value: "-0,15" }],
  },
  {
    name: "ряды разной длины отклоняются",
    inputs: { "xs": "1 2 3 4", "ys": "2 4 6" },
    expectPrimary: "—",
  },
  {
    name: "нулевая дисперсия одного ряда отклоняется",
    inputs: { "xs": "1 2 3 4", "ys": "7 7 7 7" },
    expectPrimary: "—",
  },
  {
    name: "менее трёх пар отклоняется",
    inputs: { "xs": "1 2", "ys": "3 4" },
    expectPrimary: "—",
  },
];
