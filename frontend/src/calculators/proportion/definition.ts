// Пропорция. Четырёхрежимный калькулятор: искомый член выбирается явно, а его
// поле скрывается — пустое числовое поле неотличимо от нуля, а ноль здесь
// законное значение члена.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { proportionCopyEn } from './copy.en';
import { proportionCopyUk } from './copy.uk';
import { proportionCopyDe } from './copy.de';
import { proportionCopyEs } from './copy.es';
import { proportionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'proportion',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: proportionCopyEn, uk: proportionCopyUk, de: proportionCopyDe, es: proportionCopyEs },
  referenceCases: proportionReferenceCases,
  publishedExample: { inputs: { find: 'd', a: 2, b: 3, c: 4, d: 0 }, expected: ['6', '2 : 3 = 4 : 6'] },
  presentation: {
  "id": "proportion",
  "name": "Калькулятор пропорции",
  "slug": "proportion",
  "fullPath": "/math/proportion/",
  "category": "math",
  "icon": "calculator",
  "popularity": 48,
  "isNew": false,
  "shortDescription": "Решение a : b = c : d по любому из четырёх членов.",
  "longDescription": "Решает a/b = c/d относительно выбранного члена. Искомое поле скрыто, заполняются только три известных значения. Знаменатели b и d должны быть ненулевыми и после вычисления; число по диагонали от неизвестного также не может быть нулём для единственного ответа по выбранной формуле. Нулевые числители a или c допустимы. Показаны найденный член, заполненная пропорция, отношение и перекрёстные произведения.",
  "seoTitle": "Калькулятор пропорции — решите a : b = c : d онлайн",
  "seoDescription": "Найдите любой член пропорции перекрёстным умножением, с заполненной пропорцией и проверкой.",
  "h1": "Калькулятор пропорции",
  "keywords": [
    "калькулятор пропорции",
    "перекрёстное умножение",
    "отношение"
  ],
  "fields": [
    {
      "name": "find",
      "label": "Какой член искать",
      "type": "select",
      "defaultValue": "d",
      "options": [
        {
          "value": "a",
          "label": "Первый член a"
        },
        {
          "value": "b",
          "label": "Второй член b"
        },
        {
          "value": "c",
          "label": "Третий член c"
        },
        {
          "value": "d",
          "label": "Четвёртый член d"
        }
      ]
    },
    {
      "name": "a",
      "label": "Член a",
      "type": "number",
      "defaultValue": 2,
      "signed": true,
      "showIf": {
        "field": "find",
        "oneOf": [
          "b",
          "c",
          "d"
        ]
      }
    },
    {
      "name": "b",
      "label": "Член b",
      "type": "number",
      "defaultValue": 3,
      "signed": true,
      "showIf": {
        "field": "find",
        "oneOf": [
          "a",
          "c",
          "d"
        ]
      }
    },
    {
      "name": "c",
      "label": "Член c",
      "type": "number",
      "defaultValue": 4,
      "signed": true,
      "showIf": {
        "field": "find",
        "oneOf": [
          "a",
          "b",
          "d"
        ]
      }
    },
    {
      "name": "d",
      "label": "Член d",
      "type": "number",
      "defaultValue": 0,
      "signed": true,
      "showIf": {
        "field": "find",
        "oneOf": [
          "a",
          "b",
          "c"
        ]
      }
    }
  ],
  "resultLabels": {
    "unknown": "Неизвестный член",
    "proportion": "Пропорция"
  },
  "howToUse": [
    "Выберите, какой член искать.",
    "Заполните три известных члена.",
    "Прочитайте ответ и проверку."
  ],
  "howItWorks": "При b ≠ 0 и d ≠ 0 равенство a/b = c/d эквивалентно ad = bc. Отсюда a = bc/d, b = ad/c, c = ad/b, d = bc/a; делитель выбранной формулы должен быть ненулевым. Сначала вычисляется точный промежуточный двоичный произведение, затем округлённое частное.",
  "example": "В пропорции 2 : 3 = 4 : d четвёртый член равен 3 × 4 ÷ 2 = 6.",
  "faq": [
    {
      "q": "Почему одно поле скрыто?",
      "a": "Искомый член вычисляется, и если оставить его видимым, введённое значение будет проигнорировано."
    },
    {
      "q": "Какой член не может быть нулём?",
      "a": "В исходном равенстве обязательно b ≠ 0 и d ≠ 0. Кроме того, для деления по выбранной формуле ненулевым должен быть член по диагонали от неизвестного. Если он нулевой, могут возникать отсутствие или множество решений; эта страница такие случаи не классифицирует."
    },
    {
      "q": "Можно ли использовать отрицательные числа?",
      "a": "Да, конечные отрицательные и дробные значения допустимы при ненулевых знаменателях и делителе формулы. Ноль в числителе допустим, но 0/0 не является определённым отношением."
    },
    {
      "q": "Что такое проверка произведений?",
      "a": "Показаны a·d и b·c по внутреннему значению найденного члена, до округления его текста. Это численная проверка, а не доказательство точности десятичных данных: отображённый округлённый член может не воспроизвести произведения буквально."
    }
  ],
  "relatedCalculatorIds": [
    "modulo",
    "quadratic-equation",
    "percent-calculator"
  ],
  "disclaimer": "Все три известных значения должны быть конечными. Найденный член, отношение и показанные произведения должны помещаться в числовой диапазон без потери ненулевого значения до нуля; иначе выводится ошибка. Обычная запись округлена до четырёх десятичных знаков, очень малые и большие величины имеют научный формат."
},
};
