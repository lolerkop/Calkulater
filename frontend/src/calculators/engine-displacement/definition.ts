import { automotiveWave10ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { engineDisplacementCopyEn } from './copy.en';
import { engineDisplacementCopyUk } from './copy.uk';
import { engineDisplacementCopyDe } from './copy.de';
import { engineDisplacementCopyEs } from './copy.es';
import { engineDisplacementReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "engine-displacement",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: engineDisplacementCopyEn, uk: engineDisplacementCopyUk, de: engineDisplacementCopyDe, es: engineDisplacementCopyEs },
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
    seoTitle: "Калькулятор рабочего объёма двигателя — по диаметру и ходу",
    seoDescription: "Рассчитайте рабочий объём двигателя по диаметру цилиндра, ходу поршня и числу цилиндров, в кубических сантиметрах и литрах.",
    h1: "Калькулятор рабочего объёма двигателя",
    keywords: ["рабочий объём двигателя", "литраж", "диаметр цилиндра", "ход поршня"],
    fields: [
      { name: 'bore', label: 'Диаметр цилиндра, мм', type: 'number', unit: "мм", defaultValue: 82, min: 0, step: 0.1 },
      { name: 'stroke', label: 'Ход поршня, мм', type: 'number', unit: "мм", defaultValue: 86, min: 0, step: 0.1 },
      { name: 'cylinders', label: 'Цилиндров, шт', type: 'number', unit: "шт", defaultValue: 4, min: 1, step: 1 },
    ],
    resultLabels: {
      "total": "Рабочий объём", "one": "Объём одного цилиндра", "litres": "В литрах",
      "strokeBore": "Отношение хода к диаметру", "cylinders": "Цилиндров",
    },
    relatedCalculatorIds: ["power-to-weight", "fuel-consumption", "car-depreciation"],
    ...automotiveWave10ContractContent.ru,
  },
};
