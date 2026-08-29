import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'text': 'Text',
    },
    results: {
      'Слов': 'Wörter',
      'Символов с пробелами': 'Zeichen mit Leerzeichen',
      'Символов без пробелов': 'Zeichen ohne Leerzeichen',
      'Предложений': 'Sätze',
      'Абзацев': 'Absätze',
      'Средняя длина слова': 'Mittlere Wortlänge',
      'Слов в предложении': 'Wörter je Satz',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Введите текст': 'Trage einen Text ein',
    },
  },
  en: {
    fields: { "text": "Text" },
    options: {},
    results: {
      "Слов": "Words",
      "Символов с пробелами": "Characters with spaces",
      "Символов без пробелов": "Characters without spaces",
      "Предложений": "Sentences",
      "Абзацев": "Paragraphs",
      "Средняя длина слова": "Average word length",
      "Слов в предложении": "Words per sentence",
      "Проверьте данные": "Check the values",
    },
    values: { "Введите текст": "Enter some text" },
  },
  uk: {
    fields: { "text": "Текст" },
    options: {},
    results: {
      "Слов": "Слів",
      "Символов с пробелами": "Символів із пробілами",
      "Символов без пробелов": "Символів без пробілів",
      "Предложений": "Речень",
      "Абзацев": "Абзаців",
      "Средняя длина слова": "Середня довжина слова",
      "Слов в предложении": "Слів у реченні",
      "Проверьте данные": "Перевірте дані",
    },
    values: { "Введите текст": "Введіть текст" },
  },
};
