import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const momentOfInertiaReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "диск 2 кг радиусом 15 см",
    inputs: { shape: "disk", m: 2, r: 0.15 },
    expectPrimary: "0,0225 кг·м²",
    expectSecondary: [
      { label: "Масса", value: "2 кг" },
      { label: "Размер", value: "0,15 м" },
      { label: "Радиус инерции", value: "0,1061 м" },
    ],
  },
  {
    name: "сплошной шар 5 кг радиусом 20 см",
    inputs: { shape: "sphere-solid", m: 5, r: 0.2 },
    expectPrimary: "0,08 кг·м²",
    expectSecondary: [
      { label: "Масса", value: "5 кг" },
      { label: "Размер", value: "0,2 м" },
      { label: "Радиус инерции", value: "0,1265 м" },
    ],
  },
  {
    name: "кольцо единичной массы и радиуса",
    inputs: { shape: "ring", m: 1, r: 1 },
    expectPrimary: "1 кг·м²",
    expectSecondary: [
      { label: "Масса", value: "1 кг" },
      { label: "Размер", value: "1 м" },
      { label: "Радиус инерции", value: "1 м" },
    ],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { shape: "disk", m: 0, r: 0.15 },
    expectPrimary: "—",
  },
  {
    name: "нулевой размер отклоняется",
    inputs: { shape: "disk", m: 2, r: 0 },
    expectPrimary: "—",
  },
];
