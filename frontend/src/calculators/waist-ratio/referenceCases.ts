import type { CalculatorReferenceCase } from '../../lib/platform/types';

// NICE adult BMI<35 central-adiposity screening bands.
// Ratios are classified before rounding: 79.9999/160 = 0.499999375, despite display 0.5.
// 0.4 ≤ r < 0.5, 0.5 ≤ r < 0.6, r ≥ 0.6; categories do not diagnose overall health.
export const waistRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "84 см / 178 см",
    "inputs": {
      "height": 178,
      "hip": 100,
      "waist": 84
    },
    "expectPrimary": "0,4719",
    "expectSecondary": [
      {
        "label": "Отношение талии к бёдрам",
        "value": "0,84"
      },
      {
        "label": "Категория",
        "value": "центральное жироотложение: не повышено (0,4 ≤ r < 0,5)"
      }
    ]
  },
  {
    "name": "повышенное центральное жироотложение",
    "inputs": {
      "height": 170,
      "hip": 98,
      "waist": 95
    },
    "expectPrimary": "0,5588",
    "expectSecondary": [
      {
        "label": "Отношение талии к бёдрам",
        "value": "0,9694"
      },
      {
        "label": "Категория",
        "value": "центральное жироотложение: повышено (0,5 ≤ r < 0,6)"
      }
    ]
  },
  {
    "name": "ровно половина роста",
    "inputs": {
      "height": 178,
      "hip": 100,
      "waist": 89
    },
    "expectPrimary": "0,5",
    "expectSecondary": [
      {
        "label": "Категория",
        "value": "центральное жироотложение: повышено (0,5 ≤ r < 0,6)"
      }
    ]
  },
  {
    "name": "округление до границы не меняет категорию",
    "inputs": {
      "height": 160,
      "hip": 100,
      "waist": 79.9999
    },
    "expectPrimary": "0,5",
    "expectSecondary": [
      {
        "label": "Категория",
        "value": "центральное жироотложение: не повышено (0,4 ≤ r < 0,5)"
      }
    ]
  },
  {
    "name": "нижняя граница 0,4 включена",
    "inputs": {
      "height": 160,
      "hip": 100,
      "waist": 64
    },
    "expectPrimary": "0,4",
    "expectSecondary": [
      {
        "label": "Категория",
        "value": "центральное жироотложение: не повышено (0,4 ≤ r < 0,5)"
      }
    ]
  },
  {
    "name": "0,6 входит в высокий диапазон",
    "inputs": {
      "height": 160,
      "hip": 100,
      "waist": 96
    },
    "expectPrimary": "0,6",
    "expectSecondary": [
      {
        "label": "Категория",
        "value": "центральное жироотложение: высокое (r ≥ 0,6)"
      }
    ]
  },
  {
    "name": "нулевая талия отклоняется",
    "inputs": {
      "height": 178,
      "hip": 100,
      "waist": 0
    },
    "expectPrimary": "—"
  },
  {
    "name": "нулевой рост отклоняется",
    "inputs": {
      "height": 0,
      "hip": 100,
      "waist": 84
    },
    "expectPrimary": "—"
  }
];
