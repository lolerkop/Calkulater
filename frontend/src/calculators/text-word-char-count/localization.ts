import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"text": "Text"},
    results: { ...runtimeScalarPhrases("de",[8]),"Слов": "Wörter", "Символов с пробелами": "Zeichen mit Leerzeichen", "Символов без пробелов": "Zeichen ohne Leerzeichen", "Предложений": "Sätze", "Абзацев": "Absätze", "Средняя длина слова": "Mittlere Wortlänge", "Слов в предложении": "Wörter je Satz" },
    values: {"Введите текст": "Trage einen Text ein"},
  },
  "en": {
    fields: {"text": "Text"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[6]),"Слов": "Words", "Символов с пробелами": "Characters with spaces", "Символов без пробелов": "Characters without spaces", "Предложений": "Sentences", "Абзацев": "Paragraphs", "Средняя длина слова": "Average word length", "Слов в предложении": "Words per sentence" },
    values: {"Введите текст": "Enter some text"},
  },
  "uk": {
    fields: {"text": "Текст"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[8]),"Слов": "Слів", "Символов с пробелами": "Символів із пробілами", "Символов без пробелов": "Символів без пробілів", "Предложений": "Речень", "Абзацев": "Абзаців", "Средняя длина слова": "Середня довжина слова", "Слов в предложении": "Слів у реченні" },
    values: {"Введите текст": "Введіть текст"},
  },
  "es": {
    fields: {"text": "Texto"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Слов": "Palabras", "Символов с пробелами": "Caracteres con espacios", "Символов без пробелов": "Caracteres sin espacios", "Предложений": "Frases", "Абзацев": "Párrafos", "Средняя длина слова": "Longitud media de palabra", "Слов в предложении": "Palabras por frase" },
    values: {"Введите текст": "Introduce un texto"},
  },
};
