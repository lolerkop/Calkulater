import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { gravitationalForceCopyEn } from './copy.en';
import { gravitationalForceCopyUk } from './copy.uk';
import { gravitationalForceCopyDe } from './copy.de';
import { gravitationalForceCopyEs } from './copy.es';
import { gravitationalForceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'gravitational-force',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: gravitationalForceCopyEn, uk: gravitationalForceCopyUk, de: gravitationalForceCopyDe, es: gravitationalForceCopyEs },
  referenceCases: gravitationalForceReferenceCases,
  publishedExample: {
    inputs: { m1: 50000000, m2: 50000000, r: 100 },
    expected: ['16,685 Н'],
  },
  presentation: {
    id: 'gravitational-force',
    name: 'Калькулятор гравитационной силы',
    slug: 'gravitational-force',
    fullPath: '/physics/gravitational-force/',
    category: 'physics',
    icon: 'globe',
    popularity: 22,
    isNew: false,
    shortDescription: 'Притяжение двух тел по закону всемирного тяготения.',
    seoTitle: 'Калькулятор гравитационной силы между двумя телами',
    seoDescription:
      'Рассчитайте силу всемирного тяготения между двумя массами на заданном расстоянии вместе с ускорением первого тела.',
    h1: 'Калькулятор гравитационной силы',
    keywords: ['гравитационная сила', 'закон всемирного тяготения', 'постоянная G', 'притяжение тел'],
    fields: [
      // Keep the established UI mass ceiling; the numerical engine remains independently guarded.
      { name: 'm1', label: "Первая масса", type: 'number', defaultValue: 1000, min: 0, max: 1e18, step: 100 , unit: "кг" },
      { name: 'm2', label: "Вторая масса", type: 'number', defaultValue: 1000, min: 0, max: 1e18, step: 100 , unit: "кг" },
      { name: 'r', label: "Расстояние между центрами", type: 'number', defaultValue: 2, min: 0, step: 0.5 , unit: "м" },
    ],
    resultLabels: {
      force: 'Сила притяжения',
      acceleration: 'Ускорение первого тела',
      distance: 'Расстояние',
    },
    relatedCalculatorIds: ['newton-force', 'centripetal-force', 'potential-energy'],
      ...contract.ru,
  },
};
