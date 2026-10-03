import { photonEnergyContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { photonEnergyCopyEn } from './copy.en';
import { photonEnergyCopyUk } from './copy.uk';
import { photonEnergyCopyDe } from './copy.de';
import { photonEnergyCopyEs } from './copy.es';
import { photonEnergyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "photon-energy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: photonEnergyCopyEn, uk: photonEnergyCopyUk, de: photonEnergyCopyDe, es: photonEnergyCopyEs },
  referenceCases: photonEnergyReferenceCases,
  publishedExample: { inputs: { wavelengthNm: 550 }, expected: ["3,612·10^-19 Дж"] },
  presentation: {
    id: "photon-energy",
    name: "Калькулятор энергии фотона",
    slug: "energiya-fotona",
    fullPath: "/physics/energiya-fotona/",
    category: "physics",
    icon: "zap",
    popularity: 31,
    isNew: false,
    shortDescription: "Энергия и частота фотона по длине волны.",

    seoTitle: "Калькулятор энергии фотона — по длине волны",
    seoDescription: "Рассчитайте энергию фотона в джоулях и электронвольтах, а также частоту и волновое число по длине волны.",
    h1: "Калькулятор энергии фотона",
    keywords: ["энергия фотона", "постоянная Планка", "длина волны света", "электронвольт"],
    fields: [
      { name: 'wavelengthNm', label: 'Длина волны', unit: 'нм', type: 'number', defaultValue: 550, min: 0, step: 10 },
    ],
    resultLabels: {
      "energy": "Энергия фотона",
      "ev": "В электронвольтах",
      "frequency": "Частота",
      "wavenumber": "Волновое число",
      "wavelength": "Длина волны",
    },




    ...photonEnergyContractContent.ru,
    relatedCalculatorIds: ["de-broglie", "wave", "kinetic-energy"],
  },
};
