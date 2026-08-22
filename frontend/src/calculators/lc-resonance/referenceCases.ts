import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const lcResonanceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "100 мкГн и 100 нФ",
    inputs: { l: 100, c: 100 },
    expectPrimary: "50 329,21 Гц",
    expectSecondary: [
      { label: "В килогерцах", value: "50,329 кГц" },
      { label: "Период", value: "1,987·10^-5 с" },
      { label: "Волновое сопротивление", value: "31,623 Ом" },
    ],
  },
  {
    name: "10 мкГн и 1000 нФ",
    inputs: { l: 10, c: 1000 },
    expectPrimary: "50 329,21 Гц",
    expectSecondary: [
      { label: "В килогерцах", value: "50,329 кГц" },
      { label: "Период", value: "1,987·10^-5 с" },
      { label: "Волновое сопротивление", value: "3,162 Ом" },
    ],
  },
  {
    name: "по единице каждого",
    inputs: { l: 1, c: 1 },
    expectPrimary: "5 032 921,21 Гц",
    expectSecondary: [
      { label: "В килогерцах", value: "5 032,92 кГц" },
      { label: "Период", value: "1,987·10^-7 с" },
      { label: "Волновое сопротивление", value: "31,623 Ом" },
    ],
  },
  {
    name: "нулевая индуктивность отклоняется",
    inputs: { l: 0, c: 100 },
    expectPrimary: "—",
  },
  {
    name: "нулевая ёмкость отклоняется",
    inputs: { l: 100, c: 0 },
    expectPrimary: "—",
  },
];
