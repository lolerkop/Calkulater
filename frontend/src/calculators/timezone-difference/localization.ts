import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'fromOffset': 'UTC-Abweichung — von',
      'toOffset': 'UTC-Abweichung — nach',
      'hour': 'Stunden',
      'minute': 'Minuten',
    },
    results: {
      'Время в точке назначения': 'Uhrzeit am Zielort',
      'Разница': 'Unterschied',
      'Сдвиг суток': 'Tagesversatz',
      'Календарный день': 'Kalendertag',
      'Исходное время': 'Ausgangszeit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'ч': 'h',
      'те же сутки': 'gleicher Tag',
      'следующие сутки': 'Folgetag',
      'предыдущие сутки': 'Vortag',
      'Смещение UTC должно быть от −12 до +14': 'Die UTC-Abweichung muss zwischen −12 und +14 liegen',
      'Введите время в пределах суток': 'Trage eine Uhrzeit innerhalb des Tages ein',
      'Часы и минуты должны быть целыми': 'Stunden und Minuten müssen ganze Zahlen sein',
    },
  },
  en: {
    fields: {
      "fromOffset": "UTC offset — from",
      "toOffset": "UTC offset — to",
      "hour": "Hours",
      "minute": "Minutes",
    },
    options: {},
    results: {
      "Время в точке назначения": "Time at the destination",
      "Разница": "Difference",
      "Сдвиг суток": "Day shift",
      "Календарный день": "Calendar day",
      "Исходное время": "Source time",
      "Проверьте данные": "Check the values",
    },
    values: {
      "ч": "h",
      "те же сутки": "same day",
      "следующие сутки": "next day",
      "предыдущие сутки": "previous day",
      "Смещение UTC должно быть от −12 до +14": "The UTC offset must be between −12 and +14",
      "Введите время в пределах суток": "Enter a time within the day",
      "Часы и минуты должны быть целыми": "Hours and minutes must be whole numbers",
    },
  },
  uk: {
    fields: {
      "fromOffset": "Зміщення UTC звідки",
      "toOffset": "Зміщення UTC куди",
      "hour": "Години",
      "minute": "Хвилини",
    },
    options: {},
    results: {
      "Время в точке назначения": "Час у точці призначення",
      "Разница": "Різниця",
      "Сдвиг суток": "Зсув доби",
      "Календарный день": "Календарний день",
      "Исходное время": "Початковий час",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "ч": "год",
      "те же сутки": "та сама доба",
      "следующие сутки": "наступна доба",
      "предыдущие сутки": "попередня доба",
      "Смещение UTC должно быть от −12 до +14": "Зміщення UTC має бути від −12 до +14",
      "Введите время в пределах суток": "Введіть час у межах доби",
      "Часы и минуты должны быть целыми": "Години та хвилини мають бути цілими",
    },
  },
};
