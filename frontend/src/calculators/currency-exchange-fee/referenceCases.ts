import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   продажа: курс 92,5 · (1 − 0,5 %) = 92,0375; 1000 · 92,0375 = 92 037,50
//   комиссия 92 037,50 · 1,5 % = 1380,5625 -> к получению 90 656,9375
//   покупка: курс 92,5 · (1 + 0,5 %) = 92,9625; 100 000 · 98,5 % = 98 500; /92,9625
export const currencyExchangeFeeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "продажа 1000 по курсу 92,5 со спредом 0,5 % и комиссией 1,5 %",
    inputs: { "direction": "sell", "amount": 1000, "rate": 92.5, "feePct": 1.5, "feeFixed": 0, "spreadPct": 0.5 },
    expectPrimary: "90 656,94 ₽",
    expectSecondary: [{ label: "Курс с учётом спреда", value: "92,0375" }, { label: "По номинальному курсу", value: "92 500,00 ₽" }, { label: "Комиссия", value: "1 380,56 ₽" }, { label: "Доля потерь", value: "1,99%" }],
  },
  {
    name: "покупка валюты на 100 000 по курсу 92,5",
    inputs: { "direction": "buy", "amount": 100000, "rate": 92.5, "feePct": 1.5, "feeFixed": 0, "spreadPct": 0.5 },
    expectPrimary: "1 059,57 ед. валюты",
    expectSecondary: [{ label: "Курс с учётом спреда", value: "92,9625" }, { label: "Доля потерь", value: "1,99%" }],
  },
  {
    name: "граница: без комиссии и спреда — курс номинальный",
    inputs: { "direction": "sell", "amount": 1000, "rate": 92.5, "feePct": 0, "feeFixed": 0, "spreadPct": 0 },
    expectPrimary: "92 500,00 ₽",
    expectSecondary: [{ label: "Полная стоимость обмена", value: "0,00 ₽" }, { label: "Доля потерь", value: "0,00%" }],
  },
  {
    name: "нулевой курс отклоняется",
    inputs: { "direction": "sell", "amount": 1000, "rate": 0, "feePct": 1.5, "feeFixed": 0, "spreadPct": 0.5 },
    expectPrimary: "—",
  },
];
