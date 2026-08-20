import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const waveReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "скорость 343 м/с, частота 440 Гц",
    inputs: {"f": 440, "mode": "lambda", "v": 343, "wavelength": 0},
    expectPrimary: "0,7795 м",
    expectSecondary: [{ label: "Скорость", value: "343 м/с" }, { label: "Частота", value: "440 Гц" }, { label: "Длина волны", value: "0,7795 м" }, { label: "Период", value: "0,002273 с" }],
  },
  {
    name: "скорость 1 500 м/с, длина 0,75 м",
    inputs: {"f": 0, "mode": "f", "v": 1500, "wavelength": 0.75},
    expectPrimary: "2 000 Гц",
    expectSecondary: [{ label: "Скорость", value: "1 500 м/с" }, { label: "Частота", value: "2 000 Гц" }, { label: "Длина волны", value: "0,75 м" }, { label: "Период", value: "0,0005 с" }],
  },
  {
    name: "частота 1 Гц и длина 1 м",
    inputs: {"f": 1, "mode": "v", "v": 0, "wavelength": 1},
    expectPrimary: "1 м/с",
    expectSecondary: [{ label: "Скорость", value: "1 м/с" }, { label: "Частота", value: "1 Гц" }, { label: "Длина волны", value: "1 м" }, { label: "Период", value: "1 с" }],
  },
  {
    name: "нулевая частота при поиске длины отклоняется",
    inputs: {"f": 0, "mode": "lambda", "v": 340, "wavelength": 0},
    expectPrimary: "—",
  },
];
