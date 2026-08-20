import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   лонг: (34 500 − 30 000) × 0,5 = 2250; комиссия (15 000 + 17 250) × 0,1 % = 32,25
//   чистыми 2217,75; вложено 15 000; доходность 14,785 % -> 14,79 %
//   шорт с плечом 2: (2400 − 2100) × 3 = 900; комиссия (7200 + 6300) × 0,075 % = 10,125
//   чистыми 889,875 -> 889,88; вложено 7200 / 2 = 3600; доходность 24,7188 % -> 24,72 %
//   выход по цене входа: 0 − (15 000 + 15 000) × 0,1 % = −30
export const cryptoPnlReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "лонг половины монеты с 30 000 до 34 500",
    inputs: { direction: 'long', entry: 30000, exit: 34500, qty: 0.5, feePct: 0.1, leverage: 1 },
    expectPrimary: "2 217,75 ₽",
    expectSecondary: [
      { label: "Результат до комиссий", value: "2 250,00 ₽" },
      { label: "Комиссии", value: "32,25 ₽" },
      { label: "Вложено", value: "15 000,00 ₽" },
      { label: "Доходность позиции", value: "14,79%" },
    ],
  },
  {
    name: "шорт с плечом 2 при падении с 2400 до 2100",
    inputs: { direction: 'short', entry: 2400, exit: 2100, qty: 3, feePct: 0.075, leverage: 2 },
    expectPrimary: "889,88 ₽",
    expectSecondary: [
      { label: "Результат до комиссий", value: "900,00 ₽" },
      { label: "Вложено", value: "3 600,00 ₽" },
      { label: "Доходность позиции", value: "24,72%" },
    ],
  },
  {
    name: "граница: выход по цене входа — убыток равен комиссиям",
    inputs: { direction: 'long', entry: 30000, exit: 30000, qty: 0.5, feePct: 0.1, leverage: 1 },
    expectPrimary: "-30,00 ₽",
    expectSecondary: [
      { label: "Результат до комиссий", value: "0,00 ₽" },
      { label: "Изменение цены", value: "0,00%" },
    ],
  },
  {
    name: "нулевая цена входа отклоняется",
    inputs: { direction: 'long', entry: 0, exit: 34500, qty: 0.5, feePct: 0.1, leverage: 1 },
    expectPrimary: "—",
  },
];
