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
    fields: { value: 'Volume', from: 'From unit', to: 'To unit' },
    options: { ml: 'Millilitre (ml)', cm3: 'Cubic centimetre (cm³)', l: 'Litre (l)', m3: 'Cubic metre (m³)', ft3: 'Cubic foot (ft³)', galUS: 'US gallon (gal)', galUK: 'Imperial gallon (gal)', qtUS: 'US quart (qt)', ptUS: 'US pint (pt)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'мл': 'mL', 'см³': 'cm³', 'м³': 'm³', 'фут³': 'ft³', 'гал. США': 'US gal', 'гал. брит.': 'imp gal', 'кварта США': 'US qt', 'пинта США': 'US pt' },
  },
  uk: {
    fields: { value: 'Обʼєм', from: 'З одиниці', to: 'В одиницю' },
    options: { ml: 'Мілілітр (мл)', cm3: 'Кубічний сантиметр (см³)', l: 'Літр (л)', m3: 'Кубічний метр (м³)', ft3: 'Кубічний фут (ft³)', galUS: 'Галон США (gal)', galUK: 'Галон британський (gal)', qtUS: 'Кварта США (qt)', ptUS: 'Пінта США (pt)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'мл': 'мл', 'см³': 'см³', 'л': 'л', 'м³': 'м³', 'фут³': 'фут³', 'гал. США': 'гал. США', 'гал. брит.': 'гал. брит.', 'кварта США': 'кварта США', 'пинта США': 'пінта США' },
  },
};
