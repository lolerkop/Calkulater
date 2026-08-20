import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const convertFuelEconomyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "8 л/100 км в mpg США",
    inputs: { "value": 8, "fromUnit": "l100km", "toUnit": "mpgus" },
    expectPrimary: "29,402",
    expectSecondary: [{ label: "В л/100 км", value: "8" }, { label: "В км/л", value: "12,5" }, { label: "В mpg США", value: "29,402" }, { label: "В mpg Великобритании", value: "35,31" }],
  },
  {
    name: "35 mpg США в л/100 км",
    inputs: { "value": 35, "fromUnit": "mpgus", "toUnit": "l100km" },
    expectPrimary: "6,72",
    expectSecondary: [{ label: "В л/100 км", value: "6,72" }, { label: "В км/л", value: "14,88" }, { label: "В mpg США", value: "35" }, { label: "В mpg Великобритании", value: "42,033" }],
  },
  {
    name: "из л/100 км в л/100 км — без изменений",
    inputs: { "value": 6.5, "fromUnit": "l100km", "toUnit": "l100km" },
    expectPrimary: "6,5",
    expectSecondary: [{ label: "В л/100 км", value: "6,5" }, { label: "В км/л", value: "15,385" }, { label: "В mpg США", value: "36,187" }, { label: "В mpg Великобритании", value: "43,459" }],
  },
  {
    name: "нулевое значение отклоняется",
    inputs: { "value": 0, "fromUnit": "l100km", "toUnit": "kml" },
    expectPrimary: "—",
  },
];
