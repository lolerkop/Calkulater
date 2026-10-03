import type { CalculatorReferenceCase } from '../../lib/platform/types';

// General Atwater factors: 4/9/4. Shares use unrounded energy, not gram fractions.
// 100/50/200 g => 400+450+800 = 1650 kcal. 10/10/0 => 40+90 = 130, shares 30.769.../69.230...%.
// Zero inputs give zero energy with no shares; negative grams are input errors.
export const caloriesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "100/50/200 г: 1650 ккал",
    "inputs": {
      "protein": 100,
      "fat": 50,
      "carbs": 200
    },
    "expectPrimary": "1 650 ккал",
    "expectSecondary": [
      {
        "label": "Из белков",
        "value": "400 ккал · 24,24 %"
      },
      {
        "label": "Из жиров",
        "value": "450 ккал · 27,27 %"
      },
      {
        "label": "Из углеводов",
        "value": "800 ккал · 48,48 %"
      }
    ]
  },
  {
    "name": "150/70/250 г: 2230 ккал",
    "inputs": {
      "protein": 150,
      "fat": 70,
      "carbs": 250
    },
    "expectPrimary": "2 230 ккал"
  },
  {
    "name": "только белок",
    "inputs": {
      "protein": 100,
      "fat": 0,
      "carbs": 0
    },
    "expectPrimary": "400 ккал",
    "expectSecondary": [
      {
        "label": "Из белков",
        "value": "400 ккал · 100,00 %"
      }
    ]
  },
  {
    "name": "12,5 г белка = 50 ккал",
    "inputs": {
      "protein": 12.5,
      "fat": 0,
      "carbs": 0
    },
    "expectPrimary": "50 ккал"
  },
  {
    "name": "нулевой итог без деления на ноль",
    "inputs": {
      "protein": 0,
      "fat": 0,
      "carbs": 0
    },
    "expectPrimary": "0 ккал",
    "expectSecondary": [
      {
        "label": "Из белков",
        "value": "0 ккал · доля отсутствует при нулевом итоге"
      }
    ]
  },
  {
    "name": "отрицательные граммы отклоняются",
    "inputs": {
      "protein": -50,
      "fat": 10,
      "carbs": 0
    },
    "expectPrimary": "—"
  },
  {
    "name": "0,1 г белка не округляется до нуля энергии",
    "inputs": {
      "protein": 0.1,
      "fat": 0,
      "carbs": 0
    },
    "expectPrimary": "0,4 ккал",
    "expectSecondary": [
      {
        "label": "Из белков",
        "value": "0,4 ккал · 100,00 %"
      }
    ]
  },
  {
    "name": "равные граммы белка и жиров дают неравные доли энергии",
    "inputs": {
      "protein": 10,
      "fat": 10,
      "carbs": 0
    },
    "expectPrimary": "130 ккал",
    "expectSecondary": [
      {
        "label": "Из белков",
        "value": "40 ккал · 30,77 %"
      },
      {
        "label": "Из жиров",
        "value": "90 ккал · 69,23 %"
      }
    ]
  }
];
