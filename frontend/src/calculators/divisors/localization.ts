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
