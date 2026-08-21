import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   (16/0,15 + 4/0,1) × 1,1 = (106,67 + 40) × 1,1 = 161,33 м, петель ⌈161,33/90⌉ = 2
export const underfloorHeatingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "двадцать метров с краевой зоной",
    inputs: { "area": 20, "edgeStep": 0.1, "edgeZone": 4, "loopMax": 90, "step": 0.15, "waste": 10 },
    expectPrimary: "161,33 м",
    expectSecondary: [
      { label: "Петель", value: "2" },
      { label: "На петлю", value: "80,667 м" },
      { label: "Основная зона", value: "16 м²" },
      { label: "Краевая зона", value: "4 м²" },
    ],
  },
  {
    name: "сорок пять метров без краевой зоны",
    inputs: { "area": 45, "edgeStep": 0.1, "edgeZone": 0, "loopMax": 100, "step": 0.2, "waste": 5 },
    expectPrimary: "236,25 м",
    expectSecondary: [
      { label: "Петель", value: "3" },
      { label: "На петлю", value: "78,75 м" },
      { label: "Основная зона", value: "45 м²" },
      { label: "Краевая зона", value: "0 м²" },
    ],
  },
  {
    name: "граница: маленькая площадь в одну петлю",
    inputs: { "area": 5, "edgeStep": 0.1, "edgeZone": 0, "loopMax": 90, "step": 0.3, "waste": 0 },
    expectPrimary: "16,667 м",
    expectSecondary: [
      { label: "Петель", value: "1" },
      { label: "На петлю", value: "16,667 м" },
      { label: "Основная зона", value: "5 м²" },
      { label: "Краевая зона", value: "0 м²" },
    ],
  },
  {
    name: "нулевой шаг отклоняется",
    inputs: { "area": 20, "edgeStep": 0.1, "edgeZone": 0, "loopMax": 90, "step": 0, "waste": 10 },
    expectPrimary: "—",
  },
  {
    name: "краевая зона во всю площадь отклоняется",
    inputs: { "area": 20, "edgeStep": 0.1, "edgeZone": 20, "loopMax": 90, "step": 0.15, "waste": 10 },
    expectPrimary: "—",
  },
];
