import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Arithmetic scenario only: B = 0.033 m, A = 0.35 t/30; heat multiplies whole sum by 1.1.
// The exact combination is not verified as a recommended personal intake.
// 72/45: 2.376 + 0.525 = 2.901; heat extra 0.2901, total 3.1911.
export const waterIntakeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "72 кг, 45 минут, без жары",
    "inputs": {
      "activityMinutes": 45,
      "hotWeather": "no",
      "weight": 72
    },
    "expectPrimary": "2,901 л",
    "expectSecondary": [
      {
        "label": "Часть от массы",
        "value": "2,376 л"
      },
      {
        "label": "Часть от нагрузки",
        "value": "0,525 л"
      },
      {
        "label": "Поправка модели на жару",
        "value": "0 л"
      },
      {
        "label": "Эквивалент стаканов по 250 мл",
        "value": "11,604"
      }
    ]
  },
  {
    "name": "58 кг, 90 минут, жара",
    "inputs": {
      "activityMinutes": 90,
      "hotWeather": "yes",
      "weight": 58
    },
    "expectPrimary": "3,26 л",
    "expectSecondary": [
      {
        "label": "Часть от массы",
        "value": "1,914 л"
      },
      {
        "label": "Часть от нагрузки",
        "value": "1,05 л"
      },
      {
        "label": "Поправка модели на жару",
        "value": "0,2964 л"
      },
      {
        "label": "Эквивалент стаканов по 250 мл",
        "value": "13,042"
      }
    ]
  },
  {
    "name": "без нагрузки",
    "inputs": {
      "activityMinutes": 0,
      "hotWeather": "no",
      "weight": 80
    },
    "expectPrimary": "2,64 л",
    "expectSecondary": [
      {
        "label": "Часть от нагрузки",
        "value": "0 л"
      },
      {
        "label": "Эквивалент стаканов по 250 мл",
        "value": "10,56"
      }
    ]
  },
  {
    "name": "то же 72/45 с булевым флагом жары",
    "inputs": {
      "activityMinutes": 45,
      "hotWeather": true,
      "weight": 72
    },
    "expectPrimary": "3,191 л",
    "expectSecondary": [
      {
        "label": "Поправка модели на жару",
        "value": "0,2901 л"
      }
    ]
  },
  {
    "name": "нулевой вес отклоняется",
    "inputs": {
      "activityMinutes": 30,
      "hotWeather": "no",
      "weight": 0
    },
    "expectPrimary": "—"
  },
  {
    "name": "неизвестная погода не считается прохладой",
    "inputs": {
      "activityMinutes": 30,
      "hotWeather": "maybe",
      "weight": 72
    },
    "expectPrimary": "—"
  },
  {
    "name": "отрицательное время отклоняется",
    "inputs": {
      "activityMinutes": -30,
      "hotWeather": "no",
      "weight": 72
    },
    "expectPrimary": "—"
  }
];
