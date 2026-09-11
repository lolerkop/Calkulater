import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'value': 'Wert',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'Sv': 'Sievert (Sv)',
      'mSv': 'Millisievert (mSv)',
      'uSv': 'Mikrosievert (µSv)',
      'nSv': 'Nanosievert (nSv)',
      'rem': 'Rem',
      'mrem': 'Millirem (mrem)',
    },
    results: {
      'Результат': 'Ergebnis',
      'Исходное значение': 'Ausgangswert',
      'Соотношение': 'Verhältnis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Неизвестная единица дозы': 'Unbekannte Dosiseinheit',
      'Доза не может быть отрицательной': 'Die Dosis kann nicht negativ sein',
      'Переводятся единицы эквивалентной дозы. Поглощённая доза в греях и активность в беккерелях — другие физические величины, и прямого перевода между ними и зивертом нет.': 'Umgerechnet werden Einheiten der Äquivalentdosis. Die Energiedosis in Gray und die Aktivität in Becquerel sind andere physikalische Größen, und eine unmittelbare Umrechnung zwischen ihnen und dem Sievert gibt es nicht.',
    },
  },
  en: {
    fields: { "value": "Value", "from": "From unit", "to": "To unit" },
    options: { "Sv": "Sievert (Sv)",
      "mSv": "Millisievert (mSv)",
      "uSv": "Microsievert (µSv)",
      "nSv": "Nanosievert (nSv)",
      "rem": "Rem",
      "mrem": "Millirem (mrem)", },
    results: {
      "Результат": "Result",
      "Исходное значение": "Input value",
      "Соотношение": "Ratio",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Неизвестная единица дозы": "Unknown dose unit",
      "Доза не может быть отрицательной": "The dose cannot be negative",
      "Переводятся единицы эквивалентной дозы. Поглощённая доза в греях и активность в беккерелях — другие физические величины, и прямого перевода между ними и зивертом нет.": "This converts units of equivalent dose. Absorbed dose in grays and activity in becquerels are different physical quantities, and there is no direct conversion between them and the sievert.",
    },
  },
  uk: {
    fields: { "value": "Значення", "from": "З одиниці", "to": "В одиницю" },
    options: { "Sv": "Зіверт (Зв)",
      "mSv": "Мілізіверт (мЗв)",
      "uSv": "Мікрозіверт (мкЗв)",
      "nSv": "Нанозіверт (нЗв)",
      "rem": "Бер",
      "mrem": "Мілібер (мбер)", },
    results: {
      "Результат": "Результат",
      "Исходное значение": "Вхідне значення",
      "Соотношение": "Співвідношення",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Неизвестная единица дозы": "Невідома одиниця дози",
      "Доза не может быть отрицательной": "Доза не може бути від’ємною",
      "Переводятся единицы эквивалентной дозы. Поглощённая доза в греях и активность в беккерелях — другие физические величины, и прямого перевода между ними и зивертом нет.": "Переводяться одиниці еквівалентної дози. Поглинена доза в греях і активність у беккерелях це інші фізичні величини, і прямого переведення між ними та зівертом немає.",
    },
  },
  es: {
    fields: {
      "from": "Unidad de origen",
      "to": "Unidad de destino",
      "value": "Valor",
    },
    options: {
      "Sv": "Sievert (Sv)",
      "mSv": "Milisievert (mSv)",
      "uSv": "Microsievert (µSv)",
      "nSv": "Nanosievert (nSv)",
      "rem": "Rem",
      "mrem": "Milirem (mrem)",
    },
    results: {
      "Результат": "Resultado",
      "Исходное значение": "Valor introducido",
      "Соотношение": "Relación",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Неизвестная единица дозы": "Unidad de dosis desconocida",
      "Доза не может быть отрицательной": "La dosis no puede ser negativa",
      "Переводятся единицы эквивалентной дозы. Поглощённая доза в греях и активность в беккерелях — другие физические величины, и прямого перевода между ними и зивертом нет.": "Aquí se convierten unidades de dosis equivalente. La dosis absorbida en grays y la actividad en becquerelios son magnitudes físicas distintas, y no existe conversión directa entre ellas y el sievert.",
    },
  },
};
