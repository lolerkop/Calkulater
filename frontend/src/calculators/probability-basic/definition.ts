import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { probabilityBasicCopyEn } from './copy.en';
import { probabilityBasicCopyUk } from './copy.uk';
import { probabilityBasicReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "probability-basic",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: probabilityBasicCopyEn, uk: probabilityBasicCopyUk },
  referenceCases: probabilityBasicReferenceCases,
  publishedExample: { inputs: { mode: 'single', favourable: 1, total: 6 }, expected: ["0,1667"] },
  presentation: {
    id: "probability-basic",
    name: "Калькулятор вероятности",
    slug: "probability",
    fullPath: "/math/probability/",
    category: "math",
    icon: "dices",
    popularity: 46,
    isNew: false,
    shortDescription: "Вероятность события, противоположного события и двух независимых событий.",
    longDescription:
      "Считает базовую вероятность четырьмя способами: доля благоприятных исходов, вероятность противоположного события, а также совместное наступление и наступление хотя бы одного из двух независимых событий. Последний случай — тот, где интуиция ошибается чаще всего: вероятность «хотя бы одного» из двух событий по 50% равна не 100%, а 75%, потому что складывать вероятности нельзя, и правильная формула вычитает пересечение.",
    seoTitle: "Калькулятор вероятности — исходы, противоположное и независимые события",
    seoDescription: "Рассчитайте вероятность события по числу благоприятных исходов, вероятность противоположного события и вероятность двух независимых событий.",
    h1: "Калькулятор вероятности",
    keywords: ["калькулятор вероятности", "вероятность события", "противоположное событие", "независимые события"],
    fields: [
      {
        name: 'mode', label: 'Что считаем', type: 'select', defaultValue: 'single',
        options: [
          { value: 'single', label: 'вероятность события' },
          { value: 'complement', label: 'вероятность противоположного' },
          { value: 'independentBoth', label: 'оба независимых события' },
          { value: 'independentEither', label: 'хотя бы одно из двух' },
        ],
      },
      { name: 'favourable', label: 'Благоприятных исходов', type: 'number', defaultValue: 1, min: 0, step: 1, showIf: { field: 'mode', equals: 'single' } },
      { name: 'total', label: 'Всего исходов', type: 'number', defaultValue: 6, min: 0, step: 1, showIf: { field: 'mode', equals: 'single' } },
      { name: 'favourable2', label: 'Благоприятных исходов', type: 'number', defaultValue: 1, min: 0, step: 1, showIf: { field: 'mode', equals: 'complement' } },
      { name: 'total2', label: 'Всего исходов', type: 'number', defaultValue: 6, min: 0, step: 1, showIf: { field: 'mode', equals: 'complement' } },
      { name: 'p1', label: 'Вероятность первого события', type: 'number', defaultValue: 0.5, min: 0, max: 1, step: 0.01, showIf: { field: 'mode', equals: 'independentBoth' } },
      { name: 'p2', label: 'Вероятность второго события', type: 'number', defaultValue: 0.5, min: 0, max: 1, step: 0.01, showIf: { field: 'mode', equals: 'independentBoth' } },
      { name: 'p3', label: 'Вероятность первого события', type: 'number', defaultValue: 0.5, min: 0, max: 1, step: 0.01, showIf: { field: 'mode', equals: 'independentEither' } },
      { name: 'p4', label: 'Вероятность второго события', type: 'number', defaultValue: 0.5, min: 0, max: 1, step: 0.01, showIf: { field: 'mode', equals: 'independentEither' } },
    ],
    resultLabels: {
      "probability": "Вероятность",
      "percent": "В процентах",
      "odds": "Шансы",
      "complement": "Противоположное событие",
    },
    howToUse: ["Выберите, что считаете.", "Введите исходы или вероятности событий.", "Прочитайте вероятность в долях, процентах и шансах."],
    howItWorks: "Вероятность события — благоприятные исходы, делённые на все. Противоположное событие: 1 − p. Оба независимых: p₁ · p₂. Хотя бы одно: p₁ + p₂ − p₁ · p₂.",
    example: "Один благоприятный исход из шести даёт вероятность 0,1667, то есть 16,667 %.",
    faq: [
      { q: "Почему «хотя бы одно» из двух событий по 50 % — не 100 %?", a: "Потому что складывать вероятности нельзя: сложение посчитало бы дважды случай, когда произошли оба события. Правильная формула вычитает это пересечение: 0,5 + 0,5 − 0,25 = 0,75." },
      { q: "Что значит «независимые события»?", a: "Что исход одного не влияет на другой: два броска монеты независимы, а вытягивание двух карт без возврата — уже нет, и формула для них другая." },
      { q: "Как читать шансы?", a: "Шансы «5 к 1» означают, что на один благоприятный исход приходится пять неблагоприятных. Это та же информация, что и вероятность, просто в другой записи." },
      { q: "Может ли вероятность быть больше единицы?", a: "Нет. Единица означает достоверное событие, и большего не бывает — поэтому благоприятных исходов не может быть больше общего числа." },
    ],
    relatedCalculatorIds: ["combinatorics", "divisors", "percent-calculator"],
  },
};
