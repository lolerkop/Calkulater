import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { humidityConvertCopyEn } from './copy.en';
import { humidityConvertCopyUk } from './copy.uk';
import { humidityConvertCopyDe } from './copy.de';
import { humidityConvertCopyEs } from './copy.es';
import { humidityConvertReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "humidity-convert",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: humidityConvertCopyEn, uk: humidityConvertCopyUk, de: humidityConvertCopyDe, es: humidityConvertCopyEs },
  referenceCases: humidityConvertReferenceCases,
  publishedExample: { inputs: { t: 20, rh: 50, pressure: 1013.25 }, expected: ["8,642 г/м³"] },
  presentation: {
    id: "humidity-convert",
    name: "Калькулятор абсолютной влажности",
    slug: "absolyutnaya-vlazhnost",
    fullPath: "/physics/absolyutnaya-vlazhnost/",
    category: "physics",
    icon: "droplets",
    popularity: 30,
    isNew: false,
    shortDescription: "Сколько граммов воды в кубометре воздуха.",
    seoTitle: "Калькулятор абсолютной влажности — граммы воды в кубометре",
    seoDescription: "Абсолютная влажность в г/м³ и влагосодержание в г/кг сухого воздуха по температуре, относительной влажности и местному абсолютному давлению.",
    h1: "Калькулятор абсолютной влажности",
    keywords: ["абсолютная влажность", "влагосодержание", "давление пара", "влажность воздуха"],
    fields: [
      { name: 't', label: "Температура", type: 'number', defaultValue: 20, signed: true, step: 1 , unit: "°C" },
      { name: 'rh', label: "Относительная влажность", type: 'number', defaultValue: 50, min: 0, max: 100, step: 5 , unit: "%" },
      { name: 'pressure', label: "Атмосферное давление", type: 'number', defaultValue: 1013.25, min: 0, step: 1 , unit: "гПа" },
    ],
    resultLabels: {
      "absolute": "Абсолютная влажность",
      "pv": "Давление пара",
      "es": "Давление насыщения",
      "mixing": "Влагосодержание",
      "max": "Максимум при этой температуре",
    },
    relatedCalculatorIds: ["dew-point", "air-density", "heat-index"],
      ...contract.ru,
  },
};
