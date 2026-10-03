import type { CalculatorContextualField } from '../../lib/platform/types';
const help = {
  "ru": {
    "bookWords": "Целое число слов; пустое поле или 0 отключает оценку времени книги. Количество страниц не переводится в слова."
  },
  "en": {
    "bookWords": "A whole word count; blank or 0 disables book time. Page counts are not converted to words."
  },
  "uk": {
    "bookWords": "Ціла кількість слів; порожнє поле або 0 вимикає час на книгу. Сторінки не переводяться у слова."
  },
  "de": {
    "bookWords": "Eine ganze Wortzahl; leer oder 0 deaktiviert die Buchzeit. Seitenzahlen werden nicht in Wörter umgerechnet."
  },
  "es": {
    "bookWords": "Una cantidad entera de palabras; vacío o 0 desactiva el tiempo del libro. No se convierten páginas en palabras."
  }
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => {
  const entry = help[locale as keyof typeof help] ?? help.en;
  const text = entry[field.name as keyof typeof entry];
  return text ? {...field, help: text} : field;
};
