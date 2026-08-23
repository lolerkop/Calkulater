import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const pictureFrameMatReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "фотография 20×30 с полем 5 см",
    inputs: { photoWidth: 20, photoHeight: 30, border: 5, bottomExtra: 1 },
    expectPrimary: "30×41 см",
    expectSecondary: [
      { label: "Нижнее поле", value: "6 см" },
      { label: "Верх и бока", value: "5 см" },
      { label: "Площадь паспарту", value: "630 см²" },
      { label: "Соотношение сторон рамы", value: "0,7317" },
    ],
  },
  {
    name: "квадрат 30×30 с полем 8 см без утяжеления",
    inputs: { photoWidth: 30, photoHeight: 30, border: 8, bottomExtra: 0 },
    expectPrimary: "46×46 см",
    expectSecondary: [
      { label: "Нижнее поле", value: "8 см" },
      { label: "Верх и бока", value: "8 см" },
      { label: "Площадь паспарту", value: "1 216 см²" },
      { label: "Соотношение сторон рамы", value: "1" },
    ],
  },
  {
    name: "граница: поле в один миллиметр",
    inputs: { photoWidth: 10, photoHeight: 15, border: 0.1, bottomExtra: 0 },
    expectPrimary: "10,2×15,2 см",
    expectSecondary: [
      { label: "Нижнее поле", value: "0,1 см" },
      { label: "Верх и бока", value: "0,1 см" },
      { label: "Площадь паспарту", value: "5,04 см²" },
      { label: "Соотношение сторон рамы", value: "0,6711" },
    ],
  },
  {
    name: "нулевое поле отклоняется",
    inputs: { photoWidth: 20, photoHeight: 30, border: 0, bottomExtra: 1 },
    expectPrimary: "—",
  },
  {
    name: "нулевая сторона фотографии отклоняется",
    inputs: { photoWidth: 0, photoHeight: 30, border: 5, bottomExtra: 1 },
    expectPrimary: "—",
  },
];
