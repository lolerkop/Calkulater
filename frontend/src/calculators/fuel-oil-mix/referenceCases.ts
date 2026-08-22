import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const fuelOilMixReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пять литров при 1:50",
    inputs: { fuel: 5, ratio: 50 },
    expectPrimary: "100 мл",
    expectSecondary: [
      { label: "Объём смеси", value: "5,1 л" },
      { label: "Доля масла", value: "1,9608 %" },
    ],
  },
  {
    name: "десять литров при 1:25",
    inputs: { fuel: 10, ratio: 25 },
    expectPrimary: "400 мл",
    expectSecondary: [
      { label: "Объём смеси", value: "10,4 л" },
      { label: "Доля масла", value: "3,8462 %" },
    ],
  },
  {
    name: "литр при самой бедной смеси",
    inputs: { fuel: 1, ratio: 100 },
    expectPrimary: "10 мл",
    expectSecondary: [
      { label: "Объём смеси", value: "1,01 л" },
      { label: "Доля масла", value: "0,9901 %" },
    ],
  },
  {
    name: "нулевое топливо отклоняется",
    inputs: { fuel: 0, ratio: 50 },
    expectPrimary: "—",
  },
  {
    name: "соотношение вне 20…100 отклоняется",
    inputs: { fuel: 5, ratio: 10 },
    expectPrimary: "—",
  },
];
