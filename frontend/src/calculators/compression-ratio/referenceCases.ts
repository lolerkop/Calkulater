import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const compressionRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "цилиндр 454,17 см³ и камера 45 см³",
    inputs: { displacement: 454.17, chamber: 45 },
    expectPrimary: "11,093",
    expectSecondary: [
      { label: "Полный объём цилиндра", value: "499,17 см³" },
      { label: "Объём камеры сгорания", value: "45 см³" },
      { label: "Рабочий объём цилиндра", value: "454,17 см³" },
      { label: "Записью", value: "11,093:1" },
    ],
  },
  {
    name: "форсированный: 500 см³ и камера 40 см³",
    inputs: { displacement: 500, chamber: 40 },
    expectPrimary: "13,5",
    expectSecondary: [
      { label: "Полный объём цилиндра", value: "540 см³" },
      { label: "Объём камеры сгорания", value: "40 см³" },
      { label: "Рабочий объём цилиндра", value: "500 см³" },
      { label: "Записью", value: "13,5:1" },
    ],
  },
  {
    name: "граница: камера равна рабочему объёму",
    inputs: { displacement: 50, chamber: 50 },
    expectPrimary: "2",
    expectSecondary: [
      { label: "Полный объём цилиндра", value: "100 см³" },
      { label: "Объём камеры сгорания", value: "50 см³" },
      { label: "Рабочий объём цилиндра", value: "50 см³" },
      { label: "Записью", value: "2:1" },
    ],
  },
  {
    name: "нулевая камера отклоняется",
    inputs: { displacement: 454.17, chamber: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой рабочий объём отклоняется",
    inputs: { displacement: 0, chamber: 45 },
    expectPrimary: "—",
  },
];
