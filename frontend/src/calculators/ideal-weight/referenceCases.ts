import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Peterson et al. (2016), table 3: formulas apply from 60 in upward.
// Hamwi uses pounds: (106 + 6 × excessInches) × 0.45359237 for males.
// At 180 cm, excess = 180/2.54 − 60; Hamwi = 77.6535851066, average = 74.2031600562.
export const idealWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "мужчина 180 см: точный перевод фунтов Хамви",
    "inputs": {
      "height": 180,
      "sex": "male"
    },
    "expectPrimary": "74,203 кг",
    "expectSecondary": [
      {
        "label": "Девайн",
        "value": "74,992 кг"
      },
      {
        "label": "Робинсон",
        "value": "72,646 кг"
      },
      {
        "label": "Миллер",
        "value": "71,521 кг"
      },
      {
        "label": "Хамви",
        "value": "77,654 кг"
      },
      {
        "label": "Граница при ИМТ 18,5 (включительно)",
        "value": "59,94 кг"
      },
      {
        "label": "Граница при ИМТ 25 (не включительно)",
        "value": "81 кг"
      }
    ]
  },
  {
    "name": "женщина 165 см",
    "inputs": {
      "height": 165,
      "sex": "female"
    },
    "expectPrimary": "57,7 кг",
    "expectSecondary": [
      {
        "label": "Девайн",
        "value": "56,909 кг"
      },
      {
        "label": "Робинсон",
        "value": "57,433 кг"
      },
      {
        "label": "Миллер",
        "value": "59,846 кг"
      },
      {
        "label": "Хамви",
        "value": "56,61 кг"
      }
    ]
  },
  {
    "name": "ровно пять футов: только базовые члены",
    "inputs": {
      "height": 152.4,
      "sex": "male"
    },
    "expectPrimary": "51,57 кг",
    "expectSecondary": [
      {
        "label": "Хамви",
        "value": "48,081 кг"
      }
    ]
  },
  {
    "name": "ниже пяти футов нельзя подменить рост базовой массой",
    "inputs": {
      "height": 120,
      "sex": "male"
    },
    "expectPrimary": "—"
  },
  {
    "name": "рост ниже старой границы тоже отклоняется",
    "inputs": {
      "height": 119,
      "sex": "male"
    },
    "expectPrimary": "—"
  },
  {
    "name": "неизвестный пол отклоняется",
    "inputs": {
      "height": 180,
      "sex": "other"
    },
    "expectPrimary": "—"
  },
  {
    "name": "верхняя граница роста сохраняется",
    "inputs": {
      "height": 230,
      "sex": "male"
    },
    "expectPrimary": "115,2 кг"
  }
];
