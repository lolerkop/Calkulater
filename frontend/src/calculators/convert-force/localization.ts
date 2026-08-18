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
    fields: { value: 'Force', from: 'From unit', to: 'To unit' },
    options: { n: 'Newton (N)', kn: 'Kilonewton (kN)', mn: 'Millinewton (mN)', kgf: 'Kilogram-force (kgf)', tf: 'Tonne-force (tf)', lbf: 'Pound-force (lbf)', dyn: 'Dyne (dyn)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'Н': 'N', 'кН': 'kN', 'мН': 'mN', 'кгс': 'kgf', 'тс': 'tf', 'дин': 'dyn' },
  },
  uk: {
    fields: { value: 'Сила', from: 'З одиниці', to: 'В одиницю' },
    options: { n: 'Ньютон (Н)', kn: 'Кілоньютон (кН)', mn: 'Міліньютон (мН)', kgf: 'Кілограм-сила (кгс)', tf: 'Тонна-сила (тс)', lbf: 'Фунт-сила (lbf)', dyn: 'Дина (дин)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'Н': 'Н', 'кН': 'кН', 'мН': 'мН', 'кгс': 'кгс', 'тс': 'тс', 'дин': 'дин' },
  },
};
