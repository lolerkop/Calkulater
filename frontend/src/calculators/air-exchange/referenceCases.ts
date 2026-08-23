import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const airExchangeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "комната 20 м² при кратности 3",
    inputs: { area: 20, height: 2.7, ach: 3 },
    expectPrimary: "162 м³/ч",
    expectSecondary: [
      { label: "Объём помещения", value: "54 м³" },
      { label: "В литрах в секунду", value: "45 л/с" },
      { label: "Смен воздуха в сутки", value: "72" },
      { label: "В кубометрах в минуту", value: "2,7 м³/мин" },
    ],
  },
  {
    name: "цех 200 м² высотой 6 м при кратности 8",
    inputs: { area: 200, height: 6, ach: 8 },
    expectPrimary: "9 600 м³/ч",
    expectSecondary: [
      { label: "Объём помещения", value: "1 200 м³" },
      { label: "В литрах в секунду", value: "2 666,67 л/с" },
      { label: "Смен воздуха в сутки", value: "192" },
      { label: "В кубометрах в минуту", value: "160 м³/мин" },
    ],
  },
  {
    name: "граница: кратность 1 в кубометровой комнате",
    inputs: { area: 1, height: 1, ach: 1 },
    expectPrimary: "1 м³/ч",
    expectSecondary: [
      { label: "Объём помещения", value: "1 м³" },
      { label: "В литрах в секунду", value: "0,2778 л/с" },
      { label: "Смен воздуха в сутки", value: "24" },
      { label: "В кубометрах в минуту", value: "0,0167 м³/мин" },
    ],
  },
  {
    name: "нулевая площадь отклоняется",
    inputs: { area: 0, height: 2.7, ach: 3 },
    expectPrimary: "—",
  },
  {
    name: "нулевая кратность отклоняется",
    inputs: { area: 20, height: 2.7, ach: 0 },
    expectPrimary: "—",
  },
];
