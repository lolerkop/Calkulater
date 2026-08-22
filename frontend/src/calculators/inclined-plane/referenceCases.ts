import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const inclinedPlaneReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "ящик 50 кг на склоне 30° с трением 0,2",
    inputs: { m: 50, angle: 30, mu: 0.2 },
    expectPrimary: "245,17 Н",
    expectSecondary: [
      { label: "Сила нормального давления", value: "424,64 Н" },
      { label: "Сила трения", value: "84,928 Н" },
      { label: "Равнодействующая", value: "160,24 Н" },
      { label: "Ускорение", value: "3,205 м/с²" },
    ],
  },
  {
    name: "сто килограммов на 15° без трения",
    inputs: { m: 100, angle: 15, mu: 0 },
    expectPrimary: "253,81 Н",
    expectSecondary: [
      { label: "Сила нормального давления", value: "947,25 Н" },
      { label: "Сила трения", value: "0 Н" },
      { label: "Равнодействующая", value: "253,81 Н" },
      { label: "Ускорение", value: "2,538 м/с²" },
    ],
  },
  {
    name: "горизонтальная плоскость",
    inputs: { m: 50, angle: 0, mu: 0.2 },
    expectPrimary: "0 Н",
    expectSecondary: [
      { label: "Сила нормального давления", value: "490,33 Н" },
      { label: "Сила трения", value: "98,067 Н" },
      { label: "Равнодействующая", value: "-98,067 Н" },
      { label: "Ускорение", value: "-1,961 м/с²" },
    ],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { m: 0, angle: 30, mu: 0.2 },
    expectPrimary: "—",
  },
  {
    name: "угол больше 90 отклоняется",
    inputs: { m: 50, angle: 100, mu: 0.2 },
    expectPrimary: "—",
  },
];
