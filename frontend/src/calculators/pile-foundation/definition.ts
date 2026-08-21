import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pileFoundationCopyEn } from './copy.en';
import { pileFoundationCopyUk } from './copy.uk';
import { pileFoundationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pile-foundation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pileFoundationCopyEn, uk: pileFoundationCopyUk },
  referenceCases: pileFoundationReferenceCases,
  publishedExample: { inputs: { count: 12, diameter: 0.3, depth: 1.8, grillageLength: 32, grillageWidth: 0.4, grillageHeight: 0.4, waste: 5 }, expected: ["6,979 м³"] },
  presentation: {
    id: "pile-foundation",
    name: "Калькулятор столбчатого фундамента",
    slug: "stolbchatyy-fundament",
    fullPath: "/building/stolbchatyy-fundament/",
    category: "building",
    icon: "layers",
    popularity: 46,
    isNew: true,
    shortDescription: "Бетон на буронабивные сваи и ростверк, который их связывает.",
    longDescription:
      "Оценивает обе половины свайного фундамента. Свая считается цилиндром — площадь круга на глубину, — а ростверк это балка поверх них, которая прибавляется к их сумме, а не считается вместо неё. Обе части заливают одним и тем же бетоном, но их соотношение показывает, куда он на самом деле уходит: ростверк обычно оказывается втрое тяжелее самих свай, и это стоит увидеть до заказа миксера. Ростверк необязателен — нули в его размерах означают «его нет», а не ошибку.",
    seoTitle: "Калькулятор столбчатого фундамента: сваи и ростверк",
    seoDescription: "Посчитайте объём бетона на буронабивные сваи и ростверк с отдельно показанным разделением между ними.",
    h1: "Калькулятор столбчатого фундамента",
    keywords: ["столбчатый фундамент", "бетон на сваи", "объём ростверка", "свайный фундамент расчёт"],
    fields: [
      { name: 'count', label: 'Количество свай', type: 'number', defaultValue: 12, min: 1, step: 1 },
      { name: 'diameter', label: 'Диаметр сваи, м', type: 'number', defaultValue: 0.3, min: 0, step: 0.05 },
      { name: 'depth', label: 'Глубина сваи, м', type: 'number', defaultValue: 1.8, min: 0, step: 0.1 },
      { name: 'grillageLength', label: 'Длина ростверка, м', type: 'number', defaultValue: 32, min: 0, step: 1 },
      { name: 'grillageWidth', label: 'Ширина ростверка, м', type: 'number', defaultValue: 0.4, min: 0, step: 0.05 },
      { name: 'grillageHeight', label: 'Высота ростверка, м', type: 'number', defaultValue: 0.4, min: 0, step: 0.05 },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "total": "Объём бетона",
      "piles": "Объём свай",
      "grillage": "Объём ростверка",
      "net": "Чистый объём",
      "waste": "Запас",
      "one": "Объём одной сваи",
    },
    howToUse: [
      "Введите число свай по плану, их диаметр и глубину.",
      "Введите размеры ростверка или нули, если его нет.",
      "Добавьте запас на потери при доставке и заливке.",
      "Сравните два объёма: ростверк обычно больше.",
    ],
    howItWorks:
      "Одна свая — это площадь круга на глубину. Умноженная на количество, она даёт сваи; ростверк — это длина на ширину на высоту, а обе части плюс запас дают итог.",
    example: "Двенадцать свай по 300 мм глубиной 1,8 м с ростверком 32 м требуют 6,979 м³ бетона.",
    faq: [
      { q: "Почему ростверк больше свай?", a: "Потому что он идёт по всему периметру. Двенадцать свай по 300 мм вместе дают около 1,5 м³, а 32 м балки 400 на 400 — свыше 5 м³ сами по себе." },
      { q: "Что если ростверка нет?", a: "Оставьте его размеры нулевыми. Тогда сваи — это вся работа, именно так обычно строят забор или лёгкий настил." },
      { q: "Глубина — это вся свая или только часть в грунте?", a: "То, что вы зальёте. Если свая выступает над землёй, учтите и эту часть — она тоже берёт бетон." },
      { q: "Учтено ли армирование?", a: "Нет. Каркасы свай и арматура ростверка зависят от проекта и считаются отдельно." },
      { q: "Почему не взять калькулятор ленточного фундамента?", a: "Потому что лента — это одна сплошная траншея бетона, а здесь дискретные столбы плюс балка поверх. Обе части считаются раздельно, и полезно как раз их соотношение." },
    ],
    relatedCalculatorIds: ["strip-foundation", "concrete", "slab-foundation"],
  },
};
