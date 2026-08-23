import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const pipeWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { d: 108, wall: 4, len: 6, rho: 7850 },
    expectPrimary: "61,555 кг",
    expectSecondary: [
      { label: "Масса погонного метра", value: "10,259 кг/м" },
      { label: "Внутренний диаметр", value: "100 мм" },
      { label: "Площадь сечения металла", value: "13,069 см²" },
      { label: "Объём внутренней полости", value: "47,124 л" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { d: 32, wall: 3.2, len: 12, rho: 950 },
    expectPrimary: "3,301 кг",
    expectSecondary: [
      { label: "Масса погонного метра", value: "0,2751 кг/м" },
      { label: "Внутренний диаметр", value: "25,6 мм" },
      { label: "Площадь сечения металла", value: "2,895 см²" },
      { label: "Объём внутренней полости", value: "6,177 л" },
    ],
  },
  {
    name: "граница 3",
    inputs: { d: 20, wall: 2, len: 1, rho: 7850 },
    expectPrimary: "0,8878 кг",
    expectSecondary: [
      { label: "Масса погонного метра", value: "0,8878 кг/м" },
      { label: "Внутренний диаметр", value: "16 мм" },
      { label: "Площадь сечения металла", value: "1,131 см²" },
      { label: "Объём внутренней полости", value: "0,2011 л" },
    ],
  },
  {
    name: "удвоенная стенка не может быть больше наружного диаметра или равна ему",
    inputs: { d: 20, wall: 10, len: 1, rho: 7850 },
    expectPrimary: "—",
  },
  {
    name: "наружный диаметр должен быть больше нуля",
    inputs: { d: 0, wall: 4, len: 6, rho: 7850 },
    expectPrimary: "—",
  },
];
