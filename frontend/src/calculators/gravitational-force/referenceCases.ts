import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const gravitationalForceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "две массы по 1 000 кг на расстоянии 2 м",
    inputs: {"m1": 1000, "m2": 1000, "r": 2},
    expectPrimary: "1,668·10^-5 Н",
    expectSecondary: [{ label: "Ускорение первого тела", value: "1,668·10^-8 м/с²" }, { label: "Расстояние", value: "2 м" }],
  },
  {
    name: "масса Земли и 70 кг на радиусе Земли",
    inputs: {"m1": 5.972e+24, "m2": 70, "r": 6371000},
    expectPrimary: "687,37 Н",
    expectSecondary: [{ label: "Ускорение первого тела", value: "1,151·10^-22 м/с²" }, { label: "Расстояние", value: "6 371 000 м" }],
  },
  {
    name: "малые массы на большом расстоянии",
    inputs: {"m1": 1, "m2": 1, "r": 1000},
    expectPrimary: "6,674·10^-17 Н",
    expectSecondary: [{ label: "Ускорение первого тела", value: "6,674·10^-17 м/с²" }, { label: "Расстояние", value: "1 000 м" }],
  },
  {
    name: "нулевое расстояние отклоняется",
    inputs: {"m1": 1, "m2": 1, "r": 0},
    expectPrimary: "—",
  },
];
