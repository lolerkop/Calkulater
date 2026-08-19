import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   1 000 000 × 250 = 250 000 000
//   16 000 000 × 0,5 = 8 000 000
//   250 000 000 / 1 000 000 = 250
export const marketCapReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "миллион акций по 250",
    inputs: {"mode": "cap", "shares": 1000000, "price": 250},
    expectPrimary: "250 000 000,00 ₽",
    expectSecondary: [{ label: "Цена одной акции", value: "250,00 ₽" }],
  },
  {
    name: "копеечная акция: 16 млн по 0,5",
    inputs: {"mode": "cap", "shares": 16000000, "price": 0.5},
    expectPrimary: "8 000 000,00 ₽",
  },
  {
    name: "цена по капитализации: 250 млн на миллион акций",
    inputs: {"mode": "price", "shares": 1000000, "cap": 250000000},
    expectPrimary: "250,00 ₽",
    expectSecondary: [{ label: "Капитализация", value: "250 000 000,00 ₽" }],
  },
  {
    name: "граница: одна акция за рубль",
    inputs: {"mode": "cap", "shares": 1, "price": 1},
    expectPrimary: "1,00 ₽",
  },
  {
    name: "нулевое число акций отклоняется",
    inputs: {"mode": "cap", "shares": 0, "price": 250},
    expectPrimary: "—",
  },
];
