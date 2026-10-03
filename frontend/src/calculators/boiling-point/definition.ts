import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { boilingPointCopyEn } from './copy.en';
import { boilingPointCopyUk } from './copy.uk';
import { boilingPointCopyDe } from './copy.de';
import { boilingPointCopyEs } from './copy.es';
import { boilingPointReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "boiling-point",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: boilingPointCopyEn, uk: boilingPointCopyUk, de: boilingPointCopyDe, es: boilingPointCopyEs },
  referenceCases: boilingPointReferenceCases,
  publishedExample: { inputs: { h: 1500 }, expected: ["94,919 °C"] },
  presentation: {
    id: "boiling-point",
    name: "Калькулятор температуры кипения воды",
    slug: "temperatura-kipeniya",
    fullPath: "/physics/temperatura-kipeniya/",
    category: "physics",
    icon: "atom",
    popularity: 30,
    isNew: true,
    shortDescription: "Температура кипения воды на заданной высоте над уровнем моря.",
    seoTitle: "Калькулятор температуры кипения воды на высоте",
    seoDescription: "Приближённая температура кипения чистой воды для высот −430…9000 м по модели давления и постоянной теплоте парообразования.",
    h1: "Калькулятор температуры кипения воды",
    keywords: ["температура кипения", "кипение на высоте", "атмосферное давление", "давление насыщенного пара"],
    fields: [
      { name: 'h', label: "Высота над уровнем моря", type: 'number', defaultValue: 1500, min: -430, max: 9000, signed: true, step: 100 , unit: "м" },
    ],
    resultLabels: {
      "boiling": "Температура кипения", "pressure": "Давление на высоте",
      "mmhg": "В миллиметрах ртутного столба", "share": "Доля от давления на уровне моря",
      "delta": "Ниже обычных 100 °C на",
    },
    relatedCalculatorIds: ["water-heating", "air-density", "specific-heat"],
      ...contract.ru,
  },
};
