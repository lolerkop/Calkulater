import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { hookeLawCopyEn } from './copy.en';
import { hookeLawCopyUk } from './copy.uk';
import { hookeLawCopyDe } from './copy.de';
import { hookeLawCopyEs } from './copy.es';
import { hookeLawReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "hooke-law",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: hookeLawCopyEn, uk: hookeLawCopyUk, de: hookeLawCopyDe, es: hookeLawCopyEs },
  referenceCases: hookeLawReferenceCases,
  publishedExample: { inputs: { mode: 'force', k: 200, x: 0.05, f: 10 }, expected: ["10 Н"] },
  presentation: {
    id: "hooke-law",
    name: "Калькулятор закона Гука",
    slug: "zakon-guka",
    fullPath: "/physics/zakon-guka/",
    category: "physics",
    icon: "move-right",
    popularity: 33,
    isNew: false,
    shortDescription: "Сила пружины, её удлинение или жёсткость и запасённая энергия.",
    seoTitle: "Калькулятор закона Гука — сила, удлинение, жёсткость пружины",
    seoDescription: "Рассчитайте силу пружины, её удлинение или жёсткость по закону Гука F = k·x, а также запасённую энергию.",
    h1: "Калькулятор закона Гука",
    keywords: ["закон гука", "жёсткость пружины", "сила упругости", "энергия пружины"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'force',
        options: [
          { value: 'force', label: 'удерживающую силу' },
          { value: 'extension', label: 'удлинение' },
          { value: 'stiffness', label: 'жёсткость' },
        ],
      },
      { name: 'k', label: "Жёсткость", type: 'number', defaultValue: 200, min: 0, step: 10 , unit: "Н/м", showIf: { field: 'mode', oneOf: ["force","extension"] } },
      { name: 'x', label: "Удлинение или сжатие", type: 'number', defaultValue: 0.05, signed: true, step: 0.01 , unit: "м", showIf: { field: 'mode', oneOf: ["force","stiffness"] } },
      { name: 'f', label: "Сила", type: 'number', defaultValue: 10, signed: true, step: 1 , unit: "Н", showIf: { field: 'mode', oneOf: ["extension","stiffness"] } },
    ],
    resultLabels: {
      "force": "Сила",
      "extension": "Удлинение",
      "stiffness": "Жёсткость",
      "energy": "Энергия пружины",
    },
    relatedCalculatorIds: ["potential-energy", "newton-force", "kinetic-energy"],
      ...contract.ru,
  },
};
