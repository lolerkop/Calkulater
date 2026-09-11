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
      'value': 'Frequenz',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'hz': 'Hertz (Hz)',
      'khz': 'Kilohertz (kHz)',
      'mhz': 'Megahertz (MHz)',
      'ghz': 'Gigahertz (GHz)',
      'mhz_milli': 'Millihertz (mHz)',
      'rpm': 'Umdrehung je Minute (U/min)',
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
      'Гц': 'Hz',
      'кГц': 'kHz',
      'МГц': 'MHz',
      'ГГц': 'GHz',
      'мГц': 'mHz',
      'об/мин': 'U/min',
    },
  },
  en: {
    fields: { value: 'Frequency', from: 'From unit', to: 'To unit' },
    options: { hz: 'Hertz (Hz)', khz: 'Kilohertz (kHz)', mhz: 'Megahertz (MHz)', ghz: 'Gigahertz (GHz)', mhz_milli: 'Millihertz (mHz)', rpm: 'Revolution per minute (rpm)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'Гц': 'Hz', 'кГц': 'kHz', 'МГц': 'MHz', 'ГГц': 'GHz', 'мГц': 'mHz', 'об/мин': 'rpm' },
  },
  uk: {
    fields: { value: 'Частота', from: 'З одиниці', to: 'В одиницю' },
    options: { hz: 'Герц (Гц)', khz: 'Кілогерц (кГц)', mhz: 'Мегагерц (МГц)', ghz: 'Гігагерц (ГГц)', mhz_milli: 'Мілігерц (мГц)', rpm: 'Оберт за хвилину (об/хв)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'Гц': 'Гц', 'кГц': 'кГц', 'МГц': 'МГц', 'ГГц': 'ГГц', 'мГц': 'мГц', 'об/мин': 'об/хв' },
  },
  es: {
    fields: {
      "from": "Unidad de origen",
      "to": "Unidad de destino",
      "value": "Frecuencia",
    },
    options: {
      "hz": "Hercio (Hz)",
      "khz": "Kilohercio (kHz)",
      "mhz": "Megahercio (MHz)",
      "ghz": "Gigahercio (GHz)",
      "mhz_milli": "Milihercio (mHz)",
      "rpm": "Revolución por minuto (rpm)",
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
      "Гц": "Hz",
      "кГц": "kHz",
      "МГц": "MHz",
      "ГГц": "GHz",
      "мГц": "mHz",
      "об/мин": "rpm",
    },
  },
};
