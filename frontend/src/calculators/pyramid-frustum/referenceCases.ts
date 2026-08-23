import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const pyramidFrustumReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { a: 10, b: 6, h: 8 },
    expectPrimary: "522,67 см³",
    expectSecondary: [
      { label: "Апофема", value: "8,246 см" },
      { label: "Боковая поверхность", value: "263,88 см²" },
      { label: "Полная поверхность", value: "399,88 см²" },
      { label: "Площади оснований", value: "100 и 36" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { a: 30, b: 12, h: 25 },
    expectPrimary: "11 700 см³",
    expectSecondary: [
      { label: "Апофема", value: "26,571 см" },
      { label: "Боковая поверхность", value: "2 231,94 см²" },
      { label: "Полная поверхность", value: "3 275,94 см²" },
      { label: "Площади оснований", value: "900 и 144" },
    ],
  },
  {
    name: "граница 3",
    inputs: { a: 2, b: 1, h: 1 },
    expectPrimary: "2,333 см³",
    expectSecondary: [
      { label: "Апофема", value: "1,118 см" },
      { label: "Боковая поверхность", value: "6,708 см²" },
      { label: "Полная поверхность", value: "11,708 см²" },
      { label: "Площади оснований", value: "4 и 1" },
    ],
  },
  {
    name: "при равных основаниях это призма, а не усечённая пирамида",
    inputs: { a: 10, b: 10, h: 8 },
    expectPrimary: "—",
  },
  {
    name: "сторона основания должна быть больше нуля",
    inputs: { a: 0, b: 6, h: 8 },
    expectPrimary: "—",
  },
];
