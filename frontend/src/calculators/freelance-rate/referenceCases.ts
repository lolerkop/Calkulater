import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   оплачиваемых часов 21 × 6 × 70 % = 88,2
//   выставить (150 000 + 15 000) / 0,94 = 175 531,914893…  -> 175 531,91
//   ставка 175 531,914893… / 88,2 = 1990,157765…            -> 1990,16
//   20 × 8 × 55 % = 88; (300 000 + 40 000) / 0,85 = 400 000; 400 000 / 88 = 4545,4545…
//   граница: 21 × 6 × 100 % = 126; 150 000 / 126 = 1190,476190…
export const freelanceRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "цель 150 000 при 70 процентах оплачиваемых часов",
    inputs: { targetIncome: 150000, workDays: 21, hoursPerDay: 6, billablePct: 70, expenses: 15000, taxPct: 6 },
    expectPrimary: "1 990,16 ₽",
    expectSecondary: [
      { label: "Оплачиваемых часов", value: "88,2 ч" },
      { label: "Нужно выставить счетов", value: "175 531,91 ₽" },
      { label: "Расходы на работу", value: "15 000,00 ₽" },
      { label: "Налог", value: "10 531,91 ₽" },
    ],
  },
  {
    name: "цель 300 000 при 55 процентах загрузки и налоге 15 процентов",
    inputs: { targetIncome: 300000, workDays: 20, hoursPerDay: 8, billablePct: 55, expenses: 40000, taxPct: 15 },
    expectPrimary: "4 545,45 ₽",
    expectSecondary: [
      { label: "Оплачиваемых часов", value: "88 ч" },
      { label: "Нужно выставить счетов", value: "400 000,00 ₽" },
    ],
  },
  {
    name: "граница: все часы оплачиваемые, без расходов и налога",
    inputs: { targetIncome: 150000, workDays: 21, hoursPerDay: 6, billablePct: 100, expenses: 0, taxPct: 0 },
    expectPrimary: "1 190,48 ₽",
    expectSecondary: [{ label: "Оплачиваемых часов", value: "126 ч" }],
  },
  {
    name: "ставка налога 100 процентов отклоняется",
    inputs: { targetIncome: 150000, workDays: 21, hoursPerDay: 6, billablePct: 70, expenses: 15000, taxPct: 100 },
    expectPrimary: "—",
  },
];
