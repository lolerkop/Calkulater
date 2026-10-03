import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { yeastConvertCopyEn } from './copy.en';
import { yeastConvertCopyUk } from './copy.uk';
import { yeastConvertCopyDe } from './copy.de';
import { yeastConvertCopyEs } from './copy.es';
import { yeastConvertReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "yeast-convert",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: yeastConvertCopyEn, uk: yeastConvertCopyUk, de: yeastConvertCopyDe, es: yeastConvertCopyEs },
  referenceCases: yeastConvertReferenceCases,
  publishedExample: { inputs: { value: 30, from: "fresh", to: "instant" }, expected: ["7,5 г"] },
  presentation: {
    ...contractContent.ru,
    id: "yeast-convert",
    name: "Калькулятор пересчёта дрожжей",
    slug: "pereschyot-drozhzhey",
    fullPath: "/household/pereschyot-drozhzhey/",
    category: "household",
    icon: "chef",
    popularity: 27,
    isNew: false,
    shortDescription: "Пересчёт прессованных, сухих активных и быстродействующих дрожжей между собой.",
    seoTitle: "Пересчёт дрожжей — прессованные, сухие активные, быстродействующие",
    seoDescription: "Пересчитайте прессованные, сухие активные и быстродействующие дрожжи между собой по массе.",
    h1: "Калькулятор пересчёта дрожжей",
    keywords: ["пересчёт дрожжей", "прессованные дрожжи", "сухие дрожжи", "быстродействующие дрожжи"],
    fields: [
      { name: 'value', label: 'Масса по рецепту, г', type: 'number', defaultValue: 30, min: 0, step: 1 },
      {
        name: 'from', label: 'Что указано в рецепте', type: 'select', defaultValue: 'fresh',
        options: [
          { value: 'fresh', label: 'прессованные' },
          { value: 'active', label: 'сухие активные' },
          { value: 'instant', label: 'быстродействующие' },
        ],
      },
      {
        name: 'to', label: 'Что есть в наличии', type: 'select', defaultValue: 'instant',
        options: [
          { value: 'fresh', label: 'прессованные' },
          { value: 'active', label: 'сухие активные' },
          { value: 'instant', label: 'быстродействующие' },
        ],
      },
    ],
    resultLabels: {
      "result": "Нужно дрожжей", "fresh": "В пересчёте на прессованные",
      "active": "Сухие активные", "instant": "Быстродействующие", "ratio": "Соотношение",
    },
    relatedCalculatorIds: ["bakers-percentage", "brew-ratio", "recipe-scale"],
  },
};
