import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const yeastConvertReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { value: 30, from: "fresh", to: "instant" },
    expectPrimary: "7,5 г",
    expectSecondary: [
      { label: "В пересчёте на прессованные", value: "30 г" },
      { label: "Сухие активные", value: "10 г" },
      { label: "Быстродействующие", value: "7,5 г" },
      { label: "Соотношение", value: "0,25" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { value: 7, from: "instant", to: "fresh" },
    expectPrimary: "28 г",
    expectSecondary: [
      { label: "В пересчёте на прессованные", value: "28 г" },
      { label: "Сухие активные", value: "9,333 г" },
      { label: "Быстродействующие", value: "7 г" },
      { label: "Соотношение", value: "4" },
    ],
  },
  {
    name: "граница 3",
    inputs: { value: 1, from: "active", to: "instant" },
    expectPrimary: "0,75 г",
    expectSecondary: [
      { label: "В пересчёте на прессованные", value: "3 г" },
      { label: "Сухие активные", value: "1 г" },
      { label: "Быстродействующие", value: "0,75 г" },
      { label: "Соотношение", value: "0,75" },
    ],
  },
  {
    name: "масса должна быть больше нуля",
    inputs: { value: 0, from: "fresh", to: "instant" },
    expectPrimary: "—",
  },
  {
    name: "выберите разные виды дрожжей",
    inputs: { value: 10, from: "fresh", to: "fresh" },
    expectPrimary: "—",
  },
];
