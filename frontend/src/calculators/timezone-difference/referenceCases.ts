import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   из UTC+3 в UTC−5: разница −8 ч; 14:30 = 870 мин; 870 − 480 = 390 -> 06:30
//   из UTC+3 в UTC+9: +6 ч; 1320 + 360 = 1680 -> 1680 − 1440 = 240 -> 04:00, сдвиг +1
//   UTC+5:30: разница 2,5 ч; 1380 + 150 = 1530 -> 90 -> 01:30, сдвиг +1
export const timezoneDifferenceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "из UTC+3 в UTC−5, 14:30",
    inputs: { "fromOffset": 3, "toOffset": -5, "hour": 14, "minute": 30 },
    expectPrimary: "06:30",
    expectSecondary: [{ label: "Разница", value: "-8 ч" }, { label: "Сдвиг суток", value: "0" }, { label: "Исходное время", value: "14:30" }],
  },
  {
    name: "из UTC+3 в UTC+9, 22:00 — переход на следующие сутки",
    inputs: { "fromOffset": 3, "toOffset": 9, "hour": 22, "minute": 0 },
    expectPrimary: "04:00",
    expectSecondary: [{ label: "Разница", value: "6 ч" }, { label: "Сдвиг суток", value: "1" }],
  },
  {
    name: "граница: получасовое смещение UTC+5:30",
    inputs: { "fromOffset": 3, "toOffset": 5.5, "hour": 23, "minute": 0 },
    expectPrimary: "01:30",
    expectSecondary: [{ label: "Разница", value: "2,5 ч" }, { label: "Сдвиг суток", value: "1" }],
  },
  {
    name: "смещение вне диапазона −12…+14 отклоняется",
    inputs: { "fromOffset": 20, "toOffset": -5, "hour": 14, "minute": 30 },
    expectPrimary: "—",
  },
];
