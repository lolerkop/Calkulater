import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const rmsVoltageReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { mode: "peak", value: 311, wave: "sine" },
    expectPrimary: "219,91 В",
    expectSecondary: [
      { label: "Амплитудное значение", value: "311 В" },
      { label: "Размах", value: "622 В" },
      { label: "Коэффициент амплитуды", value: "1,414" },
      { label: "Среднее по модулю", value: "197,99 В" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { mode: "pp", value: 10, wave: "square" },
    expectPrimary: "5 В",
    expectSecondary: [
      { label: "Амплитудное значение", value: "5 В" },
      { label: "Размах", value: "10 В" },
      { label: "Коэффициент амплитуды", value: "1" },
      { label: "Среднее по модулю", value: "5 В" },
    ],
  },
  {
    name: "граница 3",
    inputs: { mode: "rms", value: 12, wave: "triangle" },
    expectPrimary: "12 В",
    expectSecondary: [
      { label: "Амплитудное значение", value: "20,785 В" },
      { label: "Размах", value: "41,569 В" },
      { label: "Коэффициент амплитуды", value: "1,732" },
      { label: "Среднее по модулю", value: "10,392 В" },
    ],
  },
  {
    name: "значение напряжения должно быть больше нуля",
    inputs: { mode: "peak", value: 0, wave: "sine" },
    expectPrimary: "—",
  },
  {
    name: "поле не принимает отрицательные значения",
    inputs: { mode: "peak", value: -5, wave: "sine" },
    expectPrimary: "—",
  },
];
