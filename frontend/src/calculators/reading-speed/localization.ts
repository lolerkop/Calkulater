import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"words": "Gelesene Wörter", "minutes": "Zeit", "bookWords": "Wörter im Buch"},
    results: { ...runtimeScalarPhrases("de",[8]),"Скорость чтения": "Lesegeschwindigkeit", "Слов в час": "Wörter je Stunde", "Знаков в минуту (примерно)": "Zeichen je Minute (etwa)", "Время на книгу": "Zeit für das Buch" },
    values: { ...runtimeScalarPhrases("de",[1, 9, 5]),"слов/мин": "Wörter/min", "ч": "h", "мин": "min", "Число слов должно быть больше нуля": "Die Zahl der Wörter muss größer als null sein", "Время должно быть больше нуля": "Die Zeit muss größer als null sein", "Значение выходит за числовой диапазон": "Der Wert überschreitet den Zahlenbereich", "Ненулевое значение меньше числового диапазона": "Der Wert ungleich null liegt unter dem Zahlenbereich", "Объём книги не может быть отрицательным": "Die Wortzahl des Buches darf nicht negativ sein" },
  },
  "en": {
    fields: {"words": "Words read", "minutes": "Time", "bookWords": "Words in the book"},
    results: { ...runtimeScalarPhrases("en",[6]),"Скорость чтения": "Reading speed", "Слов в час": "Words per hour", "Знаков в минуту (примерно)": "Characters per minute (approx.)", "Время на книгу": "Time for the book" },
    values: { ...runtimeScalarPhrases("en",[1, 8, 4]),"слов/мин": "wpm", "ч": "h", "мин": "min", "Число слов должно быть больше нуля": "The word count must be greater than zero", "Время должно быть больше нуля": "The time must be greater than zero", "Значение выходит за числовой диапазон": "The value exceeds the numeric range", "Ненулевое значение меньше числового диапазона": "The nonzero value is below the numeric range", "Объём книги не может быть отрицательным": "The book word count cannot be negative" },
  },
  "uk": {
    fields: {"words": "Прочитано слів", "minutes": "Час", "bookWords": "Слів у книзі"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Скорость чтения": "Швидкість читання", "Слов в час": "Слів за годину", "Знаков в минуту (примерно)": "Знаків за хвилину (приблизно)", "Время на книгу": "Час на книгу" },
    values: { ...runtimeScalarPhrases("uk",[2, 10, 5]),"слов/мин": "слів/хв", "ч": "год", "мин": "хв", "Число слов должно быть больше нуля": "Кількість слів має бути більшою за нуль", "Время должно быть больше нуля": "Час має бути більшим за нуль", "Значение выходит за числовой диапазон": "Значення перевищує числовий діапазон", "Ненулевое значение меньше числового диапазона": "Ненульове значення менше за числовий діапазон", "Объём книги не может быть отрицательным": "Кількість слів у книзі не може бути від’ємною" },
  },
  "es": {
    fields: {"words": "Palabras leídas", "minutes": "Tiempo", "bookWords": "Palabras del libro"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Скорость чтения": "Velocidad de lectura", "Слов в час": "Palabras por hora", "Знаков в минуту (примерно)": "Caracteres por minuto (aprox.)", "Время на книгу": "Tiempo para el libro" },
    values: { ...runtimeScalarPhrases("es",[1, 8, 5]),"слов/мин": "palabras/min", "ч": "h", "мин": "min", "Число слов должно быть больше нуля": "El número de palabras debe ser mayor que cero", "Время должно быть больше нуля": "El tiempo debe ser mayor que cero", "Значение выходит за числовой диапазон": "El valor supera el rango numérico", "Ненулевое значение меньше числового диапазона": "El valor no nulo está por debajo del rango numérico", "Объём книги не может быть отрицательным": "La cantidad de palabras del libro no puede ser negativa" },
  },
};
