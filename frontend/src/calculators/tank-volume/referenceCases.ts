import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const tankVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "вертикальный цилиндр, налито 1,2 м",
    inputs: { shape: "vertical-cylinder", d: 1.5, len: 2, level: 1.2 },
    expectPrimary: "2,121 м³",
    expectSecondary: [
      { label: "Полный объём", value: "3,534 м³" },
      { label: "Заполнено", value: "60 %" },
      { label: "В литрах", value: "2 120,58 л" },
    ],
  },
  {
    name: "горизонтальный цилиндр, налито до оси",
    inputs: { shape: "horizontal-cylinder", d: 1.5, len: 3, level: 0.75 },
    expectPrimary: "2,651 м³",
    expectSecondary: [
      { label: "Полный объём", value: "5,301 м³" },
      { label: "Заполнено", value: "50 %" },
      { label: "В литрах", value: "2 650,72 л" },
    ],
  },
  {
    name: "налито под крышку",
    inputs: { shape: "vertical-cylinder", d: 1.5, len: 2, level: 2 },
    expectPrimary: "3,534 м³",
    expectSecondary: [
      { label: "Полный объём", value: "3,534 м³" },
      { label: "Заполнено", value: "100 %" },
      { label: "В литрах", value: "3 534,29 л" },
    ],
  },
  {
    name: "нулевой диаметр отклоняется",
    inputs: { shape: "vertical-cylinder", d: 0, len: 2, level: 1 },
    expectPrimary: "—",
  },
  {
    name: "уровень выше высоты отклоняется",
    inputs: { shape: "vertical-cylinder", d: 1.5, len: 2, level: 3 },
    expectPrimary: "—",
  },
];
