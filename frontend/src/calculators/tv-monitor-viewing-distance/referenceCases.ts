import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const tvViewingDistanceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { diag: 55, ratio: "16:9", lines: 2160 },
    expectPrimary: "1,673 м",
    expectSecondary: [
      { label: "Комфортное по SMPTE", value: "2,272 м" },
      { label: "Ширина экрана", value: "121,76 см" },
      { label: "Высота экрана", value: "68,489 см" },
      { label: "Дальше этого пиксели не различить", value: "1,09 м" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { diag: 32, ratio: "16:9", lines: 1080 },
    expectPrimary: "0,9732 м",
    expectSecondary: [
      { label: "Комфортное по SMPTE", value: "1,322 м" },
      { label: "Ширина экрана", value: "70,842 см" },
      { label: "Высота экрана", value: "39,848 см" },
      { label: "Дальше этого пиксели не различить", value: "1,269 м" },
    ],
  },
  {
    name: "граница 3",
    inputs: { diag: 14, ratio: "4:3", lines: 480 },
    expectPrimary: "0,3908 м",
    expectSecondary: [
      { label: "Комфортное по SMPTE", value: "0,5308 м" },
      { label: "Ширина экрана", value: "28,448 см" },
      { label: "Высота экрана", value: "21,336 см" },
      { label: "Дальше этого пиксели не различить", value: "1,528 м" },
    ],
  },
  {
    name: "диагональ должна быть больше нуля",
    inputs: { diag: 0, ratio: "16:9", lines: 2160 },
    expectPrimary: "—",
  },
  {
    name: "число строк разрешения должно быть больше нуля",
    inputs: { diag: 55, ratio: "16:9", lines: 0 },
    expectPrimary: "—",
  },
];
