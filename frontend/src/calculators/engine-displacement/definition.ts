import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { engineDisplacementCopyEn } from './copy.en';
import { engineDisplacementCopyUk } from './copy.uk';
import { engineDisplacementCopyDe } from './copy.de';
import { engineDisplacementReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "engine-displacement",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: engineDisplacementCopyEn, uk: engineDisplacementCopyUk, de: engineDisplacementCopyDe },
  referenceCases: engineDisplacementReferenceCases,
  publishedExample: { inputs: { bore: 82, stroke: 86, cylinders: 4 }, expected: ["1 816,67 см³"] },
  presentation: {
    id: "engine-displacement",
    name: "Калькулятор рабочего объёма двигателя",
    slug: "rabochiy-obyom-dvigatelya",
    fullPath: "/automotive/rabochiy-obyom-dvigatelya/",
    category: "automotive",
    icon: "car",
    popularity: 36,
    isNew: false,
    shortDescription: "Литраж по диаметру цилиндра, ходу поршня и их числу.",
    longDescription:
      "Литраж в паспорте округлён: «1,8 литра» может означать и 1796, и 1816 кубических сантиметров, а налог с растаможкой считают по точному числу. Здесь оно выводится из трёх размеров, которые печатают в каталогах и выбивают на блоке. Отдельной строкой — отношение хода к диаметру: оно объясняет, почему два мотора одного литража ведут себя по-разному, длинноходный тянет с низов, короткоходный любит обороты.",
    seoTitle: "Калькулятор рабочего объёма двигателя — по диаметру и ходу",
    seoDescription: "Рассчитайте рабочий объём двигателя по диаметру цилиндра, ходу поршня и числу цилиндров, в кубических сантиметрах и литрах.",
    h1: "Калькулятор рабочего объёма двигателя",
    keywords: ["рабочий объём двигателя", "литраж", "диаметр цилиндра", "ход поршня"],
    fields: [
      { name: 'bore', label: 'Диаметр цилиндра, мм', type: 'number', defaultValue: 82, min: 0, step: 0.1 },
      { name: 'stroke', label: 'Ход поршня, мм', type: 'number', defaultValue: 86, min: 0, step: 0.1 },
      { name: 'cylinders', label: 'Цилиндров, шт', type: 'number', defaultValue: 4, min: 1, step: 1 },
    ],
    resultLabels: {
      "total": "Рабочий объём", "one": "Объём одного цилиндра", "litres": "В литрах",
      "strokeBore": "Отношение хода к диаметру", "cylinders": "Цилиндров",
    },
    howToUse: [
      "Диаметр и ход — в миллиметрах, как их печатают в каталогах запчастей.",
      "После расточки блока диаметр меняется, а ход остаётся: подставьте фактический размер гильзы.",
      "Отношение хода к диаметру больше единицы — длинноходный мотор, меньше — короткоходный.",
      "Считается геометрический рабочий объём. Полный объём камеры сгорания больше на объём камеры сжатия.",
    ],
    howItWorks: "V = π/4 · D² · S · n, миллиметры кубические делятся на 1000.",
    example: "Четыре цилиндра 82×86 мм дают 1816,67 см³ — те самые «1,8 литра».",
    faq: [
      { q: "Почему в паспорте другое число?", a: "Паспортный литраж округляют до десятых, а иногда до маркетингового значения модели. Точный объём из размеров цилиндра отличается на десятки кубических сантиметров, и именно он важен для таможенных и налоговых расчётов." },
      { q: "Что даёт расточка блока?", a: "Каждый лишний миллиметр диаметра прибавляет объём квадратично: у мотора 82 мм расточка до 83 даёт около 45 см³ на четыре цилиндра. Ход поршня при этом не меняется — он задан коленвалом." },
      { q: "Чем длинноходный мотор отличается?", a: "При ходе больше диаметра поршень движется с большей средней скоростью на тех же оборотах, поэтому мотор тянет с низов, но хуже раскручивается. Короткоходный — наоборот, и потому чаще встречается в спортивных машинах." },
      { q: "Годится ли расчёт для мотоцикла?", a: "Да, формула не зависит от типа техники. Для одноцилиндрового мотора поставьте единицу — расчёт покажет один и тот же объём в обеих строках." },
    ],
    relatedCalculatorIds: ["power-to-weight", "fuel-consumption", "car-depreciation"],
  },
};
