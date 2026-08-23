import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const dripWaterLeakReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { drops: 10, price: 45, dropMl: 0.05 },
    expectPrimary: "0,72 л",
    expectSecondary: [
      { label: "За месяц", value: "21,6 л" },
      { label: "За год", value: "262,8 л" },
      { label: "В кубометрах за год", value: "0,2628 м³" },
      { label: "Стоимость за год", value: "11,826 ₽" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { drops: 60, price: 60, dropMl: 0.04 },
    expectPrimary: "3,456 л",
    expectSecondary: [
      { label: "За месяц", value: "103,68 л" },
      { label: "За год", value: "1 261,44 л" },
      { label: "В кубометрах за год", value: "1,261 м³" },
      { label: "Стоимость за год", value: "75,686 ₽" },
    ],
  },
  {
    name: "граница 3",
    inputs: { drops: 1, price: 0, dropMl: 0.05 },
    expectPrimary: "0,072 л",
    expectSecondary: [
      { label: "За месяц", value: "2,16 л" },
      { label: "За год", value: "26,28 л" },
      { label: "В кубометрах за год", value: "0,0263 м³" },
      { label: "Стоимость за год", value: "0 ₽" },
    ],
  },
  {
    name: "число капель в минуту должно быть больше нуля",
    inputs: { drops: 0, price: 45, dropMl: 0.05 },
    expectPrimary: "—",
  },
  {
    name: "объём капли должен быть больше нуля",
    inputs: { drops: 10, price: 45, dropMl: 0 },
    expectPrimary: "—",
  },
];
