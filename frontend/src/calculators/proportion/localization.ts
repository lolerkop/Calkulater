import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"find": "Gesuchtes Glied", "a": "Glied a", "b": "Glied b", "c": "Glied c", "d": "Glied d"},
    options: {"a": "Erstes Glied a", "b": "Zweites Glied b", "c": "Drittes Glied c", "d": "Viertes Glied d"},
    results: { ...runtimeScalarPhrases("de",[8]),"Неизвестный член": "Gesuchtes Glied", "Пропорция": "Verhältnisgleichung", "Отношение": "Verhältnis", "Проверка произведений": "Probe über die Kreuzprodukte" },
    values: {"Член, стоящий по диагонали от искомого, не может быть нулём": "Das Glied schräg gegenüber dem gesuchten kann nicht null sein", "Результат вне допустимого диапазона": "Das Ergebnis liegt außerhalb des zulässigen Bereichs", "Выберите искомый член a, b, c или d": "Wählen Sie das gesuchte Glied a, b, c oder d", "Введите конечные числа в три известных поля": "Geben Sie endliche Zahlen in die drei bekannten Felder ein", "Знаменатели b и d должны быть ненулевыми": "Die Nenner b und d dürfen nicht null sein"},
  },
  "en": {
    fields: {"find": "Term to find", "a": "Term a", "b": "Term b", "c": "Term c", "d": "Term d"},
    options: {"a": "First term a", "b": "Second term b", "c": "Third term c", "d": "Fourth term d"},
    results: { ...runtimeScalarPhrases("en",[6]),"Неизвестный член": "Unknown term", "Пропорция": "Proportion", "Отношение": "Ratio", "Проверка произведений": "Cross-product check" },
    values: {"Член, стоящий по диагонали от искомого, не может быть нулём": "The term diagonally opposite the unknown cannot be zero", "Результат вне допустимого диапазона": "The result is outside the supported range", "Выберите искомый член a, b, c или d": "Choose the unknown term a, b, c or d", "Введите конечные числа в три известных поля": "Enter finite numbers in the three known fields", "Знаменатели b и d должны быть ненулевыми": "Denominators b and d must be nonzero"},
  },
  "uk": {
    fields: {"find": "Який член шукати", "a": "Член a", "b": "Член b", "c": "Член c", "d": "Член d"},
    options: {"a": "Перший член a", "b": "Другий член b", "c": "Третій член c", "d": "Четвертий член d"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Неизвестный член": "Невідомий член", "Пропорция": "Пропорція", "Отношение": "Відношення", "Проверка произведений": "Перевірка добутків" },
    values: {"Член, стоящий по диагонали от искомого, не может быть нулём": "Член, що стоїть по діагоналі від шуканого, не може бути нулем", "Результат вне допустимого диапазона": "Результат поза допустимим діапазоном", "Выберите искомый член a, b, c или d": "Виберіть шуканий член a, b, c або d", "Введите конечные числа в три известных поля": "Введіть скінченні числа в три відомі поля", "Знаменатели b и d должны быть ненулевыми": "Знаменники b і d мають бути ненульовими"},
  },
  "es": {
    fields: {"find": "Término a hallar", "a": "Término a", "b": "Término b", "c": "Término c", "d": "Término d"},
    options: {"a": "Primer término a", "b": "Segundo término b", "c": "Tercer término c", "d": "Cuarto término d"},
    results: { ...runtimeScalarPhrases("es",[7]),"Неизвестный член": "Término desconocido", "Пропорция": "Proporción", "Отношение": "Razón", "Проверка произведений": "Comprobación de los productos" },
    values: {"Член, стоящий по диагонали от искомого, не может быть нулём": "El término situado en diagonal al buscado no puede ser cero", "Результат вне допустимого диапазона": "El resultado está fuera del rango admitido", "Выберите искомый член a, b, c или d": "Elija el término desconocido a, b, c o d", "Введите конечные числа в три известных поля": "Introduzca números finitos en los tres campos conocidos", "Знаменатели b и d должны быть ненулевыми": "Los denominadores b y d deben ser distintos de cero"},
  },
};
