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
      'value': 'Druck',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'pa': 'Pascal (Pa)',
      'kpa': 'Kilopascal (kPa)',
      'mpa': 'Megapascal (MPa)',
      'mbar': 'Millibar (mbar)',
      'bar': 'Bar (bar)',
      'atm': 'Atmosphäre (atm)',
      'psi': 'Pfund je Quadratzoll (psi)',
      'mmhg': 'Millimeter Quecksilbersäule (mmHg)',
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
      'Па': 'Pa',
      'кПа': 'kPa',
      'МПа': 'MPa',
      'мбар': 'mbar',
      'бар': 'bar',
      'атм': 'atm',
      'psi': 'psi',
      'мм рт. ст.': 'mmHg',
    },
  },
  en: {
    fields: { value: 'Pressure', from: 'From unit', to: 'To unit' },
    options: { pa: 'Pascal (Pa)', kpa: 'Kilopascal (kPa)', mpa: 'Megapascal (MPa)', mbar: 'Millibar (mbar)', bar: 'Bar (bar)', atm: 'Atmosphere (atm)', psi: 'Pound per square inch (psi)', mmhg: 'Millimetre of mercury (mmHg)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'Па': 'Pa', 'кПа': 'kPa', 'МПа': 'MPa', 'мбар': 'mbar', 'бар': 'bar', 'атм': 'atm', 'psi': 'psi', 'мм рт. ст.': 'mmHg' },
  },
  uk: {
    fields: { value: 'Тиск', from: 'З одиниці', to: 'В одиницю' },
    options: { pa: 'Паскаль (Па)', kpa: 'Кілопаскаль (кПа)', mpa: 'Мегапаскаль (МПа)', mbar: 'Мілібар (мбар)', bar: 'Бар (бар)', atm: 'Атмосфера (атм)', psi: 'Фунт на дюйм² (psi)', mmhg: 'Міліметр ртутного стовпа (мм рт. ст.)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'Па': 'Па', 'кПа': 'кПа', 'МПа': 'МПа', 'мбар': 'мбар', 'бар': 'бар', 'атм': 'атм', 'psi': 'psi', 'мм рт. ст.': 'мм рт. ст.' },
  },
};
