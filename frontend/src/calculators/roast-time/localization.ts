import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Время в духовке': 'Time in the oven', 'Минут готовки': 'Cooking minutes',
  'Отдых после духовки': 'Resting after the oven', 'Всего с отдыхом': 'Total including rest',
  'Норма на килограмм': 'Minutes per kilogram', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Время в духовке': 'Час у духовці', 'Минут готовки': 'Хвилин готування',
  'Отдых после духовки': 'Відпочинок після духовки', 'Всего с отдыхом': 'Усього з відпочинком',
  'Норма на килограмм': 'Норма на кілограм', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      weight: 'Weight, kg', minutes_per_kg: 'Minutes per kilogram',
      base_minutes: 'Fixed part, min', rest_pct: 'Resting time, %',
    },
    options: {},
    results: RESULTS_EN,
    values: {
      'мин': 'min', 'ч': 'h',
      'Масса должна быть больше нуля': 'The weight must be greater than zero',
      'Норма минут на килограмм должна быть больше нуля': 'The minutes per kilogram must be greater than zero',
      'Постоянная часть не может быть отрицательной': 'The fixed part cannot be negative',
      'Отдых должен быть от 0 до 50 %': 'The resting time must be between 0 and 50%',
    },
  },
  uk: {
    fields: {
      weight: 'Маса, кг', minutes_per_kg: 'Хвилин на кілограм',
      base_minutes: 'Постійна частина, хв', rest_pct: 'Відпочинок після духовки, %',
    },
    options: {},
    results: RESULTS_UK,
    values: {
      'мин': 'хв', 'ч': 'год',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Норма минут на килограмм должна быть больше нуля': 'Норма хвилин на кілограм має бути більшою за нуль',
      'Постоянная часть не может быть отрицательной': "Постійна частина не може бути від'ємною",
      'Отдых должен быть от 0 до 50 %': 'Відпочинок має бути від 0 до 50 %',
    },
  },
};
