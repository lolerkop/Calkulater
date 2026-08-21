import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   18 × 150 / 0,8 = 3375 лм; ламп ⌈3375/800⌉ = 5
export const lightingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "гостиная восемнадцать метров",
    inputs: { "area": 18, "lampLumens": 800, "lossFactor": 0.8, "norm": 150 },
    expectPrimary: "3 375 лм",
    expectSecondary: [
      { label: "Ламп", value: "5" },
      { label: "Люмен на квадратный метр", value: "187,5" },
      { label: "Норма освещённости", value: "150 лк" },
      { label: "Установленный поток", value: "4 000 лм" },
    ],
  },
  {
    name: "рабочая комната с высокой нормой",
    inputs: { "area": 12, "lampLumens": 1200, "lossFactor": 0.9, "norm": 300 },
    expectPrimary: "4 000 лм",
    expectSecondary: [
      { label: "Ламп", value: "4" },
      { label: "Люмен на квадратный метр", value: "333,33" },
      { label: "Норма освещённости", value: "300 лк" },
      { label: "Установленный поток", value: "4 800 лм" },
    ],
  },
  {
    name: "граница: один метр без запаса",
    inputs: { "area": 1, "lampLumens": 1000, "lossFactor": 1.0, "norm": 50 },
    expectPrimary: "50 лм",
    expectSecondary: [
      { label: "Ламп", value: "1" },
      { label: "Люмен на квадратный метр", value: "50" },
      { label: "Норма освещённости", value: "50 лк" },
      { label: "Установленный поток", value: "1 000 лм" },
    ],
  },
  {
    name: "нулевая площадь отклоняется",
    inputs: { "area": 0, "lampLumens": 800, "lossFactor": 0.8, "norm": 150 },
    expectPrimary: "—",
  },
  {
    name: "коэффициент запаса вне диапазона отклоняется",
    inputs: { "area": 18, "lampLumens": 800, "lossFactor": 0.2, "norm": 150 },
    expectPrimary: "—",
  },
];
