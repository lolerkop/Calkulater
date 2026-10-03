import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { slopeCopyEn } from './copy.en';
import { slopeCopyUk } from './copy.uk';
import { slopeCopyDe } from './copy.de';
import { slopeCopyEs } from './copy.es';
import { slopeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'slope',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: slopeCopyEn, uk: slopeCopyUk, de: slopeCopyDe, es: slopeCopyEs },
  referenceCases: slopeReferenceCases,
  publishedExample: {
    inputs: { rise: 1.2, run: 8 },
    expected: ['15,00%'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'slope',
    name: 'Калькулятор уклона',
    slug: 'slope',
    fullPath: '/geometry/slope/',
    category: 'geometry',
    icon: 'triangle',
    popularity: 22,
    isNew: false,
    seoTitle: 'Калькулятор уклона: проценты, градусы и длина',
    h1: 'Калькулятор уклона',
    keywords: ['калькулятор уклона', 'уклон в процентах', 'угол наклона', 'уклон пандуса'],
    fields: [
      { name: 'rise', label: 'Подъём', type: 'number', unit: 'м', defaultValue: 1.2, signed: true, step: 0.1 },
      { name: 'run', label: 'Заложение', type: 'number', unit: 'м', defaultValue: 8, signed: true, step: 0.5 },
    ],
    resultLabels: {
      slope: 'Уклон',
      angle: 'Угол',
      ratio: 'Отношение',
      length: 'Длина наклона',
    },
    relatedCalculatorIds: ['geom-right-triangle', 'roof-area', 'geom-triangle'],
  },
};
