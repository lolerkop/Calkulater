import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const headphonePowerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "чувствительность 100 дБ/мВт при 10 мВт",
    inputs: { sensitivity: 100, impedance: 32, power: 10 },
    expectPrimary: "110 дБ",
    expectSecondary: [
      { label: "Прибавка от мощности", value: "10 дБ" },
      { label: "Напряжение на выходе", value: "0,5657 В" },
      { label: "Ток", value: "17,678 мА" },
      { label: "Импеданс", value: "32 Ом" },
    ],
  },
  {
    name: "высокоомные 250 Ом, 96 дБ, 50 мВт",
    inputs: { sensitivity: 96, impedance: 250, power: 50 },
    expectPrimary: "112,99 дБ",
    expectSecondary: [
      { label: "Прибавка от мощности", value: "16,99 дБ" },
      { label: "Напряжение на выходе", value: "3,536 В" },
      { label: "Ток", value: "14,142 мА" },
      { label: "Импеданс", value: "250 Ом" },
    ],
  },
  {
    name: "граница: ровно один милливатт",
    inputs: { sensitivity: 100, impedance: 32, power: 1 },
    expectPrimary: "100 дБ",
    expectSecondary: [
      { label: "Прибавка от мощности", value: "0 дБ" },
      { label: "Напряжение на выходе", value: "0,1789 В" },
      { label: "Ток", value: "5,59 мА" },
      { label: "Импеданс", value: "32 Ом" },
    ],
  },
  {
    name: "нулевая мощность отклоняется",
    inputs: { sensitivity: 100, impedance: 32, power: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой импеданс отклоняется",
    inputs: { sensitivity: 100, impedance: 0, power: 10 },
    expectPrimary: "—",
  },
];
