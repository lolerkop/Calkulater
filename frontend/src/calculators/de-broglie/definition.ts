import { deBroglieContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { deBroglieCopyEn } from './copy.en';
import { deBroglieCopyUk } from './copy.uk';
import { deBroglieCopyDe } from './copy.de';
import { deBroglieCopyEs } from './copy.es';
import { deBroglieReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "de-broglie",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: deBroglieCopyEn, uk: deBroglieCopyUk, de: deBroglieCopyDe, es: deBroglieCopyEs },
  referenceCases: deBroglieReferenceCases,
  publishedExample: { inputs: { mass27: 0.00091093837, velocityKmS: 1000 }, expected: ["7,274·10^-10 м"] },
  presentation: {
    id: "de-broglie",
    name: "Калькулятор длины волны де Бройля",
    slug: "dlina-volny-de-broylya",
    fullPath: "/physics/dlina-volny-de-broylya/",
    category: "physics",
    icon: "activity",
    popularity: 29,
    isNew: false,
    shortDescription: "Длина волны частицы по её массе и скорости.",

    seoTitle: "Калькулятор длины волны де Бройля — по массе и скорости",
    seoDescription: "Рассчитайте длину волны де Бройля для электрона, протона или другой частицы по её массе и скорости, с импульсом, энергией и долей скорости света.",
    h1: "Калькулятор длины волны де Бройля",
    keywords: ["длина волны де Бройля", "волна электрона", "постоянная Планка", "импульс частицы"],
    fields: [
      { name: 'mass27', label: 'Масса частицы', unit: '×10⁻²⁷ кг', type: 'number', defaultValue: 0.00091093837, min: 0, step: 0.0001 },
      { name: 'velocityKmS', label: 'Скорость', unit: 'км/с', type: 'number', defaultValue: 1000, min: 0, step: 1 },
    ],
    resultLabels: {
      "wavelength": "Длина волны", "momentum": "Импульс", "beta": "Доля скорости света",
      "nm": "В нанометрах", "energy": "Кинетическая энергия",
    },




    ...deBroglieContractContent.ru,
    relatedCalculatorIds: ["wave", "kinetic-energy", "momentum"],
  },
};
