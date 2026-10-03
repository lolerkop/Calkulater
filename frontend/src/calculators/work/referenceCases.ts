import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из W = F · s · cos θ:
//   10 · 5 · cos 0°  = 50 Дж
//   10 · 5 · cos 60° = 50 · 0,5 = 25 Дж
//   100 / (20 · 1)   = 5 м
//   cos 90° = 0 -> работа ровно ноль (а не 3·10⁻¹⁵ от плавающей арифметики)
export const workReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сила вдоль движения: 10 · 5 = 50",
    inputs: {"mode": "W", "F": 10, "s": 5, "angleDeg": 0},
    expectPrimary: "50 Дж",
    expectSecondary: [{ label: "Косинус угла", value: "1" }],
  },
  {
    name: "под углом 60°: половина работы",
    inputs: {"mode": "W", "F": 10, "s": 5, "angleDeg": 60},
    expectPrimary: "25 Дж",
    expectSecondary: [{ label: "Косинус угла", value: "0,5" }],
  },
  {
    name: "перемещение по работе и силе: 100 / 20 = 5",
    inputs: {"mode": "s", "W": 100, "F": 20, "angleDeg": 0},
    expectPrimary: "5 м",
  },
  {
    name: "граница: при 90° работа ровно ноль",
    inputs: {"mode": "W", "F": 10, "s": 5, "angleDeg": 90},
    expectPrimary: "0 Дж",
    expectSecondary: [{ label: "Косинус угла", value: "0" }],
  },
  {
    name: "нулевая сила при поиске перемещения отклоняется",
    inputs: {"mode": "s", "W": 100, "F": 0, "angleDeg": 0},
    expectPrimary: "—",
  },

  // Wave 4: fixed expectations derived analytically from the stated model.
  {
  "name": "обратный режим отрицательной работы−50Дж при180градусах даёт5м",
  "inputs": {
    "mode": "s",
    "F": 10,
    "W": -50,
    "angleDeg": 180
  },
  "expectPrimary": "5 м"
},
  {
  "name": "ошибка: положительная работа противоречит углу180градусов",
  "inputs": {
    "mode": "s",
    "F": 10,
    "W": 50,
    "angleDeg": 180
  },
  "expectPrimary": "—"
},
  {
  "name": "нулевая сила совершает нулевую работу при заданном перемещении",
  "inputs": {
    "mode": "W",
    "F": 0,
    "s": 5,
    "angleDeg": 0
  },
  "expectPrimary": "0 Дж"
},
];
