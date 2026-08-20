import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const raftersReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пролёт 8 м, подъём 2,4 м, свес 0,5 м",
    inputs: {"overhang": 0.5, "rise": 2.4, "span": 8},
    expectPrimary: "5,165 м",
    expectSecondary: [{ label: "Угол наклона", value: "30,964°" }, { label: "Заложение", value: "4 м" }, { label: "Уклон", value: "60,00%" }],
  },
  {
    name: "пролёт 6 м, подъём 1,5 м, свес 0,4 м",
    inputs: {"overhang": 0.4, "rise": 1.5, "span": 6},
    expectPrimary: "3,754 м",
    expectSecondary: [{ label: "Угол наклона", value: "26,565°" }, { label: "Заложение", value: "3 м" }, { label: "Уклон", value: "50,00%" }],
  },
  {
    name: "без свеса",
    inputs: {"overhang": 0, "rise": 3, "span": 10},
    expectPrimary: "5,831 м",
    expectSecondary: [{ label: "Угол наклона", value: "30,964°" }, { label: "Заложение", value: "5 м" }, { label: "Уклон", value: "60,00%" }],
  },
  {
    name: "нулевой пролёт отклоняется",
    inputs: {"overhang": 0, "rise": 2, "span": 0},
    expectPrimary: "—",
  },
];
