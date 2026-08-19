import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из V = πr²h/3 и l = √(r²+h²):
//   r=3, h=4 -> l = 5,  V = 37,6991118…, бок = π·3·5 = 47,1238898…
//   r=6, h=8 -> l = 10, V = 301,5928947…
//   r=1, h=1 -> l = √2 = 1,4142136…
export const geomConeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "конус 3-4-5: образующая ровно 5",
    inputs: {"unit": "m", "r": 3, "h": 4},
    expectPrimary: "37,699 м³",
    expectSecondary: [{ label: "Образующая", value: "5 м" }, { label: "Боковая поверхность", value: "47,124 м²" }],
  },
  {
    name: "удвоенный конус 6-8-10",
    inputs: {"unit": "m", "r": 6, "h": 8},
    expectPrimary: "301,59 м³",
    expectSecondary: [{ label: "Образующая", value: "10 м" }],
  },
  {
    name: "единичный конус: образующая √2",
    inputs: {"unit": "m", "r": 1, "h": 1},
    expectPrimary: "1,047 м³",
    expectSecondary: [{ label: "Образующая", value: "1,414 м" }],
  },
  {
    name: "граница: очень узкий и очень высокий",
    inputs: {"unit": "m", "r": 0.001, "h": 1000},
    expectPrimary: "0,001047 м³",
  },
  {
    name: "нулевой радиус отклоняется",
    inputs: {"unit": "m", "r": 0, "h": 5},
    expectPrimary: "—",
  },
];
