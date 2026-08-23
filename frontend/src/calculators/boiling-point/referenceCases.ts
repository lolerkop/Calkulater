import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const boilingPointReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "граница 1",
    inputs: { h: 0 },
    expectPrimary: "100 °C",
    expectSecondary: [
      { label: "Давление на высоте", value: "101,33 кПа" },
      { label: "В миллиметрах ртутного столба", value: "760 мм рт. ст." },
      { label: "Доля от давления на уровне моря", value: "100 %" },
      { label: "Ниже обычных 100 °C на", value: "0 °C" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { h: 1500 },
    expectPrimary: "94,919 °C",
    expectSecondary: [
      { label: "Давление на высоте", value: "84,556 кПа" },
      { label: "В миллиметрах ртутного столба", value: "634,23 мм рт. ст." },
      { label: "Доля от давления на уровне моря", value: "83,451 %" },
      { label: "Ниже обычных 100 °C на", value: "5,081 °C" },
    ],
  },
  {
    name: "обычный 3",
    inputs: { h: 5642 },
    expectPrimary: "80,683 °C",
    expectSecondary: [
      { label: "Давление на высоте", value: "49,544 кПа" },
      { label: "В миллиметрах ртутного столба", value: "371,61 мм рт. ст." },
      { label: "Доля от давления на уровне моря", value: "48,896 %" },
      { label: "Ниже обычных 100 °C на", value: "19,317 °C" },
    ],
  },
  {
    name: "высота вне диапазона от −430 до 9000 м",
    inputs: { h: -500 },
    expectPrimary: "—",
  },
  {
    name: "высота вне диапазона от −430 до 9000 м",
    inputs: { h: 12000 },
    expectPrimary: "—",
  },
];
