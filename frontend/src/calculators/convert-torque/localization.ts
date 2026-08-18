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
    fields: { value: 'Torque', from: 'From unit', to: 'To unit' },
    options: { nm: 'Newton metre (N·m)', knm: 'Kilonewton metre (kN·m)', ncm: 'Newton centimetre (N·cm)', kgfm: 'Kilogram-force metre (kgf·m)', lbfft: 'Pound-force foot (lbf·ft)', lbfin: 'Pound-force inch (lbf·in)', ozfin: 'Ounce-force inch (ozf·in)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'Н·м': 'N·m', 'кН·м': 'kN·m', 'Н·см': 'N·cm', 'кгс·м': 'kgf·m' },
  },
  uk: {
    fields: { value: 'Момент', from: 'З одиниці', to: 'В одиницю' },
    options: { nm: 'Ньютон-метр (Н·м)', knm: 'Кілоньютон-метр (кН·м)', ncm: 'Ньютон-сантиметр (Н·см)', kgfm: 'Кілограм-сила-метр (кгс·м)', lbfft: 'Фунт-сила-фут (lbf·ft)', lbfin: 'Фунт-сила-дюйм (lbf·in)', ozfin: 'Унція-сила-дюйм (ozf·in)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'Н·м': 'Н·м', 'кН·м': 'кН·м', 'Н·см': 'Н·см', 'кгс·м': 'кгс·м' },
  },
};
