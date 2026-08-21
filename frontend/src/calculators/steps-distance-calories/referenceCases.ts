import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   175 × 0,415 = 72,625 см; 10 000 шагов = 7,2625 км -> 7,263
//   калории 0,53 × 70 × 7,2625 = 269,4 -> 269
export const stepsDistanceCaloriesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "десять тысяч шагов по росту",
    inputs: { "height": 175, "kcalPerKgKm": 0.53, "mode": "height", "steps": 10000, "stride": 0, "weight": 70 },
    expectPrimary: "7,263 км",
    expectSecondary: [
      { label: "Калории", value: "269 ккал" },
      { label: "Длина шага", value: "72,625 см" },
      { label: "Шагов на километр", value: "1 377" },
    ],
  },
  {
    name: "восемь тысяч шагов при измеренном шаге",
    inputs: { "height": 175, "kcalPerKgKm": 0.53, "mode": "stride", "steps": 8000, "stride": 70, "weight": 85 },
    expectPrimary: "5,6 км",
    expectSecondary: [
      { label: "Калории", value: "252 ккал" },
      { label: "Длина шага", value: "70 см" },
      { label: "Шагов на километр", value: "1 429" },
    ],
  },
  {
    name: "граница: ноль шагов",
    inputs: { "height": 175, "kcalPerKgKm": 0.53, "mode": "height", "steps": 0, "stride": 0, "weight": 70 },
    expectPrimary: "0 км",
    expectSecondary: [
      { label: "Калории", value: "0 ккал" },
      { label: "Длина шага", value: "72,625 см" },
      { label: "Шагов на километр", value: "1 377" },
    ],
  },
  {
    name: "нулевая длина шага отклоняется",
    inputs: { "height": 175, "kcalPerKgKm": 0.53, "mode": "stride", "steps": 8000, "stride": 0, "weight": 70 },
    expectPrimary: "—",
  },
  {
    name: "рост вне диапазона отклоняется",
    inputs: { "height": 115, "kcalPerKgKm": 0.53, "mode": "height", "steps": 8000, "stride": 0, "weight": 70 },
    expectPrimary: "—",
  },
];
