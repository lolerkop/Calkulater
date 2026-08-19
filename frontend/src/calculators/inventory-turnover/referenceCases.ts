import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   600 000 / 150 000 = 4,00 раза, 365 / 4 = 91,25 -> 91,3 дней (округление от нуля)
//   250 000 / 40 000  = 6,25 раза, 365 / 6,25 = 58,4 дней
//   (30 000 + 20 000) / 2 = 25 000 -> 100 000 / 25 000 = 4,00 раза
export const inventoryTurnoverReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "600 000 при среднем запасе 150 000",
    inputs: {"cogs": 600000, "mode": "direct", "avgInventory": 150000},
    expectPrimary: "4,00 раз",
    expectSecondary: [{ label: "Срок хранения", value: "91,3 дней" }],
  },
  {
    name: "250 000 при среднем запасе 40 000",
    inputs: {"cogs": 250000, "mode": "direct", "avgInventory": 40000},
    expectPrimary: "6,25 раз",
    expectSecondary: [{ label: "Срок хранения", value: "58,4 дней" }],
  },
  {
    name: "средний запас по остаткам: (30 000 + 20 000) / 2 = 25 000",
    inputs: {"cogs": 100000, "mode": "beginEnd", "beginInventory": 30000, "endInventory": 20000},
    expectPrimary: "4,00 раз",
    expectSecondary: [{ label: "Средний запас", value: "25 000,00 ₽" }],
  },
  {
    name: "граница: один оборот за год",
    inputs: {"cogs": 1, "mode": "direct", "avgInventory": 1},
    expectPrimary: "1,00 раз",
    expectSecondary: [{ label: "Срок хранения", value: "365,0 дней" }],
  },
  {
    name: "нулевой средний запас отклоняется",
    inputs: {"cogs": 100000, "mode": "direct", "avgInventory": 0},
    expectPrimary: "—",
  },
];
