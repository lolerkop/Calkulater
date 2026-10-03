import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { buoyancyCopyEn } from './copy.en';
import { buoyancyCopyUk } from './copy.uk';
import { buoyancyCopyDe } from './copy.de';
import { buoyancyCopyEs } from './copy.es';
import { buoyancyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "buoyancy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: buoyancyCopyEn, uk: buoyancyCopyUk, de: buoyancyCopyDe, es: buoyancyCopyEs },
  referenceCases: buoyancyReferenceCases,
  publishedExample: { inputs: { volume: 0.02, rhoFluid: 1000, mass: 15 }, expected: ["196,13 Н"] },
  presentation: {
    id: "buoyancy",
    name: "Калькулятор выталкивающей силы",
    slug: "vytalkivayushchaya-sila",
    fullPath: "/physics/vytalkivayushchaya-sila/",
    category: "physics",
    icon: "droplets",
    popularity: 33,
    isNew: false,
    shortDescription: "Сила Архимеда, вес тела и то, всплывёт ли оно.",
    seoTitle: "Калькулятор выталкивающей силы — закон Архимеда",
    seoDescription: "Рассчитайте силу Архимеда по объёму тела и плотности жидкости, с весом, равнодействующей и вытесненной массой.",
    h1: "Калькулятор выталкивающей силы",
    keywords: ["сила Архимеда", "выталкивающая сила", "плавучесть", "вытесненная вода"],
    fields: [
      { name: 'volume', label: "Объём тела", type: 'number', defaultValue: 0.02, min: 0, step: 0.001 , unit: "м³" },
      { name: 'rhoFluid', label: "Плотность жидкости", type: 'number', defaultValue: 1000, min: 0, step: 1 , unit: "кг/м³" },
      { name: 'mass', label: "Масса тела", type: 'number', defaultValue: 15, min: 0, step: 0.1 , unit: "кг" },
    ],
    resultLabels: {
      "force": "Выталкивающая сила", "weight": "Вес тела", "net": "Равнодействующая",
      "displaced": "Вытесненная масса", "behaviour": "Поведение в жидкости",
    },
    relatedCalculatorIds: ["density", "hydrostatic-pressure", "pressure"],
      ...contract.ru,
  },
};
