import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   Q = C·U = 100 мкФ · 12 В = 1200 мкКл; E = 100e−6 · 12² / 2 = 0,0072 Дж
//   U = Q/C = 1200 / 100 = 12 В
//   C = Q/U = 1200 / 12 = 100 мкФ
export const capacitorBasicsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "конденсатор 100 мкФ при 12 В",
    inputs: { mode: 'charge', c: 100, v: 12, q: 1200 },
    expectPrimary: "1 200 мкКл",
    expectSecondary: [
      { label: "Энергия поля", value: "0,0072 Дж" },
      { label: "Ёмкость", value: "100 мкФ" },
    ],
  },
  {
    name: "напряжение по заряду и ёмкости",
    inputs: { mode: 'voltage', c: 100, v: 12, q: 1200 },
    expectPrimary: "12 В",
    expectSecondary: [{ label: "Энергия поля", value: "0,0072 Дж" }],
  },
  {
    name: "граница: ёмкость по заряду и напряжению",
    inputs: { mode: 'capacitance', c: 100, v: 12, q: 1200 },
    expectPrimary: "100 мкФ",
    expectSecondary: [{ label: "Энергия поля", value: "0,0072 Дж" }],
  },
  {
    name: "нулевая ёмкость отклоняется",
    inputs: { mode: 'charge', c: 0, v: 12, q: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевое напряжение при поиске ёмкости отклоняется",
    inputs: { mode: 'capacitance', c: 0, v: 0, q: 1200 },
    expectPrimary: "—",
  },
];
