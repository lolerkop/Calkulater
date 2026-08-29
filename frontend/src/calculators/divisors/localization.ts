import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Делители": "Divisors",
    "Количество делителей": "Number of divisors",
    "Сумма делителей": "Sum of divisors",
    "Сумма собственных делителей": "Sum of proper divisors",
    "Это число": "This number is",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Делители": "Дільники",
    "Количество делителей": "Кількість дільників",
    "Сумма делителей": "Сума дільників",
    "Сумма собственных делителей": "Сума власних дільників",
    "Это число": "Це число",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'n': 'Zahl n',
    },
    results: {
      'Делители': 'Teiler',
      'Количество делителей': 'Zahl der Teiler',
      'Сумма делителей': 'Summe der Teiler',
      'Сумма собственных делителей': 'Summe der echten Teiler',
      'Это число': 'Diese Zahl ist',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'простое': 'prim',
      'совершенное': 'vollkommen',
      'и ещё': 'und weitere',
      'Число должно быть целым': 'Die Zahl muss eine ganze Zahl sein',
      'Делители считаются для натуральных чисел, начиная с единицы': 'Teiler werden für natürliche Zahlen ab eins gezählt',
      'Здесь считаются числа до триллиона': 'Hier werden Zahlen bis zu einer Billion gerechnet',
    },
  },
  en: {
    fields: { n: "Number n" },
    results: RESULTS_EN,
    values: {
    "простое": "prime",
    "совершенное": "perfect",
    "и ещё": "and",
    "Число должно быть целым": "The number must be a whole number",
    "Делители считаются для натуральных чисел, начиная с единицы": "Divisors are counted for natural numbers starting from one",
    "Здесь считаются числа до триллиона": "This calculator goes up to a trillion",
    },
  },
  uk: {
    fields: { n: "Число n" },
    results: RESULTS_UK,
    values: {
    "простое": "просте",
    "совершенное": "досконале",
    "и ещё": "і ще",
    "Число должно быть целым": "Число має бути цілим",
    "Делители считаются для натуральных чисел, начиная с единицы": "Дільники рахуються для натуральних чисел, починаючи з одиниці",
    "Здесь считаются числа до триллиона": "Тут рахуються числа до трильйона",
    },
  },
};
