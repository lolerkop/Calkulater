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
  de: {
    fields: {
      'value': 'Fläche',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'mm2': 'Quadratmillimeter (mm²)',
      'cm2': 'Quadratzentimeter (cm²)',
      'm2': 'Quadratmeter (m²)',
      'ha': 'Hektar (ha)',
      'km2': 'Quadratkilometer (km²)',
      'in2': 'Quadratzoll (in²)',
      'ft2': 'Quadratfuß (ft²)',
      'ac': 'Acre (ac)',
    },
    results: {
      'Результат': 'Ergebnis',
      'Исходное значение': 'Ausgangswert',
      'Соотношение': 'Verhältnis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Выберите единицы из списка': 'Wähle Einheiten aus der Liste',
      'Введите конечное число': 'Trage eine endliche Zahl ein',
      'Результат вне допустимого диапазона': 'Das Ergebnis liegt außerhalb des zulässigen Bereichs',
      'мм²': 'mm²',
      'см²': 'cm²',
      'м²': 'm²',
      'га': 'ha',
      'км²': 'km²',
      'дюйм²': 'in²',
      'фут²': 'ft²',
      'акр': 'ac',
    },
  },
  en: {
    fields: { value: 'Area', from: 'From unit', to: 'To unit' },
    options: { mm2: 'Square millimetre (mm²)', cm2: 'Square centimetre (cm²)', m2: 'Square metre (m²)', ha: 'Hectare (ha)', km2: 'Square kilometre (km²)', in2: 'Square inch (in²)', ft2: 'Square foot (ft²)', ac: 'Acre (ac)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'мм²': 'mm²', 'см²': 'cm²', 'м²': 'm²', 'га': 'ha', 'км²': 'km²', 'дюйм²': 'in²', 'фут²': 'ft²', 'акр': 'ac' },
  },
  uk: {
    fields: { value: 'Площа', from: 'З одиниці', to: 'В одиницю' },
    options: { mm2: 'Квадратний міліметр (мм²)', cm2: 'Квадратний сантиметр (см²)', m2: 'Квадратний метр (м²)', ha: 'Гектар (га)', km2: 'Квадратний кілометр (км²)', in2: 'Квадратний дюйм (in²)', ft2: 'Квадратний фут (ft²)', ac: 'Акр (ac)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'мм²': 'мм²', 'см²': 'см²', 'м²': 'м²', 'га': 'га', 'км²': 'км²', 'дюйм²': 'дюйм²', 'фут²': 'фут²', 'акр': 'акр' },
  },
};
