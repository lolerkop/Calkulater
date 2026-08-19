import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   50 / 25 = 2,00        ·  53 / 11 = 4,8181818… -> 4,82
//   развитие 2,00 × 2,1 м = 4,20 м за оборот педалей
export const bikeGearRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "звёзды 50 и 25 дают отношение 2",
    inputs: {"chainring": 50, "sprocket": 25, "wheelCircumference": 0},
    expectPrimary: "2,00",
  },
  {
    name: "самая тяжёлая передача 53 на 11",
    inputs: {"chainring": 53, "sprocket": 11, "wheelCircumference": 0},
    expectPrimary: "4,82",
  },
  {
    name: "с колесом 2,1 м развитие 4,2 м",
    inputs: {"chainring": 50, "sprocket": 25, "wheelCircumference": 2.1},
    expectPrimary: "2,00",
    expectSecondary: [{ label: "Развитие за оборот", value: "4,20 м" }],
  },
  {
    name: "граница: равные звёзды дают отношение 1",
    inputs: {"chainring": 32, "sprocket": 32, "wheelCircumference": 0},
    expectPrimary: "1,00",
  },
  {
    name: "нулевая задняя звезда отклоняется",
    inputs: {"chainring": 50, "sprocket": 0, "wheelCircumference": 0},
    expectPrimary: "—",
  },
];
