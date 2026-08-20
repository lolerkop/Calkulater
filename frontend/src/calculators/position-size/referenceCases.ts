import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   риск 100 000 × 1 % = 1000; на единицу |250 − 240| = 10; объём 1000 / 10 = 100
//   стоимость 100 × 250 = 25 000; доля депозита 25 %
//   500 000 × 2 % = 10 000; |1250 − 1190| = 60; 10 000 / 60 = 166,666…
//   стоимость 166,666… × 1250 = 208 333,33; доля 41,6667 %
//   стоп в один сотый пункт: 1000 / 0,01 = 100 000 единиц, стоимость 25 000 000
export const positionSizeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "риск один процент от 100 000 при стопе в десять пунктов",
    inputs: { deposit: 100000, riskPct: 1, entry: 250, stop: 240 },
    expectPrimary: "100 шт",
    expectSecondary: [
      { label: "Целых единиц", value: "100 шт" },
      { label: "Сумма риска", value: "1 000,00 ₽" },
      { label: "Стоимость позиции", value: "25 000,00 ₽" },
      { label: "Доля депозита", value: "25,00%" },
    ],
  },
  {
    name: "риск два процента от 500 000 при стопе в шестьдесят пунктов",
    inputs: { deposit: 500000, riskPct: 2, entry: 1250, stop: 1190 },
    expectPrimary: "166,67 шт",
    expectSecondary: [
      { label: "Целых единиц", value: "166 шт" },
      { label: "Сумма риска", value: "10 000,00 ₽" },
      { label: "Доля депозита", value: "41,67%" },
    ],
  },
  {
    name: "граница: стоп в один сотый пункт даёт объём дороже депозита",
    inputs: { deposit: 100000, riskPct: 1, entry: 250, stop: 249.99 },
    expectPrimary: "100 000 шт",
    expectSecondary: [
      { label: "Целых единиц", value: "100 000 шт" },
      { label: "Доля депозита", value: "25 000,00%" },
    ],
  },
  {
    name: "стоп, совпадающий с ценой входа, отклоняется",
    inputs: { deposit: 100000, riskPct: 1, entry: 250, stop: 250 },
    expectPrimary: "—",
  },
];
