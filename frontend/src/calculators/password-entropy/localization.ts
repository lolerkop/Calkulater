import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'length': 'Passwortlänge, Zeichen',
      'charset': 'Zeichenvorrat',
      'rate': 'Rate des Durchprobierens, Milliarden je Sekunde',
    },
    options: {
      'digits': 'nur Ziffern (10)',
      'lower': 'lateinische Kleinbuchstaben (26)',
      'loweralnum': 'Kleinbuchstaben und Ziffern (36)',
      'mixed': 'Klein- und Großbuchstaben (52)',
      'alnum': 'Buchstaben und Ziffern (62)',
      'alnumsym': 'Buchstaben, Ziffern und Sonderzeichen (94)',
    },
    results: {
      'Энтропия': 'Entropie',
      'Вариантов пароля': 'Mögliche Passwörter',
      'Средний перебор': 'Mittlere Dauer des Durchprobierens',
      'В годах': 'In Jahren',
      'Размер алфавита': 'Größe des Zeichenvorrats',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'бит': 'Bit',
      'знаков': 'Zeichen',
      'с': 's',
      'Длина пароля — целое число знаков, не меньше одного': 'Die Länge ist eine ganze Zahl von Zeichen, mindestens eins',
      'Выберите алфавит из списка': 'Wähle einen Zeichenvorrat aus der Liste',
      'Скорость перебора должна быть больше нуля': 'Die Rate des Durchprobierens muss größer als null sein',
    },
  },
  en: {
    fields: { length: 'Password length, characters', charset: 'Character set', rate: 'Guess rate, billion per second' },
    options: { digits: 'digits only (10)', lower: 'lowercase latin (26)', loweralnum: 'lowercase and digits (36)', mixed: 'lowercase and uppercase (52)', alnum: 'letters and digits (62)', alnumsym: 'letters, digits and symbols (94)' },
    results: {
      'Энтропия': 'Entropy', 'Вариантов пароля': 'Possible passwords',
      'Средний перебор': 'Average search time', 'В годах': 'In years',
      'Размер алфавита': 'Character set size', 'Проверьте данные': 'Check the values',
    },
    values: {
      'бит': 'bits', 'знаков': 'characters', 'с': 's',
      'Длина пароля — целое число знаков, не меньше одного': 'The length must be a whole number of characters, at least one',
      'Выберите алфавит из списка': 'Choose a character set from the list',
      'Скорость перебора должна быть больше нуля': 'The guess rate must be greater than zero',
    },
  },
  uk: {
    fields: { length: 'Довжина пароля, знаків', charset: 'Алфавіт', rate: 'Швидкість перебору, млрд перевірок за секунду' },
    options: { digits: 'лише цифри (10)', lower: 'малі латинські (26)', loweralnum: 'малі та цифри (36)', mixed: 'малі та великі (52)', alnum: 'літери та цифри (62)', alnumsym: 'літери, цифри та знаки (94)' },
    results: {
      'Энтропия': 'Ентропія', 'Вариантов пароля': 'Варіантів пароля',
      'Средний перебор': 'Середній перебір', 'В годах': 'У роках',
      'Размер алфавита': 'Розмір алфавіту', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'бит': 'біт', 'знаков': 'знаків', 'с': 'с',
      'Длина пароля — целое число знаков, не меньше одного': 'Довжина пароля — ціле число знаків, не менше одного',
      'Выберите алфавит из списка': 'Оберіть алфавіт зі списку',
      'Скорость перебора должна быть больше нуля': 'Швидкість перебору має бути більшою за нуль',
    },
  },
};
