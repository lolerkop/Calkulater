import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'confidence': 'Konfidenzniveau',
      'margin': 'Fehlergrenze, %',
      'proportion': 'Erwarteter Anteil, %',
      'population': 'Größe der Grundgesamtheit (0 — unendlich)',
    },
    options: {
      '90': '90 %',
      '95': '95 %',
      '99': '99 %',
    },
    results: {
      'Размер выборки': 'Stichprobenumfang',
      'Без поправки на совокупность': 'Ohne Korrektur für die Grundgesamtheit',
      'Критическое значение z': 'Kritischer Wert z',
      'Предельная ошибка': 'Fehlergrenze',
      'Доля от совокупности': 'Anteil an der Grundgesamtheit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'чел': 'Pers.',
      'Выберите доверительную вероятность из списка': 'Wähle ein Konfidenzniveau aus der Liste',
      'Предельная ошибка должна быть больше нуля': 'Die Fehlergrenze muss größer als null sein',
      'Ожидаемая доля задаётся от 0 до 100 процентов': 'Der erwartete Anteil liegt zwischen 0 und 100 Prozent',
      'Объём совокупности не может быть отрицательным': 'Die Größe der Grundgesamtheit kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      confidence: 'Confidence level', margin: 'Margin of error, %',
      proportion: 'Expected proportion, %', population: 'Population size (0 — infinite)',
    },
    options: { '90': '90 %', '95': '95 %', '99': '99 %' },
    results: {
      'Размер выборки': 'Sample size', 'Без поправки на совокупность': 'Without finite population correction',
      'Критическое значение z': 'Critical z value', 'Предельная ошибка': 'Margin of error',
      'Доля от совокупности': 'Share of the population', 'Проверьте данные': 'Check the values',
    },
    values: {
      'чел': 'people',
      'Выберите доверительную вероятность из списка': 'Choose a confidence level from the list',
      'Предельная ошибка должна быть больше нуля': 'The margin of error must be greater than zero',
      'Ожидаемая доля задаётся от 0 до 100 процентов': 'The expected proportion runs from 0 to 100 per cent',
      'Объём совокупности не может быть отрицательным': 'The population size cannot be negative',
    },
  },
  uk: {
    fields: {
      confidence: 'Довірча ймовірність', margin: 'Гранична похибка, %',
      proportion: 'Очікувана частка, %', population: 'Обсяг сукупності (0 — нескінченна)',
    },
    options: { '90': '90 %', '95': '95 %', '99': '99 %' },
    results: {
      'Размер выборки': 'Розмір вибірки', 'Без поправки на совокупность': 'Без поправки на сукупність',
      'Критическое значение z': 'Критичне значення z', 'Предельная ошибка': 'Гранична похибка',
      'Доля от совокупности': 'Частка від сукупності', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'чел': 'осіб',
      'Выберите доверительную вероятность из списка': 'Оберіть довірчу ймовірність зі списку',
      'Предельная ошибка должна быть больше нуля': 'Гранична похибка має бути більшою за нуль',
      'Ожидаемая доля задаётся от 0 до 100 процентов': 'Очікувана частка задається від 0 до 100 відсотків',
      'Объём совокупности не может быть отрицательным': 'Обсяг сукупності не може бути від’ємним',
    },
  },
  es: {
    fields: {
      "confidence": "Nivel de confianza",
      "margin": "Margen de error, %",
      "proportion": "Proporción esperada, %",
      "population": "Tamaño de la población (0 — infinita)",
    },
    options: {
      "90": "90 %",
      "95": "95 %",
      "99": "99 %",
    },
    results: {
      "Размер выборки": "Tamaño muestral",
      "Без поправки на совокупность": "Sin corrección por población finita",
      "Критическое значение z": "Valor crítico z",
      "Предельная ошибка": "Margen de error",
      "Доля от совокупности": "Proporción de la población",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "чел": "pers.",
      "Выберите доверительную вероятность из списка": "Elige un nivel de confianza de la lista",
      "Предельная ошибка должна быть больше нуля": "El margen de error debe ser mayor que cero",
      "Ожидаемая доля задаётся от 0 до 100 процентов": "La proporción esperada va del 0 al 100 por ciento",
      "Объём совокупности не может быть отрицательным": "El tamaño de la población no puede ser negativo",
    },
  },
};
