import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из V = (4/3)πr³ и S = 4πr²:
//   r = 3  -> V = 113,0973355…, S = 113,0973355…  (числа совпадают ровно при r = 3)
//   d = 10 -> r = 5, V = 523,5987756…
//   V = 4188,7902048 -> r = ∛(3V/4π) = 10
export const geomSphereReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "по радиусу 3",
    inputs: {"unit": "m", "mode": "radius", "r": 3},
    expectPrimary: "113,1 м³",
    expectSecondary: [{ label: "Площадь поверхности", value: "113,1 м²" }, { label: "Диаметр", value: "6 м" }],
  },
  {
    name: "по диаметру 10",
    inputs: {"unit": "cm", "mode": "diameter", "d": 10},
    expectPrimary: "523,6 см³",
    expectSecondary: [{ label: "Радиус", value: "5 см" }],
  },
  {
    name: "по объёму: ∛(3·4188,79 / 4π) = 10",
    inputs: {"unit": "m", "mode": "volume", "volume": 4188.7902048},
    expectPrimary: "4 188,79 м³",
    expectSecondary: [{ label: "Радиус", value: "10 м" }],
  },
  {
    name: "граница: единичный радиус",
    inputs: {"unit": "m", "mode": "radius", "r": 1},
    expectPrimary: "4,189 м³",
    expectSecondary: [{ label: "Площадь поверхности", value: "12,566 м²" }],
  },
  {
    name: "отрицательный радиус отклоняется",
    inputs: {"unit": "m", "mode": "radius", "r": -1},
    expectPrimary: "—",
  },
];
