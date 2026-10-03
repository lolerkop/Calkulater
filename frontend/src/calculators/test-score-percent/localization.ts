import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"correct": "Richtige Antworten", "total": "Fragen insgesamt", "passMark": "Bestehensgrenze, %"},
    results: { ...runtimeScalarPhrases("de",[8]),"Результат": "Ergebnis", "Правильных": "Richtig", "Ошибок": "Falsch", "Доля ошибок": "Fehleranteil", "Проходной балл": "Bestehensgrenze" },
    values: { ...runtimeScalarPhrases("de",[1, 5]),"из": "von", "Тест сдан": "Bestanden", "Тест не сдан": "Nicht bestanden", "Всего вопросов должно быть больше нуля": "Die Zahl der Fragen muss größer als null sein", "Число правильных ответов не может быть отрицательным": "Die Zahl der richtigen Antworten kann nicht negativ sein", "Правильных ответов не может быть больше, чем вопросов": "Es kann nicht mehr richtige Antworten als Fragen geben", "Проходной балл должен быть от 0 до 100 процентов": "Der Grenzwert muss zwischen 0 und 100 Prozent liegen" },
  },
  "en": {
    fields: {"correct": "Correct answers", "total": "Questions in total", "passMark": "Pass mark, %"},
    results: { ...runtimeScalarPhrases("en",[6]),"Результат": "Score", "Правильных": "Correct", "Ошибок": "Wrong", "Доля ошибок": "Share of errors", "Проходной балл": "Pass mark" },
    values: { ...runtimeScalarPhrases("en",[1, 4]),"из": "of", "Тест сдан": "Passed", "Тест не сдан": "Not passed", "Всего вопросов должно быть больше нуля": "The number of questions must be greater than zero", "Число правильных ответов не может быть отрицательным": "The number of correct answers cannot be negative", "Правильных ответов не может быть больше, чем вопросов": "There cannot be more correct answers than questions", "Проходной балл должен быть от 0 до 100 процентов": "The passing threshold must be between 0 and 100 percent" },
  },
  "uk": {
    fields: {"correct": "Правильні відповіді", "total": "Усього питань", "passMark": "Прохідний бал, %"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Результат": "Результат", "Правильных": "Правильних", "Ошибок": "Помилок", "Доля ошибок": "Частка помилок", "Проходной балл": "Прохідний бал" },
    values: { ...runtimeScalarPhrases("uk",[2, 5]),"из": "з", "Тест сдан": "Тест складено", "Тест не сдан": "Тест не складено", "Всего вопросов должно быть больше нуля": "Кількість питань має бути більшою за нуль", "Число правильных ответов не может быть отрицательным": "Кількість правильних відповідей не може бути від’ємною", "Правильных ответов не может быть больше, чем вопросов": "Правильних відповідей не може бути більше, ніж питань", "Проходной балл должен быть от 0 до 100 процентов": "Прохідний поріг має бути від 0 до 100 відсотків" },
  },
  "es": {
    fields: {"correct": "Respuestas correctas", "total": "Preguntas en total", "passMark": "Nota de corte, %"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Результат": "Resultado", "Правильных": "Correctas", "Ошибок": "Falladas", "Доля ошибок": "Proporción de fallos", "Проходной балл": "Nota de corte" },
    values: { ...runtimeScalarPhrases("es",[1, 5]),"из": "de", "Тест сдан": "Test superado", "Тест не сдан": "Test no superado", "Всего вопросов должно быть больше нуля": "El número de preguntas debe ser mayor que cero", "Число правильных ответов не может быть отрицательным": "El número de respuestas correctas no puede ser negativo", "Правильных ответов не может быть больше, чем вопросов": "No puede haber más respuestas correctas que preguntas", "Проходной балл должен быть от 0 до 100 процентов": "El umbral debe estar entre 0 y 100 por ciento" },
  },
};
