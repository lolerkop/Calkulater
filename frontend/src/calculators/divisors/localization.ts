import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "de": {
    fields: {"n": "Zahl n"},
    results: { ...runtimeScalarPhrases("de",[8]),"Делители": "Teiler", "Количество делителей": "Zahl der Teiler", "Сумма делителей": "Summe der Teiler", "Сумма собственных делителей": "Summe der echten Teiler", "Это число": "Diese Zahl ist" },
    values: {"простое": "prim", "совершенное": "vollkommen", "и ещё": "und weitere", "Число должно быть целым": "Die Zahl muss eine ganze Zahl sein", "Делители считаются для натуральных чисел, начиная с единицы": "Teiler werden für natürliche Zahlen ab eins gezählt", "Здесь считаются числа до триллиона": "Hier werden Zahlen bis zu einer Billion gerechnet", "Показаны первые 40 делителей; количество и суммы относятся ко всему набору.": "Die ersten 40 Teiler werden angezeigt; Anzahl und Summen beziehen sich auf alle Teiler."},
  },
  "en": {
    fields: {"n": "Number n"},
    results: { ...runtimeScalarPhrases("en",[6]),"Делители": "Divisors", "Количество делителей": "Number of divisors", "Сумма делителей": "Sum of divisors", "Сумма собственных делителей": "Sum of proper divisors", "Это число": "This number is" },
    values: {"простое": "prime", "совершенное": "perfect", "и ещё": "and", "Число должно быть целым": "The number must be a whole number", "Делители считаются для натуральных чисел, начиная с единицы": "Divisors are counted for natural numbers starting from one", "Здесь считаются числа до триллиона": "This calculator goes up to a trillion", "Показаны первые 40 делителей; количество и суммы относятся ко всему набору.": "The first 40 divisors are shown; counts and sums cover the complete set."},
  },
  "uk": {
    fields: {"n": "Число n"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Делители": "Дільники", "Количество делителей": "Кількість дільників", "Сумма делителей": "Сума дільників", "Сумма собственных делителей": "Сума власних дільників", "Это число": "Це число" },
    values: {"простое": "просте", "совершенное": "досконале", "и ещё": "і ще", "Число должно быть целым": "Число має бути цілим", "Делители считаются для натуральных чисел, начиная с единицы": "Дільники рахуються для натуральних чисел, починаючи з одиниці", "Здесь считаются числа до триллиона": "Тут рахуються числа до трильйона", "Показаны первые 40 делителей; количество и суммы относятся ко всему набору.": "Показано перші 40 дільників; кількість і суми стосуються всього набору."},
  },
  "es": {
    fields: {"n": "Número n"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Делители": "Divisores", "Количество делителей": "Cantidad de divisores", "Сумма делителей": "Suma de los divisores", "Сумма собственных делителей": "Suma de los divisores propios", "Это число": "Este número es" },
    values: {"простое": "primo", "совершенное": "perfecto", "и ещё": "y", "Число должно быть целым": "El número debe ser entero", "Делители считаются для натуральных чисел, начиная с единицы": "Los divisores se calculan para números naturales a partir de uno", "Здесь считаются числа до триллиона": "Aquí se calculan números hasta el billón", "Показаны первые 40 делителей; количество и суммы относятся ко всему набору.": "Se muestran los primeros 40 divisores; las cantidades y sumas corresponden al conjunto completo."},
  },
};
