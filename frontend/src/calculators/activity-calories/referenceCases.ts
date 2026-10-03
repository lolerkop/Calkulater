import type { CalculatorReferenceCase } from '../../lib/platform/types';

// 2024 Adult Compendium presets; E = MET × 3.5 × m × t / 200.
// Cycling: 7 × 3.5 × 70 × 45 / 200 = 385.875, shown as 386.
// 1 MET baseline = 55.125, difference = 330.75; ordinary energy rounding stays whole.
export const activityCaloriesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "велосипед: 7 MET, 70 кг, 45 минут",
    "inputs": {
      "activity": "cycling",
      "met": "ignored",
      "weightKg": 70,
      "minutes": 45
    },
    "expectPrimary": "386 ккал",
    "expectSecondary": [
      {
        "label": "Калорий в минуту",
        "value": "8,575"
      },
      {
        "label": "Расход в час",
        "value": "515 ккал"
      },
      {
        "label": "Коэффициент MET",
        "value": "7"
      },
      {
        "label": "Расход за то же время при 1 MET",
        "value": "55,125 ккал"
      },
      {
        "label": "Разница с 1 MET",
        "value": "330,75 ккал"
      }
    ]
  },
  {
    "name": "ходьба: 3,5 MET, 85 кг, 60 минут",
    "inputs": {
      "activity": "walking",
      "weightKg": 85,
      "minutes": 60
    },
    "expectPrimary": "312 ккал",
    "expectSecondary": [
      {
        "label": "Калорий в минуту",
        "value": "5,206"
      }
    ]
  },
  {
    "name": "бег 9,7–10,1 км/ч: 9,3 MET, одна минута",
    "inputs": {
      "activity": "running",
      "weightKg": 70,
      "minutes": 1
    },
    "expectPrimary": "11 ккал",
    "expectSecondary": [
      {
        "label": "Калорий в минуту",
        "value": "11,393"
      }
    ]
  },
  {
    "name": "1 MET включает расход покоя, разница нулевая",
    "inputs": {
      "activity": "custom",
      "met": 1,
      "weightKg": 70,
      "minutes": 60
    },
    "expectPrimary": "74 ккал",
    "expectSecondary": [
      {
        "label": "Расход за то же время при 1 MET",
        "value": "73,5 ккал"
      },
      {
        "label": "Разница с 1 MET",
        "value": "0 ккал"
      }
    ]
  },
  {
    "name": "нулевая длительность даёт нулевую энергию",
    "inputs": {
      "activity": "swimming",
      "weightKg": 70,
      "minutes": 0
    },
    "expectPrimary": "0 ккал"
  },
  {
    "name": "меньше 1 ккал остаётся видимым",
    "inputs": {
      "activity": "custom",
      "met": 1,
      "weightKg": 1,
      "minutes": 1
    },
    "expectPrimary": "0,0175 ккал"
  },
  {
    "name": "MET ниже единицы допускает отрицательную разницу",
    "inputs": {
      "activity": "custom",
      "met": 0.5,
      "weightKg": 70,
      "minutes": 60
    },
    "expectPrimary": "37 ккал",
    "expectSecondary": [
      {
        "label": "Разница с 1 MET",
        "value": "-36,75 ккал"
      }
    ]
  },
  {
    "name": "нулевая масса отклоняется",
    "inputs": {
      "activity": "cycling",
      "weightKg": 0,
      "minutes": 45
    },
    "expectPrimary": "—"
  },
  {
    "name": "неизвестная активность отклоняется",
    "inputs": {
      "activity": "constructor",
      "weightKg": 70,
      "minutes": 45
    },
    "expectPrimary": "—"
  }
];
