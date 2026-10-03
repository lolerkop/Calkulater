import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bonusCopyEn } from './copy.en';
import { bonusCopyUk } from './copy.uk';
import { bonusCopyDe } from './copy.de';
import { bonusCopyEs } from './copy.es';
import { bonusReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'bonus',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: { ...bonusCopyEn, ...contractContent.en }, uk: { ...bonusCopyUk, ...contractContent.uk }, de: { ...bonusCopyDe, ...contractContent.de }, es: { ...bonusCopyEs, ...contractContent.es } },
  referenceCases: bonusReferenceCases,
  publishedExample: {
    inputs: { salary: 145000, bonusPct: 35, taxPct: 13 },
    expected: ['44 152,50 ₽'],
  },
  presentation: {
    id: 'bonus',
    name: 'Калькулятор премии',
    slug: 'bonus',
    fullPath: '/finance/bonus/',
    category: 'finance',
    icon: 'wallet',
    popularity: 23,
    isNew: false,
    shortDescription: 'Премия к начислению и на руки по окладу, проценту и ставке налога.',
    seoTitle: 'Калькулятор премии: начисление и сумма на руки',
    seoDescription:
      'Рассчитайте премию до налога и сумму на руки по окладу, проценту премии и ставке налога на доходы физических лиц.',
    h1: 'Калькулятор премии',
    keywords: ['калькулятор премии', 'премия на руки', 'процент премии', 'налог с премии'],
    fields: [
      { name: 'salary', label: 'Оклад', unit: '₽', type: 'number', defaultValue: 145000, min: 0, step: 5000 },
      { name: 'bonusPct', label: 'Премия, % от оклада', type: 'number', defaultValue: 35, min: 0, step: 5 },
      { name: 'taxPct', label: 'Ставка налога на доходы, %', type: 'number', defaultValue: 13, min: 0, max: 99, step: 1 },
    ],
    resultLabels: {
      net: 'Премия на руки',
      gross: 'Премия до налога',
      tax: 'Налог',
      salary: 'Оклад',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['income-tax-calculator', 'workday-cost', 'work-hours'],
  },
};
