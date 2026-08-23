import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const timer555ReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { r1: 10, r2: 47, c: 100 },
    expectPrimary: "138,72 Гц",
    expectSecondary: [
      { label: "Период", value: "7,209 мс" },
      { label: "Время высокого уровня", value: "3,951 мс" },
      { label: "Время низкого уровня", value: "3,258 мс" },
      { label: "Скважность", value: "54,808 %" },
    ],
  },
  {
    name: "граница 2",
    inputs: { r1: 1, r2: 1, c: 10 },
    expectPrimary: "48 089,83 Гц",
    expectSecondary: [
      { label: "Период", value: "0,0208 мс" },
      { label: "Время высокого уровня", value: "0,0139 мс" },
      { label: "Время низкого уровня", value: "0,006931 мс" },
      { label: "Скважность", value: "66,667 %" },
    ],
  },
  {
    name: "обычный 3",
    inputs: { r1: 100, r2: 100, c: 1000 },
    expectPrimary: "4,809 Гц",
    expectSecondary: [
      { label: "Период", value: "207,94 мс" },
      { label: "Время высокого уровня", value: "138,63 мс" },
      { label: "Время низкого уровня", value: "69,315 мс" },
      { label: "Скважность", value: "66,667 %" },
    ],
  },
  {
    name: "сопротивление должно быть больше нуля",
    inputs: { r1: 0, r2: 47, c: 100 },
    expectPrimary: "—",
  },
  {
    name: "ёмкость должна быть больше нуля",
    inputs: { r1: 10, r2: 47, c: 0 },
    expectPrimary: "—",
  },
];
