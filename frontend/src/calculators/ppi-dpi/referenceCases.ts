import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из PPI = √(w² + h²) / диагональ:
//   1920×1080 / 15,6 -> √4 852 800 = 2202,9072 -> 141,2120 ppi
//   2560×1440 / 27   -> 2937,2096 -> 108,7855 ppi
//   3840×2160 / 32   -> 4406,1814 -> 137,6932 ppi
export const ppiDpiReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "ноутбук 1920×1080 на 15,6 дюйма",
    inputs: {"w": 1920, "h": 1080, "diagonal": 15.6},
    expectPrimary: "141,21 ppi",
    expectSecondary: [{ label: "Всего пикселей", value: "2,07 Мпикс" }],
  },
  {
    name: "монитор 2560×1440 на 27 дюймов",
    inputs: {"w": 2560, "h": 1440, "diagonal": 27},
    expectPrimary: "108,79 ppi",
  },
  {
    name: "телевизор 3840×2160 на 32 дюйма",
    inputs: {"w": 3840, "h": 2160, "diagonal": 32},
    expectPrimary: "137,68 ppi",
  },
  {
    name: "граница: крошечный экран даёт огромную плотность",
    inputs: {"w": 1, "h": 1, "diagonal": 0.01},
    expectPrimary: "141,42 ppi",
  },
  {
    name: "нулевая диагональ отклоняется",
    inputs: {"w": 1920, "h": 1080, "diagonal": 0},
    expectPrimary: "—",
  },
];
