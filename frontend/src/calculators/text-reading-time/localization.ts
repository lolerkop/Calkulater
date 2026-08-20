import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "mode": "What you have",
      "words": "Number of words",
      "text": "Text",
      "wpm": "Silent reading speed, words/min",
      "speechWpm": "Speaking speed, words/min",
    },
    options: {
      "words": "a word count",
      "text": "the text itself",
    },
    results: {
      "Время чтения": "Reading time",
      "Время вслух": "Time aloud",
      "Чтение в минутах": "Reading in minutes",
      "Речь в минутах": "Speech in minutes",
      "Слов": "Words",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мин": "min",
      "с": "s",
      "Вставьте текст — в нём не найдено ни одного слова": "Paste some text — no words were found in it",
      "Число слов должно быть больше нуля": "The number of words must be greater than zero",
      "Скорость чтения должна быть больше нуля": "The reading speed must be greater than zero",
      "Скорость речи должна быть больше нуля": "The speaking speed must be greater than zero",
    },
  },
  uk: {
    fields: {
      "mode": "Що відомо",
      "words": "Кількість слів",
      "text": "Текст",
      "wpm": "Швидкість читання про себе, слів/хв",
      "speechWpm": "Швидкість мовлення вголос, слів/хв",
    },
    options: {
      "words": "кількість слів",
      "text": "сам текст",
    },
    results: {
      "Время чтения": "Час читання",
      "Время вслух": "Час уголос",
      "Чтение в минутах": "Читання у хвилинах",
      "Речь в минутах": "Мовлення у хвилинах",
      "Слов": "Слів",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мин": "хв",
      "с": "с",
      "Вставьте текст — в нём не найдено ни одного слова": "Вставте текст — у ньому не знайдено жодного слова",
      "Число слов должно быть больше нуля": "Кількість слів має бути більшою за нуль",
      "Скорость чтения должна быть больше нуля": "Швидкість читання має бути більшою за нуль",
      "Скорость речи должна быть больше нуля": "Швидкість мовлення має бути більшою за нуль",
    },
  },
};
