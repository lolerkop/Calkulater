import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { protein: 'Protein, g', fat: 'Fat, g', carbs: 'Carbohydrates, g' },
    results: {
      'Всего калорий': 'Total calories', 'Из белков': 'From protein', 'Из жиров': 'From fat',
      'Из углеводов': 'From carbohydrates', 'Проверьте данные': 'Check the values',
    },
    values: { 'Введите хотя бы один макронутриент': 'Enter at least one macronutrient' },
  },
  uk: {
    fields: { protein: 'Білки, г', fat: 'Жири, г', carbs: 'Вуглеводи, г' },
    results: {
      'Всего калорий': 'Усього калорій', 'Из белков': 'З білків', 'Из жиров': 'З жирів',
      'Из углеводов': 'З вуглеводів', 'Проверьте данные': 'Перевірте дані',
    },
    values: { 'Введите хотя бы один макронутриент': 'Введіть хоча б один макронутрієнт' },
  },
};
