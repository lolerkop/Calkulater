import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"a1": "Erstes Glied", "r": "Quotient", "n": "Zahl der Glieder"},
    results: { ...runtimeScalarPhrases("de",[0, 14, 15, 4, 8]),"Знаменатель": "Quotient", "Первый член": "Erstes Glied", "Сумма бесконечного ряда": "Summe der unendlichen Reihe", "Члены прогрессии": "Glieder der Folge", "№ члена": "Nr. des Glieds" },
    values: {"Число членов должно быть целым от 1 до 50": "Die Zahl der Glieder muss eine ganze Zahl von 1 bis 50 sein", "Знаменатель не может быть нулём": "Der Quotient kann nicht null sein", "Ряд выходит за область представимости: уменьшите знаменатель или число членов": "Die Reihe verlässt den darstellbaren Bereich — verringere den Quotienten oder die Zahl der Glieder", "Введите конечные числа для первого члена и знаменателя": "Geben Sie endliche Zahlen für das erste Glied und den Quotienten ein", "Член или сумма выходят за диапазон этой страницы; измените исходные значения": "Ein Glied oder eine Summe liegt außerhalb des Bereichs dieser Seite; ändern Sie die Eingaben", "Показаны первые 20 членов прогрессии.": "Die ersten 20 Glieder der Folge werden angezeigt."},
  },
  "en": {
    fields: {"a1": "First term", "r": "Common ratio", "n": "Number of terms"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[13, 14, 3, 6]),"n-й член": "n-th term", "Знаменатель": "Common ratio", "Первый член": "First term", "Сумма бесконечного ряда": "Sum of the infinite series", "Члены прогрессии": "Terms of the progression", "№ члена": "Term no." },
    values: {"Число членов должно быть целым от 1 до 50": "The number of terms must be a whole number from 1 to 50", "Знаменатель не может быть нулём": "The common ratio cannot be zero", "Ряд выходит за область представимости: уменьшите знаменатель или число членов": "The series leaves the representable range — reduce the ratio or the number of terms", "Введите конечные числа для первого члена и знаменателя": "Enter finite numbers for the first term and common ratio", "Член или сумма выходят за диапазон этой страницы; измените исходные значения": "A term or sum is outside this page’s range; change the input values", "Показаны первые 20 членов прогрессии.": "The first 20 terms of the progression are shown."},
  },
  "uk": {
    fields: {"a1": "Перший член", "r": "Знаменник", "n": "Кількість членів"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[0, 14, 15, 4, 8]),"Знаменатель": "Знаменник", "Первый член": "Перший член", "Сумма бесконечного ряда": "Сума нескінченного ряду", "Члены прогрессии": "Члени прогресії", "№ члена": "№ члена" },
    values: {"Число членов должно быть целым от 1 до 50": "Кількість членів має бути цілим числом від 1 до 50", "Знаменатель не может быть нулём": "Знаменник не може дорівнювати нулю", "Ряд выходит за область представимости: уменьшите знаменатель или число членов": "Ряд виходить за межі представимості — зменште знаменник або кількість членів", "Введите конечные числа для первого члена и знаменателя": "Введіть скінченні числа для першого члена й знаменника", "Член или сумма выходят за диапазон этой страницы; измените исходные значения": "Член або сума виходять за діапазон цієї сторінки; змініть вхідні значення", "Показаны первые 20 членов прогрессии.": "Показано перші 20 членів прогресії."},
  },
  "es": {
    fields: {"a1": "Primer término", "r": "Razón", "n": "Número de términos"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[13, 14, 3, 7]),"n-й член": "n-ésimo término", "Знаменатель": "Razón", "Первый член": "Primer término", "Сумма бесконечного ряда": "Suma de la serie infinita", "Члены прогрессии": "Términos de la progresión", "№ члена": "N.º de término" },
    values: {"Число членов должно быть целым от 1 до 50": "El número de términos debe ser un entero de 1 a 50", "Знаменатель не может быть нулём": "La razón no puede ser cero", "Ряд выходит за область представимости: уменьшите знаменатель или число членов": "La serie se sale del rango representable: reduce la razón o el número de términos", "Введите конечные числа для первого члена и знаменателя": "Introduzca números finitos para el primer término y la razón", "Член или сумма выходят за диапазон этой страницы; измените исходные значения": "Un término o una suma está fuera del rango de esta página; cambie los datos", "Показаны первые 20 членов прогрессии.": "Se muestran los primeros 20 términos de la progresión."},
  },
};
