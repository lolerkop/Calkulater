import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const slopeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "подъём 1,2 м на 8 м",
    inputs: {"rise": 1.2, "run": 8},
    expectPrimary: "15,00%",
    expectSecondary: [{ label: "Угол", value: "8,531°" }, { label: "Отношение", value: "0,15" }, { label: "Длина наклона", value: "8,089 м" }],
  },
  {
    name: "подъём 0,15 м на 3 м",
    inputs: {"rise": 0.15, "run": 3},
    expectPrimary: "5,00%",
    expectSecondary: [{ label: "Угол", value: "2,862°" }, { label: "Отношение", value: "0,05" }, { label: "Длина наклона", value: "3,004 м" }],
  },
  {
    name: "горизонталь",
    inputs: {"rise": 0, "run": 5},
    expectPrimary: "0,00%",
    expectSecondary: [{ label: "Угол", value: "0°" }, { label: "Отношение", value: "0" }, { label: "Длина наклона", value: "5 м" }],
  },
  {
    name: "нулевое заложение отклоняется",
    inputs: {"rise": 1, "run": 0},
    expectPrimary: "—",
  },
];
