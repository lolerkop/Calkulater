import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"n": "Zahl"},
    results: { ...runtimeScalarPhrases("de",[8]),"Разложение": "Zerlegung", "Различных простых": "Verschiedene Primzahlen", "Всего делителей": "Teiler insgesamt", "Простое число": "Primzahl" },
    values: {"Да": "Ja", "Нет": "Nein", "Число должно быть целым": "Die Zahl muss eine ganze Zahl sein", "Раскладывают числа от двух и больше": "Zerlegt werden Zahlen ab zwei", "Число слишком велико для точного разложения": "Die Zahl ist zu groß für eine genaue Zerlegung", "Здесь раскладываются числа до 1000000000000": "Diese Seite zerlegt Zahlen bis 1000000000000"},
  },
  "en": {
    fields: {"n": "Number"},
    results: { ...runtimeScalarPhrases("en",[6]),"Разложение": "Factorisation", "Различных простых": "Distinct primes", "Всего делителей": "Total divisors", "Простое число": "Prime number" },
    values: {"Да": "Yes", "Нет": "No", "Число должно быть целым": "The number must be a whole number", "Раскладывают числа от двух и больше": "Factorisation starts from two", "Число слишком велико для точного разложения": "The number is too large to factorise exactly", "Здесь раскладываются числа до 1000000000000": "This page factorises numbers up to 1000000000000"},
  },
  "uk": {
    fields: {"n": "Число"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Разложение": "Розклад", "Различных простых": "Різних простих", "Всего делителей": "Усього дільників", "Простое число": "Просте число" },
    values: {"Да": "Так", "Нет": "Ні", "Число должно быть целым": "Число має бути цілим", "Раскладывают числа от двух и больше": "Розкладають числа від двох і більше", "Число слишком велико для точного разложения": "Число завелике для точного розкладу", "Здесь раскладываются числа до 1000000000000": "Тут розкладаються числа до 1000000000000"},
  },
  "es": {
    fields: {"n": "Número"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Разложение": "Descomposición", "Различных простых": "Primos distintos", "Всего делителей": "Divisores en total", "Простое число": "Número primo" },
    values: {"Да": "Sí", "Нет": "No", "Число должно быть целым": "El número debe ser entero", "Раскладывают числа от двух и больше": "La descomposición empieza a partir de dos", "Число слишком велико для точного разложения": "El número es demasiado grande para descomponerlo de forma exacta", "Здесь раскладываются числа до 1000000000000": "Esta página descompone números hasta 1000000000000"},
  },
};
