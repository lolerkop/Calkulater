import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Разложение': 'Factorisation', 'Различных простых': 'Distinct primes',
  'Всего делителей': 'Total divisors', 'Простое число': 'Prime number',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Разложение': 'Розклад', 'Различных простых': 'Різних простих',
  'Всего делителей': 'Усього дільників', 'Простое число': 'Просте число',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'n': 'Zahl',
    },
    results: {
      'Разложение': 'Zerlegung',
      'Различных простых': 'Verschiedene Primzahlen',
      'Всего делителей': 'Teiler insgesamt',
      'Простое число': 'Primzahl',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Да': 'Ja',
      'Нет': 'Nein',
      'Число должно быть целым': 'Die Zahl muss eine ganze Zahl sein',
      'Раскладывают числа от двух и больше': 'Zerlegt werden Zahlen ab zwei',
      'Число слишком велико для точного разложения': 'Die Zahl ist zu groß für eine genaue Zerlegung',
    },
  },
  en: {
    fields: { n: 'Number' },
    results: RESULTS_EN,
    values: {
      'Да': 'Yes', 'Нет': 'No',
      'Число должно быть целым': 'The number must be a whole number',
      'Раскладывают числа от двух и больше': 'Factorisation starts from two',
      'Число слишком велико для точного разложения': 'The number is too large to factorise exactly',
    },
  },
  uk: {
    fields: { n: 'Число' },
    results: RESULTS_UK,
    values: {
      'Да': 'Так', 'Нет': 'Ні',
      'Число должно быть целым': 'Число має бути цілим',
      'Раскладывают числа от двух и больше': 'Розкладають числа від двох і більше',
      'Число слишком велико для точного разложения': 'Число завелике для точного розкладу',
    },
  },
  es: {
    fields: {
      "n": "Número",
    },
    options: {},
    results: {
      "Разложение": "Descomposición",
      "Различных простых": "Primos distintos",
      "Всего делителей": "Divisores en total",
      "Простое число": "Número primo",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Да": "Sí",
      "Нет": "No",
      "Число должно быть целым": "El número debe ser entero",
      "Раскладывают числа от двух и больше": "La descomposición empieza a partir de dos",
      "Число слишком велико для точного разложения": "El número es demasiado grande para descomponerlo de forma exacta",
    },
  },
};
