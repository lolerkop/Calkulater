import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const speedOfSoundReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { t: 20 },
    expectPrimary: "343,21 м/с",
    expectSecondary: [
      { label: "В километрах в час", value: "1 235,57 км/ч" },
      { label: "Километр звук пройдёт за", value: "2,914 с" },
      { label: "За три секунды", value: "1 029,64 м" },
      { label: "Отклонение от значения при 0 °C", value: "11,915 м/с" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { t: -30 },
    expectPrimary: "312,58 м/с",
    expectSecondary: [
      { label: "В километрах в час", value: "1 125,28 км/ч" },
      { label: "Километр звук пройдёт за", value: "3,199 с" },
      { label: "За три секунды", value: "937,73 м" },
      { label: "Отклонение от значения при 0 °C", value: "-18,722 м/с" },
    ],
  },
  {
    name: "граница 3",
    inputs: { t: 0 },
    expectPrimary: "331,3 м/с",
    expectSecondary: [
      { label: "В километрах в час", value: "1 192,68 км/ч" },
      { label: "Километр звук пройдёт за", value: "3,018 с" },
      { label: "За три секунды", value: "993,9 м" },
      { label: "Отклонение от значения при 0 °C", value: "0 м/с" },
    ],
  },
  {
    name: "температура вне диапазона от −80 до 80 °C",
    inputs: { t: -100 },
    expectPrimary: "—",
  },
  {
    name: "температура вне диапазона от −80 до 80 °C",
    inputs: { t: 120 },
    expectPrimary: "—",
  },
];
