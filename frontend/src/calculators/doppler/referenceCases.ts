import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const dopplerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "источник приближается со скоростью 20 м/с",
    inputs: { f: 440, vSource: 20, vObserver: 0, c: 343 },
    expectPrimary: "467,24 Гц",
    expectSecondary: [
      { label: "Сдвиг частоты", value: "27,245 Гц" },
      { label: "Относительный сдвиг", value: "6,192 %" },
    ],
  },
  {
    name: "источник удаляется",
    inputs: { f: 440, vSource: -20, vObserver: 0, c: 343 },
    expectPrimary: "415,76 Гц",
    expectSecondary: [
      { label: "Сдвиг частоты", value: "-24,242 Гц" },
      { label: "Относительный сдвиг", value: "-5,5096 %" },
    ],
  },
  {
    name: "обе стороны покоятся",
    inputs: { f: 440, vSource: 0, vObserver: 0, c: 343 },
    expectPrimary: "440 Гц",
    expectSecondary: [
      { label: "Сдвиг частоты", value: "0 Гц" },
      { label: "Относительный сдвиг", value: "0 %" },
    ],
  },
  {
    name: "нулевая частота отклоняется",
    inputs: { f: 0, vSource: 20, vObserver: 0, c: 343 },
    expectPrimary: "—",
  },
  {
    name: "источник быстрее волны отклоняется",
    inputs: { f: 440, vSource: 343, vObserver: 0, c: 343 },
    expectPrimary: "—",
  },
];
