import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'value': 'Wert',
      'fromUnit': 'Von Einheit',
      'toUnit': 'Nach Einheit',
    },
    options: {
      'l100km': 'l/100 km',
      'kml': 'km/l',
      'mpgus': 'mpg (US)',
      'mpguk': 'mpg (UK)',
    },
    results: {
      'Результат': 'Ergebnis',
      'В л/100 км': 'In l/100 km',
      'В км/л': 'In km/l',
      'В mpg США': 'In mpg (US)',
      'В mpg Великобритании': 'In mpg (UK)',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Расход должен быть больше нуля': 'Der Verbrauch muss größer als null sein',
    },
  },
  en: {
    fields: { "value": "Value", "fromUnit": "From unit", "toUnit": "To unit" },
    options: {
      "l100km": "L/100 km",
      "kml": "km/L",
      "mpgus": "mpg (US)",
      "mpguk": "mpg (UK)",
    },
    results: {
      "Результат": "Result",
      "В л/100 км": "In L/100 km",
      "В км/л": "In km/L",
      "В mpg США": "In mpg (US)",
      "В mpg Великобритании": "In mpg (UK)",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Расход должен быть больше нуля": "Fuel consumption must be greater than zero",
    },
  },
  uk: {
    fields: { "value": "Значення", "fromUnit": "З одиниці", "toUnit": "В одиницю" },
    options: {
      "l100km": "л/100 км",
      "kml": "км/л",
      "mpgus": "mpg США",
      "mpguk": "mpg Великої Британії",
    },
    results: {
      "Результат": "Результат",
      "В л/100 км": "У л/100 км",
      "В км/л": "У км/л",
      "В mpg США": "У mpg США",
      "В mpg Великобритании": "У mpg Великої Британії",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Расход должен быть больше нуля": "Витрата має бути більшою за нуль",
    },
  },
};
