import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Скорость чтения': 'Reading speed', 'Слов в час': 'Words per hour',
  'Знаков в минуту (примерно)': 'Characters per minute (approx.)',
  'Время на книгу': 'Time for the book', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Скорость чтения': 'Швидкість читання', 'Слов в час': 'Слів за годину',
  'Знаков в минуту (примерно)': 'Знаків за хвилину (приблизно)',
  'Время на книгу': 'Час на книгу', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'words': 'Gelesene Wörter',
      'minutes': 'Zeit, Minuten',
      'bookWords': 'Wörter im Buch',
    },
    results: {
      'Скорость чтения': 'Lesegeschwindigkeit',
      'Слов в час': 'Wörter je Stunde',
      'Знаков в минуту (примерно)': 'Zeichen je Minute (etwa)',
      'Время на книгу': 'Zeit für das Buch',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'слов/мин': 'Wörter/min',
      'ч': 'h',
      'мин': 'min',
      'Число слов должно быть больше нуля': 'Die Zahl der Wörter muss größer als null sein',
      'Время должно быть больше нуля': 'Die Zeit muss größer als null sein',
    },
  },
  en: {
    fields: { words: 'Words read', minutes: 'Time, minutes', bookWords: 'Words in the book' },
    results: RESULTS_EN,
    values: {
      'слов/мин': 'wpm', 'ч': 'h', 'мин': 'min',
      'Число слов должно быть больше нуля': 'The word count must be greater than zero',
      'Время должно быть больше нуля': 'The time must be greater than zero',
    },
  },
  uk: {
    fields: { words: 'Прочитано слів', minutes: 'Час, хвилин', bookWords: 'Слів у книзі' },
    results: RESULTS_UK,
    values: {
      'слов/мин': 'слів/хв', 'ч': 'год', 'мин': 'хв',
      'Число слов должно быть больше нуля': 'Кількість слів має бути більшою за нуль',
      'Время должно быть больше нуля': 'Час має бути більшим за нуль',
    },
  },
};
