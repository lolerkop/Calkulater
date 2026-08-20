import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const centripetalForceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "масса 1 200 кг, скорость 15 м/с, радиус 40 м",
    inputs: {"m": 1200, "r": 40, "v": 15},
    expectPrimary: "6 750 Н",
    expectSecondary: [{ label: "Центростремительное ускорение", value: "5,625 м/с²" }, { label: "Угловая скорость", value: "0,375 рад/с" }, { label: "Период обращения", value: "16,755 с" }],
  },
  {
    name: "масса 0,5 кг, скорость 6 м/с, радиус 1,2 м",
    inputs: {"m": 0.5, "r": 1.2, "v": 6},
    expectPrimary: "15 Н",
    expectSecondary: [{ label: "Центростремительное ускорение", value: "30 м/с²" }, { label: "Угловая скорость", value: "5 рад/с" }, { label: "Период обращения", value: "1,257 с" }],
  },
  {
    name: "нулевая скорость — нулевая сила",
    inputs: {"m": 2, "r": 5, "v": 0},
    expectPrimary: "0 Н",
    expectSecondary: [{ label: "Центростремительное ускорение", value: "0 м/с²" }, { label: "Угловая скорость", value: "0 рад/с" }],
  },
  {
    name: "нулевой радиус отклоняется",
    inputs: {"m": 1, "r": 0, "v": 1},
    expectPrimary: "—",
  },
];
