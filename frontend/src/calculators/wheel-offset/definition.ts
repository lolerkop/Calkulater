import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { wheelOffsetCopyEn } from './copy.en';
import { wheelOffsetCopyUk } from './copy.uk';
import { wheelOffsetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "wheel-offset",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: wheelOffsetCopyEn, uk: wheelOffsetCopyUk },
  referenceCases: wheelOffsetReferenceCases,
  publishedExample: { inputs: { width: 7, offset: 35, newOffset: 45 }, expected: ["136,6 мм"] },
  presentation: {
    id: "wheel-offset",
    name: "Калькулятор вылета диска",
    slug: "vylet-diska",
    fullPath: "/automotive/vylet-diska/",
    category: "automotive",
    icon: "car",
    popularity: 35,
    isNew: false,
    shortDescription: "Вылет ET, вылет назад и смещение колеса при замене дисков.",
    longDescription:
      "Вылет ET — расстояние от привалочной плоскости до середины обода, и он бывает отрицательным: у глубоких дисков плоскость смещена внутрь. Практический вопрос почти всегда один: насколько колесо уйдёт наружу или внутрь, если поставить диск с другим вылетом. Ответ обманчив по знаку — МЕНЬШИЙ вылет выносит колесо НАРУЖУ, — поэтому направление показано словами, а не только числом.",
    seoTitle: "Калькулятор вылета диска — ET, backspacing и смещение колеса",
    seoDescription: "Рассчитайте вылет назад по ширине диска и ET и узнайте, насколько колесо сместится при замене вылета.",
    h1: "Калькулятор вылета диска",
    keywords: ["вылет диска", "ET диска", "backspacing", "смещение колеса"],
    fields: [
      { name: 'width', label: 'Ширина диска, дюймы', type: 'number', defaultValue: 7, min: 0, step: 0.5 },
      { name: 'offset', label: 'Вылет ET, мм', type: 'number', defaultValue: 35, signed: true, step: 1 },
      { name: 'newOffset', label: 'Новый вылет ET, мм', type: 'number', defaultValue: 45, signed: true, step: 1 },
    ],
    resultLabels: {
      "backspacing": "Вылет назад",
      "widthMm": "Ширина диска",
      "shift": "Смещение колеса",
      "direction": "Куда сместится",
      "newBackspacing": "Вылет назад после замены",
    },
    howToUse: [
      "Ширина диска — в дюймах из маркировки, например 7J означает 7 дюймов.",
      "Вылет ET указан на диске цифрами после букв, бывает отрицательным.",
      "Вылет назад считается с учётом закраин: полная ширина обода на дюйм больше маркировочной.",
      "Смещение наружу увеличивает нагрузку на ступичный подшипник и может задевать арку.",
    ],
    howItWorks: "Вылет назад = ширина/2 + ET + 12,7 мм; смещение = старый ET − новый ET.",
    example: "Диск 7 дюймов с ET 35 даёт вылет назад 136,6 мм; замена на ET 45 уводит колесо внутрь на 10 мм.",
    faq: [
      { q: "Почему меньший вылет выносит колесо наружу?", a: "Вылет отсчитывается от привалочной плоскости — той, которой диск прижимается к ступице. Она закреплена на месте, поэтому уменьшение вылета сдвигает середину обода дальше от ступицы, то есть наружу." },
      { q: "Насколько можно менять вылет?", a: "Производители обычно допускают отклонение в пределах нескольких миллиметров. Заметное смещение наружу увеличивает плечо обкатки, нагружает подшипник и может привести к задеванию арки на ходах подвески." },
      { q: "Чем ET отличается от вылета назад?", a: "ET отсчитывается от середины обода, backspacing — от внутреннего края. Первый пишут на дисках в Европе, второй встречается в американских таблицах; связаны они через половину ширины обода." },
      { q: "Спасут ли проставки?", a: "Проставка уменьшает эффективный вылет и выносит колесо наружу, то есть решает только одну из двух задач. Она же удлиняет шпильки и требует более длинных болтов — без них крепление становится опасным." },
    ],
    relatedCalculatorIds: ["tire-size", "power-to-weight", "car-depreciation"],
  },
};
