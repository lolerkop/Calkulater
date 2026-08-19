import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из V = πr²h, S_бок = 2πrh, S_полн = 2πr(r+h):
//   r=3, h=10 -> V = 282,7433388…, бок = 188,4955592…, полн = 245,0442262…
//   r=1, h=1  -> V = 3,1415927…,  полн = 4π = 12,5663706…
export const geomCylinderReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "бочка радиусом 3 и высотой 10",
    inputs: {"unit": "m", "r": 3, "h": 10},
    expectPrimary: "282,74 м³",
    expectSecondary: [{ label: "Боковая поверхность", value: "188,5 м²" }, { label: "Полная поверхность", value: "245,04 м²" }],
  },
  {
    name: "единичный цилиндр",
    inputs: {"unit": "m", "r": 1, "h": 1},
    expectPrimary: "3,142 м³",
    expectSecondary: [{ label: "Полная поверхность", value: "12,566 м²" }],
  },
  {
    name: "низкий цилиндр радиусом 0,5",
    inputs: {"unit": "m", "r": 0.5, "h": 2},
    expectPrimary: "1,571 м³",
    expectSecondary: [{ label: "Площадь основания", value: "0,7854 м²" }],
  },
  {
    name: "граница: широкий и очень низкий",
    inputs: {"unit": "m", "r": 100, "h": 0.001},
    expectPrimary: "31,416 м³",
  },
  {
    name: "нулевая высота отклоняется",
    inputs: {"unit": "m", "r": 3, "h": 0},
    expectPrimary: "—",
  },
];
