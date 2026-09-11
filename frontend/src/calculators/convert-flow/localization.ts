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
      'value': 'Durchfluss',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'm3s': 'Kubikmeter je Sekunde (m³/s)',
      'm3h': 'Kubikmeter je Stunde (m³/h)',
      'ls': 'Liter je Sekunde (l/s)',
      'lmin': 'Liter je Minute (l/min)',
      'lh': 'Liter je Stunde (l/h)',
      'ft3min': 'Kubikfuß je Minute (CFM)',
      'galmin': 'US-Gallone je Minute (GPM)',
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
      'м³/с': 'm³/s',
      'м³/ч': 'm³/h',
      'л/с': 'l/s',
      'л/мин': 'l/min',
      'л/ч': 'l/h',
      'ft³/мин': 'CFM',
      'гал/мин': 'GPM',
    },
  },
  en: {
    fields: { value: 'Flow rate', from: 'From unit', to: 'To unit' },
    options: { m3s: 'Cubic metre per second (m³/s)', m3h: 'Cubic metre per hour (m³/h)', ls: 'Litre per second (L/s)', lmin: 'Litre per minute (L/min)', lh: 'Litre per hour (L/h)', ft3min: 'Cubic foot per minute (CFM)', galmin: 'US gallon per minute (GPM)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'м³/с': 'm³/s', 'м³/ч': 'm³/h', 'л/с': 'L/s', 'л/мин': 'L/min', 'л/ч': 'L/h', 'ft³/мин': 'CFM', 'гал/мин': 'GPM' },
  },
  uk: {
    fields: { value: 'Витрата', from: 'З одиниці', to: 'В одиницю' },
    options: { m3s: 'Кубометр за секунду (м³/с)', m3h: 'Кубометр за годину (м³/год)', ls: 'Літр за секунду (л/с)', lmin: 'Літр за хвилину (л/хв)', lh: 'Літр за годину (л/год)', ft3min: 'Кубічний фут за хвилину (CFM)', galmin: 'Галон США за хвилину (GPM)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'м³/с': 'м³/с', 'м³/ч': 'м³/год', 'л/с': 'л/с', 'л/мин': 'л/хв', 'л/ч': 'л/год', 'ft³/мин': 'ft³/хв', 'гал/мин': 'гал/хв' },
  },
  es: {
    fields: {
      "from": "Unidad de origen",
      "to": "Unidad de destino",
      "value": "Caudal",
    },
    options: {
      "m3s": "Metro cúbico por segundo (m³/s)",
      "m3h": "Metro cúbico por hora (m³/h)",
      "ls": "Litro por segundo (l/s)",
      "lmin": "Litro por minuto (l/min)",
      "lh": "Litro por hora (l/h)",
      "ft3min": "Pie cúbico por minuto (CFM)",
      "galmin": "Galón estadounidense por minuto (GPM)",
    },
    results: {
      "Результат": "Resultado",
      "Исходное значение": "Valor introducido",
      "Соотношение": "Relación",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Выберите единицы из списка": "Elige las unidades de la lista",
      "Введите конечное число": "Introduce un número finito",
      "Результат вне допустимого диапазона": "El resultado queda fuera del intervalo admitido",
      "м³/с": "m³/s",
      "м³/ч": "m³/h",
      "л/с": "l/s",
      "л/мин": "l/min",
      "л/ч": "l/h",
      "ft³/мин": "CFM",
      "гал/мин": "GPM",
    },
  },
};
