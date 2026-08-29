// Факториал в точных целых. Граница 170 — продуктовая, не арифметическая.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { factorialCopyEn } from './copy.en';
import { factorialCopyUk } from './copy.uk';
import { factorialCopyDe } from './copy.de';
import { factorialReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "factorial",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: factorialCopyEn, uk: factorialCopyUk, de: factorialCopyDe },
  referenceCases: factorialReferenceCases,
  publishedExample: { inputs: { n: 10 }, expected: ["3628800"] },
  presentation: {
    id: "factorial",
    name: "Калькулятор факториала",
    slug: "factorial",
    fullPath: "/math/factorial/",
    category: "math",
    icon: "calculator",
    popularity: 32,
    isNew: false,
    shortDescription: "Точный n! для целых чисел до 170.",
    longDescription:
      "Перемножает все целые числа до n в точной целочисленной арифметике. Уже на 20! результат выходит за пределы того, что обычные числа браузера хранят безопасно, и всё, кроме точной арифметики, незаметно потеряло бы младшие разряды, выдав округление за ответ.",
    seoTitle: "Калькулятор факториала — точный n! до 170",
    seoDescription:
      "Вычислите точный факториал целого числа до 170 с количеством разрядов и научной формой рядом с результатом.",
    h1: "Калькулятор факториала",
    keywords: ["калькулятор факториала", "n факториал", "точный факториал"],
    fields: [
      { name: 'n', label: 'Число n', type: 'number', defaultValue: 10, min: 0, max: 170, step: 1 },
    ],
    resultLabels: { result: "Факториал", digits: "Разрядов в ответе", scientific: "Научная форма", written: "Запись" },
    howToUse: ["Введите целое число от 0 до 170.", "Прочитайте точное значение.", "Для очень больших результатов посмотрите на число разрядов."],
    howItWorks: "n! — это произведение всех целых чисел от 1 до n, а 0! по определению равен единице.",
    example: "10! равен 3 628 800, а 20! — уже 2 432 902 008 176 640 000.",
    faq: [
      { q: "Почему остановились на 170?", a: "Это ограничение страницы, а не арифметики. Уже 170! занимает 307 цифр, и дальше ответ перестаёт быть тем, что можно прочитать." },
      { q: "Точен ли результат?", a: "Да, до последней цифры. Обычные числа теряют точность после 20!, поэтому счёт идёт в точных целых." },
      { q: "Почему 0! равен единице?", a: "Это пустое произведение: перемножая ничего, остаёшься с единицей, и определение сохраняет согласованность комбинаторных формул." },
      { q: "Можно ли ввести дробь?", a: "Нет. Продолжение факториала на нецелые — это гамма-функция, другой расчёт." },
    ],
    relatedCalculatorIds: ["combinatorics", "divisors", "prime-factorization"],
  },
};
