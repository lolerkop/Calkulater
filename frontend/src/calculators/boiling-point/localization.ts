import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'h': 'Höhe über dem Meeresspiegel, m',
    },
    results: {
      'Температура кипения': 'Siedetemperatur',
      'Давление на высоте': 'Druck in dieser Höhe',
      'В миллиметрах ртутного столба': 'In Millimetern Quecksilbersäule',
      'Доля от давления на уровне моря': 'Anteil des Meeresspiegeldrucks',
      'Ниже обычных 100 °C на': 'Unter den üblichen 100 °C um',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '°C': '°C',
      'кПа': 'kPa',
      'мм рт. ст.': 'mmHg',
      '%': '%',
      'Высота вне диапазона от −430 до 9000 м': 'Die Höhe liegt außerhalb des Bereichs von −430 bis 9000 m',
    },
  },
  en: {
    fields: { h: 'Altitude above sea level, m' },
    options: {},
    results: {
      'Температура кипения': 'Boiling point', 'Давление на высоте': 'Pressure at altitude',
      'В миллиметрах ртутного столба': 'In millimetres of mercury',
      'Доля от давления на уровне моря': 'Share of sea-level pressure',
      'Ниже обычных 100 °C на': 'Below the usual 100 °C by',
      'Проверьте данные': 'Check the values',
    },
    values: {
      '°C': '°C', 'кПа': 'kPa', 'мм рт. ст.': 'mmHg', '%': '%',
      'Высота вне диапазона от −430 до 9000 м': 'The altitude is outside the −430 to 9000 m range',
    },
  },
  uk: {
    fields: { h: 'Висота над рівнем моря, м' },
    options: {},
    results: {
      'Температура кипения': 'Температура кипіння', 'Давление на высоте': 'Тиск на висоті',
      'В миллиметрах ртутного столба': 'У міліметрах ртутного стовпа',
      'Доля от давления на уровне моря': 'Частка від тиску на рівні моря',
      'Ниже обычных 100 °C на': 'Нижче за звичні 100 °C на',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      '°C': '°C', 'кПа': 'кПа', 'мм рт. ст.': 'мм рт. ст.', '%': '%',
      'Высота вне диапазона от −430 до 9000 м': 'Висота поза діапазоном від −430 до 9000 м',
    },
  },
  es: {
    fields: {
      "h": "Altitud sobre el nivel del mar, m",
    },
    options: {},
    results: {
      "Температура кипения": "Punto de ebullición",
      "Давление на высоте": "Presión a esa altitud",
      "В миллиметрах ртутного столба": "En milímetros de mercurio",
      "Доля от давления на уровне моря": "Proporción respecto a la presión al nivel del mar",
      "Ниже обычных 100 °C на": "Por debajo de los 100 °C habituales en",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "°C": "°C",
      "кПа": "kPa",
      "мм рт. ст.": "mmHg",
      "%": "%",
      "Высота вне диапазона от −430 до 9000 м": "La altitud queda fuera del intervalo de −430 a 9000 m",
    },
  },
};
