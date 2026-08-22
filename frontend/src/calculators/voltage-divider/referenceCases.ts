import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   12 В на 10 к и 4,7 к -> 3,83673 В, ток 0,81633 мА, доля 31,9728 %
//   5 В на равных плечах -> ровно половина, мощности плеч равны
//   12 В на 1 Ом и 100 к -> выход почти равен входу, мощность верхнего плеча
//                           уходит в область, где обычная запись дала бы ноль
export const voltageDividerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "12 В на 10 кОм и 4,7 кОм",
    inputs: { vin: 12, r1: 10000, r2: 4700 },
    expectPrimary: "3,837 В",
    expectSecondary: [
      { label: "Ток через делитель", value: "0,8163 мА" },
      { label: "Доля от входного", value: "31,9728 %" },
      { label: "Мощность верхнего плеча", value: "6,664 мВт" },
    ],
  },
  {
    name: "5 В на равных плечах дают ровно половину",
    inputs: { vin: 5, r1: 1000, r2: 1000 },
    expectPrimary: "2,5 В",
    expectSecondary: [
      { label: "Доля от входного", value: "50 %" },
      { label: "Ток через делитель", value: "2,5 мА" },
    ],
  },
  {
    name: "граница: очень малое верхнее плечо",
    inputs: { vin: 12, r1: 1, r2: 100000 },
    expectPrimary: "12 В",
    expectSecondary: [
      { label: "Доля от входного", value: "99,999 %" },
      { label: "Мощность верхнего плеча", value: "1,440·10^-5 мВт" },
    ],
  },
  {
    name: "нулевое верхнее сопротивление отклоняется",
    inputs: { vin: 12, r1: 0, r2: 4700 },
    expectPrimary: "—",
  },
  {
    name: "нулевое нижнее сопротивление отклоняется",
    inputs: { vin: 12, r1: 10000, r2: 0 },
    expectPrimary: "—",
  },
];
