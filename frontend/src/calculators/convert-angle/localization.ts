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
      'value': 'Winkel',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'rad': 'Bogenmaß (rad)',
      'deg': 'Grad (°)',
      'grad': 'Gon (gon)',
      'turn': 'Umdrehung (turn)',
      'arcmin': 'Bogenminute (′)',
      'arcsec': 'Bogensekunde (″)',
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
      'рад': 'rad',
      'град': 'gon',
      'об': 'turn',
    },
  },
  en: {
    fields: { value: 'Angle', from: 'From unit', to: 'To unit' },
    options: { rad: 'Radian (rad)', deg: 'Degree (°)', grad: 'Gradian (gon)', turn: 'Turn (turn)', arcmin: 'Arcminute (′)', arcsec: 'Arcsecond (″)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'рад': 'rad', 'град': 'gon', 'об': 'turn' },
  },
  uk: {
    fields: { value: 'Кут', from: 'З одиниці', to: 'В одиницю' },
    options: { rad: 'Радіан (рад)', deg: 'Градус (°)', grad: 'Град, гон (град)', turn: 'Оберт (об)', arcmin: 'Кутова хвилина (′)', arcsec: 'Кутова секунда (″)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'рад': 'рад', 'град': 'град', 'об': 'об' },
  },
};
