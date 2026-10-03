import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { centripetalForceCopyEn } from './copy.en';
import { centripetalForceCopyUk } from './copy.uk';
import { centripetalForceCopyDe } from './copy.de';
import { centripetalForceCopyEs } from './copy.es';
import { centripetalForceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'centripetal-force',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: centripetalForceCopyEn, uk: centripetalForceCopyUk, de: centripetalForceCopyDe, es: centripetalForceCopyEs },
  referenceCases: centripetalForceReferenceCases,
  publishedExample: {
    inputs: { m: 1200, v: 15, r: 40 },
    expected: ['6 750 Н'],
  },
  presentation: {
    id: 'centripetal-force',
    name: 'Калькулятор центростремительной силы',
    slug: 'centripetal-force',
    fullPath: '/physics/centripetal-force/',
    category: 'physics',
    icon: 'gauge',
    popularity: 22,
    isNew: false,
    shortDescription: 'Центростремительная сила, ускорение, угловая скорость и период обращения.',
    seoTitle: 'Калькулятор центростремительной силы и ускорения',
    seoDescription:
      'Рассчитайте центростремительную силу по массе, скорости и радиусу вместе с центростремительным ускорением, угловой скоростью и периодом обращения.',
    h1: 'Калькулятор центростремительной силы',
    keywords: ['центростремительная сила', 'движение по окружности', 'угловая скорость', 'период обращения'],
    fields: [
      { name: 'm', label: "Масса", type: 'number', defaultValue: 1200, min: 0, step: 10 , unit: "кг" },
      { name: 'v', label: "Скорость по окружности", type: 'number', defaultValue: 15, min: 0, step: 1 , unit: "м/с" },
      { name: 'r', label: "Радиус", type: 'number', defaultValue: 40, min: 0, step: 1 , unit: "м" },
    ],
    resultLabels: {
      force: 'Центростремительная сила',
      acceleration: 'Центростремительное ускорение',
      omega: 'Угловая скорость',
      period: 'Период обращения',
    },
    relatedCalculatorIds: ['newton-force', 'kinetic-energy', 'momentum'],
      ...contract.ru,
  },
};
