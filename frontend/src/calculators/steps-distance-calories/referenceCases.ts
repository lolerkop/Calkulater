import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Adopted assumptions, not universal validated constants: L = 0.415 H cm.
// 175 × 0.415 = 72.625 cm; 10000 steps = 7.2625 km; E = 0.53 × 70 × 7.2625 = 269.43875.
// Direct length means one counted step, not a two-step gait stride.
export const stepsDistanceCaloriesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "десять тысяч шагов по росту",
    "inputs": {
      "height": 175,
      "kcalPerKgKm": 0.53,
      "mode": "height",
      "steps": 10000,
      "stride": 0,
      "weight": 70
    },
    "expectPrimary": "7,263 км",
    "expectSecondary": [
      {
        "label": "Калории",
        "value": "269 ккал"
      },
      {
        "label": "Длина шага",
        "value": "72,625 см"
      },
      {
        "label": "Шагов на километр",
        "value": "1 377"
      }
    ]
  },
  {
    "name": "восемь тысяч шагов по 70 см",
    "inputs": {
      "height": 175,
      "kcalPerKgKm": 0.53,
      "mode": "stride",
      "steps": 8000,
      "stride": 70,
      "weight": 85
    },
    "expectPrimary": "5,6 км",
    "expectSecondary": [
      {
        "label": "Калории",
        "value": "252 ккал"
      },
      {
        "label": "Длина шага",
        "value": "70 см"
      },
      {
        "label": "Шагов на километр",
        "value": "1 429"
      }
    ]
  },
  {
    "name": "измеренный пример: 20 шагов на 14 м",
    "inputs": {
      "mode": "stride",
      "steps": 10000,
      "stride": 70,
      "weight": 70,
      "kcalPerKgKm": 0.53
    },
    "expectPrimary": "7 км",
    "expectSecondary": [
      {
        "label": "Калории",
        "value": "260 ккал"
      }
    ]
  },
  {
    "name": "ноль шагов",
    "inputs": {
      "height": 175,
      "kcalPerKgKm": 0.53,
      "mode": "height",
      "steps": 0,
      "weight": 70
    },
    "expectPrimary": "0 км",
    "expectSecondary": [
      {
        "label": "Калории",
        "value": "0 ккал"
      }
    ]
  },
  {
    "name": "один шаг: малые калории не округляются до нуля",
    "inputs": {
      "mode": "stride",
      "steps": 1,
      "stride": 70,
      "weight": 70,
      "kcalPerKgKm": 0.53
    },
    "expectPrimary": "0,0007 км",
    "expectSecondary": [
      {
        "label": "Калории",
        "value": "0,026 ккал"
      }
    ]
  },
  {
    "name": "нулевая длина отклоняется",
    "inputs": {
      "mode": "stride",
      "steps": 8000,
      "stride": 0,
      "weight": 70,
      "kcalPerKgKm": 0.53
    },
    "expectPrimary": "—"
  },
  {
    "name": "рост вне диапазона",
    "inputs": {
      "mode": "height",
      "height": 115,
      "steps": 8000,
      "weight": 70,
      "kcalPerKgKm": 0.53
    },
    "expectPrimary": "—"
  },
  {
    "name": "дробное число шагов отклоняется",
    "inputs": {
      "mode": "stride",
      "steps": 1.5,
      "stride": 70,
      "weight": 70,
      "kcalPerKgKm": 0.53
    },
    "expectPrimary": "—"
  }
];
