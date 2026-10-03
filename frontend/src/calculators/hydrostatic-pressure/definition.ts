import { contract } from './contractContent';
// Гидростатическое давление столба жидкости.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { hydrostaticPressureCopyEn } from './copy.en';
import { hydrostaticPressureCopyUk } from './copy.uk';
import { hydrostaticPressureCopyDe } from './copy.de';
import { hydrostaticPressureCopyEs } from './copy.es';
import { hydrostaticPressureReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'hydrostatic-pressure',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: hydrostaticPressureCopyEn, uk: hydrostaticPressureCopyUk, de: hydrostaticPressureCopyDe, es: hydrostaticPressureCopyEs },
  referenceCases: hydrostaticPressureReferenceCases,
  publishedExample: { inputs: { density: 1000, depth: 10, p0: 0 }, expected: ['0,9807 бар'] },
  presentation: {
    id: 'hydrostatic-pressure',
    name: 'Калькулятор гидростатического давления',
    slug: 'hydrostatic-pressure',
    fullPath: '/physics/hydrostatic-pressure/',
    category: 'physics',
    icon: 'atom',
    popularity: 42,
    isNew: false,
    shortDescription: 'Давление столба жидкости по плотности и глубине.',
    seoTitle: 'Калькулятор гидростатического давления — p = ρgh',
    seoDescription: 'Рассчитайте гидростатическое давление столба жидкости по плотности и глубине, с атмосферным давлением или без него.',
    h1: 'Калькулятор гидростатического давления',
    keywords: ['гидростатическое давление', 'давление столба жидкости', 'p=ρgh', 'давление на глубине'],
    fields: [
      { name: 'density', label: "Плотность жидкости", type: 'number', defaultValue: 1000, min: 0, step: 1 , unit: "кг/м³" },
      { name: 'depth', label: "Глубина", type: 'number', defaultValue: 10, min: 0, step: 0.1 , unit: "м" },
      { name: 'p0', label: "Внешнее давление", type: 'number', defaultValue: 0, min: 0, step: 1000, optional: true , unit: "Па" },
    ],
    resultLabels: { pressure: 'Давление', bar: 'В барах', kind: 'Тип давления', column: 'Давление столба' },
    relatedCalculatorIds: ['pressure', 'density', 'convert-pressure'],
      ...contract.ru,
  },
};
