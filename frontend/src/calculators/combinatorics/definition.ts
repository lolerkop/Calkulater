// Сочетания и размещения: два режима на флаг повторений — четыре формулы.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { combinatoricsCopyEn } from './copy.en';
import { combinatoricsCopyUk } from './copy.uk';
import { combinatoricsCopyDe } from './copy.de';
import { combinatoricsCopyEs } from './copy.es';
import { combinatoricsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'combinatorics',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: combinatoricsCopyEn, uk: combinatoricsCopyUk, de: combinatoricsCopyDe, es: combinatoricsCopyEs },
  referenceCases: combinatoricsReferenceCases,
  publishedExample: { inputs: { mode: 'combinations', n: 10, k: 3 }, expected: ['120'] },
  presentation: {
  "id": "combinatorics",
  "name": "Калькулятор сочетаний и размещений",
  "slug": "combinatorics",
  "fullPath": "/math/combinatorics/",
  "category": "math",
  "icon": "calculator",
  "popularity": 34,
  "isNew": false,
  "shortDescription": "Сочетания и размещения, с повторениями и без.",
  "longDescription": "Считает выборки в четырёх моделях: сочетания без учёта порядка и размещения с учётом порядка, с повторениями или без них. n и k — целые от 0 до 1000; без повторений k не может превышать n. Пустая выборка k = 0 имеет один способ во всех режимах, даже при n = 0. При n = 0 и k > 0 с повторениями вариантов нет. Основной ответ — точное целое BigInt со всеми цифрами; дополнительная научная форма лишь сокращённое приближение.",
  "seoTitle": "Калькулятор сочетаний и размещений — nCr и nPr",
  "seoDescription": "Рассчитайте сочетания и размещения с повторениями или без, с точным целочисленным результатом.",
  "h1": "Калькулятор сочетаний и размещений",
  "keywords": [
    "калькулятор сочетаний",
    "размещения",
    "nCr nPr"
  ],
  "fields": [
    {
      "name": "mode",
      "label": "Что считаем",
      "type": "select",
      "defaultValue": "combinations",
      "options": [
        {
          "value": "combinations",
          "label": "сочетания"
        },
        {
          "value": "permutations",
          "label": "размещения"
        }
      ]
    },
    {
      "name": "repetition",
      "label": "Разрешить повторения",
      "type": "toggle",
      "defaultValue": "no",
      "options": [
        {
          "value": "no",
          "label": "Нет"
        },
        {
          "value": "yes",
          "label": "Да"
        }
      ]
    },
    {
      "name": "n",
      "label": "Размер множества n",
      "type": "number",
      "defaultValue": 10,
      "min": 0,
      "max": 1000,
      "step": 1
    },
    {
      "name": "k",
      "label": "Размер выборки k",
      "type": "number",
      "defaultValue": 3,
      "min": 0,
      "max": 1000,
      "step": 1
    }
  ],
  "resultLabels": {
    "result": "Количество вариантов",
    "formula": "Формула",
    "order": "Порядок важен",
    "repetition": "Повторения разрешены"
  },
  "howToUse": [
    "Выберите сочетания или размещения.",
    "Укажите, разрешены ли повторения.",
    "Введите размер множества и размер выборки."
  ],
  "howItWorks": "Без повторений: C(n,k) = n!/[k!(n−k)!], P(n,k) = n!/(n−k)!. С повторениями при n ≥ 1: C(n+k−1,k) и nᵏ. Для k = 0 используется один способ пустого выбора; при n = 0 и k > 0 с повторениями — ноль. Все целые вычисляются точно, без перевода результата в Number.",
  "example": "Выбор 5 карт из 52 даёт C(52, 5) = 2 598 960 возможных рук.",
  "faq": [
    {
      "q": "Чем сочетания отличаются от размещений?",
      "a": "Порядком. Сочетания считают AB и BA одной и той же выборкой, размещения — двумя разными."
    },
    {
      "q": "Когда выборка может превышать множество?",
      "a": "Только при разрешённых повторениях. Взять 5 предметов из 3 видов осмысленно, если каждый вид можно брать не по одному разу."
    },
    {
      "q": "Почему результат считается в точных целых?",
      "a": "BigInt сохраняет все цифры целых ответов. Числа за пределами 9007199254740991 не имеют общей гарантии точности в Number, хотя некоторые отдельные значения ещё представимы точно. Например, C(60,30) = 118264581564861424 представимо, а следующий C(61,30) = 232714176627630544 уже нет."
    },
    {
      "q": "Зачем верхний предел?",
      "a": "Предел n, k ≤ 1000 ограничивает объём циклов и длину вывода этой страницы. Он не является математическим пределом: например, C(n,0) = 1 и для большего n. Для вычисления биномиальных коэффициентов используется последовательное точное умножение и деление."
    }
  ],
  "relatedCalculatorIds": [
    "linear-equation",
    "prime-factorization",
    "proportion"
  ]
},
};
