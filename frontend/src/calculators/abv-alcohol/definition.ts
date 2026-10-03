import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { abvAlcoholCopyEn } from './copy.en';
import { abvAlcoholCopyUk } from './copy.uk';
import { abvAlcoholCopyDe } from './copy.de';
import { abvAlcoholCopyEs } from './copy.es';
import { abvAlcoholReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "abv-alcohol",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: abvAlcoholCopyEn, uk: abvAlcoholCopyUk, de: abvAlcoholCopyDe, es: abvAlcoholCopyEs },
  referenceCases: abvAlcoholReferenceCases,
  publishedExample: { inputs: { og: 1.05, fg: 1.01, factor: 131.25 }, expected: ["5,25 %"] },
  presentation: {
    ...contractContent.ru,
    id: "abv-alcohol",
    name: "Калькулятор крепости по плотности",
    slug: "krepost-po-plotnosti",
    fullPath: "/household/krepost-po-plotnosti/",
    category: "household",
    icon: "droplets",
    popularity: 32,
    isNew: false,
    shortDescription: "Крепость напитка по плотности сусла до и после брожения.",
    seoTitle: "Калькулятор крепости по плотности — ABV для пива, вина, браги",
    seoDescription: "Рассчитайте крепость напитка по начальной и конечной плотности сусла, со степенью сбраживания.",
    h1: "Калькулятор крепости по плотности",
    keywords: ["крепость по плотности", "ABV", "начальная плотность сусла", "степень сбраживания"],
    fields: [
      { name: 'og', label: 'Начальная плотность', type: 'number', defaultValue: 1.05, min: 0, step: 0.001 },
      { name: 'fg', label: 'Конечная плотность', type: 'number', defaultValue: 1.01, min: 0, step: 0.001 },
      { name: 'factor', label: 'Коэффициент пересчёта', type: 'number', defaultValue: 131.25, min: 0, step: 0.25 },
    ],
    resultLabels: {
      "abv": "Крепость",
      "attenuation": "Степень сбраживания",
      "drop": "Падение плотности",
      "og": "Начальная плотность",
      "fg": "Конечная плотность",
    },
    relatedCalculatorIds: ["alcohol-units", "dilution", "brew-ratio"],
  },
};
