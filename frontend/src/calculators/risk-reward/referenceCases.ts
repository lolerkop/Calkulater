import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   |250 − 240| = 10 риска против |280 − 250| = 30 прибыли -> отношение 3
//   безубыточная доля 1 / (1 + 3) = 25 %
//   шорт: |1800 − 1860| = 60 против |1650 − 1800| = 150 -> 2,5; доля 1/3,5 = 28,5714 %
export const riskRewardReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "лонг: риск 10 против прибыли 30",
    inputs: { "direction": "long", "entry": 250, "stop": 240, "target": 280, "qty": 100 },
    expectPrimary: "3",
    expectSecondary: [{ label: "Риск на единицу", value: "10,00 ₽" }, { label: "Прибыль на единицу", value: "30,00 ₽" }, { label: "Риск в деньгах", value: "1 000,00 ₽" }, { label: "Безубыточная доля сделок", value: "25,00%" }],
  },
  {
    name: "шорт: стоп выше входа, цель ниже",
    inputs: { "direction": "short", "entry": 1800, "stop": 1860, "target": 1650, "qty": 5 },
    expectPrimary: "2,5",
    expectSecondary: [{ label: "Риск на единицу", value: "60,00 ₽" }, { label: "Прибыль в деньгах", value: "750,00 ₽" }, { label: "Безубыточная доля сделок", value: "28,57%" }],
  },
  {
    name: "граница: риск равен прибыли — отношение 1",
    inputs: { "direction": "long", "entry": 100, "stop": 90, "target": 110, "qty": 10 },
    expectPrimary: "1",
    expectSecondary: [{ label: "Безубыточная доля сделок", value: "50,00%" }],
  },
  {
    name: "стоп, совпадающий с ценой входа, отклоняется",
    inputs: { "direction": "long", "entry": 250, "stop": 250, "target": 280, "qty": 100 },
    expectPrimary: "—",
  },
];
