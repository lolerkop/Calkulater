import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = { 'Результат': 'Result', 'Исходное значение': 'Input value', 'Соотношение': 'Relationship', 'Проверьте данные': 'Check the values' };
const RESULTS_UK = { 'Результат': 'Результат', 'Исходное значение': 'Вихідне значення', 'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані' };
const ERRORS_EN = {
  'Выберите единицы из списка': 'Choose units from the list',
  'Введите конечное число': 'Enter a finite number',
  'Результат вне допустимого диапазона': 'The result is outside the supported range',
};
const ERRORS_UK = {
  'Выберите единицы из списка': 'Оберіть одиниці зі списку',
  'Введите конечное число': 'Введіть скінченне число',
  'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { value: 'Duration', from: 'From unit', to: 'To unit' },
    options: { ms: 'Millisecond (ms)', s: 'Second (s)', min: 'Minute (min)', h: 'Hour (h)', d: 'Day (d)', wk: 'Week (wk)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'мс': 'ms', 'мин': 'min', 'сут': 'd', 'нед': 'wk', 'ч': 'h', 'с': 's' },
  },
  uk: {
    fields: { value: 'Тривалість', from: 'З одиниці', to: 'В одиницю' },
    options: { ms: 'Мілісекунда (мс)', s: 'Секунда (с)', min: 'Хвилина (хв)', h: 'Година (год)', d: 'Доба (дн)', wk: 'Тиждень (тиж)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'мс': 'мс', 'мин': 'хв', 'сут': 'дн', 'нед': 'тиж', 'ч': 'год', 'с': 'с' },
  },
};
