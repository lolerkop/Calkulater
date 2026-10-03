import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"a1": "Erstes Glied a₁", "d": "Differenz d", "n": "Gliednummer n"},
    results: { ...runtimeScalarPhrases("de",[0, 14, 15, 4, 8]),"Разность": "Differenz", "Первый член": "Erstes Glied", "Первые члены ряда": "Erste Glieder der Reihe", "№ члена": "Nr. des Glieds" },
    values: {"Показаны первые 10 членов ряда.": "Gezeigt werden die ersten 10 Glieder der Reihe.", "Номер члена должен быть не меньше единицы": "Die Gliednummer muss mindestens eins sein", "Номер члена должен быть целым": "Die Gliednummer muss eine ganze Zahl sein", "Введите конечные числа для первого члена и разности": "Geben Sie endliche Zahlen für das erste Glied und die Differenz ein", "Номер члена должен быть целым от 1 до 9007199254740991": "Die Gliednummer muss ganzzahlig zwischen 1 und 9007199254740991 liegen", "Результат вне числового диапазона: переполнение или потеря ненулевого значения": "Das Ergebnis liegt außerhalb des Zahlenbereichs: Überlauf oder Verlust eines von null verschiedenen Werts"},
  },
  "en": {
    fields: {"a1": "First term a₁", "d": "Common difference d", "n": "Term number n"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[13, 14, 3, 6]),"n-й член": "nth term", "Разность": "Common difference", "Первый член": "First term", "Первые члены ряда": "First terms of the series", "№ члена": "Term no." },
    values: {"Показаны первые 10 членов ряда.": "Showing the first 10 terms of the series.", "Номер члена должен быть не меньше единицы": "The term number must be at least one", "Номер члена должен быть целым": "The term number must be a whole number", "Введите конечные числа для первого члена и разности": "Enter finite numbers for the first term and common difference", "Номер члена должен быть целым от 1 до 9007199254740991": "The term number must be an integer from 1 to 9007199254740991", "Результат вне числового диапазона: переполнение или потеря ненулевого значения": "The result is outside the numeric range: overflow or loss of a nonzero value"},
  },
  "uk": {
    fields: {"a1": "Перший член a₁", "d": "Різниця d", "n": "Номер члена n"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[0, 14, 15, 4, 8]),"Разность": "Різниця", "Первый член": "Перший член", "Первые члены ряда": "Перші члени ряду", "№ члена": "№ члена" },
    values: {"Показаны первые 10 членов ряда.": "Показано перші 10 членів ряду.", "Номер члена должен быть не меньше единицы": "Номер члена має бути щонайменше одиниця", "Номер члена должен быть целым": "Номер члена має бути цілим", "Введите конечные числа для первого члена и разности": "Введіть скінченні числа для першого члена й різниці", "Номер члена должен быть целым от 1 до 9007199254740991": "Номер члена має бути цілим від 1 до 9007199254740991", "Результат вне числового диапазона: переполнение или потеря ненулевого значения": "Результат поза числовим діапазоном: переповнення або втрата ненульового значення"},
  },
  "es": {
    fields: {"a1": "Primer término a₁", "d": "Diferencia d", "n": "Número de término n"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[13, 14, 3, 7]),"n-й член": "Término n-ésimo", "Разность": "Diferencia", "Первый член": "Primer término", "Первые члены ряда": "Primeros términos de la serie", "№ члена": "N.º de término" },
    values: {"Показаны первые 10 членов ряда.": "Se muestran los 10 primeros términos de la serie.", "Номер члена должен быть не меньше единицы": "El número de término debe ser al menos uno", "Номер члена должен быть целым": "El número de término debe ser un número entero", "Введите конечные числа для первого члена и разности": "Introduzca números finitos para el primer término y la diferencia", "Номер члена должен быть целым от 1 до 9007199254740991": "El número de término debe ser un entero entre 1 y 9007199254740991", "Результат вне числового диапазона: переполнение или потеря ненулевого значения": "El resultado está fuera del rango numérico: desbordamiento o pérdida de un valor distinto de cero"},
  },
};
