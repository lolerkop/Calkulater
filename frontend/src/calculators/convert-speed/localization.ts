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
      'value': 'Geschwindigkeit',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'ms': 'Meter je Sekunde (m/s)',
      'kmh': 'Kilometer je Stunde (km/h)',
      'mph': 'Meile je Stunde (mph)',
      'kn': 'Knoten (kn)',
      'fts': 'Fuß je Sekunde (ft/s)',
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
      'м/с': 'm/s',
      'км/ч': 'km/h',
      'миль/ч': 'mph',
      'узел': 'kn',
      'фут/с': 'ft/s',
    },
  },
  en: {
    fields: { value: 'Speed', from: 'From unit', to: 'To unit' },
    options: { ms: 'Metre per second (m/s)', kmh: 'Kilometre per hour (km/h)', mph: 'Mile per hour (mph)', kn: 'Knot (kn)', fts: 'Foot per second (ft/s)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'м/с': 'm/s', 'км/ч': 'km/h', 'миль/ч': 'mph', 'узел': 'kn', 'фут/с': 'ft/s' },
  },
  uk: {
    fields: { value: 'Швидкість', from: 'З одиниці', to: 'В одиницю' },
    options: { ms: 'Метр за секунду (м/с)', kmh: 'Кілометр за годину (км/год)', mph: 'Миля за годину (mph)', kn: 'Вузол (kn)', fts: 'Фут за секунду (ft/s)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'м/с': 'м/с', 'км/ч': 'км/год', 'миль/ч': 'миль/год', 'узел': 'вузол', 'фут/с': 'фут/с' },
  },
};
