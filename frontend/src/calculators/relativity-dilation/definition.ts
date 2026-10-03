import { relativityDilationContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { relativityDilationCopyEn } from './copy.en';
import { relativityDilationCopyUk } from './copy.uk';
import { relativityDilationCopyDe } from './copy.de';
import { relativityDilationCopyEs } from './copy.es';
import { relativityDilationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "relativity-dilation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: relativityDilationCopyEn, uk: relativityDilationCopyUk, de: relativityDilationCopyDe, es: relativityDilationCopyEs },
  referenceCases: relativityDilationReferenceCases,
  publishedExample: { inputs: { beta: 0.5, properTime: 1 }, expected: ["1,155 с"] },
  presentation: {
    id: "relativity-dilation",
    name: "Калькулятор замедления времени",
    slug: "zamedlenie-vremeni",
    fullPath: "/physics/zamedlenie-vremeni/",
    category: "physics",
    icon: "clock",
    popularity: 29,
    isNew: false,
    shortDescription: "Множитель Лоренца, замедление времени и сокращение длины.",

    seoTitle: "Калькулятор замедления времени — множитель Лоренца",
    seoDescription: "Рассчитайте множитель Лоренца, замедление времени и сокращение длины по доле скорости света.",
    h1: "Калькулятор замедления времени",
    keywords: ["замедление времени", "множитель Лоренца", "сокращение длины", "теория относительности"],
    fields: [
      { name: 'beta', label: 'Доля скорости света', type: 'number', defaultValue: 0.5, min: 0, step: 0.05 },
      { name: 'properTime', label: 'Собственное время', unit: 'с', type: 'number', defaultValue: 1, min: 0, step: 1 },
    ],
    resultLabels: {
      "dilated": "Замедленное время",
      "gamma": "Множитель Лоренца",
      "contraction": "Длина от собственной",
      "speed": "Скорость",
      "difference": "Разница во времени",
    },




    ...relativityDilationContractContent.ru,
    relatedCalculatorIds: ["escape-velocity", "kinetic-energy", "photon-energy"],
  },
};
