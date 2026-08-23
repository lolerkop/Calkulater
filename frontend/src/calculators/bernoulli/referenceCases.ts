import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const bernoulliReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { p1: 300, v1: 2, h1: 0, v2: 6, h2: 0, rho: 1000 },
    expectPrimary: "284 кПа",
    expectSecondary: [
      { label: "Изменение давления", value: "-16 кПа" },
      { label: "Динамический напор в первом сечении", value: "2 кПа" },
      { label: "Динамический напор во втором сечении", value: "18 кПа" },
      { label: "Полный напор", value: "302 кПа" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { p1: 101.325, v1: 0, h1: 10, v2: 4, h2: 0, rho: 1000 },
    expectPrimary: "191,39 кПа",
    expectSecondary: [
      { label: "Изменение давления", value: "90,067 кПа" },
      { label: "Динамический напор в первом сечении", value: "0 кПа" },
      { label: "Динамический напор во втором сечении", value: "8 кПа" },
      { label: "Полный напор", value: "199,39 кПа" },
    ],
  },
  {
    name: "граница 3",
    inputs: { p1: 200, v1: 3, h1: 5, v2: 3, h2: 5, rho: 1000 },
    expectPrimary: "200 кПа",
    expectSecondary: [
      { label: "Изменение давления", value: "0 кПа" },
      { label: "Динамический напор в первом сечении", value: "4,5 кПа" },
      { label: "Динамический напор во втором сечении", value: "4,5 кПа" },
      { label: "Полный напор", value: "253,53 кПа" },
    ],
  },
  {
    name: "при таких данных давление во втором сечении отрицательно",
    inputs: { p1: 100, v1: 0, h1: 0, v2: 40, h2: 0, rho: 1000 },
    expectPrimary: "—",
  },
  {
    name: "плотность должна быть больше нуля",
    inputs: { p1: 300, v1: 2, h1: 0, v2: 6, h2: 0, rho: 0 },
    expectPrimary: "—",
  },
];
