import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const thinLensReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { mode: "image", f: 10, do: 30 },
    expectPrimary: "15 см",
    expectSecondary: [
      { label: "Увеличение", value: "-0,5" },
      { label: "Тип изображения", value: "действительное перевёрнутое" },
      { label: "Фокусное расстояние", value: "10 см" },
      { label: "Расстояние до предмета", value: "30 см" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { mode: "image", f: 10, do: 5 },
    expectPrimary: "-10 см",
    expectSecondary: [
      { label: "Увеличение", value: "2" },
      { label: "Тип изображения", value: "мнимое прямое" },
      { label: "Фокусное расстояние", value: "10 см" },
      { label: "Расстояние до предмета", value: "5 см" },
    ],
  },
  {
    name: "граница 3",
    inputs: { mode: "focal", do: 30, di: 15 },
    expectPrimary: "10 см",
    expectSecondary: [
      { label: "Увеличение", value: "-0,5" },
      { label: "Оптическая сила", value: "10 дптр" },
      { label: "Расстояние до предмета", value: "30 см" },
      { label: "Расстояние до изображения", value: "15 см" },
    ],
  },
  {
    name: "предмет в фокусе — изображения нет",
    inputs: { mode: "image", f: 10, do: 10 },
    expectPrimary: "—",
  },
  {
    name: "расстояние до предмета должно быть больше нуля",
    inputs: { mode: "image", f: 10, do: 0 },
    expectPrimary: "—",
  },
];
