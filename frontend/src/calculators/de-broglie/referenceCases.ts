import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const deBroglieReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "электрон при 1000 км/с",
    inputs: { mass27: 0.00091093837, velocityKmS: 1000 },
    expectPrimary: "7,274·10^-10 м",
    expectSecondary: [
      { label: "Импульс", value: "9,109·10^-25 кг·м/с" },
      { label: "Частота", value: "1,375·10^15 Гц" },
    ],
  },
  {
    name: "протон при 10 км/с",
    inputs: { mass27: 1.67262192, velocityKmS: 10 },
    expectPrimary: "3,961·10^-11 м",
    expectSecondary: [
      { label: "Импульс", value: "1,673·10^-23 кг·м/с" },
      { label: "Частота", value: "2,524·10^14 Гц" },
    ],
  },
  {
    name: "единичные масса и скорость",
    inputs: { mass27: 1, velocityKmS: 1 },
    expectPrimary: "6,626·10^-10 м",
    expectSecondary: [
      { label: "Импульс", value: "1,000·10^-24 кг·м/с" },
      { label: "Частота", value: "1,509·10^12 Гц" },
    ],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { mass27: 0, velocityKmS: 1000 },
    expectPrimary: "—",
  },
  {
    name: "нулевая скорость отклоняется",
    inputs: { mass27: 0.00091093837, velocityKmS: 0 },
    expectPrimary: "—",
  },
];
