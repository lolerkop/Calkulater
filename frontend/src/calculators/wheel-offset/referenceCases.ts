import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const wheelOffsetReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "диск 7 дюймов, вылет 35 на 45",
    inputs: { width: 7, offset: 35, newOffset: 45 },
    expectPrimary: "136,6 мм",
    expectSecondary: [
      { label: "Ширина диска", value: "177,8 мм" },
      { label: "Смещение колеса", value: "10 мм" },
      { label: "Куда сместится", value: "внутрь" },
      { label: "Вылет назад после замены", value: "146,6 мм" },
    ],
  },
  {
    name: "широкий 9,5 дюйма, вылет 20 на 0",
    inputs: { width: 9.5, offset: 20, newOffset: 0 },
    expectPrimary: "153,35 мм",
    expectSecondary: [
      { label: "Ширина диска", value: "241,3 мм" },
      { label: "Смещение колеса", value: "20 мм" },
      { label: "Куда сместится", value: "наружу" },
      { label: "Вылет назад после замены", value: "133,35 мм" },
    ],
  },
  {
    name: "граница: вылеты совпадают",
    inputs: { width: 7, offset: 35, newOffset: 35 },
    expectPrimary: "136,6 мм",
    expectSecondary: [
      { label: "Ширина диска", value: "177,8 мм" },
      { label: "Смещение колеса", value: "0 мм" },
      { label: "Куда сместится", value: "без смещения" },
      { label: "Вылет назад после замены", value: "136,6 мм" },
    ],
  },
  {
    name: "нулевая ширина отклоняется",
    inputs: { width: 0, offset: 35, newOffset: 45 },
    expectPrimary: "—",
  },
  {
    name: "отрицательная ширина отклоняется",
    inputs: { width: -7, offset: 35, newOffset: 45 },
    expectPrimary: "—",
  },
];
