import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const sleepTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "лечь в 23:00, 5 циклов, засыпание 15 минут",
    inputs: {"cycles": 5, "fallAsleep": 15, "hour": 23, "minute": 0, "mode": "bedtime"},
    expectPrimary: "06:45",
    expectSecondary: [{ label: "Всего в постели", value: "465 мин" }, { label: "Чистый сон", value: "450 мин" }, { label: "Циклов", value: "5" }],
  },
  {
    name: "встать в 7:30, 6 циклов, засыпание 20 минут",
    inputs: {"cycles": 6, "fallAsleep": 20, "hour": 7, "minute": 30, "mode": "wake"},
    expectPrimary: "22:10",
    expectSecondary: [{ label: "Всего в постели", value: "560 мин" }, { label: "Чистый сон", value: "540 мин" }, { label: "Циклов", value: "6" }],
  },
  {
    name: "один цикл без времени на засыпание",
    inputs: {"cycles": 1, "fallAsleep": 0, "hour": 1, "minute": 0, "mode": "bedtime"},
    expectPrimary: "02:30",
    expectSecondary: [{ label: "Всего в постели", value: "90 мин" }, { label: "Чистый сон", value: "90 мин" }, { label: "Циклов", value: "1" }],
  },
  {
    name: "ноль циклов отклоняется",
    inputs: {"cycles": 0, "fallAsleep": 15, "hour": 23, "minute": 0, "mode": "bedtime"},
    expectPrimary: "—",
  },
];
