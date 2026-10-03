import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Equation evaluation is independent of physiological validity.
// Common Cooper conversion (D − 504.9)/44.73: exact coefficient primary-source verification remains open.
// Uth et al.: 15.3 × HRmax/HRrest. At 190/55 the estimate is 52.854545..., not 51.8.
export const vo2maxReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "Купер: 2600 м за 12 минут",
    "inputs": {
      "distance": 2600,
      "hrMax": 0,
      "hrRest": 0,
      "mode": "cooper"
    },
    "expectPrimary": "46,839 мл/кг/мин",
    "expectSecondary": [
      {
        "label": "Метод",
        "value": "тест Купера"
      }
    ]
  },
  {
    "name": "Купер: 1900 м",
    "inputs": {
      "distance": 1900,
      "mode": "cooper"
    },
    "expectPrimary": "31,189 мл/кг/мин"
  },
  {
    "name": "пульс 190/60",
    "inputs": {
      "hrMax": 190,
      "hrRest": 60,
      "mode": "hr"
    },
    "expectPrimary": "48,45 мл/кг/мин",
    "expectSecondary": [
      {
        "label": "Метод",
        "value": "по пульсу"
      }
    ]
  },
  {
    "name": "пульс 190/55",
    "inputs": {
      "hrMax": 190,
      "hrRest": 55,
      "mode": "hr"
    },
    "expectPrimary": "52,855 мл/кг/мин"
  },
  {
    "name": "нулевая дистанция отклоняется",
    "inputs": {
      "distance": 0,
      "mode": "cooper"
    },
    "expectPrimary": "—"
  },
  {
    "name": "отрицательная оценка Купера отклоняется",
    "inputs": {
      "distance": 400,
      "mode": "cooper"
    },
    "expectPrimary": "—"
  },
  {
    "name": "нулевая оценка Купера не физиологический результат",
    "inputs": {
      "distance": 504.9,
      "mode": "cooper"
    },
    "expectPrimary": "—"
  },
  {
    "name": "пульс покоя должен быть меньше максимального",
    "inputs": {
      "hrMax": 60,
      "hrRest": 60,
      "mode": "hr"
    },
    "expectPrimary": "—"
  }
];
