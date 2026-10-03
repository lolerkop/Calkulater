import { massEnergyContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { massEnergyCopyEn } from './copy.en';
import { massEnergyCopyUk } from './copy.uk';
import { massEnergyCopyDe } from './copy.de';
import { massEnergyCopyEs } from './copy.es';
import { massEnergyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "mass-energy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: massEnergyCopyEn, uk: massEnergyCopyUk, de: massEnergyCopyDe, es: massEnergyCopyEs },
  referenceCases: massEnergyReferenceCases,
  publishedExample: { inputs: { massG: 1 }, expected: ["8,988·10^13 Дж"] },
  presentation: {
    id: "mass-energy",
    name: "Калькулятор энергии покоя E=mc²",
    slug: "energiya-pokoya",
    fullPath: "/physics/energiya-pokoya/",
    category: "physics",
    icon: "atom",
    popularity: 31,
    isNew: false,
    shortDescription: "Энергия покоя массы по формуле E=mc² в джоулях, киловатт-часах и тоннах тротила.",

    seoTitle: "Калькулятор E=mc² — энергия покоя массы",
    seoDescription: "Рассчитайте энергию покоя вещества по формуле E=mc² в джоулях, киловатт-часах и тоннах тротилового эквивалента.",
    h1: "Калькулятор энергии покоя E=mc²",
    keywords: ["E=mc2", "энергия покоя", "эквивалентность массы и энергии", "тротиловый эквивалент"],
    fields: [
      { name: 'massG', label: 'Масса', unit: 'г', type: 'number', defaultValue: 1, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "energy": "Энергия покоя", "kwh": "В киловатт-часах",
      "tnt": "В тоннах тротилового эквивалента", "mass": "Масса",
      "city": "В миллионах киловатт-часов",
    },




    ...massEnergyContractContent.ru,
    relatedCalculatorIds: ["photon-energy", "relativity-dilation", "kinetic-energy"],
  },
};
