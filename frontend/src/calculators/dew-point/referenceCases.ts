import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   20 °C / 60 %  -> γ = 0,82949, Td = 11,99296
//   30 °C / 80 %  -> γ = 1,71223, Td = 26,16041
//   15 °C / 100 % -> ln(1) = 0, Td = t с точностью до двоичного шума
export const dewPointReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "20 °C при влажности 60 %",
    inputs: { t: 20, rh: 60 },
    expectPrimary: "11,993 °C",
    expectSecondary: [
      { label: "Разрыв с температурой", value: "8,007 °C" },
      { label: "Точка росы в градусах Фаренгейта", value: "53,587 °F" },
    ],
  },
  {
    name: "30 °C при влажности 80 %",
    inputs: { t: 30, rh: 80 },
    expectPrimary: "26,16 °C",
    expectSecondary: [
      { label: "Разрыв с температурой", value: "3,84 °C" },
      { label: "Температура воздуха", value: "30 °C" },
    ],
  },
  {
    name: "граница: при 100 % точка росы равна температуре",
    inputs: { t: 15, rh: 100 },
    expectPrimary: "15 °C",
    expectSecondary: [{ label: "Разрыв с температурой", value: "0 °C" }],
  },
  {
    name: "нулевая влажность отклоняется",
    inputs: { t: 20, rh: 0 },
    expectPrimary: "—",
  },
  {
    name: "влажность больше 100 % отклоняется",
    inputs: { t: 20, rh: 120 },
    expectPrimary: "—",
  },
];
