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
    fields: { value: 'Mass', from: 'From unit', to: 'To unit' },
    options: { mg: 'Milligram (mg)', g: 'Gram (g)', kg: 'Kilogram (kg)', t: 'Tonne (t)', oz: 'Ounce (oz)', lb: 'Pound (lb)', st: 'Stone (st)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'мг': 'mg', 'г': 'g', 'кг': 'kg', 'т': 't', 'унция': 'oz', 'фунт': 'lb', 'стоун': 'st' },
  },
  uk: {
    fields: { value: 'Маса', from: 'З одиниці', to: 'В одиницю' },
    options: { mg: 'Міліграм (мг)', g: 'Грам (г)', kg: 'Кілограм (кг)', t: 'Тонна (т)', oz: 'Унція (oz)', lb: 'Фунт (lb)', st: 'Стоун (st)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'мг': 'мг', 'г': 'г', 'кг': 'кг', 'т': 'т', 'унция': 'унція', 'фунт': 'фунт', 'стоун': 'стоун' },
  },
};
