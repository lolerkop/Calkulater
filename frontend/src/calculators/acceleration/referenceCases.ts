import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const accelerationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "с 0 до 27,8 м/с за 8,4 с",
    inputs: {"mode": "a", "t": 8.4, "v": 27.8, "v0": 0},
    expectPrimary: "3,31 м/с²",
    expectSecondary: [{ label: "Изменение скорости", value: "27,8 м/с" }, { label: "Пройденный путь", value: "116,76 м" }, { label: "Время", value: "8,4 с" }],
  },
  {
    name: "торможение с 25 до 5 м/с за 4 с",
    inputs: {"mode": "a", "t": 4, "v": 5, "v0": 25},
    expectPrimary: "-5 м/с²",
    expectSecondary: [{ label: "Изменение скорости", value: "-20 м/с" }, { label: "Пройденный путь", value: "60 м" }, { label: "Время", value: "4 с" }],
  },
  {
    name: "скорость не меняется",
    inputs: {"mode": "a", "t": 3, "v": 15, "v0": 15},
    expectPrimary: "0 м/с²",
    expectSecondary: [{ label: "Изменение скорости", value: "0 м/с" }, { label: "Пройденный путь", value: "45 м" }, { label: "Время", value: "3 с" }],
  },
  {
    name: "нулевое время отклоняется",
    inputs: {"mode": "a", "t": 0, "v": 10, "v0": 0},
    expectPrimary: "—",
  },
];
