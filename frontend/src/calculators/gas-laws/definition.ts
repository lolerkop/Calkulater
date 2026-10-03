import { gasLawsContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { gasLawsCopyEn } from './copy.en';
import { gasLawsCopyUk } from './copy.uk';
import { gasLawsCopyDe } from './copy.de';
import { gasLawsCopyEs } from './copy.es';
import { gasLawsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "gas-laws",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: gasLawsCopyEn, uk: gasLawsCopyUk, de: gasLawsCopyDe, es: gasLawsCopyEs },
  referenceCases: gasLawsReferenceCases,
  publishedExample: { inputs: { mode: 'p2', p1: 100, v1: 2, t1: 300, p2: 100, v2: 1, t2: 300 }, expected: ["200 кПа"] },
  presentation: {
    id: "gas-laws",
    name: "Калькулятор объединённого газового закона",
    slug: "gazovye-zakony",
    fullPath: "/chemistry/gazovye-zakony/",
    category: "chemistry",
    icon: "atom",
    popularity: 30,
    isNew: false,
    shortDescription: "Переход газа между двумя состояниями: p₁V₁/T₁ = p₂V₂/T₂.",
    longDescription:
      gasLawsContractContent.ru.longDescription,
    seoTitle: "Калькулятор объединённого газового закона — p₁V₁/T₁ = p₂V₂/T₂",
    seoDescription: "Рассчитайте давление, объём или температуру газа при переходе между двумя состояниями по объединённому газовому закону.",
    h1: "Калькулятор объединённого газового закона",
    keywords: ["объединённый газовый закон", "закон бойля мариотта", "закон шарля", "p1v1 t1 p2v2 t2"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'p2',
        options: [
          { value: 'p2', label: 'давление p₂' },
          { value: 'v2', label: 'объём V₂' },
          { value: 't2', label: 'температуру T₂' },
        ],
      },
      { name: 'p1', label: 'Давление p₁', type: 'number', unit: 'kPa', defaultValue: 100, min: 0, step: 1 },
      { name: 'v1', label: 'Объём V₁', type: 'number', unit: 'L', defaultValue: 2, min: 0, step: 0.1 },
      { name: 't1', label: 'Температура T₁', type: 'number', unit: 'K', defaultValue: 300, min: 0, step: 1 },
      { name: 'p2', label: 'Давление p₂', type: 'number', unit: 'kPa', defaultValue: 100, min: 0, step: 1, showIf: { field: 'mode', oneOf: ['v2', 't2'] } },
      { name: 'v2', label: 'Объём V₂', type: 'number', unit: 'L', defaultValue: 1, min: 0, step: 0.1, showIf: { field: 'mode', oneOf: ['p2', 't2'] } },
      { name: 't2', label: 'Температура T₂', type: 'number', unit: 'K', defaultValue: 300, min: 0, step: 1, showIf: { field: 'mode', oneOf: ['p2', 'v2'] } },
    ],
    resultLabels: {
      "p2": "Давление p₂",
      "v2": "Объём V₂",
      "t2": "Температура T₂",
      "state1": "Состояние 1: p·V/T",
      "state2": "Состояние 2: p·V/T",
      "first": "Первое состояние",
    },
    howToUse: gasLawsContractContent.ru.howToUse,
    howItWorks: gasLawsContractContent.ru.howItWorks,
    example: gasLawsContractContent.ru.example,
    faq: gasLawsContractContent.ru.faq,
    disclaimer: gasLawsContractContent.ru.disclaimer,
    relatedCalculatorIds: ["ideal-gas-law", "moles", "pressure"],
  },
};
