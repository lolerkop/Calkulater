import type { CalculatorReferenceCase } from '../../lib/platform/types';

// 220 − 35 = 185; with resting 60, reserve = 125.
// 60 + 0.7 × 125 = 147.5 (148 displayed), 60 + 0.8 × 125 = 160.
// Tanaka age 42: max 178.6, reserve 123.6; percent bands use unrounded values.
export const maxHeartRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "35 лет, 220 − возраст, покой 60",
    "inputs": {
      "age": 35,
      "formula": "220-age",
      "restingHr": 60
    },
    "expectPrimary": "185 уд/мин",
    "expectSecondary": [
      {
        "label": "Резерв сердца",
        "value": "125 уд/мин"
      },
      {
        "label": "Пульс покоя",
        "value": "60 уд/мин"
      },
      {
        "label": "Диапазон 70–80 %",
        "value": "148–160 уд/мин"
      }
    ]
  },
  {
    "name": "42 года, Танака, покой 55",
    "inputs": {
      "age": 42,
      "formula": "tanaka",
      "restingHr": 55
    },
    "expectPrimary": "179 уд/мин",
    "expectSecondary": [
      {
        "label": "Резерв сердца",
        "value": "124 уд/мин"
      },
      {
        "label": "Диапазон 70–80 %",
        "value": "142–154 уд/мин"
      }
    ]
  },
  {
    "name": "покой не задан: доли максимума",
    "inputs": {
      "age": 30,
      "formula": "220-age",
      "restingHr": 0
    },
    "expectPrimary": "190 уд/мин",
    "expectSecondary": [
      {
        "label": "Пульс покоя",
        "value": "не задан"
      },
      {
        "label": "Диапазон 70–80 %",
        "value": "133–152 уд/мин"
      }
    ]
  },
  {
    "name": "Гулати: возраст 50, 206 − 0,88 × 50",
    "inputs": {
      "age": 50,
      "formula": "gulati",
      "restingHr": 60
    },
    "expectPrimary": "162 уд/мин",
    "expectSecondary": [
      {
        "label": "Диапазон 70–80 %",
        "value": "131–142 уд/мин"
      }
    ]
  },
  {
    "name": "покой выше максимума отклоняется",
    "inputs": {
      "age": 35,
      "formula": "220-age",
      "restingHr": 190
    },
    "expectPrimary": "—"
  },
  {
    "name": "детский возраст вне взрослого калькулятора",
    "inputs": {
      "age": 5,
      "formula": "tanaka",
      "restingHr": 60
    },
    "expectPrimary": "—"
  },
  {
    "name": "неизвестная формула не заменяется классической",
    "inputs": {
      "age": 40,
      "formula": "constructor",
      "restingHr": 60
    },
    "expectPrimary": "—"
  },
  {
    "name": "дробный возраст вне объявленного целочисленного поля",
    "inputs": {
      "age": 35.5,
      "formula": "tanaka",
      "restingHr": 60
    },
    "expectPrimary": "—"
  }
];
