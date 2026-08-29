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
      'value': 'Leistung',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'w': 'Watt (W)',
      'kw': 'Kilowatt (kW)',
      'mw': 'Megawatt (MW)',
      'hp': 'Pferdestärke, mechanisch (hp)',
      'ps': 'Pferdestärke, metrisch (PS)',
      'btuh': 'BTU je Stunde (BTU/h)',
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
      'Вт': 'W',
      'кВт': 'kW',
      'МВт': 'MW',
      'л.с.': 'PS',
      'BTU/ч': 'BTU/h',
    },
  },
  en: {
    fields: { value: 'Power', from: 'From unit', to: 'To unit' },
    options: { w: 'Watt (W)', kw: 'Kilowatt (kW)', mw: 'Megawatt (MW)', hp: 'Horsepower, mechanical (hp)', ps: 'Horsepower, metric (PS)', btuh: 'BTU per hour (BTU/h)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'Вт': 'W', 'кВт': 'kW', 'МВт': 'MW', 'л.с.': 'PS', 'BTU/ч': 'BTU/h' },
  },
  uk: {
    fields: { value: 'Потужність', from: 'З одиниці', to: 'В одиницю' },
    options: { w: 'Ват (Вт)', kw: 'Кіловат (кВт)', mw: 'Мегават (МВт)', hp: 'Кінська сила механічна (hp)', ps: 'Кінська сила метрична (к.с.)', btuh: 'BTU за годину (BTU/год)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'Вт': 'Вт', 'кВт': 'кВт', 'МВт': 'МВт', 'л.с.': 'к.с.', 'BTU/ч': 'BTU/год' },
  },
};
