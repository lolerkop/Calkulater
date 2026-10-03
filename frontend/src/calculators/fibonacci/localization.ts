import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"n": "Gliednummer n"},
    results: { ...runtimeScalarPhrases("de",[0, 14, 15, 4, 8]),"Отношение к предыдущему": "Verhältnis zum vorigen Glied", "Предыдущий член": "Voriges Glied", "Начало ряда": "Anfang der Reihe", "№": "Nr." },
    values: {"Показаны первые 10 членов ряда.": "Gezeigt werden die ersten 10 Glieder der Reihe.", "Номер члена должен быть не меньше единицы": "Die Gliednummer muss mindestens eins sein", "Номер члена должен быть целым": "Die Gliednummer muss eine ganze Zahl sein", "Номер члена больше 78 выходит за предел точного расчёта": "Eine Gliednummer über 78 überschreitet die Grenze der genauen Rechnung", "Здесь доступны целые номера от 1 до 78": "Hier sind ganzzahlige Positionen von 1 bis 78 verfügbar"},
  },
  "en": {
    fields: {"n": "Term number n"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[13, 14, 3, 6]),"n-й член": "nth term", "Отношение к предыдущему": "Ratio to the previous term", "Предыдущий член": "Previous term", "Начало ряда": "Start of the series", "№": "No." },
    values: {"Показаны первые 10 членов ряда.": "Showing the first 10 terms of the series.", "Номер члена должен быть не меньше единицы": "The term number must be at least one", "Номер члена должен быть целым": "The term number must be a whole number", "Номер члена больше 78 выходит за предел точного расчёта": "A term number above 78 exceeds the exact-arithmetic limit", "Здесь доступны целые номера от 1 до 78": "Integer positions from 1 to 78 are available here"},
  },
  "uk": {
    fields: {"n": "Номер члена n"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[0, 14, 15, 4, 8]),"Отношение к предыдущему": "Відношення до попереднього", "Предыдущий член": "Попередній член", "Начало ряда": "Початок ряду", "№": "№" },
    values: {"Показаны первые 10 членов ряда.": "Показано перші 10 членів ряду.", "Номер члена должен быть не меньше единицы": "Номер члена має бути щонайменше одиниця", "Номер члена должен быть целым": "Номер члена має бути цілим", "Номер члена больше 78 выходит за предел точного расчёта": "Номер члена понад 78 перевищує межу точного обчислення", "Здесь доступны целые номера от 1 до 78": "Тут доступні цілі номери від 1 до 78"},
  },
  "es": {
    fields: {"n": "Posición del término n"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[13, 14, 3, 7]),"n-й член": "n-ésimo término", "Отношение к предыдущему": "Razón respecto al anterior", "Предыдущий член": "Término anterior", "Начало ряда": "Comienzo de la serie", "№": "N.º" },
    values: {"Показаны первые 10 членов ряда.": "Se muestran los 10 primeros términos de la serie.", "Номер члена должен быть не меньше единицы": "La posición del término debe ser al menos uno", "Номер члена должен быть целым": "La posición del término debe ser un número entero", "Номер члена больше 78 выходит за предел точного расчёта": "Una posición mayor que 78 supera el límite del cálculo exacto", "Здесь доступны целые номера от 1 до 78": "Aquí se admiten posiciones enteras entre 1 y 78"},
  },
};
