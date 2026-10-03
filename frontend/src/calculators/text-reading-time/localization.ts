import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"mode": "Was du hast", "words": "Zahl der Wörter", "text": "Text", "wpm": "Stilles Lesetempo", "speechWpm": "Sprechtempo"},
    options: {"words": "eine Wortzahl", "text": "den Text selbst"},
    results: { ...runtimeScalarPhrases("de",[8]),"Время чтения": "Lesedauer", "Время вслух": "Dauer laut vorgelesen", "Чтение в минутах": "Lesen in Minuten", "Речь в минутах": "Rede in Minuten", "Слов": "Wörter" },
    values: { ...runtimeScalarPhrases("de",[1, 9, 5]),"мин": "min", "с": "s", "Вставьте текст — в нём не найдено ни одного слова": "Füge Text ein: Es wurden keine Worttokens gefunden", "Число слов должно быть больше нуля": "Die Zahl der Wörter muss größer als null sein", "Скорость чтения должна быть больше нуля": "Das Lesetempo muss größer als null sein", "Скорость речи должна быть больше нуля": "Das Sprechtempo muss größer als null sein", "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Berechnungsmodus" },
  },
  "en": {
    fields: {"mode": "What you have", "words": "Number of words", "text": "Text", "wpm": "Silent reading speed", "speechWpm": "Speaking speed"},
    options: {"words": "a word count", "text": "the text itself"},
    results: { ...runtimeScalarPhrases("en",[6]),"Время чтения": "Reading time", "Время вслух": "Time aloud", "Чтение в минутах": "Reading in minutes", "Речь в минутах": "Speech in minutes", "Слов": "Words" },
    values: { ...runtimeScalarPhrases("en",[1, 8, 4]),"мин": "min", "с": "s", "Вставьте текст — в нём не найдено ни одного слова": "Paste text: no word tokens were found", "Число слов должно быть больше нуля": "The number of words must be greater than zero", "Скорость чтения должна быть больше нуля": "The reading speed must be greater than zero", "Скорость речи должна быть больше нуля": "The speaking speed must be greater than zero", "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode" },
  },
  "uk": {
    fields: {"mode": "Що відомо", "words": "Кількість слів", "text": "Текст", "wpm": "Швидкість читання про себе", "speechWpm": "Швидкість мовлення вголос"},
    options: {"words": "кількість слів", "text": "сам текст"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Время чтения": "Час читання", "Время вслух": "Час уголос", "Чтение в минутах": "Читання у хвилинах", "Речь в минутах": "Мовлення у хвилинах", "Слов": "Слів" },
    values: { ...runtimeScalarPhrases("uk",[2, 10, 5]),"мин": "хв", "с": "с", "Вставьте текст — в нём не найдено ни одного слова": "Вставте текст: не знайдено жодного слова", "Число слов должно быть больше нуля": "Кількість слів має бути більшою за нуль", "Скорость чтения должна быть больше нуля": "Швидкість читання має бути більшою за нуль", "Скорость речи должна быть больше нуля": "Швидкість мовлення має бути більшою за нуль", "Выберите поддерживаемый режим расчёта": "Виберіть підтримуваний режим розрахунку" },
  },
  "es": {
    fields: {"mode": "Qué tienes", "words": "Número de palabras", "text": "Texto", "wpm": "Velocidad de lectura silenciosa", "speechWpm": "Velocidad al hablar"},
    options: {"words": "un número de palabras", "text": "el propio texto"},
    results: { ...runtimeScalarPhrases("es",[7]),"Время чтения": "Tiempo de lectura", "Время вслух": "Tiempo en voz alta", "Чтение в минутах": "Lectura en minutos", "Речь в минутах": "Discurso en minutos", "Слов": "Palabras" },
    values: { ...runtimeScalarPhrases("es",[1, 8, 5]),"мин": "min", "с": "s", "Вставьте текст — в нём не найдено ни одного слова": "Pega texto: no se encontraron palabras", "Число слов должно быть больше нуля": "El número de palabras debe ser mayor que cero", "Скорость чтения должна быть больше нуля": "La velocidad de lectura debe ser mayor que cero", "Скорость речи должна быть больше нуля": "La velocidad al hablar debe ser mayor que cero", "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido" },
  },
};
